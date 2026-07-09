---
title: WP Engine Integrazioa
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integrazioa {#wp-engine-integration}

## Deskuntzua {#overview}
WP Engine da WordPress-ekoa irudi eta erabilera handi duen hosting platforta da, denbora optimizatua eragiketa, segurtasun eta eskala (scalability) ematen du WordPress websteinoetara. Horrek Ultimate Multisite eta WP Engine-aren arteko domainak awtomatiko sinxentroa (syncing) gabe dena.

## Aerakilikak {#features}
- Domaina awtomatiko sinxentroa
- Multisite instalazioetara subdomain suporta
- WP Engine-ren dagoen sistemaearekin erlazionatuta integrazioa

## Aurtekinak {#requirements}
Integrazioa automaticoki jakusten du zein WP Engine-an dago hosting egiten duen eta WP Engine API-aren itxarotzen du. WP Engine plugin-a aktibo eta ondoriozko konfiguratuta dagoenean, ez da beharrezkoa horrek handiagoa konfiguratzea.

Hala ere, integrazioa manuaz konfigurat nahi du, horiek batak `wp-config.php` filean zehazte dezakezu:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferitu metodoa
// ORA
define('WPE_API', 'your_api_key'); // Alternatiboa metodoa
```

## Konfigurazio Instrukiak {#setup-instructions}

### 1. WP Engine Plugin-a Ebaditzea (Verify) {#1-verify-wp-engine-plugin}

WP Engine-an hosting egiten du, WP Engine plugin-a ez da instalatuta eta aktibo dagoela. Jakusten du:

1. WP Engine plugin-a aktibo dagoela
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` file-a dagoela

### 2. Integrazioa Aktiboa (Enable) {#2-enable-the-integration}

1. WordPress admin-an, Ultimate Multisite > Settings (Konfigurazioak) funtziora jarraitu
2. "Domain Mapping" (Domaina Mapoak) tabera jarraitu
3. "Host Integrations" (Hosting Integrazioak) duen partean jarraitu
4. WP Engine integrazioa aktiboa egin
5. "Save Changes" (Eskaintzak Saldu) klik egin

## Ondo Zerbiak (How It Works) {#how-it-works}

### Domaina Sinxentroa (Domain Syncing) {#domain-syncing}

Ultimate Multisite-an domaina mapatuta dagoenean:

1. Integrazioa WP Engine API-aren erabiliz domainak WP Engine instalazioan jodez daiteke emanez
2. WP Engine-ek domainaren konfigurazioa eta SSL certificate (sertifikatua) ematen du
3. Domaina mapatzea desatuenean, integrazioa domainak WP Engine-etik eradokia izango da

### Subdomain Suporta {#subdomain-support}

Subdomeni multisite instalazioetan:

1. Integrazioak lehiakari (subdomain) zehar da WP Engine-era irudi ez da site berria sortzen duenean.
2. WP Engine-ek subdomain konfigurazioa maneia.
3. Site bat boratzen direnenean, integrazioak subdomain-a WP Engine-etik eratu egiten du.

## Nota importanteak {#important-notes}

### Wildcard Domainak {#wildcard-domains}

Subdomeni multisite instalazioetan, WP Engine suportari hartzea ematen da wildcard domain konfiguratizioa eskatzeko. Horrek subdomain guztiek automatikoki funtzionatzeko aukera ematen du, zehar bat bat lehiakari (subdomain) lehiakari ez hasi behar.

### SSL Zertifikatua {#ssl-certificates}

WP Engine-ek hori integrazioa bidez lehen daude lehen domain guztiak eratu eta berri datu eginduzenean automatikoki maneia. Ez aurreratutako konfigurazioa behar da.

## Problema iruditzenak (Troubleshooting) {#troubleshooting}

### API konektibitatea problemaak {#api-connection-issues}
- WP Engine plugin-ek aktibo dagoela eta lehen daude konfiguratuta dagoela jartzen baduzu eskatzen du.
- API key bat manuaz definizatu duzenean, hori korehua jakinarazten du.
- API-ekin problema bat izan duzenean WP Engine suportari hartu duzu.

### Domain ez hasituta dagoela {#domain-not-added}
- Ultimate Multisite logs-ek errazi edo error mezuak jakinarazten duela jartzen baduzu eskatzen du.
- Domain-a WP Engine-era lehen daude hasituta dagoela jartzen baduzu eskatzen du.
- WP Engine plan-ek subdomain guztiek hasituta dagoen domainen kopurua suportatzen duen jardutzea asegatzu behar da.

### Subdomeni problemaak {#subdomain-issues}
- Subdomainak ez funtzionatzen direnenean, wildcard domain konfiguratizioa eskatzeko WP Engine suportari hartu duzu.
- Main domain eta subdomainakaren DNS konfigurazioak korehua jakinarazten duela jartzen baduzu eskatzen du.
