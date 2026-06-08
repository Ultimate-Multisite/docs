---
title: Устаноўка Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Устаноўка Ultimate Multisite

:::note
Гэты туториал прымаўляе, што ў вас ужо ўстаноўвана і налагоджена WordPress Multisite. Калі хочаце даведацца, як гэта зрабіць, прачытайце [гэты туториал](https://www.wpbeginner.com/glossary/multisite/) ад WP Beginner.
:::

## Устаноўка плагіна

Ultimate Multisite даступны бясплатна на [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

З вашай **Панелі кіравання сеткай (Network Admin Dashboard)** зайдзіце ў **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Пашукайце **"Ultimate Multisite"** (з кавычкі для точнага спалучэння), і ён з'явіцца як першы вынік. Націсніце **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Пасля ўстаноўкі націсніце **Network Activate**, каб актываваць плагін па ўсей вашай сетцы.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Пасля актывацыі вас аўтаматычна перанакіруе на Мастак наладкі (Setup Wizard).

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Мастак наладкі (Setup Wizard)

Мастак наладкі павялічыць вам наладку Ultimate Multisite прыкладна за 10 хвілін.

### Вітківанне (Welcome)

Націсніце **Get Started**, каб пачаць.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Праверка да ўстаноўкі (Pre-install Checks)

Гэты крок праверыць інфармацыю вашай сістэмы і ўстанову WordPress, каб гарантаваць, што яна адпавядае патрабаванням Ultimate Multisite. Калі ўсё выглядае добра, націсніце **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
Калі Ultimate Multisite быў ўстаноўлены, але яшчэ **не актываваны на сетцы (network-activated)** — напрыклад, калі вы націснулі **Activate** (для адной сайта) замест **Network Activate** на экране плагінаў сеткі — крок "Праверка да ўстаноўкі" выбарыць гэта і адкажыць кнопку **Network Activate**.

Націску на **Network Activate** актывуе плагін па ўсей вашай сетцы ў аўтаматычным рэжыме. Пасля актывацыі мастак працягвае праходзіць звычайнымі крокамі да этапу ўстаноўкі. Вам не трэба пакідаць мастак, каб выправіць стан актывацыі.
:::

### Устаноўка (Installation)

Устаноўшчык створыць неабходныя табліцы базы дадзеных і ўсталюе файл `sunrise.php`, які патрабуецца Ultimate Multisite для працы. Націсніце **Install**, каб прайсці да таго.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Ваша кампанія (Your Company)

Заполніце інфармацыю пра вашу кампанію і ўсталюйце валюту па спілкуванні. Гэтыя дадзеныя будуць выкарыстоўвацца ў цэлым на вашай платформе WaaS. Націсніце **Continue**, калі ўсё зафармавана.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Пачатковы кантэнт (Default Content)

Гэты крок дазваляе вам ўсталюваць папярэдні зададзеныя шаблоны, прадукты і іншы пачатковы кантэнт. Гэта добры спосаб пазнаёміцца з функцыяналагікай Ultimate Multisite. Націсніце **Install**, каб дадаць пачатковы кантэнт, або праскочыце гэты крок, калі перакупіце пачынаць з нуля.

![Default content installation step](/img/installation/wizard-default-content.png)

### Рэкамендаваныя плагіны (Recommended Plugins)

Па факультаўным каб ўсталюваць рэкамендаваныя плагіны-компанянеры. Націсніце **Install**, каб дадаць іх, або праскочыце, каб працягнуць.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Гатова! (Ready!)

І гэта ўсё! Ваша ўстаноўка Ultimate Multisite завершаецца. Вы можаце пачаць ствараць сваю платформу Website as a Service з **Панелі кіравання сеткай (Network Admin Dashboard)**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Пачніце радвацца!
