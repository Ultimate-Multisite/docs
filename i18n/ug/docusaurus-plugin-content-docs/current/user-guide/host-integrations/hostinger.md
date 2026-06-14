---
title: Hostinger (hPanel) Интеграция
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## گشتی (Overview)

Hostinger اینترنت میزبانی یکی از سرویس‌های محبوب است که یک پنل کنترل مدرن به نام hPanel دارد. Ultimate Multisite Hostinger integration به شما اجازه می‌دهد که همزمان در مدیریت وردپرس خود، تنظیمات دامنه‌ها و زیردامنه‌ها را مستقیماً از طریق адمن داشبورد وردپرس مدیریت کنید؛ این قابلیت باعث می‌شود دامنه ها بین Ultimate Multisite و پنل hPanel هستا با یکدیگر به‌صورت خودکار همگام شوند.

## ویژگی‌ها (Features)

- ایجاد خودکار addon domain در hPanel
- ایجاد خودکار subdomain در hPanel (برای نصب‌های چند دامنه‌ای زیردامنه‌ای)
- حذف دامنه زمانی که نگاشت‌ها (mappings) حذف می‌شوند
- یکپارچگی بی‌نقص با API مدیریت دامنه hPanel

## پیش‌نیازها (Requirements)

برای استفاده از این ادغام Hostinger، شما به موارد زیر نیاز دارید:

۱. یک حساب کاربری در Hostinger با دسترسی به hPanel
۲. یک توکن API از Hostinger
۳. ثابت‌های زیر را در فایل `wp-config.php` خود تعریف کنید:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

به صورت اختیاری، می‌توانید موارد زیر را نیز تعریف کنید:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // نقطه پایانی API پیش‌فرض
```

## دستورالعمل‌های تنظیم (Setup Instructions)

### ۱. توکن API خود را تولید کنید (Generate Your Hostinger API Token)

۱. وارد حساب کاربری Hostinger خود شوید و به hPanel دسترسی پیدا کنید.
۲. به **Account Settings** → **API Tokens** بروید.
۳. روی **Create New Token** کلیک کنید.
۴. نام توکن خود را توصیفی قرار دهید (مثلاً: "Ultimate Multisite").
۵. مجوزهای لازم را انتخاب کنید:
   - Domain management (مدیریت دامنه)
   - Subdomain management (مدیریت زیردامنه)
۶. توکن تولید شده را کپی کرده و آن را به صورت امن ذخیره کنید.

### ۲. شناسه حساب خود را پیدا کنید (Find Your Account ID)

۱. در hPanel، به **Account Settings** → **Account Information** بروید.
۲. شناسه حساب شما در این صفحه نمایش داده می‌شود.
۳. این شناسه را کپی کرده و برای مرحله بعد ذخیره کنید.

### ۳. ثابت‌ها را در wp-config.php اضافه کنید (Add Constants to wp-config.php)

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Əgər Hostinger hesabınız başqa bir API endpoint istifadə edirsə, siz onu özünüz dəyişdirə bilərsiniz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integrasiyanı Etkinləşdirin

1. WordPress admin panelinizdə **Ultimate Multisite > Settings** (Parametrlər) bölməsinə gedin.
2. **Domain Mapping** (Domän Xəritələnməsi) tabına keçin.
3. Aşağı doğru **Host Integrations** (Host İnteqrasiyaları) hissəsinə sürüşün.
4. **Hostinger (hPanel)** inteqrasiyasını aktiv edin.
5. **Save Changes** (Dəyişiklikləri Yadda Saxla) düyməsini basın.

## Necə İşləyir?

### Addon Domains (Əlavə Domənler)

Ultimate Multisite-da bir domän xəritələndikdə:

1. İnteqrasiya Hostinger API-sinə sorğu göndərir ki, doməni əlavə domän kimi əlavə etsin.
2. Domän sizin kök (root) direktoriyanıza yönləndirilmək üçün konfiqurasiya edilir.
3. Bir domän xəritələnməsi silindikdə, inteqrasiya avtomatik olaraq addon domaini hPanel-dən silir.

### Subdomains (Alt Domenlər)

Subdomain multisite quraşdırmaları üçün, yeni bir sayt yaradılarkən:

1. İnteqrasiya tam domandan subdomain hissəsini çıxarır.
2. Hostinger API-sinə subdomaini əlavə etmək üçün sorğu göndərir.
3. Subdomain sizin kök direktoriyanıza yönləndirilmək üçün konfiqurasiya edilir.

## Vacib Qeydlər

- İnteqrasiya hesabınızla əlaqə saxlamaq üçün Hostinger'in REST API-sindən istifadə edir.
- API tokeninizin domän və subdomain idarəçiliyi üçün lazım olan icazələrə malik olması lazımdır.
- İnteqrasiya DNS konfiqurasiyasını idarə etmir; domənlər artıq Hostinger hesabınıza yönləndirilməlidir.
- API sorğuları HTTPS vasitəsilə təhlükəsiz şəkildə aparılır.
- API tokeninizi təhlükəsiz saxlayın və onu heç vaxt açıq yerlərdə paylaşmayın.

## Problemləri Həll Etmə (Troubleshooting)

### API Bağlantı Problemləri

API token'ınızın doğru olup olmadığını ve süresinin dolup dolmadığını kontrol edin.
Hesap Kimliğinizin (Account ID) doğru olduğundan emin olun.
API token'ınızın alan yönetimi için gerekli izinlere sahip olduğundan emin olun.
Hostinger hesabınızın aktif olduğunu ve iyi durumda olduğunu doğrulayın.

### Alan Eklendi Değilse (Domain Not Added)

- Ultimate Multisite loglarında herhangi bir hata mesajı olup olmadığını kontrol edin.
- Alanın Hostinger hesabınıza zaten eklenip eklenmediğini doğrulayın.
- Hostinger hesabınızın eklenti alan adları için limitine ulaşmadığından emin olun.
- Alanın Hostinger isim sunucularınıza (nameservers) doğru şekilde yönlendirildiğini teyit edin.

### SSL Sertifikası Sorunları (SSL Certificate Issues)

- Bu entegrasyon SSL sertifikası verme işini yapmaz.
- Hostinger genellikle AutoSSL aracılığıyla ücretsiz SSL sertifikaları sağlar.
- SSL sertifikalarını hPanel'de **SSL/TLS** altında doğrudan yönetebilirsiniz.
- Alternatif olarak, Hostinger'ın AutoSSL özelliğini kullanarak Let's Encrypt'i kullanabilirsiniz.

## Destek (Support)

Hostinger entegrasyonuyla ilgili ek yardıma ihtiyacınız olursa lütfen şuralara bakın:

- [Hostinger API Dokümantasyonu](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Dokümantasyonu](/docs)
- [Ultimate Multisite Destek](https://ultimatemultisite.com/support)
