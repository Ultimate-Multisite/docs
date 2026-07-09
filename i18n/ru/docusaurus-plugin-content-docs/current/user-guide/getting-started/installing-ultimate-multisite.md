---
title: Установка плагина Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Установка Ultimate Multisite {#installing-ultimate-multisite}

:::note
В этом руководстве предполагается, что у вас уже установлена и настроена система WordPress Multisite. Чтобы узнать, как это сделать, ознакомьтесь с [этим руководством](https://www.wpbeginner.com/glossary/multisite/) от WP Beginner.
:::

## Установка плагина {#installing-the-plugin}

Ultimate Multisite доступен бесплатно на [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

На панели **Network Admin Dashboard** перейдите в раздел **Plugins → Add New Plugin**.

![Страница Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Найдите плагин **"Ultimate Multisite"** (в кавычках для точного совпадения), и он появится первым в результатах поиска. Нажмите **Install Now**.

![Результаты поиска, показывающие Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

После установки нажмите **Network Activate**, чтобы активировать плагин во всей вашей сети.

![Плагин установлен с кнопкой Network Activate](/img/installation/plugin-installed.png)

После активации вы автоматически будете перенаправлены в Setup Wizard (мастер настройки).

![Плагин активирован и перенаправлен в мастер настройки](/img/installation/plugin-activated.png)

## Мастер настройки {#setup-wizard}

Мастер настройки поможет вам настроить Ultimate Multisite примерно за 10 минут.

### Приветствие {#welcome}

Нажмите **Get Started**, чтобы начать.

![Приветственный экран мастера настройки](/img/installation/wizard-welcome.png)

### Предварительные проверки {#pre-install-checks}

На этом этапе проверяется информация о вашей системе и установка WordPress, чтобы убедиться, что она соответствует требованиям Ultimate Multisite. Если все в порядке, нажмите **Go to the Next Step**.

![Предварительные проверки с отображением системных требований](/img/installation/wizard-pre-install-checks.png)

:::note Кнопка Network Activate (v2.6.1+)
Если Ultimate Multisite был установлен, но **еще не активирован в сети** — например, если вы нажали **Activate** (для одного сайта), а не **Network Activate** на экране плагинов сети — этап предварительных проверок это обнаружит и отобразит кнопку **Network Activate**.

Нажатие кнопки **Network Activate** автоматически активирует плагин во всей вашей мультисайтовой сети. После активации мастер настройки продолжит работу в обычном режиме, переходя к этапу установки. Вам не нужно покидать мастер настройки, чтобы исправить состояние активации.
:::

### Установка {#installation}

Установщик создаст необходимые таблицы базы данных и установит файл `sunrise.php`, который необходим для работы Ultimate Multisite. Нажмите **Install**, чтобы продолжить.

![Этап установки с отображением таблиц базы данных и файла sunrise.php](/img/installation/wizard-installation.png)

### Ваша компания {#your-company}

Заполните информацию о вашей компании и установите валюту по умолчанию. Эта информация будет использоваться во всей вашей платформе WaaS (Website as a Service). Нажмите **Continue**, когда закончите.

![Этап настройки "Ваша компания"](/img/installation/wizard-your-company.png)

### Контент по умолчанию {#default-content}

На этом этапе вы можете установить предварительно определенные шаблоны, продукты и другой стартовый контент. Это отличный способ ознакомиться с функциями Ultimate Multisite. Нажмите **Install**, чтобы добавить контент по умолчанию, или пропустите этот шаг, если хотите начать с нуля.

![Этап установки контента по умолчанию](/img/installation/wizard-default-content.png)

### Рекомендуемые плагины {#recommended-plugins}

При желании установите рекомендуемые дополнительные плагины. Нажмите **Install**, чтобы добавить их, или пропустите этот шаг, чтобы продолжить.

![Этап с рекомендуемыми плагинами](/img/installation/wizard-recommended-plugins.png)

### Готово! {#ready}

Все готово! Установка Ultimate Multisite завершена. Теперь вы можете начать создавать свою платформу Website as a Service из **Network Admin Dashboard**.

![Настройка завершена — экран "Готово"](/img/installation/wizard-ready.png)

![Network Admin Dashboard с активным Ultimate Multisite](/img/installation/network-dashboard.png)

Вперед, получайте удовольствие!
