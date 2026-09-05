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

const selectorRecommendations = {
  web: {
    label: "Сайт или интернет-магазин",
    description: "Начать стоит со структуры предложения и одного главного пути: от первого экрана до заявки или покупки.",
    page: "services/web-development/",
    brief: "сайт, каталог или интернет-магазин",
    scope: ["Структура и основной пользовательский путь", "Адаптивный интерфейс", "Форма заявки или корзина", "Базовая аналитика и техническое SEO"]
  },
  crm: {
    label: "CRM, кабинет или SaaS",
    description: "Первая версия должна собрать роли, данные, статусы и одно действие, которое сейчас отнимает больше всего времени.",
    page: "services/crm-development/",
    brief: "CRM, личный кабинет или SaaS-систему",
    scope: ["Роли и права", "Основные сущности и статусы", "История действий", "Один полезный отчёт"]
  },
  ai: {
    label: "AI-автоматизация или Telegram-бот",
    description: "Лучший старт — один повторяющийся сценарий на реальных примерах с логами и возможностью ручного контроля.",
    page: "services/ai-automation/",
    brief: "AI-автоматизацию, интеграцию или Telegram-бота",
    scope: ["Один повторяющийся сценарий", "Реальные входные примеры", "Логи и обработка ошибок", "Ручное подтверждение важных действий"]
  },
  mvp: {
    label: "Рабочий MVP",
    description: "Нужно выделить основную гипотезу и собрать минимальный путь пользователя с интерфейсом, данными и критериями готовности.",
    page: "services/product-development/",
    brief: "первую версию нового продукта",
    scope: ["Главная гипотеза", "Один полный путь пользователя", "Интерфейс, API и данные", "Критерии готовности и обратная связь"]
  }
};

const selectorEstimateRules = {
  goals: {
    web: { min: 150000, max: 300000, weeks: [1, 2] },
    crm: { min: 800000, max: 1400000, weeks: [4, 8] },
    ai: { min: 200000, max: 500000, weeks: [1, 5] },
    mvp: { min: 450000, max: 900000, weeks: [3, 5] }
  },
  stage: {
    idea: { min: 40000, max: 80000, weeks: 1 },
    prototype: { min: 0, max: 0, weeks: 0 },
    process: { min: 60000, max: 120000, weeks: 1 },
    legacy: { min: 160000, max: 280000, weeks: 2 }
  },
  audience: {
    clients: { min: 0, max: 0, weeks: 0 },
    team: { min: 80000, max: 140000, weeks: 1 },
    both: { min: 140000, max: 260000, weeks: 2 },
    public: { min: 100000, max: 200000, weeks: 1 }
  },
  integration: {
    none: { min: 0, max: 0, weeks: 0 },
    telegram: { min: 100000, max: 180000, weeks: 1 },
    crm: { min: 180000, max: 320000, weeks: 2 },
    payments: { min: 250000, max: 450000, weeks: 2 },
    multiple: { min: 350000, max: 650000, weeks: 3 }
  },
  time: {
    fast: { multiplier: 1.18, maxWeeks: 2 },
    mvp: { multiplier: 1.08, maxWeeks: 5 },
    system: { multiplier: 1.03, maxWeeks: 8 },
    flexible: { multiplier: 1, maxWeeks: Infinity }
  }
};

function roundEstimate(value) {
  return Math.ceil(value / 10000) * 10000;
}

function calculateSelectorEstimate(goal, values) {
  const base = selectorEstimateRules.goals[goal];
  const stage = selectorEstimateRules.stage[values.stage];
  const audience = selectorEstimateRules.audience[values.audience];
  const integration = selectorEstimateRules.integration[values.integration];
  const timing = selectorEstimateRules.time[values.time];
  const additions = [stage, audience, integration];
  const extraWeeks = additions.reduce((sum, item) => sum + item.weeks, 0);
  const min = roundEstimate((base.min + additions.reduce((sum, item) => sum + item.min, 0)) * timing.multiplier);
  const max = roundEstimate((base.max + additions.reduce((sum, item) => sum + item.max, 0)) * timing.multiplier);
  return {
    min,
    max,
    weeks: [base.weeks[0] + Math.floor(extraWeeks / 2), base.weeks[1] + extraWeeks],
    targetIsTight: timing.maxWeeks < base.weeks[1] + extraWeeks
  };
}

function localeData() {
  return window.PortfolioI18n?.data?.();
}

function activeServiceContent() {
  return localeData()?.services || serviceContent;
}

function activeRecommendations() {
  return localeData()?.selector?.recommendations || selectorRecommendations;
}

function runtimeCopy(key, fallback) {
  return localeData()?.runtime?.[key] || fallback;
}

function track(name, properties = {}) {
  window.FoxnaimAnalytics?.track(name, properties);
}

function documentPath(path) {
  return window.location.protocol === "file:" && path.endsWith("/") ? `${path}index.html` : path;
}

