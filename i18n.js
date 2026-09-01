"use strict";

const portfolioLocales = {
  ru: {
    metaTitle: "Ян Павлов — full-stack разработчик | Сайты, CRM, SaaS, AI",
    metaDescription: "Ян Павлов — full-stack разработчик. Создаю сайты, CRM, SaaS, Telegram-боты и AI-автоматизации для бизнеса: от идеи до запуска.",
    static: {
      skip: "К содержанию", nav: ["Главная", "Проекты", "Обо мне", "Контакт"], headerCta: "На связи",
      availability: "Открыт к новым проектам", headline: ["Your idea.", "My next build."],
      subhead: "Создаю сайты, CRM и AI-автоматизации для бизнеса.<br class=\"desktop-break\"> Помогаю получать заявки и экономить время.",
      heroActions: ["Обсудим ваш проект", "Смотреть работы"], proof: ["в разработке", "репозиториев", "проектов в каталоге", "срок проекта"],
      selectorLink: "Не уверены, что нужно? Подобрать решение",
      services: [["Сайты и магазины", "Лендинги, каталоги и e-commerce"], ["CRM и SaaS", "Кабинеты, роли и бизнес-процессы"], ["AI и автоматизация", "AI-агенты, Telegram и API"], ["MVP под ключ", "Прототип, разработка и запуск"]],
      footerLinks: ["Решения", "Demo Lab", "GitHub", "Instagram", "Канал"], motion: ["Пауза", "Смотреть"],
      mobileTitle: "foxnaim / меню", mobileNav: ["Главная", "Проекты", "Решения", "Demo Lab", "Чек-листы", "Обо мне", "Партнёрам", "Контакт"], mobileProcess: "Этапы и условия",
      workKicker: "Код, который можно посмотреть", workTitle: "Реальные продукты.<br><span>И честные прототипы.</span>", workLink: "Страница проектов",
      workIntro: "Здесь пять сильных примеров «задача → решение». В полном каталоге — бизнес-системы, AI, SaaS, приложения и эксперименты; в GitHub уже 40+ публичных репозиториев с кодом.",
      workProof: ["избранных кейсов", "в каталоге", "репозиториев с кодом"],
      projectCopy: ["Интерактивный frontend-концепт квалификации заявок, lead score и подсказок следующего действия.", "Учёт рабочего времени через Telegram и QR-коды. Аналитика для команд и таймер для фрилансеров.", "Прототип пространства для заметок и задач с поиском, тегами и интерфейсами AI-функций.", "Интерактивный макет онлайн-записи: услуги, расписание, мини-CRM и кабинет администратора.", "Интерактивный макет Telegram-магазина: каталог, корзина, оформление и история заказов."],
      workFine: "На главной показана короткая подборка. Остальные решения, описания и ссылки собраны на отдельной странице проектов.",
      workButtons: ["Открыть весь каталог", "Готовые решения", "Попробовать Demo Lab", "Как проходит работа"],
      aboutKicker: "Привет, я Ян", aboutTitle: "Превращаю идеи.<br><span>В работающие продукты.</span>",
      aboutCopy: ["Увлекаюсь разработкой с 2017 года. Ещё в школе начал писать разные скрипты и собирать интерфейсы; сейчас создаю сайты, CRM, SaaS и AI-автоматизации.", "Свободно работаю из Казахстана и часто бываю в Алматы, Павлодаре, Семее и Астане. Люблю разные интересные задачи и, если заказчик согласен, предлагаю собственные идеи для улучшения продукта и автоматизации.", "Среди самостоятельных и командных проектов — AI-Таргетолог, Imperial, мобильное приложение One System и Leadflow. Особенно ценю заказчиков с чувством юмора и открытым диалогом."],
      aboutStatus: "Открыт к сотрудничеству", aboutLinks: ["Как проходит работа", "Партнёрам", "Контакт и первый шаг"],
      aboutFooter: "Код — на GitHub. Процессы и запуски — в Build with Yan.", aboutChannel: "Открыть канал",
      serviceKicker: "От задачи — к решению", serviceButton: "Этапы и состав услуги", serviceFine: "На странице услуги — подходящие задачи, состав работы и частые вопросы.", processLine: ["Задача", "Разработка", "Запуск"],
      selectorKicker: "Подбор за пару минут", selectorTitle: "Начнём с результата,<br><span>а не с технологии.</span>", selectorIntro: "Ответьте на пять коротких вопросов. Сайт предложит формат, состав первой версии и подготовит сообщение для Instagram.",
      selectorQuestions: ["Что должно измениться?", "Что уже есть?", "Кто будет пользоваться?", "Что нужно подключить?", "Желаемый срок"],
      selectorGoals: [["Получать заявки и продажи", "Сайт, каталог или магазин"], ["Навести порядок в процессе", "CRM, кабинет или SaaS"], ["Убрать ручную работу", "AI, бот или интеграция"], ["Проверить новую идею", "Прототип или MVP"]],
      stageOptions: ["Только идея", "Есть тексты или прототип", "Есть работающий процесс", "Есть старый продукт или система"],
      audienceOptions: ["Клиенты", "Команда", "Клиенты и команда", "Открытая аудитория"],
      integrationOptions: ["Пока ничего", "Telegram", "CRM или существующую систему", "Оплату или каталог", "Несколько сервисов"],
      timeOptions: ["1–2 недели", "3–5 недель", "До 2 месяцев", "Без жёсткого срока"], resultKicker: "Подходящий старт", scopeTitle: "Состав первой версии", resultActions: ["Посмотреть состав", "Подготовить сообщение"], selectorNote: "Подбор не рассчитывает стоимость и не отправляет данные. Ответы остаются только в браузере.",
      contactTop: "Для вашей следующей большой идеи", contactTitle: "Всё начинается<br><span>с «привет».</span>", contactIntro: "Расскажите о бизнесе, идее или задаче, которую хочется упростить. Вместе разберёмся, что стоит создать.", briefLabel: "Пара слов о вашем проекте", optional: "необязательно", placeholder: "Хочу сайт для… / Нужна система, которая…", contactButtons: ["Написать в Instagram", "Build with Yan", "Скопировать текст"], formNote: "Текст остаётся в этом окне. Скопируйте его и отправьте удобным способом — сайт ничего не отправляет автоматически."
    },
    services: {
      web: { index: "SERVICE / 01", symbol: "</>", title: "Сайты и магазины", description: "Создаю быстрые лендинги, корпоративные сайты, каталоги и e-commerce. Продумываю путь от первого экрана до заявки или покупки.", items: ["Структура под задачу бизнеса", "Адаптивный интерфейс", "Формы, каталог и интеграции", "Скорость и техническое SEO"], page: "services/web-development/" },
      systems: { index: "SERVICE / 02", symbol: "#", title: "CRM и SaaS", description: "Собираю внутренние системы, личные кабинеты и SaaS: роли, данные, статусы, отчёты и API в одном рабочем процессе.", items: ["Карта ролей и процессов", "Frontend, backend и база данных", "Права, история и отчёты", "Интеграции и развитие по этапам"], page: "services/crm-development/" },
      ai: { index: "SERVICE / 03", symbol: "*", title: "AI и автоматизация", description: "Автоматизирую повторяющиеся действия, подключаю Telegram, API и AI там, где можно измерить пользу и оставить ручной контроль.", items: ["Аудит повторяющейся задачи", "Прототип на реальных примерах", "AI, бот или обычная интеграция", "Логи, ошибки и ручной контроль"], page: "services/ai-automation/" },
      launch: { index: "SERVICE / 04", symbol: "↗", title: "MVP под ключ", description: "Помогаю выделить главное, собрать интерфейс, backend и данные, затем запустить первую рабочую версию без лишних функций.", items: ["Гипотеза и критерии готовности", "Прототип и пользовательский путь", "Full-stack разработка", "Запуск и план следующего этапа"], page: "services/product-development/" }
    },
    selector: {
      recommendations: {
        web: { label: "Сайт или интернет-магазин", description: "Начать стоит со структуры предложения и одного главного пути: от первого экрана до заявки или покупки.", page: "services/web-development/", brief: "сайт, каталог или интернет-магазин", scope: ["Структура и основной пользовательский путь", "Адаптивный интерфейс", "Форма заявки или корзина", "Базовая аналитика и техническое SEO"] },
        crm: { label: "CRM, кабинет или SaaS", description: "Первая версия должна собрать роли, данные, статусы и одно действие, которое сейчас отнимает больше всего времени.", page: "services/crm-development/", brief: "CRM, личный кабинет или SaaS-систему", scope: ["Роли и права", "Основные сущности и статусы", "История действий", "Один полезный отчёт"] },
        ai: { label: "AI-автоматизация или Telegram-бот", description: "Лучший старт — один повторяющийся сценарий на реальных примерах с логами и возможностью ручного контроля.", page: "services/ai-automation/", brief: "AI-автоматизацию, интеграцию или Telegram-бота", scope: ["Один повторяющийся сценарий", "Реальные входные примеры", "Логи и обработка ошибок", "Ручное подтверждение важных действий"] },
        mvp: { label: "Рабочий MVP", description: "Нужно выделить основную гипотезу и собрать минимальный путь пользователя с интерфейсом, данными и критериями готовности.", page: "services/product-development/", brief: "первую версию нового продукта", scope: ["Главная гипотеза", "Один полный путь пользователя", "Интерфейс, API и данные", "Критерии готовности и обратная связь"] }
      },
      stage: { idea: "Только идея", prototype: "Есть тексты или прототип", process: "Есть работающий процесс", legacy: "Есть старый продукт или система" },
      audience: { clients: "Клиенты", team: "Команда", both: "Клиенты и команда", public: "Открытая аудитория" },
      integration: { none: "Пока ничего", telegram: "Telegram", crm: "CRM или существующая система", payments: "Оплата или каталог", multiple: "Несколько сервисов" },
      time: { fast: "1–2 недели", mvp: "3–5 недель", system: "До 2 месяцев", flexible: "Без жёсткого срока" },
      integrationScope: { none: "Без внешней интеграции на первом этапе", telegram: "Подключение Telegram", crm: "Обмен данными с существующей системой", payments: "Каталог и сценарий оплаты", multiple: "План интеграций по приоритету" }
    },
    runtime: { copied: "Скопировано", copyFailed: "Не удалось скопировать", pause: "Пауза", play: "Смотреть", pauseAria: "Приостановить фон", playAria: "Включить фоновое видео", reduced: "Анимация отключена в настройках вашего устройства", network: "Видео отключено для экономии трафика", video: "Фоновое видео без звука", staticBackground: "Показывается статичный фон", openMenu: "Открыть меню", closeMenu: "Закрыть меню", resultPrefix: "Текущая готовность", audiencePrefix: "Пользователи", integrationPrefix: "Интеграция", timePrefix: "Ориентир по сроку", briefHello: "Привет! Хочу обсудить" },
    accessibility: { brand: "foxnaim — на главную", mainNav: "Главная навигация", stack: "Стек: TypeScript, React, Next.js", proof: "Факты о работе", services: "Чем я могу помочь", language: "Язык", navigation: "Навигация", mobileNav: "Мобильная навигация", closeWork: "Закрыть проекты", workProof: "Факты о проектах", closeAbout: "Закрыть информацию обо мне", closeService: "Закрыть описание услуги", closeSelector: "Закрыть подбор решения", closeContact: "Закрыть контакты" }
  },
  en: {
    metaTitle: "Yan Pavlov — full-stack developer | Websites, CRM and AI",
    metaDescription: "Yan Pavlov builds websites, CRM, SaaS, Telegram bots and AI automation for business, from the first idea to launch.",
    static: {
      skip: "Skip to content", nav: ["Home", "Projects", "About", "Contact"], headerCta: "Available",
      availability: "Open to new projects", headline: ["Your idea.", "My next build."],
      subhead: "I build websites, CRM and AI automation for business.<br class=\"desktop-break\"> Clear user flows, less manual work.",
      heroActions: ["Discuss your project", "View work"], proof: ["building since", "repositories", "curated projects", "project range"], selectorLink: "Not sure what you need? Find a solution",
      services: [["Websites & stores", "Landing pages, catalogs and e-commerce"], ["CRM & SaaS", "Dashboards, roles and workflows"], ["AI & automation", "AI assistants, Telegram and APIs"], ["MVP end to end", "Prototype, development and launch"]],
      footerLinks: ["Solutions", "Demo Lab", "GitHub", "Instagram", "Channel"], motion: ["Pause", "Play"], mobileTitle: "foxnaim / menu", mobileNav: ["Home", "Projects", "Solutions", "Demo Lab", "Checklists", "About", "Partners", "Contact"], mobileProcess: "Process and terms",
      workKicker: "Code you can inspect", workTitle: "Working products.<br><span>Clearly marked prototypes.</span>", workLink: "Projects page", workIntro: "Five focused examples of problem → solution. The full catalog includes business systems, AI, SaaS, applications and experiments; GitHub contains 40+ public code repositories.", workProof: ["selected cases", "in the catalog", "code repositories"],
      projectCopy: ["Interactive frontend concept for lead qualification, lead score and suggested next actions.", "Time tracking through Telegram and QR codes, with team analytics and a freelancer timer.", "Workspace prototype for notes and tasks with search, tags and interfaces for future AI features.", "Interactive booking concept with services, schedule, mini CRM and an admin workspace.", "Interactive Telegram store concept with catalog, cart, checkout and order history."],
      workFine: "The home page shows a short selection. The full catalog contains the remaining solutions, descriptions and links.", workButtons: ["Open full catalog", "Ready solution patterns", "Try Demo Lab", "How the work runs"],
      aboutKicker: "Hi, I’m Yan", aboutTitle: "Turning ideas.<br><span>Into working products.</span>", aboutCopy: ["I have been interested in development since 2017. I started with scripts and interfaces at school; today I build websites, CRM, SaaS and AI automation.", "I work freely across Kazakhstan and often stay in Almaty, Pavlodar, Semey and Astana. I enjoy varied problems and suggest additional product and automation ideas when the client agrees.", "Independent and team projects include AI Targetologist, Imperial, the One System mobile app and Leadflow. I especially value open communication and clients with a sense of humor."], aboutStatus: "Open to collaboration", aboutLinks: ["How I work", "For partners", "Contact and first step"], aboutFooter: "Code lives on GitHub. Processes and launches are in Build with Yan.", aboutChannel: "Open channel",
      serviceKicker: "From problem to solution", serviceButton: "Scope and service details", serviceFine: "The service page explains suitable tasks, scope and common questions.", processLine: ["Problem", "Build", "Launch"],
      selectorKicker: "A two minute brief", selectorTitle: "Start with the result,<br><span>then choose the technology.</span>", selectorIntro: "Answer five short questions. The site will suggest a format, an initial scope and a ready Instagram message.", selectorQuestions: ["What should change?", "What already exists?", "Who will use it?", "What must be connected?", "Preferred timeline"], selectorGoals: [["Get leads and sales", "Website, catalog or store"], ["Organize a process", "CRM, dashboard or SaaS"], ["Reduce manual work", "AI, bot or integration"], ["Validate a new idea", "Prototype or MVP"]], stageOptions: ["Only an idea", "Texts or a prototype exist", "A working process exists", "An old product or system exists"], audienceOptions: ["Customers", "Team", "Customers and team", "Public audience"], integrationOptions: ["Nothing yet", "Telegram", "CRM or an existing system", "Payments or catalog", "Several services"], timeOptions: ["1–2 weeks", "3–5 weeks", "Up to 2 months", "Flexible timeline"], resultKicker: "Suggested starting point", scopeTitle: "First version scope", resultActions: ["View service scope", "Prepare message"], selectorNote: "The selector does not calculate a price or send data. Answers stay in your browser.",
      contactTop: "For your next big idea", contactTitle: "Everything starts<br><span>with “hello”.</span>", contactIntro: "Describe the business, idea or process you want to simplify. We can define what is worth building together.", briefLabel: "A few words about the project", optional: "optional", placeholder: "I need a website for… / I need a system that…", contactButtons: ["Message on Instagram", "Build with Yan", "Copy text"], formNote: "The text stays in this window. Copy and send it using a convenient channel; the site sends nothing automatically."
    },
    services: {
      web: { index: "SERVICE / 01", symbol: "</>", title: "Websites & stores", description: "Fast landing pages, company websites, catalogs and e-commerce with a clear path from the first screen to a lead or purchase.", items: ["Structure around the business goal", "Responsive interface", "Forms, catalog and integrations", "Performance and technical SEO"], page: "services/web-development/" },
      systems: { index: "SERVICE / 02", symbol: "#", title: "CRM & SaaS", description: "Internal systems, dashboards and SaaS products with roles, data, statuses, reporting and APIs in one workflow.", items: ["Roles and process map", "Frontend, backend and database", "Permissions, history and reports", "Integrations and staged growth"], page: "services/crm-development/" },
      ai: { index: "SERVICE / 03", symbol: "*", title: "AI & automation", description: "Automation for repetitive work using Telegram, APIs or AI when the benefit is clear and human control remains available.", items: ["Audit one repetitive task", "Prototype on real examples", "AI, bot or deterministic integration", "Logs, errors and human control"], page: "services/ai-automation/" },
      launch: { index: "SERVICE / 04", symbol: "↗", title: "MVP end to end", description: "Define the core, build the interface, backend and data, then launch a useful first version without unnecessary features.", items: ["Hypothesis and acceptance criteria", "Prototype and user flow", "Full-stack development", "Launch and next iteration plan"], page: "services/product-development/" }
    },
    selector: {
      recommendations: {
        web: { label: "Website or online store", description: "Start with the offer structure and one complete path from the first screen to a lead or purchase.", page: "services/web-development/", brief: "a website, catalog or online store", scope: ["Structure and primary user flow", "Responsive interface", "Lead form or cart", "Basic analytics and technical SEO"] },
        crm: { label: "CRM, dashboard or SaaS", description: "The first version should combine roles, data, statuses and the action that currently consumes the most time.", page: "services/crm-development/", brief: "a CRM, dashboard or SaaS system", scope: ["Roles and permissions", "Core records and statuses", "Action history", "One useful report"] },
        ai: { label: "AI automation or Telegram bot", description: "The strongest start is one repetitive scenario tested on real examples with logs and human control.", page: "services/ai-automation/", brief: "AI automation, an integration or a Telegram bot", scope: ["One repetitive scenario", "Real input examples", "Logs and error handling", "Human approval for important actions"] },
        mvp: { label: "Working MVP", description: "Focus on the core hypothesis and a complete user flow with interface, data and acceptance criteria.", page: "services/product-development/", brief: "the first version of a new product", scope: ["Core hypothesis", "One complete user flow", "Interface, API and data", "Acceptance criteria and feedback"] }
      },
      stage: { idea: "Only an idea", prototype: "Texts or a prototype exist", process: "A working process exists", legacy: "An old product or system exists" }, audience: { clients: "Customers", team: "Team", both: "Customers and team", public: "Public audience" }, integration: { none: "Nothing yet", telegram: "Telegram", crm: "CRM or an existing system", payments: "Payments or catalog", multiple: "Several services" }, time: { fast: "1–2 weeks", mvp: "3–5 weeks", system: "Up to 2 months", flexible: "Flexible timeline" }, integrationScope: { none: "No external integration in the first stage", telegram: "Telegram connection", crm: "Data exchange with the existing system", payments: "Catalog and payment flow", multiple: "Integration plan ordered by priority" }
    },
    runtime: { copied: "Copied", copyFailed: "Could not copy", pause: "Pause", play: "Play", pauseAria: "Pause background motion", playAria: "Play background motion", reduced: "Motion is disabled in your device settings", network: "Video is disabled to save data", video: "Muted background video", staticBackground: "Static background is displayed", openMenu: "Open menu", closeMenu: "Close menu", resultPrefix: "Current readiness", audiencePrefix: "Users", integrationPrefix: "Integration", timePrefix: "Timeline", briefHello: "Hi! I would like to discuss" },
    accessibility: { brand: "foxnaim — home", mainNav: "Main navigation", stack: "Stack: TypeScript, React, Next.js", proof: "Work facts", services: "How I can help", language: "Language", navigation: "Navigation", mobileNav: "Mobile navigation", closeWork: "Close projects", workProof: "Project facts", closeAbout: "Close about", closeService: "Close service details", closeSelector: "Close solution finder", closeContact: "Close contact" }
  },
  kk: {
    metaTitle: "Ян Павлов — full-stack әзірлеуші | Сайттар, CRM және AI",
    metaDescription: "Ян Павлов бизнеске арналған сайттар, CRM, SaaS, Telegram-боттар және AI автоматтандыруды идеядан іске қосуға дейін әзірлейді.",
    static: {
      skip: "Негізгі мазмұнға өту", nav: ["Басты бет", "Жобалар", "Мен туралы", "Байланыс"], headerCta: "Байланыста",
      availability: "Жаңа жобаларға ашық", headline: ["Сіздің идеяңыз.", "Менің келесі жобам."], subhead: "Бизнеске арналған сайттар, CRM және AI автоматтандыру жасаймын.<br class=\"desktop-break\"> Өтінім алуға және уақыт үнемдеуге көмектесемін.", heroActions: ["Жобаны талқылау", "Жұмыстарды көру"], proof: ["әзірлеу басталған жыл", "репозиторий", "каталогтағы жоба", "жоба мерзімі"], selectorLink: "Не қажет екенін білмейсіз бе? Шешім таңдау",
      services: [["Сайттар мен дүкендер", "Лендингтер, каталогтар және e-commerce"], ["CRM және SaaS", "Кабинеттер, рөлдер және процестер"], ["AI және автоматтандыру", "AI көмекшілер, Telegram және API"], ["Толық MVP", "Прототип, әзірлеу және іске қосу"]], footerLinks: ["Шешімдер", "Demo Lab", "GitHub", "Instagram", "Арна"], motion: ["Тоқтату", "Қосу"], mobileTitle: "foxnaim / мәзір", mobileNav: ["Басты бет", "Жобалар", "Шешімдер", "Demo Lab", "Чек-листтер", "Мен туралы", "Серіктестерге", "Байланыс"], mobileProcess: "Кезеңдер мен шарттар",
      workKicker: "Кодын көруге болатын жобалар", workTitle: "Жұмыс істейтін өнімдер.<br><span>Адал белгіленген прототиптер.</span>", workLink: "Жобалар беті", workIntro: "Мұнда «міндет → шешім» форматы бойынша бес мысал бар. Толық каталогта бизнес жүйелері, AI, SaaS, қолданбалар және эксперименттер жинақталған; GitHub-та 40+ ашық репозиторий бар.", workProof: ["таңдалған кейс", "каталогта", "код репозиторийі"], projectCopy: ["Өтінімдерді жіктеу, lead score және келесі әрекетті ұсынуға арналған интерактивті frontend концепті.", "Telegram және QR-код арқылы жұмыс уақытын есептеу, команда аналитикасы және фрилансер таймері.", "Іздеу, тегтер және болашақ AI функцияларының интерфейстері бар жазбалар мен тапсырмалар кеңістігі.", "Қызметтер, кесте, шағын CRM және әкімші кабинеті бар онлайн жазылу макеті.", "Каталог, себет, тапсырыс рәсімдеу және тарихы бар Telegram-дүкен макеті."], workFine: "Басты бетте қысқа таңдау көрсетілген. Қалған шешімдер, сипаттамалар және сілтемелер толық каталогта.", workButtons: ["Толық каталогты ашу", "Дайын шешімдер", "Demo Lab-ты көру", "Жұмыс барысы"],
      aboutKicker: "Сәлем, мен Янмын", aboutTitle: "Идеяларды.<br><span>Жұмыс істейтін өнімге айналдырамын.</span>", aboutCopy: ["2017 жылдан бері әзірлеуге қызығамын. Мектепте скрипттер мен интерфейстерден бастадым; қазір сайттар, CRM, SaaS және AI автоматтандыру жасаймын.", "Қазақстан бойынша еркін жұмыс істеймін, Алматы, Павлодар, Семей және Астанада жиі боламын. Әртүрлі міндеттерді ұнатамын және тапсырыс беруші келіскенде өнімді жақсарту идеяларын ұсынамын.", "Жеке және командалық жобалар арасында AI-Таргетолог, Imperial, One System мобильді қолданбасы және Leadflow бар. Ашық сөйлесуді және әзілді бағалаймын."], aboutStatus: "Ынтымақтастыққа ашық", aboutLinks: ["Жұмыс барысы", "Серіктестерге", "Байланыс және алғашқы қадам"], aboutFooter: "Код — GitHub-та. Процестер мен іске қосулар — Build with Yan арнасында.", aboutChannel: "Арнаны ашу",
      serviceKicker: "Міндеттен шешімге", serviceButton: "Қызмет құрамы", serviceFine: "Қызмет бетінде сәйкес міндеттер, жұмыс құрамы және жиі сұрақтар бар.", processLine: ["Міндет", "Әзірлеу", "Іске қосу"],
      selectorKicker: "Екі минуттық таңдау", selectorTitle: "Алдымен нәтиже,<br><span>содан кейін технология.</span>", selectorIntro: "Бес қысқа сұраққа жауап беріңіз. Сайт форматты, алғашқы нұсқа құрамын және Instagram хабарламасын ұсынады.", selectorQuestions: ["Не өзгеруі керек?", "Қазір не бар?", "Кім қолданады?", "Нені қосу керек?", "Қалаған мерзім"], selectorGoals: [["Өтінімдер мен сатылымдар", "Сайт, каталог немесе дүкен"], ["Процесті реттеу", "CRM, кабинет немесе SaaS"], ["Қол жұмысын азайту", "AI, бот немесе интеграция"], ["Жаңа идеяны тексеру", "Прототип немесе MVP"]], stageOptions: ["Тек идея", "Мәтін немесе прототип бар", "Жұмыс істейтін процесс бар", "Ескі өнім немесе жүйе бар"], audienceOptions: ["Клиенттер", "Команда", "Клиенттер мен команда", "Ашық аудитория"], integrationOptions: ["Әзірге ештеңе", "Telegram", "CRM немесе бар жүйе", "Төлем немесе каталог", "Бірнеше сервис"], timeOptions: ["1–2 апта", "3–5 апта", "2 айға дейін", "Қатаң мерзім жоқ"], resultKicker: "Ұсынылған бастау", scopeTitle: "Алғашқы нұсқа құрамы", resultActions: ["Қызмет құрамын көру", "Хабарлама дайындау"], selectorNote: "Таңдау құнын есептемейді және дерек жібермейді. Жауаптар браузерде қалады.",
      contactTop: "Келесі үлкен идеяңыз үшін", contactTitle: "Барлығы<br><span>«сәлемнен» басталады.</span>", contactIntro: "Бизнес, идея немесе жеңілдеткіңіз келетін міндет туралы айтыңыз. Нені әзірлеу керегін бірге анықтаймыз.", briefLabel: "Жоба туралы қысқаша", optional: "міндетті емес", placeholder: "Маған ... үшін сайт керек / ... жасайтын жүйе керек", contactButtons: ["Instagram-ға жазу", "Build with Yan", "Мәтінді көшіру"], formNote: "Мәтін осы терезеде қалады. Оны көшіріп, ыңғайлы жолмен жіберіңіз — сайт ештеңені автоматты түрде жібермейді."
    },
    services: {
      web: { index: "SERVICE / 01", symbol: "</>", title: "Сайттар мен дүкендер", description: "Алғашқы экраннан өтінімге немесе сатып алуға дейінгі жолы түсінікті лендингтер, корпоративтік сайттар, каталогтар және дүкендер.", items: ["Бизнес міндетіне сай құрылым", "Бейімделетін интерфейс", "Формалар, каталог және интеграциялар", "Жылдамдық және техникалық SEO"], page: "services/web-development/" },
      systems: { index: "SERVICE / 02", symbol: "#", title: "CRM және SaaS", description: "Рөлдер, деректер, мәртебелер, есептер және API бір процесте жұмыс істейтін ішкі жүйелер, кабинеттер және SaaS өнімдер.", items: ["Рөлдер мен процестер картасы", "Frontend, backend және дерекқор", "Құқықтар, тарих және есептер", "Интеграциялар және кезеңдік даму"], page: "services/crm-development/" },
      ai: { index: "SERVICE / 03", symbol: "*", title: "AI және автоматтандыру", description: "Пайдасы өлшенетін және қолмен бақылау сақталатын жерде Telegram, API немесе AI арқылы қайталанатын жұмысты автоматтандыру.", items: ["Бір қайталанатын міндетті талдау", "Нақты мысалдардағы прототип", "AI, бот немесе қарапайым интеграция", "Логтар, қателер және қолмен бақылау"], page: "services/ai-automation/" },
      launch: { index: "SERVICE / 04", symbol: "↗", title: "Толық MVP", description: "Негізгісін анықтап, интерфейс, backend және деректерді жасап, артық функциясыз пайдалы алғашқы нұсқаны іске қосу.", items: ["Гипотеза және дайындық өлшемдері", "Прототип және пайдаланушы жолы", "Full-stack әзірлеу", "Іске қосу және келесі кезең жоспары"], page: "services/product-development/" }
    },
    selector: {
      recommendations: {
        web: { label: "Сайт немесе интернет-дүкен", description: "Ұсыныс құрылымынан және алғашқы экраннан өтінімге не сатып алуға дейінгі бір толық жолдан бастаған дұрыс.", page: "services/web-development/", brief: "сайт, каталог немесе интернет-дүкен", scope: ["Құрылым және негізгі пайдаланушы жолы", "Бейімделетін интерфейс", "Өтінім формасы немесе себет", "Базалық аналитика және техникалық SEO"] },
        crm: { label: "CRM, кабинет немесе SaaS", description: "Алғашқы нұсқа рөлдерді, деректерді, мәртебелерді және ең көп уақыт алатын әрекетті біріктіруі керек.", page: "services/crm-development/", brief: "CRM, кабинет немесе SaaS жүйесін", scope: ["Рөлдер мен құқықтар", "Негізгі жазбалар мен мәртебелер", "Әрекеттер тарихы", "Бір пайдалы есеп"] },
        ai: { label: "AI автоматтандыру немесе Telegram-бот", description: "Ең дұрыс бастау — нақты мысалдар, логтар және қолмен бақылауы бар бір қайталанатын сценарий.", page: "services/ai-automation/", brief: "AI автоматтандыруды, интеграцияны немесе Telegram-ботты", scope: ["Бір қайталанатын сценарий", "Нақты кіріс мысалдары", "Логтар және қателерді өңдеу", "Маңызды әрекеттерді қолмен растау"] },
        mvp: { label: "Жұмыс істейтін MVP", description: "Негізгі гипотезаны және интерфейс, деректер, дайындық өлшемдері бар толық пайдаланушы жолын бөліп алу керек.", page: "services/product-development/", brief: "жаңа өнімнің алғашқы нұсқасын", scope: ["Негізгі гипотеза", "Бір толық пайдаланушы жолы", "Интерфейс, API және деректер", "Дайындық өлшемдері және кері байланыс"] }
      },
      stage: { idea: "Тек идея", prototype: "Мәтін немесе прототип бар", process: "Жұмыс істейтін процесс бар", legacy: "Ескі өнім немесе жүйе бар" }, audience: { clients: "Клиенттер", team: "Команда", both: "Клиенттер мен команда", public: "Ашық аудитория" }, integration: { none: "Әзірге ештеңе", telegram: "Telegram", crm: "CRM немесе бар жүйе", payments: "Төлем немесе каталог", multiple: "Бірнеше сервис" }, time: { fast: "1–2 апта", mvp: "3–5 апта", system: "2 айға дейін", flexible: "Қатаң мерзім жоқ" }, integrationScope: { none: "Алғашқы кезеңде сыртқы интеграциясыз", telegram: "Telegram қосу", crm: "Бар жүйемен дерек алмасу", payments: "Каталог және төлем сценарийі", multiple: "Басымдық бойынша интеграциялар жоспары" }
    },
    runtime: { copied: "Көшірілді", copyFailed: "Көшіру мүмкін болмады", pause: "Тоқтату", play: "Қосу", pauseAria: "Фон қозғалысын тоқтату", playAria: "Фон қозғалысын қосу", reduced: "Құрылғы баптауында анимация өшірілген", network: "Трафикті үнемдеу үшін видео өшірілген", video: "Дыбыссыз фондық видео", staticBackground: "Статикалық фон көрсетіледі", openMenu: "Мәзірді ашу", closeMenu: "Мәзірді жабу", resultPrefix: "Қазіргі дайындық", audiencePrefix: "Пайдаланушылар", integrationPrefix: "Интеграция", timePrefix: "Мерзім", briefHello: "Сәлем! Талқылағым келеді:" },
    accessibility: { brand: "foxnaim — басты бет", mainNav: "Негізгі навигация", stack: "Стек: TypeScript, React, Next.js", proof: "Жұмыс деректері", services: "Қалай көмектесе аламын", language: "Тіл", navigation: "Навигация", mobileNav: "Мобильді навигация", closeWork: "Жобаларды жабу", workProof: "Жобалар туралы деректер", closeAbout: "Мен туралы ақпаратты жабу", closeService: "Қызмет сипаттамасын жабу", closeSelector: "Шешім таңдауды жабу", closeContact: "Байланысты жабу" }
  }
};

