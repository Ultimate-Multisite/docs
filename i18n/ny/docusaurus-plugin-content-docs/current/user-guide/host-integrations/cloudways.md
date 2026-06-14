---
title: Kuteteza Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## Zomwezi (Overview)
Cloudways ndi platforma ya ku host cloud yomwe imaphatira kuti mupereke WordPress sites pa zinthu zina za cloud monga DigitalOcean, AWS, Google Cloud, ndi zina. Kukhala kwa integration iyi kumaphatikiza synchronization ya domain ndi ulamulira SSL certificate mmodzi wopereka Ultimate Multisite ndi Cloudways.

## Mafunso (Features)
- Synchronization ya domain yomwe imaphatika
- Ulamulira SSL certificate
- Kuchuluka kwa domains zina
- Kuwonjezera DNS kuti certificates za SSL zikukhale

## Zomwe Zikufunika (Requirements)
Zomwe zimenezi zikuyenera kudziwika m'wp-config.php yanu:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Mmodzi wopereka, muli ndi ulemu:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Zomwe Zikufunika Kukhazikitsa (Setup Instructions)

### 1. Gundikira API Credentials ya Cloudways

1. Kodi muli m'dashboard ya Cloudways?
2. Kodi muli m'Account > API Keys?
3. Gundikira API key ngati simukuti muli ndiwo.
4. Kopya email yanu ndi API key yanu.

### 2. Gundikira Server ID ndi Application IDs Yanu

1. M'dashboard ya Cloudways, ndi ulemu "Servers".
2. Kose server yomwe imaphatika WordPress multisite yanu.
3. Server ID limaphatikizidwa m'URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Kodi muli m'Applications ndikose application ya WordPress yanu.
5. App ID limaphatikizidwa m'URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Kulemba Constants ku wp-config.php

Limbani constants zina m'wp-config.php yanu:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

If you have additional **external** domains (outside your multisite network) that should always be kept on the Cloudways aliases list:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Do not include your own network's wildcard
Do **not** add `*.your-network.com` (or any subdomain pattern of your own network) to
`WU_CLOUDWAYS_EXTRA_DOMAINS`. See [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall)
below for why this prevents per-tenant SSL certificates from being issued.
:::

### 4. Enable the Integration

1. In your WordPress admin, go to Ultimate Multisite > Settings
2. Navigate to the "Domain Mapping" tab
3. Scroll down to "Host Integrations"
4. Enable the Cloudways integration
5. Click "Save Changes"

## How It Works

### Domain Syncing

When a domain is mapped in Ultimate Multisite:

1. The integration retrieves all currently mapped domains
2. It adds the new domain to the list (along with a www version if applicable)
3. It sends the complete list to Cloudways via the API
4. Cloudways updates the domain aliases for your application

Note: The Cloudways API requires sending the complete list of domains each time, not just adding or removing individual domains.

### SSL Certificate Management

After domains are synced:

1. The integration checks which domains have valid DNS records pointing to your server
2. It sends a request to Cloudways to install Let's Encrypt SSL certificates for those domains
3. Cloudways handles the SSL certificate issuance and installation

Kutete kukhulupirira **standard** (non-wildcard) Let's Encrypt certificates ku Cloudways. Ngati mukuwera pattern ya wildcard mu `WU_CLOUDWAYS_EXTRA_DOMAINS`, kukhala `*.` kumalira pansi pa SSL request — pattern ya wildcard yimeneza pansi pa installation yomwezi. Kuti utendeka certificate ya wildcard ku Cloudways, mutendeka uti mukuwera wameneza manema, koma kulipira lilo lili lopangidwa kwa domain zosonse (pwera lilo lili lopulilira pansi).

## Extra Domains

Constant ya `WU_CLOUDWAYS_EXTRA_DOMAINS` imakuwera kuti mukuwera domains **external** zomwe zimeneza kuti zikuperekedwa m'aliases list ya Cloudways application. Mukuwera kuwera kuti:

- External domains zomwe simenezedwa ndi Ultimate Multisite (mwachitsanzo, marketing site yomwe imapereka Cloudways application yomweyi).
- Domains zosonse kapena staging zomwe mukufuna kuti zimeneze m'aliases list ya application.

**Musamukwera** constant iyi kuti mukuwera subdomain ya mitengo yanu (mwachitsanzo, `*.your-network.com`). Ngati mukuwera SSL ya wildcard, mukuwera lilo lili lopulilira pansi.

## Zomwe Zikufunika — Pitfall ya Wildcard SSL

Mwayi wosonyeza wosonyeza poyenera setup ya Cloudways yomweyi yomwezi ndi kuwera wildcard monga `*.your-network.com` mu `WU_CLOUDWAYS_EXTRA_DOMAINS`, kapena kuti mukuwera SSL ya wildcard ya Cloudways kwa wildcard iwo.

**Ngati mukuwera izi, Cloudways idzakhudza kukhala komwezi Let's Encrypt certificates kwa domain zosonse zomwe Ultimate Multisite imapereka.** Cloudways imalimbikitsa certificate ya SSL yomweyi ikulimbikitsidwa pa application m'moyo wamenezi, ndipo certificate ya wildcard yomweyi imapereka pa application imalimbikitsa issuance ya Let's Encrypt kwa domain zosonse zomwe integration imaperekera.

### Setup ya Cloudways SSL yomweyi yomwezi kwa Ultimate Multisite network

1. Muwira tab ya **SSL Certificate** ya Ultimate Multisite, shika **standard Let's Encrypt certificate** inayofunika tu `your-network.com` na `www.your-network.com` — **sio wildcard**.

2. Usiwape `*.your-network.com` (au mfumo wowote wa subdomain wa mtandao wako) kwenye `WU_CLOUDWAYS_EXTRA_DOMAINS`. Weka hicho constant kwa ajili ya **domains za nje** tu.

3. Fungua wildcard ya subdomain kwa kila mteja kwenye kiwango cha **DNS** tu (rekodi ya `A` kwa `*.your-network.com` inayopangilia IP ya server yako ya Cloudways) ili subsites ziweze kufikiwa. SSL kwa domains za kibinafsi zilizopangwa ni lazima itolewe kiotomatiki na integration kupitia Let's Encrypt.

Kama domains za kibinafsi za wateja wako hazina SSL, zingatia tab ya Cloudways SSL. Ikiwa kuna wildcard certificate inayoifanya kazi hapo, futa iwe, toa tena standard Let's Encrypt certificate kwa domain kuu ya mtandao tu, na futa maingiliano yoyote ya wildcard kutoka kwenye `WU_CLOUDWAYS_EXTRA_DOMAINS`. Kisha jaribu upya kuweka mapping ya domain (au subiri moja inayofuata) na integration itaanza kutolea certificates kwa kila domain tena.

## Matatizo (Troubleshooting)

### Matatizo ya Muunganisho wa API
- Angalia kwamba email yako na api key ni sahihi
- Angalia kwamba server yako na application IDs ziko sahihi
- Hakikisha kuwa akaunti yako ya Cloudways ina ruhusa zinazohitajika

### Matenda ya SSL Certificate

- Cloudways imafuna kuti domaina (domains) akune DNS records zoshipira ku server wako m'moyo m'moyo muiteka pa kupanga SSL certificates.
- Integration imapini DNS records m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m'moyo m
