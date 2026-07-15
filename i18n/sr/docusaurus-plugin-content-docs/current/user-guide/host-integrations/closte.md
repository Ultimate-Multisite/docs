---
title: Integracija Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integracija sa Clostom

## Pregled {#overview}
Closte je platforma za osposobljava WordPress hosting bazirana na infrastrukturi Google Cloud-a. Ova integracija omogućava automatsko sinhronizovanje domena i upravljanje SSL sertifikatima između Ultimate Multisite i Closte.

## Karakteristike {#features}
- Automatsko sinhronizovanje domena
- Upravljanje SSL sertifikatima
- Podrška za wildcard domene
- Nema potrebe za konfiguracijom ako koristite Clost

## Zahtevi {#requirements}
Ako koristite Clost, sledeća konstanta mora biti definisana u vašem fajlu `wp-config.php`:

```php
define('CLOSTE_CLIENT_API_KEY', 'vaša_api_ključ');
```

Ova konstanta je obično već definisana ako hostujete na Clostu.

## Uputstva za podešavanje {#setup-instructions}

### 1. Proverite svoj Closte API ključ {#1-verify-your-closte-api-key}

Ako hostujete na Clostu, konstanta `CLOSTE_CLIENT_API_KEY` bi trebala biti već definisana u vašem fajlu `wp-config.php`. Možete ovo proveriti tako što ćete pogledati svoj `wp-config.php` fajl.

### 2. Omogućite integraciju {#2-enable-the-integration}

1. U svom WordPress admin panelu, idite na Ultimate Multisite > Settings
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolujte do sekcije "Host Integrations" (Integracije hostova)
4. Aktiviraćete integraciju Closte
5. Kliknite na "Save Changes" (Sačuvaj promene)

## Kako to funkcioniše {#how-it-works}

Kada se domen mapira u Ultimate Multisite:

1. Integracija šalje zahtev API-ju Clost-a da doda domen u vašu aplikaciju
2. Closte automatski upravlja dodeljivanjem SSL sertifikata
3. Kada se ukloni mapiranje domena, integracija će domen ukloniti iz Clost-a

Integracija takođe radi sa podešavanjem intervala provere DNS-a u Ultimate Multisite, omogućavajući vam da konfigurišete koliko često sistem proverava propagaciju DNS-a i izdaje SSL sertifikate.

## Kreiranje registra domena {#domain-record-creation}

Ova integracija osigurava da se automatski kreira zapis domena kada se kreira ili duplira sajt. Ovo je posebno važno za integraciju Closte, jer kreiranje zapisa domena pokreće API Closte da napravi domen i SSL sertifikat.

## Rešavanje problema (Troubleshooting) {#troubleshooting}

### Problemi sa povezivanjem API-ja {#api-connection-issues}
- Proverite da li je vaš ključ API-ja Closte ispravan
- Uverite se da ima vaš nalog na Clostu potrebna dozvolama

### Problemi sa SSL sertifikatom {#ssl-certificate-issues}
- Closte može potrajati neko vreme da izda SSL sertifikate (obično 5-10 minuta)
- Proverite da li su vaši domeni ispravno usmereni na IP adresu vašeg servera Closte-a
- Proverite DNS zapise za vaš domen kako biste bili sigurni da su pravilno podešeni

### Domen nije dodan {#domain-not-added}
- Proverite logove Ultimate Multisite na bilo kakve poruke o greškama
- Proverite da li je domen već dodan u Clostu
- Uverite se da su DNS zapisi vašeg domena ispravno konfigurirani

### Interval provere DNS-a {#dns-check-interval}
- Ako izdavanje SSL sertifikata traje predugo, možete prilagoditi interval provere DNS-a u podešavanjima Mapiranja domena (Domain Mapping settings)
- Podrazumevani interval je 300 sekundi (5 minuta), ali ga možete postaviti na tako nisko kao 10 sekundi za bržu proveru tokom testiranja