function localeFromPage() {
  const query = new URLSearchParams(location.search).get("lang");
  if (["ru", "en", "kk"].includes(query)) return query;
  try {
    const saved = localStorage.getItem("foxnaim-language");
    if (["ru", "en", "kk"].includes(saved)) return saved;
  } catch (_) {}
  return "ru";
}

let activeLocale = localeFromPage();

function text(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
}

function html(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.innerHTML = value;
}

function attribute(selector, name, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.setAttribute(name, value);
}

function leadingText(element, value) {
  if (!element) return;
  const node = [...element.childNodes].find(item => item.nodeType === Node.TEXT_NODE && item.textContent.trim());
  if (node) node.textContent = `${value} `;
}

function tailText(element, value) {
  if (!element) return;
  const node = [...element.childNodes].reverse().find(item => item.nodeType === Node.TEXT_NODE);
  if (node) node.textContent = value;
}

function applyArray(selector, values, apply = (element, value) => { element.textContent = value; }) {
  document.querySelectorAll(selector).forEach((element, index) => apply(element, values[index]));
}

function applyLanguage(locale, updateUrl = true) {
  const chosen = portfolioLocales[locale] ? locale : "ru";
  const data = portfolioLocales[chosen];
  const copy = data.static;
  const accessibility = data.accessibility;
  activeLocale = chosen;
  document.documentElement.lang = chosen === "kk" ? "kk" : chosen;
  document.title = data.metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", data.metaDescription);
  attribute(".brand", "aria-label", accessibility.brand);
  attribute(".nav-pill", "aria-label", accessibility.mainNav);
  attribute(".stack-rings", "aria-label", accessibility.stack);
  attribute(".hero-proof", "aria-label", accessibility.proof);
  attribute(".services", "aria-label", accessibility.services);
  document.querySelectorAll(".language-links, .menu-languages").forEach(element => element.setAttribute("aria-label", accessibility.language));
  attribute("#mobile-menu", "aria-label", accessibility.navigation);
  attribute("#mobile-menu nav", "aria-label", accessibility.mobileNav);
  attribute("#work .work-proof", "aria-label", accessibility.workProof);
  attribute("#work [data-close]", "aria-label", accessibility.closeWork);
  attribute("#about [data-close]", "aria-label", accessibility.closeAbout);
  attribute("#service [data-close]", "aria-label", accessibility.closeService);
  attribute("#selector [data-close]", "aria-label", accessibility.closeSelector);
  attribute("#contact [data-close]", "aria-label", accessibility.closeContact);
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) menuToggle.setAttribute("aria-label", menuToggle.getAttribute("aria-expanded") === "true" ? data.runtime.closeMenu : data.runtime.openMenu);
  attribute("#mobile-menu [data-close]", "aria-label", data.runtime.closeMenu);
  text(".skip-link", copy.skip);
  applyArray(".nav-pill a", copy.nav, leadingText);
  leadingText(document.querySelector(".header-cta"), copy.headerCta);
  tailText(document.querySelector(".availability-pill"), copy.availability);
  applyArray(".headline > span", copy.headline);
  html(".subhead", copy.subhead);
  applyArray(".hero-actions .button", copy.heroActions, leadingText);
  applyArray(".hero-proof > span", copy.proof, tailText);
  leadingText(document.querySelector(".hero-selector"), copy.selectorLink);
  document.querySelectorAll(".service-copy").forEach((element, index) => {
    text(`.service:nth-child(${index + 1}) .service-copy strong`, copy.services[index][0]);
    text(`.service:nth-child(${index + 1}) .service-copy > span`, copy.services[index][1]);
  });
  applyArray(".footer-links > a", copy.footerLinks, leadingText);
  applyArray(".mobile-menu nav a", copy.mobileNav, leadingText);
  text(".menu-heading > span", copy.mobileTitle);
  leadingText(document.querySelector(".menu-sheet > .button"), copy.mobileProcess);
  text("#work .section-heading .kicker", copy.workKicker);
  html("#work-title", copy.workTitle);
  leadingText(document.querySelector("#work .section-heading .text-link"), copy.workLink);
  text("#work .panel-intro", copy.workIntro);
  applyArray("#work .work-proof > span", copy.workProof, tailText);
  applyArray("#work .project-info p", copy.projectCopy);
  text("#work .fineprint", copy.workFine);
  applyArray("#work .panel-cta", copy.workButtons, leadingText);
  text("#about .about-copy .kicker", copy.aboutKicker);
  html("#about-title", copy.aboutTitle);
  applyArray("#about .about-copy > p:not(.kicker):not(.about-principle)", copy.aboutCopy);
  const status = document.querySelector("#about .identity-status");
  if (status) status.lastChild.textContent = ` ${copy.aboutStatus}`;
  applyArray("#about .about-links a", copy.aboutLinks, leadingText);
  text("#about .about-footer > span", copy.aboutFooter);
  leadingText(document.querySelector("#about .about-footer a"), copy.aboutChannel);
  text("#service .kicker", copy.serviceKicker);
  leadingText(document.querySelector("#service-page-link"), copy.serviceButton);
  text("#service .fineprint", copy.serviceFine);
  applyArray("#service .process-line span", copy.processLine, tailText);
  text("#selector .panel-body > .kicker", copy.selectorKicker);
  html("#selector-title", copy.selectorTitle);
  text("#selector .panel-intro", copy.selectorIntro);
  const questionTargets = ["#selector .selector-question legend", "#selector .selector-details > label:nth-of-type(1) > span", "#selector .selector-details > label:nth-of-type(2) > span", "#selector .selector-details > label:nth-of-type(3) > span", "#selector .selector-details fieldset legend"];
  questionTargets.forEach((selector, index) => tailText(document.querySelector(selector), ` ${copy.selectorQuestions[index]}`));
  document.querySelectorAll("#selector .selector-options button").forEach((button, index) => {
    text(`#selector .selector-options button:nth-child(${index + 1}) strong`, copy.selectorGoals[index][0]);
    text(`#selector .selector-options button:nth-child(${index + 1}) small`, copy.selectorGoals[index][1]);
  });
  applyArray("#selector-stage option", copy.stageOptions);
  applyArray("#selector-audience option", copy.audienceOptions);
  applyArray("#selector-integration option", copy.integrationOptions);
  applyArray("#selector .selector-time button", copy.timeOptions);
  text("#selector-result .kicker", copy.resultKicker);
  text("#selector-scope-title", copy.scopeTitle);
  applyArray("#selector .selector-result-actions a", copy.resultActions, leadingText);
  text("#selector .selector-note", copy.selectorNote);
  tailText(document.querySelector("#contact .contact-topline"), ` ${copy.contactTop}`);
  html("#contact-title", copy.contactTitle);
  text("#contact .panel-intro", copy.contactIntro);
  leadingText(document.querySelector("#contact .brief-label"), copy.briefLabel);
  text("#contact .brief-label span", copy.optional);
  document.querySelector("#project-brief")?.setAttribute("placeholder", copy.placeholder);
  applyArray("#contact .contact-actions > *", copy.contactButtons, leadingText);
  text("#contact .form-note", copy.formNote);
  document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.language === chosen)));
  try { localStorage.setItem("foxnaim-language", chosen); } catch (_) {}
  if (updateUrl) {
    const url = new URL(location.href);
    if (chosen === "ru") url.searchParams.delete("lang");
    else url.searchParams.set("lang", chosen);
    history.replaceState(history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }
  window.dispatchEvent(new CustomEvent("portfolio:language", { detail: { language: chosen } }));
}

