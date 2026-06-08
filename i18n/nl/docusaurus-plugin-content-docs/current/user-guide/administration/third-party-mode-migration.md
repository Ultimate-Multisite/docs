---
title: Migratie naar Third-Party Mode
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migratie naar Third-Party Mode

Superdav AI Agent v1.12.0 verandert de manier waarop third-party abilities worden afgehandeld. **Third-party mode staat nu standaard op auto**, waardoor native WordPress Abilities API-integratie mogelijk is op WordPress 7.0+ zonder handmatige configuratie.

## Wat is er veranderd?

### Voor v1.12.0

Third-party abilities vereisten handmatige configuratie:

- U moest "third-party mode" expliciet inschakelen
- Abilities werden geladen vanuit een custom registry
- Integratie met de WordPress Abilities API was optioneel
- Legacy mode was de standaardinstelling

### Na v1.12.0

Third-party abilities werken automatisch:

- Third-party mode staat standaard op "auto"
- Abilities integreren native met de WordPress Abilities API
- Geen handmatige configuratie nodig op WordPress 7.0+
- Legacy mode is nog steeds beschikbaar voor oudere WordPress-versies

## Wie wordt geraakt?

### Nieuwe installaties (WordPress 7.0+)

**Geen actie vereist.** Third-party mode wordt automatisch ingesteld op "auto", en de abilities werken direct.

### Bestaande installaties

**Uw instellingen worden behouden.** Als u gebruikte:

- **Legacy mode**: U blijft in legacy mode (geen wijziging)
- **Handmatige third-party mode**: U blijft in handmatige modus (geen wijziging)
- **Auto mode**: U gaat door met auto mode (geen wijziging)

### WordPress-versies vóór 7.0

**Legacy mode is nog steeds beschikbaar.** Als u op WordPress 6.x of eerder zit:

- Third-party mode staat standaard op "legacy"
- U kunt third-party mode handmatig inschakelen indien gewenst
- Upgrade naar WordPress 7.0+ om de native Abilities API te gebruiken

## De modi begrijpen

### Auto Mode (Nieuwe standaard)

**Auto mode** gebruikt native WordPress Abilities API-integratie:

- Abilities worden geregistreerd via WordPress hooks
- Volledige compatibiliteit met WordPress 7.0+ Abilities API
- Automatische ontdekking van third-party abilities
- Geen handmatige configuratie nodig

**Wanneer te gebruiken**: WordPress 7.0+ met third-party abilities

### Manual Mode

**Manual mode** vereist expliciete configuratie:

- U specificeert welke third-party abilities moeten worden geladen
- Handig voor testen of selectief laden van abilities
- Vereist het bewerken van configuratiebestanden
- Meer controle, maar meer opzet

**Wanneer te gebruiken**: Testen, selectief laden van abilities, of aangepaste configuraties

### Legacy Mode

**Legacy mode** gebruikt het oude third-party ability-systeem:

- Custom ability registry (geen WordPress Abilities API)
- Achtercompatibel met oudere WordPress-versies
- Geen native WordPress-integratie
- Verouderd, maar nog steeds ondersteund

**Wanneer te gebruiken**: WordPress 6.x of eerder, of wanneer u legacy compatibiliteit nodig heeft

## Uw huidige mode controleren

### Via het Admin Dashboard

1. Ga naar **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Zoek naar de instelling **Third-Party Mode**
3. U ziet uw huidige modus en opties om deze te wijzigen

