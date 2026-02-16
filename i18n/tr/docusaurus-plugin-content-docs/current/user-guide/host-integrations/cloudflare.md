---
title: Cloudflare Entegrasyonu
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare Entegrasyonu

## Genel Bakış
Cloudflare, web sitelerini korumaya ve hızlandırmaya yardımcı olan önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, özellikle alt alan adı (subdomain) tabanlı multisite kurulumları için Ultimate Multisite ve Cloudflare arasında otomatik alan adı yönetimini sağlar.

## Özellikler
- Cloudflare'da otomatik alt alan adı oluşturma
- Proxy üzerinden alt alan adı desteği
- DNS kaydı yönetimi
- Ultimate Multisite yönetim panelinde gelişmiş DNS kaydı görüntüleme

## Gereksinimler
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekmektedir:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Kurulum Talimatları

### 1. Cloudflare API Anahtarınızı Alın

1. Cloudflare dashboard'unuza giriş yapın
2. "My Profile" bölümüne gidin (sağ üst köşedeki e-posta adresinize tıklayın)
3. Menüden "API Tokens" seçeneğini seçin
4. Aşağıdaki izinlere sahip yeni bir API token oluşturun:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. API token'ınızı kopyalayın

### 2. Zone ID'nizi Alın

1. Cloudflare dashboard'unuzda kullanmak istediğiniz alan adını seçin
2. Zone ID, "Overview" sekmesinde, sağ kenar çubuğundaki "API" bölümünün altında görünür
3. Zone ID'yi kopyalayın

### 3. Sabitleri wp-config.php Dosyasına Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kaydırın
4. Cloudflare entegrasyonunu etkinleştirin
5. "Save Changes" düğmesine tıklayın

## Nasıl Çalışır

### Alt Alan Adı Yönetimi

Alt alan adı tabanlı bir multisite kurulumunda yeni bir site oluşturulduğunda:

1. Entegrasyon, alt alan adı için bir CNAME kaydı eklemek üzere Cloudflare'ın API'sine bir istek gönderir
2. Alt alan adı, varsayılan olarak Cloudflare üzerinden proxy edilecek şekilde yapılandırılır (bu, filtreler ile değiştirilebilir)
3. Bir site silindiğinde, entegrasyon alt alan adını Cloudflare'dan kaldırır

### DNS Kaydı Görüntüleme

Entegrasyon, Ultimate Multisite yönetim panelindeki DNS kaydı görüntülemesini şu şekilde geliştirir:

1. DNS kayıtlarını doğrudan Cloudflare'dan çeker
2. Kayıtların proxy edilip edilmediğini gösterir
3. DNS kayıtları hakkında ek bilgiler sunar

## Önemli Notlar

Cloudflare'ın son güncellemelerine göre, joker karakter (wildcard) proxy özelliği artık tüm müşteriler için kullanılabilir. Bu, Cloudflare'da basitçe bir wildcard DNS kaydı oluşturabileceğiniz anlamına gelir ve Cloudflare entegrasyonunun alt alan adı tabanlı multisite kurulumları için eskisi kadar kritik olmadığını gösterir.

## Sorun Giderme

### API Bağlantı Sorunları
- API token'ınızın doğru olduğunu ve gerekli izinlere sahip olduğunu doğrulayın
- Zone ID'nizin doğru olduğundan emin olun
- Cloudflare hesabınızın gerekli izinlere sahip olduğundan emin olun

### Alt Alan Adı Eklenmiyor
- Herhangi bir hata mesajı için Ultimate Multisite loglarını kontrol edin
- Alt alan adının zaten Cloudflare'a eklenmemiş olduğunu doğrulayın
- Cloudflare planınızın oluşturduğunuz DNS kaydı sayısını desteklediğinden emin olun

### Proxy Sorunları
- Alt alan adlarının proxy edilmesini istemiyorsanız, `wu_cloudflare_should_proxy` filtresini kullanabilirsiniz
- Bazı özellikler proxy edildiğinde düzgün çalışmayabilir (örneğin, belirli WordPress yönetici işlevleri)
- Yönetici sayfaları için önbelleği atlamak amacıyla Cloudflare'ın Page Rules özelliğini kullanmayı düşünün
