---
title: نصب افزونه‌ی Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# نصب Ultimate Multisite

:::note
این آموزش فرض می‌کند که شما قبلاً WordPress Multisite را نصب و پیکربندی کرده‌اید. برای یادگیری نحوه انجام این کار، [این آموزش](https://www.wpbeginner.com/glossary/multisite/) از WP Beginner را بررسی کنید.
:::

## نصب افزونه

Ultimate Multisite به صورت رایگان در [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) موجود است.

از **داشبورد Network Admin** خود، به **Plugins → Add New Plugin** بروید.

![صفحه افزودن افزونه جدید در Network Admin](/img/installation/add-new-plugin.png)

به دنبال **"Ultimate Multisite"** (با علامت نقل قول برای تطابق دقیق) بگردید و به عنوان اولین نتیجه ظاهر می‌شود. روی **Install Now** کلیک کنید.

![نتایج جستجو که Ultimate Multisite را نشان می‌دهد](/img/installation/search-ultimate-multisite.png)

پس از نصب، روی **Network Activate** کلیک کنید تا افزونه در سراسر شبکه شما فعال شود.

![افزونه نصب شده با دکمه Network Activate](/img/installation/plugin-installed.png)

پس از فعال‌سازی، به طور خودکار به Setup Wizard هدایت می‌شوید.

![فعال‌سازی افزونه و هدایت به ویزارد](/img/installation/plugin-activated.png)

## Setup Wizard (ویزارد پیکربندی)

Setup Wizard شما را در طی حدود 10 دقیقه برای پیکربندی Ultimate Multisite راهنمایی می‌کند.

### خوش آمدگویی

برای شروع، روی **Get Started** کلیک کنید.

![صفحه خوش‌آمدگویی Setup Wizard](/img/installation/wizard-welcome.png)

### بررسی‌های پیش از نصب

این مرحله اطلاعات سیستم و نصب WordPress شما را بررسی می‌کند تا اطمینان حاصل شود که الزامات Ultimate Multisite را برآورده می‌کند. اگر همه چیز خوب به نظر می‌رسد، روی **Go to the Next Step** کلیک کنید.

![بررسی‌های پیش از نصب که الزامات سیستم را نشان می‌دهد](/img/installation/wizard-pre-install-checks.png)

:::note دکمه Network Activate (نسخه 2.6.1+)
اگر Ultimate Multisite نصب شده است اما **هنوز به صورت شبکه فعال نشده** است - برای مثال، اگر به جای **Network Activate** از صفحه افزونه‌های شبکه، روی **Activate** (تک‌سایتی) کلیک کرده‌اید - مرحله بررسی‌های پیش از نصب این موضوع را تشخیص می‌دهد و یک دکمه **Network Activate** نمایش می‌دهد.

با کلیک بر روی **Network Activate**، افزونه به طور خودکار در سراسر شبکه چند سایتی شما فعال می‌شود. پس از فعال‌سازی، ویزارد به طور معمول به مرحله نصب ادامه می‌دهد. نیازی نیست که برای رفع وضعیت فعال‌سازی، ویزارد را ترک کنید.
:::

### نصب

نصب کننده جداول پایگاه داده لازم را ایجاد می‌کند و فایل `sunrise.php` را نصب می‌کند که Ultimate Multisite برای عملکرد خود به آن نیاز دارد. برای ادامه روی **Install** کلیک کنید.

![مرحله نصب که جداول پایگاه داده و sunrise.php را نشان می‌دهد](/img/installation/wizard-installation.png)

### شرکت شما

اطلاعات شرکت خود را وارد کرده و ارز پیش‌فرض را تنظیم کنید. این اطلاعات در سراسر پلتفرم WaaS شما استفاده خواهد شد. پس از اتمام، روی **Continue** کلیک کنید.

![مرحله پیکربندی "شرکت شما"](/img/installation/wizard-your-company.png)

### محتوای پیش‌فرض

این مرحله به شما امکان می‌دهد الگوهای از پیش تعریف شده، محصولات و سایر محتوای اولیه را نصب کنید. این یک روش عالی برای آشنایی با ویژگی‌های Ultimate Multisite است. برای افزودن محتوای پیش‌فرض روی **Install** کلیک کنید، یا اگر ترجیح می‌دهید از ابتدا شروع کنید، این مرحله را رد کنید.

![مرحله نصب محتوای پیش‌فرض](/img/installation/wizard-default-content.png)

### افزونه‌های پیشنهادی

به صورت اختیاری، افزونه‌های کمکی پیشنهادی را نصب کنید. برای افزودن آنها روی **Install** کلیک کنید یا برای ادامه این مرحله را رد کنید.

![مرحله افزونه‌های پیشنهادی](/img/installation/wizard-recommended-plugins.png)

### آماده!

همین است! نصب Ultimate Multisite شما کامل شد. اکنون می‌توانید شروع به ساخت پلتفرم Website as a Service خود از **داشبورد Network Admin** کنید.

![پیکربندی کامل - صفحه "آماده"](/img/installation/wizard-ready.png)

![داشبورد Network Admin با Ultimate Multisite فعال](/img/installation/network-dashboard.png)

پیش به سوی سرگرمی!
