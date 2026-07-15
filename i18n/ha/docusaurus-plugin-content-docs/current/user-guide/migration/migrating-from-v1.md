---
title: Tawale daga V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Gaba da Shiga daga V1

## Ultimate Multisite ya canza daga yaron farkinsa na 1.x zuwa yaron 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite vershon 2.0 kuma da wata, tana gina sabon tsari (complete rewrite) na codebase, wato akwai ƙaramin abubuwan da suka dace tsakanin wannan farkon da na sabo. Don haka, lokacin da kake mai motsawa daga 1.x zuwa 2.x, dole ne ka tura data ɗinka zuwa format da sabbin hanyoyin iya fahimarsa.

Alhamdulillah, Ultimate Multisite 2.0+ **tana tare da migrator** wanda an gina shi a cikin tsarin asali (core) wanda zai iya gano data daga farkon kuma ya canza shi zuwa format na sabo. Wannan motsawa tana faruwa ne bayan **Setup Wizard** na vershon 2.0+.

Wannan bayanin yana ba ka san yadda migrator ke aiki, abin da za ka yi idan akwai wani matsala, kuma yadda za ka magance matsaloli da suka iya faruwa a wannan tsarin.

_**MUHIMMI: Kafin ka fara motsawa daga vershon 1.x zuwa vershon 2.0, ka tabbata cewa ka yi backup na database ɗinka**_

## Matakan na farko {#first-steps}

Mataki na farko shi ne da wajen wadda za ka shiga fayil (plugin) .zip kuma ka install vershon 2.0 a dashboard na gudanarwa (admin dashboard) na ƙungiyarka.

Bayan ka [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md), tsarin zai gano shi da kansa cewa Multisite ɗinka yana aiki da farkon, kuma za ka ga wannan saƙon a mafi girman shafin plugin.

_**MUHIMMI:** Idan ka samu Ultimate Multisite 1.x a cikin Multisite ɗinka, za ka sami damar neman canza fayil (plugin) da vershon da ka wadda ka descarga. Don haka, don Allah, ka tafi kuma danna **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

صفحه‌ی بعدی به شما نشان می‌دهد که افزونه‌های قدیمی (legacy add-ons) شما با نسخه ۱.x چه چیزی نصب شده‌اند و همچنین دستورالعمل‌هایی در مورد اینکه آیا نسخه‌ای که استفاده می‌کنید با نسخه ۲.۰ سازگار است یا خیر، و اگر نیاز دارید بعد از مهاجرت یک نسخه به‌روزتر از افزونه را نصب کنید، ارائه می‌دهد.

<!-- Screenshot unavailable: پیام در بالای صفحه افزونه‌ها در مورد به‌روزرسانی به v2.0، همراه با لیستی از افزونه‌هایی که نیاز به به‌روزرسانی دارند -->

وقتی آماده بودید برای ادامه کار، می‌توانید روی دکمه‌ای که می‌گوید **Visit the Installer to finish the upgrade** (برای تکمیل ارتقاء، بازدید از نصب‌کننده) کلیک کنید.

<!-- Screenshot unavailable: دکمه‌ای که می‌گوید Visit the Installer to finish the upgrade -->

سپس شما را به صفحه‌ی راهنمای نصب با چند پیام خوش‌آمدگویی هدایت می‌کند. فقط کافی است روی **Get Started** (شروع کنید) کلیک کنید تا به صفحه بعدی بروید.

<!-- Screenshot unavailable: صفحه خوش‌آمدگویی راهنمای تنظیمات با دکمه Get Started -->

بعد از کلیک روی **Get Started**، شما را به صفحه‌ی Pre-install Checks_ (بررسی‌های پیش از نصب) هدایت می‌کند. این صفحه اطلاعات سیستم و نصب وردپرس شما را نشان می‌دهد و به شما می‌گوید که آیا با **Ultimate Multisite's requirements** (الزامات Ultimate Multisite) مطابقت دارد یا خیر.

<!-- Screenshot unavailable: صفحه‌ی Pre-install Checks که تأیید الزامات سیستم را نشان می‌دهد -->

مرحله بعدی وارد کردن کلید لایسنس Ultimate Multisite و فعال کردن افزونه است. این کار تضمین می‌کند که همه ویژگی‌ها، از جمله افزونه‌ها، در سایت شما قابل استفاده خواهند بود.

<!-- Screenshot unavailable: صفحه‌ی فعال‌سازی لایسنس با ورودی کلید لایسنس و دکمه Agree and Activate -->

بعد از وارد کردن کلید خود، روی **Agree & Activate** (موافقم و فعال کن) کلیک کنید.

پس از فعال شدن لایسنس، می‌توانید نصب واقعی را با کلیک روی **Install** (نصب) در صفحه بعدی شروع کنید. این کار فایل‌ها و پایگاه داده لازم برای عملکرد نسخه ۲.۰ را به صورت خودکار ایجاد می‌کند.

## Ayy, Yanzu, Migrasyon {#now-the-migration}

Migrator wani ƙaramin tsaro ne da aka ajiye shi don ya bincika dukkan multisite ɗinka don tabbatar da cewa dukkan bayanai na Ultimate Multisite za su iya migratar ba tare da wata matsala ba. Da kyau, danna maɓallin **Run Check** (Gudanar da Bincike) don fara wannan tsarin.

Ba daga cikin zaɓuɓɓuka biyo binciken, za ka samu sakamakon ya zama **da** wata matsala ko **ba tare da** wata matsala ba.

### Da Matsala {#with-error}

Idan ka samu saƙo na matali (error message), dole ne ka tuntuɓi ƙungiyar tallafin mu don su taimaka maka a gyara wannan matalawa. Ka tabbatar ka **bincika log na matalan** (error log) lokacin da kake samar da wani rorin tallafi (ticket). Za ka iya sake saukar da log ko kuma ka danna link ɗin da ke nuna "contact our support team". Zai buɗe wajen taimako (help widget) a gefen hagu na shafin ka tare da bayanan da aka shirya maka, waɗanda suna ciki log-log na matalan a ƙarƙashin bayanin.

_**Daga yadda tsarin ya samu matsala, ba za ka iya ci gaba da migratar zuwa wajen farko (version 2.0). Za ka iya saucaci (roll back) zuwa farkon farko (version 1.x) don ci gaba da aiki na shafin ku har da an gyara matalawa.**_

### Ba Da Matsala {#without-error}

Idan tsarin ba ya samu wata matsala, za ka ga saƙo na nasara (success message) da maɓallin **Migrate** (Migratar) a ƙasan ƙasa wanda zai ba ka damar ci gaba da migratar. A wannan shafin, za a gaya maka ka yi saucaci (backup) ga database ɗinka kafin ka ci gaba, wanda muke ba ka shawarar sosai. Danna **Migrate** idan kana da backup.

Wannan shi ne duka da kake bukata!

Zaka ma zaɓi: za ka ci gaba da aikin Wizard don inganta wata ko wata abin da ke wurin uwarka ko wani abu daya, ko kuma fara tafiya cikin menu na Ultimate Multisite 2.0 da sabon tsarin sa. Ka fara yi wani abu mai farin ciki.
