---
title: Ubwumvikane bw'Ubushobozi bwa Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Urugererine (hPanel) Integration {#hostinger-hpanel-integration}

## Inshuro {#overview}

Hostinger ni umukoresha wamwe n'ubwumuri bw'ubwumuri bwa web, kandi uba n'ibinyabiko by'uburyo bwo gukora ibyo mu panel y'ubwumuri y'u Rwanda, itarikiye cyane itarikiye hPanel. Urugererine rya Ultimate Multisite ryitwa neza ku gukoresha uburyo bw'uburyo bwo gushyira umuduro w'ibanga (domain syncing) hagati ya Ultimate Multisite n'hPanel ya Hostinger, kandi ibyo bituma wumva uba mufite ubwumuri bwa domain cyangwa subdomains mu buryo bwo gukora ku WordPress admin yawe.

## Icyiciro {#features}

- Gukoresha automatikira umuduro w'ibanga (addon domain) mu hPanel
- Gukoresha automatikira subdomains mu hPanel (ho mu gihe utera multisite y'ubwumuri bwa subdomain)
- Gutera ibanga iyo ugaragaje (mapping) bitewe n'ibyo byo gutera ku itariki
- Uburyo bwiza bwo gushyira umukono n'uburyo bwo gukoresha API ya hPanel y'ubwumuri.

## Icyemezo {#requirements}

Kugira ngo uburyo bwa Hostinger uture, ugomba kuba ufite:

1. Umukono (account) wa Hostinger w'ubwumuri bwa hPanel
2. Token ya API ku Hostinger
3. Inyandiko zikurikira mu file yawe `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Urugererine, uba mufite ubwumuri bwo gukoresha:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Uburyo bw'uburyo bwa API bukurikirana
```

## Inshingano z'Urugererine {#setup-instructions}

### 1. Gukora Token ya API ya Hostinger Yawe {#1-generate-your-hostinger-api-token}

1. Yitera ku ukoresha wa Hostinger kandi ugenda mu hPanel
2. Genda kuri **Account Settings** → **API Tokens**
3. Gukora **Create New Token** (Gukora token shya)
4. Mufite izina ryiza ku token yawe (urugero: "Ultimate Multisite")
5. Shobora gukoresha ibyemezo byo kubona:
   - Domain management (Uburyo bwo gutera ibanga)
   - Subdomain management (Uburyo bwo gutera subdomains)
6. Gukoresha token y'uburyo bwawe kandi uguzaga mu buryo bwiza

### 2. Gutangira Umukono W'Ubwumuri Bwawe {#2-find-your-account-id}

1. Mu hPanel, genda ku **Account Settings** → **Account Information**
2. Umukono wawe (Account ID) ugaragaje kuri iyo peji
3. Gukoresha kandi uguzaga Ibi cyemezo mu gihe cy'ibindi byo.

### 3. Gutera Inyandiko ku wp-config.php {#3-add-constants-to-wp-configphp}

Gusubiza ibi nyandiko mu file yawe `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Iyo ugiye uzi ko Hostinger account yashobora yitera API endpoint y'umutwe, ushobora gukoresha:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Gukoresha Integration (Enable the Integration) {#4-enable-the-integration}

1. Mu WordPress admin yawe, gukora **Ultimate Multisite > Settings**
2. Gukoresha tab ya **Domain Mapping**
3. Gukunda ku mwanya wa **Host Integrations**
4. Gukoresha integration ya **Hostinger (hPanel)**
5. Gukora **Save Changes**

## Uburyo Bwo Gutera (How It Works) {#how-it-works}

### Addon Domains (Domains Zishobora Kumenya) {#addon-domains}

Iyo ugiye gukoresha domain mu Ultimate Multisite:

1. Integration yitera request ku API ya Hostinger kugira ngo itere domain yakwa n'addon domain
2. Domain yitera kugaragaza ku directory yawe (root directory)
3. Iyo ugiye gukora domain mapping, integration yitera gukoresha addon domain mu hPanel

### Subdomains (Subdomains) {#subdomains}

Iyo ugiye gukora subdomain multisite installations, iyo umwe site wugushwa:

1. Integration yitera gukoresha igice cy'subdomain ku domain yakwiye
2. Iyo itera request ku API ya Hostinger kugira ngo itere subdomain
3. Subdomain yitera kugaragaza ku directory yawe (root directory)

## Inama Zikomeye (Important Notes) {#important-notes}

- Integration yitera gukoresha REST API ya Hostinger kugira ngo yifashanye n'account yawe
- Iyo API token yawe it어야ze uburyo bwo gutera domain no subdomain
- Integration itera DNS configuration; domain zishobora kugaragaza mu Hostinger account yawe

- API requests zishobora gukoresha HTTPS neza
- Kugira ngo API token yawe ikomeye kandi yitera, ushobora kuyashiramo mu buryo bw'umunsi.

## Gukora Icyo Cyiza (Troubleshooting) {#troubleshooting}

### Api Connection Issues {#api-connection-issues}

- Shobora ko API token ya umukono w'ubwoba kandi yashya (has not expired).
- Shobora uko Account ID yawe yari yiza.
- Shobora kugira ubufasha bw'umukono w'API (API token) ubwo mu gukoresha ibintu by'ubwoba bwa domain.
- Shobora kumenya ko account yawe ya Hostinger ikora neza kandi ikaba yari itandukanye.

### Domain Itashoboraga Kurushwa (Domain Not Added) {#domain-not-added}

- Shobora gushakira ibyemezo by'ibintu by'umwihariko mu Ultimate Multisite logs kugira ngo uburyo bwo gushobora kurushwa bw'ubwoba.
- Shobora kumenya ko domain yari itandukanye ku account yawe ya Hostinger.
- Shobora kumenya ko account yawe ya Hostinger yashobora kuba yakoresheje uburyo bwo gushyira addon domains (limit).
- Shobora kugira umwanya ko domain yari itandukanye ku nameservers za Hostinger.

### Icyemezo cy'SSL Certificate (SSL Certificate Issues) {#ssl-certificate-issues}

- Umuco w'integration (integration) utagira uburyo bwo gushyira SSL certificate.
- Hostinger igira uburyo bwo gutanga SSL certificates by'umwihariko ku AutoSSL.
- Shobora gukoresha SSL certificates mu hPanel cyangwa se mu gihe cy'SSL/TLS.
- Umuco w'integration utagira uburyo bwo gushyira Let's Encrypt n'AutoSSL ya Hostinger.

## Ubwoba (Support) {#support}

Kugira ubufasha ku ngaruka y'integration ya Hostinger, shobora gukoresha ibi:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
