#!/usr/bin/env python3
"""Generate crawlable service pages, metadata support files and sitemap."""
from datetime import date
from html import escape
import json
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / "site.config.json").read_text())
SITE = CONFIG["siteUrl"].rstrip("/")
BASE = urlparse(SITE).path.rstrip("/") + "/"
BRAND = CONFIG["brand"]
PERSON_NAME = CONFIG["personName"]

PAGES = {
    "services/web-development": {
        "kind": "Услуга 01",
        "title": "Разработка сайтов для бизнеса — Ян Павлов",
        "description": "Разработка адаптивных лендингов, корпоративных сайтов и интернет-магазинов. Продуманный интерфейс, высокая скорость и запуск под ключ.",
        "h1": "Разработка сайтов и интернет-магазинов.",
        "lead": "Создаю быстрые и понятные сайты: от посадочной страницы для новой услуги до интернет-магазина с каталогом и корзиной. Интерфейс работает на телефоне, планшете и большом экране.",
        "keywords": "разработка сайтов, создание сайта для бизнеса, заказать лендинг, корпоративный сайт, интернет-магазин, React, Next.js",
        "service": "Разработка сайтов и интернет-магазинов",
        "best_for": [
            "Нужно запустить новую услугу, продукт или компанию в интернете.",
            "Старый сайт неудобен на телефоне, медленно загружается или плохо объясняет предложение.",
            "Нужны каталог, корзина, формы заявок, аналитика или интеграции с рабочими сервисами.",
        ],
        "result": "Адаптивный сайт с понятной структурой, рабочими пользовательскими сценариями и исходным кодом. До запуска проверяются скорость, доступность ключевых действий и технические данные для поисковых систем.",
        "items": [
            ("Задача и структура", "Разбираем продукт, аудиторию и путь клиента до заявки или покупки."),
            ("Дизайн и разработка", "Собираю адаптивный интерфейс, компоненты и необходимые сценарии."),
            ("Запуск", "Проверяю скорость, базовую доступность, метаданные и размещаю готовый сайт."),
        ],
        "deliverables": ["Лендинги и промосайты", "Корпоративные сайты", "Каталоги и интернет-магазины", "Адаптивная вёрстка", "Формы и интеграции", "Техническое SEO"],
        "faq": [
            ("Сколько времени занимает разработка сайта?", "Срок зависит от количества страниц, готовности текстов и интеграций. После короткого брифа вы получите этапы и оценку без скрытых работ."),
            ("Можно ли обновлять сайт после запуска?", "Да. Проект передаётся с исходным кодом и может развиваться: добавлять страницы, интеграции и новые сценарии."),
            ("Сайт будет работать на телефоне?", "Да. Адаптивная версия входит в разработку и проверяется на основных размерах экранов."),
        ],
    },
    "services/crm-development": {
        "kind": "Услуга 02",
        "title": "Разработка CRM и SaaS-сервисов — Ян Павлов",
        "description": "CRM, личные кабинеты и SaaS-продукты под бизнес-процессы. Роли, аналитика, API, интеграции и безопасная работа с данными.",
        "h1": "CRM, личные кабинеты и SaaS-сервисы.",
        "lead": "Проектирую CRM, личные кабинеты и SaaS-продукты, когда таблиц и переписок уже недостаточно. Объединяю интерфейс, серверную часть, базу данных и интеграции.",
        "keywords": "разработка CRM, CRM на заказ, разработка SaaS, личный кабинет, автоматизация бизнеса, NestJS, PostgreSQL",
        "service": "Разработка CRM и SaaS-систем",
        "best_for": [
            "Заявки, клиенты и отчёты разбросаны по таблицам, чатам и разным сервисам.",
            "Команде нужны роли, статусы, история действий и единые правила работы с данными.",
            "Нужно создать личный кабинет, внутреннюю систему или основу SaaS-продукта.",
        ],
        "result": "Единая система под согласованный бизнес-процесс: интерфейс для команды, API, база данных, роли и история изменений. Архитектура предусматривает добавление новых модулей и интеграций по мере развития продукта.",
        "items": [
            ("Модель процесса", "Фиксируем роли, данные, статусы и действия, которые должна поддерживать система."),
            ("MVP", "Сначала создаём рабочее ядро продукта, которым уже можно пользоваться и проверять гипотезы."),
            ("Развитие", "Добавляем аналитику, автоматизации и интеграции по мере появления реальной потребности."),
        ],
        "deliverables": ["CRM и панели управления", "Личные кабинеты", "Роли и права доступа", "REST API", "PostgreSQL и MongoDB", "Отчёты и интеграции"],
        "faq": [
            ("Можно ли заменить Excel и ручные отчёты?", "Да, если описать источник данных и правила процесса. Система может хранить историю, считать показатели и готовить отчёты."),
            ("С чего начинается разработка CRM?", "С карты процесса: кто работает в системе, какие данные вводит, что меняется и какой результат нужен руководителю."),
            ("Можно запустить сначала небольшую версию?", "Да. MVP снижает риск: сначала реализуем самые важные сценарии, затем развиваем продукт на основе использования."),
        ],
    },
    "services/ai-automation": {
        "kind": "Услуга 03",
        "title": "AI-автоматизация и Telegram-боты — Ян Павлов",
        "description": "AI-агенты, Telegram-боты и API-интеграции для обработки заявок, поиска по документам и сокращения ручной работы.",
        "h1": "AI-автоматизация и Telegram-боты.",
        "lead": "Автоматизирую повторяющиеся операции и подключаю AI там, где он даёт измеримую пользу: помогает искать информацию, обрабатывать обращения и связывать рабочие сервисы.",
        "keywords": "AI автоматизация бизнеса, разработка Telegram бота, AI помощник, интеграция API, автоматизация заявок, искусственный интеллект",
        "service": "AI-автоматизация и Telegram-боты",
        "best_for": [
            "Сотрудники вручную сортируют обращения, переносят данные или готовят однотипные ответы.",
            "Нужен поиск и ответы по внутренним документам или базе знаний.",
            "Сайт, CRM, Telegram и другие сервисы должны обмениваться данными и уведомлениями.",
        ],
        "result": "Проверенный на реальных примерах сценарий автоматизации с понятными границами. Решение подключается к нужным источникам, фиксирует ошибки и сохраняет возможность ручного контроля там, где он необходим.",
        "items": [
            ("Аудит рутины", "Находим повторяющиеся действия, цену ошибки и данные, с которыми уже работает команда."),
            ("Прототип", "Проверяем один полезный сценарий на реальных примерах до масштабной разработки."),
            ("Интеграция", "Связываем решение с сайтом, CRM, Telegram или внутренними источниками данных."),
        ],
        "deliverables": ["Telegram-боты", "AI-агенты и помощники", "Поиск по документам", "Обработка обращений", "API-интеграции", "Уведомления и отчёты"],
        "faq": [
            ("Нужен ли AI любой автоматизации?", "Нет. Иногда обычное правило или интеграция надёжнее и дешевле. Технология выбирается после разбора процесса."),
            ("Можно подключить Telegram?", "Да. Бот может принимать команды, отправлять уведомления и работать с вашим API или базой данных."),
            ("Что нужно для старта?", "Достаточно описать одну повторяющуюся задачу, показать примеры входных данных и объяснить, каким должен быть результат."),
        ],
    },
    "services/product-development": {
        "kind": "Услуга 04",
        "title": "Разработка MVP: от идеи до запуска — Ян Павлов",
        "description": "Разработка MVP цифрового продукта: анализ задачи, прототип, full-stack разработка, тестирование и запуск первой рабочей версии.",
        "h1": "Разработка MVP под ключ.",
        "lead": "Помогаю определить главное, собрать первую рабочую версию и подготовить её к запуску. Один разработчик отвечает за интерфейс, серверную часть, данные и интеграции.",
        "keywords": "разработка MVP, создать цифровой продукт, запуск стартапа, разработка web сервиса, full-stack разработчик, прототип продукта",
        "service": "Разработка MVP под ключ",
        "best_for": [
            "Идею нужно проверить рабочей версией до большой разработки.",
            "Есть прототип, но не хватает frontend, backend, данных или интеграций для запуска.",
            "Нужен один ответственный разработчик на весь технический цикл первой версии.",
        ],
        "result": "Первая версия с заранее согласованными функциями и критериями готовности. После запуска остаются исходный код, доступы, техническая основа для развития и список следующих улучшений.",
        "items": [
            ("Фокус", "Определяем аудиторию, ключевую проблему и критерии, по которым первая версия будет полезной."),
            ("Рабочая версия", "Создаю необходимый интерфейс, API, хранение данных и интеграции без лишних функций."),
            ("Запуск", "Проверяю основные сценарии, размещаю продукт и фиксирую понятный план следующих улучшений."),
        ],
        "deliverables": ["Анализ и декомпозиция идеи", "Прототип интерфейса", "Frontend и backend", "База данных и авторизация", "Интеграции", "Размещение и передача исходников"],
        "faq": [
            ("Нужно ли готовое техническое задание?", "Нет. Для старта достаточно описать проблему, будущих пользователей и желаемый результат. Состав MVP определим вместе."),
            ("Зачем начинать с MVP?", "Первая компактная версия позволяет раньше получить обратную связь и не тратить бюджет на функции, необходимость которых ещё не проверена."),
            ("Можно продолжить развитие после запуска?", "Да. Архитектура и этапы фиксируются так, чтобы продукт можно было последовательно дополнять."),
        ],
    },
}

