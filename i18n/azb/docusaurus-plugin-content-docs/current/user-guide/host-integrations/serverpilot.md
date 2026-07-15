---
title: ServerPilot Integration
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Entegrasyonu

## Genel Bakış {#overview}
ServerPilot, WordPress ve diğer PHP sitelerini DigitalOcean, Amazon, Google veya herhangi bir sunucu sağlayıcısındaki sunucularda barındırmak için kullanılan bir bulut hizmetidir. Bu entegrasyon, Ultimate Multisite ile ServerPilot arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- Let's Encrypt ile SSL sertifikası yönetimi
- Otomatik SSL yenileme

## Gereksinimler {#requirements}
Aşağıdaki sabitleri (constants) `wp-config.php` dosyanızda tanımlamanız gerekiyor:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Kurulum Talimatları {#setup-instructions}

### 1. ServerPilot API Kimlik Bilgilerinizi Alın {#1-get-your-serverpilot-api-credentials}

1. ServerPilot dashboard'unuza giriş yapın
2. "Account" > "API" yolunu izleyin
3. Eğer yoksa yeni bir API anahtarı oluşturun
4. Client ID'nizi ve API Key'inizi kopyalayın

### 2. Uygulama ID'nizi (App ID) Alın {#2-get-your-app-id}

1. ServerPilot dashboard'unuzda "Apps" bölümüne gidin
2. WordPress multisitenizin barındırıldığı uygulamayı seçin
3. App ID, URL'de görünür: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Sabitleri wp-config.php'ye Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress admin panelinizde Ultimate Multisite > Settings yolunu izleyin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kadar aşağı kaydırın
4. ServerPilot entegrasyonunu etkinleştirin
5. "Save Changes" butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu {#domain-syncing}

Bir alan adı Ultimate Multisite'da eşleştirildiğinde:

1. Entegrasyon, ServerPilot'tan mevcut alan adları listesini alır
2. Yeni alan adını listeye ekler (uygunsa www versiyonuyla birlikte)
3. Güncellenmiş listeyi API üzerinden ServerPilot'a gönderir
4. ServerPilot, uygulamanız için alan adı listesini günceller

### SSL Sertifikası Yönetimi {#ssl-certificate-management}

Alan adları senkronize edildikten sonra:

1. Entegrasyon, uygulamanız için otomatik olarak AutoSSL'yi etkinleştirir
2. ServerPilot, Let's Encrypt kullanarak SSL sertifikası verme ve kurulum işlemlerini yönetir
3. ServerPilot ayrıca SSL sertifikalarının otomatik yenilenmesini de yönetir

## SSL Sertifikası Doğrulaması {#ssl-certificate-verification}

Entegrasyon, ServerPilot'un SSL sertifikalarını verme ve kurması biraz zaman alabileceği için, ServerPilot için SSL sertifikası doğrulama deneme sayısını artırmak üzere yapılandırılmıştır. Varsayılan olarak 5'e kadar deneme yapacaktır, ancak bu filtreler kullanılarak ayarlanabilir.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- Client ID ve API Key'inizin doğru olduğundan emin olun
- App ID'nizin doğru olduğundan emin olun
- ServerPilot hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- ServerPilot, SSL sertifikaları vermeden önce alan adlarının sunucunuza işaret eden geçerli DNS kayıtlarına sahip olmasını gerektirir
- SSL sertifikaları verilmiyorsa, alan adlarınızın sunucunuzun IP adresine doğru işaret ettiğini kontrol edin
- ServerPilot'un SSL sertifikalarını vermesi ve kurması biraz zaman alabilir (genellikle 5-15 dakika)

### Alan Adı Eklenmedi {#domain-not-added}
- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini (logs) kontrol edin
- Alan adının zaten ServerPilot'a eklenmediğinden emin olun
- ServerPilot planınızın eklediğiniz alan adı sayısını desteklediğinden emin olun

### Alan Adı Kaldırıldı {#domain-removal}
- Şu anda ServerPilot API'si tek tek alan adlarını kaldırma yolu sağlamıyor
- Ultimate Multisite'da bir alan adı eşleştirilmesi kaldırıldığında, entegrasyon ServerPilot'taki alan adı listesini kaldırılan alan adı hariç olacak şekilde güncelleyecektir
