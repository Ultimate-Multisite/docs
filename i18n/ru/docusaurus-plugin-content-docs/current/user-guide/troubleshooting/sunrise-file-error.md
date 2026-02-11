---
title: Ошибка файла Sunrise
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Ошибка установки файла Sunrise

Файл sunrise.php является специальным файлом, который WordPress ищет во время запуска. Чтобы WordPress смог обнаружить файл sunrise.php, он должен находиться внутри папки **wp-content**.

Когда вы активируете Ultimate Multisite и проходите мастер установки, как на скриншоте, Ultimate Multisite пытается скопировать наш файл sunrise.php в папку wp-content.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-v6hosgLWpt.png)

В большинстве случаев мы успешно копируем файл, и всё работает. Однако, если что‑то настроено неправильно (например, права доступа к папке), вы можете столкнуться с ситуацией, когда Ultimate Multisite не сможет скопировать файл.

Если вы прочитаете сообщение об ошибке, которое выдаёт Ultimo, вы увидите, что именно произошло: **Копирование sunrise.php не удалось**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RXS5EbirfM.png)

Чтобы исправить это, просто скопируйте файл sunrise.php из папки плагина wp-ultimo и вставьте его в вашу папку wp-content. После этого перезагрузите страницу мастера, и проверки пройдут успешно.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-p6hz1I9ycl.png) В любом случае, это может потребовать общего проверки прав доступа к папкам, чтобы избежать проблем в будущем (не только с Ultimate Multisite, но и с другими плагинами и темами).

Инструмент **Health Check**, который входит в WordPress (вы можете получить к нему доступ через панель управления вашего основного сайта **admin panel > Tools > Health Check**), позволяет узнать, установлены ли у вас права доступа к папкам, которые могут вызвать проблемы с WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oZEKeyxo2E.png)
