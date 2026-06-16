---
title: Инсталирање на Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Инсталирање на Ultimate Multisite

:::note
Овој водич претпоставува дека веќе имате инсталирано и конфигурирано WordPress Multisite. За да дознаете како, проверете го [овој водич](https://www.wpbeginner.com/glossary/multisite/) од WP Beginner.
:::

## Инсталирање на приклучокот (Plugin)

Ultimate Multisite е достапен бесплатно на [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Од вашиот **Network Admin Dashboard**, одете во **Plugins → Add New Plugin**.

![Страница „Додај нов приклучок“ во Network Admin](/img/installation/add-new-plugin.png)

Пребарајте го "**Ultimate Multisite**" (со наведниците за точно совпаѓање) и ќе се појави како прв резултат. Кликнете **Install Now**.

![Резултати од пребарувањето што покажуваат Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Откако ќе биде инсталиран, кликнете **Network Activate** за да го активирате приклучокот во целата ваша мрежа.

![Инсталиран приклучок со копче „Network Activate“](/img/installation/plugin-installed.png)

По активацијата, автоматски ќе бидете пренасочени до Setup Wizard (Водениот процес на поставување).

![Приклучокот е активиран и пренасочен кон воден процес](/img/installation/plugin-activated.png)

## Воден процес на поставување (Setup Wizard)

Водениот процес ќе ве води низ конфигурирањето на Ultimate Multisite за околу 10 минути.

### Добредојдовте

Кликнете **Get Started** за да започнете.

![Добредојдовна страница на воден процес](/img/installation/wizard-welcome.png)

### Претходни проверки (Pre-install Checks)

Овој чекор ги проверува вашите системски информации и WordPress инсталацијата за да се увери дека ги исполнува барањата на Ultimate Multisite. Ако сè изгледа во ред, кликнете **Go to the Next Step**.

![Претходни проверки што покажуваат системски барања](/img/installation/wizard-pre-install-checks.png)

:::note Копче „Network Activate“ (верзија 2.6.1+)
Ако Ultimate Multisite е инсталиран, но **сè уште не е активиран во мрежата** — на пример, ако кликнете **Activate** (за единична локација) наместо **Network Activate** од екранот со приклучоци за мрежата — чекорот „Претходни проверки“ ќе го открие ова и ќе прикаже копче **Network Activate**.

Кликнете **Network Activate** за да го активирате приклучокот во целата ваша мултисајтна мрежа автоматски. Откако ќе биде активиран, водениот процес продолжува нормално до чекорот на инсталација. Не треба да го напуштате водениот процес за да го поправите статусот на активација.
:::

### Инсталација (Installation)

Инсталаторот ќе ги креира потребните табели во базата на податоци и ќе ја инсталира datoteka-та `sunrise.php` што Ultimate Multisite треба за да функционира. Кликнете **Install** за да продолжите.

![Чекор на инсталација што покажува табели во базата на податоци и sunrise.php](/img/installation/wizard-installation.png)

### Ваша компанија (Your Company)

Пополнете ги информациите за вашата компанија и поставете ја вашата стандардна валута. Овие информации ќе се користат во целата платформа WaaS. Кликнете **Continue** кога ќе завршите.

![Чекор „Ваша компанија“ за конфигурирање](/img/installation/wizard-your-company.png)

### Стандарден содржина (Default Content)

Овој чекор ви овозможува да инсталирате претходно дефинирани шаблони, производи и друга почетна содржина. Ова е одличен начин да се запознаете со функциите на Ultimate Multisite. Кликнете **Install** за да ја додадете стандардната содржина или прескокнете го овој чекор ако сакате да започнете од нула.

![Чекор за инсталирање стандардна содржина](/img/installation/wizard-default-content.png)

### Препорачани приклучоци (Recommended Plugins)

Опционално, инсталирајте ги препорачаните придружни приклучоци. Кликнете **Install** за да ги додадете или прескокнете за да продолжите.

![Чекор „Препорачани приклучоци“](/img/installation/wizard-recommended-plugins.png)

### Готово! (Ready!)

Тоа е сè! Вашата инсталација на Ultimate Multisite е завршена. Сега можете да започнете со изградба на вашата платформа „Веб-страница како услуга“ од **Network Admin Dashboard**.

![Инсталацијата е комплетна - екран „Готово“](/img/installation/wizard-ready.png)

![Network Admin Dashboard со активиран Ultimate Multisite](/img/installation/network-dashboard.png)

Продолжете и забавувајте се!
