---
title: cPanel Entegrasyonu
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Entegrasyonu

## Genel Bakış
cPanel, birçok paylaşımlı ve özel sunucu sağlayıcısı tarafından kullanılan en popüler web barındırma kontrol panellerinden biridir. Bu entegrasyon, Ultimate Multisite ile cPanel arasında otomatik alan adı senkronizasyonu sağlar ve cPanel hesabınıza otomatik olarak alan adı takma adları ve alt alan adları eklemenize olanak tanır.

## Özellikler
- cPanel'de otomatik ek alan adı oluşturma
- cPanel'de otomatik alt alan adı oluşturma (alt alan adı multisite kurulumları için)
- Eşlemeler silindiğinde alan adlarının kaldırılması

## Gereksinimler
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekir:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

İsteğe bağlı olarak şunları da tanımlayabilirsiniz:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Kurulum Talimatları

### 1. cPanel Kimlik Bilgilerinizi Edinin

1. cPanel kullanıcı adınızı ve şifrenizi barındırma sağlayıcınızdan alın
2. cPanel sunucu adresinizi belirleyin (genellikle `cpanel.yourdomain.com` veya `yourdomain.com:2083`)

### 2. Sabitleri wp-config.php Dosyasına Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

İsteğe bağlı olarak port ve kök dizini özelleştirebilirsiniz:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kaydırın
4. cPanel entegrasyonunu etkinleştirin
5. "Save Changes" butonuna tıklayın

## Nasıl Çalışır

### Ek Alan Adları

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, alan adını ek alan adı olarak eklemek için cPanel'in API'sine bir istek gönderir
2. Alan adı, kök dizininize yönlendirilecek şekilde yapılandırılır
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon ek alan adını cPanel'den kaldırır

### Alt Alan Adları

Alt alan adı multisite kurulumlarında yeni bir site oluşturulduğunda:

1. Entegrasyon, tam alan adından alt alan adı kısmını çıkarır
2. Alt alan adını eklemek için cPanel'in API'sine bir istek gönderir
3. Alt alan adı, kök dizininize yönlendirilecek şekilde yapılandırılır

## Önemli Notlar

- Entegrasyon, cPanel hesabınızla iletişim kurmak için cPanel'in API2'sini kullanır
- cPanel hesabınızın ek alan adları ve alt alan adları ekleme iznine sahip olması gerekir
- Bazı barındırma sağlayıcıları, oluşturabileceğiniz ek alan adı veya alt alan adı sayısını sınırlayabilir
- Entegrasyon DNS yapılandırmasını yönetmez; alan adlarınızı sunucunuzun IP adresine yönlendirmeniz gerekir

## Sorun Giderme

### API Bağlantı Sorunları
- cPanel kullanıcı adınızın ve şifrenizin doğru olduğunu kontrol edin
- cPanel sunucu adresinizin doğru ve erişilebilir olduğunu kontrol edin
- cPanel hesabınızın gerekli izinlere sahip olduğundan emin olun
- Sunucu adresi için tam URL kullanmayı deneyin (örn. `https://cpanel.yourdomain.com`)

### Alan Adı Eklenmiyor
- Hata mesajları için Ultimate Multisite günlüklerini kontrol edin
- Alan adının zaten cPanel'e eklenmediğini doğrulayın
- cPanel hesabınızın ek alan adı veya alt alan adı limitine ulaşmadığından emin olun

### SSL Sertifikası Sorunları
- Entegrasyon SSL sertifikası oluşturmayı yönetmez
- Alan adlarınız için SSL sertifikası almak üzere cPanel'in SSL/TLS araçlarını veya AutoSSL özelliğini kullanmanız gerekir
- Alternatif olarak, cPanel'in AutoSSL özelliği ile Let's Encrypt gibi bir hizmet kullanabilirsiniz
