---
title: Migrasie na Derde-Partye Modus
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasie na Derde-partye Modus

Superdav AI Agent v1.12.0 verander hoe derde-partye funksionaliteite hanteer word. **Die derde-partye modus is nou standaard op outomaties**, wat die integrasie met die native WordPress Abilities API op WordPress 7.0+ moontlik maak sonder dat jy dit handmatig hoef te konfigureer.

## Wat het verander?

### Voor v1.12.0

Derde-partye funksionaliteite het handmatige konfigurasie vereis:

- Jy moes eksplisiet die "derde-partye modus" aktiver word
- Funksionaliteite is uit 'n aangepaste register gelaai
- Integrasie met die WordPress Abilities API was opsioneel
- Legacy modus was die standaard

### Ná v1.12.0

Derde-partye funksionaliteite werk outomaties:

- Die derde-partye modus is standaard op "outomaties"
- Funksionaliteite integreer natuurlik met die WordPress Abilities API
- Geen handmatige konfigurasie nodig op WordPress 7.0+ nie
- Legacy modus is steeds beskikbaar vir ouer WordPress-weergawes

## Wie word geraak?

### Nuwe installasies (WordPress 7.0+)

**Geen aksie vereis nie.** Die derde-partye modus word outomaties op "outomaties" gestel, en die funksionaliteite werk direk.

### Bestaande installasies

**Jou instellings word bewaar.** As jy gebruik het:

- **Legacy modus**: Jy bly in legacy modus (geen verandering nie)
- **Handmatige derde-partye modus**: Jy bly in handmatige modus (geen verandering nie)
- **Outomatiese modus**: Jy gaan voort met outomatiese modus (geen verandering nie)

### WordPress-weergawes voor 7.0

**Legacy modus is steeds beskikbaar.** As jy op WordPress 6.x of vroeër is:

- Die derde-partye modus is standaard op "legacy"
- Jy kan die derde-partye modus handmatig aktiver indien gewens
- Graweer na WordPress 7.0+ om die native Abilities API te gebruik

## Die Modusse Verstaan

### Outomatiese Modus (Nuwe Standaard)

**Outomatiese modus** gebruik die native WordPress Abilities API-integrasie:

- Funksionaliteite word via WordPress hooks geregistreer
- Volledige kompatibiliteit met WordPress 7.0+ Abilities API
- Outomatiese ontdekking van derde-partye funksionaliteite
- Geen handmatige konfigurasie nodig

**Wanneer om te gebruik**: WordPress 7.0+ met derde-partye funksionaliteite

### Handmatige Modus

**Handmatige modus** vereis eksplisiete konfigurasie:

- Jy spesifiseer watter derde-partye funksionaliteite wat gelaai moet word
- Nuttig vir toetsing of selektiewe funksionaliteitslading
- Vereis die redigering van konfigurasiebestye
- Meer beheer, maar meer opstelwerk

**Wanneer om te gebruik**: Toetsing, selektiewe funksionaliteitslading, of aangepaste konfigurasies

### Legacy Modus

**Legacy modus** gebruik die ou derde-partye funksionaliteitsstelsel:

- Aangepaste funksionaliteitsregister (nie die WordPress Abilities API nie)
- Terug-kompatibel met ouer WordPress-weergawes
- Geen native WordPress-integrasie nie
- Verouderd, maar steeds ondersteun

**Wanneer om te gebruik**: WordPress 6.x of vroeër, of wanneer jy legacy-kompatibiliteit benodig

## Jou Huidige Modus Kontroleer

### Via die Admin Paneel

1. Gaan na **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Soek na die **Third-Party Mode** instelling
3. Jy sal jou huidige modus en opsies om dit te verander sien

