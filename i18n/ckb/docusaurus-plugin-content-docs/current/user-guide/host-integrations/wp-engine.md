---
title: یەکگرتووکردنی WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrationê bi WP Engine {#wp-engine-integration}

## Pêşkerinî (Overview) {#overview}
WP Engine platforma yon sèvis hosting WordPress ki gen kalite pwofi, sekirite, ak kapasite pou grandi pou sit WordPress ou. Entegrasyon sa a pèmèt sincronizasyon otomatik nan domèn yo ant Ultimate Multisite ak WP Engine.

## Fonksyonalite (Features) {#features}
- Sincronizasyon domèn otomatik
- Sipò subdomain pou enstalasyon multisite
- Entegrasyon fasil ak sistèm ki egziste deja nan WP Engine

## Requisit (Requirements) {#requirements}
Entegrasyon an otomatikman detekte si ou ap bay sit ou sou WP Engine epi li itilize API natif WP Engine. Pa gen okenn konfigirasyon ek itilite si plugin WP Engine a aktif epi li configure byen.

Sepandan, si ou bezwen configure entegrasyon an menm, ou ka defini youn nan konstante sa yo nan fichye `wp-config.php` ou a:

```php
define('WPE_APIKEY', 'your_api_key'); // Metòd ki pi bon
// Oswa
define('WPE_API', 'your_api_key'); // Metòd alternativ
```

## Enstriksyon Konfigirasyon (Setup Instructions) {#setup-instructions}

### 1. Verify Plugin WP Engine {#1-verify-wp-engine-plugin}

Si ou ap bay sit ou sou WP Engine, plugin WP Engine a dwe deja enstale epi aktif. Verifye ke:

1. Plugin WP Engine a aktif
2. Fichye `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` la egziste

### 2. Aktive Entegrasyon an {#2-enable-the-integration}

1. Nan admin WordPress ou, ale Ultimate Multisite > Settings (Règlaman)
2. Navige nan onglet "Domain Mapping" (Mape Domèn)
3. Desann pou "Host Integrations" (Entegrasyon Host)
4. Active entegrasyon WP Engine a
5. Klike sou "Save Changes" (Konserve Chanjman yo)

## Kijan Li Travay (How It Works) {#how-it-works}

### Sincronizasyon Domèn (Domain Syncing) {#domain-syncing}

Lè yon domèn mapye nan Ultimate Multisite:

1. Entegrasyon an itilize API WP Engine pou ajoute domèn nan enstalasyon WP Engine ou a
2. WP Engine la jere konfigirasyon domèn ak emisyon sertifikat SSL la
3. Lè yon mapye domèn retire, entegrasyon an ap retire domèn nan WP Engine

### Sipò Subdomain (Subdomain Support) {#subdomain-support}

برای نصب سایت‌های چند زیردامنه (subdomain multisite):

۱. این ادغام هر زیردامنه‌ای را هنگام ایجاد یک سایت جدید به WP Engine اضافه می‌کند.
۲. WP Engine تنظیمات زیردامنه را مدیریت می‌کند.
۳. هنگامی که یک سایت حذف می‌شود، این ادغام آن زیردامنه را از WP Engine حذف خواهد کرد.

## نکات مهم {#important-notes}

### دامنه‌های وایلد (Wildcard Domains) {#wildcard-domains}

برای نصب‌های چند زیردمنه، توصیه می‌شود با پشتیبانی WP Engine تماس بگیرید تا درخواست پیکربندی دامنه وایلد بدهید. این کار باعث می‌شود همه زیردامنه‌ها به صورت خودکار کار کنند و نیازی نباشد هر کدام را به صورت جداگانه اضافه کنید.

### گواهی‌های SSL (SSL Certificates) {#ssl-certificates}

WP Engine به طور خودکار صدور و تمدید گواهی SSL را برای همه دامنه‌هایی که از طریق این ادغام اضافه می‌شوند، مدیریت می‌کند. هیچ تنظیمات اضافی نیاز نیست.

## عیب‌یابی (Troubleshooting) {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- بررسی کنید که افزونه WP Engine فعال و به درستی پیکربندی شده باشد.
- اگر کلید API را دستی تعریف کرده‌اید، مطمئن شوید که صحیح است.
- اگر با مشکل API مواجه شدید، با پشتیبانی WP Engine تماس بگیرید.

### اضافه نشدن دامنه {#domain-not-added}
- لاگ‌های Ultimate Multisite را برای هرگونه پیام خطا بررسی کنید.
- تأیید کنید که دامنه قبلاً در WP Engine اضافه نشده باشد.
- مطمئن شوید که طرح (plan) WP Engine شما از تعداد دامنه‌هایی که اضافه می‌کنید پشتیبانی می‌کند.

### مشکلات زیردامنه {#subdomain-issues}
- اگر زیردامنه‌ها کار نمی‌کنند، با پشتیبانی WP Engine تماس بگیرید تا درخواست پیکربندی دامنه وایلد بدهید.
- بررسی کنید که تنظیمات DNS شما برای دامنه اصلی و زیردامنه‌ها به درستی پیکربندی شده باشند.
