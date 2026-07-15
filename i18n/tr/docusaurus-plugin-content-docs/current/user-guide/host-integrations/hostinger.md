---
title: Hostinger (hPanel) Entegrasyonu
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Entegrasyonu

## Genel Bakış {#overview}

Hostinger, hPanel adında modern bir kontrol paneline sahip popüler bir web barındırma sağlayıcısıdır. Ultimate Multisite Hostinger entegrasyonu, Ultimate Multisite ile Hostinger'ın hPanel'i arasında alan adlarının otomatik senkronizasyonunu sağlayarak, alan adı eşleştirmelerini ve alt alan adlarını doğrudan WordPress yöneticinizden yönetmenize olanak tanır.

## Özellikler {#features}

- hPanel'de otomatik ek alan adı oluşturma
- hPanel'de otomatik alt alan adı oluşturma (alt alan adı multisite kurulumları için)
- Eşleştirmeler silindiğinde alan adının kaldırılması
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
2. **Hesap Ayarları** → **API Token'ları** yolunu izleyin.
3. **Yeni Token Oluştur**'a tıklayın.
4. Token'ınıza açıklayıcı bir isim verin (örneğin, "Ultimate Multisite").
5. Gerekli izinleri seçin:
   - Alan adı yönetimi
   - Alt alan adı yönetimi
6. Oluşturulan token'ı kopyalayın ve güvenli bir yerde saklayın.

### 2. Hesap Kimliğinizi Bulun {#2-find-your-account-id}

1. hPanel'de **Hesap Ayarları** → **Hesap Bilgileri** bölümüne gidin.
2. Hesap Kimliğiniz bu sayfada görüntülenir.
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

1. WordPress yöneticinizde **Ultimate Multisite > Ayarlar** yolunu izleyin.
2. **Alan Adı Eşleştirme** sekmesine gidin.
3. **Host Entegrasyonları** bölümüne kadar aşağı kaydırın.
4. **Hostinger (hPanel)** entegrasyonunu etkinleştirin.
5. **Değişiklikleri Kaydet**'e tıklayın.

## Nasıl Çalışır {#how-it-works}

### Ek Alan Adları (Addon Domains) {#addon-domains}

Ultimate Multisite'ta bir alan adı eşleştirdiğinizde:

1. Entegrasyon, alan adı eklemek için Hostinger'ın API'sine bir istek gönderir.
2. Alan adı, kök dizininize işaret edecek şekilde yapılandırılır.
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon ek alan adını hPanel'den otomatik olarak kaldırır.

### Alt Alan Adları (Subdomains) {#subdomains}

Alt alan adı multisite kurulumları için, yeni bir site oluşturulduğunda:

1. Entegrasyon, tam alan adından alt alan adı kısmını çıkarır.
2. Alt alan adı eklemek için Hostinger'ın API'sine bir istek gönderir.
3. Alt alan adı, kök dizininize işaret edecek şekilde yapılandırılır.

## Önemli Notlar {#important-notes}

- Entegrasyon, hesabınızla iletişim kurmak için Hostinger'ın REST API'sini kullanır.
- API token'ınızın alan adı ve alt alan adı yönetimi için gerekli izinlere sahip olması gerekir.
- Entegrasyon DNS yapılandırmasını yapmaz; alan adları zaten Hostinger hesabınıza yönlendirilmiş olmalıdır.
- API istekleri HTTPS üzerinden güvenli bir şekilde yapılır.
- API token'ınızı güvende tutun ve asla kamuya açık paylaşmayın.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}

- API token'ınızın doğru olduğundan ve süresinin dolmadığından emin olun.
- Hesap Kimliğinizin doğru olduğundan emin olun.
- API token'ınızın alan adı yönetimi için gerekli izinlere sahip olduğundan emin olun.
- Hostinger hesabınızın aktif ve iyi durumda olduğundan emin olun.

### Alan Adı Eklenmedi {#domain-not-added}

- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin.
- Alan adının zaten Hostinger hesabınıza eklenmediğinden emin olun.
- Hostinger hesabınızın ek alan adı limiti aşmadığından emin olun.
- Alan adının Hostinger isim sunucularına düzgün bir şekilde yönlendirildiğini doğrulayın.

### SSL Sertifikası Sorunları {#ssl-certificate-issues}

- Entegrasyon SSL sertifikası düzenlemesini yapmaz.
- Hostinger genellikle AutoSSL aracılığıyla ücretsiz SSL sertifikaları sağlar.
- SSL sertifikalarını doğrudan hPanel'de **SSL/TLS** altında yönetebilirsiniz.
- Alternatif olarak, Let's Encrypt'i Hostinger'ın AutoSSL özelliği ile kullanın.

## Destek {#support}

Hostinger entegrasyonu ile ilgili ek yardımlar için lütfen şunlara bakın:

- [Hostinger API Dokümantasyonu](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Dokümantasyonu](/)
- [Ultimate Multisite Desteği](https://ultimatemultisite.com/support)
