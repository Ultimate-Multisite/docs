---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integration {#hostinger-hpanel-integration}

## Genel Bakış {#overview}

Hostinger, hPanel adında modern bir kontrol paneline sahip popüler bir web barındırma sağlayıcısıdır. Ultimate Multisite Hostinger entegrasyonu, Ultimate Multisite ile Hostinger'ın hPanel'i arasında otomatik alan adı senkronizasyonu sağlar. Bu sayede alan adı eşleştirmelerini ve alt alan adlarını doğrudan WordPress admin panelinizden yönetebilirsiniz.

## Özellikler {#features}

- hPanel'de otomatik addon domain oluşturma
- hPanel'de otomatik alt alan adı oluşturma (alt alan adı multisite kurulumları için)
- Eşleştirmeler silindiğinde alan adı kaldırma
- hPanel'in alan adı yönetim API'si ile sorunsuz entegrasyon

## Gereksinimler {#requirements}

Hostinger entegrasyonunu kullanmak için şunlara ihtiyacınız var:

1. hPanel erişimine sahip bir Hostinger hesabı
2. Hostinger'dan alınmış bir API token'ı
3. `wp-config.php` dosyanızda tanımlanması gereken aşağıdaki sabitler:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

İsteğe bağlı olarak, şunları da tanımlayabilirsiniz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Varsayılan API uç noktası
```

## Kurulum Talimatları {#setup-instructions}

### 1. Hostinger API Token'ınızı Oluşturun {#1-generate-your-hostinger-api-token}

1. Hostinger hesabınıza giriş yapın ve hPanel'e erişin.
2. **Account Settings** → **API Tokens** yolunu izleyin.
3. **Create New Token**'a tıklayın.
4. Token'ınıza açıklayıcı bir isim verin (örneğin, "Ultimate Multisite").
5. Gerekli izinleri seçin:
   - Domain management (Alan adı yönetimi)
   - Subdomain management (Alt alan adı yönetimi)
6. Oluşturulan token'ı kopyalayın ve güvenli bir yerde saklayın.

### 2. Hesap Kimliğinizi (Account ID) Bulun {#2-find-your-account-id}

1. hPanel'de **Account Settings** → **Account Information** bölümüne gidin.
2. Hesap Kimliğiniz bu sayfada gösterilir.
3. Bu kimliği kopyalayın ve bir sonraki adım için kaydedin.

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Hostinger hesabınız farklı bir API uç noktası kullanıyorsa, bunu özelleştirebilirsiniz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress admin panelinizde **Ultimate Multisite > Settings** yolunu izleyin.
2. **Domain Mapping** sekmesine gidin.
3. **Host Integrations** bölümüne kadar aşağı kaydırın.
4. **Hostinger (hPanel)** entegrasyonunu etkinleştirin.
5. **Save Changes**'e tıklayın.

## Nasıl Çalışır {#how-it-works}

### Addon Domain'ler (Ek Alan Adları) {#addon-domains}

Ultimate Multisite'ta bir alan adı eşleştirdiğinizde:

1. Entegrasyon, alan adı'nı bir addon domain olarak eklemek için Hostinger'ın API'sine bir istek gönderir.
2. Alan adı, kök dizininize işaret edecek şekilde yapılandırılır.
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon addon domain'i hPanel'den otomatik olarak kaldırır.

### Subdomain'ler (Alt Alan Adları) {#subdomains}

Alt alan adı multisite kurulumları için, yeni bir site oluşturulduğunda:

1. Entegrasyon, tam alan adından alt alan adı kısmını çıkarır.
2. Alt alan adı eklemek için Hostinger'ın API'sine bir istek gönderir.
3. Alt alan adı, kök dizininize işaret edecek şekilde yapılandırılır.

## Önemli Notlar {#important-notes}

- Entegrasyon, hesabınızla iletişim kurmak için Hostinger'ın REST API'sini kullanır.
- API token'ınızın alan adı ve alt alan adı yönetimi için gerekli izinlere sahip olması gerekir.
- Entegrasyon DNS yapılandırmasını yapmaz; alan adlarının zaten Hostinger hesabınıza yönlendirilmiş olması gerekir.
- API istekleri güvenli bir şekilde HTTPS üzerinden yapılır.
- API token'ınızı güvende tutun ve asla kamuya açık paylaşmayın.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}

- API token'ınızın doğru olduğundan ve süresinin dolmadığından emin olun.
- Hesap Kimliğinizin doğru olduğundan emin olun.
- API token'ınızın alan adı yönetimi için gerekli izinlere sahip olduğundan emin olun.
- Hostinger hesabınızın aktif ve sorunsuz durumda olduğunu doğrulayın.

### Alan Adı Eklenmiyor {#domain-not-added}

- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin.
- Alan adının zaten Hostinger hesabınıza eklenmediğinden emin olun.
- Hostinger hesabınızın addon domain limiti dolmamış olduğundan emin olun.
- Alan adının Hostinger nameserver'larına düzgün bir şekilde yönlendirildiğini onaylayın.

### SSL Sertifikası Sorunları {#ssl-certificate-issues}

- Entegrasyon SSL sertifikası düzenlemesini yapmaz.
- Hostinger genellikle AutoSSL aracılığıyla ücretsiz SSL sertifikaları sağlar.
- SSL sertifikalarını doğrudan hPanel'de **SSL/TLS** altında yönetebilirsiniz.
- Alternatif olarak, Hostinger'ın AutoSSL özelliği ile Let's Encrypt kullanabilirsiniz.

## Destek {#support}

Hostinger entegrasyonu ile ilgili ek yardımlar için lütfen şunlara bakın:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
