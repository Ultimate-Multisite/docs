---
title: Помилка файлу Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Помилка встановлення файлу Sunrise

Файл sunrise.php — це спеціальний файл, який WordPress шукає під час свого завантаження. Щоб WordPress міг знайти файл sunrise.php, він має бути розміщений у **папці wp-content**.

Коли ви активуєте Ultimate Multisite і проходите майстер налаштування, як показано на скріншоті, Ultimate Multisite намагається скопіювати наш файл sunrise.php до папки wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

У більшості випадків копіювання файлу відбувається успішно і все працює. Однак якщо щось налаштовано неправильно (наприклад, права доступу до папок), ви можете зіткнутися з ситуацією, коли Ultimate Multisite не вдається скопіювати файл.

Якщо ви прочитаєте повідомлення про помилку від Ultimo, то побачите, що саме це й сталося: **Sunrise copy failed** (Не вдалося скопіювати Sunrise).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Щоб виправити це, просто скопіюйте файл sunrise.php із папки плагіна wp-ultimo та вставте його в папку wp-content. Після цього перезавантажте сторінку майстра — перевірки мають пройти успішно.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> У будь-якому випадку варто перевірити права доступу до папок, щоб уникнути проблем у майбутньому (не лише з Ultimate Multisite, а й з іншими плагінами та темами).

Інструмент **Health Check**, вбудований у WordPress (ви можете знайти його через **панель адміністратора головного сайту > Інструменти > Health Check**), може повідомити вам, чи встановлені права доступу до папок такими, що можуть спричинити проблеми з WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
