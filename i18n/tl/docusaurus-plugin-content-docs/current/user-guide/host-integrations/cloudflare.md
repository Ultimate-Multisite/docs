---
title: Integrasyon ng Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Pangkalahatan (Overview) {#overview}
Ang Cloudflare ay isang nangungunang content delivery network (CDN) at security provider na tumutulong magprotekta at magpabilis ng mga website. Ang integrasyong ito ay nagbibigay-daan para sa awtomatikong pamamahala ng domain sa pagitan ng Ultimate Multisite at Cloudflare, lalo na para sa mga subdomain multisite installation.

## Mga Katangian (Features) {#features}
- Awtomatikong paglikha ng subdomain sa Cloudflare
- Suporta para sa proxied subdomain
- Pamamahala ng DNS record
- Mas pinahusay na pagpapakita ng DNS record sa Ultimate Multisite admin

## Mga Kinakailangan (Requirements) {#requirements}
Ang mga sumusunod na constants ay dapat i-define sa iyong `wp-config.php` file:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Mga Panuto sa Pag-set Up (Setup Instructions) {#setup-instructions}

### 1. Kunin ang Iyong Cloudflare API Key {#1-get-your-cloudflare-api-key}

1. Mag-log in sa iyong Cloudflare dashboard
2. Pumunta sa "My Profile" (i-click ang iyong email sa kanang itaas na sulok)
3. Piliin ang "API Tokens" mula sa menu
4. Gumawa ng bagong API token na may mga sumusunod na pahintulot:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopyahin ang iyong API token

### 2. Kunin ang Iyong Zone ID {#2-get-your-zone-id}

1. Sa iyong Cloudflare dashboard, piliin ang domain na gusto mong gamitin
2. Ang Zone ID ay makikita sa tab na "Overview", sa kanang sidebar sa ilalim ng "API"
3. Kopyahin ang Zone ID

### 3. Magdagdag ng Constants sa wp-config.php {#3-add-constants-to-wp-configphp}

Idagdag ang mga sumusunod na constants sa iyong `wp-config.php` file:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. I-enable ang Integrasyon (Enable the Integration) {#4-enable-the-integration}

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang Cloudflare integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana (How It Works) {#how-it-works}

### Pamamahala ng Subdomain (Subdomain Management) {#subdomain-management}

Kapag may bagong site na nilikha sa isang subdomain multisite installation:

1. Ang integration ay nagpapadala ng request sa API ng Cloudflare para magdagdag ng CNAME record para sa subdomain.
2. Ang subdomain ay naka-configure na i-proxy sa pamamagitan ng Cloudflare nang default (maaari itong baguhin gamit ang mga filter).
3. Kapag may site ang tinanggal, aalisin ng integration ang subdomain mula sa Cloudflare.

### Pagpapakita ng DNS Record {#dns-record-display}

Pinapahusay ng integration ang pagpapakita ng DNS record sa Ultimate Multisite admin sa pamamagitan ng:

1. Direktang pagkuha ng mga DNS record mula sa Cloudflare
2. Pagpapakita kung ang mga record ay naka-proxy o hindi
3. Pagpapakita ng karagdagang impormasyon tungkol sa mga DNS record

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

Ang **Cloudflare Custom Hostnames** (dating tinatawag na "Cloudflare for SaaS") ay isang feature ng Cloudflare na nagpapahintulot sa iyong mga customer na gumamit ng sarili nilang domain na may SSL sa iyong multisite network. Ito ang inirerekomendang paraan para sa mga domain-mapped na instalasyon ng multisite na gumagamit ng Cloudflare, dahil pinamamahalaan ng Cloudflare ang pag-isyu at pag-renew ng SSL certificate para sa bawat custom domain nang awtomatiko.

### Paano ito naiiba sa standard Cloudflare integration {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Layunin** | Awtomatikong lumilikha ng mga DNS record para sa mga subdomain | Nagbibigay-daan para sa custom (mapped) na domain na may Cloudflare-managed SSL |
| **Pinakamahusay para sa** | Subdomain multisite | Domain-mapped multisite |
| **SSL** | Pinamamahalaan nang hiwalay | Awtomatikong pinamamahalaan ng Cloudflare |

### Pag-set up ng Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Sa iyong Cloudflare dashboard, buksan ang zone para sa iyong pangunahing domain.
2. Pumunta sa **SSL/TLS > Custom Hostnames**.
3. Magdagdag ng fallback origin na tumuturo sa IP address o hostname ng iyong server.
4. Para sa bawat customer domain na naka-map sa Ultimate Multisite, magdagdag ng Custom Hostname entry sa Cloudflare. Maaari mong gawing awtomatiko ang hakbang na ito gamit ang Cloudflare API.
5. Awtomatikong inilalabas at ina-renew ng Cloudflare ang mga TLS certificate para sa bawat custom hostname kapag ang DNS ng customer ay itinuro sa iyong network.

Para sa kumpletong reference ng API, tingnan ang [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Pag-update sa Terminolohiya
Mula sa Ultimate Multisite v2.6.1 pataas, ang feature na ito ay tinatawag nang **Cloudflare Custom Hostnames** sa lahat ng setting at label ng plugin. Ang mga naunang bersyon ay gumagamit ng pangalang "Cloudflare for SaaS", na siyang pangalan ng underlying Cloudflare product.
:::

## Mahalagang Paalala {#important-notes}

Mula sa mga kamakailang update ng Cloudflare, ang wildcard proxying ay available na para sa lahat ng customer. Ibig sabihin, mas hindi na gaanong kritikal ang standard Cloudflare DNS integration para sa subdomain multisite installations kumpara noon, dahil maaari ka nang mag-set up ng isang wildcard DNS record sa Cloudflare.

## Pag-troubleshoot {#troubleshooting}

### Mga Isyu sa Koneksyon ng API {#api-connection-issues}
- Siguraduhin na tama ang iyong API token at mayroon itong kinakailangang mga pahintulot (permissions)
- Tingnan kung tama ang iyong Zone ID
- Tiyakin na ang iyong Cloudflare account ay may kinakailangang mga pahintulot

### Subdomain Hindi Naisama {#subdomain-not-added}
- Suriin ang Ultimate Multisite logs para sa anumang error messages
- Beripikahin na hindi pa naka-add ang subdomain sa Cloudflare
- Siguraduhin na sinusuportahan ng iyong Cloudflare plan ang bilang ng mga DNS record na iyong ginagawa

### Mga Isyu sa Proxying {#proxying-issues}
- Kung ayaw mong i-proxy ang mga subdomain, maaari kang gumamit ng `wu_cloudflare_should_proxy` filter.
- May ilang features na maaaring hindi gumana nang tama kapag naka-proxy (halimbawa, ilang functions ng WordPress admin).
- Isaalang-alang ang paggamit ng Cloudflare's Page Rules para iwas mag-cache sa mga admin pages.
