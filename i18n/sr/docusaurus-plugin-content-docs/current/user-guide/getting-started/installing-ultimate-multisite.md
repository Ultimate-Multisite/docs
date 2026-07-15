---
title: Инсталирање Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Инсталација Ultimate Multisite

:::note
Овај туториал претпоставља да већ имате инсталиран и конфигурисан WordPress Multisite. Да бисте сазнали како то учинити, погледајте [овај туторијал](https://www.wpbeginner.com/glossary/multisite/) на WP Beginner-у.
:::

## Инсталација плугина {#installing-the-plugin}

Ultimate Multisite је доступан бесплатно на [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Из вашег **Network Admin Dashboard**-а, идите на **Plugins → Add New Plugin**.

![Страница Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Претражите **"Ultimate Multisite"** (са наводницима за тачно подударање) и појавиће се као први резултат. Кликните на **Install Now**.

![Резултати претраге који приказују Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Након инсталације, кликните на **Network Activate** да бисте активирали плугин широм ваше мреже.

![Плугин инсталиран са дугметом Network Activate](/img/installation/plugin-installed.png)

Након активирања, аутоматски ћете бити преусмерени на Setup Wizard.

![Плугин активиран и преусмерен на чаробњака](/img/installation/plugin-activated.png)

## Setup Wizard {#setup-wizard}

Setup Wizard ће вас водити кроз конфигурацију Ultimate Multisite-а у року од око 10 минута.

### Добродошли {#welcome}

Кликните на **Get Started** да бисте почели.

![Почетни екран Setup Wizard-а](/img/installation/wizard-welcome.png)

### Прегледи пре инсталације {#pre-install-checks}

Овај корак проверава информације о вашем систему и WordPress инсталацији како би се уверио да испуњава захтеве Ultimate Multisite-а. Ако је све у реду, кликните на **Go to the Next Step**.

![Прегледи пре инсталације који приказују системске захтеве](/img/installation/wizard-pre-install-checks.png)

:::note Дугме Network Activate (v2.6.1+)
Ако је Ultimate Multisite инсталиран, али **још није мрежно активиран** — на пример, ако сте кликнули на **Activate** (за један сајт) уместо на **Network Activate** са екрана плугина за мрежу — корак Прегледи пре инсталације ће то детектовати и приказати дугме **Network Activate**.

Кликнућем на **Network Activate**, плугин се аутоматски активира широм ваше multisite мреже. Након активирања, чаробњак нормално наставља до корака инсталације. Нема потребе да напустите чаробњака ради поправке стања активирања.
:::

### Инсталација {#installation}

Инсталатор ће креирати неопходне табеле базе података и инсталирати `sunrise.php` фајл који Ultimate Multisite-у треба да би функционисао. Кликните на **Install** да бисте наставили.

![Корак инсталације који приказује табеле базе података и sunrise.php](/img/installation/wizard-installation.png)

### Ваша компанија {#your-company}

Попуните информације о вашој компанији и поставите валуту по подразумеваном. Ове информације ће се користити широм ваше WaaS платформе. Кликните на **Continue** када завршите.

![Корак конфигурације Your Company](/img/installation/wizard-your-company.png)

### Подразумевани садржај {#default-content}

Овај корак вам омогућава да инсталирате предефинисане шаблоне, производе и други почетни садржај. Ово је одличан начин да упознате функције Ultimate Multisite-а. Кликните на **Install** да бисте додали подразумевани садржај или пропустите овај корак ако желите да почнете од нуле.

![Корак инсталације подразумеваног садржаја](/img/installation/wizard-default-content.png)

### Препоручени плугини {#recommended-plugins}

Опционо инсталирајте препоручене придружене плугине. Кликните на **Install** да бисте их додали или пропустите да бисте наставили.

![Корак препоручених плугина](/img/installation/wizard-recommended-plugins.png)

### Спремно! {#ready}

То је то! Ваша инсталација Ultimate Multisite-а је комплетна. Сада можете почети да градите вашу Website as a Service платформу из **Network Admin Dashboard**-а.

![Инсталација завршена - Екран Ready](/img/installation/wizard-ready.png)

![Network Admin Dashboard са активним Ultimate Multisite-ом](/img/installation/network-dashboard.png)

Напредујте и забављајте се!
