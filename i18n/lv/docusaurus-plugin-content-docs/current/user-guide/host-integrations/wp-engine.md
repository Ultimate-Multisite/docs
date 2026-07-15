---
title: WP Engine integrācija
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrācija ar WP Engine

## Īskatspekļa pārskats {#overview}
WP Engine ir premium, administrēts WordPress hostings platforma, kas nodrošina optimizētu veiktspēju, drošību un skalabilitāti WordPress vietnēm. Šī integrācija ļauj automātiski singt domēnus starp Ultimate Multisite un WP Engine.

## Funkcionalitātes {#features}
- Automātiskais domēnu singšana
- Subdomēnu atbalsts multisite instalācijām
- Bezbarošs integrācija ar WP Engine eksistējajiem sistēmām

## Prasības {#requirements}
Integrācija automātiski pamatina, vai hostējat uz WP Engine un izmanto iekļautu WP Engine API. Ja WP Engine plugin ir aktivs un labi konfigurēts, jums nav nepieciešams nekādas papildu konfiguracijas.

Tomēr, ja jums ir nepieciešams maniski konfigurēt integrāciju, var definēt vienu no šiem konstantu failā `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Prioritizēts veids
// ERIEŠ vai
define('WPE_API', 'your_api_key'); // Alternatīvais veids
```

## Iestatījumu instrukcijas {#setup-instructions}

### 1. Apstiprināt WP Engine pluginu {#1-verify-wp-engine-plugin}
Ja hostējat uz WP Engine, WP Engine plugin jau būtu jāinstalē un aktivizēt. Apstiprini šo:

1. Vai WP Engine plugin ir aktivs
2. Vai fail `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ir pieejams

### 2. Iestatīt integrāciju {#2-enable-the-integration}
1. Uz savā WordPress admin panelu pārvietojies uz Ultimate Multisite > Settings (Iestatījumi)
2. Navigējieties uz tabulu "Domain Mapping" (Domēnu mapi)
3. Pārskrolējiet līdz "Host Integrations" (Host integrācijas)
4. Activējiet WP Engine integrāciju
5. Nospressiet "Save Changes" (Saglabāt izmaiņas)

## Kā tas darbojas {#how-it-works}

### Domēnu singšana {#domain-syncing}
Kad domēns tiek mapi Ultimate Multisite:

1. Integrācija izmanto WP Engine API, lai pievienotu domēnu savai WP Engine instalācijai
2. WP Engine pārvaldī domēna konfigurēšanu un SSL sertifikāta izdošanu
3. Kad domēna mapi tiek atņemts, integrācija domēnu noņem domēno no WP Engine

### Subdomēnu atbalsts {#subdomain-support}

Subdomēnu multisaitas instalācijām:

1. Integrācija katru subdomēnu pievieno WP Engine, kad tiek izveidots jauns vietnes.
2. WP Engine pārvaldī subdomēnu konfigurāciju.
3. Kad vietne tiek noņemta, integrācija atņem subdomēnu no WP Engine.

## Saviņi svarīgi noteikumi {#important-notes}

### Wildcard domēni {#wildcard-domains}

Subdomēnu multisaitas instalācijām ieteicams sazināties ar WP Engine atbalstu un lūgt wildcard domēnu konfigurāciju. Tas ļauj visiem subdomēniem automātiski strādāt bez nepieciešamības katru no tiem pievienot individuāli.

### SSL sertifikāti {#ssl-certificates}

WP Engine automātiski pārvaldī SSL sertifikātu izdošanu un atjaunošanu visām domēnām, kas pievienotas šī integrācijas veidā. Nav prasīta papildu konfigurācija.

## Kļūdu likums (Troubleshooting) {#troubleshooting}

### API savienojuma problēmas {#api-connection-issues}
- Pārbaudiet, vai WP Engine plugin ir aktīvs un labi konfigurisms.
- Ja jūs maniski definējāt API kluadi, pārbaudiet, vai tas ir pareizs.
- Sazinājieties ar WP Engine atbalstu, ja jums ir problēmas ar API.

### Domēna nav pievienota {#domain-not-added}
- Pārbaudiet Ultimate Multisite logus jebkurām kļūdu ziņojumiem.
- Noteikiet, ka domēna vēl nav pievienota WP Engine.
- Nodrošinieties, ka jūsu WP Engine plāns atbalsta domānu skaitu, ko jūs pievienojat.

### Subdomēnu problēmas {#subdomain-issues}
- Ja subdomēni nestrādā, sazinājieties ar WP Engine atbalstu un lūgt wildcard domēnu konfigurāciju.
- Pārbaudiet, vai jūsu DNS iestatījumi ir pareizi konfigurismieties galvenajai domēnai un subdomēniem.
