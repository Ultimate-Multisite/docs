---
title: Integracija WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integracija sa WPMU DEV-om {#wpmu-dev-integration}

## Pregled {#overview}
WPMU DEV je sveobuhvatna WordPress platforma koja nudi hosting, pluginove i usluge za WordPress sajtove. Ova integracija omogućava automatsko sinhronizovanje domena i upravljanje SSL certifikatima između Ultimate Multisite-a i WPMU DEV hostinga.

## Funkcionalnosti {#features}
- Automatsko sinhronizovanje domena
- Upravljanje SSL certifikatima
- Prošireni pokušaji provjere SSL certifikata

## Zahtjevi {#requirements}
Integracija automatski detektuje da li hostujete na WPMU DEV-u i koristi ugrađeni API. Nije potrebna dodatna konfiguracija ako hostujete na WPMU DEV-u.

Integracija provjerava prisutnost konstante `WPMUDEV_HOSTING_SITE_ID`, koja se automatski definiše kada hostujete na WPMU DEV-u.

## Upute za postavljanje {#setup-instructions}

### 1. Provjerite WPMU DEV hosting {#1-verify-wpmu-dev-hosting}

Ako hostujete na WPMU DEV-u, neophodne konstante bi trebalo da su već definirane. Provjerite da:

1. Konstanta `WPMUDEV_HOSTING_SITE_ID` je definirana u vašem okrućenju
2. Imate aktivnu WPMU DEV članarstvo sa pristupom API-ju

### 2. Omogućite integraciju {#2-enable-the-integration}

1. U WordPress adminu, idite na Ultimate Multisite > Settings
2. Idite na karticu "Domain Mapping"
3. Skrolujte do "Host Integrations"
4. Omogućite WPMU DEV integraciju
5. Kliknite na "Save Changes"

## Kako funkcioniše {#how-it-works}

### Sinhronizacija domena {#domain-syncing}

Kada je domen mapiran u Ultimate Multisite-u:

1. Integracija koristi WPMU DEV API da doda domen na vaš hosting račun
2. Automatski takođe dodaje i www verziju domena
3. WPMU DEV upravlja konfiguracijom domena i izdajanjem SSL certifikata

### Upravljanje SSL certifikatima {#ssl-certificate-management}

Integracija je konfigurisana da poveća broj pokušaja provjere SSL certifikata za WPMU DEV hosting, jer može proći neko vrijeme da se SSL certifikati izdaju i instaliraju. Podrazumevano, pokušat će do 10 puta za provjeru SSL certifikata, u poređenju sa standardnih 5 pokušaja.

## Važne napomene {#important-notes}

### Uklanjanje domena {#domain-removal}

Trenutno, WPMU DEV API ne nudi način za uklanjanje domena. Kada se domen mapiranje ukloni u Ultimate Multisite-u, domen će ostati u vašem WPMU DEV hosting računu. Ako je potrebno, moraćete ga ručno ukloniti sa WPMU DEV hosting dashboarda.

### API autentifikacija {#api-authentication}

Integracija koristi WPMU DEV API ključ koji je pohranjen u vašoj WordPress bazi podataka kao opcija `wpmudev_apikey`. Ovo se automatski postavlja kada povežete svoj sajt sa WPMU DEV-om.

## Rješavanje problema {#troubleshooting}

### Problemi sa API konekcijom {#api-connection-issues}
- Provjerite da li je vaš sajt pravilno povezan sa WPMU DEV-om
- Provjerite da li je opcija `wpmudev_apikey` postavljena u vašoj WordPress bazi podataka
- Osigurajte da je vaše WPMU DEV članarstvo aktivno

### Problemi sa SSL certifikatima {#ssl-certificate-issues}
- WPMU DEV može potrajati sa izdajanjem SSL certifikata (obično 5-15 minuta)
- Integracija je konfigurisana da provjerava do 10 puta za SSL certifikate
- Ako se SSL certifikati i dalje ne izdaju nakon više pokušaja, kontaktirajte WPMU DEV podršku

### Domen nije dodan {#domain-not-added}
- Provjerite logove Ultimate Multisite-a radi bilo kakvih poruka o greškama
- Provjerite da li domen nije već dodan u WPMU DEV
- Osigurajte da vaš WPMU DEV hosting plan podržava broj domena koje dodajete
