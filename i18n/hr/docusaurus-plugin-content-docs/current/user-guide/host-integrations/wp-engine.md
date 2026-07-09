---
title: Integracija s WP Engineom
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integracija s WP Engine {#wp-engine-integration}

## Pregled {#overview}
WP Engine je premium platform za upravljanje WordPress hostingom koja pruža optimiziranu performansu, sigurnost i skalabilnost za WordPress stranice. Ova integracija omogućuje automatsko sinhroniziranje domena između Ultimate Multisite i WP Engine.

## Svojstva {#features}
- Automatsko sinhroniziranje domena
- Podrška poddomena za multisite instalacije
- Besmjetna integracija s postojećim sustavima WP Engine

## Zahtjevi {#requirements}
Integracija automatski prepoznaje je li hostiran na WP Engine i koristi ugrađeni WP Engine API. Nema potrebe za dodatnom konfiguracijom ako je plugin WP Engine aktivan i pravilno postavljen.

Međutim, ako trebate ručno konfigurisati integraciju, možete definirati jednu od ovih konstanti u vašem datoteci `wp-config.php`:

```php
define('WPE_APIKEY', 'vaš_api_ključ'); // Predovoreni način
// ILI
define('WPE_API', 'vaš_api_ključ'); // Alternativni način
```

## Upute za postavljanje {#setup-instructions}

### 1. Provjerite WP Engine plugin {#1-verify-wp-engine-plugin}

Ako hostirate na WP Engine, plugin WP Engine bi trebao već biti instaliran i aktiviran. Provjerite sljedeće:

1. Da li je plugin WP Engine aktivan
2. Da li postoji datoteka `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. Omogućite integraciju {#2-enable-the-integration}

1. U svom WordPress adminu, idite na Ultimate Multisite > Settings (Postavke)
2. Navigirajte na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolajte do "Host Integrations" (Integracije hosta)
4. Omogućite integraciju WP Engine
5. Kliknite na "Save Changes" (Spremi promjene)

## Kako to radi {#how-it-works}

### Sinhroniziranje domena {#domain-syncing}

Kada se domen mapira u Ultimate Multisite:

1. Integracija koristi WP Engine API za dodavanje domena u vašu instalaciju WP Engine-a
2. WP Engine obrađuje konfiguraciju domena i izdaje SSL certifikat
3. Kada se mapiranje domena ukloni, integracija će ukloniti domen iz WP Engine-a

### Podrška poddomena {#subdomain-support}

Za instalacije multisite na poddomene:

1. Integracija dodaje svaku poddomenu u WP Engine kada se novi sajt kreira.
2. WP Engine upravlja konfiguracijom poddomena.
3. Kada se sajt obriše, integracija ukloni poddomenu iz WP Engine.

## Važne napomene {#important-notes}

### Wildcard domene {#wildcard-domains}

Za instalacije multisite na poddomene preporučujemo da kontaktirate podršku WP Engine i zatražite konfiguraciju wildcard domena. To omogućuje da sve poddomene rade automatski bez potrebe za dodavanjem svake pojedinačno.

### SSL sertifikati {#ssl-certificates}

WP Engine automatski upravlja izdavanjem i obnavljivanjem SSL sertifikata za sve domene dodate putem ove integracije. Nije potrebno dodatno konfiguriranje.

## Rješavanje problema (Troubleshooting) {#troubleshooting}

### Problemi s povezivanjem API-ja {#api-connection-issues}
- Provjerite da li je plugin WP Engine aktivan i pravilno konfiguriran.
- Ako ste ručno definisali API ključ, provjerite da je on ispravan.
- Kontaktirajte podršku WP Engine ako imate problema s API-jem.

### Domain nije dodan {#domain-not-added}
- Provjerite logove Ultimate Multisite na bilo kakve poruke o greškama.
- Provjerite da li domena već nisu dodani u WP Engine.
- Osigurajte da vaš plan WP Engine podržava broj domena koje dodajete.

### Problemi s poddomenama {#subdomain-issues}
- Ako poddomene ne rade, kontaktirajte podršku WP Engine i zatražite konfiguraciju wildcard domena.
- Provjerite da li su vaši DNS podešavanja ispravno postavljena za glavni domen i poddomene.
