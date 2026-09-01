"use strict";

const demoTabs = [...document.querySelectorAll("[data-demo-tab]")];
const demoPanels = [...document.querySelectorAll(".demo-panel")];

function openDemo(name, focus = false) {
  demoTabs.forEach(tab => {
    const active = tab.dataset.demoTab === name;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });
  demoPanels.forEach(panel => { panel.hidden = panel.id !== `demo-${name}`; });
}

demoTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => openDemo(tab.dataset.demoTab));
  tab.addEventListener("keydown", event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowLeft') next = (index - 1 + demoTabs.length) % demoTabs.length;
    if (event.key === 'ArrowRight') next = (index + 1) % demoTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = demoTabs.length - 1;
    openDemo(demoTabs[next].dataset.demoTab, true);
  });
});

const crmLabels = { new: "Новая заявка", work: "В работе", done: "Готово" };

function updateCrmMetrics() {
  Object.keys(crmLabels).forEach(status => {
    const target = document.querySelector(`#crm-${status}`);
    if (target) target.textContent = String(document.querySelectorAll(`#crm-list [data-status="${status}"]`).length);
  });
}

document.querySelectorAll("#crm-list article").forEach(card => {
  const button = card.querySelector("button");
  button.addEventListener("click", () => {
    const next = card.dataset.status === "new" ? "work" : "done";
    card.dataset.status = next;
    card.querySelector("small").textContent = crmLabels[next];
    if (next === "done") {
      button.textContent = "Завершено";
      button.disabled = true;
    }
    updateCrmMetrics();
  });
});

document.querySelector("#ai-calculate")?.addEventListener("click", () => {
  const score = ["#ai-need", "#ai-time", "#ai-ready"].reduce((sum, selector) => sum + Number(document.querySelector(selector).value), 0);
  const result = document.querySelector("#ai-result");
  const label = score >= 80 ? "Высокий приоритет" : score >= 55 ? "Нужно уточнение" : "Ранний интерес";
  const explanation = score >= 80
    ? "Есть задача, готовность и короткий срок. Менеджеру стоит связаться первым."
    : score >= 55
      ? "Часть признаков готова. Сначала нужно уточнить результат и ограничения."
      : "Клиент пока изучает варианты. Полезнее дать материал и вернуться позже.";
  result.innerHTML = `<strong>${score} / 95 · ${label}</strong><span>${explanation}</span>`;
});

let selectedBookingTime = "";
document.querySelectorAll("[data-booking-time]").forEach(button => {
  button.addEventListener("click", () => {
    selectedBookingTime = button.dataset.bookingTime;
    document.querySelectorAll("[data-booking-time]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  });
});

document.querySelector("#booking-confirm")?.addEventListener("click", () => {
  const result = document.querySelector("#booking-result");
  if (!selectedBookingTime) {
    result.textContent = "Сначала выберите время.";
    return;
  }
  const service = document.querySelector("#booking-service").value;
  result.textContent = `${service} · ${selectedBookingTime}. Это локальное demo-подтверждение; запись никуда не отправлена.`;
});

let cartCount = 0;
let cartTotal = 0;
const money = new Intl.NumberFormat("ru-KZ");

function renderCart() {
  document.querySelector("#cart-count").textContent = `${cartCount} ${cartCount === 1 ? "товар" : cartCount > 1 && cartCount < 5 ? "товара" : "товаров"}`;
  document.querySelector("#cart-total").textContent = `${money.format(cartTotal)} ₸`;
}

document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    cartCount += 1;
    cartTotal += Number(button.dataset.price);
    renderCart();
  });
});

document.querySelector("#cart-clear")?.addEventListener("click", () => {
  cartCount = 0;
  cartTotal = 0;
  renderCart();
});
