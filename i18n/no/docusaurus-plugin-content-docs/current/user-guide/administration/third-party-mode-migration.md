---
title: Migrering til tredjepartsmodus
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrering til tredjepartsmodus

Superdav AI Agent v1.12.0 endrer måten tredjepartsfunksjoner (abilities) håndteres på. **Tredjepartsmodus er nå standard satt til auto**, noe som muliggjør integrasjon med native WordPress Abilities API på WordPress 7.0+ uten manuell konfigurasjon.

## Hva har endret seg? {#what-changed}

### Før v1.12.0 {#before-v1120}

Tredjepartsfunksjoner krevde manuell konfigurasjon:

- Du måtte eksplisitt aktivere "tredjepartsmodus"
- Funksjoner ble lastet fra et eget register
- Integrasjon med WordPress Abilities API var valgfritt
- Legacy-modus var standard

### Etter v1.12.0 {#after-v1120}

Tredjepartsfunksjoner fungerer automatisk:

- Tredjepartsmodus er standard satt til "auto"
- Funksjoner integreres naturlig med WordPress Abilities API
- Ingen manuell konfigurasjon er nødvendig på WordPress 7.0+
- Legacy-modus er fortsatt tilgjengelig for eldre WordPress-versjoner

## Hvem er berørt? {#who-is-affected}

### Nye installasjoner (WordPress 7.0+) {#new-installations-wordpress-70}

**Ingen handling kreves.** Tredjepartsmodus er automatisk satt til "auto", og funksjonene fungerer rett ut av boksen.

### Eksisterende installasjoner {#existing-installations}

**Innstillingene dine bevares.** Hvis du brukte:

- **Legacy-modus**: Du forblir i legacy-modus (ingen endring)
- **Manuell tredjepartsmodus**: Du forblir i manuell modus (ingen endring)
- **Auto-modus**: Du fortsetter med auto-modus (ingen endring)

### WordPress-versjoner før 7.0 {#wordpress-versions-before-70}

**Legacy-modus er fortsatt tilgjengelig.** Hvis du er på WordPress 6.x eller eldre:

- Tredjepartsmodus er standard satt til "legacy"
- Du kan manuelt aktivere tredjepartsmodus om ønskelig
- Oppgrader til WordPress 7.0+ for å bruke native Abilities API

## Forstå modusene {#understanding-the-modes}

### Auto-modus (Ny standard) {#auto-mode-new-default}

**Auto-modus** bruker native WordPress Abilities API-integrasjon:

- Funksjoner registreres via WordPress hooks
- Full kompatibilitet med WordPress 7.0+ Abilities API
- Automatisk oppdagelse av tredjepartsfunksjoner
- Ingen manuell konfigurasjon nødvendig

**Når du skal bruke den**: WordPress 7.0+ med tredjepartsfunksjoner

### Manuell modus {#manual-mode}

**Manuell modus** krever eksplisitt konfigurasjon:

- Du spesifiserer hvilke tredjepartsfunksjoner som skal lastes
- Nyttig for testing eller selektiv lasting av funksjoner
- Krever redigering av konfigurasjonsfiler
- Mer kontroll, men mer oppsett

**Når du skal bruke den**: Testing, selektiv lasting av funksjoner eller tilpassede konfigurasjoner

### Legacy-modus {#legacy-mode}

**Legacy-modus** bruker det gamle tredjepartsfunksjonssystemet:

- Eget funksjonsregister (ikke WordPress Abilities API)
- Bakoverkompatibel med eldre WordPress-versjoner
- Ingen native WordPress-integrasjon
- Avviklet, men fortsatt støttet

**Når du skal bruke den**: WordPress 6.x eller eldre, eller når du trenger legacy-kompatibilitet

## Sjekke din nåværende modus {#checking-your-current-mode}

### Via administrasjonspanelet {#via-admin-panel}

1. Gå til **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Se etter innstillingen **Third-Party Mode**
3. Du vil se din nåværende modus og alternativer for å endre den