window.PortfolioI18n = {
  language: () => activeLocale,
  data: () => portfolioLocales[activeLocale],
  apply: applyLanguage,
  formatBrief(goal, values) {
    const data = portfolioLocales[activeLocale];
    const recommendation = data.selector.recommendations[goal];
    return `${data.runtime.briefHello} ${recommendation.brief}. ${data.runtime.resultPrefix}: ${data.selector.stage[values.stage]}. ${data.runtime.audiencePrefix}: ${data.selector.audience[values.audience]}. ${data.runtime.integrationPrefix}: ${data.selector.integration[values.integration]}. ${data.runtime.timePrefix}: ${data.selector.time[values.time]}.`;
  },
  formatResult(goal, values) {
    const data = portfolioLocales[activeLocale];
    const recommendation = data.selector.recommendations[goal];
    return `${recommendation.description} ${data.runtime.resultPrefix}: ${data.selector.stage[values.stage].toLowerCase()}. ${data.runtime.audiencePrefix}: ${data.selector.audience[values.audience].toLowerCase()}. ${data.runtime.integrationPrefix}: ${data.selector.integration[values.integration].toLowerCase()}. ${data.runtime.timePrefix}: ${data.selector.time[values.time].toLowerCase()}.`;
  },
  scope(goal, integration) {
    const data = portfolioLocales[activeLocale];
    return [...data.selector.recommendations[goal].scope, data.selector.integrationScope[integration]];
  }
};

document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
applyLanguage(activeLocale, false);
