---
title: Ubwumvikane bw'Ubushobozi bwa Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Ubumenyeshye n'Umuhanda (Cloudways Integration)

## Umuvugizi (Overview) {#overview}
Cloudways ni platform y'ubwumunsi w'ubwumunsi (managed cloud hosting platform) ituma ubufasha ukwibona WordPress sites ku buryo bushobora buba mu ntego z'ubwumunsi (cloud providers) n'ibindi, nk'uko DigitalOcean, AWS, Google Cloud, n'ibindi. Umuhanda utuma ubushobozi bwo gukoresha uburyo bw'ubwumunsi (automatic domain syncing) no gukemura SSL certificate management hagati ya Ultimate Multisite na Cloudways.

## Icyiciro (Features) {#features}
- Ubwumunsi w'ubwumunsi (Automatic domain syncing)
- Gukemura uburyo bwo SSL certificate management
- Ubufasha mu ntego z'ibindi (Support for extra domains)
- Gufatira DNS validation ku buryo bwo SSL certificates

## Icyemezo (Requirements) {#requirements}
Icyemezo cyo mu gihe cy'ubwumunsi (constants) byiza mu file yawe `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Uburyo bwo gukoresha (Optionally), ushobora kandi gukora:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Inshingano zo Gukora (Setup Instructions) {#setup-instructions}

### 1. Gukoresha Uburyo bwo API Credentials yawe ya Cloudways {#1-get-your-cloudways-api-credentials}

1. Gukoresha uburyo bwo gukoresha (Log in) mu dashboard yawe ya Cloudways
2. Gukoresha "Account" > "API Keys"
3. Gutera API key niba nta yihariye umwe wari ufite
4. Gukora email yawe no API key yawe

### 2. Gukoresha ID yawe ya Server na Application {#2-get-your-server-and-application-ids}

1. Mu dashboard yawe ya Cloudways, gukoresha "Servers"
2. Gutera uburyo bwo server aho WordPress multisite yawe yari ifite (hosted)
3. Umuhurindi w'ubwumunsi (Server ID) uri mu URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gukoresha "Applications" no gutera application yawe ya WordPress
5. Umuhurindi w'application (App ID) uri mu URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Gutera Icyemezo mu wp-config.php {#3-add-constants-to-wp-configphp}

Gutera icyemezo cyizwi (constants) yiziza mu file yawe `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'email ya ko Cloudways yawe');
define('WU_CLOUDWAYS_API_KEY', 'api key ya ko');
define('WU_CLOUDWAYS_SERVER_ID', 'id ya ko server ya');
define('WU_CLOUDWAYS_APP_ID', 'id ya ko app ya');
```

