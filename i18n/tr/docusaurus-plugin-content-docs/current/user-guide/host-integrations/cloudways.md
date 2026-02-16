---
title: Cloudways Entegrasyonu
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways Entegrasyonu

## Genel Bakış
Cloudways, WordPress sitelerinizi DigitalOcean, AWS, Google Cloud ve daha birçok bulut sağlayıcısına deploy etmenizi sağlayan yönetilen bir bulut hosting platformudur. Bu entegrasyon, Ultimate Multisite ile Cloudways arasında otomatik alan adı senkronizasyonu ve SSL sertifika yönetimi yapmanızı sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifika yönetimi
- Ekstra alan adı desteği
- SSL sertifikaları için DNS doğrulaması

## Gereksinimler
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekir:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

İsteğe bağlı olarak şunu da tanımlayabilirsiniz:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Kurulum Talimatları

### 1. Cloudways API Bilgilerinizi Alın

1. Cloudways kontrol panelinize giriş yapın
2. "Account" > "API Keys" bölümüne gidin
3. Henüz yoksa bir API anahtarı oluşturun
4. E-posta adresinizi ve API anahtarınızı kopyalayın

### 2. Sunucu ve Uygulama ID'lerinizi Alın

1. Cloudways kontrol panelinizde "Servers" bölümüne gidin
2. WordPress multisite'ınızın barındırıldığı sunucuyu seçin
3. Sunucu ID'si URL'de görünür: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" bölümüne gidin ve WordPress uygulamanızı seçin
5. Uygulama ID'si URL'de görünür: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php Dosyasına Sabitleri Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Her zaman dahil edilmesi gereken ek alan adlarınız varsa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kaydırın
4. Cloudways entegrasyonunu etkinleştirin
5. "Save Changes" butonuna tıklayın

## Nasıl Çalışır

### Alan Adı Senkronizasyonu

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, mevcut tüm eşlenmiş alan adlarını alır
2. Yeni alan adını listeye ekler (uygunsa www versiyonuyla birlikte)
3. Tüm listeyi API aracılığıyla Cloudways'e gönderir
4. Cloudways, uygulamanız için alan adı takma adlarını günceller

Not: Cloudways API, tek tek alan adı eklemek veya kaldırmak yerine her seferinde alan adlarının tam listesinin gönderilmesini gerektirir.

### SSL Sertifika Yönetimi

Alan adları senkronize edildikten sonra:

1. Entegrasyon, hangi alan adlarının sunucunuzu gösteren geçerli DNS kayıtlarına sahip olduğunu kontrol eder
2. Cloudways'e bu alan adları için Let's Encrypt SSL sertifikaları yüklemesi isteği gönderir
3. Cloudways, SSL sertifikalarının oluşturulmasını ve yüklenmesini gerçekleştirir

## Ekstra Alan Adları

`WU_CLOUDWAYS_EXTRA_DOMAINS` sabiti, Cloudways ile senkronizasyon sırasında her zaman dahil edilmesi gereken ek alan adlarını belirtmenizi sağlar. Bu şunlar için kullanışlıdır:

- Ultimate Multisite tarafından yönetilmeyen alan adları
- Wildcard alan adları (örn. `*.example.com`)
- Geliştirme veya staging alan adları

## Sorun Giderme

### API Bağlantı Sorunları
- E-posta adresinizin ve API anahtarınızın doğru olduğunu kontrol edin
- Sunucu ve uygulama ID'lerinizin doğru olduğunu kontrol edin
- Cloudways hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifika Sorunları
- Cloudways, SSL sertifikası vermeden önce alan adlarının sunucunuzu gösteren geçerli DNS kayıtlarına sahip olmasını gerektirir
- Entegrasyon, SSL sertifikası talep etmeden önce DNS kayıtlarını doğrular
- SSL sertifikaları verilmiyorsa, alan adlarınızın sunucunuzun IP adresine doğru şekilde yönlendirildiğini kontrol edin

### Alan Adı Eklenmiyor
- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin
- Alan adının Cloudways'e zaten eklenmemiş olduğunu doğrulayın
- Cloudways planınızın eklemeye çalıştığınız alan adı sayısını desteklediğinden emin olun
