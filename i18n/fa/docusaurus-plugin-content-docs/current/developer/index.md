---
title: مستندات توسعه‌دهنده
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# مستندات توسعه‌دهنده

این راهنما تمام آنچه را که توسعه‌دهندگان برای ادغام، گسترش یا توسعه افزونه‌های جانبی (addon) برای Ultimate Multisite نیاز دارند، فراهم می‌کند. Ultimate Multisite یک شبکه WordPress Multisite را به یک پلتفرم وب‌سایت به عنوان سرویس (WaaS) تبدیل می‌کند.

## چه مواردی در دسترس است {#whats-available}

- **[REST API](./rest-api/overview)** — عملیات کامل CRUD برای تمام موجودیت‌ها (مشتریان، سایت‌ها، عضویت‌ها، پرداخت‌ها، محصولات، دامنه‌ها) با احراز هویت کلید API
- **[Hooks Reference](./hooks/guide)** — بیش از ۲۰۰ هوک اکشن (action hook) و بیش از ۲۸۰ هوک فیلتر (filter hook) برای رویدادهای چرخه عمر و سفارشی‌سازی
- **[Integration Guide](./integration-guide/)** — مثال‌هایی برای ادغام با CRM، آنالیتیکس، درگاه‌های سفارشی و وب‌هوک‌ها
- **[Code Examples](./code-examples/)** — الگوهای پیشرفته برای قیمت‌گذاری پویا، تأمین منابع سایت، محدودیت‌های سفارشی و پردازش چند درگاه
- **[Addon Development](./addon-development/getting-started)** — چارچوب ساختاریافته برای ساخت افزونه‌های جانبی

## پیش‌نیازها {#requirements}

- نصب WordPress Multisite
- PHP 7.4 یا بالاتر
- فعال بودن افزونه Ultimate Multisite

## نصب با Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite در [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) با نام `ultimate-multisite/ultimate-multisite` در دسترس است. این روش نصب، روش توصیه‌شده برای محیط‌های WordPress مبتنی بر [Bedrock](https://roots.io/bedrock/) و سایر محیط‌های مدیریت شده توسط Composer است.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
بسته Composer در نسخه v2.6.1 از `devstone/ultimate-multisite` به `ultimate-multisite/ultimate-multisite` تغییر نام داده است. اگر `composer.json` شما به نام فروشنده قدیمی اشاره می‌کند، عبارت `require` را به‌روزرسانی کرده و دستور `composer update` را اجرا کنید.
:::

پس از نصب، افزونه را از طریق پیشخوان شبکه (Network Admin) فعال کنید:

```bash
wp plugin activate ultimate-multisite --network
```

یا، اگر افزونه را به عنوان یک افزونه اجباری (must-use plugin) از طریق autoloader Bedrock بارگذاری می‌کنید، از فیلتر `wp_ultimo_skip_network_active_check` برای دور زدن محافظ فعال‌سازی استفاده کنید:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## شروع سریع {#quick-start}

### استفاده از REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### اتصال به رویدادها (Hooks) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // واکنش به ثبت‌نام مشتری جدید
});
```

### ساخت یک افزونه جانبی (Addon) {#build-an-addon}

```bash
# تولید اسکلت افزونه جانبی از قالب
bash create-addon.sh
```

برای مستندات و مثال‌های مفصل، هر بخش را بررسی کنید.