### Via kode {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', eller 'legacy'
```

## Endre din modus {#changing-your-mode}

### Bytt til Auto-modus {#switch-to-auto-mode}

Hvis du er på WordPress 7.0+ og ønsker å bruke auto-modus:

1. Gå til **Superdav AI Agent** → **Settings**
2. Finn **Third-Party Mode**
3. Velg **Auto (WordPress Abilities API)**
4. Klikk **Save**

Superdav AI Agent vil automatisk oppdage og registrere tredjepartsfunksjoner.

### Bytt til Manuell modus {#switch-to-manual-mode}

Hvis du vil manuelt kontrollere hvilke funksjoner som lastes:

1. Gå til **Superdav AI Agent** → **Settings**
2. Finn **Third-Party Mode**
3. Velg **Manual**
4. Klikk **Save**
5. Rediger konfigurasjonsfilen din for å spesifisere hvilke funksjoner som skal lastes

### Bytt til Legacy-modus {#switch-to-legacy-mode}

Hvis du trenger legacy-kompatibilitet:

1. Gå til **Superdav AI Agent** → **Settings**
2. Finn **Third-Party Mode**
3. Velg **Legacy**
4. Klikk **Save**

## Fordeler med Auto-modus {#benefits-of-auto-mode}

### Automatisk oppdagelse {#automatic-discovery}

Funksjoner oppdages automatisk fra:

- Installerte plugins
- Aktivt tema
- Must-use plugins
- Drop-in plugins

Ingen manuell registrering nødvendig.

### Native integrasjon {#native-integration}

Funksjoner integreres med WordPress Abilities API:

- Konsistent med WordPress core
- Fungerer med WordPress admin
- Kompatibel med andre plugins som bruker Abilities API
- Fremtidssikret etter hvert som WordPress utvikler seg

### Forenklet administrasjon {#simplified-management}

- Ingen konfigurasjonsfiler å redigere
- Ingen manuell funksjonsregistrering
- Ability Visibility-kontroller fungerer automatisk
- Admin-varsler advarer deg om ukategoriserte funksjoner

### Bedre ytelse {#better-performance}

- Funksjoner blir cachet
- Lastes ved behov (lazy-loaded)
- Optimalisert for WordPress 7.0+

## Migrasjonsvei {#migration-path}

### Hvis du er på WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Oppgrader til WordPress 7.0+** (når du er klar)
2. **Oppdater Superdav AI Agent** til v1.12.0+
3. **Bytt tredjepartsmodus til Auto** (valgfritt; legacy-modus fungerer fortsatt)
4. **Gjennomgå synligheten av funksjoner** for å sikre riktig tilgangskontroll

### Hvis du er på WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Oppdater Superdav AI Agent** til v1.12.0+
2. **Verifiser at tredjepartsmodus er satt til Auto** (det skal være som standard)
3. **Gjennomgå synligheten av funksjoner** for å sikre riktig tilgangskontroll
4. **Test tredjepartsfunksjoner** for å bekrefte at de fungerer

## Feilsøking {#troubleshooting}

### Funksjoner lastes ikke i auto-modus {#abilities-arent-loading-in-auto-mode}

- Verifiser at du er på WordPress 7.0+
- Sjekk at tredjepartsmodus er satt til "Auto"
- Verifiser at pluginet som gir funksjonen er aktivt
- Sjekk WordPress feillogger for registreringsfeil

### Jeg vil beholde legacy-modus {#i-want-to-keep-legacy-mode}

- Gå til **Settings** → **Third-Party Mode**
- Velg **Legacy**
- Klikk **Save**
- Legacy-modus vil fortsette å fungere

### Mine egne funksjoner vises ikke {#my-custom-abilities-arent-showing}

- Verifiser at de er registrert via WordPress hooks
- Sjekk at de implementerer Abilities API korrekt
- Gjennomgå WordPress feillogger
- Bruk admin-siden **Ability Visibility** for å se alle registrerte funksjoner

### Jeg får varsler om "ukategorisert funksjon" {#im-getting-unclassified-ability-notices}

- Dette er normalt for nye tredjepartsfunksjoner
- Gjennomgå og kategoriser dem i admin-varslet
- Se **Ability Visibility** for detaljer om kategorisering

## Bakoverkompatibilitet {#backward-compatibility}

### Eksisterende konfigurasjoner {#existing-configurations}

Hvis du har eksisterende tredjepartsfunksjonskonfigurasjoner:

- **Legacy-modus**: Din konfigurasjon fortsetter å fungere
- **Manuell modus**: Din konfigurasjon fortsetter å fungere
- **Auto-modus**: Din konfigurasjon ignoreres (auto-modus tar over)

For å beholde din tilpassede konfigurasjon, hold deg i Manuell eller Legacy-modus.

### Avviklingsplan {#deprecation-timeline}

- **v1.12.0**: Legacy- og Manuell-modus er fortsatt fullt støttet
- **v1.13.0+**: Legacy-modus kan vise avviklingsvarsler
- **v2.0.0**: Legacy-modus kan fjernes (TBD)

## Beste praksis {#best-practices}

### For nye installasjoner {#for-new-installations}

- Bruk Auto-modus (det er standard)
- La Superdav AI Agent oppdage funksjoner automatisk
- Bruk Ability Visibility for å kontrollere tilgangen

### For eksisterende installasjoner {#for-existing-installations}

- Oppgrader til WordPress 7.0+ når det er mulig
- Bytt til Auto-modus for forenklet administrasjon
- Gjennomgå og kategoriser funksjoner ved hjelp av Ability Visibility

### For tilpassede funksjoner {#for-custom-abilities}

- Registrer funksjoner via WordPress hooks (Abilities API)
- Unngå egne funksjonsregistre
- Test på WordPress 7.0+ med Auto-modus

## Neste skritt {#next-steps}

1. **Sjekk din WordPress-versjon**: Verifiser at du er på 7.0+ for Auto-modus
2. **Gjennomgå tredjepartsmodus**: Gå til Settings og sjekk din nåværende modus
3. **Oppdater ved behov**: Bytt til Auto-modus hvis du er på WordPress 7.0+
4. **Kategoriser funksjoner**: Gjennomgå og kategoriser eventuelle ukategoriserte funksjoner
5. **Test**: Verifiser at dine tredjepartsfunksjoner fungerer riktig

## Relaterte emner {#related-topics}

- **Ability Visibility**: Kontroller hvilke funksjoner som eksponeres hvor
- **WordPress Abilities API**: Lær om native WordPress funksjonsregistrering
- **Third-Party Ability Development**: Lag funksjoner som fungerer med Auto-modus
