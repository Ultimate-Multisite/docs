---
title: Устаноўка плагіна Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Устаноўка Ultimate Multisite {#installing-ultimate-multisite}

:::note
Гэты падручнік мяркуе, што ў вас ужо устаноўлены і наладжаны WordPress Multisite. Каб даведацца, як гэта зрабіць, азнаёмцеся з [гэтым кіраўніцтвам](https://www.wpbeginner.com/glossary/multisite/) ад WP Beginner.
:::

## Устаноўка плагіна {#installing-the-plugin}

Ultimate Multisite даступны бясплатна на [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

У вашым **Network Admin Dashboard**, перайдзіце ў **Plugins → Add New Plugin**.

![Старонка Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Знайдзіце **"Ultimate Multisite"** (у двукоссі для дакладнага супадзення), і ён з'явіцца ў якасці першага выніку. Націсніце **Install Now**.

![Вынікі пошуку, якія паказваюць Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Пасля ўстаноўкі націсніце **Network Activate**, каб актываваць плагін ва ўсёй вашай сетцы.

![Усталяваны плагін з кнопкай Network Activate](/img/installation/plugin-installed.png)

Пасля актывацыі вас аўтаматычна перанакіруюць у Setup Wizard.

![Плагін актываваны і пераадрасаваны ў майстар налад](/img/installation/plugin-activated.png)

## Майстар налад (Setup Wizard) {#setup-wizard}

Майстар налад дапаможа вам наладзіць Ultimate Multisite прыблізна за 10 хвілін.

### Вітаем {#welcome}

Націсніце **Get Started**, каб пачаць.

![Вітальная старонка майстра налад](/img/installation/wizard-welcome.png)

### Папярэднія праверкі (Pre-install Checks) {#pre-install-checks}

Гэты крок правярае інфармацыю аб вашай сістэме і ўстаноўцы WordPress, каб пераканацца, што яна адпавядае патрабаванням Ultimate Multisite. Калі ўсё добра, націсніце **Go to the Next Step**.

![Папярэднія праверкі, якія паказваюць сістэмныя патрабаванні](/img/installation/wizard-pre-install-checks.png)

:::note Кнопка Network Activate (v2.6.1+)
Калі Ultimate Multisite быў устаноўлены, але **яшчэ не актываваны ў сетцы** — напрыклад, калі вы націснулі **Activate** (для аднаго сайта), а не **Network Activate** са старонкі плагінаў сеткі — крок папярэдніх праверак гэта заўважыць і адлюструе кнопку **Network Activate**.

Націскаючы **Network Activate**, вы аўтаматычна актывуеце плагін ва ўсёй вашай сетцы. Пасля актывацыі майстар налад будзе працягваць работу звычайна да кроку ўстаноўкі. Вам не трэба пакідаць майстар налад, каб вырашыць праблему з актывацыяй.
:::

### Устаноўка (Installation) {#installation}

Усталёўшчык створыць неабходныя табліцы базы дадзеных і ўсталюе файл `sunrise.php`, які патрэбны для працы Ultimate Multisite. Націсніце **Install**, каб працягнуць.

![Крок устаноўкі, які паказвае табліцы базы дадзеных і файл sunrise.php](/img/installation/wizard-installation.png)

### Ваша кампанія (Your Company) {#your-company}

Запоўніце інфармацыю аб вашай кампаніі і ўкажыце валюту па змаўчанні. Гэтая інфармацыя будзе выкарыстоўвацца ва ўсёй вашай WaaS-платформе. Націсніце **Continue**, калі скончыце.

![Крок налады "Ваша кампанія"](/img/installation/wizard-your-company.png)

### Змястоў па змаўчанні (Default Content) {#default-content}

Гэты крок дазваляе ўсталяваць зададзеныя шаблоны, прадукты і іншы стартавы кантэнт. Гэта выдатны спосаб азнаёміцца ​​з функцыямі Ultimate Multisite. Націсніце **Install**, каб дадаць змястоў па змаўчанні, або прапусціце гэты крок, калі аддаеце перавагу пачынаць з нуля.

![Крок устаноўкі зместу па змаўчанні](/img/installation/wizard-default-content.png)

### Рэкамендаваныя плагіны (Recommended Plugins) {#recommended-plugins}

Пры неабходнасці ўсталюйце рэкамендаваныя дадатковыя плагіны. Націсніце **Install**, каб дадаць іх, або прапусціце, каб працягнуць.

![Крок з рэкамендаванымі плагінамі](/img/installation/wizard-recommended-plugins.png)

### Гатова! (Ready!) {#ready}

Вось і ўсё! Устаноўка Ultimate Multisite завершана. Цяпер вы можаце пачаць ствараць сваю платформу Website as a Service з **Network Admin Dashboard**.

![Налады завершаны - старонка "Гатова"](/img/installation/wizard-ready.png)

![Network Admin Dashboard з актыўным Ultimate Multisite](/img/installation/network-dashboard.png)

Пачніце і атрымлівайце задавальненне!