const menu = document.querySelector("#mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = [...document.querySelectorAll(".nav-pill a")];
const routeNames = new Set(["home", "work", "about", "contact", "selector", ...Object.keys(serviceContent)]);
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
  menuToggle.setAttribute("aria-label", open ? runtimeCopy("closeMenu", "Закрыть меню") : runtimeCopy("openMenu", "Открыть меню"));
  document.body.classList.toggle("menu-open", open);
}

function renderService(route) {
  const content = activeServiceContent()[route];
  document.querySelector("#service-index").textContent = content.index;
  document.querySelector("#service-symbol").textContent = content.symbol;
  document.querySelector("#service-title").textContent = content.title;
  document.querySelector("#service-description").textContent = content.description;
  document.querySelector("#service-page-link").href = documentPath(content.page);
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

async function copyBrief() {
  const field = document.querySelector("#project-brief");
  const fallbackBrief = window.PortfolioI18n?.language?.() === "en"
    ? "Hi! I would like to discuss a development project."
    : window.PortfolioI18n?.language?.() === "kk"
      ? "Сәлем! Әзірлеу жобасын талқылағым келеді."
      : "Привет! Хочу обсудить с вами разработку проекта.";
  const brief = field.value.trim() || fallbackBrief;
  try {
    await navigator.clipboard.writeText(brief);
    showToast(runtimeCopy("copied", "Скопировано"));
  } catch {
    if (!field.value.trim()) field.value = brief;
    field.focus();
    field.select();
    showToast(runtimeCopy("copyFailed", "Не удалось скопировать"));
  }
}

document.querySelector("#copy-brief").addEventListener("click", copyBrief);
document.querySelector("#copy-open-instagram").addEventListener("click", () => {
  copyBrief();
  track("instagram_opened", { location: "contact", flow: "brief" });
});

const selectorGoalButtons = [...document.querySelectorAll("[data-selector-goal]")];
const selectorTimeButtons = [...document.querySelectorAll("[data-selector-time]")];
const selectorStage = document.querySelector("#selector-stage");
const selectorAudience = document.querySelector("#selector-audience");
const selectorIntegration = document.querySelector("#selector-integration");
const selectorResult = document.querySelector("#selector-result");
const selectorResultTitle = document.querySelector("#selector-result-title");
const selectorResultCopy = document.querySelector("#selector-result-copy");
const selectorResultScope = document.querySelector("#selector-result-scope");
const selectorBudget = document.querySelector("#selector-budget");
const selectorTimeline = document.querySelector("#selector-timeline");
const selectorEstimateReason = document.querySelector("#selector-estimate-reason");
const selectorDetail = document.querySelector("#selector-detail");
const selectorContact = document.querySelector("#selector-contact");
let selectedGoal = "";
let selectedTime = "flexible";

function selectorValues() {
  return {
    stage: selectorStage.value,
    audience: selectorAudience.value,
    integration: selectorIntegration.value,
    time: selectedTime
  };
}

function selectorBrief() {
  if (!selectedGoal) return "";
  const values = selectorValues();
  const estimate = calculateSelectorEstimate(selectedGoal, values);
  if (window.PortfolioI18n?.formatBrief) return window.PortfolioI18n.formatBrief(selectedGoal, values, estimate);
  const recommendation = activeRecommendations()[selectedGoal];
  return `Привет! Хочу обсудить ${recommendation.brief}. Сейчас: ${selectorStage.selectedOptions[0].textContent}. Пользователи: ${selectorAudience.selectedOptions[0].textContent}. Интеграция: ${selectorIntegration.selectedOptions[0].textContent}. Срок: ${selectorTimeButtons.find(button => button.dataset.selectorTime === selectedTime)?.textContent}.`;
}

function updateSelector() {
  if (!selectedGoal) return;
  const recommendation = activeRecommendations()[selectedGoal];
  const values = selectorValues();
  const estimate = calculateSelectorEstimate(selectedGoal, values);
  selectorResult.hidden = false;
  selectorResultTitle.textContent = recommendation.label;
  selectorResultCopy.textContent = window.PortfolioI18n?.formatResult
    ? window.PortfolioI18n.formatResult(selectedGoal, values)
    : recommendation.description;
  const scope = window.PortfolioI18n?.scope
    ? window.PortfolioI18n.scope(selectedGoal, selectorIntegration.value)
    : [...recommendation.scope, selectorIntegration.selectedOptions[0].textContent];
  selectorResultScope.replaceChildren(...scope.map(copy => {
    const item = document.createElement("li");
    item.textContent = copy;
    return item;
  }));
  selectorBudget.textContent = window.PortfolioI18n?.formatBudget
    ? window.PortfolioI18n.formatBudget(estimate.min, estimate.max)
    : recommendation.budget;
  selectorTimeline.textContent = window.PortfolioI18n?.formatTimeline
    ? window.PortfolioI18n.formatTimeline(estimate.weeks, values.time, estimate.targetIsTight)
    : recommendation.timeline;
  if (selectorEstimateReason) {
    selectorEstimateReason.textContent = window.PortfolioI18n?.estimateReason
      ? window.PortfolioI18n.estimateReason(values)
      : "";
  }
  selectorDetail.href = documentPath(recommendation.page);
  selectorDetail.dataset.offer = selectedGoal;
}

selectorGoalButtons.forEach(button => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    selectedGoal = button.dataset.selectorGoal;
    selectorGoalButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    updateSelector();
    track("selector_goal_selected", { goal: selectedGoal });
  });
});

