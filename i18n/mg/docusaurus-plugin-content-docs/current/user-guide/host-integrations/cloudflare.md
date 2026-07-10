---
title: Fampifandraisana Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration {#cloudflare-integration}

## Awtomatizasyon (Overview) {#overview}
Cloudflare, web sitelerini korumak ve hızlandırmak için önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, Ultimate Multisite ile Cloudflare arasında otomatik alan adı yönetimi sağlar, özellikle de alt alan adı çoklu site kurulumları için.

## Özellikler {#features}
- Cloudflare'da otomatik alt alan adı oluşturma
- Proxy edilmiş alt alan adı desteği
- DNS kaydı yönetimi
- Ultimate Multisite admin panelinde gelişmiş DNS kaydı gösterimi

## Gereksinimler {#requirements}
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Kurulum Talimatları {#setup-instructions}

### 1. Cloudflare API Anahtarınızı Alın {#1-get-your-cloudflare-api-key}

1. Cloudflare kontrol panelinize giriş yapın
2. "My Profile" (sağ üst köşedeki e-posta adresinize tıklayın) bölümüne gidin
3. Menüden "API Tokens"ı seçin
4. Aşağıdaki izinlerle yeni bir API token oluşturun:
   - Zone.Zone: Okuma (Read)
   - Zone.DNS: Düzenleme (Edit)
5. API token'ınızı kopyalayın

### 2. Alan Adı Kimliğinizi (Zone ID) Alın {#2-get-your-zone-id}

1. Cloudflare kontrol panelinizde, kullanmak istediğiniz alanı seçin
2. Zone ID, "Overview" sekmesinde, "API" başlığının altında sağ kenar çubuğunda görünür
3. Zone ID'yi kopyalayın

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress admin panelinizde, Ultimate Multisite > Settings'e gidin
2. "Domain Mapping" sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" kısmına gelin
4. Cloudflare entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alt Alan Adı Yönetimi {#subdomain-management}

Bir alt alan adı çoklu site kurulumunda yeni bir site oluşturulduğunda:

1. Ny fampifandra (integration) dia manome fangataho iray amin'ny API an'i Cloudflare mba hanampiana fonosana CNAME ho an'ilay subdomain.
2. Ny subdomain dia voafidy mba hampihatra (proxied) amin'ny alalan'i Cloudflare ho an'ny fomba mahazatra (izay azo ovaina amin'ny alalan'ny filters).
3. Rehefa misy tranokala (site) dia esorina, ny fampifandra (integration) dia hisorohana ilay subdomain avy ao amin'i Cloudflare.

### Fanehoana ny DNS Record {#dns-record-display}

Ny fampifandra (integration) dia manatsara ny fisehoana ny DNS record ao amin'ny Ultimate Multisite admin amin'ny alalan'ny:

1. Fandefasana mivantana ireo DNS records avy any Cloudflare
2. Fanehoana raha misy na tsy misy proxy ho an'ireo records ireo
3. Fanehoana fampahalalana fanampiny momba ireo DNS records ireo

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (taloha antsoina hoe "Cloudflare for SaaS") dia fitaovana ao amin'ny Cloudflare izay mamela ny mpanjifa anareo hampiasa ny domain manokana (custom domains) miaraka amin'ny SSL eo amin'ny tambajotra multisite anareo. Io no fomba tsara indrindra ho an'ny fananganana multisite mifandray amin'ny domain izay mampiasa Cloudflare, satria ny Cloudflare no mitantana ny famoronana sy ny fanavaozana ny sertifika SSL ho an'ny domain manokana tsirairay ho azy.

### Ahoana no fahasamihafany amin'ny fampifandra (integration) mahazatra {#how-it-differs-from-the-standard-cloudflare-integration}

| | Fampifandra mahazatra (Standard integration) | Cloudflare Custom Hostnames |
|---|---|---|
| **Tanjona** | Mamorona DNS records ho an'ny subdomain ahoana no tena ilaina | Mamela domain manokana (mapped domains) miaraka amin'ny SSL vitan'i Cloudflare |
| **Mifanaraka tsara amin'ny** | Multisite mifandray amin'ny subdomain | Multisite mifandray amin'ny domain |
| **SSL** | Itantana amin'ny fomba hafa | Itantanan'i Cloudflare ho azy |

### Fikarakarana Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Ny dashboard an'ny Cloudflare, afaka ny zone ho an'ny domain lehibenareo.
2. Mandehana any amin'ny **SSL/TLS > Custom Hostnames**.
3. Ampidiro origin fallback manondro ny IP na hostname an'ny server-nao.
4. Ho an'ny domain tsirairay voasokajy ao amin'ny Ultimate Multisite, ampiana fidirana Custom Hostname any Cloudflare. Afaka mamorona izany ho automatique ianao amin'ny fampiasana ny Cloudflare API.
5. Ny Cloudflare dia manome sy mamerina indray ny TLS certificates ho an'ny custom hostname tsirairay aho rehefa voatsangany ny DNS an'ilay mpanjifa amin'ny tambajotra anareo.

Ho fampahalalana feno momba ny API, jereo eto: [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Fanavaozana ny teny
Raha vao nisy Ultimate Multisite v2.6.1, dia antsoina hoe **Cloudflare Custom Hostnames** io tolotra io amin'ny fampahalalana sy famaritana rehetra ao anatin'ny plugin. Ireo dikan-teny taloha dia nampiasa ny anarana "Cloudflare for SaaS", izay anaran'ny vokatra Cloudflare fototra.
:::

## Fanamarihana Manan-danja {#important-notes}

Raha vao nisy fanavaozana farany avy amin'ny Cloudflare, dia azo atao ny fampiasana wildcard proxying ho an'ny mpanjifa rehetra izao. Midika izany fa tsy tena ilaina intsony ny fandrindrana DNS Cloudflare mahazatra ho an'ny subdomain multisite noho ny taloha, satria afaka mametraka ny record DNS wildcard ianao ao amin'ny Cloudflare fotsiny.

## Fandresena Olana (Troubleshooting) {#troubleshooting}

### Olana Amin'ny Fandraisana API {#api-connection-issues}
- Fantaro raha marina ny API token anareo ary manana ny alalana ilaina.
- Jereo raha marina ny Zone ID anareo.
- Antsoy fa manana ny alalana ilaina amin'ny kaontinao Cloudflare ianao.

### Tsy Ampiana Subdomain {#subdomain-not-added}
- Jereo ireo logs an'ny Ultimate Multisite ho an'ny hafatra fahadisoana (error messages).
- Fantaro raha toa ka efa voampiana ny subdomain ao amin'ny Cloudflare izany.
- Antsoy fa manome alalana ny plan Cloudflare anareo ny isan'ny record DNS ataonao.

### Olana momba ny Proxy {#proxying-issues}

- Raha tsy te-hampiasa proxy ho an'ny subdomain ianao, dia afaka mampiasa ilay `wu_cloudflare_should_proxy` filter ianao.
- Ny sasany amin'ireo fahaizana (features) dia mety tsy mandeha tsara rehefa mi-proxy (ohatra, ny asa iray ao anatin'ny WordPress admin).
- Raha toa ka mila manitsakitsaka ny cache ho an'ny pejy admin ianao mba handresena izany, dia azo inoana fa tsara kokoa ny mampiasa Cloudflare Page Rules.
