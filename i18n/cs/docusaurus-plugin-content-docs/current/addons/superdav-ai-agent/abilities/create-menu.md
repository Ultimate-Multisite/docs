---
title: Vytvořit menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Vytváření menu

Funkce **Vytváření menu** umožňuje vytvářet navigační menu pro WordPress, s podporou definování navigačních popisků, které se liší od názvů stránek.

## Přehled {#overview}

Tato funkce rozšiřuje standardní možnosti vytváření menu tím, že umožňuje specifikovat parametr `navigation_label`. To vám pomáhá vytvořit menu, kde se popisek zobrazený v navigaci liší od názvu stránky, což poskytuje větší flexibilitu při strukturování webu a zlepšuje uživatelský zážitek.

## Parametry {#parameters}

| Parametr | Typ | Požadováno | Popis |
| :--- | :--- | :--- | :--- |
| `name` | string | Ano | Název menu, např. `Hlavní navigace` |
| `location` | string | Ne | Lokalita tématu, do které se toto menu přiřadí, např. `primary` |
| `navigation_label` | string | Ne | Popisek pro zobrazení v navigaci (liší se od názvu stránky) |

## Vrátkaná hodnota {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigační popisek vs. Název stránky {#navigation-label-vs-page-title}

Parametr `navigation_label` vám umožňuje oddělit interní název menu od popisku, který je zobrazen uživatelům:

- **`name`** — Interní identifikátor menu používaný WordPressem (např. "Primary Navigation")
- **`navigation_label`** — Popisek zobrazený návštěvníkům webu v navigaci (např. "Main Menu")

Je to užitečné, když:
- Vaše interní pojmenování se liší od popisků pro uživatele
- Chcete v navigaci kratší popisy než v administraci
- Musíte podporovat více jazyků s různou délkou popisků
- Vytváříte menu pro specifické regiony nebo skupiny uživatelů

## Příklady použití {#usage-examples}

### Příklad 1: Základní menu s navigačním popiskem {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Vytvořte hlavní navigační menu s názvem "Main Navigation" a navigačním popiskem "Menu".
```

**Výsledek:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Příklad 2: Menu pro specifickou lokalitu tématu {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Vytvořte menu pro zápatí s názvem "Footer Links", navigačním popiskem "Quick Links" a přiřaďte ho do zápatí.
```

**Výsledek:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrace s Theme Builderem {#integration-with-theme-builder}

Při použití Theme Builderu funkce Vytváření menu:

1. Automaticky detekuje dostupné lokace menu tématu
2. Vytváří menu s vhodnými navigačními popiskami pro váš design
3. Přiřazuje menu do správných lokalit tématu
4. Podporuje přidávání položek menu po vytvoření

## Související funkce {#related-abilities}

- **`add_menu_item`** — Přidání položek do existujícího menu
- **`update_menu`** — Změna názvu menu nebo jeho opětovné přiřazení do lokace tématu
- **`delete_menu`** — Odstranění menu z vašeho webu

## Nejlepší praxe {#best-practices}

- **Používejte jasné navigační popisy** — udržujte popisy stručné a popisné pro uživatele
- **Shodujte lokace tématu** — přiřaďte menu do správné lokality tématu pro řádné zobrazení
- **Plánujte strukturu menu** — rozhodněte se o hierarchii menu před přidáním položek
- **Testujte responzivitu** — ověřte, že menu správně funguje na mobilních zařízeních
- **Lokalizujte popisy** — používejte různé navigační popisy pro různé jazykové verze

## Omezení {#limitations}

- Navigační popisy jsou pouze pro zobrazení; interní `name` je stále používán k identifikaci v WordPressu
- Podpora témat se liší; neměsta témata nepodporují všechny lokace menu
- Položky menu musí být přidány zvlášť po vytvoření menu
- Změna navigačního popisu vyžaduje aktualizaci menu

## Související funkce {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — vytvářet loga pro hlavičku vašeho webu
- [Validate Palette Contrast](./validate-palette-contrast.md) — zajištění přístupných barevných schémat