PROJECT_GROUPS = {
    "Бизнес и автоматизация": [
        ("AI Lead Flow", "Интерактивный frontend-концепт: квалификация входящих заявок, lead score и подсказка следующего действия. Данные демонстрационные, backend не подключён.", "https://foxnaim.github.io/AI-Lead-Flow/", "Live demo · JavaScript · CRM concept"),
        ("Slotix KZ", "Интерактивный макет онлайн-записи для сервисного бизнеса: клиентский сценарий, расписание, поиск записей, мини-CRM и управление услугами. Данные сохраняются только в браузере.", "https://foxnaim.github.io/Slotix-KZ/", "Live demo · JavaScript · Booking concept"),
        ("Tact", "Учёт рабочего времени через Telegram и меняющиеся QR-коды: интерфейс команды, API и хранение данных.", "https://github.com/foxnaim/World-Time-Frontend", "Next.js · NestJS · PostgreSQL"),
        ("Habit Tracker", "Full-stack система привычек: цели, серии, аналитика, отдельные frontend, backend и Telegram-бот.", "https://github.com/foxnaim/habit-tracker", "TypeScript · React · Telegram"),
        ("Trial Admin Panel", "Панель управления пользователями и данными с адаптивным интерфейсом и аналитическими представлениями.", "https://github.com/foxnaim/Trial-Admin-Ponel", "Next.js · TypeScript · Dashboard"),
        ("Dynamic Form Constructor", "Конструктор динамических форм: поля и структура собираются под конкретный бизнес-сценарий.", "https://github.com/foxnaim/Dynamic-Form-Constructor", "Next.js · TypeScript · Forms"),
    ],
    "Продукты и коммуникации": [
        ("NeuroNotes", "Прототип пространства для заметок и задач с поиском, тегами и интерфейсами AI-функций.", "https://github.com/foxnaim/NeuroNotes", "Next.js · TypeScript · React"),
        ("Dev-flow", "Менеджер задач с канбан-доской, календарём, заметками, авторизацией и хранением данных.", "https://github.com/foxnaim/Dev-flow", "Next.js · MongoDB · NextAuth"),
        ("feed Back", "Платформа анонимной обратной связи с кабинетами, локализацией и обновлениями в реальном времени.", "https://github.com/foxnaim/Anonymous-chat", "Next.js · Socket.IO · i18n"),
        ("Chat", "Web-приложение для обмена сообщениями в реальном времени на современном TypeScript-стеке.", "https://github.com/foxnaim/chat", "Next.js · TypeScript · Realtime"),
        ("Study Hub", "Образовательное пространство для проектов, материалов и совместной работы студентов.", "https://github.com/foxnaim/Study-Hub", "Next.js · TypeScript · GraphQL"),
    ],
    "Commerce, data и эксперименты": [
        ("TazaOrder", "Интерактивный макет Telegram-магазина для локальных брендов: каталог, избранное, корзина, оформление и статус доставки. Портфельная адаптация открытого MIT-проекта tma-shop с сохранённой атрибуцией.", "https://foxnaim.github.io/TazaOrder/", "Live demo · React · Telegram commerce"),
        ("AI Trend Analytics", "Дашборд для исследования трендов и визуализации данных с интерфейсами AI-анализа.", "https://github.com/foxnaim/AI-Trend-Analytics", "Next.js · TypeScript · Prisma"),
        ("Weather App", "Поиск погоды по локации и прогноз на семь дней в адаптивном web-интерфейсе.", "https://github.com/foxnaim/Weather-app", "Next.js · TypeScript · API"),
        ("Luki Lu Shop", "Интернет-магазин с каталогом, корзиной и сценарием оформления заказа.", "https://github.com/foxnaim/Luki_lu-Shop", "Next.js · TypeScript · E-commerce"),
        ("BookForge", "Приложение для поиска, организации и изучения книг и подборок.", "https://github.com/foxnaim/BookForge", "Next.js · TypeScript · Search"),
        ("Imperial", "React-приложение на Vite — один из проектов, созданных в ходе командной и продуктовой практики.", "https://github.com/foxnaim/Imperial", "React · Vite · JavaScript"),
    ],
}

