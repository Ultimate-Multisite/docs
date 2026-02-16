---
title: RunCloud Entegrasyonu
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Entegrasyonu

## Genel Bakış
RunCloud, kendi bulut sunucularınızda web uygulamalarını kolayca dağıtmanızı ve yönetmenizi sağlayan bulut tabanlı bir sunucu yönetim platformudur. Bu entegrasyon, Ultimate Multisite ve RunCloud arasında otomatik alan adı senkronizasyonu ve SSL sertifika yönetimi yapmanızı sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifika yönetimi
- Eşlemeler silindiğinde alan adlarının kaldırılması

## Gereksinimler
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekmektedir:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Kurulum Talimatları

### 1. RunCloud API Kimlik Bilgilerinizi Alın

1. RunCloud kontrol panelinize giriş yapın
2. "User Profile" bölümüne gidin (sağ üst köşedeki profil resminize tıklayın)
3. Menüden "API" seçeneğini seçin
4. Henüz yoksa "Generate API Key" butonuna tıklayın
5. API Key ve API Secret bilgilerinizi kopyalayın

### 2. Sunucu ve Uygulama ID'lerinizi Alın

1. RunCloud kontrol panelinizde "Servers" bölümüne gidin
2. WordPress multisite kurulumunuzun barındırıldığı sunucuyu seçin
3. Sunucu ID'si URL'de görünür: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" bölümüne gidin ve WordPress uygulamanızı seçin
5. Uygulama ID'si URL'de görünür: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php Dosyasına Sabitleri Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kaydırın
4. RunCloud entegrasyonunu etkinleştirin
5. "Save Changes" butonuna tıklayın

## Nasıl Çalışır

Ultimate Multisite'da bir alan adı eşlendiğinde:

1. Entegrasyon, alan adını uygulamanıza eklemek için RunCloud API'sine bir istek gönderir
2. Alan adı başarıyla eklenirse, entegrasyon SSL sertifikalarını da yeniden dağıtır
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon alan adını RunCloud'dan kaldırır

Alt alan adı kurulumlarında, ağınıza yeni siteler eklendiğinde entegrasyon RunCloud'da alt alan adlarının oluşturulmasını otomatik olarak yönetir.

## Sorun Giderme

### API Bağlantı Sorunları
- API kimlik bilgilerinizin doğru olduğunu kontrol edin
- Sunucu ve uygulama ID'lerinizin doğru olduğunu kontrol edin
- RunCloud hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifika Sorunları
- RunCloud'un SSL sertifikalarını vermesi biraz zaman alabilir
- Alan adlarınızın sunucunuzun IP adresine düzgün şekilde yönlendirildiğini doğrulayın
- Uygulamanız için RunCloud SSL ayarlarını kontrol edin

### Alan Adı Eklenmiyor
- Hata mesajları için Ultimate Multisite günlüklerini kontrol edin
- Alan adının RunCloud'a zaten eklenmemiş olduğunu doğrulayın
- RunCloud planınızın birden fazla alan adını desteklediğinden emin olun
