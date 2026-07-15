---
title: Integracija WPMU DEV-a
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integracija sa WPMU DEV-om

## Pregled {#overview}
WPMU DEV je sveobuhvatna WordPress platforma koja nudi hosting, pluginove i usluge za WordPress sajtove. Ova integracija omogućava automatsku sinhronizaciju domena i upravljanje SSL sertifikatima između Ultimate Multisite i WPMU DEV hostinga.

## Karakteristike {#features}
- Automatska sinhronizacija domena
- Upravljanje SSL sertifikatom
- Proširene pokušajke verifikacije SSL sertifikata

## Zahtevi {#requirements}
Integracija automatski detektuje da li hostujete na WPMU DEV-u i koristi ugrađeni API. Nema potrebe za dodatnim podešavanjem ako hostujete na WPMU DEV-u.

Integracija proverava prisustvo konstante `WPMUDEV_HOSTING_SITE_ID`, koja se automatski definiše prilikom hostovanja na WPMU DEV-u.

## Uputstva za podešavanje {#setup-instructions}

### 1. Provera hostovanja na WPMU DEV-u {#1-verify-wpmu-dev-hosting}

Ako hostujete na WPMU DEV-u, neophodne konstante bi već trebalo da budu definisane. Proverite sledeće:

1. Da li je konstanta `WPMUDEV_HOSTING_SITE_ID` definisana u vašem okruženju
2. Da li imate aktivnu članarinu WPMU DEV-a sa pristupom API-ju

### 2. Omogućavanje integracije {#2-enable-the-integration}

1. U svom WordPress admin panelu, idite na Ultimate Multisite > Settings (Podešavanja)
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolujte do sekcije "Host Integrations" (Integracije hostova)
4. Omogućite integraciju WPMU DEV-a
5. Kliknite na "Save Changes" (Sačuvaj promene)

## Kako to funkcioniše {#how-it-works}

### Sinhronizacija domena {#domain-syncing}

Kada se domen mapira u Ultimate Multisite:

1. Integracija koristi WPMU DEV API da doda domen na vaš nalog za hosting
2. Automatski dodaje i verziju `www` domena
3. WPMU DEV brine o konfiguraciji domena i izdavanju SSL sertifikata

### Upravljanje SSL sertifikatima {#ssl-certificate-management}

Integracija je podešena da se povećava broj pokušaja verifikacije SSL sertifikata za WPMU DEV hosting, jer može proći neko vreme dok se SSL sertifikati izdaju i instaliraju. Podrazumevano, on će pokušati do 10 puta za verifikaciju SSL sertifikata, u poređenju sa standardnih 5 pokušaja.

## Važne napomene {#important-notes}

### Uklanjanje domena {#domain-removal}

Trenutno WPMU DEV API ne nudi način da se domeni uklone. Kada se mape domena ukloni u Ultimate Multisite-u, domen će ostati na vašem WPMU DEV hosting nalogu. Morat ćete ga ručno ukloniti sa dashboarda WPMU DEV ako je potrebno.

### Autentifikacija API-ja {#api-authentication}

Integracija koristi ključ API-ja WPMU DEV koji se čuva u bazi podataka WordPress-a kao opcija `wpmudev_apikey`. Ovo se automatski postavlja kada povežete svoj sajt sa WPMU DEV-om.

## Rešavanje problema (Troubleshooting) {#troubleshooting}

### Problemi sa povezivanjem API-ja {#api-connection-issues}
- Proverite da li je vaš sajt pravilno povezan sa WPMU DEV-om
- Proverite da li je opcija `wpmudev_apikey` postavljena u bazi podataka WordPress-a
- Uverite se da je vaša članarina na WPMU DEV-u aktivna

### Problemi sa SSL sertifikatima {#ssl-certificate-issues}
- WPMU DEV može potrajati neko vreme da izda SSL sertifikate (obično 5-15 minuta)
- Integracija je podešena da proverava do 10 puta za SSL sertifikate
- Ako se SSL sertifikati i dalje ne izdaju nakon više pokušaja, kontaktirajte WPMU DEV podršku

### Domen nije dodan {#domain-not-added}
- Proverite logove Ultimate Multisite-a na bilo kakve poruke o greškama
- Proverite da li domen već nije dodan u WPMU DEV
- Uverite se da vaš hosting plan na WPMU DEV-u podržava broj domena koje dodajete
