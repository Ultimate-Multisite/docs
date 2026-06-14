---
title: Estetika Design systému
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Zručnosť v estetike Design Systemu

**Zručnosť v estetike Design Systemu** je vedený prístup k jemnému upraveniu vizuálnej identicity vášho webu. Pomáha vám robiť konzistentné rozhodnutia o typografii, farbe, zameraní a tokenoch pohybu (motion tokens), ktoré definujú váš design systém.

## Čo je estetika Design Systemu?

Estetika Design Systemu je štruktúrovaná zručnosť, ktorá zahŕňa:

- **Typografie**: Rodiny fontov, veľkosti, váhy a výšky riadkov
- **Farba**: Primárne, sekundárne, akcentné a neutrálne palety
- **Zameranie (Spacing)**: Rozmer paddingu, marginu a rozmerov pauz
- **Rámce (Borders)**: Tokeny mierky a šírky zaoblenia
- **Šatky (Shadows)**: Tokeny výšky a hĺbky
- **Pohyby (Motion)**: Animácie a prechody

Tieto rozhodnutia sú zachytávané v súbore `theme.json` vášho témy, čo vytvára jednotný vizuálny systém.

## Prečo použiť estetiku Design Systemu?

### Konzistentnosť

Design systém zaručuje:

- Každý text používa rovnakú škálu typografie
- Farby sa používajú konzistentne po celom vašom webu
- Zameranie je vedomé a predvídateľné
- Animácie sú jednotné

### Efektívnosť

Namísto robienia návrhov na stránku za stránkou, vy:

- Definujete tokeny raz
- Používate ich všade
- Aktualizujete globálne len cez zmenu jednej hodnoty

### Flexibilita

Môžete:

- Rýchlo upraviť celý svoj design systém
- Experimentovať s rôznymi estetickými prvky
- Udržiať konzistentnú značku, zatiaľ čo sa vyvíjate

## Spúšťanie zručnosti v estetike Design Systemu

### Manuálne aktivovanie

Môžete si zručnosť začať kedykoľvek:

```
"Pomôž mi upraviť môj design systém"
```

alebo

```
"Ulepme estetiku môjho webu"
```

alebo

```
"Prívesďte ma pri rozhodovaní o design systéme"
```

### Automatické návrhy

Agenti môžu odporúčať použitie zručnosti, keď:

- Požiadate o vizuálne zmeny
- Požiadate o "moderný" alebo "profesionálny" redesign
- Chce sa zlepšiť vizuálnu konzistentnosť
- Sú v príprave na spustenie vášho webu

## Proces estetiky Designu

### Krok 1: Typografie

Agent sa pýta po vašich výberoch fontov:

```
Aký štýl typografie preferujete?
- Serif (tradičný, elegantný)
- Sans-serif (moderný, čistý)
- Monospace (technický, zameraný na kód)

Pre váš nadpisový font:
- Chcete mať odlišný nadpisový font, alebo použiť ten istý ako text v tláku?
- Preferencia: tučný, elegantný, hravý, minimálny?

Pre váš textový font:
- Čitavosť je kľúčová. Preferujete:
  - Většiu, viac priestorové texte
  - Kompaktné, efektívne texte
  - Štandardné veľkosti
```

Agent potom definuje:

- **Nadpisový font**: Primárny font pre názvy a nadpisy
- **Textový font**: Font pre odseky a text v tláku
- **Monospace font**: Font pre kód a technický obsah
- **Veľkosť stupnice (Size scale)**: Preddefinované veľkosti (malá, základná, veľká, XL atď.)
- **Hmotnosť stupnice (Weight scale)**: Hmotnosti fontov (základná, stredná, tučná atď.)
- **Výška riadku (Line height)**: Vzduch medzi riadkami pre čitavosť

### Krok 2: Väčba palety

```
Definujme vašu väcbu.

Primárna väzba (vaša značková väzba):
- Aktuálna: [zobrazená existujúca väzba]
- Zmena na: [výber farby alebo hex kód]

Sekundárna väzba (podporujúca väzba):
- Aktuálna: [zobrazená existujúca väzba]
- Zmena na: [výber farby alebo hex kód]

Akcentná väzba (významné body a CTA):
- Aktuálna: [zobrazená existujúca väzba]
- Zmena na: [výber farby alebo hex kód]

Neutrálná paleta (šedé pre text, hranice, pozadia):
- Svetlá: [väzba]
- Stredná: [väzba]
- Tamné: [väzba]
```

Agent vytvorí kompletnú paletu vrátane:

- Primárnej, sekundárnej a akcentnej väzby
- Neutrálnych šedých (svetlá, stredná, tamné)
- Semantických väzieb (úspech, varovanie, chyba)
- Štátov hover a aktívnych stavov

Ako si, aký priestor chcete mať?

Preferencie škály rozmerí (spacing):
- Kompaktná (stiahnuté, efektívne štruktúry)
- Normálna (vyvážené rozmerie)
- Prosthera (obľubná veľká prázdnota)

Toto ovplyvňuje:
- Padding vnútri tlačidiel a kariet
- Margíny medzi sekciami
- Vzduch medzi položkami v grídach

Agent definuje tokeny rozmerí (spacing):

- Základná jednotka (obvykle 4px alebo 8px)
- Škála: xs, sm, md, lg, xl, 2xl
- Špecifické hodnoty pre padding, margin, gap

### Krok 4: Randý a stíny (Borders and Shadows)

