---
title: Integracija sa WP Engineom
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integracija sa WP Engine

## Pregled
WP Engine je premium platform za upravljanje WordPress hostingom koja pruža optimizovanu performansu, sigurnost i skalabilnost za WordPress saite. Ova integracija omogućava automatsku sinhronizaciju domena između Ultimate Multisite-a i WP Engine-a.

## Karakteristike
- Automatska sinhronizacija domena
- Podporuka poddomena za multisite instalacije
- Besprekorna integracija sa postojećim sistemima WP Engine-a

## Zahtevi
Integracija automatski detektuje da li hostujete na WP Engine-u i koristi ugrađenu WP Engine API. Nema potrebe za dodatnim podešavanjem ako je plugin WP Engine aktivan i pravilno konfigurisan.

Međutim, ako vam je potrebno ručno da konfigurišete integraciju, možete definisati jednu od sledećih konstanti u vašem fajlu `wp-config.php`:

```php
define('WPE_APIKEY', 'vaša_api_ključ'); // Predovčeni metod
// ILI
define('WPE_API', 'vaša_api_ključ'); // Alternativni metod
```

## Uputstva za podešavanje

### 1. Proverite WP Engine plugin

Ako hostujete na WP Engine-u, plugin WP Engine bi trebalo da je već instaliran i aktivan. Proverite sledeće:

1. Da li je plugin WP Engine aktivan
2. Da li postoji fajl `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. Omogućite integraciju

1. U svom WordPress admin panelu, idite na Ultimate Multisite > Settings (Podešavanja)
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolujte do "Host Integrations" (Integracije hostova)
4. Omogućite integraciju WP Engine-a
5. Kliknite na "Save Changes" (Sačuvaj promene)

## Kako to funkcioniše

### Sinhronizacija domena

Kada se domen mapira u Ultimate Multisite-u:

1. Integracija koristi WP Engine API da doda domen u vašu instalaciju WP Engine-a
2. WP Engine obrađuje konfiguraciju domena i izdaje SSL sertifikate
3. Kada se ukloni mapiranje domena, integracija će domen ukloniti iz WP Engine-a

### Podrška poddomena

Za instalacije multisite na poddomenu:

1. Integracija dodaje svaku poddomenu u WP Engine kada se kreira nova lokacija (site).
2. WP Engine upravlja konfiguracijom poddomena.
3. Kada se lokacija obriše, integracija će ukloniti tu poddomenu iz WP Engine-a.

## Važne napomene

### Wildcard domena

Za instalacije multisite na poddomenu preporučujemo da kontaktirate podršku WP Engine i zatražite konfiguraciju wildcard domena. To omogućava da svi poddomeni rade automatski bez potrebe da svaki pojedinačno dodajete.

### SSL sertifikati

WP Engine automatski upravlja izdavanjem i obnavljivanjem SSL sertifikata za sve domene dodate putem ove integracije. Nije potrebno dodatno podešavanje.

## Rešavanje problema (Troubleshooting)

### Problemi sa konekcijom API-ja
- Proverite da li je plugin WP Engine aktivan i ispravno podešen.
- Ako ste ručno definisali API ključ, proverite da li je on tačan.
- Kontaktirajte podršku WP Engine ako imate problema sa API-jem.

### Domen ne dodaje se
- Proverite logove Ultimate Multisite za bilo kakve poruke o greškama.
- Proverite da li domen već nije dodan u WP Engine.
- Uverite se da vaš plan WP Engine podržava broj domena koje dodajete.

### Problemi sa poddomenama
- Ako poddomeni ne rade, kontaktirajte podršku WP Engine i zatražite konfiguraciju wildcard domena.
- Proverite da li su vaši DNS podešavanja ispravno postavljena za glavni domen i poddomene.