Iyo hari uza **external** domains (izindi ntabwo mu gukoresha network yawe) zishobora guhindurwa mu list ya aliases ya Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Usaba uburyo bwo gukoresha wildcard (wildcard) cyangwa izindi ntabwo mu gukoresha network yawe
Usaba `*.your-network.com` (cyangwa uburyo bwose bwa subdomain y'ubwoko bwawe) ku `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ubwumvikane cyane ni ko ibi byitera ko nta certificat SSL cy'uko cy'ubwoko bwawe bishobora guhindurwa. Obwoba uza kumenya uburyo bwo gukoresha [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) ku gihe cy'ibindi.
:::

### 4. Gukoresha Icyemezo (Enable the Integration) {#4-enable-the-integration}

1. Mu admin ya WordPress, gukora Ultimate Multisite > Settings
2. Gukoresha "Domain Mapping" tab
3. Gukoresha "Host Integrations" kuko uza kumenya ibyo bishobora gukora
4. Gukoresha (Enable) Cloudways integration
5. Gukoresha "Save Changes"

## Uburyo Bwo Gukora Icyemezo {#how-it-works}

### Gukoresha Domains (Domain Syncing) {#domain-syncing}

Iyo domain ikoreshwa mu Ultimate Multisite:

1. Icyemezo cy'ubwoko (integration) kigera ubuwo bose bwa domains byari bishobora gukoreshwa
2. Kigaragaza uwo domain w'urugero (www version) n'ibindi byo bifite ibyo
3. Kigenda uwo domain mu list ya Cloudways ku mpamvu y'API
4. Cloudways igira ubwumvikane bwa aliases yawe kuri application yawe

Uburyo: API ya Cloudways ikoresha gukoresha ubuwo bose bwa domains mu gihe cyose, ntabwo gukora ibindi byo (gukoresha cyangwa guhindura) domain runaka.

### Uporoko rwa SSL Certificate (SSL Certificate Management) {#ssl-certificate-management}

Nyuma y'uko domains zishoborwe gukoreshwa:

1. Icyemezo cy'ubwoko kigera uwo domain bishobora gukoresha DNS records byari bishobora guhindurwa ku server yawe
2. Kigenda mu gihe cyo gukoresha Cloudways kugira ngo yitangire Let's Encrypt SSL certificates ku domain ibyo
3. Cloudways igira ubwumvikane bwo gukoresha no gukoresha (install) SSL certificate

```php
// Custom logic when checkout completes
```

Icyo yoseme uburyo mu gihe cyo gukoresha integration, igikorwa cyangwa ikibazo cyo kwerekana **standard** (non-wildcard) Let's Encrypt certificates ku Cloudways. Niba hari pattern ya wildcard muri `WU_CLOUDWAYS_EXTRA_DOMAINS`, uburyo bwo gukoresha `*.` bishobora guhindurwa mbere y'irengera rya SSL — ibyo wildcard cyangwa se ntibaye bitangira gukoreshwa n'iki integration. Kugira ngo witegereze certificate ya wildcard ku Cloudways, uza kuba ufite ubushobozi bwo kuyerekana mu buryo bw'ingenzi (manually), ariko gukora ibyo bituma gukora cyangwa kwerekana Let's Encrypt kwa domain zikoreshwa (mapped custom domains) byo zishobora kubyara (see the pitfall canye).

## Extra Domains {#extra-domains}

Icyemezo cyo `WU_CLOUDWAYS_EXTRA_DOMAINS` kugaragaza ko uza kuba ufite ubushobozi bwo gukoresha domain zikomeye **external** zishobora guhindurwa ku list ya aliases y'application ya Cloudways. Yiza cyane kugira ngo utereze ibi:

- Domain zikomeye zishobora guhindurwa n'Ultimate Multisite (urugero, uburyo bwo gukoresha marketing site runaka mu application ya Cloudways).
- Domain zikomeye cyangwa za staging wifuza zo kubyara ku list ya aliases y'application.

**Ntuzwi** kugira ngo utereze iki constant ku wildcard ya subdomain ya urugero (urugero, `*.your-network.com`). Anga cyangwa ubona ibi bituma gukora cyangwa kwerekana SSL ya wildcard mu buryo bw'ingenzi (see the wildcard SSL pitfall canye).

## Icyemezo — Ubushobozi bwo SSL ya Wildcard ku Cloudways {#important--wildcard-ssl-pitfall}

Uburyo bwo gukora ikibazo cyo gukoresha uburyo bwo default ya Cloudways ni ugukoresha wildcard nk'urugero `*.your-network.com` mu `WU_CLOUDWAYS_EXTRA_DOMAINS`, cyangwa se kugira ngo utereze certificate ya SSL ya wildcard ku Cloudways kuri iyo wildcard.

**Niba ugiye iki, Cloudways izagira ubushobozi bwo kwitera Let's Encrypt certificates ku domain zikomeye (per-tenant custom domains) zishobora guhindurwa n'Ultimate Multisite.** Cloudways itera certificate ya SSL ikoreshwa kuri application mu gihe cyose, kandi certificate ya wildcard yashyiramo mbere kuri application bituma gukora ibyo Let's Encrypt byo domain zikomeye (per-domain) byo iki integration igaragara ko rigira.

### Ubushobozi bwo SSL ku Cloudways kugira ngo Urugendo rwa Ultimate Multisite ryitokeze {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Muze **SSL Certificate** mu gukoreshe mu tab ya Cloudways application, ugukoresha **standard Let's Encrypt certificate** uyu ukubwira `your-network.com` n'iyo `www.your-network.com` - **si** wildcard.
2. Usaba `*.your-network.com` (cyangwa uburyo bwose bwo subdomain mu gukoresha) mu `WU_CLOUDWAYS_EXTRA_DOMAINS`. Uru cyiza kugira ngo uziye iyo constant ya hoza **external** domains gusa.
3. Kuraho per-tenant subdomain wildcard ku kintu cy'DNS gusa (u record we `*.your-network.com` uyuhoze ku IP ya server ya Cloudways yawe) kugira ngo subsites zikoresheka. SSL kuri custom domains zawe zikoreshwa mu gihe cyiza igikorwa n'iyo gukoresha Let's Encrypt.

Niba custom domains zawe za tenants zikoresheje kandi zikoresheje SSL, usubiza tab ya Cloudways SSL. Niba hari wildcard certificate ikoreshejwe kuri iyo, usubiza, ukarira standard Let's Encrypt certificate ku domain y'ingwatiriro gusa, kandi usaba ibyo byose byo wildcard mu `WU_CLOUDWAYS_EXTRA_DOMAINS`. Nyuma, usubiza domain mapping (cyangwa usubiza iyo ya mbere) kandi integration izakomeza gufasha certificate kuri kila domain.

## Gukoresha Icyemezo (Troubleshooting) {#troubleshooting}

### Icyemezo cyo Gutangira n'API Connection Issues {#api-connection-issues}
- Usubiza ko email yawe n'api key yawe zishobora kuba zikoresheje.
- Usubiza ko server yawe n'application IDs yawe zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishobora kuba zishob

### Matatso y'SSL Certificate {#ssl-certificate-issues}

- Cloudways yitaba ko ibintu cyo mu gihe cyo gukoresha SSL certificates, ugomba ko domaini zishobora gushyira DNS records zikoresha ku server yawe mbere yitangira gufasha SSL certificates.
- Umuco (integration) yitaba DNS records mbere yashaka SSL certificates.
- Niba SSL certificates ntizera gufashwa, ugomba kwisobanura ko domaini zawe zishobora gushyiramo neza ku IP address ya server yawe.
- **Domaini zikoresha cyangwa zishobora gukoreshwa mu gihe cyo gukoresha SSL ntizera gufashwa?** Shobora kwihesha tab ya SSL Certificate mu application ya Cloudways. Niba certificate yitwa "wildcard" (yitangira ku mutwe, cyangwa yitangira kuri `*.your-network.com`) yituma, Cloudways ntizera gufasha Let's Encrypt certificates ku domaini zikoresha mu buryo bwa mbere. Shobora gutera uyu certificate n'ubwo (standard Let's Encrypt certificate) wifashije gukoresha gusa domaini y'ingenzi yawe (`your-network.com`, `www.your-network.com`) kandi ugusubiza ibintu byose bikoreshwa mu wildcard entries muri `WU_CLOUDWAYS_EXTRA_DOMAINS`. Nyuma, ugomba gukora cyangwa kugira umwaka (wait) uburyo bwa domain mapping (domaini zishobora gushyiramo) kandi umuco uzashaka SSL certificates ku domaini zikoresha mu gihe cyo gukoresha.

### Domaini ntizera yashyizwe {#domain-not-added}

- Shobora kwihesha Ultimate Multisite logs kugira ngo ushije ibindi byose.
- Shobora kwisobanura ko domaini ntacyari yashyizwe mu Cloudways.
- Shobora gushyira ngo uburyo bwa plan yawe ya Cloudways yishobore kubyara n'ubwo mu gihe cyo gushya domaini.
