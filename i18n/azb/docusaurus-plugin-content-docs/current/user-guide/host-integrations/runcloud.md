---
title: RunCloud Integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Entegrasyonu

## Genel Bakış
RunCloud, web uygulamalarını kendi bulut sunucularınızda kolayca yayınlamanıza ve yönetmenize olanak tanıyan bulut tabanlı bir sunucu yönetim platformudur. Bu entegrasyon, Ultimate Multisite ve RunCloud arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Eşlemeler silindiğinde alan adı kaldırma

## Gereksinimler
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekir:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Kurulum Talimatları

### 1. RunCloud API Kimlik Bilgilerinizi Alın

1. RunCloud dashboard'unuza giriş yapın
2. "Kullanıcı Profili"ne gidin (sağ üst köşedeki profil resminize tıklayın)
3. Menüden "API"yi seçin
4. Eğer yoksa "API Anahtarı Oluştur"a tıklayın
5. API Anahtarınızı ve API Secret'ınızı kopyalayın

### 2. Sunucu ve Uygulama Kimliklerinizi Alın

1. RunCloud dashboard'unuzda "Sunucular"a gidin
2. WordPress multisitenizin barındırıldığı sunucuyu seçin
3. Sunucu Kimliği, URL'de görünür: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Uygulamaları"na gidin ve WordPress uygulamanızı seçin
5. Uygulama Kimliği, URL'de görünür: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php'ye Sabitler Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress admin panelinizde Ultimate Multisite > Ayarlar'a gidin
2. "Alan Adı Eşleme" sekmesine gidin
3. "Host Entegrasyonları" bölümüne kadar aşağı kaydırın
4. RunCloud entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet"e tıklayın

## Nasıl Çalışır

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, alan adını uygulamanıza eklemek için RunCloud'un API'sine bir istek gönderir.
2. Alan adı başarıyla eklendiğinde, entegrasyon aynı zamanda SSL sertifikalarını yeniden yayınlar.
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon alan adı RunCloud'dan kaldırır.

Alt alan adı kurulumları için, entegrasyon ağınıza yeni siteler eklendiğinde RunCloud'da alt alan adlarının oluşturulmasını otomatik olarak halleder.

## Sorun Giderme

### API Bağlantı Sorunları
- API kimlik bilgilerinizin doğru olduğundan emin olun
- Sunucu ve uygulama kimliklerinizin doğru olup olmadığını kontrol edin
- RunCloud hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifikası Sorunları
- RunCloud'un SSL sertifikaları yayınlaması biraz zaman alabilir
- Alan adlarınızın sunucunuzun IP adresine doğru şekilde işaret ettiğini doğrulayın
- Uygulamanız için RunCloud SSL ayarlarını kontrol edin

### Alan Adı Eklenmedi
- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin
- Alan adının zaten RunCloud'a eklenmediğinden emin olun
- RunCloud planınızın birden fazla alan adı desteklediğinden emin olun
