"use strict";

const serviceContent = {
  web: {
    index: "01 / WEBSITES & E-COMMERCE", symbol: "</>", page: "services/web-development/", title: "Сайты и интернет-магазины.",
    description: "Лендинги, корпоративные сайты, каталоги и e-commerce с адаптивным интерфейсом, формами и нужными бизнес-интеграциями.",
    items: ["Адаптивный интерфейс для телефона и большого экрана", "Каталог, фильтры, корзина и сценарий оформления заказа", "Формы заявок и интеграции с вашими сервисами", "Базовая SEO-подготовка и оптимизация загрузки"]
  },
  systems: {
    index: "02 / CRM & SAAS", symbol: "#", page: "services/crm-development/", title: "CRM, кабинеты и SaaS.",
    description: "Внутренние системы для заявок, клиентов, ролей, статусов и аналитики. Интерфейс, API и база данных строятся под реальный процесс команды.",
    items: ["Личные кабинеты, роли и права доступа", "Заявки, клиенты, задачи и история взаимодействий", "Дашборды, отчёты и удобное управление данными", "API, база данных и интеграции с внешними системами"]
  },
  ai: {
    index: "03 / AI & AUTOMATION", symbol: "*", page: "services/ai-automation/", title: "AI-автоматизация и Telegram-боты.",
    description: "AI-агенты, обработка обращений, поиск по документам, уведомления и API-интеграции для повторяющихся рабочих операций.",
    items: ["AI-помощники и поиск по вашим материалам", "Telegram-боты и уведомления о важных событиях", "Обработка, категоризация и маршрутизация данных", "Связка сайта, CRM и рабочих инструментов через API"]
  },
  launch: {
    index: "04 / FROM ZERO TO LAUNCH", symbol: "↗", page: "services/product-development/", title: "MVP: от идеи до первой версии.",
    description: "Прототип, frontend, backend, данные и запуск в одном цикле. Состав MVP определяется по задаче, аудитории и критериям готовности.",
    items: ["Обсуждаем задачу, аудиторию и критерии готовности", "Определяем состав MVP и согласуем этапы", "Создаём интерфейс, серверную часть и интеграции", "Проверяем сценарии, запускаем и передаём исходники"]
  }
};

