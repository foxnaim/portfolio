"use strict";

const activityRoot = document.querySelector("#github-latest");

if (activityRoot) {
  fetch("../github-activity.json", { cache: "no-cache" })
    .then(response => {
      if (!response.ok) throw new Error(`Snapshot ${response.status}`);
      return response.json();
    })
    .then(data => {
      document.querySelector("#github-total").textContent = String(data.publicRepos || "58");
      document.querySelector("#github-updated").textContent = new Intl.DateTimeFormat("ru", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(data.generatedAt));
      activityRoot.replaceChildren();
      (data.latest || []).slice(0, 5).forEach(repo => {
        const link = document.createElement("a");
        link.href = repo.url;
        link.rel = "noopener";
        const copy = document.createElement("span");
        const title = document.createElement("strong");
        const meta = document.createElement("small");
        title.textContent = repo.name;
        meta.textContent = [repo.language || "Code", repo.description || "Публичный репозиторий"].join(" · ");
        copy.append(title, meta);
        const date = document.createElement("time");
        date.dateTime = repo.pushedAt;
        date.textContent = new Intl.DateTimeFormat("ru", { day: "2-digit", month: "short" }).format(new Date(repo.pushedAt));
        link.append(copy, date);
        activityRoot.append(link);
      });
    })
    .catch(() => {
      activityRoot.textContent = "Статический снимок временно недоступен. Все репозитории остаются доступны напрямую на GitHub.";
    });
}
