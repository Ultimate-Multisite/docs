---
title: ServerPilot Entegrasyonu
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Entegrasyonu

## Genel Bakış
ServerPilot, DigitalOcean, Amazon, Google veya başka herhangi bir sunucu sağlayıcısındaki sunucularda WordPress ve diğer PHP web sitelerini barındırmak için kullanılan bir bulut hizmetidir. Bu entegrasyon, Ultimate Multisite ile ServerPilot arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimini sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- Let's Encrypt ile SSL sertifikası yönetimi
- Otomatik SSL yenileme

## Gereksinimler
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekmektedir:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Kurulum Talimatları

### 1. ServerPilot API Kimlik Bilgilerinizi Alın

1. ServerPilot kontrol panelinize giriş yapın
2. "Account" > "API" bölümüne gidin
3. Henüz yoksa yeni bir API anahtarı oluşturun
4. Client ID ve API Key bilgilerinizi kopyalayın

### 2. App ID'nizi Alın

1. ServerPilot kontrol panelinizde "Apps" bölümüne gidin
2. WordPress multisite kurulumunuzun barındırıldığı uygulamayı seçin
3. App ID, URL'de görünür: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Sabitleri wp-config.php Dosyasına Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kaydırın
4. ServerPilot entegrasyonunu etkinleştirin
5. "Save Changes" butonuna tıklayın

## Nasıl Çalışır

### Alan Adı Senkronizasyonu

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, ServerPilot'tan mevcut alan adı listesini alır
2. Yeni alan adını listeye ekler (varsa www versiyonuyla birlikte)
3. Güncellenmiş listeyi API aracılığıyla ServerPilot'a gönderir
4. ServerPilot, uygulamanız için alan adı listesini günceller

### SSL Sertifikası Yönetimi

Alan adları senkronize edildikten sonra:

1. Entegrasyon, uygulamanız için AutoSSL'i otomatik olarak etkinleştirir
2. ServerPilot, Let's Encrypt kullanarak SSL sertifikası oluşturma ve kurulumunu gerçekleştirir
3. ServerPilot ayrıca SSL sertifikalarının otomatik yenilenmesini de yönetir

## SSL Sertifikası Doğrulama

ServerPilot'un SSL sertifikalarını oluşturup kurması biraz zaman alabileceğinden, entegrasyon SSL sertifikası doğrulama deneme sayısını artıracak şekilde yapılandırılmıştır. Varsayılan olarak 5 kez deneme yapılır, ancak bu sayı filtreler kullanılarak ayarlanabilir.

## Sorun Giderme

### API Bağlantı Sorunları
- Client ID ve API Key bilgilerinizin doğru olduğunu kontrol edin
- App ID'nizin doğru olduğundan emin olun
- ServerPilot hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifikası Sorunları
- ServerPilot, SSL sertifikaları vermeden önce alan adlarının sunucunuza yönlenen geçerli DNS kayıtlarına sahip olmasını gerektirir
- SSL sertifikaları verilmiyorsa, alan adlarınızın sunucunuzun IP adresine doğru şekilde yönlendirildiğini kontrol edin
- ServerPilot'un SSL sertifikalarını oluşturup kurması biraz zaman alabilir (genellikle 5-15 dakika)

### Alan Adı Eklenmiyor
- Hata mesajları için Ultimate Multisite loglarını kontrol edin
- Alan adının ServerPilot'a zaten eklenmiş olmadığını doğrulayın
- ServerPilot planınızın eklemeye çalıştığınız alan adı sayısını desteklediğinden emin olun

### Alan Adı Kaldırma
- Şu anda ServerPilot API'si, tek tek alan adlarını kaldırmanın bir yolunu sunmuyor
- Ultimate Multisite'ta bir alan adı eşlemesi kaldırıldığında, entegrasyon ServerPilot'taki alan adı listesini kaldırılan alan adını hariç tutacak şekilde günceller
