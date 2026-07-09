---
title: Integrasyon ng Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Pangkalahatang-ideya
Ang Cloudflare ay isang nangungunang content delivery network (CDN) at tagapagbigay ng seguridad na tumutulong protektahan at pabilisin ang mga website. Pinapagana ng integration na ito ang awtomatikong pamamahala ng domain sa pagitan ng Ultimate Multisite at Cloudflare, lalo na para sa mga subdomain multisite installation.

## Mga Feature
- Awtomatikong paggawa ng subdomain sa Cloudflare
- Suporta sa proxied subdomain
- Pamamahala ng DNS record
- Pinahusay na pagpapakita ng DNS record sa Ultimate Multisite admin

## Mga Kinakailangan
Dapat tukuyin ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Mga Tagubilin sa Setup

### 1. Kunin ang Iyong Cloudflare API Key

1. Mag-log in sa iyong Cloudflare Dashboard
2. Pumunta sa "My Profile" (i-click ang iyong email sa kanang sulok sa itaas)
3. Piliin ang "API Tokens" mula sa menu
4. Gumawa ng bagong API token na may mga sumusunod na pahintulot:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopyahin ang iyong API token

### 2. Kunin ang Iyong Zone ID

1. Sa iyong Cloudflare Dashboard, piliin ang domain na gusto mong gamitin
2. Makikita ang Zone ID sa tab na "Overview", sa kanang sidebar sa ilalim ng "API"
3. Kopyahin ang Zone ID

### 3. Idagdag ang mga Constant sa wp-config.php

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Paganahin ang Integration

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. Paganahin ang Cloudflare integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Pamamahala ng Subdomain

Kapag may ginawang bagong site sa isang subdomain multisite installation:

1. Nagpapadala ang integration ng request sa API ng Cloudflare upang magdagdag ng CNAME record para sa subdomain
2. Naka-configure ang subdomain na maging proxied sa pamamagitan ng Cloudflare bilang default (maaari itong baguhin gamit ang mga filter)
3. Kapag nabura ang isang site, aalisin ng integration ang subdomain mula sa Cloudflare

### Pagpapakita ng DNS Record

Pinapahusay ng integration ang pagpapakita ng DNS record sa Ultimate Multisite admin sa pamamagitan ng:

1. Direktang pagkuha ng mga DNS record mula sa Cloudflare
2. Pagpapakita kung ang mga record ay proxied o hindi
3. Pagpapakita ng karagdagang impormasyon tungkol sa mga DNS record

## Cloudflare Custom Hostnames

Ang **Cloudflare Custom Hostnames** (dating tinatawag na "Cloudflare for SaaS") ay isang feature ng Cloudflare na nagpapahintulot sa iyong mga customer na gamitin ang sarili nilang mga domain na may SSL sa iyong multisite network. Ito ang inirerekomendang paraan para sa mga domain-mapped multisite installation na gumagamit ng Cloudflare, dahil awtomatikong pinamamahalaan ng Cloudflare ang pag-isyu at pag-renew ng SSL certificate para sa bawat custom domain.

### Paano ito naiiba sa karaniwang Cloudflare integration

| | Karaniwang integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Layunin** | Awtomatikong gumagawa ng mga DNS record para sa mga subdomain | Pinapagana ang mga custom (mapped) domain na may SSL na pinamamahalaan ng Cloudflare |
| **Pinakamainam para sa** | Subdomain multisite | Domain-mapped multisite |
| **SSL** | Hiwalay na pinangangasiwaan | Awtomatikong pinamamahalaan ng Cloudflare |

### Pagse-set up ng Cloudflare Custom Hostnames

1. Sa iyong Cloudflare Dashboard, buksan ang zone para sa iyong pangunahing domain.
2. Pumunta sa **SSL/TLS > Custom Hostnames**.
3. Magdagdag ng fallback origin na nakaturo sa IP o hostname ng iyong server.
4. Para sa bawat customer domain na naka-map sa Ultimate Multisite, magdagdag ng Custom Hostname entry sa Cloudflare. Maaari mong i-automate ang hakbang na ito gamit ang Cloudflare API.
5. Awtomatikong nag-iisyu at nagre-renew ang Cloudflare ng mga TLS certificate para sa bawat custom hostname kapag nakaturo na ang DNS ng customer sa iyong network.

Para sa buong API reference, tingnan ang [dokumentasyon ng Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Update sa terminolohiya
Mula sa Ultimate Multisite v2.6.1, ang feature na ito ay tinutukoy bilang **Cloudflare Custom Hostnames** sa lahat ng mga setting at label ng plugin. Ginamit ng mga mas naunang bersyon ang pangalang "Cloudflare for SaaS", na siyang pinagbabatayang pangalan ng produkto ng Cloudflare.
:::

## Mahahalagang Tala

Mula sa mga kamakailang update ng Cloudflare, available na ngayon ang wildcard proxying para sa lahat ng customer. Ibig sabihin nito, ang karaniwang Cloudflare DNS integration ay hindi na kasing kritikal para sa mga subdomain multisite installation gaya noon, dahil maaari ka na lamang mag-set up ng wildcard DNS record sa Cloudflare.

## Pag-troubleshoot

### Mga Isyu sa Koneksyon sa API
- Tiyaking tama ang iyong API token at mayroon itong mga kinakailangang pahintulot
- Suriing tama ang iyong Zone ID
- Tiyaking mayroon ang iyong Cloudflare Account ng mga kinakailangang pahintulot

### Hindi Naidagdag ang Subdomain
- Suriin ang mga log ng Ultimate Multisite para sa anumang mensahe ng error
- Tiyaking hindi pa naidagdag ang subdomain sa Cloudflare
- Tiyaking sinusuportahan ng iyong Cloudflare plan ang bilang ng mga DNS record na ginagawa mo

### Mga Isyu sa Proxying
- Kung ayaw mong maging proxied ang mga subdomain, maaari mong gamitin ang filter na `wu_cloudflare_should_proxy`
- Maaaring hindi gumana nang tama ang ilang feature kapag proxied (hal., ilang partikular na function ng WordPress admin)
- Isaalang-alang ang paggamit ng Page Rules ng Cloudflare upang i-bypass ang cache para sa mga admin page