### Via Code

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', of 'legacy'
```

## Uw mode wijzigen

### Overstappen naar Auto Mode

Als u op WordPress 7.0+ zit en auto mode wilt gebruiken:

1. Ga naar **Superdav AI Agent** → **Settings**
2. Zoek naar **Third-Party Mode**
3. Selecteer **Auto (WordPress Abilities API)**
4. Klik op **Save**

Superdav AI Agent ontdekt en registreert automatisch third-party abilities.

### Overstappen naar Manual Mode

Als u handmatig wilt bepalen welke abilities geladen worden:

1. Ga naar **Superdav AI Agent** → **Settings**
2. Zoek naar **Third-Party Mode**
3. Selecteer **Manual**
4. Klik op **Save**
5. Bewerk uw configuratiebestand om te specificeren welke abilities moeten worden geladen

### Overstappen naar Legacy Mode

Als u legacy compatibiliteit nodig heeft:

1. Ga naar **Superdav AI Agent** → **Settings**
2. Zoek naar **Third-Party Mode**
3. Selecteer **Legacy**
4. Klik op **Save**

## Voordelen van Auto Mode

### Automatische Ontdekking

Abilities worden automatisch ontdekt uit:

- Geïnstalleerde plugins
- Actief thema
- Must-use plugins
- Drop-in plugins

Geen handmatige registratie nodig.

### Native Integratie

Abilities integreren met de WordPress Abilities API:

- Consistent met de WordPress core
- Werkt met het WordPress admin
- Compatibel met andere plugins die de Abilities API gebruiken
- Toekomstbestendig naarmate WordPress evolueert

### Vereenvoudigd Beheer

- Geen configuratiebestanden meer te bewerken
- Geen handmatige ability registratie
- Ability Visibility werkt automatisch
- Admin meldingen waarschuwen u voor ongeclassificeerde abilities

### Betere Prestaties

- Abilities worden gecached
- Worden lazy-loaded op aanvraag
- Geoptimaliseerd voor WordPress 7.0+

## Migratieroute

### Als u op WordPress 6.x zit

1. **Upgrade naar WordPress 7.0+** (wanneer u er klaar voor bent)
2. **Update Superdav AI Agent** naar v1.12.0+
3. **Wijzig third-party mode naar Auto** (optioneel; legacy mode werkt nog steeds)
4. **Controleer de zichtbaarheid van abilities** om ervoor te zorgen dat de toegangscontroles correct zijn

### Als u op WordPress 7.0+ zit

1. **Update Superdav AI Agent** naar v1.12.0+
2. **Verifieer dat third-party mode is ingesteld op Auto** (dit zou standaard moeten zijn)
3. **Controleer de zichtbaarheid van abilities** om ervoor te zorgen dat de toegangscontroles correct zijn
4. **Test de third-party abilities** om te bevestigen dat ze werken

## Probleemoplossing

### Abilities laden niet in auto mode

- Controleer of u op WordPress 7.0+ zit
- Controleer of third-party mode is ingesteld op "Auto"
- Verifieer of de plugin die de ability levert, actief is
- Controleer de WordPress foutlogs op registatiefouten

### Ik wil legacy mode behouden

- Ga naar **Settings** → **Third-Party Mode**
- Selecteer **Legacy**
- Klik op **Save**
- Legacy mode blijft werken

### Mijn custom abilities worden niet weergegeven

- Verifieer of ze via WordPress hooks zijn geregistreerd
- Controleer of ze de Abilities API correct implementeren
- Bekijk de WordPress foutlogs
- Gebruik de admin pagina **Ability Visibility** om alle geregistreerde abilities te zien

### Ik krijg meldingen over "ungeclassificeerde ability"

- Dit is normaal voor nieuwe third-party abilities
- Bekijk en classificeer ze in de admin melding
- Zie **Ability Visibility** voor details over classificatie

## Achtercompatibiliteit

### Bestaande Configuraties

Als u bestaande third-party ability-configuraties heeft:

- **Legacy mode**: Uw configuratie blijft werken
- **Manual mode**: Uw configuratie blijft werken
- **Auto mode**: Uw configuratie wordt genegeerd (auto mode neemt het over)

Om uw aangepaste configuratie te behouden, blijf in Manual of Legacy mode.

### Deprecatie Tijdlijn

- **v1.12.0**: Legacy en Manual modes nog volledig ondersteund
- **v1.13.0+**: Legacy mode kan deprecatie meldingen tonen
- **v2.0.0**: Legacy mode kan worden verwijderd (TBD)

## Best Practices

### Voor nieuwe installaties

- Gebruik Auto mode (dit is de standaard)
- Laat Superdav AI Agent de abilities automatisch ontdekken
- Gebruik Ability Visibility om de toegang te beheren

### Voor bestaande installaties

- Upgrade naar WordPress 7.0+ indien mogelijk
- Schakel over op Auto mode voor vereenvoudigd beheer
- Bekijk en classificeer abilities met behulp van Ability Visibility

### Voor custom abilities

- Registreer abilities via WordPress hooks (Abilities API)
- Vermijd custom ability registries
- Test op WordPress 7.0+ met Auto mode

## Volgende Stappen

1. **Controleer uw WordPress-versie**: Verifieer of u op 7.0+ zit voor Auto mode
2. **Bekijk uw third-party mode**: Ga naar Settings en controleer uw huidige modus
3. **Update indien nodig**: Schakel over naar Auto mode als u op WordPress 7.0+ zit
4. **Classificeer abilities**: Bekijk en classificeer eventuele ongeclassificeerde abilities
5. **Test**: Verifieer of uw third-party abilities correct werken

## Gerelateerde Onderwerpen

- **Ability Visibility**: Beheers welke abilities waar worden getoond
- **WordPress Abilities API**: Leer over native WordPress ability registratie
- **Third-Party Ability Development**: Creëer abilities die werken met Auto mode
