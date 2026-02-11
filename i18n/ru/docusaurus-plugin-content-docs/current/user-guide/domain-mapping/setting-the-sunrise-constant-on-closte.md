---
title: Установка константы рассвета в Closte
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Setting the Sunrise constant to true on Closte

Некоторые хостинг‑провайдеры блокируют wp-config.php по соображениям безопасности. Это означает, что Ultimate Multisite не может автоматически редактировать файл, чтобы включить необходимые константы для работы сопоставления доменов и других функций. Closte — один из таких хостов.

Однако Closte предлагает способ безопасно добавить константы в wp-config.php. Нужно просто выполнить следующие шаги:

## On the Closte dashboard

Сначала [войдите в свой аккаунт Closte](https://app.closte.com/), нажмите пункт меню Sites, затем щелкните ссылку Dashboard на сайте, над которым вы сейчас работаете:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dPRIeofCDK.png)

Вам будет показано несколько новых пунктов меню с левой стороны экрана. Перейдите на страницу **Settings** с помощью этого меню:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JmSwHIOaGz.png)

Затем на странице **Settings** найдите вкладку WP-Config, а затем поле «Additional wp-config.php content» на этой вкладке:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FqVEnSTIu9.png)

В контексте установки Ultimate Multisite вам нужно добавить константу sunrise в это поле. Просто добавьте новую строку и вставьте строку ниже. После этого нажмите кнопку **Save All**.

define('SUNRISE', true);

Всё, вы готовы. Вернитесь к мастеру установки Ultimate Multisite и обновите страницу, чтобы продолжить процесс.
