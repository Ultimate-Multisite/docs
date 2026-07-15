---
title: Migration til tredjeparts mode
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migration til tredjeparts-tilstand

Superdav AI Agent v1.12.0 ændrer, hvordan tredjeparts-evner håndteres. **Tredjeparts-tilstand er nu standardindstillet til auto**, hvilket muliggør integration med WordPress Abilities API direkte på WordPress 7.0+ uden manuel konfiguration.

## Hvad har ændret sig? {#what-changed}

### Før v1.12.0 {#before-v1120}

Tredjeparts-evner krævede manuel konfiguration:

- Du skulle eksplicit aktivere "third-party mode"
- Evner blev indlæst fra et custom registry
- Integration med WordPress Abilities API var valgfri
- Legacy mode var standardindstillingen

### Efter v1.12.0 {#after-v1120}

Tredjeparts-evner virker automatisk:

- Tredjeparts-tilstand er standardindstillet til "auto"
- Evner integreres direkte med WordPress Abilities API
- Ingen manuel konfiguration på WordPress 7.0+
- Legacy mode er stadig tilgængelig for ældre WordPress versioner

## Hvem påvirkes? {#who-is-affected}

### Nye installationer (WordPress 7.0+) {#new-installations-wordpress-70}

**Ingen handling nødvendig.** Tredjeparts-tilstand sættes automatisk til "auto", og evner fungerer som standard.

### Eksisterende installationer {#existing-installations}

**Dine indstillinger bevares.** Hvis du brugte:

- **Legacy mode**: Du forbliver i legacy mode (ingen ændring)
- **Manuel tredjeparts-tilstand**: Du forbliver i manuel tilstand (ingen ændring)
- **Auto mode**: Du fortsætter med auto mode (ingen ændring)

### WordPress versioner før 7.0 {#wordpress-versions-before-70}

**Legacy mode er stadig tilgængelig.** Hvis du bruger WordPress 6.x eller tidligere:

- Tredjeparts-tilstand er standardindstillet til "legacy"
- Du kan manuelt aktivere tredjeparts-tilstand, hvis du ønsker det
- Opgrader til WordPress 7.0+ for at bruge den native Abilities API

## Forståelse af tilstandene {#understanding-the-modes}

### Auto Mode (Ny standard) {#auto-mode-new-default}

**Auto mode** bruger integration med den native WordPress Abilities API:

- Evner registreres via WordPress hooks
- Fuld kompatibilitet med WordPress 7.0+ Abilities API
- Automatisk opdagelse af tredjeparts-evner
- Ingen manuel konfiguration nødvendig

**Hvornår skal du bruge det**: WordPress 7.0+ med tredjepartsfunktioner

### Manuel tilstand (Manual Mode) {#manual-mode}

**Manuel tilstand** kræver eksplicit konfiguration:

- Du specificerer, hvilke tredjepartsfunktioner der skal indlæses
- Nyttigt til test eller selektiv indlæsning af funktioner
- Kræver redigering af konfigurationsfiler
- Mere kontrol, men mere opsætning

**Hvornår skal du bruge det**: Test, selektiv indlæsning af funktioner eller brugerdefinerede konfigurationer

### Legacy Tilstand (Legacy Mode) {#legacy-mode}

**Legacy tilstand** bruger det gamle system for tredjepartsfunktioner:

- Custom ability registry (ikke WordPress Abilities API)
- Bagudkompatibel med ældre WordPress versioner
- Ingen indbygget integration med WordPress
- Forældet, men stadig understøttet

**Hvornår skal du bruge det**: WordPress 6.x eller tidligere, eller når du har brug for legacy-kompatibilitet

## Tjek din nuværende tilstand {#checking-your-current-mode}

### Via Admin Panel {#via-admin-panel}

1. Gå til **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Kig efter indstillingen **Third-Party Mode** (Tredjeparts tilstand)
3. Her ser du din nuværende tilstand og muligheder for at ændre den

