#!/usr/bin/env python3
"""Notify IndexNow participants about URLs changed by a deployment."""
import json
from pathlib import Path
import urllib.request
import xml.etree.ElementTree as ET
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / "site.config.json").read_text(encoding="utf-8"))
SITE = CONFIG["siteUrl"].rstrip("/")
KEY = CONFIG["indexNowKey"]
HOST = urlparse(SITE).netloc

tree = ET.parse(ROOT / "sitemap.xml")
namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
urls = [node.text for node in tree.findall("sm:url/sm:loc", namespace) if node.text]
payload = json.dumps({
    "host": HOST,
    "key": KEY,
    "keyLocation": f"{SITE}/{KEY}.txt",
    "urlList": urls,
}).encode("utf-8")

request = urllib.request.Request(
    "https://yandex.com/indexnow",
    data=payload,
    headers={"Content-Type": "application/json; charset=utf-8", "User-Agent": "foxnaim-portfolio-deploy/1.0"},
    method="POST",
)
with urllib.request.urlopen(request, timeout=20) as response:
    if response.status not in {200, 202}:
        raise SystemExit(f"IndexNow returned HTTP {response.status}")
    print(f"IndexNow accepted {len(urls)} URLs (HTTP {response.status})")
