---
title: Menu pre pohostinstvo
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Jedálne lístky pre pohostinstvo {#hospitality-menus}

Funkcia **Jedálne lístky pre pohostinstvo** umožňuje Theme Builder generovať a vkladať štruktúrované stránky s jedálnymi a nápojovými lístkami priamo do vášho WordPress webu.

## Prehľad {#overview}

Theme Builder teraz dokáže vytvárať profesionálne, štruktúrované stránky s jedálnymi lístkami pre pohostinské podniky vrátane reštaurácií, kaviarní, barov a cateringových služieb. Tieto jedálne lístky sú plne integrované do dizajnu vášho webu a dajú sa jednoducho aktualizovať a spravovať.

## Podporované typy pohostinstva {#supported-hospitality-types}

- **Reštaurácie** — jedálne lístky pre plnohodnotné stolovanie
- **Kaviarne** — lístky s kávou a ľahkými jedlami
- **Bary a salóniky** — nápojové lístky a predjedlá
- **Pekárne** — lístky s pečivom a chlebom
- **Cateringové služby** — možnosti menu pre podujatia
- **Food trucky** — lístky mobilných stravovacích služieb
- **Pivovary a vinárstva** — nápojové lístky s opismi

## Štruktúra jedálneho lístka {#menu-structure}

### Kategórie jedálneho lístka {#menu-categories}

Jedálne lístky sú usporiadané do kategórií:

- **Predjedlá** — úvodné jedlá a malé porcie
- **Hlavné jedlá** — hlavné chody
- **Prílohy** — prílohy a zelenina
- **Dezerty** — sladké pochúťky
- **Nápoje** — nápoje (alkoholické aj nealkoholické)
- **Špeciality** — denné alebo sezónne špeciality

### Formát položky jedálneho lístka {#menu-item-format}

Každá položka jedálneho lístka obsahuje:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Polia položky {#item-fields}

| Pole | Typ | Opis |
|-------|------|-------------|
| `name` | string | Názov jedla alebo nápoja |
| `description` | string | Podrobný opis položky |
| `price` | string | Cena (formátovaná s menou) |
| `dietary_info` | array | Diétne atribúty (vegánske, bezlepkové atď.) |
| `allergens` | array | Bežné alergény (orechy, kôrovce atď.) |
| `availability` | string | Kedy je dostupné (denne, sezónne atď.) |

## Vytváranie jedálnych lístkov pre pohostinstvo {#creating-hospitality-menus}

### Krok 1: Poskytnite informácie o jedálnom lístku {#step-1-provide-menu-information}

Povedzte Theme Builder o svojom jedálnom lístku:

```
Vytvor jedálny lístok reštaurácie pre moju taliansku reštauráciu s predjedlami,
cestovinovými jedlami, hlavnými chodmi a dezertmi. Zahrň ceny a opisy.
```

### Krok 2: Theme Builder vygeneruje jedálny lístok {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Vytvorí štruktúrovanú stránku jedálneho lístka
2. Navrhne ju tak, aby ladila s témou vášho webu
3. Usporiada položky do kategórií
4. Naformátuje ceny a opisy
5. Pridá diétne informácie a informácie o alergénoch

### Krok 3: Skontrolujte a prispôsobte {#step-3-review-and-customize}

Môžete:

1. Upraviť položky jedálneho lístka a ceny
2. Pridať alebo odstrániť kategórie
3. Zmeniť poradie položiek v rámci kategórií
4. Aktualizovať opisy a diétne informácie
5. Upraviť štýlovanie a rozloženie

## Možnosti zobrazenia jedálneho lístka {#menu-display-options}

### Kompletná stránka jedálneho lístka {#full-menu-page}

Samostatná stránka zobrazujúca celý váš jedálny lístok:

- Usporiadané podľa kategórie
- S možnosťou vyhľadávania a filtrovania
- Rozloženie vhodné na tlač
- Responzívny dizajn pre mobilné zariadenia

### Widget jedálneho lístka {#menu-widget}

Vložte sekcie jedálneho lístka na iné stránky:

- Odporúčané položky na domovskej stránke
- Denné špeciality v bočnom paneli
- Nápojový lístok na stránke baru
- Prezentácia dezertov v pätičke

### PDF jedálneho lístka {#menu-pdf}

Vygenerujte stiahnuteľný PDF jedálny lístok:

- Profesionálne formátovanie
- Kvalita pripravená na tlač
- Zahŕňa obrázky a opisy
- Jednoduché zdieľanie a odosielanie e-mailom

## Diétne informácie a informácie o alergénoch {#dietary-and-allergen-information}

### Diétne atribúty {#dietary-attributes}

Označte položky diétnymi informáciami:

- **Vegánske** — bez živočíšnych produktov
- **Vegetariánske** — bez mäsa
- **Bezlepkové** — bezpečné pri celiakii
- **Bez mliečnych výrobkov** — bez mliečnych produktov
- **Bez orechov** — bez stromových orechov alebo arašidov
- **Nízkosacharidové** — znížený obsah sacharidov
- **Vysokoproteínové** — bohaté na bielkoviny

### Upozornenia na alergény {#allergen-warnings}

Zahrňte bežné alergény:

- **Orechy** — stromové orechy a arašidy
- **Kôrovce a mäkkýše** — kôrovce a mäkkýše
- **Ryby** — všetky druhy rýb
- **Mliečne výrobky** — mlieko a mliečne produkty
- **Vajcia** — slepačie vajcia
- **Sója** — sójové produkty
- **Lepok** — pšenica a obilniny obsahujúce lepok
- **Sezam** — sezamové semienka a olej

## Správa jedálneho lístka {#menu-management}

### Aktualizácia cien {#updating-prices}

Jednoducho aktualizujte ceny v jedálnom lístku:

1. Prejdite na stránku jedálneho lístka
2. Kliknite na „Upraviť jedálny lístok“
3. Aktualizujte ceny položiek
4. Uložte zmeny
5. Zmeny sa okamžite zobrazia na vašom webe

### Pridávanie sezónnych položiek {#adding-seasonal-items}

Vytvorte sezónne variácie jedálneho lístka:

1. Vytvorte novú verziu jedálneho lístka
2. Pridajte sezónne položky
3. Označte položky ako „Sezónne“
4. Naplánujte dátumy dostupnosti
5. Automaticky zobrazujte počas sezóny

### Správa špecialít {#managing-specials}

Zobrazujte denné alebo týždenné špeciality:

1. Vytvorte kategóriu „Špeciality“
2. Pridajte položky s dátumami dostupnosti
3. Zvýraznite špeciality na domovskej stránke
4. Aktualizujte denne alebo týždenne
5. Archivujte staré špeciality

## Integrácia s Theme Builder {#integration-with-theme-builder}

Pri používaní Theme Builder pre pohostinské weby:

1. **Automatická detekcia jedálneho lístka** — identifikuje, či ste podnik s jedlom/nápojmi
2. **Vytvorenie stránky jedálneho lístka** — generuje profesionálne stránky jedálnych lístkov
3. **Zladenie dizajnu** — jedálne lístky ladia s témou vášho webu
4. **Optimalizácia pre mobilné zariadenia** — jedálne lístky sa krásne zobrazujú na telefónoch
5. **SEO optimalizácia** — jedálne lístky sú vhodné pre vyhľadávače

## Osvedčené postupy {#best-practices}

### Dizajn jedálneho lístka {#menu-design}

- **Jasná organizácia** — logická štruktúra kategórií
- **Čitateľné opisy** — lákavé a informatívne
- **Konzistentné ceny** — jasná mena a formátovanie
- **Profesionálne fotografie** — vysokokvalitné obrázky jedál
- **Voľný priestor** — nepreplňujte stránku

### Obsah {#content}

- **Presné opisy** — opisujte položky presne
- **Zvýraznite špeciality** — nech špeciality vyniknú
- **Zahrňte alergény** — vždy uvádzajte alergény
- **Pravidelne aktualizujte** — udržiavajte ceny a položky aktuálne
- **Používajte lákavý jazyk** — nech položky znejú chutne

### Prístupnosť {#accessibility}

- **Čitateľné písma** — používajte jasné, ľahko čitateľné typy písma
- **Dostatočný kontrast** — zabezpečte čitateľnosť textu
- **Diétne označenia** — jasne označte diétne možnosti
- **Upozornenia na alergény** — výrazne zobrazte alergény
- **Vhodné pre mobilné zariadenia** — testujte na všetkých zariadeniach

## Príklady {#examples}

### Štruktúra jedálneho lístka reštaurácie {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Štruktúra menu kaviarne {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Súvisiace funkcie {#related-features}

- [Vytvoriť menu](../abilities/create-menu.md) — vytvárať navigačné menu
- [Smerovanie dizajnu](./design-direction.md) — prispôsobte dizajn svojej stránky
- [Úvodný rozhovor](./discovery-interview.md) — naplánujte štruktúru svojej stránky