### Via Kode

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', of 'legacy'
```

## Jou Modus Verander

### Skakel na Outomatiese Modus

As jy op WordPress 7.0+ is en outomatiese modus wil gebruik:

1. Gaan na **Superdav AI Agent** → **Settings**
2. Soek na **Third-Party Mode**
3. Kies **Auto (WordPress Abilities API)**
4. Klik op **Save**

Superdav AI Agent sal outomaties derde-partye funksionaliteite ontdek en registreer.

### Skakel na Handmatige Modus

As jy wil hê dat jy handmatig moet beheer watter funksionaliteite gelaai word:

1. Gaan na **Superdav AI Agent** → **Settings**
2. Soek na **Third-Party Mode**
3. Kies **Manual**
4. Klik op **Save**
5. Redigeer jou konfigurasiebesty om te spesifiseer watter funksionaliteite wat gelaai moet word

### Skakel na Legacy Modus

As jy legacy-kompatibiliteit benodig:

1. Gaan na **Superdav AI Agent** → **Settings**
2. Soek na **Third-Party Mode**
3. Kies **Legacy**
4. Klik op **Save**

## Voordele van Outomatiese Modus

### Outomatiese Ontdekking

Funksionaliteite word outomaties ontdek van:

- Geïnstalleerde plugins
- Aktiewe tema
- Must-use plugins
- Drop-in plugins

Geen handmatige registrasie nodig nie.

### Native Integrasie

Funksionaliteite integreer met die WordPress Abilities API:

- Konsistente met WordPress kern
- Werk met die WordPress admin
- Kompatibel met ander plugins wat die Abilities API gebruik
- Toekomstig beskermbaar soos WordPress ontwikkel

### Vereenvoudigde Bestuur

- Geen konfigurasiebestye om te redigeer nie
- Geen handmatige funksionaliteitsregistrasie nie
- Funksionaliteitsgesigbaarheid (Ability Visibility) beheer werk outomaties
- Admin-kennisgewings waarsku u oor ongeklassifiseerde funksionaliteite

### Beter Prestasie

- Funksionaliteite word gekasher
- Word op aanvraag lui gelaai
- Geoptimaliseer vir WordPress 7.0+

## Migrasiepad

### As jy op WordPress 6.x is

1. **Graweer na WordPress 7.0+** (wanneer gereed)
2. **Update Superdav AI Agent** na v1.12.0+
3. **Verander derde-partye modus na Outomaties** (opsioneel; legacy modus werk steeds)
4. **Evalueer funksionaliteitsgesigbaarheid** om te verseker van korrekte toegangsbeveiligingskontroles

### As jy op WordPress 7.0+ is

1. **Update Superdav AI Agent** na v1.12.0+
2. **Verifieer dat derde-partye modus op Outomaties gestel is** (dit behoort standaard te wees)
3. **Evalueer funksionaliteitsgesigbaarheid** om te verseker van korrekte toegangsbeveiligingskontroles
4. **Toets derde-partye funksionaliteite** om te bevestig dat dit werk

## Probleemoplossing

### Funksionaliteite laai nie in outomatiese modus nie

- Verifieer dat jy op WordPress 7.0+ is
- Kontroleer of derde-partye modus op "Auto" gestel is
- Verifieer dat die plugin wat die funksionaliteit verskaf, aktief is
- Kontroleer WordPress fout-logboeke vir registrasiefoute

### Ek wil legacy modus behou

- Gaan na **Settings** → **Third-Party Mode**
- Kies **Legacy**
- Klik op **Save**
- Legacy modus sal voortgaan om te werk

### My aangepaste funksionaliteite word nie getoon nie

- Verifieer dat dit via WordPress hooks geregistreer is
- Kontroleer of hulle die Abilities API korrek implementeer
- Evalueer WordPress fout-logboeke
- Gebruik die **Ability Visibility** admin-bladsy om alle geregistreerde funksionaliteite te sien

### Ek ontvang "ongeklassifiseerde funksionaliteit" kennisgewings

- Dit is normaal vir nuwe derde-partye funksionaliteite
- Evalueer en klassifiseer dit in die admin-kennisgewing
- Kyk na **Ability Visibility** vir besonderhede oor klassifikasie

## Terug-kompatibiliteit

### Bestaande Konfigurasies

As jy bestaande derde-partye funksionaliteitskonfigurasies het:

- **Legacy modus**: Jou konfigurasie sal aanhou werk
- **Handmatige modus**: Jou konfigurasie sal aanhou werk
- **Outomatiese modus**: Jou konfigurasie word geïgnoreer (outomatiese modus neem oor)

Om jou aangepaste konfigurasie te behou, bly in Handmatige of Legacy modus.

### Verouderingslyn

- **v1.12.0**: Legacy en Handmatige modusse word steeds ten volle ondersteun
- **v1.13.0+**: Legacy modus mag verouderingskennisgewings toon
- **v2.0.0**: Legacy modus mag verwyder word (Te bepaal)

## Beste Praktyke

### Vir Nuwe Installasies

- Gebruik Outomatiese modus (dit is die standaard)
- Laat Superdav AI Agent funksionaliteite outomaties ontdek
- Gebruik Ability Visibility om toegang te beheer

### Vir Bestaande Installasies

- Graweer na WordPress 7.0+ waar moontlik
- Skakel na Outomatiese modus vir vereenvoudigde bestuur
- Evalueer en klassifiseer funksionaliteite met behulp van Ability Visibility

### Vir Aangepaste Funksionaliteite

- Registreer funksionaliteite via WordPress hooks (Abilities API)
- Vermy aangepaste funksionaliteitsregisters
- Toets op WordPress 7.0+ met Outomatiese modus

## Volgende Stappe

1. **Kontroleer jou WordPress-weergawes**: Verifieer dat jy op 7.0+ is vir Outomatiese modus
2. **Evalueer jou derde-partye modus**: Gaan na Settings en kyk jou huidige modus
3. **Update indien nodig**: Skakel na Outomatiese modus as jy op WordPress 7.0+ is
4. **Klassifiseer funksionaliteite**: Evalueer en klassifiseer enige ongeklassifiseerde funksionaliteite
5. **Toets**: Verifieer dat jou derde-partye funksionaliteite korrek werk

## Verwante Onderwerpe

- **Ability Visibility**: Beheer watter funksionaliteite waar blootgestel word
- **WordPress Abilities API**: Leer oor native WordPress funksionaliteitsregistrasie
- **Derde-partye Funksionaliteitsontwikkeling**: Skep funksionaliteite wat met Outomatiese modus werk
