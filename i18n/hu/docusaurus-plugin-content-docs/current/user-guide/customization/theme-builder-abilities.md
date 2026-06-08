---
title: Témaépítő Képességek
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Képességek: Block Témák Elépítése és Aktiválása

A Superdav AI Agent v1.12.0 két erőteljes képességet mutat be, amelyek lehetővé teszik számukra, hogy a chat felületéről közvetlenül generáljanak és telepítsenek egyedi block témákat.

## Áttekintő

A **scaffold-block-theme** és **activate-theme** képességek lehetővé teszik az agentek számára, hogy:
- Generáljanak teljes, produkciós készenlétű block témákat a specifikációi alapján
- Automatikusan aktiválják a témákat az oldalán anélkül, hogy manuális beavatkozásra lenne szükség
- Egdezett vizuális identitásokat hozzanak létre irányított design döntésekkel

## Block Téma Elépítése (Scaffolding)

A **scaffold-block-theme** képesség egy új WordPress block témát generál egy teljes téma szerkezetével, beleértve:

- `theme.json` konfigurációt design tokenekkel
- Block sablon fájlokat gyakori elrendezésekhez
- Egyedi block stílusokat és variációkat
- Téma metadátájának és támogatási deklarációinak

### Hogyan hívják elő

A Superdav AI Agent-tel folytatott chatben kérést tehetnek a téma generálásával kapcsolatban:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Az agent:
1. Gyűjti össze a design preferenciáit a beszélgetés során
2. Generálja a teljes téma szerkezetét
3. Létrehoz minden szükséges téma fájlát
4. Előkészíti a témát az aktiválásra

### Elvárható kimenet

Amikor a képesség sikeresen végrehajtódik, láthatja:

- Megerősítést arról, hogy a téma elépült
- A téma neve és elhelyezkedése
- Összefoglaló a használt design tokenekről (színek, tipográfia, távolság)
- Aktiválásra kész státuszt

Példa kimenet:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Téma Aktiválása

A **activate-theme** képesség átállítja az oldalát egy újonnan elépített vagy létező block témára.

### Hogyan hívják elő

Miután elépített egy témát, azonnal aktiválhatja:

```
"Activate the Modern Agency theme"
```

Vagy bármilyen létező témát aktiválhat:

```
"Switch to the Twentytwentyfour theme"
```

### Elvárható kimenet

Amikor az aktiválás sikeres:

- Megerősítés az aktív témáról
- Az előző téma neve (referenciához)
- Az oldal URL-je, ahol a téma most érvényben van
- Bármilyen témához kapcsolódó beállítási megjegyzés

Példa kimenet:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Munkafolyamat: Elépítés és Aktiválás

Egy tipikus munkafolyamat kombinálja az entrambe képességet:

1. **Téma generálásának kérése**: "Create a block theme for my SaaS landing page"
2. **Az agent elépíti a témát**: Generálja a fájlokat és a design tokeneket
3. **Áttekintés és finomítás**: Beszélgethetnek design változtatásokról, ha szükséges
4. **Aktiválás**: "Activate the theme now"
5. **Ellenőrzés**: Látogatja az oldalát, hogy megerősítse, hogy a νέα design érvényben van

## Design Tokenek és Személyre szabás

Az elépített témák WordPress design tokeneket használnak (a `theme.json` fájlunkon keresztül) a következőekhez:

- **Színek**: Primary, secondary, accent, neutral paletta
- **Tipográfia**: Betűtípusok, méretek, súlyok, sor 간 távolságok
- **Távolság**: Padding, margin, gap méretek
- **Kerékek**: Radius és szélesség tokenek
- **Árnyékok**: Elevációs szintek

Ezek a tokenek centralizáltak a `theme.json` fájlban, így könnyű az egész design rendszerét egyetlen fájlból állítani.

## Korlátozások és Megjegyzések

- A témák a `/wp-content/themes/` könyvtárban kerülnek elépítésre, és követniük kell a WordPress elnevezési konvencióit.
- Az aktiváláshez megfelelő engedélyek szükségesek az Ön WordPress oldalán.
- A témákban lévő egyedi PHP kód minimális; komplex funkciókhoz használjon plugineket.
- A block témák a WordPress 5.9 és későbbi verziókkal működnek a legjobban.

## Hibaelhárítás

**A téma nem jelenik meg az elépítés után**
- Ellenőrizze, hogy a téma könyvtára létezik-e és megfelelő engedélyekkel van-e.
- Győződjön meg róla, hogy a `theme.json` érvényes JSON.
- Biztosítsa, hogy a téma neve nem ütközik meglévő témákkal.

**Aktiválás sikertelen**
- Megerősítse, hogy adminisztrátor engedélyekkel rendelkezik.
- Ellenőrizze, hogy a téma könyvtára olvasható-e a WordPress számára.
- Nézze át a WordPress hiba naplóit a részletek után.

**A design tokenek nem alkalmazhatók**
- Ellenőrizze, hogy a `theme.json` szintaktikája helyes-e.
- Törölje az összes caching pluginet.
- Ellenőrizze, hogy a WordPress verziója támogatja-e az általad használt tokeneket.

## Következő lépések

Miután aktiválta a témáját, teheti:
- Használja a **Design System Aesthetics skill-et** a tipográfia, színek és távolság finomításához
- Személyre szabja az egyedi block stílusokat a WordPress block editor segítségével
- Adjon hozzá egyedi CSS-t a téma `style.css` fájlához
- Létrehoz egyedi block sablonokat specifikus oldaltípusokhoz