### Via Kode {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' eller 'legacy'
```

## Ændring af din tilstand {#changing-your-mode}

### Skift til Auto Mode (Automatisk tilstand) {#switch-to-auto-mode}

Hvis du er på WordPress 7.0+ og ønsker at bruge auto mode:

1. Gå til **Superdav AI Agent** → **Settings**
2. Find **Third-Party Mode**
3. Vælg **Auto (WordPress Abilities API)**
4. Klik på **Save** (Gem)

Superdav AI Agent vil automatisk opdage og registrere tredjepartsfunktioner.

### Skift til Manual Mode (Manuel tilstand) {#switch-to-manual-mode}

Hvis du ønsker manuel kontrol over, hvilke funktioner der indlæses:

1. Gå til **Superdav AI Agent** → **Settings**
2. Find **Third-Party Mode**
3. Vælg **Manual**
4. Klik på **Save** (Gem)
5. Rediger din konfigurationsfil for at specificere, hvilke funktioner der skal indlæses

### Skift til Legacy Mode (Gammel tilstand) {#switch-to-legacy-mode}

Hvis du har brug for legacy-kompatibilitet:

1. Gå til **Superdav AI Agent** → **Indstillinger**
2. Find **Third-Party Mode** (Tredjeparts-tilstand)
3. Vælg **Legacy** (Gammel tilstand)
4. Klik på **Gem**

## Fordele ved Auto Mode {#benefits-of-auto-mode}

### Automatisk Opdagelse {#automatic-discovery}

Evner opdages automatisk fra:

- Installerede plugins
- Aktivt tema
- Skal-bruge plugins
- Drop-in plugins

Ingen manuel registrering er nødvendig.

### Naturlig Integration {#native-integration}

Evner integreres med WordPress Abilities API:

- Konsistent med WordPress kerne
- Virker med WordPress admin
- Kompatibel med andre plugins, der bruger Abilities API
- Fremtidssikret, da WordPress udvikler sig

### Forenklet Administration {#simplified-management}

- Ingen konfigurationsfiler at redigere
- Ingen manuel registrering af evner
- Ability Visibility kontroller virker automatisk
- Admin notifikationer advarer dig om uklassificerede evner

### Bedre Ydeevne {#better-performance}

- Evner caches (gemmes)
- Lazy-loaded efter behov
- Optimeret til WordPress 7.0+

## Migrationsvej {#migration-path}

### Hvis du er på WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Opgrader til WordPress 7.0+** (når du er klar)
2. **Opdater Superdav AI Agent** til v1.12.0+
3. **Skift tredjeparts-tilstand til Auto** (valgfrit; legacy mode virker stadig)
4. **Gennemgå synligheden af evnerne** for at sikre korrekt adgangskontrol

### Hvis du er på WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Opdater Superdav AI Agent** til v1.12.0+
2. **Bekræft, at tredjeparts-tilstanden er sat til Auto** (den burde være det som standard)
3. **Gennemgå synligheden af evnerne** for at sikre korrekt adgangskontrol
4. **Test de tredjeparts-evner**, du har installeret, for at bekræfte, at de virker

## Fejlfinding {#troubleshooting}

### Evner indlæses ikke i auto mode {#abilities-arent-loading-in-auto-mode}

- Tjek, at du er på WordPress 7.0+
- Kontroller, at tredjeparts-tilstanden er sat til "Auto"
- Bekræft, at plugin'et, der leverer evnen, er aktivt
- Tjek WordPress fejlloggene for registreringsfejl

### Jeg vil beholde legacy mode {#i-want-to-keep-legacy-mode}

- Gå til **Indstillinger** → **Third-Party Mode** (Tredjeparts-tilstand)
- Vælg **Legacy** (Gammel tilstand)
- Klik på **Gem**
- Legacy mode vil fortsat fungere

### Mine egne egenskaber vises ikke {#my-custom-abilities-arent-showing}

- Tjek, at de er registreret via WordPress hooks
- Kontroller, at de implementerer Abilities API korrekt
- Gennemgå WordPress fejllogs
- Brug admin-siden **Ability Visibility** for at se alle registrerede abilities

### Jeg får "unclassified ability" (uklassificeret egenskab) meddelelser {#im-getting-unclassified-ability-notices}

- Dette er normalt for nye tredjeparts abilities
- Gennemgå og klassificér dem i admin-meddelelsen
- Se **Ability Visibility** for detaljer om klassificering

## Bagudkompatibilitet {#backward-compatibility}

### Eksisterende konfigurationer {#existing-configurations}

Hvis du har eksisterende tredjeparts ability konfigurationer:

- **Legacy mode (Gammel tilstand)**: Din konfiguration fortsætter med at virke
- **Manual mode (Manuel tilstand)**: Din konfiguration fortsætter med at virke
- **Auto mode (Automatisk tilstand)**: Din konfiguration ignoreres (auto mode overtager)

For at bevare din custom konfiguration, skal du blive i Manual eller Legacy mode.

### Deprecation tidslinje {#deprecation-timeline}

- **v1.12.0**: Legacy og Manual modes understøttes stadig fuldt
- **v1.13.0+**: Legacy mode kan vise deprecationsmeddelelser
- **v2.0.0**: Legacy mode kan blive fjernet (TBD)

## Bedste praksis {#best-practices}

### Til nye installationer {#for-new-installations}

- Brug Auto mode (det er standardindstillingen)
- Lad Superdav AI Agent automatisk opdage abilities
- Brug Ability Visibility til at styre adgang

### Til eksisterende installationer {#for-existing-installations}

- Opgrader til WordPress 7.0+ når det er muligt
- Skift til Auto mode for forenklet administration
- Gennemgå og klassificér abilities ved hjælp af Ability Visibility

### Til custom abilities {#for-custom-abilities}

- Registrer abilities via WordPress hooks (Abilities API)
- Undgå custom ability registries
- Test på WordPress 7.0+ med Auto mode

## Næste skridt {#next-steps}

1. **Tjek din WordPress-version**: Sør dig for, at du kører version 7.0+ for Auto mode
2. **Gennemgå din tredjeparts mode**: Gå til Indstillinger og tjek din nuværende mode
3. **Opdater hvis nødvendigt**: Skift til Auto mode, hvis du kører WordPress 7.0+
4. **Klassificer evner**: Gennemse og klassificer eventuelle uklassificerede evner
5. **Test**: Bekræft, at dine tredjeparts evner virker korrekt

## Relaterede emner {#related-topics}

- **Ability Visibility (Evne synlighed)**: Kontroller, hvilke evner der er eksponeret hvor
- **WordPress Abilities API**: Lær om den indbyggede WordPress ability registrering
- **Third-Party Ability Development (Udvikling af tredjeparts evner)**: Opret evner, der fungerer med Auto mode
