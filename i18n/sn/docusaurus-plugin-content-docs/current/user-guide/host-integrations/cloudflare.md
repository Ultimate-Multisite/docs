---
title: Kugadzirwa neCloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Ovérview {#overview}
Cloudflare ni ndiri munhu anobva wose murefu wekudya (CDN) uye munhu anobva munhu anobatsira kuonekwa nekubatsira kudzera mweya wewebsites. Izvi zvinobatsira kuti usawane nekuvaka websites, zvakasiyana-siyete, zvakasiyana-siyete (subdomain multisite installations). Izvi zvinobatsira kuti usawane nekuvaka websites, zvakasiyana-siyete, zvakasiyana-siyete (subdomain multisite installations).

## Features {#features}
- Kufamba nekugadzirwa kwe subdomain muCloudflare
- Kuswika kubva ku subdomain (Proxied subdomain support)
- Gadzirwa nekubatsira DNS records
- Kuratidza DNS records zvakakosha pane Ultimate Multisite admin

## Requirements {#requirements}
Zvinofanira kuitwa izvi mabhurangi ako `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Setup Instructions {#setup-instructions}

### 1. Get Your Cloudflare API Key {#1-get-your-cloudflare-api-key}

1. Funga dashboard yako ya Cloudflare
2. Panda ku "My Profile" (shandisa email yako mupfupi wochipfupi)
3. Chibvumire "API Tokens" kubva mu menu
4. Shandisa token yakapfuma yakatidzo nekuvaka API iye nemabhumbu aya:
   - Zone.Zone: Read (Kutamba zvinhu zvinobatsira kuona)
   - Zone.DNS: Edit (Kutamba zvinhu zvinobatsira kutaura DNS)
5. Shandisa token yakapfuma yako

### 2. Get Your Zone ID {#2-get-your-zone-id}

1. Mu dashboard yako ya Cloudflare, chine domain unoda kushandisa
2. Zone ID inogona kuone m'Overview tab, mu sidebar yedu pane "API"
3. Shandisa Zone ID iye

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

Shandisa izvi constants mumabhurangi ako `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. Mu WordPress admin yako, penda Ultimate Multisite > Settings
2. Panda ku "Domain Mapping" tab
3. Pinda kunge zvakawanda ku "Host Integrations"
4. Shanda integration ya Cloudflare
5. Panda ku "Save Changes"

## How It Works {#how-it-works}

### Subdomain Management {#subdomain-management}

Kana usawane website wekare mu subdomain multisite installation:

1. Integration inenge request ku API ya Cloudflare kuti vakaa record CNAME yakano subdomaine
2. Subdomain iweine kuitwa proxied neCloudflare chete (izviro zviri kuendesa nefilters)
3. Kana site ine kuva, integration ichakoresa subdomain yayo kuenda kuCloudflare

### DNS Record Display {#dns-record-display}

Integration inenge inenge yakagadzirisa nzira yekuti DNS records dziveonekane mu Ultimate Multisite admin nekuti:

1. Inoita fetch DNS records zvine zvinhu neCloudflare
2. Inoone kana records dzinovaka (proxied) kana haina
3. Inoone zvinhu zvakawanda pamusoro peDNS records

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (zvinoreva "Cloudflare for SaaS" yakagadzirwa) ndicho chine Cloudflare chinoreva kuti vanhu vavo vaive zviri kuita domains dzenyanya neSSL pamwe ne network yenyu ya multisite. Iyi nzira inotarisirwa kune installations dzine domain mapping dzine multisite zvinoreva Cloudflare, nekuti Cloudflare inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge in

1. Muona dashboard ya Cloudflare, fanga (open) zone ya domain yako kuu.
2. Penda **SSL/TLS > Custom Hostnames**.
3. Ongeza origin ya kurekebisha (fallback origin) inayoonyesha IP au hostname ya seva yako.
4. Kwa kila domain la wateja linalohusishwa katika Ultimate Multisite, ongeza entry ya Custom Hostname kwenye Cloudflare. Unaweza kufanya hatua hii kwa kutumia Cloudflare API.
5. Cloudflare itatoa na kurekebisha (renews) TLS certificates kwa kila custom hostname kiotomatiki mara tu DNS ya mteja inapoonyeshwa kwenye mtandao wako.

Kwa marejeo kamili ya API, zingatia [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Sasisho la Istilahi
Kuanzia Ultimate Multisite v2.6.1, kipengele hiki kinaitwa **Cloudflare Custom Hostnames** katika mipangilio na lebo zote za plugin. Vitu vya zamani vilitumia jina "Cloudflare for SaaS", ambalo ni jina la bidhaa ya Cloudflare iliyoko chini yake.
:::

## Maelezo Muhimu {#how-it-differs-from-the-standard-cloudflare-integration}

Kuanzia sasisho za hivi wa Cloudflare, wildcard proxying sasa inapatikana kwa wateja wote. Hii inamaanisha kwamba usambazaji (integration) wa DNS wa kawaida wa Cloudflare hauwezi kuwa muhimu sana kwa ajili ya kuweka multisite ya subdomain kuliko ilivyokuwa hapo awali, kwani unaweza tu kuweka rekodi ya wildcard DNS kwenye Cloudflare.

## Kutatua Matatizo {#setting-up-cloudflare-custom-hostnames}

### Mashtakato ya Muunganisho wa API {#important-notes}
- Thibitisha kuwa api token yako ni sahihi na ina ruhusa zinazohitajika
- Angalia kwamba Zone ID yako ni sahihi
- Hakikisha kwamba akaunti yako ya Cloudflare ina ruhusa zinazohitajika

### Subdomain Haikuongezwi {#troubleshooting}
- Angalia logs za Ultimate Multisite kwa ujumbe wowote wa makosa (error messages)
- Thibitisha kuwa subdomain haikuongezwa tayari kwenye Cloudflare
- Hakikisha kwamba mpango wako wa Cloudflare unasaidia idadi ya rekodi za DNS unazozifanya

### Matambudziko ekupenyu (Proxying Issues) {#api-connection-issues}
- Kana haunoda kuti subdomains zvinopenyu (proxied) zvinhu, unogona kushandisa filter inosanganisira `wu_cloudflare_should_proxy`.
- Mazuva maviri, zvinhu zvakawanda hazvazovironga kana vachipenyuka kana vachipenyuka (e.g., functions dzakawanda dzinopenyuka dzinoramba zvinopenyuka).
- Rurimi rine chokwadi: Tongedzera kushandisa Page Rules dzako Cloudflare kuti tichizivisa cache (bypass the cache) kwepages dzakawanda dzinopenyuka.
