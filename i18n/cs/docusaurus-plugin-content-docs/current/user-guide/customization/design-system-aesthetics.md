---
title: Úroveň dovedností v estetice designového systému
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Estetika systémového designu

**Estetika systémového designu** je průvodní přístup k vylepšení vizuální identity vašeho webu. Pomáhá vám dělat konzistentní rozhodnutí ohledně typografie, barev, mezery a tokenů pro animace, které definují váš systém designu.

## Co je estetika systémového designu?

Estetika systémového designu je strukturovaná dovednost, která pokrývá:

- **Typografie**: Typografické rodiny, velikosti, výšky a mezery řádků
- **Barvy**: Primární, sekundární, akcentní a neutrální palety
- **Mezery**: Škály pro vnitřní polštářování (padding), okrajové mezery (margin) a mezery (gap)
- **Okraje**: Tokeny pro zaoblení a šířku
- **Stíny**: Tokeny pro výšku a hloubku
- **Animace**: Animace a přechody

Tyto rozhodnutí jsou zaznamenána do souboru `theme.json` vaší šablony a vytvářejí tak koherentní vizuální systém.

## Proč použít estetiku systémového designu?

### Konzistence

Systém designu zajišťuje:

- Že veškerý text používá stejnou škálu typografie
- Že barvy jsou konzistentně použity napříč vaším webem
- Že mezery dodržují předvídatelný vzorec
- Že animace působí jednotně

### Efektivita

Místo toho, abyste dělali designové rozhodnutí stránka po stránce, vy:

- Definujete tokeny jednou
- Aplikujete je všude
- Aktualizujete globálně změnou jedné hodnoty

### Flexibilita

Můžete:

- Rychle upravit celý systém designu
- Experimentovat s různými estetickými směry
- Udržovat konzistenci značky při vývoji

## Spuštění estetiky systémového designu

### Ruční aktivace

Můžete spustit tuto dovednost kdykoli:

```
"Pomoz mi vylepšit systém designu"
```

nebo

```
"Zlepšme estetiku mého webu"
```

nebo

```
"Vede mě skrz rozhodování o systémovém designu"
```

### Automatické návrhy

Agent může navrhnout použití této dovednosti, když:

- Žádáte o změny designu
- Žádáte o "moderní" nebo "profesní" rekonstrukci
- Chcete zlepšit vizuální konzistenci
- Přípravujete se na spuštění webu

## Proces estetiky systémového designu

### Krok 1: Typografie

Agent se zeptá na vaše typografické volby:

```
Jaký je váš preferovaný typografický styl?
- Serif (tradiční, elegantní)
- Sans-serif (moderní, čistý)
- Monospace (technický, zaměřený na kód)

Pro font nadpisů:
- Chcete odlišný font pro nadpisy, nebo použít stejný jako pro tělo textu?
- Preferujete: tučný, elegantní, hravý, minimalistický?

Pro font těla textu:
- Čitelnost je klíčová. Preferujete:
  - Więksí, vzdušnější text
  - Kompaktní, efektivní text
  - Standardní velikost
```

Agent poté definuje:

- **Font nadpisů**: Primární font pro titulky a nadpisy
- **Font těla**: Font pro odstavce a hlavní text
- **Monospace font**: Font pro kód a technický obsah
- **Škála velikostí**: Předdefinované velikosti (malý, základní, velký, XL atd.)
- **Škála výšek**: Výšky fontů (základní, střední, tučný atd.)
- **Mezery řádků**: Vzdálenost mezi řádky pro lepší čitelnost

### Krok 2: Paleta barev

```
Definujme vaši paletu barev.

Primární barva (barva značky):
- Aktuální: [zobrazí stávající barvu]
- Změnit na: [výběr barev nebo hex kód]

Sekundární barva (podporující barva):
- Aktuální: [zobrazí stávající barvu]
- Změnit na: [výběr barev nebo hex kód]

Akcentní barva (výzdobní prvky a CTA):
- Aktuální: [zobrazí stávající barvu]
- Změnit na: [výběr barev nebo hex kód]

Neutrální paleta (šedé barvy pro text, okraje, pozadí):
- Světlá: [barva]
- Střední: [barva]
- Tmavá: [barva]
```

Agent vytvoří kompletní paletu, která zahrnuje:

- Primární, sekundární a akcentní barvy
- Neutrální šedé barvy (světlá, střední, tmavá)
- Semantické barvy (úspěch, varování, chyba)
- Stavy při přejezdu (hover) a aktivní stavy

### Krok 3: Mezery

```
Jaký prostor pro dýchání chcete?

Preferovaný systém mezery:
- Kompaktní (úzké, efektivní rozložení)
- Normální (vyvážený prostor)
- Vzdušný (velmi volný prostor)

To ovlivňuje:
- Vnitřní polštářování v tlačítkách a kartách
- Okrajové mezery mezi sekcemi
- Mezery mezi prvky v mřížce
```

Agent definuje tokeny pro mezery:

- Základní jednotka (obvykle 4px nebo 8px)
- Škála: xs, sm, md, lg, xl, 2xl
- Specifické hodnoty pro padding, margin, gap

### Krok 4: Okraje a stíny

