---
title: افزونه Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# بارگذار فایل Sunrise افزونه {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 یک بارگذار (loader) افزونه sunrise برای افزونه‌ها و ادغام‌های سفارشی MU-plugin اضافه می‌کند که نیاز دارند در طول بوت‌استرپ (bootstrapping) sunrise وردپرس اجرا شوند، بدون اینکه نیاز باشد فایل `wp-content/sunrise.php` تولید شده را ویرایش کنید.

## چه زمانی از آن استفاده کنیم {#when-to-use-it}

از یک افزونه sunrise زمانی استفاده کنید که ادغام شما باید قبل از بارگذاری افزونه‌های معمولی اجرا شود، مانند مسیریابی دامنه سفارشی، مدیریت درخواست‌های خاص میزبان، یا تنظیمات اولیه شبکه (network bootstrap) زودهنگام.

برای ادغام‌های عادی، ترجیحاً از افزونه‌های معمولی وردپرس، MU-pluginها، و هوک‌های (hooks) مستند Ultimate Multisite استفاده کنید. کد sunrise بسیار زود اجرا می‌شود و باید کوچک، محتاطانه و بدون وابستگی باشد.

## قرارداد نام‌گذاری فایل {#file-naming-convention}

یک فایل PHP به نام `sunrise.php` در یک دایرکتوری افزونه ایجاد کنید که نام آن با `ultimate-multisite-` شروع شود:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

بارگذار، دایرکتوری افزونه‌ها را برای یافتن این الگو اسکن می‌کند:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

فایل‌های مطابقت‌دهنده به ترتیب الفبایی بر اساس مسیر افزونه بارگذاری می‌شوند.

## محل قرارگیری فایل {#where-to-place-the-file}

فایل را در دایرکتوری ریشه افزونه‌ای که رفتار sunrise را در اختیار دارد، قرار دهید:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

این اسکن نسبت به `WP_CONTENT_DIR` انجام می‌شود، نه مقدار فعلی `WP_PLUGIN_DIR`. این کار باعث می‌شود که کشف (discovery) حتی زمانی که چند مستأجری (multi-tenancy) یا کدهای بوت‌استرپ زودهنگام دیگر، ثابت‌های دایرکتوری افزونه را در طول sunrise تغییر می‌دهند، پایدار بماند.

به طور مستقیم فایل تولید شده `wp-content/sunrise.php` را ویرایش نکنید. این بارگذار به شما اجازه می‌دهد تا با کد سفارشی، رفتار sunrise را گسترش دهید بدون اینکه نیاز باشد فایل اصلی sunrise که Ultimate Multisite نصب و به‌روزرسانی می‌کند را تغییر دهید.

## هوک‌ها و فیلترهای موجود {#hooks-and-filters-available}

فایل‌های sunrise افزونه پس از بارگذاری نگاشت دامنه Ultimate Multisite و قبل از اینکه وردپرس `ms_loaded` را فراخوانی کند، اجرا می‌شوند. در این مرحله، یک فایل sunrise می‌تواند:

- `$current_site` و `$current_blog` را بخواند یا بازنویسی کند؛
- پس از بارگذاری پیکربندی پایگاه داده، به `$wpdb` دسترسی پیدا کند؛
- در صورت نیاز، ثابت‌های زمان sunrise مانند `BLOG_ID_CURRENT_SITE` را تعریف کند؛
- وضعیت کمکی sunrise Ultimate Multisite را بخواند، از جمله وضعیت مسیریابی مورد استفاده توسط ادغام‌های چند مستأجری.

Ultimate Multisite پس از اتمام بارگذار sunrise خود، `wu_sunrise_loaded` را فراخوانی می‌کند. از این اکشن برای کدی که باید پس از تکمیل بوت‌استرپ sunrise اجرا شود اما همچنان متعلق به چرخه حیات sunrise است، استفاده کنید.

فقط توابعی را فراخوانی کنید که قبلاً در فاز sunrise بارگذاری شده‌اند. از کارهای سنگین پایگاه داده، رندر کردن قالب، درخواست‌های HTTP، و کدهایی که فرض می‌کنند ترتیب بارگذاری افزونه عادی تکمیل شده است، اجتناب کنید.

## مثال حداقل {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

پس از استقرار فایل، یک دامنه نگاشت شده و یک آدرس سایت اصلی بدون نگاشت را بارگذاری کنید تا تأیید شود که هر دو مسیر همچنان به درستی بوت‌استرپ می‌شوند.
