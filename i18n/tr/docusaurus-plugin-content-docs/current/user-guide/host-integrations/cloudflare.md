---
title: Cloudflare Entegrasyonu
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Entegrasyonu

## Genel Bakış
Cloudflare, web sitelerini korumaya ve hızlandırmaya yardımcı olan önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, Ultimate Multisite ile Cloudflare arasında, özellikle alt alan adı multisite kurulumları için otomatik alan adı yönetimini etkinleştirir.

## Özellikler
- Cloudflare içinde otomatik alt alan adı oluşturma
- Proxy'lenen alt alan adı desteği
- DNS kaydı yönetimi
- Ultimate Multisite yönetici panelinde geliştirilmiş DNS kaydı gösterimi

## Gereksinimler
Aşağıdaki sabitler `wp-config.php` dosyanızda tanımlanmış olmalıdır:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Kurulum Talimatları

### 1. Cloudflare API Anahtarınızı Alın

1. Cloudflare dashboard'unuza giriş yapın
2. "My Profile" bölümüne gidin (sağ üst köşedeki e-postanıza tıklayın)
3. Menüden "API Tokens" öğesini seçin
4. Aşağıdaki izinlerle yeni bir API token oluşturun:
   - Zone.Zone: Okuma
   - Zone.DNS: Düzenleme
5. API token'ınızı kopyalayın

### 2. Zone ID'nizi Alın

1. Cloudflare dashboard'unuzda kullanmak istediğiniz alan adını seçin
2. Zone ID, "Overview" sekmesinde, sağ kenar çubuğunda "API" altında görünür
3. Zone ID'yi kopyalayın

### 3. Sabitleri wp-config.php'ye Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kadar aşağı kaydırın
4. Cloudflare entegrasyonunu etkinleştirin
5. "Save Changes" düğmesine tıklayın

## Nasıl Çalışır

### Alt Alan Adı Yönetimi

Alt alan adı multisite kurulumunda yeni bir site oluşturulduğunda:

1. Entegrasyon, alt alan adı için bir CNAME kaydı eklemek üzere Cloudflare'ın API'sine bir istek gönderir
2. Alt alan adı varsayılan olarak Cloudflare üzerinden proxy'lenecek şekilde yapılandırılır (bu, filtrelerle değiştirilebilir)
3. Bir site silindiğinde, entegrasyon alt alan adını Cloudflare'dan kaldırır

### DNS Kaydı Gösterimi

Entegrasyon, Ultimate Multisite yönetici panelindeki DNS kaydı gösterimini şu şekilde geliştirir:

1. DNS kayıtlarını doğrudan Cloudflare'dan alır
2. Kayıtların proxy'lenip proxy'lenmediğini gösterir
3. DNS kayıtları hakkında ek bilgiler gösterir

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (daha önce "Cloudflare for SaaS" olarak adlandırılıyordu), müşterilerinizin multisite ağınızda kendi alan adlarını SSL ile kullanmasına olanak tanıyan bir Cloudflare özelliğidir. Cloudflare kullanan domain mapping yapılmış multisite kurulumları için önerilen yaklaşımdır, çünkü Cloudflare her özel alan adı için SSL sertifikası verilmesini ve yenilenmesini otomatik olarak yönetir.

### Standart Cloudflare entegrasyonundan farkı

| | Standart entegrasyon | Cloudflare Custom Hostnames |
|---|---|---|
| **Amaç** | Alt alan adları için DNS kayıtlarını otomatik oluşturur | Cloudflare tarafından yönetilen SSL ile özel (eşlenen) alan adlarını etkinleştirir |
| **En uygun kullanım** | Alt alan adı multisite | Domain mapping yapılmış multisite |
| **SSL** | Ayrı olarak ele alınır | Cloudflare tarafından otomatik olarak yönetilir |

### Cloudflare Custom Hostnames kurulumu

1. Cloudflare dashboard'unuzda ana alan adınızın zone'unu açın.
2. **SSL/TLS > Custom Hostnames** bölümüne gidin.
3. Sunucunuzun IP adresine veya hostname'ine işaret eden bir fallback origin ekleyin.
4. Ultimate Multisite içinde eşlenen her müşteri alan adı için Cloudflare'da bir Custom Hostname girişi ekleyin. Bu adımı Cloudflare API'sini kullanarak otomatikleştirebilirsiniz.
5. Müşterinin DNS'i ağınıza yönlendirildikten sonra Cloudflare, her özel hostname için TLS sertifikalarını otomatik olarak verir ve yeniler.

Tam API başvurusu için [Cloudflare Custom Hostnames dokümantasyonuna](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) bakın.

:::note Terminoloji güncellemesi
Ultimate Multisite v2.6.1 itibarıyla bu özellik, tüm plugin ayarlarında ve etiketlerinde **Cloudflare Custom Hostnames** olarak adlandırılır. Önceki sürümler, altta yatan Cloudflare ürün adı olan "Cloudflare for SaaS" adını kullanıyordu.
:::

## Önemli Notlar

Cloudflare'ın son güncellemeleri itibarıyla wildcard proxy'leme artık tüm müşteriler için kullanılabilir. Bu, Cloudflare'da basitçe bir wildcard DNS kaydı ayarlayabileceğiniz için standart Cloudflare DNS entegrasyonunun alt alan adı multisite kurulumları açısından eskisi kadar kritik olmadığı anlamına gelir.

## Sorun Giderme

### API Bağlantı Sorunları
- API token'ınızın doğru olduğunu ve gerekli izinlere sahip olduğunu doğrulayın
- Zone ID'nizin doğru olduğunu kontrol edin
- Cloudflare account'unuzun gerekli izinlere sahip olduğundan emin olun

### Alt Alan Adı Eklenmedi
- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin
- Alt alan adının Cloudflare'a zaten eklenmemiş olduğunu doğrulayın
- Cloudflare planınızın oluşturduğunuz DNS kayıtlarının sayısını desteklediğinden emin olun

### Proxy'leme Sorunları
- Alt alan adlarının proxy'lenmesini istemiyorsanız `wu_cloudflare_should_proxy` filtresini kullanabilirsiniz
- Bazı özellikler proxy'lendiğinde düzgün çalışmayabilir (örn. belirli WordPress yönetici işlevleri)
- Yönetici sayfaları için cache'i atlamak üzere Cloudflare'ın Page Rules özelliğini kullanmayı düşünün
