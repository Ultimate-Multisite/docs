---
title: Инсталиране на Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Инсталиране на Ultimate Multisite

:::note
Този урок предполага, че вече сте инсталирали и конфигурирали WordPress Multisite. За повече информация, вижте [този урок](https://www.wpbeginner.com/glossary/multisite/) от WP Beginner.
:::

## Инсталиране на плагина

Ultimate Multisite е налично безплатно на [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

От **Административния панел на мрежата (Network Admin Dashboard)** си отидете на **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Търсете **"Ultimate Multisite"** (с кавички за точен резултат) и той ще се появи като първи резултат. Кликнете върху **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

След инсталиране, кликнете върху **Network Activate**, за да активирате плагина във вашата цяла мрежа.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

След активиране, автоматично ще бъдете пренасочени към Потребителският (Setup) асистент.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Потребителският асистент (Setup Wizard)

Потребителският асистент ще ви проведе през процеса на конфигуриране на Ultimate Multisite за около 10 минути.

### Приветствие (Welcome)

Кликнете върху **Get Started**, за да започнете.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Проверки преди инсталация (Pre-install Checks)

Този етап проверява системната ви информация и инсталацията на WordPress, за да се увери, че отговаря на изискванията на Ultimate Multisite. Ако всичко изглежда добре, кликнете върху **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
Ако Ultimate Multisite е инсталиран, но **все още не е активиран на ниво мрежа** — например, ако сте кликнали върху **Activate** (за един сайт) вместо **Network Activate** от екрана с плагини на мрежата — етапът „Проверки преди инсталация“ ще забележи това и ще покаже бутон **Network Activate**.

Кликването върху **Network Activate** автоматично активира плагина във вашата цяла мрежа. След активиране, асистентът продължава нормално към етапа на инсталация. Не е необходимо да напускате асистента, за да поправите състоянието на активацията.
:::

### Инсталация (Installation)

Инсталаторът ще създаде необходимите таблици в базата данни и ще инсталира файла `sunrise.php`, който Ultimate Multisite изисква за работа. Кликнете върху **Install**, за да продължите.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Вашата компания (Your Company)

Попълнете информацията за компанията си и задайте стандартната валута. Тези данни ще бъдат използвани в цялата ви WaaS платформа. Кликнете върху **Continue**, когато приключите.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Съдържание по подразбиране (Default Content)

Този етап ви позволява да инсталирате предварително зададени шаблони, продукти и друго начално съдържание. Това е чудесен начин да се запознаете с функциите на Ultimate Multisite. Кликнете върху **Install**, за да добавите стандартното съдържание, или пропуснете този етап, ако предпочитате да започнете от нулата.

![Default content installation step](/img/installation/wizard-default-content.png)

### Препоръчителни плагини (Recommended Plugins)

По избор инсталирайте препоръчителни допълващи плагини. Кликнете върху **Install**, за да ги добавите, или пропуснете, за да продължите.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Готово! (Ready!)

Това е всичко! Инсталацията на Ultimate Multisite е завършена. Сега можете да започнете да изграждате вашата платформа Website as a Service от **Административния панел на мрежата (Network Admin Dashboard)**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Насладете се на процеса!
