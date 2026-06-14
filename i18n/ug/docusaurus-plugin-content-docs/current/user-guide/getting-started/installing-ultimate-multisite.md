---
title: Ultimate Multisite yükleme
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite نۆلشکردırma (Installing Ultimate Multisite)

:::note
این آموزش فرض می‌کند شما قبلاً وردپرس 멀티사이트 را نصب و تنظیم کرده‌اید. برای یادگیری چگونگی انجام این کار، لطفاً [این آموزش](https://www.wpbeginner.com/glossary/multisite/) از WP Beginner را ببینید.
:::

## افزونه (Plugin) را نصب کنید

Ultimate Multisite در [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) رایگان است.

از **Network Admin Dashboard** خود، به مسیر **Plugins → Add New Plugin** بروید.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

دنبال عبارت **"Ultimate Multisite"** (برای تطابق دقیق از نقل قول استفاده کنید) جستجو کنید و این اولین نتیجه خواهد بود. روی **Install Now** کلیک کنید.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

پس از نصب، روی **Network Activate** کلیک کنید تا افزونه در کل شبکه شما فعال شود.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

بعد از فعال‌سازی، به طور خودکار به راهنمای تنظیمات (Setup Wizard) هدایت خواهید شد.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## راهنمای تنظیمات (Setup Wizard)

راهنمای تنظیمات در حدود ۱۰ دقیقه به شما کمک می‌کند تا Ultimate Multisite را پیکربندی کنید.

### خوش آمدید (Welcome)

برای شروع، روی **Get Started** کلیک کنید.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### بررسی‌های پیش از نصب (Pre-install Checks)

این مرحله اطلاعات سیستم و نصب وردپرس شما را بررسی می‌کند تا مطمئن شویم با الزامات Ultimate Multisite مطابقت دارد. اگر همه چیز خوب به نظر می‌رسد، روی **Go to the Next Step** کلیک کنید.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate düğmeni (v2.6.1+)
Ultimate Multisite o'rnatilgan, lekin hali **tarmoq faollashtirilmagan** bo'lsa — masalan, tarmoq pluginlari ekranidan **Network Activate** o'rniga **Activate** (single-site) tugmasini bosgan bo'lsangiz — Pre-install Checks qadamida bu holatni aniqlaydi va sizga **Network Activate** tugmasini ko'rsatadi.

**Network Activate** tugmasini bosish pluginni butun multisite tarmoq bo'ylab avtomatik faollashtiradi. Faollashtirilgandan so'ng, wizard normal ravishda o'rnatish qadamiga davom etadi. Faollashtirish holatini tuzatish uchun siz wizarddan chiqishingiz shart emas.
:::

### O'rnatish (Installation)

Installer kerakli ma'lumotlar bazasi jadvallarini yaratadi va Ultimate Multisite ishlay olishi uchun zarur bo'lgan `sunrise.php` faylini o'rnatadi. Davom etish uchun **Install** tugmasini bosing.

![O'rnatish qadamida ma'lumotlar bazasi jadvallari va sunrise.php ko'rsatilgan](/img/installation/wizard-installation.png)

### Sizning Kompaniyangiz (Your Company)

Kompaniya ma'lumotlaringizni to'ldiring va default valyutani belgilang. Bu ma'lumotlar WaaS platformangiz davomida ishlatiladi. Barcha narsani tugatganingizda **Continue** tugmasini bosing.

![Sizning kompaniya konfiguratsiya qadam](/img/installation/wizard-your-company.png)

### Default Kontent (Default Content)

Bu qadam sizga oldindan belgilangan shablonlarni, mahsulotlarni va boshqa boshlovchi kontentni o'rnatish imkonini beradi. Bu Ultimate Multisite xususiyatlari bilan tanishishning ajoyib yo'li. Default kontentni qo'shish uchun **Install** tugmasini bosing, yoki boshidan boshlashni afzal ko'rsangiz bu qadamdan o'ting.

![Default kontentni o'rnatish qadami](/img/installation/wizard-default-content.png)

### Tavsiya Etilgan Pluginlar (Recommended Plugins)

Tavsiya etilgan qo'shimcha pluginlarni ixtiyoriy ravishda o'rnating. Ularni qo'shish uchun **Install** tugmasini bosing yoki davom etish uchun tashlang.

![Tavsiya etilgan pluginlar qadami](/img/installation/wizard-recommended-plugins.png)

### Tayyormiz! (Ready!)

Ҳамсё, сизнинг Ultimate Multisite ўрнатилишингиз тугади. Энди **Network Admin Dashboard** орқали Веб-сайтни Хизмат сифати (Website as a Service) платформаси сифати қуришга бошлай аласыз.

![Установка тугади - Тайёрлаш экрани](/img/installation/wizard-ready.png)

![Ultimate Multisite фаоллаштирилган Network Admin Dashboard](/img/installation/network-dashboard.png)

Энди ўйинлашинг!
