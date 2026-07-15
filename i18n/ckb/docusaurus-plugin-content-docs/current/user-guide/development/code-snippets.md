---
title: پێکهاتەکانی کۆد
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets بۆ v2

بشێوەیە کلی، بەکارهێنانی code snippets بۆ **WordPress** ئەو کاران دەکرێت کە لەوانەیە پێویستیان بە پلاتینی بچووکێکی تایبەت هەبێت. ئەم code snippetsە لە یەکێک لە فایلەکانی ناوەکی WordPress یان Theme (بە گشتی فایلەکەی functions.phpی theme-ەکەت) دابنێیت، یان دەتوانیت وەک MU plugin بەکاربهێنیت.

لە ئەم بابەتدا ئێمە سێ code snippets دەبینین کە دەتوانیت لەگەڵ **Ultimate Multisite v2** بەکاری بهێنیت:

  * [**گۆڕینی شوێنی ماوەی مێنو یارمەتی (Account menu item)**](#changing-the-position-of-the-account-menu-item)

  * [**چۆنی هەڵبسۆش بکەیت کە بەرز لە چوارچێوەیەکی دیاریکراو بیت و/یان ئەبۆنێکی چالاکتوان هەبێت**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**ڕێکارکردنی کێشەکانی CORS لەگەڵ Font-Icons لە دۆمەینە مابووینەکاندا**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## گۆڕینی شوێنی ماوەی مێنو یارمەتی (Account menu item) {#changing-the-position-of-the-account-menu-item}

بۆ گۆڕینی شوێنی ماوەی مێنو یارمەتی لە داشبۆردی کلاینتەکەت، تەنها ئەم code snippetە بۆ فایلەکەی functions.phpی theme-ی سەرەکی سایتەکەت زیاد بکەیت. دەتوانیت هەمان snippetەکە لەناو یەکێک لە MU plugin یان custom plugins یەکەکەت دابنێیت.

add_filter('wu_my_account_menu_position', function() { return 10; // ئەم بەهایە بگۆڕە بۆ ئەوەی مێنوەکە لە شوێنی داتوویت دابنێت.

باش بۆ بررسی اینکه آیا اشتراک فعال است یا نه، می‌توانید از تابع زیر استفاده کنید:

`wu_is_active_subscriber($user_id)`

در اینجا یک قطعه کد نمونه آورده شده است که بررسی می‌کند آیا کاربر فعلی تحت یک طرح خاص (ID طرح ۵۰) قرار دارد و آیا اشتراک کاربر فعال است یا خیر.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // کاربر عضو طرح است و اشتراک او فعال است، کاری را انجام دهید} else { // کاربر عضو طرح نیست -- یا -- اشتراک او فعال نیست، کار دیگری انجام دهید}
// end if;
```

توجه داشته باشید که `wu_has_plan` برای کار کردن به یک "Plan ID" نیاز دارد.

برای دریافت شناسه یک طرح، می‌توانید به **Ultimate Multisite > Products** بروید. شناسه هر محصول در سمت راست جدول نمایش داده می‌شود.

توجه داشته باشید که کاربران فقط می‌توانند تحت یک **Plan** مشترک شوند، نه بسته یا سرویس، زیرا آن‌ها فقط افزونه‌هایی برای یک **Plan** هستند.

![Products list showing plan IDs](/img/admin/products-list.png)

## رفع مشکلات CORS با Font-Icons در دامنه‌های نگاشت شده {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## رفع مشکلات CORS با Font-Icons در دامنه‌های نگاشت شده {#fixing-cors-issues-with-font-icons-in-mapped-domains}

بعد از نگاشت یک دامنه به یک سایت فرعی، ممکن است متوجه شوید که سایت در بارگذاری فونت‌های سفارشی مشکل دارد. این مشکل به دلیل مسدود شدن درخواست‌ها (cross-origin block) در تنظیمات سرور شما ایجاد می‌شود.

از آنجایی که فایل‌های فونت تقریباً همیشه مستقیماً از CSS بارگذاری می‌شوند، افزونه نگاشت دامنه ما قادر به بازنویسی URLها برای استفاده از دامنه نگاشت شده به جای دامنه اصلی نیست؛ بنابراین برای رفع این مشکل، باید فایل‌های پیکربندی سرور خود را تغییر دهید.

ئەم کۆدە بۆ چارەسەرکردنی پڕۆبلی ئاپاچی (Apache) و NGINX دەبینیت. ئەم گۆڕانکارییان پێویستی بە زانیاری پیشرفته لەسەر فایلەکانی ڕێکخستنی خەریکی (وەک .htaccess و فایلەکانی NGINX) هەیە. ئەگەر خۆت ئامادە نییە بۆ ئەوەی ئەو گۆڕانکارییان بکەیت، ئەم پەڕەکە بۆ کارمەندانی پشتیوانی هاوسەنگەکەت بنێریت کاتێک پێویست بە یارمەتی دەبێت.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

لە فایلەکەی .htaccess خۆت، ئەمە زیاد بکە:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

لە فایلێکی ڕێکخستنی خەریکیی (جێگەی لەسەر سر apari دەگۆڕێت لە یەک سر apari بۆ ئەوەی بە شێوەیەکی جیاواز بێت)، ئەمە زیاد بکە:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
