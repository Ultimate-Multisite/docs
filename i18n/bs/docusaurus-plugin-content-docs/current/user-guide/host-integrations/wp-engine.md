---
title: Integracija sa WP Engine-om
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integracija sa WP Engine-om

## Pregled {#overview}
WP Engine je premium platforma za hostovanje WordPressa koja upravlja vašim sajtovima i pruža optimizovane performanse, sigurnost i skalabilnost za WordPress sajtove. Ova integracija omogućava automatsko sinhronizovanje domena između Ultimate Multisite-a i WP Engine-a.

## Funkcionalnosti {#features}
- Automatsko sinhronizovanje domena
- Podrška za poddomene za multisite instalacije
- Besprekorna integracija sa postojećim sistemima WP Engine-a

## Zahtjevi {#requirements}
Integracija automatski detektuje da li hostujete na WP Engine-u i koristi ugrađeni WP Engine API. Nije potrebna dodatna konfiguracija ako je WP Engine plugin aktivan i pravilno podešen.

Međutim, ako je potrebno ručno konfigurisati integraciju, možete definisati jednu od ovih konstanti u vašoj `wp-config.php` datoteci:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferisana metoda
// ILI
define('WPE_API', 'your_api_key'); // Alternativna metoda
```

## Upute za postavljanje {#setup-instructions}

### 1. Provjerite WP Engine Plugin {#1-verify-wp-engine-plugin}

Ako hostujete na WP Engine-u, WP Engine plugin bi trebalo da je već instaliran i aktiviran. Provjerite da:

1. WP Engine plugin je aktivan
2. Datoteka `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` postoji

### 2. Omogućite integraciju {#2-enable-the-integration}

1. U WordPress administraciji, idite na Ultimate Multisite > Settings
2. Idite na karticu "Domain Mapping"
3. Skrolujte do "Host Integrations"
4. Omogućite WP Engine integraciju
5. Kliknite na "Save Changes"

## Kako funkcioniše {#how-it-works}

### Sinhronizacija domena {#domain-syncing}

Kada se domen mapira u Ultimate Multisite-u:

1. Integracija koristi WP Engine API da doda domen na vašu WP Engine instalaciju
2. WP Engine upravlja konfiguracijom domena i izdajanjem SSL certifikata
3. Kada se mapiranje domena ukloni, integracija će ukloniti domen sa WP Engine-a

### Podrška za poddomene {#subdomain-support}

Za multisite instalacije sa poddomenima:

1. Integracija dodaje svaki poddomen u WP Engine kada se kreira novi sajt
2. WP Engine upravlja konfiguracijom poddomena
3. Kada se sajt obriše, integracija će ukloniti poddomen sa WP Engine-a

## Važne napomene {#important-notes}

### Wildcard domeni {#wildcard-domains}

Za multisite instalacije sa poddomenima, preporučuje se da kontaktirate podršku WP Engine-a i zatražite konfiguraciju wildcard domena. Ovo omogućava da svi poddomeni rade automatski bez potrebe da ih dodajete pojedinačno.

### SSL certifikati {#ssl-certificates}

WP Engine automatski upravlja izdajom i obnavljanjem SSL certifikata za sve domene dodate putem ove integracije. Nije potrebna dodatna konfiguracija.

## Rješavanje problema {#troubleshooting}

### Problemi sa API konekcijom {#api-connection-issues}
- Provjerite da li je WP Engine plugin aktivan i pravilno konfigurisan
- Ako ste ručno definisali API ključ, provjerite da li je tačan
- Kontaktirajte podršku WP Engine-a ako imate problema sa API-jem

### Domen nije dodan {#domain-not-added}
- Provjerite logove Ultimate Multisite-a radi bilo kakvih poruka o grešci
- Provjerite da li domen već nije dodan u WP Engine
- Osigurajte da vaš WP Engine plan podržava broj domena koje dodajete

### Problemi sa poddomenima {#subdomain-issues}
- Ako poddomeni ne rade, kontaktirajte podršku WP Engine-a i zatražite konfiguraciju wildcard domena
- Provjerite da li su vaše DNS postavke pravilno konfigurisane za glavni domen i poddomene
