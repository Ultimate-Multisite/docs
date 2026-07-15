---
title: Kuteteza Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Umuwamba ndi Cloudflare Integration

## Kufotokozera (Overview) {#overview}
Cloudflare ndi mwayi wofunika kwambiri wopereka ndalama za kuwerenga malo omwe amapereka (content delivery network - CDN) ndi wopereka ndalama za kuwerenga (security provider) zomwe zimapereka kukhulupirira ndi kupangitsa kusintha kwa websites. Kufotokozera lili lomwe limapereka ulamulira malo omwe amapereka (domain management) m'moyo woperekera wa Ultimate Multisite ndi Cloudflare, makamaka pamodzi ndi zinthu zomwe muli ndi subdomain multisite.

## Mafunso (Features) {#features}
- Kukhala kwa subdomain kwambiri m'Cloudflare
- Kukhala kwa subdomain omwe muli ndi proxy support
- Ulamulira DNS records
- Kukhala kwa DNS record kuwoneka bwino m'Ultimate Multisite admin

## Zomwe Mumene (Requirements) {#requirements}
Mwachidule, zinthu zina zomwe zimeneledwa m'file yanu ya `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Mwayi Woperekera (Setup Instructions) {#setup-instructions}

### 1. Gundira API Key Yanu ya Cloudflare {#1-get-your-cloudflare-api-key}

1. Gundira ku dashboard yanu la Cloudflare
2. Ndani "My Profile" (gawira email yanu m'malo omwe muli ndi top-right corner)
3. Kuti "API Tokens" m'menu
4. Kufotokozera API token watsopano ndi mafunso awa:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopya API token yanu

### 2. Gundira ID Yanu ya Zone {#2-get-your-zone-id}

1. M'dashboard yanu la Cloudflare, gawira domain yomwe muli wotayire kutsegula
2. Zone ID limapereka m'tab "Overview", m'malo omwe muli ndi right sidebar m'Chitetezo cha "API"
3. Kopya Zone ID

### 3. Yendetsa Constants ku wp-config.php {#3-add-constants-to-wp-configphp}

Yendetsa constants zina m'file yanu ya `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Yendetsa Integration {#4-enable-the-integration}

1. M'admin ya WordPress yanu, gawira Ultimate Multisite > Settings
2. Ndani tab "Domain Mapping"
3. Kuti m'malo m'moyo woperekera (Scroll down) ku "Host Integrations"
4. Yendetsa Cloudflare integration
5. Gawira "Save Changes"

## Kodi Imene Imene? (How It Works) {#how-it-works}

### Ulamulira Subdomain {#subdomain-management}

Pamene site yatsopano imapereka m'subdomain multisite installation:

1. Integrasi inafaka request ku Cloudflare API kuti yera CNAME record kwa subdomain.
2. Subdomain iye ikagwira proxied kuposa Cloudflare kwa default (izwiziwe ndi filters).
3. Pindi site imalimbidwa, integrasi iye idzera subdomain ku Cloudflare.

### DNS Record Display {#dns-record-display}

Integrasi imapambana kukhazikitsa DNS record display m'Ultimate Multisite admin mwachidule:

1. Imapambana DNS records m'Cloudflare m'moyo woyenera
2. Imapambana kuti records ndi proxied kapena sikuyenera
3. Imapambana kukhala ndi mavuto ena omwezi za DNS records

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (yera imapatsa ntchito "Cloudflare for SaaS") ndi feature ya Cloudflare yomwe imaphatikiza kuti wamene anapereka m'mawa awo amagwiritse domains awo ndi SSL pa network yanu ya multisite. Iyi ndi njira yomwe imaperekedwa kwambiri kwa installations za multisite zomwe zimayendetsedwa ndi Cloudflare, chifukwa Cloudflare imapereka ndi kuperekera sertifika ya SSL kwa domain zina m'moyo woyenera mwachidule.

### Kodi ndi kodi ndi integrasi ya standard ya Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integrasi ya Standard | Cloudflare Custom Hostnames |
|---|---|---|
| **Kukonza** | Imapambana DNS records kwa subdomains | Imaphatikiza domains zina (mapped) ndi SSL yomwe imaperekedwa ndi Cloudflare |
| **Yomwe imaperekedwa kwambiri** | Multisite ya subdomains | Multisite ya domain-mapped |
| **SSL** | Imaperekedwa m'moyo woyenera | Imaperekedwa mwachidule ndi Cloudflare |

### Kukhazikitsa Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Mupeza m'dashboard ya Cloudflare, buka zone ya domain yanu.
2. Tenda ku **SSL/TLS > Custom Hostnames**.
3. Tamba origin ya kulemba (fallback origin) uliyoirenga IP kapena hostname ya server yanu.
4. Kwa domain la wamkamati (customer domain) olipangidwa m'Ultimate Multisite, tamba entry ya Custom Hostname mu Cloudflare. Mumwezi muliyepeza kuenda m'Cloudflare API kuti mupangirelololo (automate) lilo.
5. Cloudflare imetuliza ndi TLS certificates kwa kila custom hostname m'mwayi ngati DNS ya wamkamati imapangidwa ku network yanu.

Kwa reference yomweyo ya API yoti muliyepeza, ndiyeni [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Kutsogolera mawu
M'Ultimate Multisite v2.6.1, lilo limodzi limakutendeka ndi **Cloudflare Custom Hostnames** m'malo onse ya plugin ndi labels. M'mwayi wosiyanasiyana uliyo, ulipembedza m'Cloudflare for SaaS, yomwe ndi dzina la product la Cloudflare lilo m'moyo woyamba.
:::

## Zifukwa Zofunika (Important Notes) {#important-notes}

M'Cloudflare imene zotsatira, wildcard proxying limakutendeka kwa wamkamati onse. Izi zimene kuti integration ya DNS ya Cloudflare yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe y

### Matundu ya Proxying {#troubleshooting}

- Ngati ukufi na subdomains kuproxy, ukweza kutumia `wu_cloudflare_should_proxy` filter.
- Ziri zambiri zinaweza kusitendeka vizuri wakati zinapokuwa zimeproxy (mifano: baadhi ya functions za admin za WordPress).
- Zingatia kutumia Cloudflare's Page Rules ili kupita cache kwa pages za admin.
