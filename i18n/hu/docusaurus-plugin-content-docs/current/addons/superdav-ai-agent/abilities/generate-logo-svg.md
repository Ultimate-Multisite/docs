---
title: Logo SVG generálása
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG Generálása {#generate-logo-svg}

Az **Logo SVG Generálása** képessége lehetővé teszi a Theme Builder számára, hogy olyan festőleges, testreszabható logo SVG-eket hozz létre és emelje be közvetlenül az Ön WordPress oldalára, automatikus, névterület-biztonságos tisztítással.

## Áttekintő {#overview}

Ez a képesség a weboldalának márkaelrendjére és design preferenciáinak alapuló, skálázható vektoros grafikus (SVG) logoakat generál. A létrehozott SVG-k automatikusan tisztításra kerülnek, hogy biztosítsák, hogy biztonságosan használhatóak legyenek WordPressben, miközben megőrzik a vizuális integritást.

## Paraméterek {#parameters}

| Paraméter | Típus | Kötelező | Leírás |
|-----------|------|----------|-------------|
| `site_name` | string | Igen | Az oldal neve, amelyhez a logo generálása történik |
| `style` | string | Igen | A design stílus (pl. "modern", "klasszikus", "minimalista", "szórakoztató") |
| `colors` | array | Nem | Hex színkódok tömbje, amelyet a logohoz használunk (pl. `["#678233", "#ffffff"]`) |
| `width` | number | Nem | Az SVG szélessége pixelben (alapérték: 200) |
| `height` | number | Nem | Az SVG magassága pixelben (alapérték: 200) |
| `include_text` | boolean | Nem | Megjelölés, hogy a site nevét szövekként fog-e tartalmazni a logo (alapérték: true) |

## Kimenedési Formátum {#output-format}

A képesség egy SVG szöveget ad vissza, amely a következő struktúrát követi:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Tisztítási Viselkedés {#svg-sanitisation-behaviour}

A generált SVG-k automatikus, névterület-biztonságos tisztítályn (sanitisation) mennek keresztül, hogy:

- **Eltávolítják a veszélyes attribútumokat** — eltávolítják az eseménykezelőket, szkripteket és potenciálisan veszélyes attribútumokat
- **Megőrzik a névterületeket** — fenntartják az SVG névterületeit (xmlns, xlink) a megfelelő megjelenítés érdekében
- **Ellenőrzik a struktúrát** — biztosítják, hogy az SVG megfeleljen a W3C standardoknak
- **Kódolják az entitásokat** — megfelelően menekítik el a speciális karaktereket a szövegszövegben
- **Eltávolítják a külső hivatkozásokat** — eltávolítják a külső stíluslapokat és képforrásokat

Ez biztosítja, hogy az SVG biztonságosan beágyazható legyen közvetlenül WordPressbe, további tisztítás nélkül.

## Használati Példa {#usage-example}

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Eredmény:**
A képesség olyan SVG logo-t hoz létre, amely:
- Tartalmazza az "CloudSync" site nevét
- Használja a megadott kék és fehér színpalettet
- Követi a modern design elveit
- Automatikusan tisztítva és használatra kész

## Integráció a Theme Builder-rel {#integration-with-theme-builder}

Amikor a Theme Builder design-irányultság kiválasztásával használjuk, a Generate Logo SVG képesség:

1. Elemzőalja a design-irányultságát és a színpalettáját
2. Generál egy festőleges SVG logo-t, amely megfelel a preferenciáinak
3. Automatikusan beágyazja a logót az oldal nagyházi/márka területére
4. Az SVG-t egy festőleges logoként tárolja a WordPress médiakönyvtárában

## Jó Gyakorlatok {#best-practices}

- **Adjon meg egyértelmű stíluspreferenciákat** — írja le, milyen design stílust szeretne (modern, klasszikus, szórakoztató stb.)
- **Adja meg színeket** — tartalmazza a márka színeit a konzisztencia érdekében
- **Tesztelje a megjelenítést** — ellenőrizze, hogy a logo megfelelően jelenik meg különböző képernyőméretekre
- **Testreszabja tovább** — használja a WordPress logo testreszabási eszközeit a méret és elhelyezés finomhangolásához

## Korlátozások {#limitations}

- Az SVG logoakat statikus grafikákként kerülnek generálásra (nem animáltak)
- A sok elemmel rendelkező komplex logohoz kézi finomhangolásra lehet szükség
- Nem támogatjuk a testreszabott betűfontokat; a szöveg rendszerfontokat használ
- Nagyon nagy vagy nagyon kicsi méretek befolyásolhatják az minőséget

## Kapcsolódó Képességek {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — ellenőrizni a színkontrasztot az hozzáférhetőség szempontjából
- [Create Menu](./create-menu.md) — létrehoz navigációs menüeket az oldalára
