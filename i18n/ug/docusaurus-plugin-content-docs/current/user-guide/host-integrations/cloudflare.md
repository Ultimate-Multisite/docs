---
title: Cloudflare bilan integratsiya
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Entegrasyonu

## Genel Bakış
Cloudflare, web sitelerini korumaya ve hızlandırmaya yardımcı olan önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, Ultimate Multisite ile Cloudflare arasında otomatik alan adı yönetimi sağlar, özellikle alt alan adı çoklu site kurulumları için.

## Özellikler
- Cloudflare'da otomatik alt alan adı oluşturma
- Proxy edilmiş alt alan adı desteği
- DNS kaydı yönetimi
- Ultimate Multisite yönetim panelinde gelişmiş DNS kaydı gösterimi

## Gereksinimler
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Kurulum Talimatları

### 1. Cloudflare API Anahtarınızı Alın

1. Cloudflare kontrol panelinize giriş yapın
2. "My Profile" (sağ üst köşedeki e-posta adresinize tıklayın) bölümüne gidin
3. Menüden "API Tokens"ı seçin
4. Aşağıdaki izinlerle yeni bir API token oluşturun:
   - Zone.Zone: Okuma (Read)
   - Zone.DNS: Düzenleme (Edit)
5. API token'ınızı kopyalayın

### 2. Alan Adı Kimliğinizi (Zone ID) Alın

1. Cloudflare kontrol panelinizde kullanmak istediğiniz alanı seçin
2. Zone ID, "Overview" sekmesinde, "API" başlığının altında sağ kenar çubuğunda görünür
3. Zone ID'yi kopyalayın

### 3. wp-config.php'ye Sabitleri Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress yönetim panelinizde Ultimate Multisite > Settings (Ayarlar) bölümüne gidin
2. "Domain Mapping" (Alan Adı Eşleştirmesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Ana Sunucu Entegrasyonları) kısmına gelin
4. Cloudflare entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır

### Alt Alan Adı Yönetimi

Bir alt alan adı çoklu site kurulumunda yeni bir site oluşturulduğunda:

۱. این ادغام یک درخواست به APIِ Cloudflare می‌فرستد تا یک رکورد CNAME برای زیردامنه اضافه کند.
۲. زیردامنه به صورت پیش‌فرض برای عبور از طریق Cloudflare پیکربندی شده است (این مورد با فیلترها قابل تغییر است).
۳. وقتی یک سایت حذف می‌شود، این ادغام آن زیردامنه را از Cloudflare پاک می‌کند.

### نمایش رکورد DNS

این ادغام در پنل مدیریت Ultimate Multisite، نمایش رکورد DNS را بهبود می‌بخشد به این صورت:

۱. دریافت مستقیم رکورد‌های DNS از Cloudflare
۲. نمایش اینکه آیا رکوردها پروکسی شده‌اند یا خیر
۳. نمایش اطلاعات اضافی درباره رکورد‌های DNS

## نام‌های میزبان سفارشی Cloudflare (Cloudflare Custom Hostnames)

**نام‌های میزبان سفارشی Cloudflare** (که قبلاً "Cloudflare for SaaS" نامیده می‌شد)، یک قابلیت در Cloudflare است که به مشتریان شما اجازه می‌دهد با استفاده از دامنه‌های خود و SSL روی شبکه چندسایتی شما کار کنند. این رویکرد برای نصب‌های چندسایتی متصل به دامنه که از Cloudflare استفاده می‌کنند، توصیه می‌شود، زیرا Cloudflare خودش صدور و تمدید گواهی SSL را برای هر دامنه سفارشی به صورت خودکار مدیریت می‌کند.

### تفاوت با ادغام استاندارد Cloudflare چگونه است؟

| | ادغام استاندارد (Standard integration) | نام‌های میزبان سفارشی Cloudflare (Cloudflare Custom Hostnames) |
|---|---|---|
| **هدف** | ایجاد خودکار رکورد DNS برای زیردامنه‌ها | فعال کردن دامنه‌های سفارشی (مستقل/مپ شده) با SSL مدیریت شده توسط Cloudflare |
| **بهترین کاربرد** | چندسایتی مبتنی بر زیردامنه | چندسایتی متصل به دامنه (Domain-mapped multisite) |
| **SSL** | جداگانه مدیریت می‌شود | به صورت خودکار توسط Cloudflare مدیریت می‌شود |

### راه‌اندازی نام‌های میزبان سفارشی Cloudflare

۱. Cloudflare داشبوردınızda ana alan adınızın zone'unu açın.
۲. **SSL/TLS > Custom Hostnames** (Özel Ana Bilgisayar Adları) bölümüne gidin.
۳. Sunucunuzun IP adresine veya alan adına işaret eden bir yedek kaynak (fallback origin) ekleyin.
۴. Ultimate Multisite'ta eşlediğiniz her müşteri alanı için Cloudflare'da bir Custom Hostname girişi ekleyin. Bu adımı Cloudflare API'sini kullanarak otomatikleştirebilirsiniz.
۵. Müşterinin DNS'i ağınıza yönlendirildiğinde, Cloudflare otomatik olarak her özel ana bilgisayar adı (custom hostname) için TLS sertifikası düzenler ve yeniler.

Tam API referansı için [Cloudflare Custom Hostnames dokümantasyonuna](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) bakın.

:::note Terim Güncellemesi
Ultimate Multisite v2.6.1 sürümünden itibaren, bu özellik tüm eklenti ayarlarında ve etiketlerde **Cloudflare Custom Hostnames** olarak adlandırılmaktadır. Daha önceki sürümlerde ise altta yatan Cloudflare ürün adı olan "Cloudflare for SaaS" kullanılıyordu.
:::

## Önemli Notlar

Cloudflare'in son güncellemeleriyle birlikte, joker karakter (wildcard) proxying artık tüm müşteriler için mevcuttur. Bu, standart Cloudflare DNS entegrasyonunun eskisi kadar kritik olmadığı anlamına gelir; çünkü Cloudflare'da basit bir joker karakter DNS kaydı kurabilirsiniz.

## Sorun Giderme

### API Bağlantı Sorunları
- API token'ınızın doğru olduğundan ve gerekli izinlere sahip olduğundan emin olun.
- Zone ID'nizin doğru olup olmadığını kontrol edin.
- Cloudflare hesabınızın gerekli izinlere sahip olduğundan emin olun.

### Alt Alan Adı Eklenmedi
- Ultimate Multisite loglarını herhangi bir hata mesajı için kontrol edin.
- Alt alan adının zaten Cloudflare'a eklenip eklenmediğini doğrulayın.
- Oluşturduğunuz DNS kaydı sayısını Cloudflare planınızın desteklediğinden emin olun.

### Proxying Sorunları

- Eğer alt alan adlarının proxy edilmesini istemiyorsanız, `wu_cloudflare_should_proxy` filterini kullanabilirsiniz.
- Bazı özellikler proxy edildiğinde doğru çalışmayabilir (örneğin, belirli WordPress yönetim işlevleri).
- Yönetim sayfaları için önbelleği atlamak amacıyla Cloudflare'in Page Rules özelliğini kullanmayı düşünebilirsiniz.
