---
title: Znalosti Theme Buildera
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Znalosti Téma Builderu: Štruktúrovanie a Aktivácia Blokových Tém

Superdav AI Agent v1.12.0 predstavuje dve silné schopnosti, ktoré vám umožňujú generovať a nasadť prispôsobené blokové témy priamo z chatu.

## Prehľad {#overview}

Schopnosti **scaffold-block-theme** (štruktúrovanie blokovej temy) a **activate-theme** (aktivácia témy) umožňujú agentom:
- Generovať kompletné, produktorovo pripravené blokové témy na základe vašich špecifikácií
- Automaticky aktivovať témy na vašom svete bez manuálnej intervencie
- Vytvára konzistentnú vizuálnu identitu pomocou vedeného návrhu

## Štruktúrovanie Blokovej Témy (Scaffold Block Theme) {#scaffold-block-theme}

Schopnosť **scaffold-block-theme** generuje novú WordPress blokovú tému s kompletnou štruktúrou, vrátane:

- Konfigurácie `theme.json` s design tokenmi
- Súborov šablón pre blokové šablóny bežných rozvrhov
- Prispôsobených štýlov a variant blokov
- Metadat a deklarácií podporu témy

### Ako vyvolať (How to Invoke) {#how-to-invoke}

V chate s Superdav AI Agent môžete požiadať o generovanie témy:

```
"Vytvorte blokovú tému menovanú 'Modern Agency' s modrou a bielou paletou farieb,
sans-serif typografiou a profesionálnym rozvrhom"
```

Agent urobí nasledovné kroky:
1. Zberá vaše návrhy na dizajn cez konverzáciu
2. Generuje kompletnú štruktúru témy
3. Vytvára všetky potrebné súbory témy
4. Pričomu tému na aktiváciu

### Očakávaný výstup (Expected Output) {#expected-output}

Keď sa schopnosť úspešne vykoná, uvidíte:

- Potvrdenie, že téma bola štruktúrovaná
- Názov a poloha témy
- Zhrnutie použitých design tokenov (farby, typografie, vzdialenosť)
- Stav pripravený na aktiváciu

Príklad výstupu:
```
✓ Téma "Modern Agency" úspešne štruktúrovaná
  Poloha: /wp-content/themes/modern-agency/
  Farby: Primárna #0066CC, Sekundárna #FFFFFF
  Typografie: Inter (sans-serif)
  Stav: Pripravená na aktiváciu
```

## Aktivácia Témy (Activate Theme) {#activate-theme}

Možnosť **activate-theme** vám umožňuje prejsť na nová vytvorenú alebo existujúcu blokovú tému.

### Ako ju vyvolať {#how-to-invoke-1}

Po vytvorení témy môžete okamžite aktivovať:

```
"Aktivovať tému Modern Agency"
```

Alebo aktivovať akékoľvek existujúcu tému:

```
"Prejsť na tému Twentytwentyfour"
```

### Očakávaný výstup {#expected-output-1}

Keď úspešne aktivujete tému:

- Potvrdenie aktívnej témy
- Názov predchádzajúcej témy (na referenčné účely)
- URL adresa webu, kde je téma teraz aktívna
- Akékoľvek poznámky týkajúce sa špecifického nastavenia témy

Príklad výstupu:
```
✓ Témera úspešne aktivovaná
  Aktívna téma: Modern Agency
  Predchádzajúca téma: Twentytwentyfour
  Aktívna na: https://yoursite.com
  Poznámka: Preverte vašu hlavnú stránku, aby ste potvrdili, že nový dizajn je aktívny
```

## Príkon: Vytvoriť a aktivovať (Scaffold and Activate) {#workflow-scaffold-and-activate}

Typový pracovný postup kombinuje obe schopnosti:

1. **Požiadať o generovanie témy**: "Vytvoriť blokovú tému pre moju landing page SaaS"
2. **Agent vytvorí tému**: Generuje súbory a designové tokeny
3. **Prehliadka a úprava**: Diskutovať o zmenách dizajnu, ak je to potrebné
4. **Aktivácia**: "Aktivovať tému teraz"
5. **Kontrola**: Navštívte si svoj web, aby ste potvrdili, že nový dizajn je aktívny

## Designové tokeny a personalizácia (Design Tokens and Customization) {#design-tokens-and-customization}

Vytvorené témy používajú designové tokeny WordPress (przez `theme.json`) na:

- **Farby**: Primárna, sekundárna, akcentná, neutralná paleta
- **Typografie**: Fonty, veľkosti, váhy, výšky řad
- **Vzduchné miery (Spacing)**: Padding, margin, škály pauz
- **Hraničnú vrstvu (Borders)**: Tokeny radiusu a šírky
- **Šatiny**: Úrovne zvýraznenia

Tieto tokeny sú v zcentrovanom `theme.json`, čo uľahčuje prispôsobenie celého vášho dizajnového systému z jedného súboru.

## Omeňovanie a poznámky {#limitations-and-notes}

## Úprava {#troubleshooting}

*   Témy sa vytvárajú v adresácii `/wp-content/themes/` a musia spĺňať názvoné konvencie WordPressu.
*   Aktivácia vyžaduje vhodné prístupné práva na vašom WordPress site.
*   Prípadové PHP kódy v témach sú minimálne; pre komplexnú funkčnosť použite pluginy.
*   Blokové témy fungujú najlepšie s WordPressom verziou 5.9 a novšou.

## Úprava problémov (Troubleshooting) {#next-steps}

**Téma sa neobjaví po vytvorení (scaffolding)**
*   Preverte, či existuje adresár témy a má správne povolenia.
*   Skontrolujte, či je `theme.json` platický JSON formát.
*   Uistite sa, že názov témy nekonfliktuje s existujúcimi témami.

**Aktivácia sa nepovedá**
*   Potvrďte, že máte správne administratívne práva.
*   Prevercie, či je adresár témy čítateľný pre WordPress.
*   Prejdite po WordPressových chystecach (error logs) na detaily.

**Témeny tokeny neaplikujú**
*   Prevercie, či je syntax `theme.json` správna.
*   Vyčistite všetky pluginy na cache.
*   Skontrolujte, či verzia vášho WordPressu podporuje tokeny, ktoré používate.

## Nasledujúce kroky

Po aktivácii témy môžete:
*   Použiť **skil** Design System Aesthetics na vylepšenie typografie, farieb a vzdialeností (spacing).
*   Prispôsobiť jednotlivé štýly blokov pomocou WordPressho block editora.
*   Pridať vlastný CSS do súboru `style.css` témy.
*   Vytvoriť vlastné šablóny blokov pre konkrétne typy stránok.
