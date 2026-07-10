---
title: Cloudflare-integraatio
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Entegrasyonları {#cloudflare-integration}

## Genel Bakış {#overview}
Cloudflare, web sitelerini korumaya ve hızlandırmaya yardımcı olan önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, Ultimate Multisite ile Cloudflare arasında otomatik alan adı yönetimini sağlar, özellikle alt alan adı çoklu site kurulumları için.

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
   - Zone.Zone: Okuma
   - Zone.DNS: Düzenleme
5. API tokenınızı kopyalayın

### 2. Alan Adı Kimliğinizi (Zone ID) Alın {#2-get-your-zone-id}

1. Cloudflare kontrol panelinizde kullanmak istediğiniz alanı seçin
2. Zone ID, "Genel Bakış" sekmesinde, "API" başlığının altında sağ kenar çubuğunda görünür
3. Zone ID'yi kopyalayın

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'sizin_api_tokenınız');
define('WU_CLOUDFLARE_ZONE_ID', 'sizin_zone_idiniz');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress yönetim panelinde Ultimate Multisite > Ayarlar'a gidin
2. "Alan Adı Eşleştirmesi" (Domain Mapping) sekmesine gidin
3. Aşağı kaydırarak "Ana Sunucu Entegrasyonları" (Host Integrations) bölümüne gelin
4. Cloudflare entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet"e tıklayın

## Nasıl Çalışır {#how-it-works}

### Alt Alan Adı Yönetimi {#subdomain-management}

Bir alt alan adı çoklu site kurulumunda yeni bir site oluşturulduğunda:

1. Integraatio lähettää pyynnön Cloudflare'n API:lle lisätäkseen CNAME-rekisterin alalohkolle (subdomain).
2. Alalohko on oletuksena konfiguroitu ohitettavaksi Cloudflaren kautta (tämä voi muuttaa suodattimilla).
3. Kun sivua poistetaan, integraatio poistaa alalohkon Cloudflaresta.

### DNS-rekisterin näyttäminen {#dns-record-display}

Integraatio parantaa DNS-rekisterin näkymää Ultimate Multisite -adminissa seuraavasti:

1. Hakee DNS-rekisterit suoraan Cloudflaresta
2. Näyttää, onko rekisteri ohjattu (proxied) vai ei
3. Näyttää lisätietoja DNS-rekistereistä

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (aiemmin nimeltään "Cloudflare for SaaS") on Cloudflaren ominaisuus, joka mahdollistaa asiakkaillesi käyttää omia verkkotunnuksia SSL:llä omalla multisite-verkostanne. Se on suositeltava lähestymistapa domeenimappauksille (domain-mapped) multites-asennuksissa, jotka käyttävät Cloudflare, koska Cloudflare hoitaa SSL-sertifikaattien myöntämisen ja uusimisen automaattisesti jokaiselle omalle verkkotunnukselle.

### Miten se eroaa vakiintuneesta Cloudflare-integraatiosta {#how-it-differs-from-the-standard-cloudflare-integration}

| | Vakiintunut integraatio | Cloudflare Custom Hostnames |
|---|---|---|
| **Tarkoitus** | Luodaan automaattisesti DNS-rekistereitä alalohkoille | Mahdollistaa omilla (maapainetuilla) domaineilla Cloudflaren hallitsemalla SSL:llä |
| **Paras sopii** | Alalohkko-multites | Domeenimappattu multites |
| **SSL** | Hoitaa erikseen | Hallitaan automaattisesti Cloudflare'n toimesta |

### Cloudflare Custom Hostnames -asetusten määrittäminen {#setting-up-cloudflare-custom-hostnames}

1. Avaa Cloudflare-hallintasi hallintapane, avaa alueesi päädomainille.
2. Mene kohtaan **SSL/TLS > Custom Hostnames**.
3. Lisää vaihtoehtoinen lähde (fallback origin), joka osoittaa palvelimesi IP-osoitteeseen tai verkkotunnukseen.
4. Jokaiselle Ultimate Multisite -järjestelmässä kartoitulle asiakasdomainille lisää Cloudflareen Custom Hostname -tietueen. Voit automatisoida tämän vaiheen käyttämällä Cloudflare API:a.
5. Cloudflare myöntää ja uusii TLS-sertifikaatteja jokaiselle custom hostname -tietueelle automaattisesti, kun asiakkaan DNS on osoitettu verkkoosi.

Koko API-viite nähdään [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminolgian päivitys
Ultimate Multisite v2.6.1:n mukaisesti tämä ominaisuus kutsutaan kaikissa plugin-asetuksissa ja tunnisteissa nimellä **Cloudflare Custom Hostnames**. Aiemmissa versioissa käytettiin nimeä "Cloudflare for SaaS", joka on Cloudflaren perusproduktiinimi.
:::

## Tärkeät huomiot {#important-notes}

Cloudflaren viimeisimpien päivitysten mukaisesti villin tyylin (wildcard proxying) käyttö on nyt saatavilla kaikille asiakkaille. Tämä tarkoittaa, että standardi Cloudflare DNS-integraatio ei ole enää yhtä kriittinen alalohkojen monitasoisissa asennuksissa kuin aiemmin, sillä voit yksinkertaisesti asettaa villin tyylin DNS-tietueen Cloudflareen.

## Ongelmanratkaisu {#troubleshooting}

### API-yhteyden ongelmat {#api-connection-issues}
- Tarkista, että API-tokenisi on oikein ja siinä on tarvittavat oikeudet.
- Varmista, että alueesi ID (Zone ID) on oikein.
- Varmista, että Cloudflare-tililläsi on tarvittavat oikeudet.

### Alalohko ei lisätty {#subdomain-not-added}
- Tarkista Ultimate Multisite -logit mahdollisten virheilmoitusten löytämiseksi.
- Varmista, ettei alalohkoa ole jo lisätty Cloudflareen.
- Varmista, että Cloudflare-tilaasi tukee luomiasi DNS-tietueiden määrää.

### Proxy-ong ongelmatilanteet {#proxying-issues}
- Jos et halua, että alalohkot eivät ole proxy-ominaisuudessa, voit käyttää `wu_cloudflare_should_proxy` -suodatinta.
- Jotkin ominaisuudet eivät välttämättä toimi oikein, kun ne ovat proxy-ominaisuudessa (esim. tietyt WordPress admin -toiminnot).
- Harkitse Cloudflaren Page Rules -käyttämistä päästäksesi sivuilla, joilla ei ole välimuistia (cache) oleviin admin-sivuihin.