const menu = document.querySelector("#mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = [...document.querySelectorAll(".nav-pill a")];
const routeNames = new Set(["home", "work", "about", "contact", ...Object.keys(serviceContent)]);
const panels = [...document.querySelectorAll("dialog")];
const silentCloses = new WeakSet();
let activeDialog = null;
let returnFocus = null;
let toastTimer;

function closeSilently(dialog) {
  if (!dialog?.open) return;
  silentCloses.add(dialog);
  dialog.close();
}

function updateMenuState(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  document.body.classList.toggle("menu-open", open);
}

function renderService(route) {
  const content = serviceContent[route];
  document.querySelector("#service-index").textContent = content.index;
  document.querySelector("#service-symbol").textContent = content.symbol;
  document.querySelector("#service-title").textContent = content.title;
  document.querySelector("#service-description").textContent = content.description;
  document.querySelector("#service-page-link").href = content.page;
  const items = content.items.map(text => {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  });
  document.querySelector("#service-deliverables").replaceChildren(...items);
}

function renderRoute() {
  const requested = window.location.hash.slice(1) || "home";
  const route = routeNames.has(requested) ? requested : "home";
  const dialogId = serviceContent[route] ? "service" : route;
  const target = route === "home" ? null : document.getElementById(dialogId);

  panels.forEach(dialog => { if (dialog !== target) closeSilently(dialog); });
  updateMenuState(false);
  activeDialog = target;
  const navRoute = serviceContent[route] ? "home" : route;
  navLinks.forEach(link => {
    if (link.dataset.route === navRoute || link.hash === `#${navRoute}`) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (serviceContent[route]) renderService(route);
  if (target) {
    if (!target.open) target.showModal();
    target.scrollTop = 0;
  } else if (returnFocus?.isConnected && returnFocus.getClientRects().length) {
    returnFocus.focus({ preventScroll: true });
  }
}

function navigate(route, { replace = false } = {}) {
  if (!routeNames.has(route)) return;
  if (window.location.hash !== `#${route}`) {
    history[replace ? "replaceState" : "pushState"](null, "", `#${route}`);
  }
  renderRoute();
}

function dismiss(dialog) {
  if (dialog === menu) {
    closeSilently(menu);
    updateMenuState(false);
    activeDialog = null;
    menuToggle.focus({ preventScroll: true });
  } else {
    navigate("home", { replace: true });
  }
}

document.addEventListener("click", event => {
  const link = event.target.closest('a[data-route], a[href^="#"]');
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  const route = link.dataset.route || link.hash.slice(1);
  if (!routeNames.has(route)) return;
  event.preventDefault();
  if (!activeDialog) returnFocus = link;
  if (activeDialog === menu) returnFocus = menuToggle;
  navigate(route);
});

menuToggle.addEventListener("click", () => {
  if (menu.open) return dismiss(menu);
  returnFocus = menuToggle;
  activeDialog = menu;
  menu.showModal();
  updateMenuState(true);
});

panels.forEach(dialog => {
  dialog.querySelector("[data-close]").addEventListener("click", () => dismiss(dialog));
  dialog.addEventListener("cancel", event => {
    event.preventDefault();
    dismiss(dialog);
  });
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dismiss(dialog);
  });
  dialog.addEventListener("close", () => {
    if (silentCloses.delete(dialog)) return;
    if (activeDialog === dialog) dismiss(dialog);
  });
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("popstate", renderRoute);
window.addEventListener("resize", () => { if (window.innerWidth > 720 && menu.open) dismiss(menu); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && activeDialog?.open) {
    event.preventDefault();
    dismiss(activeDialog);
  }
});

function showToast(message) {
  const toast = document.querySelector("#toast");
  clearTimeout(toastTimer);
  (activeDialog?.open ? activeDialog : document.body).append(toast);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3500);
}

document.querySelector("#copy-brief").addEventListener("click", async () => {
  const field = document.querySelector("#project-brief");
  const brief = field.value.trim() || "Привет! Хочу обсудить с вами разработку проекта.";
  try {
    await navigator.clipboard.writeText(brief);
    showToast("Скопировано. Отправьте текст удобным способом.");
  } catch {
    if (!field.value.trim()) field.value = brief;
    field.focus();
    field.select();
    showToast("Выделил текст — скопируйте его вручную.");
  }
});

const video = document.querySelector(".bg-video");
const motionButton = document.querySelector(".motion-toggle");
const motionLabel = document.querySelector(".motion-label");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const networkLimited = Boolean(connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType));
let userPaused = reduceMotion.matches || networkLimited;

function updateVideoControl() {
  const paused = video.paused || reduceMotion.matches;
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.setAttribute("aria-label", paused ? "Включить фоновое видео" : "Приостановить фон");
  motionLabel.textContent = paused ? "Смотреть" : "Пауза";
}

function syncVideo() {
  if (reduceMotion.matches || userPaused || document.hidden) video.pause();
  else video.play().catch(() => updateVideoControl());
  motionButton.disabled = reduceMotion.matches;
  motionButton.title = reduceMotion.matches
    ? "Анимация отключена в настройках вашего устройства"
    : networkLimited && userPaused
      ? "Видео не загружается для экономии трафика. Можно включить вручную"
      : "Фоновое видео без звука";
  updateVideoControl();
}

motionButton.addEventListener("click", () => {
  userPaused = !userPaused;
  syncVideo();
});
video.addEventListener("play", updateVideoControl);
video.addEventListener("pause", updateVideoControl);
video.addEventListener("error", () => {
  motionButton.disabled = true;
  motionButton.title = "Показывается статичный фон";
});
document.addEventListener("visibilitychange", syncVideo);
reduceMotion.addEventListener("change", () => { userPaused = reduceMotion.matches; syncVideo(); });

document.querySelector("#year").textContent = new Date().getFullYear();
renderRoute();
syncVideo();
