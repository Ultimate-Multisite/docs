---
title: Prívodný tok Theme Builderu
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Onboarding prechádzajúca cesta Theme Builderu

Superdav AI Agent v1.12.0 predstavuje pramenú **onboardingovú cestu Theme Builderu**, ktorá vám pomáha vytvoriť vlastný blokový tému počas vašej počiatočnej konfigurácie. Toto nahradia starý režim Site Builder s flexibilnejšou, agentom asistovanej metodou.

## Čo je onboardingová cesta Theme Builderu?

Onboardingová cesta Theme Builderu je interaktívny wizard na nastavenie, ktorý:

- Vami vede cez rozhodnutia o dizajne (farby, typografie, štruktúra)
- Zberá vaše preferencie vizuálnej identickosti vášho webu
- Generuje vlastnú blokovú tému prispôsobenú vašim potrebám
- Automaticky aktivuje tému po dokončení

Cesta je napáchaná **agentom Setup Assistant**, ktorý položí doprevedúce otázky a postupne bude budovať vašu tému.

## Začiatok s Theme Builderom onboardingom

### Prvý spustenie

Keď si Superdav AI Agent prvýkrát spustíte na novej inštalácii WordPress, uvidíte:

```
Vitajte v Superdav AI Agent!

Čo by ste chceli urobiť?
1. Vytvoriť vlastnú tému (Theme Builder)
2. Použiť existujúcu tému
3. Pre teraz preskočiť nastavenie
```

Vyberte **"Vytvoriť vlastnú tému"**, aby ste vstúpili do onboardingovej cesty Theme Builderu.

### Manuálna aktivácia

Možete tiež začať onboarding cestu Theme Builderu v akýkoľvek čas, požiadavkou na:

```
"Začnite onboarding cestu Theme Builderu"
```

alebo

```
"Pomôžte mi vytvoriť vlastnú tému"
```

## Kroky onboardingovej cesty

### Krok 1: Výber režimu

Agent Setup Assistant položí otázku o vašich preferenciách:

```
Ako by ste chceli budovať svoju tému?
- Vede (považujem, že si pýtam otázky a budujem ju za vás)
- Samostatne (ukážu vám možnosti a vy rozhodnete sa)
```

**Vede režim** je odporúčaný pre väčšinu používateľov; agent robí návrhy dizajnu na základe vášho priemyslu a cieľov.

### Krok 2: Špecifikácia webu

- **Cíl stránky**: E-commerce, blog, portfolium, SaaS atď.
- **Cílová skupina**: Kto sú vaši návštevníci?
- **Farby značky**: Primárne a sekundárne farby (alebo „nemám se o tom istý“).
- **Tón**: Profesionálny, kreatívny, hravý, minimálny atď.

Táto informácia je uložená v vašej pamäti **site_brief**, ktorú agenti budú odkazovať v budúcich oturách.

### Krok 3: Presnenia návrhu (Design System Decisions)

Agent vás bude navigať cez výber design tokenov:

- **Typografia**: Rod fontu (serif, sans-serif, monospace) a škála veľkostí
- **Paleta farieb**: Primárne, sekundárne, akcentné a neutrálne farby
- **Vzduch (Spacing)**: Kompaktné, normálne alebo priestrnostné rozloženia
- **Kinetika (Motion)**: Animácie a prechody (ak je to požadované)

### Krok 4: Generovanie témy (Theme Generation)

Agent pomocník si vytvorí štruktúru vašej prispôradenej blokovej témy s použitím:

- `theme.json` obsahujúce všetky vaše design tokeny
- Šablóny blokov pre bežné rozloženia (domovská strana, blog, kontakt)
- Prispôradené stily blokov odpovedajúce vášmu design systému
- Metadát témy a deklarácie podporu WordPress

### Krok 5: Aktivácia a overenie

Téma sa automaticky aktivuje a uvidíte:

```
✓ Vaša prispôradená téma je teraz živá!
  Názov témy: Téma [Vaše Názov Stránky]
  Farby: [Primárna] / [Sekundárna]
  Typografia: [Rod fontu]

  Navštívte si svoju stránku, aby ste videli nový dizajn.
```

