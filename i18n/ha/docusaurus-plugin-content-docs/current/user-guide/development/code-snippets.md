---
title: Sako-sako na kodi
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kayanin Code Snippets ga v2

A'a, code snippets ga **WordPress** ga wajenawa don yin wani aiki da zai iya buƙatar wani plugin mai ƙarfi na musamman. Wannan code snippets ana saka shi a cikin wani fayil na asali (core) ko na theme ɗin WordPress (yawanci fayil ɗin functions.php na theme ɗinka), ko kuma za a iya amfani da shi a matsayin MU plugin.

A wannan rubutun, za mu nuna maka uku code snippets da za ka iya amfani da su tare da **Ultimate Multisite v2**:

  * [**Canza wajen menu ɗin Account**](#changing-the-position-of-the-account-menu-item)

  * [**Yadda ake bincike idan mai amfani yana ƙarƙashin wani tsari (plan) kuma ko yana da sabon shiga (subscription)**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Magance matsalolin CORS tare da Font-Icons a domains da aka haskaka**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Canza wajen menu ɗin Account {#changing-the-position-of-the-account-menu-item}

Don canza wajen menu ɗin Account a Dashboard na abokin ciniki, ka ƙara wannan code snippet ga fayil ɗin functions.php na theme ɗinka na asali. Za ka iya saka snippet ɗin a cikin wani MU plugin ko custom plugin ɗinka.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## Yadda ake bincike idan mai amfani yana ƙarƙashin wani tsari (plan) kuma ko yana da sabon shiga {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

A matsayin admin na gida (network admin), za ka iya buƙatar samar da functions na musamman waɗanda za su yi ayyukan asali ko su saka wani sabon aiki/feature ga wani ƙungiya ce ta masu biyan kuɗi ko masu amfani, dangane da yanayin shiga (subscription) da kuma tsarin (plan) da suka biye.

Wannan functions na asalin Ultimate Multisite za su taimaka maka wajen wannan.

Don bincike idan mai amfani yana cikin wani plan, za ka iya amfani da wannan function:

```php
wu_has_plan($user_id, $plan_id)
```

برای بررسی اینکه اشتراک فعال است، می‌توانید از این تابع استفاده کنید:

`wu_is_active_subscriber($user_id)`

در زیر یک قطعه کد نمونه آمده که بررسی می‌کند آیا کاربر فعلی تحت یک طرح خاص (ID طرح ۵۰) قرار دارد و آیا اشتراک کاربر فعال است یا خیر.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // کاربر عضو طرح است و اشتراک او فعال است، کاری را انجام دهید} else { // کاربر عضو طرح نیست -- یا -- اشتراک او فعال نیست، کار دیگری انجام دهید}
// end if;
```

توجه داشته باشید که `wu_has_plan` برای کار کردن به یک "Plan ID" نیاز دارد.

برای گرفتن شناسه یک طرح، می‌توانید به **Ultimate Multisite > Products** بروید. شناسه هر محصول در سمت راست جدول نمایش داده می‌شود.

توجه داشته باشید که کاربران فقط می‌توانند به یک **Plan** مشترک شوند، نه بسته یا سرویس، زیرا آن‌ها فقط افزونه‌هایی برای یک **Plan** هستند.

![Products list showing plan IDs](/img/admin/products-list.png)

## رفع مشکلات CORS با Font-Icons در دامنه‌های نگاشت شده {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## رفع مشکلات CORS با Font-Icons در دامنه‌های نگاشت شده {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

بعد از نگاشت یک دامنه به یک سایت زیرمجموعه، ممکن است متوجه شوید که سایت در بارگذاری فونت‌های سفارشی مشکل دارد. این مشکل به دلیل مسدود شدن درخواست‌ها (cross-origin block) در تنظیمات سرور شما ایجاد می‌شود.

از آنجایی که فایل‌های فونت تقریباً همیشه مستقیماً از CSS بارگذاری می‌شوند، افزونه نگاشت دامنه ما قادر به بازنویسی URLها برای استفاده از دامنه نگاشت شده به جای دامنه اصلی نیست؛ بنابراین برای رفع این مشکل، باید فایل‌های تنظیمات سرور خود را تغییر دهید.

### Apache {#apache}

A cikin fayil <code>.htaccess</code> ɗinka, ƙara wannan:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

A cikin fayil <code>config file</code> na server ɗinka (wannan wuri yana bambanta daga server zuwa server), ƙara wannan:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
