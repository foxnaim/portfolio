"use strict";

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const projectCards = [...document.querySelectorAll(".seo-project[data-categories]")];
const projectGroups = [...document.querySelectorAll("[data-project-group]")];
const catalogCount = document.querySelector("#catalog-count");
const emptyState = document.querySelector(".catalog-empty");

function applyFilter(filter) {
  let visibleCount = 0;

  projectCards.forEach(card => {
    const categories = card.dataset.categories.split(" ");
    const visible = filter === "all" || categories.includes(filter);
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  projectGroups.forEach(group => {
    group.hidden = !group.querySelector(".seo-project:not([hidden])");
  });

  filterButtons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });

  catalogCount.textContent = String(visibleCount);
  emptyState.hidden = visibleCount > 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

