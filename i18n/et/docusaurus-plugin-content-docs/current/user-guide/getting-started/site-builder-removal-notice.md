---
title: Siti ehitija režiimi eemaldamise teavitus
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder reegistruminikku teavitus

**Site Builder reegistruminikku on ebat v1.12.0 versioon.** Kui olete kasutanud Site Builderi, peaksite migreerida **Setup Assistant agentile**, tema loomiseks ja veebisaidi seadistamiseks.

## Mis juhtus? {#what-happened}

### Site Builder (Vajadlik) {#site-builder-mode-legacy}

Site Builder oli juhendil põhinev interfaas järgmiseks:

- Veebisaidide luomiseks mallidest
- Põhise seadistuste konfiguratsiooniks
- Teema valimiseks
- Alguse sisut seadistamiseks

### Mis selle asendab? {#what-replaced-it}

**Setup Assistant agent** haldab nüüd kõik Site Builderi funktsioonid järgmise abil:

- Tugevam, agentiga juhendatud seadistamine
- Parem teemaseandmete kohandamise võimalused
- Tema loomise (Theme Builder) algusega integreerimine
- Pealiku site_brief memoriaga tulevate sessioonide jaoks

## Kui olete kasutanud Site Builderi {#if-you-were-using-site-builder-mode}

### Teised veebisaidid on turvalises {#your-sites-are-safe}

- Site Builderiga loodud olemasolevad veebisaidid jätkavad toimimist
- Ei vaha sisut või andmete kadumist
- Saate veebisaidide haldamist tavaliselt jätkata

### Migreerige Setup Assistant agentile {#migrate-to-setup-assistant-agent}

Uus veebisaidi seadistamiseks või teema muutmisteks kasutage Setup Assistant agentit:

```
"Help me set up a new site"
```

või

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent pakub samat funktsionaalsust suurema joustovõimalusega.

## Võrkamine Setup Assistant agentile {#comparison-site-builder-vs-setup-assistant}

### Uute veebisaidide jaoks {#migrating-to-setup-assistant-agent}

Nõu Site Builderi režiimi kasutamise asemel:

1. Kui te küsite: "Abi uue veebile hoidmiseks"
2. Seadistusabiagent juhendab teid läbi järgmiste asjadest:
   - Veebile eesmärk ja tulemused
   - Lõpulemiskasutajad
   - Brändi identiteet
   - Teema genereerimine
   - Alguse seadistamine

### Olemasolevaid veebile jaoks {#for-new-sites}

Kui teil on olemasoleva veebile Site Builderi režiimest:

1. Saate seda kasutada nagu on
2. Teema uuendamiseks küsite: "Redige minu veebile"
3. Seadistusabiagent aitab teid uue teema luua
4. Veebile andmed jäävad muutumatuks

### Teemase muutuste jaoks {#for-existing-sites}

Site Builderi režiimi teema valikuna asemel:

1. Kui te küsite: "Muuta minu teema"
2. Seadistusabiagent:
   - Küsib teie disainipreemide kohta
   - Genereerib kasutuspõhise teema
   - Aktiveerib selle veebile

## Põhitähtisvad erinevused {#for-theme-changes}

### Site Builderi režiim {#key-differences}

```
1. Vali šabloni
2. Vali teema
3. Seadistage põhiseadistused
4. Valmis
```

### Seadistusabiagent {#site-builder-mode}

```
1. Kirjuta veebile eesmärk
2. Definege lõpulemiskasutajad
3. Valige disainipreemid
4. Agent genereerib kasutuspõhise teema
5. Agent aktiveerib teema
6. Veebile lühikese on salvestatud tulevate sessioonide jaoks
```

## Seadistusabiagentit kasutamine {#setup-assistant-agent}

### Mulgi Site Builderi režiimi {#benefits-of-setup-assistant-agent}

Site Builderi režiim on eemal tehtud. Kasutage selle asemel Seadistusabiagentit:

"Abi ait nõu anda uuele veebileht lahendamiseks"

### Ma tahan ülesse luua veebilehti Site Builderist {#more-flexible}

Sa saad seda tekitada Setup Assistant agentiga:

1. Kui sa küsite: "Abi setupida uuele veebilehte"
2. Kirjuta oma algse veebilehtide eesmärki ja disaini kirjeldus
3. Agent genereerib sarnase tema
4. Siis teie `site_brief` salvestatakse tuleva viidlikuks kasutamiseks

### Minu olemasoleva Site Builderi veebilehed ei tööta {#better-customization}

Site Builderi režiimiga loodud olemasolevad veebilehed jätkuvalt töötavad. Kui sa kahjustusi tunnete:

1. Kontrollige, kas teie tema on aktiivne
2. Veenduge, et teie pluginid on aktiveeritud
3. Kontrollige WordPressi vigujuhtlust (error logs)
4. Võtke ühendust toetusega, kui probleem jätkub

### Kas saan kasutada oma vanu Site Builderi šablone? {#persistent-memory}

Site Builderi šablone ei ole enam saadaval. Kuid:

- Kui teie olemasolevad veebilehed töötavad, jätkuge neid kasutamist nagu on
- Sa saate sarnaseid veebilehti Setup Assistant agentiga tekitada
- Setup Assistant agent pakub rohkem võimalusi kohandamiseks

## Järgmine sammud {#integrated-workflow}

1. **Uute veebilehtide jaoks**: Kasutage Setup Assistant agentit
2. **Olemasolevate veebilehtide jaoks**: Jätage kasutamist nagu on
3. **Tema muutuste jaoks**: Küsimus abi Setup Assistant agentilt
4. **Disaini hiankavaleidamiseks**: Kasutage Design System Aesthetics oskust

## Seotud teemad {#troubleshooting}

- **Theme Builder Onboarding**: Juhendatud seadistamine kasutamisel oma teemadega
- **Setup Assistant Agent**: Agentiga juhendatud veebilehtide seadistamine
- **Site Specification Skill**: Defineige teie veebilehtide eesmärgid ja publik
- **Design System Aesthetics Skill**: Hiankavaleidage teie veebilehti visuaalset identiteeti
