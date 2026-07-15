---
title: Облак интеграциясы
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Entegrasyonu

## Genel Bakış {#overview}
Cloudflare, web sitelerini korumaya ve hızlandırmaya yardımcı olan önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, Ultimate Multisite ile Cloudflare arasında otomatik alan adı yönetimi sağlar, özellikle alt alan adı çoklu site kurulumları için.

## Özellikler {#features}
- Cloudflare'da otomatik alt alan adı oluşturma
- Proxy edilmiş alt alan adı desteği
- DNS kaydı yönetimi
- Ultimate Multisite yönetim panelinde gelişmiş DNS kaydı görüntüleme

## Gereksinimler {#requirements}
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_CLOUDFLARE_API_KEY', 'sizin_api_anahtarınız');
define('WU_CLOUDFLARE_ZONE_ID', 'sizin_zone_idiniz');
```

## Kurulum Talimatları {#setup-instructions}

### 1. Cloudflare API Anahtarınızı Alın {#1-get-your-cloudflare-api-key}

1. Cloudflare kontrol panelinize giriş yapın
2. "Profilim"e (sağ üst köşedeki e-posta adresinize tıklayın) gidin
3. Menüden "API Token'lar"ı seçin
4. Aşağıdaki izinlerle yeni bir API token oluşturun:
   - Zone.Zone: Okuma (Read)
   - Zone.DNS: Düzenleme (Edit)
5. API tokenınızı kopyalayın

### 2. Alan Adı Kimliğinizi (Zone ID) Alın {#2-get-your-zone-id}

1. Cloudflare kontrol panelinizde kullanmak istediğiniz alanı seçin
2. Zone ID, "Genel Bakış" sekmesinde, "API" başlığının altında sağ kenar çubuğunda görünür
3. Zone ID'yi kopyalayın

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'sizin_api_tokeniniz');
define('WU_CLOUDFLARE_ZONE_ID', 'sizin_zone_idiniz');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress yönetim panelinde Ultimate Multisite > Ayarlar'a gidin
2. "Alan Adı Eşleştirmesi" (Domain Mapping) sekmesine gidin
3. Aşağı kaydırarak "Ana Sunucu Entegrasyonları" (Host Integrations) bölümüne gelin
4. Cloudflare entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet" (Save Changes) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alt Alan Adı Yönetimi {#subdomain-management}

Bir alt alan adı çoklu site kurulumunda yeni bir site oluşturulduğunda:

1. Интеграция Cloudflare API-галыкка поддомен өчен CNAME записын күтәрә.
2. Поддомен умолчанию Cloudflare аркылы проксиләнә (булырга фильтрлар белән өзгөртә аласыз).
3. Сайт өчрәлгәндә, интеграция поддоменне Cloudflare-дан алып тарта.

### DNS Заjegyzы Вирәлеме {#dns-record-display}

Интеграция Ultimate Multisite административ панеледагы DNS запиjegyzы вирәлемене төпләштер:

1. DNS запиjegyzы диртә Cloudflare-дан күтәрә
2. Заjegyzы проксиләнәми проксиләнәми дигән мәгълүматны күрсәтә
3. DNS запиjegyzы турында яки тәшаеләмәс мәгълүматны күрсәтә

## Cloudflare Кастомлы Исемләр (Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (урыштыручы "Cloudflare for SaaS" дигән атама белән) — бу Cloudflare функциясы. Бу сизның миллекле сетеңдә SSL белән öz доменне истәргә яза алачак. Cloudflare-дан форементләрдән чыгылган SSL сертификатыны автомат өчен күтәрү һәм җүзеп чыгаруны Cloudflare автомат өчен башкара ди. Бу Cloudflare-дан исәпкә килгән миллекле сайтлар (domain-mapped multisite) өчен төпләр, чөнки Cloudflare әйтергә мөмкин булган сертификатны автомат өчен күтәрә һәм җүзеп чыгара.

### Стандарт Cloudflare интеграциясе белән ничек аралаша? {#how-it-differs-from-the-standard-cloudflare-integration}

| | Стандарт интеграция | Cloudflare Custom Hostnames |
|---|---|---|
| **Максат** | Поддоменлар өчен DNS запиjegyzы автомат өчен ясау | Cloudflare-дан башкарыла торган SSL белән кастом (исемләнгән) доменларны истәргә мөмкинлек |
| **Хайратлы** | Поддоменлар өчен multisite | Доменгә исемләнгән multisite |
| **SSL** | Аракларда башкарыла | Cloudflare автомат өчен ясыйды һәм җүзеп чыгара |

### Cloudflare Custom Hostnames-ны куллану {#setting-up-cloudflare-custom-hostnames}

(Төп мәгълүмат)

1. Cloudflare панелинде (dashboard) ana domeniniz için alanı açın.
2. **SSL/TLS > Özel Host Adları** bölümüne gidin.
3. Sunucunuzun IP adresine veya alan adına işaret eden bir yedek kaynak (fallback origin) ekleyin.
4. Ultimate Multisite'ta eşlediğiniz her müşteri domaini için Cloudflare'de Özel Host Adı girişi ekleyin. Bu adımı Cloudflare API'sini kullanarak otomatikleştirebilirsiniz.
5. Müşterinin DNS'i ağınıza yönlendirildiğinde, Cloudflare otomatik olarak her özel host adı için TLS sertifikası düzenler ve yeniler.

Tam API referansı için [Cloudflare Özel Host Adları dokümantasyonuna](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) bakın.

:::note Terim güncellemesi
Ultimate Multisite v2.6.1 sürümünden itibaren bu özellik, tüm eklenti ayarlarında ve etiketlerde **Cloudflare Özel Host Adları** olarak adlandırılmaktadır. Daha önceki sürümlerde ise altyapı ürünü olan "Cloudflare for SaaS" adı kullanılıyordu.
:::

## Önemli Notlar {#important-notes}

Cloudflare'in son güncellemeleriyle birlikte, tüm müşteriler için joker karakter (wildcard) proxy'leme artık mevcut. Bu, standart Cloudflare DNS entegrasyonunun alt alan adı çoklu kurulumları için eskisi kadar kritik olmadığı anlamına gelir; çünkü Cloudflare'de basit bir joker karakter DNS kaydı ayarlayabilirsiniz.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- API token'ınızın doğru olduğundan ve gerekli izinlere sahip olduğundan emin olun.
- Zone ID'nizin doğru olup olmadığını kontrol edin.
- Cloudflare hesabınızın gerekli izinlere sahip olduğundan emin olun.

### Alt Alan Adı Eklenmedi {#subdomain-not-added}
- Ultimate Multisite günlüklerini (logs) herhangi bir hata mesajı için kontrol edin.
- Alt alan adının zaten Cloudflare'e eklenip eklenmediğini doğrulayın.
- Oluşturduğunuz DNS kaydı sayısını destekleyen Cloudflare planınızın olduğundan emin olun.

### Проксиу проблемылар {#proxying-issues}

- Если вы не хотите, чтобы поддомены проксировались, вы можете использовать фильтр `wu_cloudflare_should_proxy`.
- Некоторые функции могут работать некорректно при проксировании (например, некоторые функции админки WordPress).
- Рассмотрите возможность использования Page Rules Cloudflare для обхода кэша административных страниц.