ABOUT = {
    "title": "Ян Павлов — full-stack разработчик, обо мне",
    "description": "Ян Павлов — full-stack разработчик сайтов, CRM, SaaS и AI-автоматизаций на TypeScript, React, Next.js, Node.js и NestJS.",
    "h1": "От интерфейса до API — один ответственный разработчик.",
    "lead": "Я Ян Павлов, full-stack разработчик и автор foxnaim. Увлекаюсь разработкой с 2017 года: ещё в школе начал писать скрипты и собирать интерфейсы. Сейчас превращаю идеи в работающие сайты, CRM, SaaS и AI-автоматизации.",
    "keywords": "Ян Павлов разработчик, full-stack разработчик, frontend разработчик, backend разработчик, TypeScript, React, Next.js, NestJS, foxnaim",
}

PROCESS = {
    "title": "Как проходит разработка сайта, CRM и AI — Ян Павлов",
    "description": "Этапы работы Яна Павлова: бриф, прототип, разработка, демонстрации и запуск. Срок проекта — от одной недели до двух месяцев.",
    "h1": "Понятные этапы. Рабочая версия на каждом шаге.",
    "lead": "Срок проекта обычно составляет от одной недели до двух месяцев и зависит от функций, интеграций и готовности материалов. До старта фиксируем состав работ, этапы и критерии готовности.",
    "keywords": "этапы разработки сайта, процесс разработки CRM, сроки создания сайта, заказать MVP, разработка проекта по этапам, Ян Павлов",
}

