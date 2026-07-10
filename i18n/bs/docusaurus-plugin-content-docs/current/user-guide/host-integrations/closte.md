---
title: Closte Integracija
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integracija sa Closte {#closte-integration}

## Pregled {#overview}
Closte je platforma za hostovanje WordPressa sa upravljanjem, bazirana na Google Cloud infrastrukturi. Ova integracija omogućava automatsko sinhronizovanje domena i upravljanje SSL certifikatima između Ultimate Multisite-a i Closte-a.

## Funkcionalnosti {#features}
- Automatsko sinhronizovanje domena
- Upravljanje SSL certifikatima
- Podrška za wildcard domene
- Nije potrebna konfiguracija ako se pokrećate na Closte-u

## Zahtjevi {#requirements}
Ako koristite Closte, sljedeća konstanta mora biti definirana u vašoj `wp-config.php` datoteci:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Ova konstanta je obično već definirana ako hostujete na Closte-u.

## Upute za postavljanje {#setup-instructions}

### 1. Provjerite svoj Closte API ključ {#1-verify-your-closte-api-key}

Ako hostujete na Closte-u, konstanta `CLOSTE_CLIENT_API_KEY` bi trebala biti već definirana u vašoj `wp-config.php` datoteci. Možete to potvrditi provjerom te datoteke.

### 2. Omogućite integraciju {#2-enable-the-integration}

1. U WordPress administraciji, idite na Ultimate Multisite > Settings
2. Idite na karticu "Domain Mapping"
3. Skrolujte do "Host Integrations"
4. Omogućite Closte integraciju
5. Kliknite na "Save Changes"

## Kako funkcioniše {#how-it-works}

Kada se domen mapira u Ultimate Multisite-u:

1. Integracija šalje zahtjev Closte API-ju kako bi dodala domen vašoj aplikaciji
2. Closte automatski upravlja dodjelom SSL certifikata
3. Kada se mapiranje domena ukloni, integracija će ukloniti domen sa Closte-a

Integracija takođe radi sa podešavanjem intervala provjere DNS-a u Ultimate Multisite-u, omogućavajući vam da konfigurišete koliko često sistem provjerava propagaciju DNS-a i izdaju SSL certifikate.

## Kreiranje DNS zapisa {#domain-record-creation}

Ova integracija osigurava da kada se kreira ili duplira sajt, automatski se kreira DNS zapis. Ovo je posebno važno za Closte integraciju, jer kreiranje DNS zapisa pokreće Closte API da kreira domen i SSL certifikat.

## Rješavanje problema {#troubleshooting}

### Problemi sa API konekcijom {#api-connection-issues}
- Potvrdite da je vaš Closte API ključ ispravan
- Osigurajte da vaš Closte račun ima potrebne dozvole

### Problemi sa SSL certifikatima {#ssl-certificate-issues}
- Closte može potrajati sa izdajom SSL certifikata (obično 5-10 minuta)
- Potvrdite da su vaši domeni pravilno usmjereni na IP adresu vašeg Closte servera
- Provjerite DNS zapise za vaš domen kako biste bili sigurni da su pravilno konfigurisani

### Domen nije dodan {#domain-not-added}
- Provjerite logove Ultimate Multisite-a radi bilo kakvih poruka o greškama
- Potvrdite da domen nije već dodan na Closte
- Osigurajte da su DNS zapisi vašeg domena pravilno konfigurisani

### Interval provjere DNS-a {#dns-check-interval}
- Ako SSL certifikati traže previše vremena za izdavanje, možete prilagoditi interval provjere DNS-a u podešavanjima Domain Mapping-a
- Podrazumevani interval je 300 sekundi (5 minuta), ali ga možete postaviti i na 10 sekundi za brže testiranje.
