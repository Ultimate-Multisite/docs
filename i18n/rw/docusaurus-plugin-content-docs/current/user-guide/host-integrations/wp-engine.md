---
title: Ubwumvikane bw'WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Urugerer Integration na WP Engine

## Umuhiza (Overview) {#overview}
WP Engine ni platform ya hosting ya WordPress y'ukoza (managed) itenziro ry'umukono (premium) y'WordPress, itanga uburyo bw'ubwujgwa bwo gukora (optimized performance), ubwujgwa bwo kwizera (security), no guhindura (scalability) ku bitenziro bya WordPress. Urugerer uyu rishobora gukora gukoresha domain syncing mu buryo bw'umukono (Ultimate Multisite) n'WP Engine.

## Icyemezo (Features) {#features}
- Domain syncing y'umukono (Automatic domain syncing)
- Ubwujgwa bwo subdomain ku bitenziro bya multisite (Subdomain support for multisite installations)
- Urugerer uyu rishobora gukoresha neza n'izindi z'WP Engine zikoresheye (Seamless integration with WP Engine's existing systems)

## Icyemezo (Requirements) {#requirements}
Urugerer uyu rishobora kumenya imyitwarire mu gukora ku WP Engine kandi rishobora gukoresha API ya WP Engine y'umukono. Nta ko hari uburyo bwo kwandika (configuration) bw'umukono w'ibindi n'ubwujgwa bwo gukora (configuration) n'uburyo bukurwa mu file `wp-config.php` n'urashobora gushyira cyangwa guhindura uburyo ufite:

```php
define('WPE_APIKEY', 'your_api_key'); // Uburyo bwo kwandika bwiza (Preferred method)
// CYO
define('WPE_API', 'your_api_key'); // Uburyo bukurwa mu buryo bwo hagarara (Alternative method)
```

## Inshingiro z'Urugerer (Setup Instructions) {#setup-instructions}

### 1. Gukora Icyemezo ku Plugin ya WP Engine {#1-verify-wp-engine-plugin}

Iyo ugiye gukora ku WP Engine, plugin ya WP Engine yishobora yari yakoreshejwe kandi yakagizeho. Kumenya ko:

1. Plugin ya WP Engine yari yakoreshejwe
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` yari yari yakuriye

### 2. Gukora Urugerer (Enable the Integration) {#2-enable-the-integration}

1. Mu admin ya WordPress, gukora Ultimate Multisite > Settings
2. Gukoresha tab "Domain Mapping"
3. Gukoresha ibyo ku mwera "Host Integrations"
4. Gukora urugerer rwa WP Engine
5. Gukoresha "Save Changes"

## Uburyo Bwo Gukora (How It Works) {#how-it-works}

### Domain Syncing {#domain-syncing}

Iyo domain yari ikorwa mu Ultimate Multisite:

1. Urugerer rishobora gukoresha API ya WP Engine kugira ngo yagizeye domain ku bitenziro bya WP Engine yawe
2. WP Engine irashobora gukora uburyo bwo kwandika domain no guhindura SSL certificate (SSL certificate issuance)
3. Iyo domain mapping ikorwa, urugerer rishobora guhindura domain ku bitenziro bya WP Engine

### Ubwujgwa bwo Subdomain {#subdomain-support}

Kugero ku uburyo bwo kubyara subdomain multisite:

1. Uburyo bwa integration yagira gukoresha umubyeyi w'subdomain mu WP Engine mu gihe hari uburyo bwo site run cyane.
2. WP Engine yagira gukora ubushobozi bw'subdomain.
3. Iyo site irakoreshwa, uburyo bwa integration yorera subdomain ku WP Engine.

## Inyandiko Zikomeye {#important-notes}

### Wildcard Domains (Domains zishobora guhindurwa) {#wildcard-domains}

Mu gihe hari uburyo bwo subdomain multisite, bitewe n'ubwujobozi bw'WP Engine kugira ngo ushije ku kumenya umubyeyi w'wildcard domain. Ibi bikunda kubyara ko subdomains cyose zishobora gukoreshwa mu buryo bw'umwihariko nta kuyobora gukoresha yizewe, nta kumenya yizewe.

### SSL Certificates (Certificates za SSL) {#ssl-certificates}

WP Engine yagira gukora ubushobozi bwo guhindura no gukoresha SSL certificate ku gihe cyose cyo subdomain zishobora gukoreshwa mu buryo bw'integration irimo. Nta ko hari uburyo bwa gukoresha cyangwa gukora ibindi byo.

## Guhagarara Icyo Hari Ikibazo (Troubleshooting) {#troubleshooting}

### Icyemezo Cy'API Connection Issues {#api-connection-issues}
- Gukoresha umubyeyi w'WP Engine kumenya ko yari yakoreshwa kandi yari yagize uburyo bwa gukora.
- Niba wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wumva ko wari wum
