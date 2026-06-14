---
title: Upozornenie na odstránenie režimu budovania webovej stránky
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Upozornenie o odstránení režimu Site Builder

**Režim Site Builder bol odstránený v Superdav AI Agent v1.12.0.** Ak ste používali režim Site Builder, mali ste sa presunúť na **agent Setup Assistant** pre vytváranie tém a konfiguráciu webových stránok.

## Čo sa stalo?

### Režim Site Builder (Starý)

Režim Site Builder bol vizuálna asistenta založený na postupoch (wizard), ktorý servoval na:

- Vytváranie stránok z šablon
- Konfiguráciu základných nastavení
- Výber tém
- Nastavenie počiatku obsahu

### Čo to nahradia?

**Agent Setup Assistant** teraz spravuje všetko, čo robil Site Builder, s:

- Viac flexibilným nastavením vedeným agentom
- Lepší možnosťami personalizácie tém
- Integráciou s onboardingom Theme Builder
- Trvalou pamäťou `site_brief` pre budúce oturá

## Ak ste používali režim Site Builder

### Vaše stránky sú v bezpečí

- Stránky vytvorené s použitím režimu Site Builder stále fungujú
- Žádny straty dát ani zrušenie stránok
- Môžete svoje stránky pokračovať v normálnom správaní

### Presuňte sa na agent Setup Assistant

Pre nové nastavenie stránok alebo zmeny tém použite agent Setup Assistant:

```
"Pomôž mi nastaviť novú stránku"
```

alebo

```
"Začnite onboarding Theme Builder"
```

Agent Setup Assistant poskytuje tú istú funkčnosť s väčšou flexibilitou.

## Porovnanie: Site Builder vs. Setup Assistant

| Funkcia | Site Builder (Odstránený) | Setup Assistant (Nový) |
|---------|----------------------|----------------------|
| Metóda nastavenia | Form postupov (wizard) | Rozhovor s agentom |
| Výber témy | Preddefinované šablóny | Prispôsobená generácia |
| Personalizácia | Omezené možnosti | Plný design systém |
| Site brief | Nie je uložený | Trvalá pamäť |
| Budúce oturá | Opakovanie nastavenia | Použitie uloženého site_brief |
| Flexibilita | Fixe pracovný postup | Adaptívny rozhovor |

## Presun tie na agent Setup Assistant

### Pre nové stránky

Namísto používania režimu Site Builder:

1. Požiadavka: "Pomôž mi nastaviť novú webovú stránku"
2. Agent pomocníka na nastavenie vás bude postupovať cez:
   - Účel a ciele webovej stránky
   - Cílová skupina používateľov
   - Identita značky
   - Generovanie témy
   - Počiatokové nastavenia

### Pre existujúce webové stránky

Ak máte existujúcu webovú stránku z režimu Site Builder:

1. Môžete ju pokračovať v používaní tak, ako je.
2. Na aktualizáciu témy požiadajte o: "Prepracuj moju webovú stránku"
3. Agent pomocníka na nastavenie vám pomôže vytvoriť novú tému
4. Vaše dátum webovej stránky zostávajú nezmenené

### Pre zmeny v téme

Namísto výberu témy v režime Site Builder:

1. Požiadavka: "Zmieň mi tému"
2. Agent pomocníka na nastavenie urobí nasledovné:
   - Otázal sa na vaše preferencie dizajnu
   - Generuje prispôsobenú tému
   - Aktivuje ju na vašej stránke

## Kľúčové rozdielu

### Režim Site Builder

```
1. Vyberte šablon
2. Vyberte tému
3. Nastavte základné nastavenia
4. Hotovo
```

### Agent pomocníka na nastavenie (Setup Assistant Agent)

```
1. Popíšte účel vašej webovej stránky
2. Definujte svoju cieľovú skupinu používateľov
3. Vyberte preferencie dizajnu
4. Agent generuje prispôsobenú tému
5. Agent aktivuje tému
6. Zhrnutie webovej stránky je uložené na budúce oturáčky
```

## Výhody agent pomocníka na nastavenie (Setup Assistant Agent)

### Viac flexibilita

- Popíšte svoju webovú stránku prirodzeným jazykom
- Dostávajte prispôsobené odporúčania
- Prispôsobte sa vašim špecifickým potrebám

### Lepšie prispôsobenie

- Generovanie prispôsobeného témy
- Presnenia rozhodnutí o systéme dizajnu (Design System)
- Trvalé dizajné tokeny (design tokens)

### Trvalá pamäť

- Vaše `site_brief` je uložené
- Budúci agenti pochopujú vašu webovú stránku
- Nejde opäť opakovať informácie o nastavení

### Integrovaný pracovný postup (Integrated Workflow)

- Onboarding témy Builder
- Skilність estetiky Design System
- Šablóna pre kontrolné viditeľnosti (Visibility controls)
- Všetko spolu funguje hladko

## Úprava problémov (Troubleshooting)

### Nemôžem nájsť režim Site Builder

Režim Site Builder bol odstránený. Použite agent pomocníka na nastavenie namiesto:

"Pomôžte mi nastaviť novú webovú stránku"

### Chcem si vytvoriť ponovný web z Site Builderu

Môžete ho vytvoriť pomocou asistenta Setup:

1. Požiadavka: "Pomôžte mi nastaviť novú webovú stránku"
2. Popíšte účel a dizajn vášho pôvodného webu
3. Agent vygeneruje podobný tému (theme)
4. Váš `site_brief` sa uloží na budúce odlíšenie

### Môj existujúci web z Site Builderu nefunguje

Existujúce webové stránky vytvorené v režime Site Builder stále fungujú. Ak máte problémy:

1. Skontrolujte, či je téma (theme) stále aktívna
2. Overte, či sú vaše pluginy aktivované
3. Skontrolujte si logy chýb WordPressu
4. Kontaktujte podporu, ak problémy zostávajú

### Môžem stále používať moje staré šablóny z Site Builderu?

Šablóny z Site Builderu už nie sú dostupné. Avšak:

- Vaše existujúce webové stránky stále fungujú
- Môžete si vytvoriť podobné webové stránky pomocou asistenta Setup
- Agent asistent Setup ponúka viac možností personalizácie

## Nasledujúce kroky

1. **Pre nové webové stránky**: Použite agentas Setup
2. **Pre existujúce webové stránky**: Pokračujte v ich používaní tak, ako sú
3. **Pre zmeny témy**: Požiadajte o pomoc asistenta Setup
4. **Pre úpravu dizajnu**: Použite schopnosť Design System Aesthetics

## Spojené témata

- **Onboarding témy Builder**: Prívodné nastavenie pre prispôsobené témy
- **Agent asistent Setup**: Nastavenie webovej stránky vedené agentom
- **Schopnosť Site Specification Skill**: Definujte ciele a cieľovú skupinu vášho webu
- **Schopnosť Design System Aesthetics**: Upravte vizuálnu identitu vášho webu
