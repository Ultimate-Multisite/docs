---
title: Migration till tredjepartsläge
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migration till Third-Party Mode

Superdav AI Agent v1.12.0 ändrar hur tredjepartskapaciteter hanteras. **Third-party mode är nu standardinställningen (auto)**, vilket möjliggör inbyggd integration med WordPress Abilities API på WordPress 7.0+ utan manuell konfiguration.

## Vad har ändrats?

### Innan v1.12.0

Tredjepartskapaciteter krävde manuell konfiguration:

- Du var tvungen att explicit aktivera "third-party mode"
- Kapaciteterna laddades från ett anpassat register
- Integration med WordPress Abilities API var valfri
- Legacy mode var standardinställningen

### Efter v1.12.0

Tredjepartskapaciteter fungerar automatiskt:

- Third-party mode är standardinställningen "auto"
- Kapaciteterna integreras inbyggt med WordPress Abilities API
- Ingen manuell konfiguration behövs på WordPress 7.0+
- Legacy mode finns fortfarande tillgängligt för äldre WordPress-versioner

## Vem påverkas?

### Nya installationer (WordPress 7.0+)

**Inga åtgärder krävs.** Third-party mode ställs automatiskt in på "auto", och kapaciteterna fungerar direkt ur lådan.

### Befintliga installationer

**Dina inställningar sparas.** Om du använde:

- **Legacy mode**: Du förblir i legacy mode (ingen förändring)
- **Manuell third-party mode**: Du förblir i manuellt läge (ingen förändring)
- **Auto mode**: Du fortsätter med auto mode (ingen förändring)

### WordPress-versioner före 7.0

**Legacy mode är fortfarande tillgängligt.** Om du kör WordPress 6.x eller äldre:

- Third-party mode standardinställs till "legacy"
- Du kan manuellt aktivera third-party mode om du önskar
- Uppgradera till WordPress 7.0+ för att använda det inbyggda Abilities API

## Förstå lägena

### Auto Mode (Ny standard)

**Auto mode** använder inbyggd integration med WordPress Abilities API:

- Kapaciteterna registreras via WordPress hooks
- Full kompatibilitet med WordPress 7.0+ Abilities API
- Automatisk upptäckt av tredjepartskapaciteter
- Ingen manuell konfiguration behövs

**När ska man använda det**: WordPress 7.0+ med tredjepartskapaciteter

### Manual Mode

**Manual mode** kräver explicit konfiguration:

- Du specificerar vilka tredjepartskapaciteter som ska laddas
- Användbart för testning eller selektiv kapacitetsladdning
- Kräver redigering av konfigurationsfiler
- Mer kontroll, men mer uppsättning

**När ska man använda det**: Testning, selektiv kapacitetsladdning eller anpassade konfigurationer

### Legacy Mode

**Legacy mode** använder det gamla tredjepartskapacitetssystemet:

- Anpassat kapacitetsregister (inte WordPress Abilities API)
- Bakåtkompatibelt med äldre WordPress-versioner
- Ingen inbyggd WordPress-integration
- Avvecklat men fortfarande stöds

**När ska man använda det**: WordPress 6.x eller äldre, eller när du behöver legacy-kompatibilitet

## Kontrollera ditt nuvarande läge

### Via Admin Panel

1. Gå till **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Leta efter inställningen **Third-Party Mode**
3. Du ser ditt nuvarande läge och alternativ för att ändra det

