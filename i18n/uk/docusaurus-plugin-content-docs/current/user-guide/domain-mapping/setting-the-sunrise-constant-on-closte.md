---
title: Налаштування константи Sunrise на Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Налаштування константи Sunrise зі значенням true на Closte

Деякі хостинг-провайдери блокують файл wp-config.php з міркувань безпеки. Це означає, що Ultimate Multisite не може автоматично редагувати файл, щоб додати необхідні константи для роботи прив'язки доменів та інших функцій. Closte — один із таких хостингів.

Проте Closte пропонує безпечний спосіб додавання констант до wp-config.php. Вам просто потрібно виконати наведені нижче кроки:

## На панелі керування Closte

Спочатку [увійдіть до свого облікового запису Closte](https://app.closte.com/), натисніть на пункт меню Sites, а потім натисніть на посилання Dashboard для сайту, з яким ви працюєте:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ліворуч на екрані з'явиться ряд нових пунктів меню. Перейдіть на сторінку **Settings** за допомогою цього меню:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Потім на сторінці **Settings** знайдіть вкладку WP-Config, а на ній — поле "Additional wp-config.php content":

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Для встановлення Ultimate Multisite вам потрібно додати константу sunrise у це поле. Просто додайте новий рядок і вставте код, наведений нижче. Після цього натисніть кнопку **Save All**.

define('SUNRISE', true);

Ось і все, налаштування завершено. Поверніться до майстра встановлення Ultimate Multisite та оновіть сторінку, щоб продовжити процес.
