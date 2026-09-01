#!/usr/bin/env python3
"""Build a static GitHub activity snapshot for the portfolio."""
from collections import Counter
from datetime import datetime, timezone
import json
import os
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "github-activity.json"
USERNAME = "foxnaim"
TOKEN = os.environ.get("GITHUB_TOKEN", "")


def api(path):
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "foxnaim-portfolio-build",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    if TOKEN:
        headers["Authorization"] = f"Bearer {TOKEN}"
    request = Request(f"https://api.github.com{path}", headers=headers)
    with urlopen(request, timeout=20) as response:
        return json.load(response)


def build_snapshot():
    user = api(f"/users/{USERNAME}")
    repos = api(f"/users/{USERNAME}/repos?per_page=100&sort=pushed&type=owner")
    visible = [repo for repo in repos if not repo.get("fork") and not repo.get("archived")]
    latest = sorted(visible, key=lambda repo: repo.get("pushed_at") or "", reverse=True)[:8]
    languages = Counter(repo.get("language") for repo in visible if repo.get("language"))
    return {
        "source": f"https://github.com/{USERNAME}",
        "generatedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "publicRepos": user.get("public_repos", len(repos)),
        "originalActiveRepos": len(visible),
        "topLanguages": [{"name": name, "repos": count} for name, count in languages.most_common(6)],
        "latest": [
            {
                "name": repo["name"],
                "url": repo["html_url"],
                "description": repo.get("description") or "",
                "language": repo.get("language") or "",
                "pushedAt": repo.get("pushed_at"),
                "stars": repo.get("stargazers_count", 0),
            }
            for repo in latest
        ],
    }


def main():
    try:
        snapshot = build_snapshot()
    except Exception as error:
        if OUTPUT.exists():
            print(f"GitHub snapshot update skipped; keeping existing file: {type(error).__name__}")
            return
        raise
    OUTPUT.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n")
    print(f"GitHub snapshot updated: {snapshot['publicRepos']} public repositories")


if __name__ == "__main__":
    main()
