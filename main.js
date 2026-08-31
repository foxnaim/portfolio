"use strict";

const serviceContent = {
  web: {
    index: "01 / WEBSITES & E-COMMERCE", symbol: "</>", title: "Сайт, который работает на вас.",
    description: "Лендинг, корпоративный сайт или интернет-магазин. Помогу понятно рассказать о продукте и сделать путь от первого знакомства до заявки удобным.",
    items: ["Адаптивный интерфейс для телефона и большого экрана", "Каталог, фильтры, корзина и сценарий оформления заказа", "Формы заявок и интеграции с вашими сервисами", "Базовая SEO-подготовка и оптимизация загрузки"]
  },
  systems: {
    index: "02 / CRM & SAAS", symbol: "#", title: "Порядок в бизнес-процессах.",
    description: "Когда таблиц и переписок уже недостаточно, нужна система под ваш процесс. Создам рабочий инструмент для команды или основу нового SaaS-продукта.",
    items: ["Личные кабинеты, роли и права доступа", "Заявки, клиенты, задачи и история взаимодействий", "Дашборды, отчёты и удобное управление данными", "API, база данных и интеграции с внешними системами"]
  },
  ai: {
    index: "03 / AI & AUTOMATION", symbol: "*", title: "Рутину — автоматизации.",
    description: "Найду, где AI и автоматизация будут полезны именно вашей задаче. Без AI ради AI: начинаем с процесса, который отнимает время.",
    items: ["AI-помощники и поиск по вашим материалам", "Telegram-боты и уведомления о важных событиях", "Обработка, категоризация и маршрутизация данных", "Связка сайта, CRM и рабочих инструментов через API"]
  },
  launch: {
    index: "04 / FROM ZERO TO LAUNCH", symbol: "↗", title: "Из «а что, если» — в продукт.",
    description: "Есть идея, но пока нет технического задания? Помогу выделить главное, собрать первую версию и подготовить её к запуску.",
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
    if (link.hash === `#${navRoute}`) link.setAttribute("aria-current", "page");
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
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  const route = link.hash.slice(1);
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
    showToast("Скопировано. Вставьте текст в Instagram Direct.");
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
let userPaused = reduceMotion.matches;
let localVideoFallbackUsed = false;

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
  motionButton.title = reduceMotion.matches ? "Анимация отключена в настройках вашего устройства" : "Фоновое видео без звука";
  updateVideoControl();
}

motionButton.addEventListener("click", () => {
  userPaused = !video.paused;
  syncVideo();
});
video.addEventListener("play", updateVideoControl);
video.addEventListener("pause", updateVideoControl);
// Keep the supplied CloudFront source primary; a local copy is available if the CDN fails.
function useLocalVideo() {
  if (localVideoFallbackUsed) return;
  localVideoFallbackUsed = true;
  video.src = "assets/background.mp4";
  video.load();
  syncVideo();
}
video.querySelector("source").addEventListener("error", useLocalVideo);
// The original MP4 is large and has its metadata at the end. Keep the page
// responsive on a slow connection by switching to the optimized local copy.
let videoWaitTimer = setTimeout(() => {
  if (video.readyState < 3 && !reduceMotion.matches) useLocalVideo();
}, 2200);
video.addEventListener("waiting", () => {
  clearTimeout(videoWaitTimer);
  videoWaitTimer = setTimeout(() => {
    if (!userPaused && !reduceMotion.matches) useLocalVideo();
  }, 2200);
});
video.addEventListener("playing", () => clearTimeout(videoWaitTimer));
video.addEventListener("error", () => {
  if (!localVideoFallbackUsed) useLocalVideo();
  else { motionButton.disabled = true; motionButton.title = "Показывается статичный фон"; }
});
document.addEventListener("visibilitychange", syncVideo);
reduceMotion.addEventListener("change", () => { userPaused = reduceMotion.matches; syncVideo(); });

document.querySelector("#year").textContent = new Date().getFullYear();
renderRoute();
syncVideo();
