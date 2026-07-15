---
title: Onboardingový tok pro Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Onboardingový proces Theme Builderu

Superdav AI Agent v1.12.0 představuje průvodní **onboardingový proces Theme Builderu**, který vám pomůže vytvořit vlastní blokové téma během prvního nastavení. Nahrazuje starší režim Site Builder a nabízí flexibilnější přístup asistovaný agentem.

## Co je onboardingový proces Theme Builderu? {#what-is-the-theme-builder-onboarding-flow}

Onboardingový proces Theme Builderu je interaktivní průvodní nástroj, který:

- Vede vás skrz rozhodování o designu (barvy, typografie, rozložení)
- Zaznamená vizuální preference vašeho webu
- Vygeneruje vlastní blokové téma přizpůsobené vašim potřebám
- Aktivuje téma automaticky po dokončení

Proces je poháněn **Setup Assistant agentem**, který klade vysvětlující otázky a postupně staví vaše téma.

## Spuštění onboardingového procesu Theme Builderu {#starting-the-theme-builder-onboarding}

### První spuštění {#first-run-setup}

Když Superdav AI Agent poprvé spustíte na novém nainstalovaném WordPressu, uvidíte:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Vyberte **"Build a custom theme"** (Vytvořit vlastní téma), abyste vstoupili do onboardingového procesu Theme Builderu.

### Ruční aktivace {#manual-activation}

Můžete také spustit onboardingový proces Theme Builderu kdykoli, když požádáte:

```
"Start the Theme Builder onboarding"
```

nebo

```
"Help me create a custom theme"
```

## Kroky onboardingového procesu {#the-onboarding-steps}

### Krok 1: Výběr režimu {#step-1-mode-selection}

Agent Setup Assistant se zeptá na vaše preference:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** (Průvodní režim) je doporučen pro většinu uživatelů; agent poskytne návrhy designu na základě vašeho oboru a cílů.

### Krok 2: Specifikace webu {#step-2-site-specification}

Bude se vás ptát na váš web:

- **Účel webu**: E-shop, blog, portfolio, SaaS atd.
- **Cílová skupina**: Kdo jsou vaši návštěvníci?
- **Barvy značky**: Primární a sekundární barvy (nebo "Není mi jisté")
- **Tón**: Profesionální, kreativní, hravý, minimalistický atd.

Tyto informace jsou uloženy do vaší paměti **site_brief**, na kterou agenti odkazují v budoucích soubízích.

### Krok 3: Rozhodování o designovém systému {#step-3-design-system-decisions}

Agent vás provede výběrem designových tokenů:

- **Typografie**: Rodina písma (serif, sans-serif, monospace) a škála velikostí
- **Paleta barev**: Primární, sekundární, akcentní a neutrální barvy
- **Rozestupy**: Kompaktní, normální nebo rozsáhlé rozložení
- **Animace**: Animace a přechody (pokud je požadováno)

### Krok 4: Generování téma {#step-4-theme-generation}

Agent Setup Assistant vytvoří základní strukturu vašeho vlastního blokového téma s:

- `theme.json` obsahující všechny vaše designové tokeny
- Blokové šablony pro běžné rozložení (úvodní stránka, blog, kontakt)
- Vlastní styly bloků odpovídající vašemu designovému systému
- Metainformace téma a deklarace podpory WordPress

### Krok 5: Aktivace a ověření {#step-5-activation-and-verification}

Téma je automaticky aktivováno a uvidíte:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Nyní můžete navštívit svůj web a ověřit, že téma zobrazuje správně.

## Specifikace webu a paměť site_brief {#site-specification-and-sitebrief-memory}

Během onboardingového procesu agent zachytí specifikaci vašeho webu do kategorie paměti **site_brief**. Zahrnuje:

- Účel a cíle webu
- Cílovou skupinu
- Barvy a tón značky
- Designové preference
- Struktura obsahu

### Proč je site_brief důležitý {#why-sitebrief-matters}

V budoucích soubízích agenti odkazují na váš site_brief, aby:

- Udržovali konzistenci designu při změnách
- Navrhovali funkce odpovídající účelu vašeho webu
- Poskytovali kontextově vědomé doporučení
- Vyhýbali se opakování otázek při nastavení

### Zobrazení vašeho site_brief {#viewing-your-sitebrief}

Můžete agentovi říct:

```
"Show me my site brief"
```

nebo

```
"What do you know about my site?"
```

Agent zobrazí vaši uloženou specifikaci webu.

## Vylepšení po onboardingu {#customizing-after-onboarding}

Po dokončení onboardingového procesu Theme Builderu můžete:

### Použít dovednost Design System Aesthetics {#use-the-design-system-aesthetics-skill}

Požádat o vylepšení designu:

```
"Refine the typography to be more modern"
```

nebo

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** vás provede cílenými úpravami designu.

### Editovat theme.json přímo {#edit-themejson-directly}

Pro pokročilé uživatele upravte soubor `/wp-content/themes/[theme-name]/theme.json`, abyste upravili:

- Tokeny barev
- Škály typografie
- Hodnoty rozestupů
- Definice hran a stínů

### Vytvořit vlastní blokové šablony {#create-custom-block-templates}

Použijte blokový editor WordPressu k vytvoření vlastních šablon pro:

- Rozložení úvodní stránky
- Stránky s blogovým příspěvkem
- Produktové stránky
- Kontaktovací formuláře

## Porovnání: Starý vs. Nový onboarding {#comparison-old-vs-new-onboarding}

| Funkce | Site Builder (Starší) | Theme Builder (Nový) |
|---------|----------------------|---------------------|
| Metoda nastavení | Formář založený na průvodci | Konverzace asistovaná agentem |
| Generování téma | Omezené šablony | Vlastní základní struktura |
| Designové tokeny | Ruční zadávání | Průvodní rozhodování |
| Flexibilita | Fixní možnosti | Vylepřitelný |
| Budoucí aktualizace | Není odkazováno | Uloženo v site_brief |

## Řešení problémů {#troubleshooting}

**Onboardingový proces nebylo dokončeno**
- Restartujte proces: "Start the Theme Builder onboarding"
- Zkontrolujte, zda je vaše instalace WordPressu aktuální
- Ověřte, že je agent Setup Assistant aktivován

**Můj site_brief není použit**
- Potvrďte, že má agent přístup k paměti
- Požádejte agenta, aby "recall my site brief" (pamatoval můj site_brief)
- Zkontrolujte, zda je paměť v nastavení aktivována

**Vygenerované téma neodpovídá mým preferencím**
- Použijte Design System Aesthetics skill k jeho vylepšení
- Požádejte agenta, aby "regenerate the theme with [specific changes]" (regeneroval téma s [specifickými změnami])
- Editujte theme.json přímo pro přesnou kontrolu

## Další kroky {#next-steps}

Po dokončení onboardingového procesu Theme Builderu:

1. **Ověřte svůj web**: Navštivte svůj web, abyste viděli nové téma
2. **Vylepšete design**: Použijte Design System Aesthetics skill pro úpravy
3. **Přidejte obsah**: Začněte vytvářet obsah vašeho webu
4. **Prozkoumejte schopnosti**: Naučte se o dalších schopnostech agenta, jako je scaffold-block-theme a activate-theme
