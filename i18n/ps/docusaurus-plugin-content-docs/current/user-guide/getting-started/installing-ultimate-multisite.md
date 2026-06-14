---
title: Ultimate Multisite نصب کول
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite نصب کول

:::note
دا راهنما فرض را بر این می‌گیرد که شما قبلاً WordPress Multisite نصب و تنظیم شده دارید. برای یادگیری چگونگی انجام این کار، به [این راهنما](https://www.wpbeginner.com/glossary/multisite/) توسط WP Beginner مراجعه کنید.
:::

## نصب پلاگین

Ultimate Multisite رایگان در [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) موجود است.

از **Network Admin Dashboard** خود، به مسیر **Plugins → Add New Plugin** بروید.

![صفحه افزودن افزونه در Network Admin](/img/installation/add-new-plugin.png)

دنبال عبارت **"Ultimate Multisite"** (با کوتیشن برای تطابق دقیق) جستجو کنید و این اولین نتیجه خواهد بود. روی **Install Now** کلیک کنید.

![نتایج جستجو که Ultimate Multisite را نشان می‌دهد](/img/installation/search-ultimate-multisite.png)

پس از نصب، روی **Network Activate** کلیک کنید تا افزونه در کل شبکه شما فعال شود.

![افزونه با دکمه Network Activate نصب شده است](/img/installation/plugin-installed.png)

بعد از فعال‌سازی، به طور خودکار به Setup Wizard هدایت خواهید شد.

![افزونه فعال شده و به wizard هدایت شده است](/img/installation/plugin-activated.png)

## Setup Wizard (راهنمای تنظیمات)

Setup Wizard شما را در حدود ۱۰ دقیقه راهنمایی می‌کند تا Ultimate Multisite را پیکربندی کنید.

### Welcome (خوش آمدید)

برای شروع، روی **Get Started** کلیک کنید.

![صفحه خوش‌آمدگویی Setup Wizard](/img/installation/wizard-welcome.png)

### Pre-install Checks (بررسی‌های پیش از نصب)

این مرحله اطلاعات سیستم و نصب وردپرس شما را بررسی می‌کند تا مطمئن شود با الزامات Ultimate Multisite مطابقت دارد. اگر همه چیز خوب به نظر می‌رسد، روی **Go to the Next Step** کلیک کنید.

![بررسی‌های پیش از نصب که نیازهای سیستمی را نشان می‌دهد](/img/installation/wizard-pre-install-checks.png)

:::note دکمه Network Activate (v2.6.1+)
که څنګه چې Ultimate Multisite هم 설치 شوی، خو **هغه هنوز هم network-activated نه دی** - 써 په مثال سره، که تاسو د network plugins screen څخه **Activate** (single-site) بدل له **Network Activate** باندې کلیک کړی - نو Pre-install Checks مرحله دا تشخیصلنه او یو **Network Activate** دکمه ښایي.

د **Network Activate** باندې کلیک کولو له لارې، دا plugin په خودکاریت سره تر ټول multisite network کې فعال کیږي. এবাৰ فعال شو، wizard به په معمول ډول Installation مرحله ته دوام ورکړي. تاسو باید د فعال حالت اصلاح کولو لپاره wizard څخه لاړ نشئ.
:::

### Installare (نصب)

Installer هغه لازم database tables جوړوي او `sunrise.php` فایل نصبوي چې Ultimate Multisite کار کولو لپاره یې اړتیا لري. Proceed کولو لپاره **Install** باندې کلیک وکړئ.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### ستاسو شرکت (Your Company)

ستاسو د شرکت معلومات پوره کړئ او خپل default currency تنظیم کړئ. دا معلومات په ستاسو WaaS platform کې ټول ځایونه کارولai به کارول شي. کله چې پوره وشئ، **Continue** باندې کلیک وکړئ.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content (پایله والی محتوا)

دا مرحله تاسو ته اجازه ورکوي predefined templates، products او نور starter content نصب کړئ. دا یو ښه لار ده چې ستاسو د Ultimate Multisite خوندونه په features سره آشنا شئ. default content اضافه کولو لپاره **Install** باندې کلیک وکړئ، یا که تاسو غواړئ له零 څخه پیل کړئ نو دا مرحله ورته لاړ شئ.

![Default content installation step](/img/installation/wizard-default-content.png)

### Recommended Plugins (توصیه شوي pluginونه)

دا اختیاري دی چې توصیه شوي companion plugins نصب کړئ. د اضافه کولو لپاره **Install** باندې کلیک وکړئ او دوام ورکولو لپاره ورته لاړ شئ.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Ready! (तयार!)

دا ختم شواړم! د خپل Ultimate Multisite نصب پوره شوی دی. تاسو اوس کولی شئ له **Network Admin Dashboard** څخه خپل Website as a Service platform جوړ کړئ.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

دلته وکړئ او مزه وکړئ!
