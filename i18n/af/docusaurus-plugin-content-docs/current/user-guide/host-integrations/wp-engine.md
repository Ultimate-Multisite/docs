---
title: WP Engine Integrasie
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integrasie {#wp-engine-integration}

## Oorsig {#overview}
WP Engine is 'n premium beheerde WordPress hosting platform wat geoptimaliseerde prestasie, sekuriteit en skaalbaarheid vir WordPress-webwerwe bied. Hierdie integrasie maak outomatiese domein-sinkronisering moontlik tussen Ultimate Multisite en WP Engine.

## Eienskappe {#features}
- Outomatiese domein-sinkronisering
- Subdomeinondersteuning vir multisite-installasies
- Naatlose integrasie met WP Engine se bestaande stelsels

## Vereistes {#requirements}
Die integrasie detecteer outomaties of jy op WP Engine host en gebruik die ingeboude WP Engine API. Geen bykomende konfigurasie is nodig nie, solank die WP Engine plugin aktief en korrek gekonfigureer is.

As jy egter die integrasie handmatig moet konfigureer, kan jy een van hierdie konstantes in jou `wp-config.php` lêer definieer:

```php
define('WPE_APIKEY', 'your_api_key'); // Voorkeur metode
// OF
define('WPE_API', 'your_api_key'); // Alternatiewe metode
```

## Opstel Instruksies {#setup-instructions}

### 1. Verifieer WP Engine Plugin {#1-verify-wp-engine-plugin}

As jy op WP Engine host, behoort die WP Engine plugin reeds geïnstalleer en geaktiveer te wees. Verifieer dat:

1. Die WP Engine plugin aktief is
2. Die lêer `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` bestaan

### 2. Aktiveer die Integrasie {#2-enable-the-integration}

1. Gaan in jou WordPress-administrasie na Ultimate Multisite > Settings
2. Navigeer na die "Domain Mapping" tab
3. Skrol na "Host Integrations"
4. Aktiveer die WP Engine integrasie
5. Klik op "Save Changes"

## Hoe Dit Werk {#how-it-works}

### Domein-sinkronisering {#domain-syncing}

Wanneer 'n domein in Ultimate Multisite gemap word:

1. Die integrasie gebruik die WP Engine API om die domein by jou WP Engine-installasie by te voeg
2. WP Engine hanteer die domein-konfigurasie en die uitreiking van die SSL-sertifikaat
3. Wanneer 'n domein-mapping verwyder word, sal die integrasie die domein van WP Engine verwyder

### Subdomeinondersteuning {#subdomain-support}

Vir subdomein multisite-installasies:

1. Die integrasie voeg elke subdomein by WP Engine by wanneer 'n nuwe webwerf geskep word
2. WP Engine hanteer die subdomein-konfigurasie
3. Wanneer 'n webwerf verwyder word, sal die integrasie die subdomein van WP Engine verwyder

## Belangrike Notas {#important-notes}

### Wildkaart Domeine {#wildcard-domains}

Vir subdomein multisite-installasies word dit aanbeveel om kontak te neem met WP Engine ondersteuning om 'n wildkaart domein-konfigurasie te versoek. Dit laat alle subdomeine toe om outomaties te werk sonder om elkeen individueel by te voeg.

### SSL Sertifikaate {#ssl-certificates}

WP Engine hanteer outomaties die uitreiking en vernuwing van SSL-sertifikaat vir alle domeine wat deur hierdie integrasie bygevoeg word. Geen bykomende konfigurasie is nodig nie.

## Probleemoplossing {#troubleshooting}

### API-Verbindingsprobleme {#api-connection-issues}
- Verifieer dat die WP Engine plugin aktief en korrek gekonfigureer is
- As jy die API-sleutel handmatig gedefinieer het, kyk of dit korrek is
- Neem kontak met WP Engine ondersteuning as jy probleme met die API het

### Domein Nie Bygevoeg Nie {#domain-not-added}
- Kontroleer die Ultimate Multisite-logboeke vir enige foutboodskappe
- Verifieer dat die domein nie reeds by WP Engine bygevoeg is nie
- Maak seker dat jou WP Engine-plan die aantal domeine ondersteun wat jy byvoeg

### Subdomeinprobleme {#subdomain-issues}
- As subdomeine nie werk nie, neem kontak met WP Engine ondersteuning om 'n wildkaart domein-konfigurasie te versoek
- Verifieer dat jou DNS-instellings korrek gekonfigureer is vir die hoofdomein en subdomeine
