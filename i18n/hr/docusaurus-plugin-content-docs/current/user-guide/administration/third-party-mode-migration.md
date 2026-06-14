---
title: Migracija u trećoj strani modu
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migracija u trećim stranama (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 mijenja način na koji se obrađuju mogućnosti trećih strana. **Treći mod sada podrazumijem na auto**, omogućujući nativnu integraciju WordPress Abilities API na WordPress 7.0+ bez ručne konfiguracije.

## Što se promijenilo?

### Pri v1.12.0

Mogućnosti trećih strana su zahtijevale ručnu konfiguraciju:

- Morali ste eksplicitno omogućiti "treći mod" (third-party mode)
- Mogućnosti su učitavale iz prilagođenog registara
- Integracija s WordPress Abilities API je bila opcionalna
- Legacy (stari) mod je bio podrazumijevani

### Nakon v1.12.0

Mogućnosti trećih strana rade automatski:

- Treći mod podrazumijem na "auto"
- Mogućnosti se nativno integriraju s WordPress Abilities API
- Nema potrebe za ručnom konfiguracijom na WordPress 7.0+
- Legacy mod je još uvijek dostupan za starije verzije WordPressa

## Tko je pogođen?

### Nove instalacije (WordPress 7.0+)

**Nema potrebe za akcijama.** Treći mod se automatski postavlja na "auto", a mogućnosti rade odmah po instalaciji.

### Postojeće instalacije

**Vaše postavke su ovisno o tome što ste koristili:** Ako ste koristili:

- **Legacy mode (Stari mod)**: Ostanete u starom modu (nemijenja se)
- **Manual third-party mode (Ručni treći mod)**: Ostanete u ručnom modu (nemijenja se)
- **Auto mode**: Nastavljate s automatskim modom (nemijenja se)

### WordPress verzije prije 7.0

**Legacy mode je još uvijek dostupan.** Ako koristite WordPress 6.x ili stariju verziju:

- Treći mod podrazumijem na "legacy"
- Možete ručno omogućiti treći mod ako želite
- Ažurirajte na WordPress 7.0+ da biste koristili nativni Abilities API

## Razumijevanje moda

### Auto Mode (Novi podrazumijevani)

**Auto mode** koristi nativnu integraciju s WordPress Abilities API:

- Mogućnosti se registriraju putem WordPress hookova
- Potpuna kompatibilnost s WordPress 7.0+ Abilities API
- Automatsko otkrivanje mogućnosti trećih strana
- Nema potrebe za ručnom konfiguracijom

**Kada koristiti**: WordPress 7.0+ s trećim stranama mogućnosti (third-party abilities)

### Ručni način rada (Manual Mode)

**Ručni način rada** zahtijeva eksplicitnu konfiguraciju:

- Odaberite koje treće strane mogućnosti učitati
- Korisno za testiranje ili selektivno učitavanje mogućnosti
- Zahtijeva uređivanje datoteka za konfiguraciju
- Vi imate više kontrole, ali je potrebno više podešavanja

**Kada koristiti**: Testiranje, selektivno učitavanje mogućnosti ili prilagođene postavke

### Stari način rada (Legacy Mode)

**Stari način rada** koristi stari sustav trećih stranih mogućnosti:

- Prilagodbeni registar mogućnosti (ne WordPress Abilities API)
- Povratna kompatibilnost s starijim verzijama WordPressa
- Nema nativne integracije s WordPressom
- Preporučuje se prestanak korištenja, ali je još uvijek podržan

**Kada koristiti**: WordPress 6.x ili stariji, ili kada vam je potrebna povratna kompatibilnost

## Provjera trenutnog načina rada

### Kroz Admin Panel

1. Idite u **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Potražite postavku **Third-Party Mode** (Treći stranac način rada)
3. Vidjet ćete svoj trenutni način rada i opcije za promijeniti ga

### Kroz kod

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ili 'legacy'
```

## Promjena načina rada

### Prebacivanje na Auto Mode (Automatski način rada)

Ako koristite WordPress 7.0+ i želite koristiti auto mode:

1. Idite u **Superdav AI Agent** → **Settings**
2. Pronađite **Third-Party Mode**
3. Odaberite **Auto (WordPress Abilities API)**
4. Kliknite na **Save** (Spremi)

Superdav AI Agent će automatski otkriti i registrirati treće strane mogućnosti.

### Prebacivanje na Manual Mode (Ručni način rada)

Ako želite ručno kontrolirati koje mogućnosti se učitavaju:

1. Idite u **Superdav AI Agent** → **Settings**
2. Pronađite **Third-Party Mode**
3. Odaberite **Manual**
4. Kliknite na **Save** (Spremi)
5. Uredite svoju datoteku za konfiguraciju kako biste naveli koje mogućnosti učitati

### Prebacivanje na Legacy Mode (Stari način rada)

Ako vam je potrebna povratna kompatibilnost:

1. Idite u **Superdav AI Agent** → **Settings**
2. Pronađite **Third-Party Mode** (Mod za treće strane)
3. Odaberite **Legacy** (Stari način)
4. Kliknite na **Save** (Spremi)

## Prednosti Auto Modea

### Automatsko otkrivanje (Automatic Discovery)

Sposobnosti se automatski otkrivaju iz:

- Instaliranih pluginova
- Aktivnog teme
- Obaveznih pluginova
- Drop-in pluginova

Nema potrebe za ručnom registracijom.

### Nativna integracija (Native Integration)

Sposobnosti se integriraju s WordPress Abilities API-jem:

- U skladu s WordPress jezgrom (core)
- Radi s WordPress admin panelom
- Kompatibilno s drugim pluginovima koji koriste Abilities API
- Spremni za budućnost kako WordPress napreduje

### Jednostavno upravljanje (Simplified Management)

- Nema potrebe za uređivanjem datoteka konfiguracije
- Nema ručne registracije sposobnosti (ability)
- Kontrole vidljivosti sposobnosti rade automatski
- Admin obavijesti vas upozoravaju na neklasifikovane sposobnosti

### Bolje performanse (Better Performance)

- Sposobnosti se keširaju (cache)
- Lazy-loadaju se po potrebi (on demand)
- Optimizirano za WordPress 7.0+

## Put migracije

### Ako ste na WordPressu 6.x

1. **Ažurirajte do WordPressa 7.0+** (kada budete spremni)
2. **Ažurirajte Superdav AI Agent** do verzije v1.12.0+
3. **Promijenite third-party mode na Auto** (opcionalno; legacy mode i dalje radi)
4. **Pregledajte vidljivost sposobnosti** kako biste osigurali ispravne kontrole pristupa

### Ako ste na WordPressu 7.0+

1. **Ažurirajte Superdav AI Agent** do verzije v1.12.0+
2. **Provjerite da je third-party mode postavljen na Auto** (trebao bi biti podrazumijevano)
3. **Pregledajte vidljivost sposobnosti** kako biste osigurali ispravne kontrole pristupa
4. **Testirajte third-party sposobnosti** kako biste potvrdili da rade

## Rješavanje problema (Troubleshooting)

### Sposobnosti se ne učitavaju u auto modu

- Provjerite da ste na WordPressu 7.0+
- Provjerite da je third-party mode postavljen na "Auto"
- Provjerite da li je plugin koji pruža sposobnost aktivan
- Provjerite WordPress error logove za greške pri registraciji

### Želim zadržati legacy mod

- Idite u **Settings** → **Third-Party Mode** (Podešavanja → Mod za treće strane)
- Odaberite **Legacy** (Stari način)
- Kliknite na **Save** (Spremi)
- Legacy mode će nastaviti raditi

### Moje prilagodljive sposobnosti se ne prikazuju

- Provjerite da su registrirane putem WordPress hookova
- Provjerite da implementirate Abilities API ispravno
- Pregledajte WordPress error logove
- Koristite admin stranicu **Ability Visibility** kako biste vidjeli sve registrirane sposobnosti (abilities)

### Dobijam poruke o "neklasificiranoj sposobnosti" (unclassified ability)

- Ovo je normalno za nove treće strane sposobnosti (third-party abilities)
- Pregledajte i klasificirajte ih u adminu obavijesti
- Pogledajte **Ability Visibility** za detalje o klasifikaciji

## Povratna kompatibilnost (Backward Compatibility)

### Postojeće konfiguracije

Ako imate postojeće konfiguracije trećih strana sposobnosti:

- **Legacy mode (Stari način rada)**: Vaša konfiguracija i dalje radi
- **Manual mode (Ručni način rada)**: Vaša konfiguracija i dalje radi
- **Auto mode (Automatski način rada)**: Vaša konfiguracija se ignorira (auto mode preuzima kontrolu)

Da biste zadržali svoju prilagođenu konfiguraciju, ostavite se u Manual ili Legacy modu.

### Vrijednost depreciranja (Deprecation Timeline)

- **v1.12.0**: Legacy i Manual modi i dalje su potpuno podržani
- **v1.13.0+**: Legacy mode može prikazivati obavijesti o depreciranju
- **v2.0.0**: Legacy mode bi mogao biti uklonjen (određeno)

## Najbolje prakse (Best Practices)

### Za nove instalacije

- Koristite Auto mode (to je podrazumijevano)
- Pustite da Superdav AI Agent automatski otkrije sposobnosti
- Koristite Ability Visibility za kontrolu pristupa

### Za postojeće instalacije

- Ažurirajte na WordPress 7.0+ kada je moguće
- Prebacite se na Auto mode za pojednostavljeno upravljanje
- Pregledajte i klasificirajte sposobnosti koristeći Ability Visibility

### Za prilagođene sposobnosti (Custom Abilities)

- Registrirajte sposobnosti putem WordPress hookova (Abilities API)
- Izbjegavajte vlastite registre sposobnosti (custom ability registries)
- Testirajte na WordPress 7.0+ s Auto modeom

1. **Provjerite verziju WordPressa**: Provjerite da imate instaliran WordPress 7.0+ za Automatski način rada (Auto mode).
2. **Pregledajte svoj treći način rada**: Idite u Postavke (Settings) i provjerite trenutni način rada koji koristite.
3. **Ažurirajte ako je potrebno**: Prebacite se na Automatski način rada ako koristite WordPress 7.0+.
4. **Klasificirajte sposobnosti**: Pregledajte i klasificirajte bilo koje neklasificirane sposobnosti.
5. **Testirajte**: Provjerite da li vam treći načini rada (third-party abilities) rade ispravno.

## Povezani naslovi

- **Vidljivost sposobnosti (Ability Visibility)**: Kontrolirajte gdje su prikazane određene sposobnosti.
- **WordPress Abilities API**: Naučite kako se registriraju nativne WordPress sposobnosti.
- **Razvoj trećih načina rada (Third-Party Ability Development)**: Kreirajte sposobnosti koje rade s Automatskim načinom rada.
