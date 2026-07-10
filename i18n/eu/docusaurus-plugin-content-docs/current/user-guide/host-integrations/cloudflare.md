---
title: Cloudflare Integrazioa
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integrazioa {#cloudflare-integration}

## Deskuntzua {#overview}
Cloudflare da lider CDN (Content Delivery Network) eta segurtasun prozesua nagusia da, zehatz egiten du webstei geraketa eta azkarrak. Hau integrazioak Ultimate Multisite eta Cloudflare-ren artean automatikoa domainer administrazioa gogoratzen du, batez ere subdomain multisite instalazioetan.

## Aeraguntzak {#features}
- Cloudflare-an subdomain automatikoa sortzea
- Subdomain proxied (proxied) suporta
- DNS record management (DNS irudinetasun administrazioa)
- Ultimate Multisite adminaren DNS recordak erabilera hobetuta ikusten jakinarazteko

## Aurrekontzak {#requirements}
Hau dauden konstante hauek zehatz egin behar dira `wp-config.php` filean:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instalazio Instrukiak {#setup-instructions}

### 1. Hondamendua API Key-n duzu Cloudflare-an {#1-get-your-cloudflare-api-key}

1. Cloudflare dashboard-era logiatu duzu
2. "My Profile" (hautaindianko emailan klik egin) funtziokoan jarraitu
3. Menu-an "API Tokens" (API Hondamendunak) aukeratu duzu
4. API token berria sortu duzu, histen hauek hasierako permietua jakinarazteko:
   - Zone.Zone: Read (Lesea)
   - Zone.DNS: Edit (Aurreratzea)
5. API token-a kopiatu duzu

### 2. Hondamendua ID-n duzu {#2-get-your-zone-id}

1. Cloudflare dashboard-an, erabilizte nahi duzu domainak aukeratu duzu
2. Zone ID-k "Overview" (Deskuntzaren) tabean, "API"-ren ondorioan, kanan handiari ikusten da
3. Zone ID-a kopiatu duzu

### 3. Konstante hauek wp-config.php-le hasitu {#3-add-constants-to-wp-configphp}

Hau dauden konstante hauek `wp-config.php` filean hasitu:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Integrazioa hasitu {#4-enable-the-integration}

1. WordPress adminaren, Ultimate Multisite > Settings (Hezkuntza) funtziokoan jarraitu
2. "Domain Mapping" (Domainer Mapoak) tabera jarraitu
3. "Host Integrations" (Hozte Integrazioak) duen lailariro jarraitu
4. Cloudflare integrazioa hasitu duzu
5. "Save Changes" (Gehiagoak saldatu) klik egin

## Ondo Zerrik Toki da? {#how-it-works}

### Subdomain Management (Subdomain administrazioa) {#subdomain-management}

Subdomain multisite instalazioan leku berria sortzen duenean:

1. Integrazioa esaitzen du Cloudflare API-rrekin, subdomain-eko CNAME record bat gehien doan.
2. Subdomain-ak default-ean Cloudflare-ralu proxied (hanago filter-ek erabiliz piztu) daingoa.
3. Saila site bat boratzen daiteke, integrazioak subdomain-a Cloudflare-ralu aldatzen du.

### DNS Record-ak Ekitzea {#dns-record-display}

Integrazioak Ultimate Multisite admin-aren DNS record-en ikerketa hobitzen du:

1. DNS record-ak Cloudflare-ralu direktu-lan hartzen du
2. Record-ek proxied (hanago ez dagoela) informatzen du
3. DNS record-ek bidezko informazio gehiago erakusten du

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (lehenik "Cloudflare for SaaS" deitzen zutena) da Cloudflare funtazioa dena, zein irudien lekuak erabiltzeko aukera ematen du SSL-rekin zenbait domain-ek. Multisite network-an domain-ek erabiliz eta SSL-rekin, hori da apropiezkoa den planteamenda domain-ek mapatutako multisite instalazioetara Cloudflare erabiliz, karena Cloudflare automaticoan bidezko SSL certificate-ak emate eta berri datzen dio.

### Standard Cloudflare integrazioari nola aukeratzen da {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integrazioa | Cloudflare Custom Hostnames |
|---|---|---|
| **Objetiboa** | Subdomain-ek DNS record-ak automaticoan ezartzea | Domain-ek mapatutako (custom) domain-ek Cloudflare-ralu erantzuna SSL-rekin erabiltzea |
| **Apropiezkoa da** | Subdomain multisite-ek | Domain-ek mapatutako multisite-ek |
| **SSL** | Balioa handiagoan ezartzen da | Cloudflare automaticoan eskaintzen du |

### Cloudflare Custom Hostnames-ak konfigurtzea {#setting-up-cloudflare-custom-hostnames}

1. Cloudflare dashboardan, ir zonaa (zone) da domainaren lehenakorekin ireki luatu.
2. **SSL/TLS > Custom Hostnames**-ra jarri duzu.
3. Serveraren IP edo hostname-ra apuntatzen duen fallback origin bat gehitu.
4. Ultimate Multisitean mapatutako lehenakorekin (customer domain) uchun Cloudflarean, Custom Hostname entry bat gehitu. Hauko irudiari APIa erabiliz lehenagoa automatikatu dezake.
5. Customeraren DNS-ak zure networkera apuntatzen duenean, Cloudflare automaticoan TLS certificates bat ematen eta berri egiten du lehenakorekin (custom hostname) arau.

API referentzia guztiaren bitartean, [Cloudflare Custom Hostnames dokumentazioa](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) ikusi.

:::note Terminoloji aktualizazioa
Ultimate Multisite v2.6.1-ean, hau funtua pluginaren guztiaren konfiguratura eta labeletan **Cloudflare Custom Hostnames** (Cloudflare Lehenakorekin) hitz egiten da. Lehen bertsioak "Cloudflare for SaaS" irudiari erabiltzen ziren, hau da Cloudflare produkzioaren lehenen irudiari.
:::

## Nota importanteak {#important-notes}

Cloudflarearen lehenagoako aktualizazioetan, wildcard proxying (wildcard proksi) guztietan erabilera dago. Hau inartzen du, subdomain multisite instalazioetatik standard Cloudflare DNS integrazioa irriari gehiago ez da, karena zure Cloudflarean wildcard DNS record bat lehenagoak emateko dugu.

## Problema jakinarazpenak (Troubleshooting) {#troubleshooting}

### API konektibitatea problemaak {#api-connection-issues}
- Zure API tokena barne dagoela eta beharrezko permietua hasterri duela jabetzat hartu.
- Zure Zone ID irudiari dagoela jartzen ditu.
- Zure Cloudflare kontua beharrezko permietuen dutela seguruatu.

### Subdomain ez da gehitu {#subdomain-not-added}
- Ultimate Multisite log-ak error testuak edo mezuak (error messages) jakinarazten duen ikusi.
- Subdomaina aldatu ez dagoela Cloudflarean jartzen duela jabetzat hartu.
- Zure Cloudflare planak zure emateko DNS recorden kopurua suportatzen duen jabetzat hartu.

### Proxying Problemaaketa {#proxying-issues}

- Hau ezazu subdomeniak proxya ez itxera nahi duzun, `wu_cloudflare_should_proxy` filtera daite erabiliz.
- Proxya ez itxera jakin dituz (adibidez, bestelako WordPress admin funktionen).
- Admin eskuilerak cachea ez itxera nahi duzun, Cloudflare's Page Rulesak erabiliz.