selectorTimeButtons.forEach(button => {
  button.setAttribute("aria-pressed", String(button.dataset.selectorTime === selectedTime));
  button.addEventListener("click", () => {
    selectedTime = button.dataset.selectorTime;
    selectorTimeButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    updateSelector();
  });
});

[selectorStage, selectorAudience, selectorIntegration].forEach(select => select.addEventListener("change", updateSelector));
selectorContact.addEventListener("click", () => {
  const brief = selectorBrief();
  if (brief) document.querySelector("#project-brief").value = brief;
  const values = selectorValues();
  const estimate = selectedGoal ? calculateSelectorEstimate(selectedGoal, values) : null;
  track("selector_completed", { goal: selectedGoal || "unknown", ...values, budget_min: estimate?.min, budget_max: estimate?.max });
});

const video = document.querySelector(".bg-video");
const motionButton = document.querySelector(".motion-toggle");
const motionLabel = document.querySelector(".motion-label");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const compactViewport = window.matchMedia("(max-width: 720px)");
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const networkLimited = Boolean(connection?.saveData || ["slow-2g", "2g", "3g"].includes(connection?.effectiveType));
let videoReady = false;
let userPaused = reduceMotion.matches || networkLimited || compactViewport.matches;

if (!reduceMotion.matches && !networkLimited) {
  document.querySelectorAll(".project-preview").forEach(preview => {
    const project = preview.closest(".project");
    if (!project) return;
    const art = project.querySelector(".project-art");
    const play = () => preview.play().catch(() => {});
    const stop = () => {
      preview.pause();
      preview.classList.remove("is-playing");
      art.classList.remove("preview-active");
    };
    preview.addEventListener("playing", () => {
      preview.classList.add("is-playing");
      art.classList.add("preview-active");
    });
    project.addEventListener("pointerenter", play);
    project.addEventListener("pointerleave", stop);
    project.addEventListener("focusin", play);
    project.addEventListener("focusout", event => { if (!project.contains(event.relatedTarget)) stop(); });
  });
}

if (window.location.protocol === "file:") {
  document.querySelectorAll('a[href$="/"]:not([data-route])').forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.includes("://") && !href.startsWith("#")) link.setAttribute("href", `${href}index.html`);
  });
}

function updateVideoControl() {
  const paused = video.paused || reduceMotion.matches;
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.setAttribute("aria-label", paused ? runtimeCopy("playAria", "Включить фоновое видео") : runtimeCopy("pauseAria", "Приостановить фон"));
  motionLabel.textContent = paused ? runtimeCopy("play", "Смотреть") : runtimeCopy("pause", "Пауза");
}

function syncVideo() {
  if (reduceMotion.matches || userPaused || document.hidden || !videoReady) video.pause();
  else video.play().catch(() => updateVideoControl());
  motionButton.disabled = reduceMotion.matches;
  motionButton.title = reduceMotion.matches
    ? runtimeCopy("reduced", "Анимация отключена в настройках вашего устройства")
    : networkLimited && userPaused
      ? runtimeCopy("network", "Видео не загружается для экономии трафика")
      : compactViewport.matches && userPaused
        ? runtimeCopy("mobileVideo", "На телефоне видео запускается вручную")
      : runtimeCopy("video", "Фоновое видео без звука");
  updateVideoControl();
}

motionButton.addEventListener("click", () => {
  if (video.paused) {
    videoReady = true;
    userPaused = false;
  } else {
    userPaused = true;
  }
  syncVideo();
});
video.addEventListener("play", updateVideoControl);
video.addEventListener("pause", updateVideoControl);
video.addEventListener("error", () => {
  motionButton.disabled = true;
  motionButton.title = runtimeCopy("staticBackground", "Показывается статичный фон");
});
document.addEventListener("visibilitychange", syncVideo);
reduceMotion.addEventListener("change", () => { userPaused = reduceMotion.matches; syncVideo(); });
compactViewport.addEventListener("change", event => {
  if (event.matches) userPaused = true;
  syncVideo();
});

function scheduleBackgroundVideo() {
  if (reduceMotion.matches || networkLimited || compactViewport.matches) return;
  const start = () => window.setTimeout(() => {
    if (userPaused) return;
    videoReady = true;
    syncVideo();
  }, 5000);
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}

document.querySelector("#year").textContent = new Date().getFullYear();
window.addEventListener("portfolio:language", () => {
  const route = window.location.hash.slice(1);
  if (serviceContent[route]) renderService(route);
  if (selectedGoal) updateSelector();
  updateMenuState(menu.open);
  syncVideo();
});
renderRoute();
syncVideo();
scheduleBackgroundVideo();