CONTACT = {
    "title": "Обсудить разработку сайта, CRM или AI — Ян Павлов",
    "description": "Расскажите Яну Павлову о задаче: сайт, CRM, SaaS, Telegram-бот или AI-автоматизация. Связь через Instagram и канал Build with Yan.",
    "h1": "Расскажите, что хочется создать.",
    "lead": "Можно прийти с идеей без технического задания. Опишите бизнес, задачу и желаемый результат — я помогу определить следующий шаг и состав работ.",
    "keywords": "Ян Павлов контакты, заказать сайт, заказать CRM, разработчик на проект, заказать Telegram бота, разработка SaaS, foxnaim",
}


def abs_url(path=""):
    clean_path = path.strip("/")
    if not clean_path:
        return SITE + "/"
    trailing_slash = "" if "." in Path(clean_path).name else "/"
    return SITE + "/" + clean_path + trailing_slash


def rel_root(depth):
    return "../" * depth


def schema_base(url, title, description):
    return {
        "@context": "https://schema.org",
        "@graph": [
            {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": title, "description": description, "inLanguage": "ru"},
            {"@type": "Person", "@id": abs_url() + "#person", "name": PERSON_NAME, "alternateName": BRAND, "url": abs_url(), "image": abs_url("assets/portrait.webp"), "sameAs": [CONFIG["github"], CONFIG["instagram"], CONFIG["telegram"]], "jobTitle": "Full-stack разработчик", "knowsAbout": ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "CRM", "SaaS", "AI automation"]},
            {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Портфолио", "item": abs_url()}, {"@type": "ListItem", "position": 2, "name": title, "item": url}]},
        ],
    }


def head(title, description, keywords, url, depth, schema):
    root = rel_root(depth)
    return f'''<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{escape(title)}</title>
  <meta name="description" content="{escape(description, quote=True)}">
  <meta name="keywords" content="{escape(keywords, quote=True)}">
  <meta name="author" content="{PERSON_NAME}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <link rel="canonical" href="{url}">
  <link rel="alternate" hreflang="ru" href="{url}">
  <link rel="alternate" hreflang="x-default" href="{url}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ru_RU">
  <meta property="og:site_name" content="{BRAND}">
  <meta property="og:title" content="{escape(title, quote=True)}">
  <meta property="og:description" content="{escape(description, quote=True)}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{abs_url('assets/og-cover.png')}">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="{BRAND} — сайты, CRM и AI-автоматизация">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{escape(title, quote=True)}">
  <meta name="twitter:description" content="{escape(description, quote=True)}">
  <meta name="twitter:image" content="{abs_url('assets/og-cover.png')}">
  <meta name="theme-color" content="#0a0a0b">
  <link rel="icon" href="{root}assets/logo.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="{root}assets/apple-touch-icon.png">
  <link rel="manifest" href="{root}site.webmanifest">
  <link rel="preload" href="{root}fonts/InterVariable.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="{root}seo-pages.css">
  <script type="application/ld+json">{json.dumps(schema, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')}</script>'''


def header(depth):
    root = rel_root(depth)
    return f'''<a class="skip-link" href="#content">К содержанию</a>
  <header class="seo-header"><div class="seo-header-inner">
    <a class="seo-brand" href="{root}"><img src="{root}assets/logo.svg" width="38" height="38" alt="">{BRAND}</a>
    <nav class="seo-nav" aria-label="Основная навигация"><a href="{root}services/web-development/">Сайты</a><a href="{root}services/crm-development/">CRM & SaaS</a><a href="{root}services/ai-automation/">AI</a><a href="{root}projects/">Проекты</a><a href="{root}process/">Как работаю</a><a href="{root}about/">Обо мне</a><a href="{root}contact/">Контакт</a></nav>
  </div></header>'''


def footer(depth):
    root = rel_root(depth)
    return f'''<footer class="seo-footer"><span>© {date.today().year} {PERSON_NAME} / {BRAND}</span><div><a href="{root}">Главная</a><a href="{root}process/">Как работаю</a><a href="{CONFIG['github']}" rel="noopener">GitHub</a><a href="{CONFIG['instagram']}" rel="noopener">Instagram</a><a href="{CONFIG['telegram']}" rel="noopener">Build with Yan</a></div></footer>'''


def document(title, description, keywords, url, depth, schema, body):
    return f'''<!doctype html><html lang="ru"><head>
  {head(title, description, keywords, url, depth, schema)}
</head><body>
  {header(depth)}
  <main class="seo-main" id="content">{body}</main>
  {footer(depth)}
</body></html>\n'''


def service_page(slug, data):
    url = abs_url(slug)
    schema = schema_base(url, data["title"], data["description"])
    schema["@graph"].append({"@type": "Service", "@id": url + "#service", "name": data["service"], "description": data["description"], "provider": {"@id": abs_url() + "#person"}, "url": url})
    schema["@graph"].append({"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in data["faq"]]})
    cards = "".join(f'<article class="seo-card"><span class="number">0{i}</span><h3>{escape(title)}</h3><p>{escape(copy)}</p></article>' for i, (title, copy) in enumerate(data["items"], 1))
    best_for = "".join(f"<li>{escape(item)}</li>" for item in data["best_for"])
    deliverables = "".join(f"<li>{escape(item)}</li>" for item in data["deliverables"])
    faq = "".join(f"<details><summary>{escape(q)}</summary><p>{escape(a)}</p></details>" for q, a in data["faq"])
    body = f'''<p class="breadcrumbs"><a href="../../">Главная</a> / Услуги / {escape(data['service'])}</p>
    <section class="seo-hero"><p class="seo-kicker">{escape(data['kind'])}</p><h1>{escape(data['h1'])}</h1><p class="seo-lead">{escape(data['lead'])}</p><div class="seo-actions"><a class="seo-button primary" href="#scope">Что входит в работу</a><a class="seo-button" href="../../projects/">Примеры решений</a></div></section>
    <section class="seo-section"><h2>Когда это подходит</h2><ul class="seo-list">{best_for}</ul></section>
    <section class="seo-section" id="scope"><h2>Как строится работа</h2><div class="seo-grid">{cards}</div></section>
    <section class="seo-section"><h2>Что получает бизнес</h2><p>{escape(data['result'])}</p><h3>Что можно реализовать</h3><ul class="seo-list">{deliverables}</ul></section>
    <section class="seo-section seo-faq"><h2>Частые вопросы</h2>{faq}</section>'''
    return document(data["title"], data["description"], data["keywords"], url, 2, schema, body)


def projects_page():
    url = abs_url("projects")
    title = "Проекты Яна Павлова: сайты, SaaS и web-приложения"
    description = "Каталог проектов Яна Павлова: бизнес-системы, AI, SaaS, web-приложения и эксперименты. 40+ публичных репозиториев с кодом на GitHub."
    schema = schema_base(url, title, description)
    projects = [project for group in PROJECT_GROUPS.values() for project in group]
    schema["@graph"].append({"@type": "CollectionPage", "name": title, "hasPart": [{"@type": "SoftwareApplication", "name": name, "description": copy, "url": link, "applicationCategory": "WebApplication"} for name, copy, link, stack in projects]})
    sections = []
    project_number = 1
    for group_name, group_projects in PROJECT_GROUPS.items():
        items = []
        for name, copy, link, stack in group_projects:
            items.append(f'<a class="seo-project" href="{link}" rel="noopener"><span class="number">{project_number:02d}</span><div><h3>{escape(name)}</h3><p>{escape(copy)}</p><p class="seo-kicker">{escape(stack)}</p></div><span class="arrow">↗</span></a>')
            project_number += 1
        sections.append(f'<section class="seo-section project-group"><p class="seo-kicker">{escape(group_name)}</p><h2>{escape(group_name)}</h2>{"".join(items)}</section>')
    body = f'''<p class="breadcrumbs"><a href="../">Главная</a> / Проекты</p><section class="seo-hero"><p class="seo-kicker">Projects & solutions</p><h1>Проекты, решения и рабочие эксперименты.</h1><p class="seo-lead">На этой странице — отобранные проекты с понятной задачей и стеком. В профиле GitHub уже 40+ публичных репозиториев с определённым языком: исходники, отдельные frontend и backend части, боты, учебные эксперименты и заготовки.</p><div class="project-stats"><div><strong>{len(projects)}</strong><span>проектов в каталоге</span></div><div><strong>40+</strong><span>публичных репозиториев с кодом</span></div><div><strong>2017</strong><span>год начала разработки</span></div></div><div class="seo-actions"><a class="seo-button primary" href="{CONFIG['github']}" rel="noopener">Все репозитории на GitHub</a><a class="seo-button" href="../process/">Как я работаю</a></div></section>{"".join(sections)}<section class="seo-section"><h2>Как создаётся следующий проект</h2><p>Задача переводится в первую рабочую версию, этапы и критерии готовности. На отдельной странице описаны порядок работы, сроки и базовые условия.</p><a class="seo-button primary" href="../process/">Этапы и условия</a></section>'''
    return document(title, description, "портфолио разработчика, проекты Next.js, CRM, SaaS, TypeScript, React, NestJS", url, 1, schema, body)


def process_page():
    url = abs_url("process")
    schema = schema_base(url, PROCESS["title"], PROCESS["description"])
    faq = [
        ("Можно начать без технического задания?", "Да. Достаточно описать задачу, будущих пользователей и желаемый результат. После разговора появятся состав первой версии и понятные этапы."),
        ("Сколько длится разработка?", "Обычно от одной недели до двух месяцев. Точный срок зависит от функций, интеграций, контента и скорости согласований."),
        ("Можно предложить свои идеи по улучшению?", "Да. Я люблю находить дополнительные идеи для продукта и автоматизации, но добавляю их только после согласования с заказчиком."),
        ("Как проходит оплата?", "Базовая схема — 30% перед стартом, 40% после рабочей промежуточной версии и 30% перед запуском или передачей. Для конкретного проекта условия фиксируются до начала."),
    ]
    schema["@graph"].append({"@type": "HowTo", "name": "Как проходит разработка цифрового продукта", "totalTime": "P2M", "step": [{"@type": "HowToStep", "position": i, "name": title, "text": copy} for i, (title, copy) in enumerate([
        ("Разобраться в задаче", "Короткий бриф: бизнес, пользователь, проблема, ограничения и критерии готовности."),
        ("Согласовать первую версию", "Фиксируем функции, этапы, сроки, стоимость и то, что не входит в текущий объём."),
        ("Создать и показать", "Разработка идёт по этапам с демонстрацией рабочей промежуточной версии."),
        ("Проверить и запустить", "Проверяем ключевые сценарии, размещаем продукт и передаём исходники."),
    ], 1)]})
    schema["@graph"].append({"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]})
    steps = "".join(f'<article class="seo-card"><span class="number">0{i}</span><h3>{escape(title)}</h3><p>{escape(copy)}</p></article>' for i, (title, copy) in enumerate([
        ("Бриф без бюрократии", "Вы рассказываете о задаче своими словами. Я уточняю пользователей, ограничения и ожидаемый результат."),
        ("План и границы", "Фиксируем первую версию, этапы, сроки, стоимость и критерии, по которым работа считается готовой."),
        ("Разработка с демонстрациями", "Показываю промежуточные версии по этапам, чтобы решения можно было проверить до финального запуска."),
        ("Запуск и передача", "Проверяю ключевые сценарии, размещаю продукт, передаю исходники и остаюсь на связи по найденным ошибкам."),
    ], 1))
    faq_html = "".join(f"<details><summary>{escape(q)}</summary><p>{escape(a)}</p></details>" for q, a in faq)
    body = f'''<p class="breadcrumbs"><a href="../">Главная</a> / Как я работаю</p><section class="seo-hero"><p class="seo-kicker">From idea to release</p><h1>{escape(PROCESS['h1'])}</h1><p class="seo-lead">{escape(PROCESS['lead'])}</p><div class="seo-actions"><a class="seo-button primary" href="#stages">Перейти к этапам</a><a class="seo-button" href="../projects/">Посмотреть проекты</a></div></section><section class="seo-section" id="stages"><h2>Четыре этапа</h2><div class="seo-grid process-grid">{steps}</div></section><section class="seo-section"><h2>Базовые условия</h2><div class="terms-grid"><article><strong>30%</strong><span>старт и резерв времени</span></article><article><strong>40%</strong><span>рабочая промежуточная версия</span></article><article><strong>30%</strong><span>запуск или передача проекта</span></article></div><p class="terms-note">Обычно в согласованный объём входят две итерации правок и 14 дней исправления найденных ошибок после запуска. Это базовая схема: финальные условия зависят от задачи и фиксируются до старта.</p></section><section class="seo-section seo-faq"><h2>Частые вопросы</h2>{faq_html}</section>'''
    return document(PROCESS["title"], PROCESS["description"], PROCESS["keywords"], url, 1, schema, body)


def simple_page(slug, data, body_extra):
    url = abs_url(slug)
    schema = schema_base(url, data["title"], data["description"])
    body = f'''<p class="breadcrumbs"><a href="../">Главная</a> / {escape(data['title'])}</p><section class="seo-hero"><p class="seo-kicker">{BRAND} / full-stack</p><h1>{escape(data['h1'])}</h1><p class="seo-lead">{escape(data['lead'])}</p></section>{body_extra}'''
    return document(data["title"], data["description"], data["keywords"], url, 1, schema, body)


def write(path, content):
    target = ROOT / path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content, encoding="utf-8")


def main():
    for slug, data in PAGES.items():
        write(f"{slug}/index.html", service_page(slug, data))
    write("projects/index.html", projects_page())
    write("process/index.html", process_page())
    write("about/index.html", simple_page("about", ABOUT, f'''<section class="seo-profile" aria-label="Профиль разработчика"><img src="../assets/portrait.webp" width="160" height="160" loading="lazy" decoding="async" alt="Ян Павлов, full-stack разработчик"><div><p class="seo-kicker">Independent developer</p><h2>{PERSON_NAME}</h2><p>{BRAND} · Разработка с 2017 года · Казахстан и удалённая работа.</p></div></section><section class="seo-section"><h2>От школьных скриптов до цифровых продуктов</h2><p>Интерес к разработке появился ещё в школе: начинал со скриптов и интерфейсов, затем перешёл к полноценным web-продуктам. Сейчас беру задачи целиком — от пользовательского сценария и frontend до API, базы данных и интеграций.</p><p>Свободно работаю из Казахстана и часто бываю в Алматы, Павлодаре, Семее и Астане. Берусь за разные направления, особенно когда заказчик открыт к идеям и умеет относиться к процессу с юмором.</p></section><section class="seo-section"><h2>Командный и продуктовый опыт</h2><p>Среди проектов, над которыми работал самостоятельно или с командами друзей: AI-Таргетолог, Imperial, мобильное приложение One System и Leadflow. В открытом каталоге собраны проекты, код и демонстрационные решения, которые можно проверить.</p><div class="seo-actions"><a class="seo-button primary" href="../projects/">Открыть проекты</a><a class="seo-button" href="../process/">Как проходит работа</a></div></section><section class="seo-section"><h2>Работаю с продуктом целиком</h2><div class="seo-grid"><article class="seo-card"><span class="number">01</span><h3>Frontend</h3><p>Адаптивные интерфейсы на React и Next.js, понятные сценарии и внимание к скорости.</p></article><article class="seo-card"><span class="number">02</span><h3>Backend</h3><p>API на Node.js и NestJS, базы данных, авторизация, роли и бизнес-логика.</p></article><article class="seo-card"><span class="number">03</span><h3>Интеграции</h3><p>Telegram, внешние API, AI-сервисы, уведомления и автоматизация процессов.</p></article></div></section><section class="seo-section"><h2>Основной стек</h2><ul class="seo-list"><li>TypeScript и JavaScript</li><li>React и Next.js</li><li>Node.js и NestJS</li><li>PostgreSQL и MongoDB</li><li>REST API и WebSocket</li><li>Docker и GitHub Actions</li></ul><div class="seo-actions"><a class="seo-button primary" href="{CONFIG['github']}" rel="noopener">Технический профиль на GitHub</a><a class="seo-button" href="{CONFIG['telegram']}" rel="noopener">Открыть Build with Yan</a></div></section>'''))
    write("contact/index.html", simple_page("contact", CONTACT, f'''<section class="seo-section"><h2>Что написать в первом сообщении</h2><ul class="seo-list"><li>Чем занимается ваш бизнес или продукт</li><li>Какую задачу нужно решить</li><li>Кто будет пользоваться решением</li><li>Какие сервисы уже используются</li></ul><div class="seo-actions"><a class="seo-button primary" href="{CONFIG['instagram']}" rel="noopener">Написать в Instagram</a><a class="seo-button" href="../process/">Этапы и условия</a><a class="seo-button" href="{CONFIG['telegram']}" rel="noopener">Канал Build with Yan</a><a class="seo-button" href="{CONFIG['github']}" rel="noopener">Открыть GitHub</a></div></section><section class="seo-section seo-faq"><h2>Перед началом</h2><details open><summary>Нужно ли готовое техническое задание?</summary><p>Нет. Достаточно своими словами описать проблему и желаемый результат. Структуру и технические детали можно определить вместе.</p></details><details><summary>Как формируются сроки и стоимость?</summary><p>После короткого брифа задача делится на этапы. Обычно проект занимает от одной недели до двух месяцев; точная оценка зависит от функций, интеграций и готовности контента.</p></details></section>'''))
    urls = [abs_url()] + [abs_url(slug) for slug in PAGES] + [abs_url("projects"), abs_url("process"), abs_url("about"), abs_url("contact")]
    today = date.today().isoformat()
    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "".join(f"  <url><loc>{escape(url)}</loc><lastmod>{today}</lastmod><changefreq>monthly</changefreq><priority>{'1.0' if url == abs_url() else '0.8'}</priority></url>\n" for url in urls) + "</urlset>\n"
    write("sitemap.xml", sitemap)
    write("robots.txt", f"User-agent: *\nAllow: /\n\nSitemap: {abs_url('sitemap.xml').rstrip('/')}\n")
    manifest = {"name": f"{PERSON_NAME} / {BRAND} — Full-stack разработчик", "short_name": BRAND, "description": "Сайты, CRM, SaaS и AI-автоматизация", "start_url": BASE, "scope": BASE, "display": "standalone", "background_color": "#000000", "theme_color": "#000000", "lang": "ru", "icons": [{"src": "assets/icon-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "assets/icon-512.png", "sizes": "512x512", "type": "image/png"}]}
    write("site.webmanifest", json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    index_now_key = CONFIG.get("indexNowKey")
    if index_now_key:
        write(f"{index_now_key}.txt", index_now_key + "\n")
    print(f"Generated {len(urls)} canonical URLs for {SITE}")


if __name__ == "__main__":
    main()
