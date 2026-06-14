---
title: cPanel Integrasi
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Entegrasi

## Genel Bakış
cPanel, birçoğu paylaşımlı ve özel hosting sağlayıcıları tarafından kullanılan en popüler web barındırma kontrol panellerinden biridir. Bu entegrasyon, Ultimate Multisite ile cPanel arasında otomatik alan adı senkronizasyonu sağlar; bu sayede domain takma adlarını (alias) ve alt alan adlarını (subdomain) cPanel hesabınıza otomatik olarak ekleyebilirsiniz.

## Özellikler
- cPanel'de otomatik eklenti alanı oluşturma
- cPanel'de otomatik alt alan adı oluşturma (alt alan adı multisite kurulumları için)
- Eşleştirmeler silindiğinde alan adının kaldırılması

## Gereksinimler
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_CPANEL_USERNAME', 'sizin_cpanel_kullanici_adiniz');
define('WU_CPANEL_PASSWORD', 'sizin_cpanel_sifreniz');
define('WU_CPANEL_HOST', 'sizin_cpanel_hostunuz');
```

İsteğe bağlı olarak şunları da tanımlayabilirsiniz:

```php
define('WU_CPANEL_PORT', 2083); // Varsayılan değer 2083'tür
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Varsayılan değer /public_html'dir
```

## Kurulum Talimatları

### 1. cPanel Kimlik Bilgilerinizi Alın

1. Hosting sağlayıcınızdan cPanel kullanıcı adınızı ve şifrenizi alın.
2. cPanel ana bilgisayarınızı (genellikle `cpanel.sitenizinadi.com` veya `sitenizinadi.com:2083`) belirleyin.

### 2. wp-config.php'ye Sabitleri Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CPANEL_USERNAME', 'sizin_cpanel_kullanici_adiniz');
define('WU_CPANEL_PASSWORD', 'sizin_cpanel_sifreniz');
define('WU_CPANEL_HOST', 'sizin_cpanel_hostunuz');
```

İsteğe bağlı olarak port ve kök dizinini özelleştirebilirsiniz:

```php
define('WU_CPANEL_PORT', 2083); // Eğer cPanel farklı bir port kullanıyorsa değiştirin
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Doküman kök dizininiz farklıysa değiştirin
```

### 3. Entegrasyonu Etkinleştirin

1. WordPress admininizde, Ultimate Multisite > Settings (Ayarlar) bölümüne gidin.
2. "Domain Mapping" (Alan Eşleme) sekmesine gidin.
3. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) kısmına gelin.
4. cPanel entegrasyonunu etkinleştirin.
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın.

## Nasıl Çalışır?

### Addon Domains (Ek Alan Adları)

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, alanı eklemek için cPanel API'sine bir istek gönderir.
2. Alan adı, kök dizininize işaret edecek şekilde yapılandırılır.
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon bu alanı cPanel'den kaldırır.

### Subdomains (Alt Alan Adları)

Alt alan adı multisite kurulumları için yeni bir site oluşturulduğunda:

1. Entegrasyon, tam alan adından alt alan adı kısmını ayıklar.
2. Alt alanı eklemek için cPanel API'sine bir istek gönderir.
3. Alt alan adı, kök dizininize işaret edecek şekilde yapılandırılır.

## Önemli Notlar

- Bu entegrasyon, cPanel hesabınızla iletişim kurmak için cPanel'in API2'sini kullanır.
- cPanel hesabınızın ek alan adları ve alt alan adları ekleme izinlerine sahip olması gerekir.
- Bazı barındırma sağlayıcıları oluşturabileceğiniz ek alan adı veya alt alan adı sayısını sınırlayabilir.
- Entegrasyon DNS yapılandırmasını yönetmez; alan adlarınızı hala sunucunuzun IP adresine işaret etmeniz gerekir.

## Sorun Giderme

### API Bağlantı Sorunları
- cPanel kullanıcı adınız ve şifrenizin doğru olup olmadığını kontrol edin.
- cPanel ana bilgisayarınızın doğru ve erişilebilir olduğundan emin olun.
- cPanel hesabınızın gerekli izinlere sahip olduğundan emin olun.
- Ana bilgisayar için tam URL'yi kullanmayı deneyin (örneğin, `https://cpanel.yourdomain.com`).

### Alan Adı Eklenmedi
- Herhangi bir hata mesajı olup olmadığını görmek için Ultimate Multisite loglarını kontrol edin.
- Alan adının cPanel'e zaten eklenmediğinden emin olun.
- cPanel hesabınızın ek alan adları veya alt alan adları sınırı dolmamış olduğundan emin olun.

### SSL Sertifikatlary Sorunlary
- Bu integrasi SSL sertifikatı vermeyi işlemez.
- Alan adlarınız için SSL sertifikaları almak amacıyla cPanel'in SSL/TLS araçlarını veya AutoSSL özelliğini kullanmanız gerekecek.
- Alternativ olarak, cPanel'in AutoSSL özelliği ile Let's Encrypt gibi bir hizmeti de kullanabilirsiniz.
