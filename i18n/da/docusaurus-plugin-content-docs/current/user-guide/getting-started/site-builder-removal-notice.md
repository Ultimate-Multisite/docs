---
title: Meddelelse om fjernelse af Site Builder Mode
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Fjernelse af Site Builder Mode

**Site Builder mode er fjernet i Superdav AI Agent v1.12.0.** Hvis du brugte Site Builder mode, skal du nu migrere til **Setup Assistant agenten** for tema-oprettelse og opsætning af sider.

## Hvad skete der?

### Site Builder Mode (Gammel version)

Site Builder mode var et trin-for-trin interface til:

- Oprettelse af sider fra skabeloner
- Konfiguration af grundlæggende indstillinger
- Valg af tema
- Opsætning af indledig indhold

### Hvad erstatter det?

**Setup Assistant agenten** håndterer nu al Site Builder funktionalitet med:

- Mere fleksibel, agentstyret opsætning
- Bedre muligheder for tema-tilpasning
- Integration med Theme Builder onboarding
- Vedvarende `site_brief` hukommelse til fremtidige sessioner

## Hvis Du Brugte Site Builder Mode

### Dine sider er sikre

- Eksisterende sider oprettet med Site Builder mode fortsætter med at fungere
- Ingen datatab eller forstyrrelser i dine sider
- Du kan fortsætte med normalt at administrere dine sider

### Migrér til Setup Assistant agenten

Til ny opsætning af sider eller ændringer i temaet skal du bruge Setup Assistant agenten:

```
"Help me set up a new site"
```

eller

```
"Start the Theme Builder onboarding"
```

Setup Assistant agenten giver den samme funktionalitet med større fleksibilitet.

## Sammenligning: Site Builder vs. Setup Assistant

| Funktion | Site Builder (Fjernet) | Setup Assistant (Ny) |
|---|---|---|
| Opsætning | Trin-for-trin formular | Agent samtale |
| Tema-valg | Foruddefinerede skabeloner | Tilpasset generering |
| Tilpasning | Begrænsede muligheder | Fuldt designsystem |
| Site brief | Ikke gemt | Vedvarende hukommelse |
| Fremtidige sessioner | Gentag opsætning | Brug gemt site_brief |
| Fleksibilitet | Fast workflow | Adaptiv samtale |

## Migration til Setup Assistant agenten

### Til nye sider

I stedet for at bruge Site Builder mode:

1. Anmodning: "Hjælp mig med at sætte en ny side op"
2. Opsætningsassistent-agenten vil guide dig gennem:
   - Websidens formål og mål
   - Målgruppe
   - Brandidentitet
   - Tema-generering
   - Indledende konfiguration

### For eksisterende sider

Hvis du har en eksisterende side fra Site Builder mode:

1. Du kan fortsætte med at bruge den som den er
2. For at opdatere temaet, anmod om: "Redesign min side"
3. Opsætningsassistent-agenten vil hjælpe dig med at skabe et nyt tema
4. Dine sidesdata forbliver uændrede

### For tematiske ændringer

I stedet for temaudvælgelsen i Site Builder mode:

1. Anmod om: "Skift mit tema"
2. Opsætningsassistent-agenten vil:
   - Spørge til dine designpræferencer
   - Generere et custom tema
   - Aktivere det på din side

## Vigtige forskelle

### Site Builder Mode

```
1. Vælg en skabelon
2. Vælg et tema
3. Konfigurer grundlæggende indstillinger
4. Færdig
```

### Opsætningsassistent-agenten

```
1. Beskriv din sides formål
2. Definer din målgruppe
3. Vælg dine designpræferencer
4. Agent genererer et custom tema
5. Agent aktiverer temaet
6. Sidesammendrag gemmes til fremtidige sessioner
```

## Fordele ved Opsætningsassistent-agenten

### Mere fleksibel

- Beskriv din side i naturligt sprog
- Få skræddersyede anbefalinger
- Tilpas dig dine specifikke behov

### Bedre tilpasning

- Custom tema-generering
- Designsystembeslutninger
- Vedvarende design tokens

### Vedvarende hukommelse

- Din `site_brief` gemmes
- Fremtidige agenter forstår din side
- Ingen grund til at gentage opsætningsinformationen

### Integreret workflow

- Onboarding af Theme Builder
- Design System Aesthetics færdighed
- Mulighed for Visibility controls
- Alt arbejder sammen problemfrit

## Fejlfinding

### Jeg kan ikke finde Site Builder mode

Site Builder mode er fjernet. Brug i stedet Opsætningsassistent-agenten:

"Hjælp mig med at opsætte en ny side"

### Jeg vil genskabe en side fra Site Builder

Du kan genskabe den ved hjælp af Setup Assistant agenten:

1. Anmodning: "Hjælp mig med at opsætte en ny side"
2. Beskriv formålet og designet af din oprindelige side
3. Agenten genererer et lignende tema
4. Din `site_brief` gemmes til fremtidig reference

### Min eksisterende Site Builder side virker ikke

Eksisterende sider oprettet med Site Builder mode fortsætter med at fungere. Hvis du oplever problemer:

1. Tjek, at dit tema stadig er aktivt
2. Bekræft, at dine plugins er aktiverede
3. Tjek WordPress fejllogs
4. Kontakt support, hvis problemer vedvarer

### Kan jeg stadig bruge mine gamle Site Builder skabeloner?

Site Builder skabeloner er ikke længere tilgængelige. Men:

- Dine eksisterende sider fortsætter med at virke
- Du kan genskabe lignende sider med Setup Assistant agenten
- Setup Assistant agenten giver flere muligheder for tilpasning

## Næste skridt

1. **Til nye sider**: Brug Setup Assistant agenten
2. **Til eksisterende sider**: Fortsæt med at bruge dem som de er
3. **Til temaændringer**: Anmod om hjælp fra Setup Assistant agenten
4. **Til designforbedring**: Brug Design System Aesthetics skill

## Relaterede emner

- **Theme Builder Onboarding**: Vejledt opsætning af custom themes
- **Setup Assistant Agent**: Sideopsætning styret af en agent
- **Site Specification Skill**: Definer dine sides mål og målgruppe
- **Design System Aesthetics Skill**: Forfin din sides visuelle identitet
