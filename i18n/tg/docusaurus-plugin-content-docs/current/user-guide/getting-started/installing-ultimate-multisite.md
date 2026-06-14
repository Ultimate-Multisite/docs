---
title: Насоз кардани Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Настаед Ultimate Multisite

:::note
Инструкция предполагает, что у вас уже установлен и настроен WordPress Multisite. Чтобы узнать как это сделать, посмотрите [этот туториал](https://www.wpbeginner.com/glossary/multisite/) от WP Beginner.
:::

## Установка плагина

Ultimate Multisite доступен бесплатно на [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Из вашей **Панели администратора сети** перейдите в **Плагины → Добавить новый плагин**.

![Страница добавления нового плагина в Панели администратора сети](/img/installation/add-new-plugin.png)

Найдите **"Ultimate Multisite"** (с кавычками для точного совпадения), и он появится как первый результат. Нажмите **Установить сейчас**.

![Результаты поиска, показывающие Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

После установки нажмите **Активировать сеть**, чтобы активировать плагин во всей вашей сети.

![Плагин установлен с кнопкой Активировать сеть](/img/installation/plugin-installed.png)

После активации вас автоматически перенаправит на Мастер настройки (Setup Wizard).

![Плагин активирован и перенаправлен в мастер](/img/installation/plugin-activated.png)

## Мастер настройки (Setup Wizard)

Мастер настройки проведет вас через настройку Ultimate Multisite примерно за 10 минут.

### Приветствие

Нажмите **Начать**, чтобы начать.

![Экран приветствия Мастера настройки](/img/installation/wizard-welcome.png)

### Проверки перед установкой (Pre-install Checks)

Этот шаг проверяет информацию о вашей системе и установку WordPress, чтобы убедиться, что они соответствуют требованиям Ultimate Multisite. Если все выглядит хорошо, нажмите **Перейти к следующему шагу**.

![Проверки перед установкой, показывающие системные требования](/img/installation/wizard-pre-install-checks.png)

:::note Даткони (Network Activate button v2.6.1+)
Агар Ultimate Multisite о安装 карда бошад, аммо **هنوز ба сеть фаъол нашуда** — масалан, агар шумо аз экран плагиноҳо **"Activate"** (single-site) вместо **"Network Activate"** аз меню плагиноҳои network расоне — марҳила Pre-install Checks инро мефаҳмояд ва як даступен кардани **"Network Activate"**-ро нишон медиҳад.

Нақши **"Network Activate"**-ро фиристодан, плагинро томе аз тамоми сети Multisite шумо авалои автомат фаъол мекунад. Баъди фаъоли шудан, wizard ба таври маъмул ба марҳила инсталӣ идома меёбад. Шумо барои танзими ҳолати фаъоли шудан лозим нест, ки аз wizard равед.
:::

### Инсталл (Installation)

Инсталтор ҷадвалҳои зарурӣ ва файли `sunrise.php`-ро сохта ва инсталл мекунад, ки Ultimate Multisite барои кор кардан ба он ниёз дорад. Барои идома додани кор, **"Install"**-ро фиристонед.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Ширкати шумо (Your Company)

Маълумоти ширкати худро пур кунед ва валюи воситаи худсонеро муайян намоед. Ин маълумот то тамоми платформаи WaaS шумо истифода мешавад. Вақте кор хутон карде, **"Continue"**-ро фиристонед.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Мундариҷаи восита (Default Content)

Ин марҳила ба шумо имкон медиҳад, ки шаблонҳо, маҳсулотҳо ва дигар мундариҷаҳои оғозӣ-ро инсталл кунед. Ин равиши хубист барои шинос шудан бо хусусиятҳои Ultimate Multisite. Барои илова кардани мундариҷаи восита, **"Install"**-ро фиристонед ё агар лозим набошад аз ин марҳила гузаред, агар шумо ба оғоз аз нав шурӯъ карданро афзал бинед.

![Default content installation step](/img/installation/wizard-default-content.png)

### Плагиноҳои пайвастшаванда (Recommended Plugins)

Барои инсталл кардани плагинҳои ҳамроҳ, ки тавсия дода шудаанд, имконият доред. Барои илова кардани онҳо **"Install"**-ро фиристонед ё барои идома додани кор аз ин марҳила гузаред.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Гоҳ аст! (Ready!)

Ҳама чиз ба таври мукамдел! Насозии Ultimate Multisite шумо омода шуд. Ин замон метавонед бо **Network Admin Dashboard** вебсайти худро ҳамчун платформаи "Website as a Service" сохта재вед.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Инро ба кор оред ва аз онҳо хурсанд шавед!
