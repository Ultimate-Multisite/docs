---
title: GridPane ինտեգրում
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane-ի ինտեգրումը (Integration) {#gridpane-integration}

## Ընդհանուր տեսքը (Overview) {#overview}
GridPane-ը հատուկ WordPress հոස්թինգի վերահսկող պանել է, որը կառուցված է լուրջ WordPress մասնագետների համար։ Այս ինտեգրումը թույլ է տալիս ավտոմատ դոմենային սինխրոնիզացիա և SSL վկայագրականների կառավարում Ultimate Multisite-ի և GridPane-ի միջև։

## Առանձնահատկություններ (Features) {#features}
- Դոմենային ավտոմատ սինխրոնիզացիա
- SSL վկայագրականների կառավարում
- SUNRISE հաստատուն արժեքի ավտոմատ կազմաձևում (Automatic configuration of SUNRISE constant)

## Առ պահեր (Requirements) {#requirements}
Հետևյալ հաստատունները պետք է սահմանվեն ձեր `wp-config.php` ֆայլում.

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Կài đặtի ցուցումներ (Setup Instructions) {#setup-instructions}

### 1. Ստացեք ձեր GridPane API տվյալները (Get Your GridPane API Credentials) {#1-get-your-gridpane-api-credentials}

1. Մուտք գործեք ձեր GridPane պանելը։
2. Գնացեք "Settings" > "API" (Կարգավորումներ > API)։
3. Ստեղծեք API key, եթե դեռ չունեք։
4. Պահպանեք ձեր API key-ը։

### 2. Ստացեք ձեր սերվերի և կայքի ID-ները (Get Your Server and Site IDs) {#2-get-your-server-and-site-ids}

1. Ձեր GridPane պանելում գնացեք "Servers" (Սերվերներ)։
2. Ընտրեք այն սերվերը, որտեղ տեղադրված է ձեր WordPress multisite-ը։
3. Նշեք Server ID-ն (որը երևում է URL-ում կամ սերվերի մանրամասների էջում)։
4. Գնացեք "Sites" (Կայքեր) և ընտրեք ձեր WordPress կայքը։
5. Նշեք Site ID-ն (որը երևում է URL-ում կամ կայքի մանրամասների էջում)։

### 3. Ավելացրեք հաստատունները wp-config.php-ին (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

Ավելացրեք հետևյալ հաստատունները ձեր `wp-config.php` ֆայլի մեջ.

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Թողեք ինտեգրումը ակտիվ (Enable the Integration) {#4-enable-the-integration}

1. Ձեր WordPress admin-ում գնացեք Ultimate Multisite > Settings (Ultimate Multisite > Կարգավորումներ)։
2. Գնացեք "Domain Mapping" (Դոմենային քարտեզագրում) տաբին։
3. Շարժվեք ներքև և գտնեք "Host Integrations" (Հոස් ինտեգրումներ) բաժինը։
4. Թողեք GridPane-ի ինտեգրումը ակտիվ (Enable the GridPane integration)։
5. Սեղմեք "Save Changes" (Փոփոխությունները պահպանել)։

## Ինչպես է այն աշխատում (How It Works) {#how-it-works}

Երբ Ultimate Multisite-ում դոմենը քարտեզագրվում է (When a domain is mapped in Ultimate Multisite):

1. Entegrasyon, alan adını sitenize eklemek için GridPane API'sine bir istek gönderir.
2. GridPane otomatik olarak SSL sertifikası sağlama işini halleder.
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon o alanı GridPane'dan kaldırır.

Entegrasyon ayrıca alan adı eşleştirmesinin doğru çalışması için gerekli olan wp-config.php dosyasındaki SUNRISE sabitini de otomatik olarak yönetir.

## SUNRISE Sabiti Yönetimi {#sunrise-constant-management}

GridPane entegrasyonunun benzersiz bir özelliği, kendi alan adı eşleştirme sistemiyle çakışmaları önlemek için wp-config.php'deki SUNRISE sabitini otomatik olarak geri döndürmesidir. Bu, her iki sistemin de sorunsuz çalışmasını sağlar.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- API anahtarınızın doğru olup olmadığını kontrol edin.
- Sunucu ve site kimliklerinizin doğru olduğundan emin olun.
- GridPane hesabınızın gerekli izinlere sahip olduğundan emin olun.

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- GridPane'ın SSL sertifikalarını yayınlaması biraz zaman alabilir.
- Alan adlarınızın sunucunuzun IP adresine doğru şekilde yönlendirildiğini doğrulayın.
- Siteniz için GridPane SSL ayarlarını kontrol edin.

### Alan Adı Eklenmedi {#domain-not-added}
- Ultimate Multisite loglarını herhangi bir hata mesajı için kontrol edin.
- Alan adının zaten GridPane'a eklenmediğinden emin olun.
- Alan adınızın DNS kayıtlarının doğru yapılandırıldığından emin olun