```
Vizuální hloubka a definice:

Preferované zaoblení okrajů:
- Ostře (bez zaoblení)
- Jemně (malé zaoblení)
- Zaoblené (střední zaoblení)
- Velmi zaoblené (velké zaoblení)

Hloubka stínu:
- Ploché (bez stínů)
- Jemné (lehké stíny)
- Výrazné (silné stíny)
```

Agent vytvoří:

- Tokeny pro zaoblení okrajů (pro tlačítka, karty, vstupní pole)
- Tokeny pro stíny pro různé úrovně výšky
- Tokeny pro šířku okrajů

### Krok 5: Animace a pohyb

```
Jak by měl váš web působit při interakci?

Preferovaný pohyb:
- Minimální (bez animací)
- Jemný (lehké přechody)
- Hravý (viditelné animace)

Specifické animace:
- Přechody stránky: vyblednutí, posuv nebo žádné?
- Hover na tlačítku: změna velikosti, změna barvy nebo obojí?
- Stavy načítání: spinner, skeleton nebo lišta pokroku?
```

Agent definuje:

- Délky přechodů (rychlé, normální, pomalé)
- Funkce zjemnění (ease-in, ease-out, ease-in-out)
- Klíče animací pro běžné interakce

## Aplikace estetiky systémového designu

### Automatická aplikace

Po dokončení dovednosti agent:

1. Aktualizuje `theme.json` vaší šablony všemi tokeny
2. Aplikuje systém designu na aktivní šablonu
3. Regeneruje styly bloků tak, aby odpovídaly novému systému
4. Aktivuje aktualizovanou šablonu

### Ruční aplikace

Můžete také přímo upravit `theme.json`:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Zobrazení systémového designu

### Zeptat se agenta

```
"Ukáž mi můj systém designu"
```

nebo

```
"Jaké jsou mé aktuální tokeny designu?"
```

Agent zobrazí vaši typografii, barvy, mezery a další tokeny.

### Zobrazení theme.json

Otevřete `/wp-content/themes/[theme-name]/theme.json` v textovém editoru, abyste viděli surové definice tokenů.

## Aktualizace systémového designu

### Rychlé aktualizace

Zaptejte agenta na konkrétní změny:

```
"Ztmavni primární barvu"
```

nebo

```
"Zvyšte škálu mezery o 20%"
```

nebo

```
"Změň nadpisový font na serif"
```

### Kompletní rekonstrukce

Opakujte dovednost Estetika systémového designu:

```
"Chci kompletně přepracovat celý systém designu"
```

To vás provede všemi rozhodnutími znovu, začínaje vašimi aktuálními hodnotami.

### Částečné aktualizace

Aktualizujte specifické aspekty:

```
"Použij jen aktualizaci palety barev, vše ostatní nechte být"
```

## Nejlepší praxe systémového designu

### Konzistence

- Používejte stejné tokeny všude
- Nekládejte jednorázové barvy nebo velikosti
- Odkazujte na tokeny namísto hardcodování hodnot

### Názvování

Používejte jasná, semantická jména:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Škálovitelnost

Navrhujte systém, který je škálovatelný:

- Používejte relativní jednotky (rem, em) namísto pixelů
- Vytvářejte škály (xs, sm, md, lg, xl) namísto libovolných hodnot
- Plánujte budoucí přidání

### Dokumentace

Dokumentujte svůj systém designu:

- Proč jste si vybrali konkrétní barvy
- Kdy použít každý token
- Výjimky a okrajové případy

## Běžné vzory systémového designu

### Moderní minimalistický

- Sans-serif typografie (Inter, Helvetica)
- Omezená paleta barev (2–3 barvy)
- Vzdušný prostor
- Jemné stíny
- Plynulé, rychlé animace

### Teplý a přátelský

- Kombinace serif a sans-serif
- Teplá paleta barev (oranžové, teplé šedé)
- Zaoblené rohy
- Jemné stíny
- Hravé animace

### Profesní korporátní

- Čistý sans-serif (Roboto, Open Sans)
- Neutrální paleta s akcentní barvou
- Strukturovaný prostor
- Minimální stíny
- Jemné přechody

### Kreativní a odvážný

- Výrazitelná typografie
- Odvážná paleta barev
- Variabilní mezery
- Silné stíny
- Viditelné animace

## Řešení problémů

**Změny mého systémového designu se nezobrazují**
- Vymažte cache prohlížeče
- Přeprogramujte web, pokud používáte statický generátor
- Zkontrolujte, zda je `theme.json` platní JSON
- Ověřte, že je šablona aktivní

**Barvy se na různých stránkách liší**
- Zkontrolujte, zda neexistuje konfliktní CSS v pluginích
- Ověřte, že všechny stránky používají stejnou šablonu
- Vymažte jakýkoli cache z pluginů

**Chci se vrátit k předchozímu systému designu**
- Zaptejte agenta: "Ukáž mi historii mého systémového designu"
- Ručně upravte `theme.json` na předchozí hodnoty
- Opakujte dovednost se jinými volbami

## Další kroky

Po definování systémového designu:

1. **Projděte svůj web**: Navštivte svůj web, abyste viděli nový design
2. **Dále vylepšete**: Uprovedte úpravy pomocí dovednosti znovu
3. **Vytvořte šablony**: Vytvořte vlastní šablony bloků pomocí vašich tokenů designu
4. **Dokumentujte**: Sdílejte svůj systém designu s členy týmu
