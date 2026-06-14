---
title: Sposobnosti Theme Buildera
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Sposobnosti Theme Buildera: Scaffold i Aktivacija Block Tema

Superdav AI Agent v1.12.0 uvodi dvije moćne sposobnosti koje vam omogućuju da direktno iz chat sučelja generirate i implementirate prilagođene block teme.

## Pregled

Sposobnosti **scaffold-block-theme** i **activate-theme** omogućuju agentima da:
- Generiraju kompletnu, spremnu za produkciju block teme na temelju vaših specifikacija
- Automatski aktiviraju teme na vašem sajtu bez ručnog intervencije
- Stvaraju koherentna vizualna identiteta kroz usmjerena odluka o dizajnu

## Scaffold Block Theme (Scaffoldiranje Block Teme)

Sposobnost **scaffold-block-theme** generira novu WordPress block temu s kompletnom strukturalnom komponentom, uključujući:

- `theme.json` konfiguraciju s design tokenovima
- Template datoteke za blokove za uobičajene rasporede
- Prilagođene stilove i varijacije blokova
- Metapodatke teme i deklaracije podrške

### Kako pozvati (Uvjetovati)

U vašoj chatu s Superdav AI Agentom, možete tražiti generiranje teme:

```
"Kreiraj block temu pod nazivom 'Modern Agency' s plavom i bijelom paletom boja,
sans-serif tipografijom i profesionalnim rasporedom"
```

Agent će:
1. Prikupljati vaše dizajnerske preferencije putem razgovora
2. Generirati kompletnu strukturu teme
3. Kreirati sve potrebne datoteke za temu
4. Pripremiti temu za aktivaciju

### Očekivani rezultat

Kada se sposobnost uspješno izvrši, vidjet ćete:

- Potvrdu da je tema scafoldirana (generirana)
- Naziv i lokaciju teme
- Sažetak primijenjenih design tokenova (boje, tipografija, razmak)
- Status spreman za aktivaciju

Primjer izlaza:
```
✓ Tema "Modern Agency" uspješno scafoldirana
  Lokacija: /wp-content/themes/modern-agency/
  Boje: Primarna #0066CC, Sekundarna #FFFFFF
  Tipografija: Inter (sans-serif)
  Status: Spreman za aktivaciju
```

## Activate Theme (Aktivacija Teme)

Sposob na aktiviranje teme omogućuje prebacivanje vašeg sajta na novonascenu ili postojeću blok temu koju ste upravo kreirali.

### Kako pozvati (aktivirati)

Nakon što ste osnuiu temu, možete odmah početi s njom:

```
"Aktiviraj Modern Agency temu"
```

Ili aktivirajte bilo koju postojeću temu:

```
"Prebaci se na Twentytwentyfour temu"
```

### Očekivani rezultat

Kada aktivacija uspije:

- Potvrda aktivirane teme
- Naziv prethodne teme (za referencu)
- URL sajta gdje je tema sada aktiva
- Bilo kakve specifične napomene o postavkama teme

Primjer izlaza:
```
✓ Tema uspješno aktivirana
  Aktivirana tema: Modern Agency
  Prethodna tema: Twentytwentyfour
  Aktivan na: https://yoursite.com
  Napomena: Provjerite početnu stranicu kako biste potvrdili izgled

Temi su postavljaju u direktorijum `/wp-content/themes/` i moraju pratiti konvencije imenovanja WordPressa.
Aktivacija zahtijeva odgovarajuća dozvolama na vašem WordPress sajtu.
Prilagođeni PHP kod u temama je minimalan; koristite pluginove za složene funkcionalnosti.
Teme bazirane na blokovima najbolje rade s WordPressom verzijom 5.9 i novijom.

## Rješavanje problema (Troubleshooting)

**Tema se ne pojavljuje nakon postavljanja (scaffolding)**
- Provjerite postoji li direktorijum teme i ima li odgovarajuće dozvole
- Provjerite da li je `theme.json` ispravan JSON format
- Osigurajte da ime teme ne kolidira s postojećim temama

**Aktivacija ne uspijeva**
- Potvrdite da imate administrator dozvole
- Provjerite da li direktorijum teme WordPressu omogućuje čitanje (readable)
- Pregledajte WordPress logove grešaka za detalje

**Design tokens se ne primjenjuju**
- Provjerite da je sintaksa `theme.json` ispravna
- Obrišite bilo koji pluginovi za keširanje (caching plugins)
- Provjerite da li verzija WordPressa koju koristite podržava tokenove koje koristite

## Sljedeći koraci

Nakon aktiviranja teme, možete:
- Koristiti **vještinu Dizajna sustava estetike** (Design System Aesthetics skill) za usavršavanje tipografije, boja i razmaka
- Prilagoditi individualne stilove blokova putem WordPress block editora
- Dodati prilagođeni CSS u datoteku `style.css` teme
- Kreirati prilagođene šablone blokova (custom block templates) za specifične tipove stranica
