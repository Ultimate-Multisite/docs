---
title: تنظیم ثابت Sunrise در Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# تنظیم ثابت Sunrise روی true در Closte

برخی از ارائه‌دهندگان هاست، فایل wp-config.php را به دلایل امنیتی قفل می‌کنند. این یعنی Ultimate Multisite نمی‌تواند به صورت خودکار این فایل را ویرایش کند تا ثابت‌های لازم برای عملکرد صحیح نگاشت دامنه و سایر قابلیت‌ها را اضافه کند. Closte یکی از این هاست‌هاست.

با این حال، Closte راهی امن برای افزودن ثابت‌ها به wp-config.php ارائه می‌دهد. کافی است مراحل زیر را دنبال کنید:

## در داشبورد Closte

ابتدا [وارد حساب Closte خود شوید](https://app.closte.com/)، روی گزینه Sites در منو کلیک کنید، سپس روی لینک Dashboard برای سایتی که روی آن کار می‌کنید کلیک کنید:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

تعدادی گزینه جدید در سمت چپ صفحه نمایش داده می‌شود. از این منو به صفحه **Settings** بروید:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

سپس در صفحه **Settings**، تب WP-Config را پیدا کنید و در آن تب، فیلد "Additional wp-config.php content" را بیابید:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

برای نصب Ultimate Multisite، باید ثابت sunrise را در این فیلد اضافه کنید. کافی است یک خط جدید ایجاد کنید و کد زیر را در آن قرار دهید. سپس روی دکمه **Save All** کلیک کنید.

define('SUNRISE', true);

همین! کار تمام است. به صفحه نصب Ultimate Multisite برگردید و صفحه را رفرش کنید تا ادامه فرآیند را انجام دهید.
