---
title: cPanel Integration
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Entegrasyonu {#cpanel-integration}

## Genel Bakış {#overview}
cPanel, birçok paylaşımlı ve özel barındırma sağlayıcısı tarafından kullanılan en popüler web barındırma kontrol panellerinden biridir. Bu entegrasyon, Ultimate Multisite ile cPanel arasında otomatik alan adı senkronizasyonu sağlayarak, alan adı takma adlarını (domain aliases) ve alt alan adlarını (subdomains) cPanel hesabınıza otomatik olarak eklemenize olanak tanır.

## Özellikler {#features}
- cPanel'de otomatik takma alan adı (addon domain) oluşturma
- cPanel'de otomatik alt alan adı oluşturma (alt alan adı multisite kurulumları için)
- Eşlemeler silindiğinde alan adı kaldırma

## Gereksinimler {#requirements}
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekir:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

İsteğe bağlı olarak, şunları da tanımlayabilirsiniz:

```php
define('WU_CPANEL_PORT', 2083); // Varsayılan 2083'tür
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Varsayılan /public_html'dir
```

## Kurulum Talimatları {#setup-instructions}

### 1. cPanel Kimlik Bilgilerinizi Alın {#1-get-your-cpanel-credentials}

1. cPanel kullanıcı adınızı ve şifrenizi barındırma sağlayıcınızdan edinin.
2. cPanel ana bilgisayarınızı (genellikle `cpanel.alanadiniz.com` veya `alanadiniz.com:2083`) belirleyin.

### 2. wp-config.php'ye Sabitler Ekleyin {#2-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

İsteğe bağlı olarak, portu ve kök dizini özelleştirebilirsiniz:

```php
define('WU_CPANEL_PORT', 2083); // cPanel farklı bir port kullanıyorsa değiştirin
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Belge kök dizininiz farklıysa değiştirin
```

### 3. Entegrasyonu Etkinleştirin {#3-enable-the-integration}

1. WordPress yöneticinizde, Ultimate Multisite > Ayarlar'a gidin.
2. "Alan Adı Eşleme" sekmesine gidin.
3. "Host Entegrasyonları" bölümüne kadar aşağı kaydırın.
4. cPanel entegrasyonunu etkinleştirin.
5. "Değişiklikleri Kaydet" düğmesine tıklayın.

## Nasıl Çalışır {#how-it-works}

### Takma Alan Adları (Addon Domains) {#addon-domains}

Bir alan adı Ultimate Multisite'de eşlendiğinde:

1. Entegrasyon, alan adı olarak eklemek için cPanel'in API'sine bir istek gönderir.
2. Alan adı, kök dizininize işaret edecek şekilde yapılandırılır.
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon takma alan adını cPanel'den kaldırır.

### Alt Alan Adları (Subdomains) {#subdomains}

Alt alan adı multisite kurulumları için, yeni bir site oluşturulduğunda:

1. Entegrasyon, tam alan adından alt alan adı kısmını çıkarır.
2. Alt alan adı eklemek için cPanel'in API'sine bir istek gönderir.
3. Alt alan adı, kök dizininize işaret edecek şekilde yapılandırılır.

## Önemli Notlar {#important-notes}

- Entegrasyon, cPanel hesabınızla iletişim kurmak için cPanel'in API2'sini kullanır.
- cPanel hesabınızın takma alan adları ve alt alan adları ekleme izinlerine sahip olması gerekir.
- Bazı barındırma sağlayıcıları oluşturabileceğiniz takma alan adı veya alt alan adı sayısını sınırlayabilir.
- Entegrasyon DNS yapılandırmasını yapmaz; alan adlarınızı hala sunucunuzun IP adresine yönlendirmeniz gerekir.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- cPanel kullanıcı adınızın ve şifrenizin doğru olduğundan emin olun.
- cPanel ana bilgisayarınızın doğru ve erişilebilir olduğundan emin olun.
- cPanel hesabınızın gerekli izinlere sahip olduğundan emin olun.
- Ana bilgisayar için tam URL kullanmayı deneyin (örneğin, `https://cpanel.alanadiniz.com`).

### Alan Adı Eklenmedi {#domain-not-added}
- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin.
- Alan adının zaten cPanel'e eklenmediğinden emin olun.
- cPanel hesabınızın takma alan adları veya alt alan adları için limitine ulaşmadığından emin olun.

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- Entegrasyon SSL sertifikası düzenlemesini yapmaz.
- Alan adlarınız için SSL sertifikası düzenlemek amacıyla cPanel'in SSL/TLS araçlarını veya AutoSSL özelliğini kullanmanız gerekir.
- Alternatif olarak, cPanel'in AutoSSL'si ile Let's Encrypt gibi bir hizmet kullanabilirsiniz.
