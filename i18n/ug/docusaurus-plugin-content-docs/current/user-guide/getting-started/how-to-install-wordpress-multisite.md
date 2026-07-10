---
title: WordPress Multisite низиңізди қалай орнатуға болады
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite нимаси олганини қандай ўрнатиш мумкин? {#how-do-i-install-wordpress-multisite}

WordPress Multisite деганда, сиз бир ўрнатилган сайтда бир вақтда кўплаб сайтлар тармоққа эга бўлишингиз мумкин. Бу ўзидан-ўзи киритилган функциядир, лекин у айнан шундай ишлайди деб автоматик равишда ёпилмаган.

:::tip
Ultimate Multisite دا داخله **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** دی، هmdi bütün این پروسه رو خودکار می‌کنه. اگه Ultimate Multisite نصب کردین، ما توصیه می‌کنیم به جای دنبال کردن مراحل دستی زیر از این wizard استفاده کنید.

# Ultimate Multisite: WordPress Documentation {#add-a-trailing-slash-to-wp-admin}

## Introduction {#common-problems}

WordPress — bu web saytlar uchun eng mashhur platformlardan biridir. Bu hujjatda, siz Ultimate Multisite dan foydalanish haqida tushunishingiz va uni qanday sozlashni o'rganishingiz mumkin. Biz sizga hamma narsani oddiy va tushunarli tilda tushuntirib beramiz.

## Installation (O'rnatish) {#1-i-can-create-new-sites-but-they-are-not-accessible}

Ultimate Multisite ni o'rnatish juda oson. Quyidagi qadamlarni bajaring:

1. **WordPressni o'rnating:** Avvalo, sizda ishlayotgan WordPress ilovasi bo'lishi kerak.
2. **Pluginni yuklang:** WordPress paneliga kiring va "Plugins" (Ilovalar) menyusidan Ultimate Multisite ni topib, uni o'rnating.
3. **Sozlamalarni qiling:** O'rnatish tugagandan so'ng, saytning asosiy sozlamalarini amalga oshirish uchun Ultimate Multisite paneliga kiring va kerakli sozlamalarni to'ldiring.

## Setup (Sozlash)

Saytni sozlash jarayoni quyidagicha ketadi:

1. **Multisite turlarini tanlang:** Siz qaysi turdagi saytlarni yaratmoqchi ekanligingizni aniqlang (masalan, bitta saytmi yoki bir nechta alohida saytlar).
2. **Domainlarni ulashing:** Har bir multisite uchun o'z domen nomini sozlang. Bu sizning har bir saytingizga o'ziga xos manzillarni beradi.
3. **Tema va dizaynni tanlang:** Saytlaringiz ko'rinishi uchun mos temani tanlang yoki o'zingizning dizayningizni yaratish uchun vositalardan foydalaning.

## Features (Xususiyatlar)

Ultimate Multisite sizga quyidagi kuchli funksiyalarni beradi:

* **Bitta boshqaruv paneli:** Barcha saytlaringizni bitta joydan boshqarishingiz mumkin.
* **Oson kengaytirish:** Yangi saytlar yoki bloglarni juda oson qo'shish va ularni boshqarish imkoniyati bor.
* **Markazlashgan sozlamalar:** Umumiy sozlamalarni barcha saytlarga bir vaqtning o'zida taqsimlash mumkin.

## Troubleshooting (Muammolarni hal qilish)

Agar sizda muammo yuz bersa, quyidagi tavsiyalarga amal qiling:

* **Pluginlarni yangilang:** Har doim eng yangi versiyadagi Ultimate Multisite ni ishlatishga harakat qiling.
* **Loglarni tekshiring:** Agar sayt noto'g'ri ishlashi boshlasa, "Logs" (Yozuvlar) bo'limidan muammoni aniqlash uchun ma'lumot olishingiz mumkin.

## Conclusion (Xulosa)

Ultimate Multisite — bu juda kuchli vosita. Uni to'g'ri tushunib ishlatgan holda, siz o'zingizning saytingizni yoki kompaniyangizning barcha saytlarini samarali boshqarishingiz mumkin. Agar savollaringiz bo'lsa, bizga murojaat qiling!

Ultimate Multisite يالدا شبکه (network) فقط بولغان برنامج بولgan, bu tutorialda WordPress Multisite ni qanday qo'lda o'rnatish va sozlashni o'rganasiz. Bu matn [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) (WPBeginner dan) asoslangan.

**Multisite ağı oluşturmadan önce dikkat etmeniz gerekenler:**

  * İyi bir WordPress hosting alın! Ağı (network) üzerindeki web siteleri aynı sunucu kaynaklarını paylaşır.

Əgər sizde az trafikli bir neç tane sayt varsa, share hosting (paylaşımlı barındırma) sizin için işe yarayabilir.

* Ço'plar **Managed WordPress hosting providers** (Boshqa WordPress hosting xizmatkorlari) Multisite-ni ilkinidan (out-of-the-box) taklif qiladi (ular siz uchun WordPress-ni allaqachon Multisite bilan o'rnatib, sozlab bergan bo'ladi). Bu WP Engine, Closte, Cloudways kabi xizmatkorlar uchun shunday. Agar hosting provayderingiz uchun bu holat ekanligiga ishonchingiz bo'lmasa, ushbu tutorialga o'tishdan oldin ularning qo'llab-quvvatlash xizmatlari bilan bog'lanib ko'ring.

WordPress-i kurmaq we faylları FTP orqulashdan foydalanish haqida ham tanish bo'lish yaxshi.

**MUHIM**_ : Agar siz mavjud WordPress saytida multisite tarmoqni sozlayotgan bo'lsangiz, quyidagilarni unutmang:

WordPress saytingizning to'liq nusxasini yaratish

Sizning saytingizdagi barcha pluginlarni o'chirish uchun pluginlar sahifasiga kiring, unda "Bulk Actions" (Jamoat harakatlari) bo'limidan "_Deactivate_" (O'chirish) ni tanlang va keyin "_Apply_" (Joriy etish) tugmasini bosing.

<!-- スクリーンショットي उपलब्at де: WordPress плагинилерлер сапалап ажыратуу әмеліне күрсәтүче бет -->

Multisite-ны ислемик etmek өчен, алдырыңдаги сайтга FTP клиентлеренен яки cPanel файл менеджерынен китерли, һәм редакциялек өчен wp-config.php файлыны ачыгыз.

_*Ҳа, бу барча, муҳрлашни тўхтатинг! Хурсанд блог ёритиш.*_

```php
define('WP_ALLOW_MULTISITE', true);
```

Ва `wp-config.php` файлини сақлаб серверга қайтаринг.

Sitenizde çoklu sayfa (multisite) funksiyasını etkinleştirdikten sonra, şimdi ağınızı kurma zamanı geldi.

**Araçlar » Ağ Kurulum** yolunu izleyin.

<!-- Ekran görüntüsü mevcut değil: WordPress Araçları menüsünde Ağ Kurulum seçeneğini gösteren ekran görüntüsü -->

Sizdagi tarqatmalaringiz uchun saytlarda qanday domen tuzilmasidan foydalanishingizni WordPressga aytsangiz bo'ladi: subdomains (alt-domenlar) yoki subdirectories (subdirektoriyalar).

Əgər siz subdomainlar (alt domenler) seçseniz, domen eşleşmesi üçün DNS ayarlarınızı değiştirmeli və çoxsaylı sayt (multisite) ağılınız için **wildcard subdomains**'ı ayarladığınızdan emin olmalısınız.

Şebeke Kurulumuna geri dönün, şebekeniz için bir başlık belirleyin ve Şebeke yöneticisi e-postasının doğru olduğundan emin olun. Devam etmek için _Install_ (Yükle) butonuna tıklayın.

WordPress تərəfindan berilgan bu koddagi kodni sizning `_**wp-config.php**_` faylingizga qo'shing:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

WordPress تەرەقکردیەوە، ئەمโค้دن هم سۆزدی:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# /wp-admin دا ئاخردا شێوەیەکی '/' زیاد بکەین

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP istemesi yoki dosya yöneticisi (masalan, cPanel kabi narsalardan foydalanayotgan bo'lsangiz) yordamida ushbu ikkita faylga kodni nusxalab va joylashtiring.

Ниҳоят, o'z WordPress saytingizga qayta kirib, multisite tarmog'ingizga kirishingiz kerak.

Ultimate Multisite'ı kurmadan önce WordPress Multisite kurulumunuzda bir alt site oluşturup oluşturamadığınızı test etmeniz ve kontrol etmeniz önemlidir.

Alt site oluşturmak için:

  1. Web sitenizin `wp-admin` kısmını açın

2. My Sites > Sites ( /wp-admin/network/sites.php ) جهةlere گوزارڭ.

3. Üstتت "Add New" (Yeni Ekle) دغلاڭ.

4. Барسۇڭ تاملارنى توطۇرۇڭ:

* Site Address — Әزو «www» دېگەنلىكдан ھەرگیز фойдаลانماڭ.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Alt Dizin (Subdirectory): [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Sayt Unvanı (Site Title) — Saytın unvanıdır, keyin sonradan dəyişetilişi mümkündür.

  * Admin E-poçtası (Admin Email) — Subsite üçün ilki admin istifadəçi kimi təyin edilir.

![WordPress Multisite'da yeni site formu](/img/admin/sites-list.png)

Barcha bo'limlarni to'ldirgandan so'ng, "Add site" (Site qo'shish) tugmasini bosing. Yangi subsite yaratilgandan so'ng, uni ochib ko'ring va subsite ishlayotganligini tekshirib oling.

## Umumiy Muammalar:

### 1. Мен янەق سايتەر (sites) yarata alaman, lekin ular erişilebilir emas.

Agar siz subdomainlar tanlasangiz, o halda ko'p saytli tarmoq (multisite network) uchun wildcard subdomainlarni ham sozlab qo'yishingiz kerak bo'ladi.

شۇنى باشラク ئۈچۈرۈش ئۈچۈرۈش ئۈچۈرۈش، veb-saytingىڭ كۆرسىغا تالما (masalan, cPanel/Plesk/Direct Admin سىزنىڭ ياردەم بىلەن تالماڭ) باشلاقۇچىسىга كېلىň.

"Domains" (دومينلار) ياتاقشۇندى يامانلاشتۇرۇپ كۆرىش. ب일كى باشق بىر كونترول بانلدا ئۇنى "Domain administration" (دومين ئادراقلىنىش) دېگاندىن چايدىلى بولۇвчи خيار سىزنى tapib كوزەى.

Subdomain alanı içine bir yıldız (*) yazın. Sonra, alt alan adının hangi alan adına ekleneceğini seçmenizi isteyecektir.

تۆ تەنها سۆزланган دامن өчен документ түбәле автоматик аныкланачак. Вайлдайд субдоменне (wildcard subdomain) да илата булачак _Create_ (Создать) ва _Save_ (Сохранить) батысынан кликлагыз. Кирме шулай görnüşde болышы: “*.[mydomain.com](http://mydomain.com)”
