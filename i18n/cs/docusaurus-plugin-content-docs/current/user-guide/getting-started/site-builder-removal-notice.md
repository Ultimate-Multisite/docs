---
title: Oznámení o odstranění režimu Site Builder
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Odstranění režimu Site Builder

**Režim Site Builder byl v Superdav AI Agent v1.12.0 odstraněn.** Pokud jste používali režim Site Builder, měli byste migrovat k **Setup Assistant agentovi** pro vytváření témat a nastavení webu.

## Co se stalo? {#what-happened}

### Site Builder Mode (Starší verze) {#site-builder-mode-legacy}

Režim Site Builder byl rozhraní založené na průvodci pro:

- Vytváření webů z šablon
- Konfiguraci základních nastavení
- Výběr tématu
- Nastavení počátečního obsahu

### Co ho nahradilo? {#what-replaced-it}

**Setup Assistant agent** nyní zpracovává veškerou funkcionalitu Site Builder s:

- Flexibilnějším nastavením vedeným agentem
- Lepšími možnostmi přizpůsobení témat
- Integrací s onboardingem Theme Builder
- Trvalou pamětí `site_brief` pro budoucí sezení

## Pokud jste používali Site Builder Mode {#if-you-were-using-site-builder-mode}

### Vaše webové stránky jsou v bezpečí {#your-sites-are-safe}

- Existující webové stránky vytvořené v režimu Site Builder nadále fungují
- Žádba ztráta dat ani narušení webu
- Pokračujete s běžným spravováním vašich webových stránek

### Migrace na Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Pro nové nastavení webu nebo změny tématu používejte Setup Assistant agent:

```
"Help me set up a new site"
```

nebo

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent poskytuje stejnou funkcionalitu, ale s větší flexibilitou.

## Porovnání: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Funkce | Site Builder (Odstraněno) | Setup Assistant (Nové) |
|---------|--------------------------|------------------------|
| Metoda nastavení | Formulář průvodce | Konverzace s agentem |
| Výběr tématu | Předdefinované šablony | Vlastní generování |
| Přizpůsobení | Omezené možnosti | Plný designový systém |
| Site brief | Není uložen | Trvalá paměť |
| Budoucí sezení | Opakování nastavení | Použití uloženého site_brief |
| Flexibilita | Fixní pracovní postup | Adaptivní konverzace |

## Migrace na Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Pro nové webové stránky {#for-new-sites}

Místo použití režimu Site Builder:

1. Žádost: "Help me set up a new site"
2. Setup Assistant agent vás provede:
   - Účelem a cíli webu
   - Cílovou skupinou
   - Identitou značky
   - Generací tématu
   - Počáteční konfigurací

### Pro stávající webové stránky {#for-existing-sites}

Pokud máte stávající webové stránky vytvořené v režimu Site Builder:

1. Mohoute je nadále používat tak, jak jsou.
2. Pro aktualizaci tématu požádejte: "Redesign my site"
3. Setup Assistant agent vám pomůže vytvořit nové téma
4. Data vašich webových stránek zůstanou nezměněna

### Pro změny tématu {#for-theme-changes}

Místo výběru tématu v režimu Site Builder:

1. Žádost: "Change my theme"
2. Setup Assistant agent:
   - Septá se o vašich preferencích designu
   - Vygeneruje vlastní téma
   - Aktivuje ho na vašem webu

## Klíčové rozdíly {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Vyberte šablonu
2. Vyberte téma
3. Konfigurujte základní nastavení
4. Hotovo
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Popište účel vašeho webu
2. Definujte cílovou skupinu
3. Vyberte preferované designy
4. Agent vygeneruje vlastní téma
5. Agent aktivuje téma
6. Site brief je uložen pro budoucí sezení
```

## Výhody Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Flexibilnější {#more-flexible}

- Popište svůj web v přirozeném jazyce
- Získejte vlastní doporučení
- Adaptuje se na vaše specifické potřeby

### Lepší přizpůsobení {#better-customization}

- Generování vlastních témat
- Rozhodování v rámci designového systému
- Trvalé designové tokeny

### Trvalá paměť {#persistent-memory}

- Váš site_brief je uložen
- Budoucí agenti rozumí vašemu webu
- Nemusíte opakovat informace o nastavení

### Integrovaný pracovní postup {#integrated-workflow}

- Onboarding Theme Builder
- Design System Aesthetics skill
- Ability Visibility controls
- Vše spolupracuje bezproblémově

## Řešení problémů {#troubleshooting}

### Nemohu najít Site Builder mode {#i-cant-find-site-builder-mode}

Režim Site Builder byl odstraněn. Použijte místo toho Setup Assistant agent:

```
"Help me set up a new site"
```

### Chci znovu vytvořit web z Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Můžete to znovu vytvořit pomocí Setup Assistant agent:

1. Žádost: "Help me set up a new site"
2. Popište účel a design svého původního webu
3. Agent vygeneruje podobné téma
4. Váš site_brief bude uložen pro budoucí reference

### Můj stávající Site Builder web nefunguje {#my-existing-site-builder-site-isnt-working}

Existující webové stránky vytvořené v režimu Site Builder nadále fungují. Pokud zažíváte problémy:

1. Zkontrolujte, zda je vaše téma stále aktivní
2. Ověřte, že jsou vaše plugins aktivovány
3. Zkontrolujte log chyb WordPress
4. Kontaktujte podporu, pokud problémy přetrvávají

### Mohu stále používat své staré Site Builder šablony? {#can-i-still-use-my-old-site-builder-templates}

Šablony Site Builder již nejsou dostupné. Nicméně:

- Vaše stávající webové stránky nadále fungují
- Můžete podobné webové stránky znovu vytvořit pomocí Setup Assistant agent
- Setup Assistant agent poskytuje více možností přizpůsobení

## Další kroky {#next-steps}

1. **Pro nové webové stránky**: Použijte Setup Assistant agent
2. **Pro stávající webové stránky**: Pokračujte v jejich používání
3. **Pro změny tématu**: Požádejte o pomoc od Setup Assistant agent
4. **Pro vylepšení designu**: Použijte Design System Aesthetics skill

## Související témata {#related-topics}

- **Theme Builder Onboarding**: Vedené nastavení pro vlastní témata
- **Setup Assistant Agent**: Nastavení webu vedené agentem
- **Site Specification Skill**: Definování cílů a cílové skupiny vašeho webu
- **Design System Aesthetics Skill**: Vylepšení vizuální identity vašeho webu
