---
title: cPanel تكامل
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel ایگتراسیون (Integration)

## مروری (Overview) {#overview}
cPanel اینترنت هاستینگ پرکاربردترین کنترل پنل وب است که توسط بسیاری از ارائه‌دهندگان هاست اشتراکی و اختصاصی استفاده می‌شود. این یکپارچه‌سازی باعث می‌شود Ultimate Multisite و cPanel بین دامنه‌ها به صورت خودکار همگام شوند، به طوری که شما بتوانید آدرس‌های جایگزین (aliases) و زیردامنه‌ها را به طور خودکار به حساب cPanel خود اضافه کنید.

## ویژگی‌ها (Features) {#features}
- ایجاد خودکار دامنه افزونه در cPanel
- ایجاد خودکار زیردامنه در cPanel (برای نصب‌های چند دامنه‌ای زیردامنه)
- حذف دامنه زمانی که نگاشت‌ها (mappings) حذف می‌شوند

## پیش‌نیازها (Requirements) {#requirements}
باید مقادیر زیر را در فایل `wp-config.php` تعریف کنید:

```php
define('WU_CPANEL_USERNAME', 'نام_کاربری_cpanel_شما');
define('WU_CPANEL_PASSWORD', 'رمز_جوی_cpanel_شما');
define('WU_CPANEL_HOST', 'میزبان_cpanel_شما');
```

به صورت اختیاری، می‌توانید موارد زیر را هم تعریف کنید:

```php
define('WU_CPANEL_PORT', 2083); // پیش‌فرض ۲083 است
define('WU_CPANEL_ROOT_DIR', '/public_html'); // پیش‌فرض /public_html است
```

## دستورالعمل‌های راه‌اندازی (Setup Instructions) {#setup-instructions}

### ۱. دریافت اطلاعات cPanel خود {#1-get-your-cpanel-credentials}

۱. نام کاربری و رمز عبور cPanel خود را از ارائه‌دهنده هاستینگ خود دریافت کنید.
۲. میزبان cPanel خود را مشخص کنید (معمولاً `cpanel.yourdomain.com` یا `yourdomain.com:2083`).

### ۲. اضافه کردن ثابت‌ها به wp-config.php {#2-add-constants-to-wp-configphp}

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CPANEL_USERNAME', 'نام_کاربری_cpanel_شما');
define('WU_CPANEL_PASSWORD', 'رمز_جوی_cpanel_شما');
define('WU_CPANEL_HOST', 'میزبان_cpanel_شما');
```

به صورت اختیاری، می‌توانید پورت و مسیر ریشه را تغییر دهید:

```php
define('WU_CPANEL_PORT', 2083); // اگر cPanel شما از پورت دیگری استفاده می‌کند تغییر دهید
define('WU_CPANEL_ROOT_DIR', '/public_html'); // اگر ریشه سند (document root) شما متفاوت است تغییر دهید
```

### ۳. فعال کردن یکپارچه‌سازی {#3-enable-the-integration}

۱. WordPress yöneticinizde, Ultimate Multisite > Settings (Ayarlar) bölümüne gidin.
۲. "Domain Mapping" (Alan Eşleme) sekmesine geçin.
۳. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) kısmına gelin.
۴. cPanel entegrasyonunu etkinleştirin.
۵. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın.

## Nasıl Çalışır? {#how-it-works}

### Addon Domains (Ek Alan Adları) {#addon-domains}

Ultimate Multisite'ta bir alan adı eşlendiğinde:

۱. Entegrasyon, alanı ek bir alan adı olarak cPanel'in API'sine istek gönderir.
۲. Alan adı, kök dizininize işaret edecek şekilde yapılandırılır.
۳. Bir alan adı eşlemesi kaldırıldığında, entegrasyon bu alanı cPanel'den kaldırır.

### Subdomains (Alt Alan Adları) {#subdomains}

Alt alan adı multisite kurulumları için yeni bir site oluşturulduğunda:

۱. Entegrasyon, tam alan adından alt alan adı kısmını ayıklar (çıkarır).
۲. Alt alanı eklemek için cPanel'in API'sine istek gönderir.
۳. Alt alan adı, kök dizininize işaret edecek şekilde yapılandırılır.

## Önemli Notlar {#important-notes}

- Entegrasyon, cPanel hesabınızla iletişim kurmak için cPanel'in API2'sini kullanır.
- cPanel hesabınızın ek alan adları ve alt alan adları ekleme yetkisi olması gerekir.
- Bazı hosting sağlayıcıları oluşturabileceğiniz ek alan adı veya alt alan adı sayısını sınırlayabilir.
- Entegrasyon DNS yapılandırmasını yönetmez; alan adlarınızı hala sunucunuzun IP adresine yönlendirmeniz gerekir.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- cPanel kullanıcı adınız ve şifrenizin doğru olup olmadığını kontrol edin.
- cPanel ana bilgisayarınızın (host) doğru olduğundan ve erişilebilir olduğundan emin olun.
- cPanel hesabınızın gerekli izinlere sahip olduğundan emin olun.
- Ana bilgisayar için tam URL'yi kullanmayı deneyin (örneğin, `https://cpanel.yourdomain.com`).

### Alan Adı Eklenmediyse {#domain-not-added}
- Ultimate Multisite loglarını herhangi bir hata mesajı olup olmadığı açısından kontrol edin.
- Alan adının cPanel'e zaten eklenmediğinden emin olun.
- cPanel hesabınızın ek alan adları veya alt alan adları için sınırına ulaşmadığından emin olun.

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- Bu entegrasyon SSL sertifikası vermeyi (issue etmeyi) yönetmiyor.
- Alan adlarınız için SSL sertifikaları almak amacıyla cPanel'in SSL/TLS araçlarını veya AutoSSL özelliğini kullanmanız gerekecek.
- Alternatif olarak, Let's Encrypt gibi bir hizmeti cPanel'in AutoSSL özelliği ile kullanabilirsiniz.
