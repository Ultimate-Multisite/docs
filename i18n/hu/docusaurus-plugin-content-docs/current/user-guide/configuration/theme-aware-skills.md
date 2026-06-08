---
title: Témaérzékeny készségek
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Témához Igazított Készségek

A Superdav AI Agent v1.10.0 négy új, témához igazított, alapvető készséget tartalmaz, amelyek automatikusan alkalmazkodnak az aktív WordPress témájához. Ezek a készségek specializált útmutatást és képességeket biztosítanak, amelyek a témájának architektúrájára és funkcióira szabva.

## Mi a Témához Igazított Készségek?

A témához igazított készségek előrekonfigurált tudásbázisok és eszközcsomagok, amelyeket az AI asszisztens automatikusan választ ki a pilótáján jelenleg aktív WordPress témájának alapul. Amikor témát vált, az asszisztens elérhető készségei automatikusan frissülnek – nincs manuális konfiguráció szükséges.

Minden készség tartalmazza:

- **Téma-specifikus dokumentációt** — útmutatást a téma használatához és testreszabásához
- **Blokk- és mintakézeket** — elérhető blokkok, minták és design opciók
- **Testreszabási példákat** — kódkivágásokat és konfigurációs mintákat gyakori feladatokra
- **Jó gyakorlatokat** — ajánlásokat a témájának architektúrájához és munkafolyamatához

## Elérhető Témához Igazított Készségek

### Block Themes (Blokk-témák)

**Alkalmazható:** Azok a témák, amelyek a WordPress blokk alapú (Full Site Editing) architektúrát használják.

A Block Themes készsége útmutatást nyújt a következőkre:

- A blokk szerkesztővel történő sablonok létrehozásáról és szerkesztéséről
- A blokkmintákkal és újrahasznosítható blokkokkal való munkáról
- A globális stílusok és a theme.json beállításainak testreszabásáról
- A téma blokkok és változatai használatáról
- A saját blokkminták létrehozásáról az oldaladra

**Automatikus aktiválás:** Amikor az aktív témád egy blokk témátípus (alapvető funkcióként támogatja a `block-templates` funkciót).

### Classic Themes (Klassikus témák)

**Alkalmazható:** A hagyományos WordPress témák, amelyek PHP sablonokat és a klasszikus szerkesztőt használnak.

A Classic Themes készsége útmutatást nyújt a következőkre:

- A PHP sablon fájlokakkal és hookokkal való munkáról
- A téma megjelenésének testreszabásáról a Customizer segítségével
- A widget területek és sávszínek használatáról
- A CSS módosításáról és a child theme fejlesztéséről
- A téma hierarchiájának és sablon címkéinek megértéséről

**Automatikus aktiválás:** Amikor az aktív témád egy klasszikus (nem blokk) témátípus.

### Kadence Blocks

**Alkalmazható:** Azok az oldalak, amelyek a Kadence Blocks plugin-ot használnak fejlett blokk alapú designhoz.

A Kadence Blocks készsége útmutatást nyújt a következőkre:

- A Kadence fejlett blokktár használatáról (Hero, Testimonials, Pricing, stb.)
- A Kadence blokk beállításainak és responsív opcióinak konfigurálásáról
- A saját układak létrehozásáról a Kadence grid és container blokkokkal
- A Kadence blokkok integrálásáról a témádhoz
- A Kadence design rendszerének és előállításainak kihasználásáról

**Automatikus aktiválás:** Amikor a Kadence Blocks plugin aktív az oldaladon.

### Kadence Theme

**Alkalmazható:** Azok az oldalak, amelyek a Kadence témát használnak blokk alapú designhoz és testreszabáshoz.

A Kadence Theme készsége útmutatást nyújt a következőkre:

- A Kadence témát globális stílusok és theme.json segítségével történő testreszabásáról
- A Kadence beépített blokkmintáinak és sablóinak használatáról
- A Kadence téma beállításainak és opcióinak konfigurálásáról
- A saját designok létrehozásáról a Kadence design rendszerével
- A Kadence integrálásáról népszerű pluginekkel és eszközökkel

**Automatikus aktiválás:** Amikor a Kadence téma az aktív témád.

## Hogyan Válത്തോznak ki a Készségek

Az asszisztens automatikusan érzékeli az aktív témád és a telepített pluginekedet minden üzenetben. Ha egy megfelelő témához igazított készség elérhető, automatikusan töltődik be az asszisztens kontextusába. Nincs szükség manuális aktiválásra vagy váltásra.

### Több Készség

Ha több készség is alkalmazható az oldaladon (például ha egyszerre aktív a Kadence Blocks és a Kadence Theme), az asszisztens hozzáfér minden érvényes készséghoz, és referencia anyagot kap minden egyes készségből.

### Témaváltás

Amikor megváltoztatod az aktív témád, az asszisztens elérhető készségei automatikusan frissülnek az következő üzenetedben. Például:

1. Egy blokk témátípusot használsz, és aktív a **Block Themes** készsége.
2. Klasszikus témára váltasz.
3. Az következő üzenetedben a **Classic Themes** készség automatikusan töltődik be, és a **Block Themes** készség már nem elérhető.

## A Témához Igazított Készségek Használata

Ahhoz, hogy kihasználható legyen egy témához igazított készség, egyszerűen leírnod kell a chat felületén, mit szeretnél elérni. Az asszisztens automatikusan hivatkozik a megfelelő készség útmutatására.

### Példa Promptek

**Block Themes esetén:**
> "Létrehoz egy hero szekciót háttérképpel és középre igazított szöveggel blokkmintákkal."

**Classic Themes esetén:**
> "Egy saját widget területet kézülhetséghez adok a sávszínre egy child theme segítségével."

**Kadence Blocks esetén:**
> "Létrehozok egy testimoniális szekciót a Kadence Testimonials blokk segítségével."

**Kadence Theme esetén:**
> "Testreszabom a háttér (header) układát és a navigációs menü stílusát."

Az asszisztens biztosít témához specifikus útmutatást és kódpéldákat, amelyek szabva a jelenlegi aktív témádra és pluginekedre.

:::note
A témához igazított készségek automatikusan elérhetőek a Superdav AI Agent v1.10.0 és utó verzióktól. Nem szükséges további beállítás vagy konfiguráció.
:::