Potom môžete navštíviť svoju stránku a overiť, že téma sa zobrazuje správne.

## Špecifikácia stránky a pamäť site_brief

Po začiatku (onboarding) agent zachytí špecifikáciu vašej stránky v kategórii pamäti **site_brief**. To zahŕňa:

- Cíl a ciele stránky
- Cílová skupina
- Farby značky a tón
- Preferencie návrhu
- Štruktúru obsahu

### Prečo je site_brief dôležitý

V budúcich oturách agenti odkazujú na váš `site_brief` na:

### Zobrazenie vášho site_briefu

Môžete požiadať asistenta o:

```
"Show me my site brief"
```

alebo

```
"What do you know about my site?"
```

Asistent zobrazí vaše uložené špecifikácie siete.

## Prispôsobenie po onboardingovej fáze

Po dokončení onboardingovej fázy Theme Builder môžete:

### Použiť skickú dizajn systémovú zručnosť (Design System Aesthetics skill)

Požiadať o úpravy dizajnu, napríklad:

```
"Refine the typography to be more modern"
```

alebo

```
"Adjust the color palette to be warmer"
```

**Zručnosť skickú dizajn systémovú zručnosť** vás krok za krovedie cez cieľové úpravy dizajnu.

### Upraviť theme.json priamo

Pre pokročilých používateľov upravte súbor `/wp-content/themes/[theme-name]/theme.json` na:

- Farby (Color tokens)
- Škálovky typografie (Typography scales)
- Hodnotenie vzdialeností (Spacing values)
- Definície hran a stien (Border and shadow definitions)

### Vytvoriť prispô)))lované šablóny blokov (Custom Block Templates)

Použite WordPress editor blokov na vytvorenie prispô)))lovaných šablón pre:

- Štruktúry domáce stránok
- Stránky blogových prístupov
- Produktové stránky
- Kontaktné formuláre

## Porovnanie: Staré vs. Nové onboardingové fázy

| Funkcia | Site Builder (Stará) | Theme Builder (Nová) |
|---------|----------------------|-------------------|
| Metóda nastavenia | Form založený na vodiči | Rozhovor vedený asistentom |
| Generovanie témy | Omezené šablóny | Prispô)))lované rámce (scaffolding) |
| Dizajnové tokeny | Manuálne zadávanie | Vedené rozhodnutia |
| Flexibilita | Fixe možnosti | Prispô)))lovaná |
| Budúce aktualizácie | Nie sú odkazované | Uložene v site_briefu |

## Úprava problémov (Troubleshooting)

**Onboardingová fáza sa neuskutočnila**
- Znovu spustite: "Start the Theme Builder onboarding"
- Skontrolujte, či je vaše WordPress inštalácia aktuálna
- Overte, či je asistenta Nastavenia (Setup Assistant agent) aktivovaný

**Môj `site_brief` sa neberie do úvahy**
- Potvrďte, že agent má prístup k pamäti (memory)
- Požiadajte agenta o "spomenutie môjho site briefu" (recall my site brief)
- Skontrolujte, či je v nastaveniach zapnutá pamäť

**Vytvorený téma neodpovedá mojím preferenciám**
- Použite skili Design System Aesthetics na jeho upresnenie
- Požiadajte agenta o "vytvorenie nového témy s [konkrétnymi zmenkami]" (regenerate the theme with [specific changes])
- Upravujte `theme.json` priamo pre presnú kontrolu

## Nasledujúce kroky

Po dokončení onboarding procesu Theme Builder:

1. **Odoberte si vizitku:** Navštívte svoj web, aby ste videli nové téma
2. **Upresnite dizajn:** Použite skili Design System Aesthetics na úpravách
3. **Pridajte obsah:** Začnite vytvárať obsah pre váš web
4. **Poznajte si schopnosti:** Zistite viac o iných schopnosti agenta, ako sú scaffold-block-theme a activate-theme
