---
title: Menü létrehozása
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menü létrehozása {#create-menu}

Az **Menü létrehozása** funkciója lehetővé teszi a WordPress navigációs menüjének létrehozását, és támogatja az oldal címeitől független navigációs címkék használatát.

## Áttekintő {#overview}

Ez a funkció kiterjeszti a standard menü létrehozási lehetőséget egy `navigation_label` paraméter hozzáadásával. Ez lehetővé teszi, hogy olyan menüeket hozz létre, ahol a navigációban megjelenő címke eltér az oldal címe(től), ezzel növelve a weboldal struktúrájának és a felhasználói élménynek rugalmasságát.

## Paraméterek {#parameters}

| Paraméter | Típus | Kötelező | Leírás |
|-----------|------|----------|-------------|
| `name` | string | Igen | Menü neve, pl. `Fő navigáció` |
| `location` | string | Nem | A témában meghatározott hely, ahová ezt a menüt kell hozzárendelni, pl. `primary` |
| `navigation_label` | string | Nem | A navigációban megjelenő címke (különálló az oldal címtől) |

## Visszaadott érték {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigációs címke vs. Oldal címe {#navigation-label-vs-page-title}

A `navigation_label` paraméter lehetővé teszi, hogy elválasztja a belső menü nevét az end felhasználóknak megjelenő címektől:

- **`name`** — Belső menü azonosító, amelyet a WordPress használ (pl. "Primary Navigation")
- **`navigation_label`** — A címke, amelyet a weboldal látogatói látnak a navigációban (pl. "Main Menu")

Ez hasznos, ha:
- A belső elnevezési konvenciója nem egyezik a felhasználóknak látható címekkel
- Rövidebb címkéket szeretne a navigációban, mint az adminisztrációs felületen
- Több nyelvet kell támogatnia, és ezeknek eltérő hosszanatú címkéket kell használni
- Menüeket kell létrehozni specifikus régiókra vagy felhasználói csoportokra

## Használati példák {#usage-examples}

### Példa 1: Egyszerű menü navigációs címkével {#example-1-simple-menu-with-navigation-label}

**Kérdés:**
```
Létrehoz egy fő navigációs menüt, melynek neve "Main Navigation", és a navigációs címkéje "Menu".
```

**Eredmény:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Példa 2: Menü specifikus témakörnyezeti helyhez {#example-2-menu-for-specific-theme-location}

**Kérdés:**
```
Létrehoz egy láblépő menüt, melynek neve "Footer Links", navigációs címkéje "Quick Links", és hozzárendeli a láblépő helyhez.
```

**Eredmény:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integráció a Témakészítővel (Theme Builder) {#integration-with-theme-builder}

Ha a Theme Builder-t használja, a Create Menu funkció:

1. Automatizusan felismeri az elérhető témamenü helyeket
2. Létrehoz menüeket megfelelő navigációs címkével a tervezéséhez
3. Meghatározza a menüeket a megfelelő témamenü helyekre
4. Támogatja a menüelemek hozzáadását a létrehozás után

## Kapcsolódó funkciók {#related-abilities}

- **`add_menu_item`** — Elemek hozzáadása egy meglévő menühez
- **`update_menu`** — Menü nevi átnevezése vagy átrendelése egy témamenü helyre
- **`delete_menu`** — Menü eltávolítása az oldalról

## Jó gyakorlatok {#best-practices}

- **Használjon világos navigációs címkéket** — tartsa a címkéket tömören és leíróként felhasználóknak
- **Egyezessen a témamenü helyekkel** — rendelje el a menüeket a megfelelő témamenü helyre a megfelelő megjelenítés érdekében
- **Tervezze előre a menüstruktúrát** — döntse el a menü hierarchiájáról, mielőtt elemeket hoz létre
- **Tesztelje a responzivitást** — ellenőrizze, hogy a menüek megfelelően jelennek meg mobil eszközökön
- **Lokálisítsa a címkéket** — használjon más navigációs címkéket különböző nyelvi verziókhoz

## Korlátozások {#limitations}

- A navigációs címkék csak megjelenítő jellegűek; a belső `name` továbbra is használatos a WordPress azonosításához
- A témakövetés változó; nem minden téma támogatja minden menü helyet
- A menüelemeket külön kell hozzáadni a menü létrehozása után
- Egy navigációs címke megváltoztatása megköveteli a menü frissítését

## Kapcsolódó funkciók {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — létrehoz logookat az oldal fejlécehez
- [Validate Palette Contrast](./validate-palette-contrast.md) — biztosítja az elérhető színpalettákat
