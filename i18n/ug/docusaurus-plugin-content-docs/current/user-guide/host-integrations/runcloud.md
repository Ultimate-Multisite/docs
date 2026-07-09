---
title: RunCloud Интеграция
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integrasi {#runcloud-integration}

## Umumiyyat (Overview) {#overview}
RunCloud bu bulut tabanlı server idaralash platformasidir, siz web ilovalarınızı öz bulut serverlaringizde osonlikcha yerləşdirmäge we idara etmäge imkan berýär. Bu integrasi Ultimate Multisite we RunCloud arasynda awtomatiki domen senkronizasiýasy we SSL sertifikatyny idara etmegi mümkin edýär.

## Funksiýalar (Features) {#features}
- Awtomatiki domen senkronizasiýasy
- SSL sertifikatyny idara etmek
- Mappedlikler (mappings) silinende domen hatarybarlylygy (Domain removal)

## Talaplar (Requirements) {#requirements}
Aşakdaky sabitleri (`wp-config.php` faylunda) bellemek zerurdyr:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Kurmak Üçin Talbatlar (Setup Instructions) {#setup-instructions}

### 1. RunCloud API Sertifikatlaringizi Almagyňyz {#1-get-your-runcloud-api-credentials}

1. RunCloud panelinde (dashboard) girişliň.
2. "User Profile" (üst-oń sağ künjündäki profil suratyna basyň) bölümini açyň.
3. Menюdan "API"ni saýlaň.
4. Hâlâ ýok bolsa, "Generate API Key" (API Aýlanyny döretmek) düwmanyna basyň.
5. API Aýlany we API Sırranyny (API Secret) nusga lap bilersiňiz.

### 2. Server we App IDlaringizi Almagyňyz {#2-get-your-server-and-app-ids}

1. RunCloud panelinde "Servers"e gitdiň.
2. WordPress multisite-i ýerleşdirilen serveri saýlaň.
3. Server ID URL-de görkezilýär: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications"a gitdiň we WordPress ilovany saýlaň.
5. App ID URL-de görkezilýär: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php-e Sabitleri Goşmagyňyz {#3-add-constants-to-wp-configphp}

Aşakdaky sabitleri `wp-config.php` faylınıza goşuň:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Integrasiýany Aktiw Etmek (Enable the Integration) {#4-enable-the-integration}

۱. WordPress yöneticinizde, Ultimate Multisite > Settings (Ayarlar) bölümüne gidin.
۲. "Domain Mapping" (Alan Eşleme) sekmesine geçin.
۳. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) kısmına gelin.
۴. RunCloud entegrasyonunu etkinleştirin.
۵. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın.

## Nasıl Çalışır? {#how-it-works}

Ultimate Multisite'ta bir alan eşlendiğinde:

۱. Entegrasyon, alanı uygulamanıza eklemek için RunCloud API'sine bir istek gönderir.
۲. Alan başarıyla eklendiyse, entegrasyon SSL sertifikalarını da yeniden dağıtır (yeniden yükler).
۳. Bir alan eşlemesi kaldırıldığında, entegrasyon o alanı RunCloud'dan kaldırır.

Alt alan adları (subdomain) kurulumları için ise, ağınıza yeni siteler eklendiğinde entegrasyon otomatik olarak RunCloud'da alt alan adlarının oluşturulmasını halleder.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- API kimlik bilgilerinizin doğru olup olmadığını kontrol edin.
- Sunucu ve uygulama ID'lerinizin doğru olduğundan emin olun.
- RunCloud hesabınızın gerekli izinlere sahip olduğundan emin olun.

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- RunCloud'un SSL sertifikalarını düzenlemesi biraz zaman alabilir.
- Alan adlarınızın sunucunuzun IP adresine doğru şekilde işaret ettiğini doğrulayın.
- Uygulamanız için RunCloud SSL ayarlarını kontrol edin.

### Alan Adı Eklenmedi {#domain-not-added}
- Ultimate Multisite loglarını herhangi bir hata mesajı olup olmadığı açısından kontrol edin.
- Alan adının zaten RunCloud'a ekli olmadığından emin olun.
- RunCloud planınızın birden fazla alanı desteklediğinden emin olun.
