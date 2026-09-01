"use strict";

const checklist = document.querySelector("[data-checklist]");

if (checklist) {
  const inputs = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const count = document.querySelector("#checklist-count");
  const progress = document.querySelector("#checklist-progress");
  const status = document.querySelector("#checklist-status");
  const storageKey = `foxnaim-checklist:${checklist.dataset.checklist}`;

  progress.max = inputs.length;

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(inputs.filter(input => input.checked).map(input => input.value)));
    } catch (_) {
      // The checklist still works when storage is blocked.
    }
  }

  function render() {
    const selected = inputs.filter(input => input.checked).length;
    count.textContent = `${selected} / ${inputs.length}`;
    progress.value = selected;
    progress.textContent = `${selected} из ${inputs.length}`;
  }

  try {
    const saved = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
    inputs.forEach(input => { input.checked = saved.has(input.value); });
  } catch (_) {
    // Invalid or unavailable local storage should not block the page.
  }
  render();

  inputs.forEach(input => input.addEventListener("change", () => {
    save();
    render();
    status.textContent = "Сохранено на этом устройстве.";
  }));

  document.querySelector("#reset-checklist")?.addEventListener("click", () => {
    inputs.forEach(input => { input.checked = false; });
    save();
    render();
    status.textContent = "Чек-лист очищен.";
  });

  document.querySelector("#copy-checklist")?.addEventListener("click", async () => {
    const groups = [...checklist.querySelectorAll(".checklist-group")];
    const lines = [document.querySelector("h1").textContent.trim(), ""];
    groups.forEach(group => {
      lines.push(group.querySelector("legend").textContent.replace(/^\s*\d+\s*/, "").trim());
      group.querySelectorAll("label").forEach(label => {
        const input = label.querySelector("input");
        lines.push(`${input.checked ? "✓" : "○"} ${input.value}`);
      });
      lines.push("");
    });
    const text = lines.join("\n").trim();
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "Результат скопирован.";
    } catch (_) {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.append(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      status.textContent = "Результат скопирован.";
    }
  });
}
