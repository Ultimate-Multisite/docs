---
title: Integrasyon sa Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration {#cloudflare-integration}

## Overview {#overview}
Ang Cloudflare usa ka pangunang content delivery network (CDN) ug security provider nga nagtabang magprotekta ug magpadali sa mga website. Kini nga integration nagtugot sa awtomatikong pagdumala sa domain tali sa Ultimate Multisite ug Cloudflare, ilabi na para sa subdomain multisite installations.

## Features {#features}
- Awtomatikong paghimo og subdomain sa Cloudflare
- Suporta sa proxied subdomain
- Pagdumala sa DNS record
- Mas gipauswag nga pagpakita sa DNS record sa Ultimate Multisite admin

## Requirements {#requirements}
Kinahanglan i-define ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Setup Instructions {#setup-instructions}

### 1. Kuhaa ang Imong Cloudflare API Key {#1-get-your-cloudflare-api-key}

1. Mag-login sa imong Cloudflare dashboard
2. Adto sa "My Profile" (i-click ang imong email sa top-right corner)
3. Pilia ang "API Tokens" gikan sa menu
4. Paghimo og bag-ong API token nga adunay mosunod nga mga permiso:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopyaha ang imong API token

### 2. Kuhaa ang Imong Zone ID {#2-get-your-zone-id}

1. Sa imong Cloudflare dashboard, piliha ang domain nga gusto nimong gamiton
2. Ang Zone ID makita sa "Overview" tab, sa tuig bahin sa right sidebar ubos sa "API"
3. Kopyaha ang Zone ID

### 3. Idugang ang mga Constants sa wp-config.php {#3-add-constants-to-wp-configphp}

Idugang ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. I-enable ang Integration {#4-enable-the-integration}

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Maglakaw ngadto sa "Domain Mapping" tab
3. Mag-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang Cloudflare integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok {#how-it-works}

### Subdomain Management {#subdomain-management}

Kung adunay bag-ong site nga gihimo sa subdomain multisite installation:

1. Ang integration nagpadala og request sa API sa Cloudflare para magdugang og CNAME record para sa subdomain.
2. Ang subdomain gi-configure nga magamit ang proxy pinaagi sa Cloudflare sa default (mao ni pwede usbon gamit ang filters).
3. Kung ma-delete ang usa ka site, ang integration makuha gikan sa Cloudflare ang subdomain.

### DNS Record Display {#dns-record-display}

Gihimong mas nindot sa integration ang pagpakita sa DNS record sa Ultimate Multisite admin pinaagi sa:

1. Pagkuha og mga DNS record direkta gikan sa Cloudflare
2. Pagpakita kung ang mga record gi-proxy o wala
3. Pagpakita og dugang impormasyon bahin sa mga DNS record

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

Ang **Cloudflare Custom Hostnames** (kini kaniadto gitawag nga "Cloudflare for SaaS") usa ka feature sa Cloudflare nga nagtugot sa imong mga customer nga mogamit sa ilang kaugalingong domain uban ang SSL sa imong multisite network. Kini ang gi-rekomendang pamaagi para sa domain-mapped multisite installations nga naggamit og Cloudflare, kay ang Cloudflare maoy nagdumala sa pag-issue ug renewal sa SSL certificate alang sa matag custom domain awtomatiko.

### Unsa kini lahi sa standard Cloudflare integration {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Katuyoan** | Awtonom nga naghimo og DNS records para sa mga subdomain | Nagtugot sa custom (mapped) domains uban ang Cloudflare-managed SSL |
| **Best for** | Subdomain multisite | Domain-mapped multisite |
| **SSL** | Gi-handle sa lain-laing paagi | Gidumala sa Cloudflare awtomatiko |

### Pag-set up sa Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Sa imong Cloudflare dashboard, buksan ang zone para sa imong main domain.
2. Adto sa **SSL/TLS > Custom Hostnames**.
3. Dugangi ang fallback origin nga nagtudlo sa IP o hostname sa imong server.
4. Para sa matag customer domain nga gipamapa sa Ultimate Multisite, aduna kay Custom Hostname entry sa Cloudflare. Mahimo nimo himuon kining step pinaagi sa paggamit sa Cloudflare API.
5. Ang Cloudflare ma-issue ug ma-renew ang TLS certificates para sa matag custom hostname awtomatiko kung ang DNS sa customer gitudlo na sa imong network.

Para sa tibuok reference sa API, tan-awa ang [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Update sa Terminolohiya
Sa Ultimate Multisite v2.6.1 pataas, kini nga feature giatawag na og **Cloudflare Custom Hostnames** sa tanang settings ug labels sa plugin. Ang mga older version naggamit sa ngalan nga "Cloudflare for SaaS", nga mao ang underlying Cloudflare product name.
:::

## Importante nga Mga Nota {#important-notes}

Sa bag-o nga mga update sa Cloudflare, anaa na ang wildcard proxying para sa tanang customer. Nagpasabot ni nga mas gamay na ang importansya sa standard Cloudflare DNS integration para sa subdomain multisite installations kumpara kaniadto, kay pwede nimo basta mag-set up og wildcard DNS record sa Cloudflare.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Siguraduhon nga tama ang imong API token ug naa kini sa kinahanglanon nga permissions
- Susiha kung tama ang imong Zone ID
- Siguraduhon nga ang imong Cloudflare account adunay kinahanglanon nga permissions

### Subdomain Wala Dugang {#subdomain-not-added}
- Susiha ang Ultimate Multisite logs para sa bisan unsang error messages
- Siguraduhon nga wala pa kini gidala sa Cloudflare
- Siguraduhon nga ang imong Cloudflare plan suportado ang kantidad sa DNS records nga imong gihimo

### Mga Problema sa Proxying {#proxying-issues}

- Kung dili nimo gusto nga ma-proxy ang mga subdomain, pwede nimong gamiton ang `wu_cloudflare_should_proxy` filter.
- Ang pipila ka features dili molihok og tarong kung na-proxy kini (pananglitan, ubang functions sa WordPress admin).
- Hunahunaa nga gamiton ang Cloudflare's Page Rules para malikayan ang cache para sa mga admin pages.
