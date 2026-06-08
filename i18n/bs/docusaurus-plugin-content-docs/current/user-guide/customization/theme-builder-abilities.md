---
title: Funkcionalnosti Grajača Tema
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Sposobnosti za Izgradnju Tema: Scaffold i Aktivacija Block Tema

Superdav AI Agent v1.12.0 uvodi dvije moćne sposobnosti koje vam omogućavaju da generišete i implementirate prilagođene block teme direktno iz chat interfejsa.

## Pregled

Sposobnosti **scaffold-block-theme** i **activate-theme** omogućavaju agentima da:
- Generišu potpune, spremne za produkciju block teme na osnovu vaših specifikacija
- Automatski aktiviraju teme na vašoj stranici bez ručne intervencije
- Kreiraju kohezivne vizuelne identitete kroz vođene dizajnerske odluke

## Scaffold Block Theme

Sposobnost **scaffold-block-theme** generiše novu WordPress block temu sa kompletnom strukturom teme, uključujući:

- `theme.json` konfiguraciju sa design tokenima
- Block template fajlove za uobičajene rasporede
- Prilagođene block stilove i varijacije
- Metadata teme i deklaracije podrške

### Kako se aktivira

U vašem chatu sa Superdav AI Agentom, možete zatražiti generisanje teme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent će:
1. Sakupiti vaše dizajnerske preferencije kroz razgovor
2. Generisati kompletnu strukturu teme
3. Kreirati sve potrebne fajlove teme
4. Pripremiti temu za aktivaciju

### Očekivani izlaz

Kada sposobnost uspješno izvrši, videćete:

- Potvrdu da je tema uspešno scaffoldovana
- Ime i lokacija teme
- Sažetak primenjenih design tokena (boje, tipografija, razmak)
- Status spreman za aktivaciju

Primjer izlaza:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme

Sposobnost **activate-theme** prebacuje vašu stranicu na novoinizializovanu ili postojeću block temu.

### Kako se aktivira

Nakon scaffoldovanja teme, možete je odmah aktivirati:

```
"Activate the Modern Agency theme"
```

Ili aktivirati bilo koju postojeću temu:

```
"Switch to the Twentytwentyfour theme"
```

### Očekivani izlaz

Kada je aktivacija uspješna:

- Potvrda aktivne teme
- Ime prethodne teme (radi reference)
- URL stranice gde je tema sada aktivna
- Bilo kakve napomene za podešavanje specifične za temu

Primjer izlaza:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Radni tok: Scaffold i Aktivacija

Tipičan radni tok kombinuje obe sposobnosti:

1. **Zahtjev za generisanje teme**: "Create a block theme for my SaaS landing page"
2. **Agent scaffolduje temu**: Generiše fajlove i design tokene
3. **Pregled i fino podešavanje**: Razgovor o promjenama dizajna ako je potrebno
4. **Aktivacija**: "Activate the theme now"
5. **Verifikacija**: Posjetite svoju stranicu da potvrdite da je novi dizajn aktivan

## Design Tokeni i Prilagođavanje

Scaffoldovane teme koriste WordPress design tokene (preko `theme.json`) za:

- **Boje**: Primarna, sekundarna, akcent, neutralna paleta
- **Tipografija**: Font porodice, veličine, težine, linijski razmak
- **Razmak**: Padding, margin, gap skale
- **Granice**: Tokeni za radijus i širinu
- **Sjenke**: Nivoi visine (Elevation)

Ovi tokeni su centralizovani u `theme.json`, što olakšava prilagođavanje cijelog vašeg dizajnerskog sistema iz jednog fajla.

## Ograničenja i Napomene

- Teme se scaffolduju u `/wp-content/themes/` i moraju pratiti WordPress konvencije imenovanja
- Aktivacija zahtijeva odgovarajuće dozvole na vašoj WordPress stranici
- Custom PHP kod u temama je minimalan; koristite plugin za kompleksnu funkcionalnost
- Block teme najbolje funkcionišu sa WordPress verzijom 5.9 i novije

## Rješavanje problema

**Tema se ne pojavljuje nakon scaffoldovanja**
- Provjerite da li direktorijum teme postoji i ima odgovarajuće dozvole
- Provjerite da li je `theme.json` validan JSON
- Osigurajte da ime teme ne kolidira sa postojećim temama

**Aktivacija ne uspijeva**
- Potvrdite da imate administrator dozvole
- Provjerite da li je direktorijum teme čitljiv za WordPress
- Pregledajte WordPress logove grešaka radi detalja

**Design tokeni se ne primjenjuju**
- Provjerite da li je sintaksa `theme.json` ispravna
- Obrišite sve caching pluginove
- Provjerite da li vaša WordPress verzija podržava tokene koje koristite

## Sljedeći koraci

Nakon aktivacije teme, možete:
- Upotrijebiti **Design System Aesthetics skill** za fino podešavanje tipografije, boja i razmaka
- Prilagoditi pojedinačne block stilove putem WordPress block editora
- Dodati custom CSS u `style.css` fajl teme
- Kreirati custom block template za specifične tipove stranica
