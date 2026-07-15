---
title: Migracija u režim treće strane
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migracija u Režim trećih strana

Superdav AI Agent v1.12.0 mijenja način na koji se obrađuju sposobnosti (abilities) trećih strana. **Režim trećih strana sada podrazumijeva automatski (auto)**, što omogućava integraciju nativnog WordPress Abilities API-ja na WordPressu 7.0+ bez potrebe za ručnim podešavanjem.

## Šta se promijenilo? {#what-changed}

### Prije v1.12.0 {#before-v1120}

Sposobnosti trećih strana zahtijevale su ručno podešavanje:

- Morali ste eksplicitno omogućiti "režim trećih strana"
- Sposobnosti su se učitavale iz prilagođenog registra
- Integracija sa WordPress Abilities API-jem bila je opcionalna
- Režim naslijeđa (Legacy mode) bio je podrazumijevani

### Poslije v1.12.0 {#after-v1120}

Sposobnosti trećih strana rade automatski:

- Režim trećih strana podrazumijeva "auto"
- Sposobnosti se nativno integrišu sa WordPress Abilities API-jem
- Nije potrebno ručno podešavanje na WordPressu 7.0+
- Režim naslijeđa je i dalje dostupan za starije verzije WordPressa

## Ko je pogođen? {#who-is-affected}

### Nove instalacije (WordPress 7.0+) {#new-installations-wordpress-70}

**Nije potrebno ništa raditi.** Režim trećih strana je automatski postavljen na "auto", a sposobnosti rade odmah.

### Postojeće instalacije {#existing-installations}

**Vaša podešavanja su sačuvana.** Ako ste koristili:

- **Režim naslijeđa (Legacy mode)**: Ostajete u režimu naslijeđa (bez promjena)
- **Ručni režim trećih strana (Manual third-party mode)**: Ostajete u ručnom režimu (bez promjena)
- **Auto režim (Auto mode)**: Nastavljate sa auto režimom (bez promjena)

### Verzije WordPressa prije 7.0 {#wordpress-versions-before-70}

**Režim naslijeđa je i dalje dostupan.** Ako koristite WordPress 6.x ili starije:

- Režim trećih strana podrazumijeva "legacy"
- Možete ručno omogućiti režim trećih strana ako želite
- Ažurirajte na WordPress 7.0+ kako biste koristili nativni Abilities API

## Razumijevanje režima {#understanding-the-modes}

### Auto režim (Novi podrazumjet) {#auto-mode-new-default}

**Auto režim** koristi nativnu integraciju WordPress Abilities API-ja:

- Sposobnosti se registruju putem WordPress hook-ova
- Potpuna kompatibilnost sa WordPress 7.0+ Abilities API-jem
- Automatsko otkrivanje sposobnosti trećih strana
- Nije potrebno ručno podešavanje

**Kada koristiti**: WordPress 7.0+ sa sposobnostima trećih strana

### Ručni režim (Manual Mode) {#manual-mode}

**Ručni režim** zahtijeva eksplicitno podešavanje:

- Vi određujete koje sposobnosti trećih strana želite učitati
- Korisno je za testiranje ili selektivno učitavanje sposobnosti
- Zahtijeva uređivanje konfiguracionih fajlova
- Više kontrole, ali i više podešavanja

**Kada koristiti**: Testiranje, selektivno učitavanje sposobnosti ili prilagođene konfiguracije

### Režim naslijeđa (Legacy Mode) {#legacy-mode}

**Režim naslijeđa** koristi stari sistem sposobnosti trećih strana:

- Prilagođeni registar sposobnosti (nije WordPress Abilities API)
- Kompatibilan sa starijim verzijama WordPressa
- Nema nativne WordPress integracije
- Depreciran, ali i dalje podržan

**Kada koristiti**: WordPress 6.x ili starije, ili kada vam je potrebna kompatibilnost sa naslijeđem

## Provjera trenutnog režima {#checking-your-current-mode}

### Preko admin panela {#via-admin-panel}

1. Idite na **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Potražite podešavanje **Third-Party Mode**
3. Vidjet ćete vaš trenutni režim i opcije za promjenu

