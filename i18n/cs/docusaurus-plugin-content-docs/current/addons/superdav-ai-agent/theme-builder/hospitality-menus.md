---
title: Menu pro ubytování
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Gastronómie menu

Funkce **Gastronómie menu** (Hospitality Menus) umožňuje Theme Builder vytvářet a vkládat strukturovaná menu pro jídlo a nápoje přímo na váš WordPress web.

## Přehled

Theme Builder nyní dokáže vytvořit profesionální, strukturovaná menu pro podniky v oblasti hostторинu, včetně restaurací, kaváren, barů a cateringových služeb. Tato menu jsou plně integrovány do designu vašeho webu a je možné je snadno aktualizovat a spravovat.

## Podporované typy hostторинu

- **Restaurace** — menu pro plnohodinné stravování
- **Kavárny** — menu s kávou a lehčí stravou
- **Bary a lounge** — menu s nápoji a předkrmy
- **Pekárny** — menu s pečivem a chlebem
- **Cateringové služby** — možnosti menu pro události
- **Food trucky** — menu pro mobilní stravování
- **Pivovarní a vinice** — menu s nápoji a popisy

## Struktura menu

### Kategorie menu

Menu jsou uspořádána do kategorií:

- **Předkrmy** — zakousky a malé občerstvení
- **Hlavní pokrmy** — hlavní jídla
- **Připíchnutí** — přílohy a zelenina
- **Dezeráty** — sladkosti
- **Nápoje** — pití (alkoholické i nealkoholické)
- **Speciálky** — denní nebo sezónní speciality

### Formát položky menu

Každá položka menu obsahuje:

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

#### Pole položky

| Pole | Typ | Popis |
|-------|------|-------------|
| `name` | string | Název pokrmu nebo nápoje |
| `description` | string | Podrobný popis položky |
| `price` | string | Cena (formátovaná s měnou) |
| `dietary_info` | array | Stravovací atributy (Vegan, Gluten-Free atd.) |
| `allergens` | array | Časté alergeny (Ořechy, Mořské plody atd.) |
| `availability` | string | Kdy je k dispozici (Denně, Sezónně atd.) |

## Vytváření gastronomických menu

### Krok 1: Poskytněte informace o menu

Dejte Theme Builder vědět o svém menu:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Krok 2: Theme Builder generuje menu

Theme Builder:

1. Vytvoří strukturovanou stránku menu
2. Navrhne ji tak, aby odpovídala tématu vašeho webu
3. Uspořádá položky do kategorií
4. Formátuje ceny a popisy
5. Přidá informace o stravování a alergenech

### Krok 3: Přehled a přizpůsobení

Můžete:

1. Editovat položky menu a ceny
2. Přidat nebo odstranit kategorie
3. Změnit pořadí položek v rámci kategorií
4. Aktualizovat popisy a stravovací informace
5. Upravit styl a rozložení

## Možnosti zobrazení menu

### Celá stránka menu

Vězená stránka zobrazující vaše kompletní menu:

- Uspořádáno podle kategorií
- Vyhledatelné a filtrovatelné
- Formátování pro tisk
- Design optimalizovaný pro mobilní zařízení

### Widget menu

Vložte sekce menu na jiné stránky:

- Vybrané položky na domovské stránce
- Denní speciality v bočním panelu
- Menu nápojů na stránce baru
- Prezentace dezertů v patičce

### Menu PDF

Vytvořte stahovatelné PDF menu:

- Profesionální formátování
- Kvalita připravená na tisk
- Zahrnuje obrázky a popisy
- Snadné sdílení a odeslání e-mailem

## Informace o stravování a alergenech

### Stravovací atributy

Označte položky stravovacími informacemi:

- **Vegan** — bez živočišných produktů
- **Vegetarián** — bez masa
- **Gluten-Free** — bezlepkové pro celiakii
- **Dairy-Free** — bez mléčných produktů
- **Nut-Free** — bez ořechů a arašíd
- **Low-Carb** — s nižším obsahem sacharidů
- **High-Protein** — bohaté na bílkoviny

### Varování před alergeny

Zahrňte běžné alergeny:

- **Ořechy** — ořechy a arašídy
- **Mořské plody** — krustoustní a měkkýši
- **Ryby** — všechny druhy ryb
- **Mléko** — mléko a mléčné výrobky
- **Vajíčka** — kuřecí vajíčka
- **Soja** — sójové produkty
- **Gluten** — pšeničné a obsahující gluten
- **Sesam** — sezamové semínka a olej

## Správa menu

### Aktualizace cen

Snadno aktualizujte ceny menu:

1. Přejděte na stránku menu
2. Klikněte na „Edit Menu“
3. Aktualizujte ceny položek
4. Uložte změny
5. Změny se okamžitě zobrazí na vašem webu

### Přidání sezónních položek

Vytvořte sezónní varianty menu:

1. Vytvořte novou verzi menu
2. Přidejte sezónní položky
3. Označte položky jako „Sezónní“
4. Nastavte datum dostupnosti
5. Automaticky se zobrazí během sezóny

### Správa speciálních položek

Zobrazte denní nebo týdenní speciality:

1. Vytvořte kategorii „Specials“
2. Přidejte položky s daty dostupnosti
3. Zvýrazněte speciality na domovské stránce
4. Aktualizujte denně nebo týdně
5. Archivujte staré speciality

## Integrace s Theme Builderem

Při použití Theme Builderu pro hostторинové stránky:

1. **Automatické detekce menu** — identifikuje, zda je váš podnik v oblasti stravování/nápojů
2. **Vytváření stránky menu** — generuje profesionální stránky menu
3. **Shoda designu** — menu odpovídají tématu vašeho webu
4. **Optimalizace pro mobilní zařízení** — menu se krásně zobrazí na telefonech
5. **SEO optimalizace** — menu jsou přátelská pro vyhledávače

## Nejlepší praxe

### Design menu

- **Jasná organizace** — logická struktura kategorií
- **Čitelné popisy** — lákavé a informativní
- **Konzistentní ceny** — jasná měna a formátování
- **Profesionální fotografie** — vysoce kvalitní obrázky jídla
- **Bílá plocha** — neztěžujte stránku

### Obsah

- **Přesné popisy** — popisujte položky přesně
- **Zvýraznění speciálů** — ujměňte speciality
- **Zahrnutí alergenů** — vždy uvádějte alergeny
- **Regulární aktualizace** — udržujte ceny a položky aktuální
- **Používání lákavého jazyka** — nechte položky znít skvěle

### Dostupnost

- **Čitelné písma** — používejte jasná a čitelná písma
- **Dostatečný kontrast** — zajistěte čitelnost textu
- **Stravovací štítky** — jasně označte stravovací možnosti
- **Varování před alergeny** — alergeny zobražte výrazně
- **Přátelště dostupné pro mobilní zařízení** — otestujte na všech zařízeních

## Příklady

### Struktura menu restaurace

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

### Struktura menu kavárny

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

## Související funkce

- [Create Menu](../abilities/create-menu.md) — vytvářet navigační menu
- [Design Direction](./design-direction.md) — přizpůsobit design vašeho webu
- [Discovery Interview](./discovery-interview.md) — plánovat strukturu vašeho webu
