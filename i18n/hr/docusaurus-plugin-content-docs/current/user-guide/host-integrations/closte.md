---
title: Integracija Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integracija s Clostom

## Pregled
Closte je platforma za ospjećen WordPress hosting koja se gradi na infrastrukturi Google Cloud-a. Ova integracija omogućuje automatsko sinhroniziranje domena i upravljanje SSL certifikatima između Ultimate Multisite i Closte.

## Svojstva
- Automatsko sinhroniziranje domena
- Upravljanje SSL certifikatima
- Podrška za wildcard domene
- Nema potrebe za konfiguracijom ako koristite Closte

## Zahtjevi
Ako koristite Closte, sljedeća konstanta mora biti definirana u vašem datoteci `wp-config.php`:

```php
define('CLOSTE_CLIENT_API_KEY', 'vaša_api_ključ');
```

Ova konstanta je obično već definirana ako hostirate na Clostu.

## Upute za postavljanje

### 1. Provjerite svoj Closte API ključ

Ako hostirate na Clostu, konstanta `CLOSTE_CLIENT_API_KEY` bi trebala biti već definirana u vašoj datoteci `wp-config.php`. Možete ovo provjeriti provjeravanjem vaše datoteke `wp-config.php`.

### 2. Omogućite integraciju

1. U svom WordPress adminu, idite na Ultimate Multisite > Settings
2. Navigirajte na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolajte do "Host Integrations" (Integracije hosta)
4. Omogućite integraciju Closte
5. Kliknite na "Save Changes" (Spremi promjene)

## Kako to radi

Kada se domen mapira u Ultimate Multisite:

1. Integracija šalje zahtjev API-ju Clost-a kako bi dodala domen u vaše aplikacije
2. Closte automatski upravlja provizijom SSL certifikata
3. Kada se ukloni mapiranje domena, integracija će ukloniti taj domen iz Clost-a

Integracija također radi s postavkama intervala provjere DNS-a u Ultimate Multisite, omogućujući vam da konfigurišete koliko često sustav provjerava propagaciju DNS-a i izdaje SSL certifikate.

Kreiranje registra domena

Ova integracija osigurava da se automatski kreira zapis domena kada se stvori ili duplira stranica. Ovo je posebno važno za integraciju s Closte, jer kreiranje zapisa domena pokreće API Closte da napravi domen i SSL certifikat.

## Rješavanje problema (Troubleshooting)

### Problemi s povezivanjem API-ja
- Provjerite jesu li Vaš ključ API-ja za Clostu ispravni
- Osigurajte da Vaš račun na Clostu ima potrebne dozvole

### Problemi s SSL certifikatima
- Closte može potrajati malo vremena za izdavanje SSL certifikata (obično 5-10 minuta)
- Provjerite jesu li Vaši domeni ispravno usmjereni na IP adresu Vašeg servera Closte
- Provjerite DNS zapise za Vaš domen kako biste osigurali da su pravilno konfigurirani

### Domen nije dodan
- Provjerite logove Ultimate Multisite na bilo kakve poruke o greškama
- Provjerite jesu li domena već dodani u Clostu
- Osigurajte da su DNS zapisi Vašeg domena ispravno konfigurirani

### Interval provjere DNS-a
- Ako izdavanje SSL certifikata traje predugo, možete prilagoditi interval provjere DNS-a u postavkama Mapiranja domena (Domain Mapping settings)
- Podrazumijevani interval je 300 sekundi (5 minuta), ali ga možete postaviti na samo 10 sekundi za bržu provjeru tijekom testiranja
