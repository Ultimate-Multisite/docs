---
title: Migrað í þriðja markaðarmiðli
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrað til þriðja markaðsmiði (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 breytir hámarkshátt að því að þriðja markaðsmiðil sé skipt á. **Þriðja markaðsmiður eru nú sett á "auto" með default**, sem gerir mögulega nákvæma samþættingar við WordPress Abilities API í WordPress 7.0+ án þess að þarf manuelle uppsetningu.

## Hvað breytist?

### Fyrir v1.12.0

Þriðja markaðsmiðil áttu sér manuelle uppsetningu:

- Þú þurftu að opna "third-party mode" (þriðja markaðsmiði) sem spilt fram
- Miðil séu laðar úr sérstakri registry
- Samþætting með WordPress Abilities API var valfri
- Legacy mode (gamla háttur) var default

### Fyrir v1.12.0

Þriðja markaðsmiðil virka sjálf:

- Third-party mode er sett á "auto" með default
- Miðil eru nákvæmlega samþætt í WordPress Abilities API
- Engin manuelle uppsetning nauðsynleg á WordPress 7.0+
- Legacy mode er framkvæmt fyrir eldri vísperð WordPress

## Færðir eru ávirkjaðir?

### Nýr uppsetningar (WordPress 7.0+)

**Engin aðgerð nauðsynleg.** Third-party mode er sett á "auto" með default, og miðil virka án þess að þarf nanna.

### Færðir eru í gangi

**Uppsetningarnir þín eru varðveittar.** Ef þú notaðir:

- **Legacy mode (gamla háttur)**: Þú ert framkvæmt í legacy mode (engin breyting)
- **Manual third-party mode**: Þú ert framkvæmt í manuelle háttum (engin breyting)
- **Auto mode**: Þú halda þér áfram með auto mode (engin breyting)

### WordPress vísperð fyrir 7.0

**Legacy mode er framkvæmt.** Ef þú ert á WordPress 6.x eða eldri:

- Third-party mode er sett á "legacy" með default
- Þú getur opnað third-party mode manuelle ef þú vilt það
- Uppgrunn til WordPress 7.0+ til að nota nákvæma Abilities API

## Samþættingar í markaðsmiðilum (Understanding the Modes)

### Auto Mode (Nýr default)

**Auto mode** notar nákvæma samþættingar við native WordPress Abilities API:

- Miðil eru registre í gegnum WordPress hooks
- Full samþætting með WordPress 7.0+ Abilities API
- Sjálfvirð samþykki þriðja markaðsmiða
- Engin manuelle uppsetning nauðsynleg

**Hvornamna**: WordPress 7.0+ med tredjepartsevner

### Manuel tilstand (Manual Mode)

**Manuel tilstand** krevst eksplisitt konfigurasjon:

- Du spesifiserer kva tredjepartsevner du vil laste inn
- Nyttig for testing eller selektiv lasting av evner
- Krev redigering av konfigurasjonsfiler
- Meir kontroll, men meir oppsett

**Hvornamna**: Testing, selektiv lasting av evner, eller tilpassa konfigurasjonar

### Eldri tilstand (Legacy Mode)

**Eldri tilstand** brukar det gamle systemet for tredjepartsevner:

- Tilpassa evneregister (ikkje WordPress Abilities API)
- Bakoverkompatibel med eldre versjonar av WordPress
- Ingen innebygd integrasjon med WordPress
- Utgått, men framleis støtta

**Hvornamna**: WordPress 6.x eller eldre, eller når du treng eldre kompatibilitet

## Sjekk noverandi tilstandinnstillinguna

### Via administrasjonspanelet (Admin Panel)

1. Gå til **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Sjå etter innstillinga **Third-Party Mode**
3. Du vil sjå noverandi tilstandinnstillinguna og alternativ for å endre han

### Via kode (Code)

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', eller 'legacy'
```

## Endra tilstandinnstillinguna

### Skift til Auto Mode

Om du er på WordPress 7.0+ og vil bruke auto mode:

1. Gå til **Superdav AI Agent** → **Settings**
2. Finn **Third-Party Mode**
3. Velg **Auto (WordPress Abilities API)**
4. Klikk på **Save**

Superdav AI Agent vil automatisk oppdaga og registrera tredjepartsevner.

### Skift til Manual Mode

Om du vil manuelt kontrollera kva evner som skal lastast:

1. Gå til **Superdav AI Agent** → **Settings**
2. Finn **Third-Party Mode**
3. Velg **Manual**
4. Klikk på **Save**
5. Rediger konfigurasjonsfila di for å spesifisera kva evner som skal lastast

### Skift til Legacy Mode

Om du treng eldre kompatibilitet:

1. Gangi **Superdav AI Agent** $\rightarrow$ **Settings**
2. Finndu **Third-Party Mode**
3. Veldu **Legacy**
4. Klikkki **Save**

## Árangur af Auto Modi

### Sjálfvirkt uppgöng (Automatic Discovery)

Við getum sjálfvirklega uppgöngu á möguleikum eftir:

- Innstæðar pluginum
- Aktivum þema
- Skilmáldýrra pluginum
- Drop-in pluginum

Engin manuell faring nauðsynleg.

### Nætur samstarf (Native Integration)

Möguleikarnir tengjast WordPress Abilities API:

- Samræmd við core WordPress
- Virkar með WordPress admin
- Samþætt í övrum pluginum sem nota Abilities API
- Framtíðarvísandi þegar WordPress þróast

### Förenkild stjórnun (Simplified Management)

- Engin innstillingarfilef er að breyta
- Engin manuell faring á möguleikarnir
- Stjórnun sýn (Ability Visibility controls) virkar sjálfvirklega
- Admin tilmiðnir hafa þér til að hlusta á óskiljað möguleiki

### Betri framkvæmd (Better Performance)

- Möguleikar eru cached (hugstafnar)
- Lazy-loaded á það sem er nauðsynlegt
- Óinnýtt fyrir WordPress 7.0+

## Migratory leið (Migration Path)

### Ef þú ert á WordPress 6.x

1. **Uppgrunn til WordPress 7.0+** (þegar þú ert klár)
2. **Uppfærðu Superdav AI Agent** til v1.12.0+
3. **Breyting Third-Party Mode í Auto** (valfræð fyrir; legacy mode virkar framkvæmd)
4. **Ásynliðu sýn möguleika** til að tryggja rétt aðgangsstöðvar

### Ef þú ert á WordPress 7.0+

1. **Uppfærðu Superdav AI Agent** til v1.12.0+
2. **Staðfestu að Third-Party Mode sé sett á Auto** (það verður í raun sett á það)
3. **Ásynliðu sýn möguleika** til að tryggja rétt aðgangsstöðvar
4. **Prófa third-party möguleikarnir** til að staðfesta virkni

## Feilanaskynning (Troubleshooting)

### Möguleikar eru ekki að ladda í auto mode

- Staðfestu að þú ert á WordPress 7.0+
- Skennu að Third-Party Mode sé sett á "Auto"
- Staðfestu að plugininn sem gefur möguleika sé aktivur
- Skennu WordPress error logs fyrir faringarsfeil

### Ég vil halda legacy mode

- Gangi **Settings** $\rightarrow$ **Third-Party Mode**
- Veldu **Legacy**
- Klikkki **Save**
- Legacy mode verður framkvæmd áfram

### Égjarðar miðlar ekki fram

- Staða þeirra í WordPress hooks erum við að staðfesta
- Staða þess að þær nota upplýsingarskjalann um Abilities API rétt
- Staða WordPress villugreinarum (error logs) eru við að skoða
- Nota **Ability Visibility** admin síðuna til að sjá allar registered abilities

### Ég fái "unclassified ability" tilkynningu

- Þetta er algengt fyrir nýja þriðja marka abilities
- Staða þeirra í admin tilkynningu eru við að skoða og klassifykja þær
- Sjá **Ability Visibility** fyrir upplýsingar um klassifíkuna

## Tilheysting bakandi (Backward Compatibility)

### Nuðurstaða uppsetningar

Ef þú hefur núverandi uppsetningar þriðja marka abilities:

- **Legacy mode**: Uppsetningin þín virkar framkvæmt
- **Manual mode**: Uppsetningin þín virkar framkvæmt
- **Auto mode**: Uppsetningin þín er ignorað (auto mode tekur yfir)

Til að halda við eigin uppsetninguna, halda þig í Manual eða Legacy mode.

### Tími fyrir fjarlagningu (Deprecation Timeline)

- **v1.12.0**: Legacy og Manual modes eru framkvæmt
- **v1.13.0+**: Legacy mode gæti sýna tilkynningum um fjarlagningu
- **v2.0.0**: Legacy mode gæti verið fjarlægð (TBD)

## Bestu háttir að nota (Best Practices)

### Fyrir nýjar uppsetningar

- Nota Auto mode (það er standardinn)
- Láttu Superdav AI Agent uppgönga abilities sjálf
- Nota Ability Visibility til að stjórna aðgangi

### Fyrir núverandi uppsetningar

- Uppgrunn á WordPress 7.0+ þegar mögulegt er
- Skiptu í Auto mode fyrir einfaldlega stjórnun
- Staða og klassifykju abilities með Ability Visibility

### Fyrir eigin abilitys

- Registra abilities með WordPress hooks (Abilities API)
- Fáðu að fylgja með eigin ability registryna
- Testi á WordPress 7.0+ með Auto mode

## Nægt skref

1. **Þýðing á þinni WordPress útgáfu**: Staðaðu eftir að þú ert á 7.0 eða hærri fyrir Auto modil
2. **Fara í raunni um þennan modil**: Gangi í Settings og skoða núverandi modilið

3. **Uppfærðu ef þarf**: Skiftu yfir á Auto modil ef þú ert á WordPress 7.0 eða hærri
4. **Klassifykja færtóms**: Skoða og klassifykja öll óklassifykja færtóms

5. **Prófa**: Staðaðu eftir að þín raunverulega færtóms virki rétt