```
Vizualná hĺbka a definícia:

Preferencie randej (border radius):
- Ostrá (bez zaoblenenia)
- Subtilná (malé zaoblenie)
- Zaoblená (stredné zaoblenie)
- Veľmi zaoblená (veľké zaoblenie)

Hĺbka stínu:
- Platná (bez stín)
- Subtilná (ľahké stíny)
- Výrazná (silné stíny)
```

Agent vytvára:

- Tokeny randej (pre tlačidlá, kariety, vstupy)
- Tokeny stínu pre úrovne zvýraznenia (elevation levels)
- Tokeny šírky randí (border width tokens)

### Krok 5: Pohob a animácie (Motion and Animation)

```
Ako by sa mal váš web cítiť pri interakcii?

Preferencie animácií:
- Minimálna (bez animácií)
- Subtilná (jemné prechody)
- Hravá (výrazné animácie)

Špecifické animácie:
- Prechody stránok: rozmazanie, posúčaní alebo nič?
- Hover tlačidla: zmena veľkosti, farby alebo obojstranná?
- Staviky načítania: spinner, skeleton alebo lišta postupu?
```

Agent definuje:

- Dĺžky prechodov (rýchle, normálne, pomalé)
- Funkcie zaoblenia (ease-in, ease-out, ease-in-out)
- Klíčové snímky animácií pre bežné interakcie

## Aplikovanie estetiky designu systému

### Automatické aplikovanie

Po dokončení tejto úloh agent:

1. Aktualizuje váš `theme.json` so všetkými tokenmi
2. Aplikuje design systém na váš aktívny téma
3. Regeneruje štýle blokov, aby sa zhodovali s novým systémom
4. Aktivuje aktualizované téma

### Manuálne aplikovanie

Môžete tiež upraviť `theme.json` priamo:

## Zobrazenie Vašho Designu Systému

### Pýtajte sa na Agenta

```
"Show me my design system"
```

alebo

```
"What are my current design tokens?"
```

Agent vám zobrazí vaše typografie, farby, vzdialenosť a ostatné tokeny.

### Zobraziť theme.json

Otevrite si priečinok `/wp-content/themes/[theme-name]/theme.json` v textovom editori, aby ste videli surové definície tokenov.

## Aktualizácia Vašho Designu Systému

### Rýchle aktualizácie

Pýtajte sa na agenta na konkrétne zmeny:

```
"Make the primary color darker"
```

alebo

```
"Increase the spacing scale by 20%"
```

alebo

```
"Change the heading font to a serif"
```

### Plná redesign

Vyprogramujte znova schopnosť Design System Aesthetics:

```
"Let's redesign my entire design system"
```

Toto vás presmeruje cez všetky rozhodnutia znova, začínajúcte s vašimi aktuálnymi hodnotami.

### Časti aktualizácie

Aktualizujte konkrétne aspekty:

```
"Just update the color palette, keep everything else"
```

## Najlepšie praxe pre Design Systém

### Konzistencia

- Používajte rovnaké tokeny všade
- Ne vytvárajte jednorazové farby alebo veľkosti
- Odpovedajte na tokeny namiesto toho, aby ste hodnoty hardkodovali (vložíli priamo do kódu)

### Názvy

Používajte jasné a významné názvy:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Škálovateľnosť

Dokumentujte svoj dizajn systém:

- Prečo ste si vybrali konkrétne farby
- Kedy použiť každý token
- Výnimky a okrajové przypadky

## Bežné vzory dizajnu systému

### Modern Minimalist

- Štipifikovaná typografia (Inter, Helvetica)
- Omezená paleta farieb (2–3 farby)
- Obilný zmysel na priestor (spacing)
- Subtielne stíny
- Plynulé, rýchle animácie

### Ciepký a priateľský

- Mix štipifikovaných a bezštipifikovaných fontov
- Ciepká paleta farieb (oranže, teplé šedé)
- Zaoblenuté rohy
- Jemné stíny
- Hravé animácie

### Profesionálny korporátny

- Čistý bezštipifikovaný font (Roboto, Open Sans)
- Neutrálna paleta s akcentnú farbou
- Štruktúrované zmysel na priestor
- Minimálne stíny
- Jemné prechody

### Kreatívny a odvážny

- Charakteristická typografia
- Odvážná paleta farieb
- Variabilný zmysel na priestor
- Silné stíny
- Zameriať animácie

## Úprava problémov (Troubleshooting)

**Moje zmeny v dizajne systému sa neobjavujú**
- Vyčistite cache prehliadača
- Prebudte si stránku, ak používate statický generátor
- Skontrolujte, či je `theme.json` platný JSON
- Overte, že je téma aktívna

**Farby sa na rôznych stránkach zdajú iné**
- Skontrolujte konfliktný CSS v doplnkoch (plugins)
- Overte, že všetky stránky používajú tú istú tému
- Vyčistite akékoľvek cache doplnkov

**Chcem sa vrátiť k pôvodnému dizajnu systému**
- Otázal agentovi: "Záobrazte mi históriu môjho dizajnu systému"
- Manuálne upravte `theme.json` na pôvodné hodnoty
- Ponovte skicu s inými možnosťami

## Nasledujúce kroky

Po definovaní vášho dizajnu systému:

1. **Prejdite po svojom svete (site)**: Navštívte si svoj web, aby ste videli nový dizajn.
2. **Upravte ďalej**: Použite svoju zručnosť na ďalšie úpravy.
3. **Vytvorte šablóny**: Postavte prispôsobené blokové šablóny pomocou vašich design tokenov.
4. **Dokumentujte**: Podielte si svoj design system s členmi tímu.
