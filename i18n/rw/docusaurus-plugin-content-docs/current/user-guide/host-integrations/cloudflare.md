---
title: Ubwumvikane bw'Ubuhanga bwa Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integration ya Cloudflare

## Umuhuku {#overview}
Cloudflare ni umuyobozi w'ubwoko bw'ubwoko bwa content (CDN) n'umuyobozi w'ubwoko bw'ubwoko (security provider) uwohushya no gukomeza uburenganzira mu buryo bwo gutera ku website. Iyi integration ituma uburyo bwo gukoresha domain byiza mu buryo bwa Ultimate Multisite n'Cloudflare, cyane ku gihe cyo gukora subdomain multisite installations.

## Amakuru {#features}
- Gukora subdomain mu Cloudflare
- Uburyo bw'ubwoko (Proxied) bufungwa
- Gukoresha DNS records
- Uburyo bwo kubona DNS records mu dashboard ya Ultimate Multisite

## Amakuru y'Ubwihutiriramo {#requirements}

Icyo kintu cyiza cyabone mu file `wp-config.php` yawe:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Inama y'Ubwihutiriramo {#setup-instructions}

### 1. Gukoresha API Key yawe ya Cloudflare {#1-get-your-cloudflare-api-key}

1. Yitera ku dashboard yawe ya Cloudflare
2. Gukora kuri "My Profile" (gukoresha email yawe mu kigwaramo cy'ibyo byo ku gice cy'umunsi)
3. Gukoresha "API Tokens" ku menu
4. Kora API token yashya yakoresheje amakuru yizero:
   - Zone.Zone: Read (Gusobanura/Gushobora kubona)
   - Zone.DNS: Edit (Gusobanura/Gukora)
5. Gukopya API token yawe

### 2. Gukoresha Zone ID yawe {#2-get-your-zone-id}

1. Mu dashboard yawe ya Cloudflare, gukoresha domain uwo wumva wumva gukoresha
2. Zone ID yishobora kubone mu tab "Overview", mu kigwaramo cy'ibyo byo ku gice cy'umunsi ku kinyuma mu gihe cyo "API"
3. Gukopya Zone ID

### 3. Gutera Amakuru mu wp-config.php {#3-add-constants-to-wp-configphp}

Gusobanura amakuru yizero mu file `wp-config.php` yawe:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Gutera Integration {#4-enable-the-integration}

1. Mu admin yawe ya WordPress, gukoresha Ultimate Multisite > Settings
2. Gukora ku tab "Domain Mapping" (Gukoresha uburyo bwo gutera domain)
3. Gukora ku kinyuma ku gihe cyo "Host Integrations"
4. Gutera integration ya Cloudflare
5. Gukoresha "Save Changes"

## Icyo Kintu Cyiza Cyabone {#how-it-works}

### Umuco w'ubwoko (Subdomain Management) {#subdomain-management}

Iyo hari website yashya itangwa mu subdomain multisite installation:

1. Icyemezo y'ubwumwebwe yitangira umusho ku API ya Cloudflare kugira record CNAME kuri subdomain.
2. Subdomain irashyizwe mu buryo bwo kuboneka (proxied) muri Cloudflare mu gihe cyiza (iki gice cyashobora guhindurwa n'amasezerano).
3. Iyo uburyo bwo kuboneka (site) bishoborwe, igikorwa cyitangira kigira umusho ku subdomain kuri Cloudflare.

### Ubwumwebwe bw'DNS Record {#dns-record-display}

Icyitangira cyitangira yashobora gukunda DNS record mu admin ya Ultimate Multisite bikoresha:

1. Gukoresha DNS records by'uko muri Cloudflare
2. Kubona n'ubwo record ni byashyizwe mu buryo bwo kuboneka (proxied) cyangwa si
3. Kugira ibindi by'ingenzi ku DNS records

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (yo yari itangira ari "Cloudflare for SaaS") ni ikoranabuhanga ry'Cloudflare ryashobora kugira ngo abakoresha bako domain cyangwa imyitwarire yabo yashyizwe mu SSL muri network ya multisite yawe. Ni uburyo bwiza bwo gukoresha multisite yashyizwe ku domain (domain-mapped) yakoresheje Cloudflare, kuko Cloudflare igira uburyo bwo gutangira no guhindura SSL certificate kuri kila domain y'ibyo byose mu buryo bw'umwihariko.

### Uburyo bwo gukunda ibintu ku itangira (How it differs from the standard Cloudflare integration) {#how-it-differs-from-the-standard-cloudflare-integration}

| | Itangira ry'standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Uburyo** | Gukora DNS records by'uko mu subdomain | Guhindura domain (mapped) yashyizwe mu SSL ya Cloudflare |
| **Buri gukoresha** | Multisite yashyizwe ku subdomain | Multisite yashyizwe ku domain (domain-mapped) |
| **SSL** | Gukora mu gihe cyiza (Handled separately) | Kugirwa n'Cloudflare mu buryo bw'umwihariko |

### Guhindura Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Iki n'ubwo mu dashboard yawe ya Cloudflare, yemeza zone ya domain yawe yakomeye (main domain).
2. Gukora ku **SSL/TLS > Custom Hostnames**.
3. Shobora kugabanya origin (fallback origin) uburyo bwo gushyira umwujiza w'ubwoko (server's IP cyangwa hostname).
4. Ku gihe cyose cyo domain yawe yashyiramo mu Ultimate Multisite, ugomba gushyira entry ya Custom Hostname mu Cloudflare. Shobora gukora uwo muntu mu buryo bwo gukoresha Cloudflare API.
5. Iki gice cy'uko Cloudflare igira no gukoresha (issues) no gufata (renews) TLS certificates ku gihe cyose cyo Custom Hostname, mu gihe DNS yawe yashyiramo mu rwego rwawe (network).

Kugira uburyo bwo gushobora gukoresha API yakuriye, ugomba gushakira [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Ubutumwa bw'ubwoko (Terminology update)
Kugira ngo Ultimate Multisite v2.6.1, uwo gice bishobora guhagarirwa nk'**Cloudflare Custom Hostnames** mu gihe cyose cyo plugin na ibindi byemezo (labels). Icyo kera cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cyo mu gihe cy

### Icyo mu gukoresha Proxying {#important-notes}

- Nta wumva subdomains kugira ngo zishobore kwirindutse (proxied), ukenya `wu_cloudflare_should_proxy` filter.
- Urugero, uburyo bwo gukoresha proxying guhindura ko ibintu byiza bitera neza (gukora) mu gihe cyose (e.g., uburyo bwo gukora ibyemezo by'ubwoko bw'administration kuri WordPress).
- Nshobora kugufasha gukoresha Page Rules za Cloudflare kugira ngo ubwoko bwa cache (cache) buvugire ku gihe cyose (bypass the cache) mu gihe cyo gukora ibyemezo by'ubwoko bw'administration.