### Preko koda {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ili 'legacy'
```

## Promjena režima {#changing-your-mode}

### Prebacivanje na Auto režim {#switch-to-auto-mode}

Ako ste na WordPressu 7.0+ i želite koristiti auto režim:

1. Idite na **Superdav AI Agent** → **Settings**
2. Pronađite **Third-Party Mode**
3. Izaberite **Auto (WordPress Abilities API)**
4. Kliknite **Save**

Superdav AI Agent će automatski otkriti i registrovati sposobnosti trećih strana.

### Prebacivanje na Ručni režim {#switch-to-manual-mode}

Ako želite ručno kontrolisati koje sposobnosti se učitavaju:

1. Idite na **Superdav AI Agent** → **Settings**
2. Pronađite **Third-Party Mode**
3. Izaberite **Manual**
4. Kliknite **Save**
5. Uredite svoj konfiguracioni fajl kako biste naveli koje sposobnosti treba učitati

### Prebacivanje na Režim naslijeđa {#switch-to-legacy-mode}

Ako vam je potrebna kompatibilnost sa naslijeđem:

1. Idite na **Superdav AI Agent** → **Settings**
2. Pronađite **Third-Party Mode**
3. Izaberite **Legacy**
4. Kliknite **Save**

## Prednosti Auto režima {#benefits-of-auto-mode}

### Automatsko otkrivanje {#automatic-discovery}

Sposobnosti se automatski otkrivaju iz:

- Instaliranih pluginova
- Aktivne teme
- Must-use pluginova
- Drop-in pluginova

Nije potrebno ručno registracija.

### Nativna integracija {#native-integration}

Sposobnosti se integrišu sa WordPress Abilities API-jem:

- Dosljedno sa WordPress jezgro
- Radi sa WordPress adminom
- Kompatibilno sa drugim pluginovima koji koriste Abilities API
- Sigurno za budućnost kako WordPress evoluira

### Pojednostavljeno upravljanje {#simplified-management}

- Nema konfiguracionih fajlova za uređivanje
- Nema ručne registracije sposobnosti
- Kontrole vidljivosti sposobnosti rade automatski
- Obavještenja administratora upozoravaju vas na neklasifikovane sposobnosti

### Bolja performanse {#better-performance}

- Sposobnosti se keširaju
- Učitavaju se po potrebi (lazy-loaded)
- Optimizovano za WordPress 7.0+

## Put migracije {#migration-path}

### Ako ste na WordPressu 6.x {#if-youre-on-wordpress-6x}

1. **Ažurirajte na WordPress 7.0+** (kada budete spremni)
2. **Ažurirajte Superdav AI Agent** na v1.12.0+
3. **Promijenite režim trećih strana na Auto** (opciono; režim naslijeđa i dalje radi)
4. **Pregledajte vidljivost sposobnosti** kako biste osigurali pravilne kontrole pristupa

### Ako ste na WordPressu 7.0+ {#if-youre-on-wordpress-70}

1. **Ažurirajte Superdav AI Agent** na v1.12.0+
2. **Provjerite da li je režim trećih strana postavljen na Auto** (trebalo bi da bude podrazumjet)
3. **Pregledajte vidljivost sposobnosti** kako biste osigurali pravilne kontrole pristupa
4. **Testirajte sposobnosti trećih strana** kako biste potvrdili da rade

## Rješavanje problema {#troubleshooting}

### Sposobnosti se ne učitavaju u auto režimu {#abilities-arent-loading-in-auto-mode}

- Provjerite da li ste na WordPressu 7.0+
- Provjerite da li je režim trećih strana postavljen na "Auto"
- Provjerite da li je plugin koji pruža sposobnost aktivan
- Provjerite WordPress logove grešaka za greške registracije

### Želim zadržati režim naslijeđa {#i-want-to-keep-legacy-mode}

- Idite na **Settings** → **Third-Party Mode**
- Izaberite **Legacy**
- Kliknite **Save**
- Režim naslijeđa će nastaviti da radi

### Moje prilagođene sposobnosti se ne prikazuju {#my-custom-abilities-arent-showing}

- Provjerite da li su registrovane putem WordPress hook-ova
- Provjerite da li pravilno implementiraju Abilities API
- Pregledajte WordPress logove grešaka
- Koristite admin stranicu **Ability Visibility** da vidite sve registrovane sposobnosti

### Dobijam obavještenja "neklasifikovana sposobnost" {#im-getting-unclassified-ability-notices}

- Ovo je normalno za nove sposobnosti trećih strana
- Pregledajte i klasifikujte ih u obavještenju administratora
- Pogledajte **Ability Visibility** za detalje o klasifikaciji

## Kompatibilnost sa naslijeđem {#backward-compatibility}

### Postojeće konfiguracije {#existing-configurations}

Ako imate postojeće konfiguracije sposobnosti trećih strana:

- **Režim naslijeđa (Legacy mode)**: Vaša konfiguracija nastavlja da radi
- **Ručni režim (Manual mode)**: Vaša konfiguracija nastavlja da radi
- **Auto režim (Auto mode)**: Vaša konfiguracija se ignoriše (auto režim preuzima kontrolu)

Da biste zadržali svoju prilagođenu konfiguraciju, ostanite u Ručnom ili Režimu naslijeđa.

### Vremenski okvir za deprecijaciju {#deprecation-timeline}

- **v1.12.0**: Režimi naslijeđa i ručni režim i dalje potpuno podržani
- **v1.13.0+**: Režim naslijeđa može prikazivati obavještenja o deprecijaciji
- **v2.0.0**: Režim naslijeđa bi mogao biti uklonjen (TBD)

## Najbolje prakse {#best-practices}

### Za nove instalacije {#for-new-installations}

- Koristite Auto režim (to je podrazumjet)
- Pustite Superdav AI Agent da automatski otkriva sposobnosti
- Koristite Ability Visibility za kontrolu pristupa

### Za postojeće instalacije {#for-existing-installations}

- Ažurirajte na WordPress 7.0+ kad je to moguće
- Prebacite se na Auto režim za pojednostavljeno upravljanje
- Pregledajte i klasifikujte sposobnosti koristeći Ability Visibility

### Za prilagođene sposobnosti {#for-custom-abilities}

- Registrujte sposobnosti putem WordPress hook-ova (Abilities API)
- Izbjegavajte prilagođene registre sposobnosti
- Testirajte na WordPressu 7.0+ sa Auto režimom

## Sljedeći koraci {#next-steps}

1. **Provjerite verziju WordPressa**: Potvrdite da ste na 7.0+ za Auto režim
2. **Pregledajte režim trećih strana**: Idite na Settings i provjerite trenutni režim
3. **Ažurirajte ako je potrebno**: Prebacite se na Auto režim ako ste na WordPressu 7.0+
4. **Klasifikujte sposobnosti**: Pregledajte i klasifikujte sve neklasifikovane sposobnosti
5. **Testirajte**: Potvrdite da vaše sposobnosti trećih strana rade ispravno

## Povezani sadržaji {#related-topics}

- **Ability Visibility**: Kontrolišite koje sposobnosti su eksponirane gdje
- **WordPress Abilities API**: Naučite o nativnoj registraciji sposobnosti u WordPressu
- **Third-Party Ability Development**: Kreirajte sposobnosti koje rade sa Auto režimom
