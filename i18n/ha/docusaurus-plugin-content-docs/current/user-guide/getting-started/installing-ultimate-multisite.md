---
title: Shigarwa Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# نصب Ultimate Multisite

:::note
این آموزش فرض می‌کند شما قبلاً WordPress Multisite را نصب و پیکربندی کرده‌اید. برای یادگیری چگونگی انجام این کار، به [این آموزش](https://www.wpbeginner.com/glossary/multisite/) توسط WP Beginner مراجعه کنید.
:::

## نصب پلاگین

Ultimate Multisite رایگان در [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) موجود است.

از **Network Admin Dashboard** خود، به مسیر **Plugins → Add New Plugin** بروید.

![صفحه افزودن پلاگین مدیر شبکه](/img/installation/add-new-plugin.png)

دنبال عبارت **"Ultimate Multisite"** (با نقل قول برای تطابق دقیق) جستجو کنید و این در اولین نتیجه ظاهر می‌شود. روی **Install Now** کلیک کنید.

![نتایج جستجو که Ultimate Multisite را نشان می‌دهد](/img/installation/search-ultimate-multisite.png)

پس از نصب، روی **Network Activate** کلیک کنید تا پلاگین را در کل شبکه خود فعال کنید.

![پلاگین با دکمه Network Activate نصب شده است](/img/installation/plugin-installed.png)

بعد از فعال‌سازی، شما به طور خودکار به راهنمای تنظیمات (Setup Wizard) هدایت خواهید شد.

![پلاگین فعال شده و به wizard هدایت شده است](/img/installation/plugin-activated.png)

## راهنمای تنظیمات (Setup Wizard)

راهنمای تنظیمات، شما را در حدود ۱۰ دقیقه در پیکربندی Ultimate Multisite راهنمایی می‌کند.

### خوش آمدید (Welcome)

برای شروع، روی **Get Started** کلیک کنید.

![صفحه خوش‌آمدگویی راهنمای تنظیمات](/img/installation/wizard-welcome.png)

### بررسی‌های پیش از نصب (Pre-install Checks)

این مرحله اطلاعات سیستم و نصب وردپرس شما را بررسی می‌کند تا مطمئن شود با الزامات Ultimate Multisite مطابقت دارد. اگر همه چیز خوب به نظر می‌رسد، روی **Go to the Next Step** کلیک کنید.

![بررسی‌های پیش از نصب که نیازهای سیستمی را نشان می‌دهد](/img/installation/wizard-pre-install-checks.png)

:::note Tuƙkar "Network Activate" button (v2.6.1+)
Idan Ultimate Multisite an installa amma **ba aka fi a ƙirƙirar hanyar sadarwa ba** — misali, idan ka danna **Activate** (single-site) maimakon **Network Activate** daga matsalar plugin na network — matakin Bincike na Wurin Shigarwa zai gani wannan kuma ya nuna maka babban mai danna "Network Activate".

Danna "Network Activate" zai fi ƙirƙirar plugin a duk wajen multisite ɗinka ko'ina kai tsaye. Bayan an fi aiki, wanda zai ci gaba da matakin shigarwa yadda ya kamata. Ba dole ba ka tafi daga wannan binciken don gyara yanayin fi aiki.
:::

### Shigarwa (Installation)

Mai shigarwa zai ƙirƙiro jadawalin database na buƙatar da ita kuma ya install fayil `sunrise.php` wanda Ultimate Multisite ke bukata don aiki. Danna **Install** don ci gaba.

![Matakin shigarwa yana nuna jadawalin database da sunrise.php](/img/installation/wizard-installation.png)

### Kamfaninka (Your Company)

Ka cika bayanan kamfaninka kuma ka sanya kuɗin da kake amfani da shi a matsayin na asali. Wannan bayanai za a yi amfani da shi a duk manhajar WaaS ɗinka. Danna **Continue** lokacin da ka gama.

![Matakin tsara Kamfaninka](/img/installation/wizard-your-company.png)

### Abubuwan Asali (Default Content)

Wannan mataki zai ba ka damar shigar da mallakan shabillan da aka tayar da, kayayyaki, da wasu abubuwa na farko. Wannan hanya ce mai kyau don samun amfani da ƙarin ƙwarewa a cikin siffolin Ultimate Multisite. Danna **Install** don ƙara abubuwan asali, ko ka tafi ba shi idan kana son fara daga asali.

![Matakin shigar da abubuwan asali](/img/installation/wizard-default-content.png)

### Pluginin da aka Ba da Shawara (Recommended Plugins)

Zai iya shigar da wasu pluginin da aka ba da shawara a matsayin na biyu. Danna **Install** don ƙara su ko ka tafi ba shi don ci gaba.

![Matakin pluginin da aka ba da shawara](/img/installation/wizard-recommended-plugins.png)

### Aiki! (Ready!)

Kada ya yi! Shigar da ake gina Ultimate Multisite ɗinka ya kammala. Yanzu za ka iya fara gina shafin ka a matsayin wajen sabis (Website as a Service platform) ta **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Yanzu ka fara sha'awar!
