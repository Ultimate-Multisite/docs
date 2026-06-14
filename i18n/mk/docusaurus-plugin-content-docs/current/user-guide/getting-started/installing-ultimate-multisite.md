---
title: Инсталирање на Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Инсталирање Ultimate Multisite

:::note
Овај туториал претпоставува дека веќе имате инсталиран и конфигуриран WordPress Multisite. За да научите како, проверете [овој туториал](https://www.wpbeginner.com/glossary/multisite/) од WP Beginner.
:::

## Инсталирање на плагинот

Ultimate Multisite е бесплатен и достапен на [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Од вашата **Network Admin Dashboard**, отидете на **Plugins → Add New Plugin**.

![Страна за добав Губи нови плагини](/img/installation/add-new-plugin.png)

Пребарајте **"Ultimate Multisite"** (со цитаци за точен мач) и ќе се појави како прв резултат. Кликнете на **Install Now**.

![Резултати од пребарување со Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

По инсталирањето, кликнете на **Network Activate** за да активирате плагинот во целата вашата мрежа.

![Плагинот инсталиран со копче Network Activate](/img/installation/plugin-installed.png)

По активирањето, ќе бидете автоматски пренасочени на Setup Wizard (Мастер за поставување).

![Плагинот активиран и пренасочен на мастер](/img/installation/plugin-activated.png)

## Setup Wizard (Мастер за поставување)

Setup Wizard ќе ви ги води со конфигурацијата на Ultimate Multisite во околу 10 минути.

### Welcome (Добро доаѓајте)

Кликнете на **Get Started** за да започнете.

![Екран за добродоаѓање на Setup Wizard](/img/installation/wizard-welcome.png)

### Pre-install Checks (Провери пред инсталирањето)

Оваа чекор проверува информациите од вашата система и инсталацијата на WordPress за да се осигура дека ги исполнува барањата на Ultimate Multisite. Ако сè изгледа добро, кликнете на **Go to the Next Step** (Оди на следната чекор).

![Провери пред инсталирањето со системските барања](/img/installation/wizard-pre-install-checks.png)

:::note Кнопка Network Activate (v2.6.1+)
Ако Ultimate Multisite е инсталиран, но **се не е активиран за мрежа** — на пример, ако сте кликнувале на **Activate** (single-site) наместо **Network Activate** од екранот на плагините за мрежа — чекор Pre-install Checks ќе го забележи ова и ќе прикаже копче **Network Activate**.

Кликнувањето на **Network Activate** активира плагинот автоматски низ целата вашата мрежа со multisite. Обезбеденост, по активирано, wizards-от продолжува нормално до чекорот за инсталација. Не треба да го напуштите wizard-от за да го исправите состојбата на активација.
:::

### Инсталација

Инсталаторот ќе создаде потребните табели во базата на податоци и ќе инсталираат `sunrise.php` 파일을 што Ultimate Multisite му треба за да функционира. Кликнете на **Install** за да продолжиме.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Вашата компанија

Пополнете ја информацијата за вашата компанија и поставите ја вашата предсметна валута. Оваа информација ќе се користи низ целата вашата WaaS платформа. Кликнете на **Continue** кога ќе завршите.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Предлажни содржини

Овој чекор ви овозможува да инсталирате преддефинирани шаблони, производи и друга почетна содржина. Ова е одлична можност за да се запознаете со функциите на Ultimate Multisite. Кликнете на **Install** за да додадете ја предделната содржина, или пропуштете овој чекор ако предпочитате да почнете од нула.

![Default content installation step](/img/installation/wizard-default-content.png)

### Препорачани плагини

По избор инсталирајте препорачлени сопутствувачки плагини. Кликнете на **Install** за да ги додадете или пропуштете за да продолжиме.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Готово!

Тоа е тоа! Инсталацијата на вашата Ultimate Multisite е завршена. Сега можете да започнете со изградење на вашата веб-платформа како услуга од **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Сега можете да се забавувате!
