---
title: Integracija WPMU DEV-a
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integracija s WPMU DEV-om

## Pregled {#overview}
WPMU DEV je sveobuhvatna WordPress platforma koja nudi hosting, pluginove i usluge za WordPress web stranice. Ova integracija omogućuje automatsku sinhronizaciju domena i upravljanje SSL certifikatima između Ultimate Multisite i WPMU DEV hostinga.

## Svojstva {#features}
- Automatska sinhronizacija domena
- Upravljanje SSL certifikatima
- Proširene pokušajke provjere SSL certifikata

## Zahtjevi {#requirements}
Integracija automatski prepoznaje je li hostiran na WPMU DEV-u i koristi ugrađenu API. Nema potrebe za dodatnom konfiguracijom ako hostirate na WPMU DEV-u.

Integracija provjerava prisustvo konstante `WPMUDEV_HOSTING_SITE_ID`, koja se automatski definirala prilikom hostiranja na WPMU DEV-u.

## Upute za postavljanje {#setup-instructions}

### 1. Provjerite hosting na WPMU DEV-u {#1-verify-wpmu-dev-hosting}

Ako hostirate na WPMU DEV-u, potrebne konstante bi već trebale biti definirane. Provjerite sljedeće:

1. Da li je konstanta `WPMUDEV_HOSTING_SITE_ID` definirana u vašem okruženju
2. Da imate aktivnu članarstvo na WPMU DEV-u s pristupom API-ju

### 2. Omogućite integraciju {#2-enable-the-integration}

1. U svom WordPress admin panelu, idite na Ultimate Multisite > Settings (Postavke)
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolajte do "Host Integrations" (Integracije hostinga)
4. Omogućite integraciju WPMU DEV-a
5. Kliknite na "Save Changes" (Spremi promjene)

## Kako to radi {#how-it-works}

### Sinhronizacija domena {#domain-syncing}

Kada se domen mapira u Ultimate Multisite:

1. Integracija koristi WPMU DEV API za dodavanje domena na vaš račun hostinga
2. Automatski dodaje i www verziju domena
3. WPMU DEV obrađuje konfiguraciju domena i izdavanje SSL certifikata

### Upravljanje SSL certifikatima {#ssl-certificate-management}

Integracija je podešena tako da se povećava broj pokušaja provjere SSL certifikata za WPMU DEV hosting, jer može proći neko vrijeme dok se SSL certifikati izdaju i instaliraju. Po podrazumevanom, pokušat će do 10 puta provjeriti SSL certifikat, u usporedbi sa standardnih 5 pokušaja.

## Važne napomene {#important-notes}

### Uklanjanje domena {#domain-removal}

Trenutno WPMU DEV API ne nudi način za uklanjanje domena. Kada se mape domena ukloni u Ultimate Multisite, domen će ostati u vašem WPMU DEV hosting računu. Morat ćete ga ručno ukloniti s WPMU DEV dashboarda ako je potrebno.

### Autentifikacija API-ja {#api-authentication}

Integracija koristi ključ WPMU DEV API-ja koji je pohranjen u vašoj WordPress bazi podataka kao opcija `wpmudev_apikey`. Ovo se automatski postavlja kada povežete svoj sajt s WPMU DEV-om.

## Rješavanje problema (Troubleshooting) {#troubleshooting}

### Problemi s povezivanjem API-ja {#api-connection-issues}
- Provjerite da je vaš sajt pravilno povezan s WPMU DEV-om
- Provjerite da li je opcija `wpmudev_apikey` postavljena u vašoj WordPress bazi podataka
- Osigurajte da je vaš WPMU DEV članstvo aktivno

### Problemi s SSL certifikatima {#ssl-certificate-issues}
- WPMU DEV može potrajati neko vrijeme za izdavanje SSL certifikata (obično 5-15 minuta)
- Integracija je podešena tako da provjerava do 10 puta SSL certifikate
- Ako se SSL certifikati i dalje ne izdaju nakon više pokušaja, kontaktirajte WPMU DEV podršku

### Domen nije dodan {#domain-not-added}
- Provjerite Ultimate Multisite logove na bilo kakve poruke o greškama
- Provjerite da li domen već nije dodan u WPMU DEV
- Osigurajte da vaš WPMU DEV hosting plan podržava broj domena koje dodajete
