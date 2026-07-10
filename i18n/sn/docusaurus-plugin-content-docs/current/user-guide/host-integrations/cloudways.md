---
title: Kugadzirwa neCloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integration neCloudways {#cloudways-integration}

## Zvinoro (Overview) {#overview}
Cloudways ndiri platform yekubatsirwa (managed cloud hosting) inotenderera kuti uingane WordPress sites pamweche dzakare kubva kuproviders vecloud vese zvakaita DigitalOcean, AWS, Google Cloud, uye zvinhasi zvose. Integration iyi inokubatsira kuunganidza domain automatically nekuvashandisa SSL certificates pakati pe Ultimate Multisite neCloudways.

## Zvinoreva (Features) {#features}
- Kuunganidza domain automatically
- Kuwana SSL certificate management
- Kutarisa extra domains
- DNS validation yekuti SSL certificates zvakwanise kuenda

## Zvinoreva (Requirements) {#requirements}
Zvinotora kuti constants izvi zvinofanira kuonekwa mufile wako `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Kuti unenge uine, unogona kutarisa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Mhando Yekubatanidza (Setup Instructions) {#setup-instructions}

### 1. Shandisa API Credentials dzako dzeCloudways {#1-get-your-cloudways-api-credentials}

1. Ingira mu dashboard yako yeCloudways
2. Enda ku "Account" > "API Keys"
3. Gera API key kana usina iwe ine
4. Shandisa email yako uye API key yako

### 2. Shandisa Server ID neApplication IDs dzako {#2-get-your-server-and-application-ids}

1. Mu dashboard yako yeCloudways, enda ku "Servers"
2. Chibvumira server inotenderera WordPress multisite yako
3. Server ID inogone kuone mu URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Enda ku "Applications" uye chibvumira application yako yeWordPress
5. App ID inogone kuone mu URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Shandisa Constants mu wp-config.php {#3-add-constants-to-wp-configphp}

Shandisa constants izvi mufile wako `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Kana uri **external** domains (dzvany pachidzo paun dzako chineya) zvinhu zvakakosha kuti zvinoshandiswe mu Cloudways aliases list:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Usarudzi dzako dzako (your own network's wildcard) haunogone
kuti unenge uingise `*.your-network.com` (kana ndiyo pattern yechineya dzekubereko dzako) mu `WU_CLOUDWAYS_EXTRA_DOMAINS`. Shandisa [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) pano kuti uone zvinhu zvinokwanisa kuti izvi zvinhu zvakasiyana dze tenant (per-tenant SSL certificates) zvibereke.
:::

### 4. Chivisa Integration (Enable the Integration) {#4-enable-the-integration}

1. Mu admin ya WordPress yako, ndaenda ku Ultimate Multisite > Settings
2. Ndidzidira ku tab "Domain Mapping"
3. Ndidzidira kunge ku "Host Integrations"
4. Onge integration ya Cloudways
5. Ndidzidira "Save Changes"

## Izvi zvinhu zvinoreva (How It Works) {#how-it-works}

### Kuratidza Domain Syncing (Domain Syncing) {#domain-syncing}

Kana domain yakaitwa mapping mu Ultimate Multisite:

1. Integration inobhigira dziri ku mapalingana akasiyana-siyana
2. Inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge in

Kuti kune integration inoda inenge inoda **standard** (non-wildcard) Let's Encrypt certificates kuCloudways. Kana kana pattern ya wildcard mu `WU_CLOUDWAYS_EXTRA_DOMAINS` inoshatwa, iye inokero inoteka `*.` pfungwa pamba nepa SSL request — iweya wildcard yese haizviitwa neine integration iyi. Kuti ubatane certificate ya wildcard mu Cloudways, unofanira kuibata manually, asi kutamba zvinoita kunokurudzirwa kuteerera Let's Encrypt certificates dziri paku-domain dzakare mapped (ona pitfall pano).

## Extra Domains {#ssl-certificate-management}

Constant `WU_CLOUDWAYS_EXTRA_DOMAINS` inosimbisa kuti uingise domains **dzakaipa** dzine zvinhu dzinogadzirwa kuti zvinofanira kuenda pamba pe aliases dzakare Cloudways application. Shandisa iye kuti:

- Domains dzakaipa dzinovakwaniswa neUltimate Multisite (kuti zviri kune marketing site inoshamisa Cloudways application yese).
- Domains dzine staging kana parked kunoita kuti zvinotore pamba pe aliases dzakare dzakare.

**Usanisoni** iye constant kuti subdomain ya network yako yese (e.g. `*.your-network.com`).ona pitfall ye wildcard SSL inozuva pano.

## Zvinhu Zvinofanira Kuti Uve Ndizvo — Wildcard SSL Pitfall {#extra-domains}

Mufaro wekuti munenge unofunga kuti uingise wildcard se `*.your-network.com` ku `WU_CLOUDWAYS_EXTRA_DOMAINS`, kana kuti ukaitamba certificate ya Cloudways ya wildcard kune wildcard iye manually.

**Kana uri kuita iye, Cloudways ichairamba isingabatsiri kuipa Let's Encrypt certificates dzine per-tenant custom domains dzakare Ultimate Multisite inoshamisa.** Cloudways inaramba inenge inenge inenge certificate ya SSL inotevera pe application muna zvinhu zvakawanda, uye certificate ya wildcard yakare pamba pe application inokurudzirwa kuipa Let's Encrypt certificates dzine per-domain dzine integration iyi inoshandisa.

### Recommended Cloudways SSL setup for an Ultimate Multisite network {#important--wildcard-ssl-pitfall}

1. Muita munhuwo mu tabu **SSL Certificate** ya application ya Cloudways, shandisa **standard Let's Encrypt certificate** inoshavanira chete `your-network.com` ne `www.your-network.com` — haasi **haina** wildcard.
2. Usiita `*.your-network.com` (kana kana pattern ya subdomain yako yakanaka) mu `WU_CLOUDWAYS_EXTRA_DOMAINS`. Chivhira iye kune **external** domains chete.

3. Chinangwa subdomain wildcard chinotevera ku DNS chete (i `A` record yakatiipa `*.your-network.com` inoshavanira IP ya server yako ya Cloudways) kuti subsites zvibatsirwe. SSL yekuita custom domains dzakasiitirwa zvinotevera neintegration kubva mu Let's Encrypt.

Kana custom domains dzemutendatu dzinotariswa ndiri dzinotariswa, chine kuita check mu Cloudways SSL tab. Kana kune wildcard certificate inoshavanira pane, shandisa iye, shandisa standard Let's Encrypt certificate yekuita main network domain chete, uye shandisa entries dzakawanda dzemwildcard mu `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ndipo ushure re-trigger domain mapping (kana ushure wese) neintegration izvozvo izova kuita issuance ye certificates dzemdomain zvinotevera.

## Kuti Unenge Uyuva Matambudziko (Troubleshooting) {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

### API Connection Issues {#troubleshooting}
- Shandisa kuti email yako uye API key yako zvinhu zvakakosha.
- Shandisa kuti server yako uye application IDs yakatiipa zvinhu zvakakosha.
- Shandisa kuti Cloudways account yako inenge inoshavanira permissions zvinotariswa.

### Matambudziko anorwisi SSL Certificate {#api-connection-issues}
- Cloudways inoda kuti zvinodiwa kuti domena (domains) dzine DNS records dzine mweya wakasimba ku server vako pfungwa yekutanga kuitika SSL certificates.
- Integration iyi inochinja DNS records pfungwa yekutanga kuitika SSL certificates.
- Kana SSL certificates hazvazovakubatsira, chine kuona kuti domena dzinogona dzine mweya wakasimba ku IP address ya server yako.
- **Domena dzine custom (per-tenant) dzine matambudziko ekuti hazvinobva neSSL?** Chinei tabwo ye SSL Certificate mu Cloudways application. Kana wildcard certificate (inowakwanisa kuitika, inowanikwa manually, kana inowakwanisa `*.your-network.com`) inoratidza kuti Cloudways haizovakubatsira Let's Encrypt certificates dzine domena dzine custom zvinobva zvinhu. Rinoita iwe kuva necertificate ya Let's Encrypt yakasimba inowakwanisa chete domain yakanaka (main network domain) (`your-network.com`, `www.your-network.com`) uye chirairei entries dzine wildcard mu `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ndipo ushaye retrigger domain mapping (kana ushaye kuti uonewo rinoitika) uye integration iyi inoda kuitika certificates dzine domena dzine custom.

### Domena Haingoperekwa {#ssl-certificate-issues}
- Chinei Ultimate Multisite logs kuti chine error messages ipapo.
- Chinei kuti domena haingoperekwa pfungwa yekutanga ku Cloudways.
- Chinei kuti plan yako ya Cloudways inobatsira kuita zvinhu zvakawanda zvinogona kuitika (number of domains) dzinogona dzine kuenda.
