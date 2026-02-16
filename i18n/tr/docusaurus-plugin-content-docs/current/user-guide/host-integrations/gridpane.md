---
title: GridPane Entegrasyonu
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Entegrasyonu

## Genel Bakış
GridPane, profesyonel WordPress kullanıcıları için özel olarak tasarlanmış bir WordPress barındırma kontrol panelidir. Bu entegrasyon, Ultimate Multisite ile GridPane arasında otomatik alan adı senkronizasyonu ve SSL sertifika yönetimi sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifika yönetimi
- SUNRISE sabitinin otomatik yapılandırması

## Gereksinimler
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekmektedir:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Kurulum Talimatları

### 1. GridPane API Kimlik Bilgilerinizi Alın

1. GridPane kontrol panelinize giriş yapın
2. "Settings" > "API" bölümüne gidin
3. Henüz yoksa bir API anahtarı oluşturun
4. API anahtarınızı kopyalayın

### 2. Sunucu ve Site Kimliklerinizi Alın

1. GridPane kontrol panelinizde "Servers" bölümüne gidin
2. WordPress multisite kurulumunuzun barındırıldığı sunucuyu seçin
3. Sunucu Kimliğini not edin (URL'de veya sunucu detayları sayfasında görünür)
4. "Sites" bölümüne gidin ve WordPress sitenizi seçin
5. Site Kimliğini not edin (URL'de veya site detayları sayfasında görünür)

### 3. Sabitleri wp-config.php Dosyasına Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne inin
4. GridPane entegrasyonunu etkinleştirin
5. "Save Changes" butonuna tıklayın

## Nasıl Çalışır

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, alan adını sitenize eklemek için GridPane API'sine bir istek gönderir
2. GridPane otomatik olarak SSL sertifikası sağlama işlemini gerçekleştirir
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon alan adını GridPane'den kaldırır

Entegrasyon ayrıca alan adı eşlemesinin düzgün çalışması için gerekli olan SUNRISE sabitini wp-config.php dosyanızda otomatik olarak yönetir.

## SUNRISE Sabiti Yönetimi

GridPane entegrasyonunun benzersiz bir özelliği, GridPane'in kendi alan adı eşleme sistemiyle çakışmaları önlemek için wp-config.php dosyasındaki SUNRISE sabitini otomatik olarak geri almasıdır. Bu, her iki sistemin de sorunsuz bir şekilde birlikte çalışmasını sağlar.

## Sorun Giderme

### API Bağlantı Sorunları
- API anahtarınızın doğru olduğunu kontrol edin
- Sunucu ve site kimliklerinizin doğru olduğundan emin olun
- GridPane hesabınızın gerekli izinlere sahip olduğunu doğrulayın

### SSL Sertifika Sorunları
- GridPane'in SSL sertifikası oluşturması biraz zaman alabilir
- Alan adlarınızın sunucunuzun IP adresine doğru şekilde yönlendirildiğini kontrol edin
- Siteniz için GridPane SSL ayarlarını kontrol edin

### Alan Adı Eklenmiyor
- Hata mesajları için Ultimate Multisite günlüklerini kontrol edin
- Alan adının GridPane'e daha önce eklenip eklenmediğini kontrol edin
- Alan adınızın DNS kayıtlarının doğru yapılandırıldığından emin olun