### Via Code

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', eller 'legacy'
```

## Ändra ditt läge

### Växla till Auto Mode

Om du kör WordPress 7.0+ och vill använda auto mode:

1. Gå till **Superdav AI Agent** → **Settings**
2. Hitta **Third-Party Mode**
3. Välj **Auto (WordPress Abilities API)**
4. Klicka på **Save**

Superdav AI Agent kommer automatiskt att upptäcka och registrera tredjepartskapaciteter.

### Växla till Manual Mode

Om du vill styra manuellt vilka kapaciteter som laddas:

1. Gå till **Superdav AI Agent** → **Settings**
2. Hitta **Third-Party Mode**
3. Välj **Manual**
4. Klicka på **Save**
5. Redigera din konfigurationsfil för att specificera vilka kapaciteter som ska laddas

### Växla till Legacy Mode

Om du behöver legacy-kompatibilitet:

1. Gå till **Superdav AI Agent** → **Settings**
2. Hitta **Third-Party Mode**
3. Välj **Legacy**
4. Klicka på **Save**

## Fördelar med Auto Mode

### Automatisk upptäckt

Kapaciteter upptäcks automatiskt från:

- Installerade plugins
- Aktivt tema
- Must-use plugins
- Drop-in plugins

Ingen manuell registrering behövs.

### Inbyggd integration

Kapaciteterna integreras med WordPress Abilities API:

- Konsistent med WordPress core
- Fungerar med WordPress admin
- Kompatibelt med andra plugins som använder Abilities API
- Framtidssäkrat när WordPress utvecklas

### Förenklad hantering

- Inga konfigurationsfiler att redigera
- Ingen manuell kapacitetsregistrering
- Ability Visibility-kontroller fungerar automatiskt
- Admin notices varnar dig för oklassificerade kapaciteter

### Bättre prestanda

- Kapaciteterna cachas
- Laddas vid behov (lazy-loaded)
- Optimerat för WordPress 7.0+

## Migrationsväg

### Om du kör WordPress 6.x

1. **Uppgradera till WordPress 7.0+** (när det är redo)
2. **Uppdatera Superdav AI Agent** till v1.12.0+
3. **Ändra third-party mode till Auto** (valfritt; legacy mode fungerar fortfarande)
4. **Granska kapacitetsvisibiliteten** för att säkerställa korrekt åtkomstkontroll

### Om du kör WordPress 7.0+

1. **Uppdatera Superdav AI Agent** till v1.12.0+
2. **Verifiera att third-party mode är inställt på Auto** (det bör vara standard)
3. **Granska kapacitetsvisibiliteten** för att säkerställa korrekt åtkomstkontroll
4. **Testa tredjepartskapaciteterna** för att bekräfta att de fungerar

## Felsökning

### Kapaciteterna laddas inte i auto mode

- Verifiera att du kör WordPress 7.0+
- Kontrollera att third-party mode är inställt på "Auto"
- Verifiera att pluginet som tillhandahåller kapaciteten är aktivt
- Kontrollera WordPress felloggar efter registreringsfel

### Jag vill behålla legacy mode

- Gå till **Settings** → **Third-Party Mode**
- Välj **Legacy**
- Klicka på **Save**
- Legacy mode kommer att fortsätta fungera

### Mina anpassade kapaciteter visas inte

- Verifiera att de är registrerade via WordPress hooks
- Kontrollera att de implementerar Abilities API korrekt
- Granska WordPress felloggar
- Använd admin-sidan **Ability Visibility** för att se alla registrerade kapaciteter

### Jag får meddelanden om "oklassificerad kapacitet"

- Detta är normalt för nya tredjepartskapaciteter
- Granska och klassificera dem i admin-meddelandet
- Se **Ability Visibility** för detaljer om klassificering

## Bakåtkompatibilitet

### Befintliga konfigurationer

Om du har befintliga tredjepartskapacitetskonfigurationer:

- **Legacy mode**: Din konfiguration fortsätter att fungera
- **Manual mode**: Din konfiguration fortsätter att fungera
- **Auto mode**: Din konfiguration ignoreras (auto mode tar över)

För att behålla din anpassade konfiguration, stanna i Manual eller Legacy mode.

### Avvecklingstidslinje

- **v1.12.0**: Legacy och Manual modes stöds fortfarande fullt ut
- **v1.13.0+**: Legacy mode kan visa avvecklingsmeddelanden
- **v2.0.0**: Legacy mode kan tas bort (TBD)

## Bästa praxis

### För nya installationer

- Använd Auto mode (det är standard)
- Låt Superdav AI Agent upptäcka kapaciteterna automatiskt
- Använd Ability Visibility för att styra åtkomsten

### För befintliga installationer

- Uppgradera till WordPress 7.0+ när det är möjligt
- Växla till Auto mode för förenklad hantering
- Granska och klassificera kapaciteterna med Ability Visibility

### För anpassade kapaciteter

- Registrera kapaciteter via WordPress hooks (Abilities API)
- Undvik anpassade kapacitetsregister
- Testa på WordPress 7.0+ med Auto mode

## Nästa steg

1. **Kontrollera din WordPress-version**: Verifiera att du kör 7.0+ för Auto mode
2. **Granska ditt third-party mode**: Gå till Settings och kontrollera ditt nuvarande läge
3. **Uppdatera vid behov**: Växla till Auto mode om du kör WordPress 7.0+
4. **Klassificera kapaciteter**: Granska och klassificera alla oklassificerade kapaciteter
5. **Testa**: Verifiera att dina tredjepartskapaciteter fungerar korrekt

## Relaterade ämnen

- **Ability Visibility**: Styr vilka kapaciteter som exponeras var
- **WordPress Abilities API**: Lär dig om inbyggd WordPress-kapacitetsregistrering
- **Third-Party Ability Development**: Skapa kapaciteter som fungerar med Auto mode
