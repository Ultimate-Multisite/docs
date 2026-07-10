---
title: Инсталиране на Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Инсталиране на Ultimate Multisite {#installing-ultimate-multisite}

:::note
Този урок предполага, че вече сте инсталирали и конфигурирали WordPress Multisite. За да научите как, вижте [този урок](https://www.wpbeginner.com/glossary/multisite/) от WP Beginner.
:::

## Инсталиране на плъгина {#installing-the-plugin}

Ultimate Multisite е достъпен безплатно в [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

От вашия **Network Admin Dashboard**, отидете на **Plugins → Add New Plugin**.

![Страница Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Потърсете **"Ultimate Multisite"** (с кавички за точно съвпадение) и ще се появи като първи резултат. Кликнете върху **Install Now**.

![Резултати от търсенето, показващи Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

След инсталирането, кликнете върху **Network Activate**, за да активирате плъгина в цялата ви мрежа.

![Инсталиран плъгин с бутон Network Activate](/img/installation/plugin-installed.png)

След активиране ще бъдете автоматично пренасочени към Setup Wizard.

![Активиран плъгин и пренасочване към wizard](/img/installation/plugin-activated.png)

## Setup Wizard {#setup-wizard}

Setup Wizard ще ви напътства при конфигурирането на Ultimate Multisite за около 10 минути.

### Добре дошли {#welcome}

Кликнете върху **Get Started**, за да започнете.

![Начален екран на Setup Wizard](/img/installation/wizard-welcome.png)

### Предварителни проверки {#pre-install-checks}

Тази стъпка проверява системната ви информация и инсталацията на WordPress, за да се увери, че отговаря на изискванията на Ultimate Multisite. Ако всичко е наред, кликнете върху **Go to the Next Step**.

![Предварителни проверки, показващи системните изисквания](/img/installation/wizard-pre-install-checks.png)

:::note Бутон Network Activate (v2.6.1+)
Ако Ultimate Multisite е инсталиран, но **все още не е активиран в мрежата** — например, ако сте кликнали върху **Activate** (за един сайт), вместо върху **Network Activate** от страницата с плъгините за мрежата — стъпката Предварителни проверки ще открие това и ще покаже бутон **Network Activate**.

Кликването върху **Network Activate** активира плъгина в цялата ви multisite мрежа автоматично. След активиране, wizard-ът продължава нормално към стъпката за инсталиране. Няма нужда да напускате wizard-а, за да коригирате състоянието на активиране.
:::

### Инсталация {#installation}

Инсталаторът ще създаде необходимите таблици в базата данни и ще инсталира файла `sunrise.php`, от който Ultimate Multisite се нуждае, за да функционира. Кликнете върху **Install**, за да продължите.

![Стъпка за инсталиране, показваща таблиците в базата данни и sunrise.php](/img/installation/wizard-installation.png)

### Вашата компания {#your-company}

Попълнете информацията за вашата компания и задайте валутата по подразбиране. Тази информация ще се използва в цялата ви WaaS платформа. Кликнете върху **Continue**, когато приключите.

![Стъпка за конфигуриране на "Вашата компания"](/img/installation/wizard-your-company.png)

### Съдържание по подразбиране {#default-content}

Тази стъпка ви позволява да инсталирате предварително дефинирани шаблони, продукти и друго начално съдържание. Това е чудесен начин да се запознаете с функциите на Ultimate Multisite. Кликнете върху **Install**, за да добавите съдържанието по подразбиране или пропуснете тази стъпка, ако предпочитате да започнете от нулата.

![Стъпка за инсталиране на съдържание по подразбиране](/img/installation/wizard-default-content.png)

### Препоръчителни плъгини {#recommended-plugins}

По избор инсталирайте препоръчаните допълващи плъгини. Кликнете върху **Install**, за да ги добавите, или пропуснете, за да продължите.

![Стъпка с препоръчителни плъгини](/img/installation/wizard-recommended-plugins.png)

### Готово! {#ready}

Това е всичко! Вашата инсталация на Ultimate Multisite е завършена. Сега можете да започнете да изграждате вашата Website as a Service платформа от **Network Admin Dashboard**.

![Инсталацията е завършена - екран "Готово"](/img/installation/wizard-ready.png)

![Network Admin Dashboard с активен Ultimate Multisite](/img/installation/network-dashboard.png)

Забавлявайте се!
