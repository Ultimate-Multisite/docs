---
title: قالب افزونه
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# قالب افزونه (Addon Template) {#addon-template}

{{ADDON_DESCRIPTION}}

## پیش‌نیازها (Requirements) {#requirements}

- WordPress نسخه ۵.۳ یا بالاتر
- PHP نسخه ۷.۴ یا بالاتر
- افزونه Multisite Ultimate (فعال)

## نصب (Installation) {#installation}

1. فایل‌های افزونه را در مسیر `/wp-content/plugins/` آپلود کنید
2. افزونه را از طریق منوی 'Plugins' در وردپرس فعال کنید
3. تنظیمات افزونه را در بخش مدیریت شبکه (network admin) پیکربندی کنید

## توسعه (Development) {#development}

### راه‌اندازی (Setup) {#setup}

```bash
# نصب وابستگی‌ها
composer install
npm install

# اجرای تست‌ها
npm run test

# اجرای بررسی‌های استاندارد کد
vendor/bin/phpcs
vendor/bin/phpstan

# رفع مشکلات سبک کد
vendor/bin/phpcbf

# ساخت برای محیط عملیاتی (Production)
npm run build
```

### ساختار پروژه (Project Structure) {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # کلاس‌ها و فایل‌های شامل PHP
│   ├── class-multisite-ultimate-updater.php  # مدیریت به‌روزرسانی
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # عملکرد اصلی
├── tests/                        # تست‌های واحد (Unit tests)
│   ├── bootstrap.php            # بوت‌استرپ تست
│   ├── class-*-base.php         # کلاس پایه تست
│   └── class-*-test.php         # موارد تست
├── views/                       # فایل‌های قالب (Template)
├── assets/                      # دارایی‌های استاتیک (Static assets)
│   ├── css/                     # برگه‌های استایل (Stylesheets)
│   ├── js/                      # فایل‌های جاوا اسکریپت
│   └── images/                  # تصاویر
├── lang/                        # فایل‌های زبان
├── composer.json                # وابستگی‌های PHP
├── package.json                 # وابستگی‌های Node.js
├── phpunit.xml.dist             # پیکربندی PHPUnit
├── .phpcs.xml.dist              # پیکربندی استاندارد کد
└── rector.php                   # قوانین مدرن‌سازی کد
```

### تست‌گیری (Testing) {#testing}

این افزونه یک چارچوب تست جامع شامل می‌شود:

- **تست‌های واحد (Unit Tests)**: تست‌های مبتنی بر PHPUnit با مجموعه تست وردپرس
- **کلاس پایه تست (Base Test Class)**: متدهای کمکی برای سناریوهای تست رایج فراهم می‌کند
- **پوشش تست (Test Coverage)**: برای ردیابی پوشش کد پیکربندی شده است
- **تست‌گیری چندسایتی (Multisite Testing)**: تست‌ها در محیط چندسایتی اجرا می‌شوند

### استانداردهای کد (Code Standards) {#code-standards}

- **استانداردهای کدنویسی وردپرس**: با استفاده از PHPCS اعمال می‌شود
- **سازگاری با PHP ۷.۴+**: ویژگی‌های مدرن PHP پشتیبانی می‌شوند
- **تحلیل استاتیک (Static Analysis)**: یکپارچه‌سازی PHPStan برای بررسی نوع داده
- **مدرن‌سازی کد**: قوانین Rector برای ارتقاء PHP

### سیستم ساخت (Build System) {#build-system}

- **پردازش دارایی (Asset Processing)**: کوچک‌سازی (Minification) برای فایل‌های CSS/JS
- **ترجمه**: تولید فایل POT
- **بسته‌بندی (Packaging)**: ایجاد آرشیو برای توزیع
- **حالت توسعه (Development Mode)**: دارایی‌های کوچک‌نشده برای اشکال‌زدایی (debugging)

## پیکربندی (Configuration) {#configuration}

این افزونه از گزینه‌های پیکربندی مختلفی پشتیبانی می‌کند که از طریق رابط مدیریت شبکه قابل دسترسی هستند.

## هوک‌ها و فیلترها (Hooks and Filters) {#hooks-and-filters}

### اکشن‌ها (Actions) {#actions}

- `ultimate-multisite-addon-template_init` - پس از مقداردهی اولیه افزونه اجرا می‌شود
- `ultimate-multisite-addon-template_loaded` - پس از بارگذاری تمام فایل‌های افزونه اجرا می‌شود

### فیلترها (Filters) {#filters}

- `ultimate-multisite-addon-template_settings` - تغییر تنظیمات افزونه
- `ultimate-multisite-addon-template_enabled` - بازنویسی وضعیت فعال/غیرفعال بودن افزونه

## مجوز (License) {#license}

این افزونه تحت مجوز GPL v3 یا جدیدتر منتشر شده است.

## پشتیبانی (Support) {#support}

برای پشتیبانی و مستندات، از [MultisiteUltimate.com](https://multisiteultimate.com) دیدن فرمایید.
## تاریخچه تغییرات (Changelog) {#changelog}

- نسخه ۱.۰.۱ (۲۰۲۵-۰۹-۲۸): تغییر پیشوند به ultimate-multisite؛ به‌روزرسانی دامنه متن؛ افزایش نسخه.


- نسخه (۲۰۲۵-۰۹-۲۸): تغییر پیشوند به ultimate-multisite؛ به‌روزرسانی دامنه متن؛ افزایش نسخه.
