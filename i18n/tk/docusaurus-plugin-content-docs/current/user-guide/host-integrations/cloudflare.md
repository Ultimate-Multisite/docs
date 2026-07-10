---
title: Cloudflare Integrasi
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Entegrasi {#cloudflare-integration}

## Genel Bakış {#overview}
Cloudflare, web sitelerini korumaya ve hızlandırmaya yardımcı olan önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, Ultimate Multisite ile Cloudflare arasında otomatik alan adı yönetimini sağlar, özellikle alt alan adı çoklu site kurulumları için.

## Özellikler {#features}
- Cloudflare'da otomatik alt alan adı oluşturma
- Proxy edilmiş alt alan adı desteği
- DNS kaydı yönetimi
- Ultimate Multisite admin panelinde gelişmiş DNS kaydı gösterimi

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
3. Menüden "API Tokens"u seçin
4. Aşağıdaki izinlerle yeni bir API token oluşturun:
   - Zone.Zone: Okuma (Read)
   - Zone.DNS: Düzenleme (Edit)
5. API tokenınızı kopyalayın

### 2. Alan Adı Kimliğinizi (Zone ID) Alın {#2-get-your-zone-id}

1. Cloudflare kontrol panelinizde, kullanmak istediğiniz alanı seçin
2. Zone ID, "Genel Bakış" sekmesinde, "API" başlığının altında sağ kenar çubuğunda görünür
3. Zone ID'yi kopyalayın

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'sizin_api_tokeniniz');
define('WU_CLOUDFLARE_ZONE_ID', 'sizin_zone_idiniz');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress admin panelinde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" kısmına gelin
4. Cloudflare entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet"e tıklayın

## Nasıl Çalışır {#how-it-works}

### Alt Alan Adı Yönetimi {#subdomain-management}

Bir alt alan adı çoklu site kurulumunda yeni bir site oluşturulduğunda:

1. Integrasi, alt domain üçin CNAME kaydyny eklemek üçin Cloudflare API-siga soňam sora berýär.
2. Alt domain default görkeziji arkaly Cloudflare bilen proxy edilmek üçin dürli görnüşler bilen üýtgedilip bilner (bu filterler bilen üýtgedilip bilner).
3. Site ýok edilende, integrasi alt domaini Cloudflare-den aradan aýyrar.

### DNS Kaydyny Göstermek {#dns-record-display}

Integrasi Ultimate Multisite administrasiýasydaky DNS kaydyny aşakdaky usullar bilen gowuldirýär:

1. DNS kaydyny beýleki Cloudflare-den soňam almagy
2. Kaydylar proxy edilip edilmedigini görkezmek
3. DNS kaydalary barada goşmaça maglumat bermek

## Cloudflare Custom Hostnames (Özelleşdirilen Cloudflare Ady) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (önüni "Cloudflare for SaaS" diýlip atlandyrylan) bu Cloudflare funksiýasydyr. Ol müşderlilerin öz domainlerini SSL bilen size degişli multisite ulanyp bilmelerine mümkinçilik berýär. Bu, Cloudflare-den peýdalanýan domain-map edilen multisite ýerlemeler üçin maslahat berilýän usuldyr, sebäbi Cloudflare her bir özelleşdirilen domain üçin SSL sertifikatyny awtomatiki görkezmek we täzelik bermegi dolandyryp bilýär.

### Standart Cloudflare integrasiýadan nähili tapawutlydyr {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standart integrasiýa | Cloudflare Custom Hostnames (Özelleşdirilen Cloudflare Ady) |
|---|---|---|
| **Maksat** | Alt domainler üçin DNS kaydyny awtomatiki döretmek | Cloudflare-den dolandyrylan SSL bilen özelleşdirilen (map edilen) domainleri işleýärlik |
| **Iki wezipeli** | Alt domain multisite | Domain-map edilen multisite |
| **SSL** | Ayrı-aý dolandyrylýar | Cloudflare tarapyndan awtomatiki dolandyrylýar |

### Cloudflare Custom Hostnames-i goşmak {#setting-up-cloudflare-custom-hostnames}

1. Cloudflare dashboardynda, esasyz domainiňiz üçin zonany açyň.
2. **SSL/TLS > Custom Hostnames** bölümini geçiň.
3. Serveriňiz IP-sin ýa-da hostnamyny aýdyp, yedek (fallback) origin goýuň.
4. Ultimate Multisite-de har bir müşderi domaini üçin Cloudflare-de Custom Hostname girişi goýuň. Bu adymy Cloudflare API-sini ulanmaga mümkinçilik bilen awtomatlaşdyryp bilersiňiz.
5. Müşderiniň DNS-i siziň ulgamanıza ýerleşdirilende, Cloudflare her bir custom hostname üçin TLS sertifikatlaryny awtomatiki görkezýär we şolary täzelendirýär.

Dolganç API referansy üçin [Cloudflare Custom Hostnames dokumentasiýasyny](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) görüň.

:::note Terminologiýa üýtgeşmesi
Ultimate Multisite v2.6.1-den başlap, bu wezipä Ultimate Multisite-iň ähli goşulmalarynda we belgi (label) üçin **Cloudflare Custom Hostnames** diýlip aýdylýar. Öňki versiýalarda "Cloudflare for SaaS" diýlip aýdýan, bu Cloudflare-iň esasyny dörediji maglumatdyr.
:::

## Aýratyn Notlar {#important-notes}

Cloudflare-iň soňky täzelendirmelerinden başlap, ähli müşderiler üçin wildcard proxy (gysgaça ýa-da umumy) mümkinçilik bar. Bu, subdomainler üçin standart Cloudflare DNS integrasiýasyny öňki ýaly möhümdir däl, sebäbi siz Cloudflare-de bir wildcard DNS goşulmasyny sadada goýup bilersiňiz.

## Soraglar bilen çözmek (Troubleshooting) {#troubleshooting}

### API Bağlanma Masalalary {#api-connection-issues}
- API tokeniňizi dogry we zerur resselleri bar bolsa, barlap görüň.
- Zonanyň ID-si dogrydyr, barlap görüň.
- Cloudflare hasabyňyz zerur resselleri bar bolsa, bu meselesini üpjün ediň.

### Subdomain Goýulmadyk {#subdomain-not-added}
- Ultimate Multisite loglarynda hakykatdan ýüze çykýan ähli ýazgylary barlap görüň.
- Subdomain Cloudflare-de önünden goýulmadykdyr, barlap görüň.
- Siz döredýän DNS goşulmasynyň sanyny Cloudflare planiňiz desteklediğinden habarsy boluň.

### Proxy Sorunları {#proxying-issues}
- Eğer alt alan adlarının proxy edilmesini istemezseniz, `wu_cloudflare_should_proxy` filterini kullanabilirsiniz.
- Bazı özellikler proxy edildiğinde doğru çalışmayabilir (örneğin, belirli WordPress yönetim işlevleri).
- Yönetici sayfaları için önbelleği atlamak amacıyla Cloudflare'in Page Rules özelliğini kullanmayı düşünebilirsiniz.
