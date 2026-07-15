---
title: ServerPilot Интеграция
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Entegrasi

## Genel Bakış {#overview}
ServerPilot, WordPress ve diğer PHP sitelerini DigitalOcean, Amazon, Google veya başka herhangi bir sunucularda barındırmak için bulut hizmetidir. Bu entegrasyon, Ultimate Multisite ile ServerPilot arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimini sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- Let's Encrypt ile SSL sertifikası yönetimi
- Otomatik SSL yenileme

## Gereksinimler {#requirements}
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Kurulum Talimatları {#setup-instructions}

### 1. ServerPilot API Kimliklerinizi Alın {#1-get-your-serverpilot-api-credentials}

1. ServerPilot panonuza giriş yapın
2. "Hesap" > "API" bölümüne gidin
3. Zaten bir anahtarınız yoksa yeni bir API anahtarı oluşturun
4. Client ID'nizi ve API Anahtarınızı kopyalayın

### 2. Uygulama Kimliğinizi (App ID) Alın {#2-get-your-app-id}

1. ServerPilot panonuzda, "Uygulamalar"a gidin
2. WordPress multisite'ınızın barındırıldığı uygulamayı seçin
3. App ID, URL'de görünür: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php Dosyasına Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress yönetim panelinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Alan Adı Eşleştirmesi" (Domain Mapping) sekmesine gidin
3. Aşağı kaydırarak "Sunucu Entegrasyonları" (Host Integrations) bölümüne gelin
4. ServerPilot entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet" (Save Changes) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu {#domain-syncing}

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

۱. این ادغام (integration) لیست فعلی دامنه‌ها را از ServerPilot دریافت می‌کند.
۲. آن دامنه جدید را به لیست اضافه می‌کند (و اگر مربوط است، نسخه www هم اضافه می‌شود).
۳. لیست به‌روز شده را از طریق API به ServerPilot ارسال می‌کند.
۴. ServerPilot لیست دامنه‌های برنامه شما را به‌روزرسانی می‌کند.

### مدیریت گواهی SSL (SSL Certificate Management) {#ssl-certificate-management}

بعد از اینکه دامنه‌ها با هم هماهنگ شدند (synced):

۱. این ادغام به صورت خودکار AutoSSL را برای برنامه شما فعال می‌کند.
۲. ServerPilot خودش صدور و نصب گواهی SSL را با استفاده از Let's Encrypt مدیریت می‌کند.
۳. ServerPilot همچنین مسئول تمدید خودکار گواهی‌های SSL است.

## تأیید گواهی SSL (SSL Certificate Verification) {#ssl-certificate-verification}

این ادغام طوری تنظیم شده که تعداد تلاش‌های تأیید گواهی SSL برای ServerPilot را افزایش دهد، چون ممکن است طول بکشد تا ServerPilot گواهی‌ها را صادر و نصب کند. به صورت پیش‌فرض، این سیستم تا ۵ بار تلاش می‌کند، اما می‌توانید با استفاده از فیلترها آن را تنظیم کنید.

## عیب‌یابی (Troubleshooting) {#troubleshooting}

### مشکلات اتصال API (API Connection Issues) {#api-connection-issues}
- مطمئن شوید که Client ID و API Key شما درست هستند.
- بررسی کنید که App ID شما صحیح باشد.
- اطمینان حاصل کنید که حساب ServerPilot شما مجوزهای لازم را دارد.

### مشکلات گواهی SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- ServerPilot نیاز دارد قبل از صدور گواهی SSL، دامنه‌ها باید رکورد DNS معتبری به سرور شما داشته باشند.
- اگر گواهی‌های SSL صادر نمی‌شوند، بررسی کنید که آیا دامنه‌های شما به درستی به آدرس IP سرور شما اشاره می‌کنند یا خیر.
- ممکن است طول بکشد تا ServerPilot گواهی‌ها را صادر و نصب کند (معمولاً ۵ تا ۱۵ دقیقه).

### دامنه اضافه نشده است (Domain Not Added) {#domain-not-added}
- لاگ‌های Ultimate Multisite را برای یافتن هرگونه پیام خطا بررسی کنید.
- تأیید کنید که دامنه قبلاً در ServerPilot اضافه نشده باشد.
- مطمئن شوید که طرح (plan) ServerPilot شما از تعداد دامنه‌هایی که قصد اضافه کردنشان را دارید پشتیبانی می‌کند.

### Alan Adını Kaldırma (Domain Removal) {#domain-removal}
- Ҳозирда ServerPilot API алоҳида доменларни олиш йўли бермайди.
- Ultimate Multisite'da домен маппингни олиб ташласа, интеграция ServerPilotдаги доменлар рўйхатини олиб ташлаш учун янгилайди.
