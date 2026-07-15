---
title: WordPress Multisite o'rnatish qanday?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite'ı Nasıl Kurulur?

WordPress Multisite, tek bir kurulumda sitelerden oluşan bir ağ oluşturmanıza olanak tanır. Bu özellik yerleşik olarak gelir ancak varsayılan olarak aktif değildir.

:::tip
Ultimate Multisite, bu tüm süreci otomatik hale getiren bir **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** içerir. Ultimate Multisite kuruluysa, manuel adımları takip etmek yerine bu sihirbazı kullanmanızı öneririz.
:::

Ultimate Multisite ağ odaklı bir eklenti olduğu için, bu eğitimde WordPress Multisite'ı manuel olarak nasıl kurup ayarlayacağınızı öğreneceksiniz. Bu metin WPBeginner'dan [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) makalesine dayanmaktadır.

**Multisite ağınızı oluşturmadan önce dikkat etmeniz gerekenler:**

  * İyi bir WordPress hosting hizmeti alın! Ağdaki siteler aynı sunucu kaynaklarını paylaşır.

  * Eğer sadece az trafiğe sahip birkaç siteniz varsa, paylaşımlı hosting sizin için işe yarayacaktır.

  * Çoğu **Managed WordPress hosting sağlayıcısı** Multisite'ı hazır olarak sunar (WordPress'i zaten etkinleştirilmiş ve yapılandırılmış Multisite ile kurarlar). Bu durum WP Engine, Closte, Cloudways gibi yerlerde geçerlidir. Hosting sağlayıcınızın bu durumu destekleyip desteklemediğinden emin değilseniz, bu eğitimden devam etmeden önce onlarla iletişime geçin.

  * Ayrıca FTP kullanarak WordPress kurulumu yapmayı ve dosyaları düzenlemeyi öğrenmek de iyi bir fikirdir.

_**ÖNEMLİ**_ **:** Mevcut bir WordPress web sitesinde multisite ağı kuruyorsanız şunları unutmayın:

  * WordPress sitenizin tam bir yedeğini alın

  * Eklentiler sayfanıza giderek toplu işlemlerden _Devre Dışı Bırak_ seçeneğini seçin ve ardından _Uygula_ butonuna tıklayarak sitedeki tüm eklentileri devre dışı bırakın

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite'ı etkinleştirmek için öncelikle bir FTP istemcisi veya cPanel dosya yöneticisi kullanarak sitenize bağlanın ve düzenlemek için wp-config.php dosyanızı açın.

*_Bu kadar, düzenlemeyi durdurun! Mutlu blog yazıları.*_ satırından önce aşağıdaki kod parçasını ekleyin:

define('WP_ALLOW_MULTISITE', true);

wp-config.php dosyasını kaydedin ve tekrar sunucuya yükleyin.

Sitenizde multisite özelliğini etkinleştirdikten sonra, şimdi ağınızı kurma zamanı geldi.

**Araçlar » Ağ Kurulum**'a gidin

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Şimdi WordPress'e ağınızdaki siteler için hangi alan yapısını (alt alan adları veya alt dizinler) kullanacağınızı söylemeniz gerekiyor.

Eğer alt alan adlarını seçerseniz, alan adı eşleştirmesi için DNS ayarlarınızı değiştirmeniz ve multisite ağınız için _**wildcard alt alan adlarını**_ ayarladığınızdan emin olmanız gerekir.

Ağ Kurulum'a geri dönün, ağınıza bir başlık verin ve Ağ yöneticisi e-postasındaki e-posta adresinin doğru olduğundan emin olun. Devam etmek için _Kur_ (Install) butonuna tıklayın.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress tarafından sağlanan bu kodu _**wp-config.php**_'nize ekleyin:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Ve WordPress tarafından sağlanan bu kodu _**.htaccess**_ dosyanıza ekleyin:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# wp-admin'e son eğik çizgiyi (trailing slash) ekle

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Bu kodni FTP klientsiz yoki fayl menejeri (masalan, cPanel uchun) yordamida ushbu ikki faylga nusxalab qo'ying.

Nihoyat, WordPress saytingizga qayta kirish orqali multisite tarmog'ingizga kirishingiz mumkin bo'ladigan holatda qayta tizimga kiring.

**Ultimate Multisite ni o'rnatishdan oldin WordPress Multisite o'rnatmasida subsite yaratishingiz mumkinligini tekshirib ko'rish juda muhimdir.**

Subsite yaratish uchun:

  1. O'zingizning saytingiz `wp-admin` orqali oching.

  2. My Sites > Sites (/wp-admin/network/sites.php) ga o'ting.

  3. Yuqorida "Add New" (Yangi qo'shish) tugmasini bosing.

  4. Barcha maydonlarni to'ldiring:

  * Site Address — hech qachon “www” dan foydalanmang.

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Sayt nomi, keyinchalik o'zgartirilishi mumkin.

  * Admin Email — Subsite uchun dastlabki admin foydalanuvchisi sifatida belgilang.

![WordPress Multisite da yangi sayt shakli](/img/admin/sites-list.png)

Maydonlarni to'ldirgandan so'ng, "Add site" (Sayt qo'shish) tugmasini bosing. Yangi subsite yaratilgach, u ishlayotganligini tekshirish uchun unga kirib ko'ring.

## Umumiy muammolar: {#common-problems}

### 1. Yangi saytlarni yarata olaman, lekin ularga kirishim mumkin emas. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Agar siz subdomainlardan foydalansangiz, multisite tarmog'ingiz uchun wildcard (yulduzli) subdomainlarni ham sozlash kerak bo'ladi.

Buni qilish uchun veb-saytingiz hosting hisobining boshqaruv paneli dashboardiga o'ting (masalan cPanel/Plesk/Direct Admin sizning hosting provayderingizga qarab).

"Domains" (Domainlar) yoki "Subdomains" (Subdomainlar) uchun variantni toping. Ba'zi boshqaruv panellarida bu "Domain administration" (Domainlarni boshqarish) deb belgilangan bo'lishi mumkin.

Subdomain maydoniga yulduzcha (*) kiriting. Keyin, sizga subdomenni qaysi domen ostida qo'shmoqchi ekanligini tanlash so'rashi kerak bo'ladi.

Tanlangan domen nomi uchun dokument ildizi avtomatik aniqlanadi. Wildcard subdomenlingizni qo'shish uchun _Create_ (Yaratish) yoki _Save_ (Saqlash) tugmasiga bosing. Kirma-kor " *.[mydomain.com](http://mydomain.com)" ko'rinishida bo'lishi kerak.
