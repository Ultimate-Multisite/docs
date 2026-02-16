---
title: Webhelyek kezelése
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Weboldalak kezelése

A weboldalak (vagy aloldalak) a WaaS vállalkozásod alapját képezik. Az Ultimate Multisite 3 típusú weboldalt különböztet meg:

- **Ügyfél tulajdonában lévő** — Adott ügyfelekhez tartozó weboldalak
- **Weboldal sablonok** — Előre elkészített weboldalak, amelyeket az ügyfelek kiindulási pontként választhatnak
- **Fő weboldal** — A hálózatod elsődleges weboldala

## Weboldalak megtekintése

Navigálj az **Ultimate Multisite → Sites** menüpontra a hálózatodban lévő összes aloldal megtekintéséhez. Minden weboldal típus szerint van megjelölve, és szűrhetsz az Összes weboldal, Ügyfél tulajdonában lévő, Sablonok vagy Függőben lévő kategóriák szerint.

![Weboldalak listája](/img/admin/sites-list.png)

## Új weboldal hozzáadása

Kattints az **Add Site** gombra új weboldal létrehozásához. A következő adatokat kell megadnod:

- **Site Title** — Az új weboldal neve
- **Site URL** — A weboldal domain-je/elérési útja
- **Site Type** — Ügyfél weboldal, sablon vagy normál weboldal

A **Copy Site** opció lehetővé teszi, hogy egy meglévő weboldal sablon alapján hozz létre új weboldalt. Ha engedélyezed, kiválaszthatod, melyik sablont szeretnéd kiindulási pontként használni. Győződj meg róla, hogy a **Copy Media on Duplication** opció be van kapcsolva, ha a médiafájlokat is szeretnéd átmásolni.

## Meglévő weboldal kezelése

Kattints bármelyik weboldal **Manage** gombjára az **Edit Site** oldal megnyitásához. Itt a következőket találod:

### Alapvető információk

A weboldal neve, típusa, azonosítója és leírása. Itt láthatod a hozzárendelt domain-t, a kapcsolódó tagságot és a weboldalt birtokló ügyfélfiókot is.

### Weboldal beállítások

A weboldal képességeinek és korlátainak beállítása:

- **Látogatási korlátok** — A weboldal látogatásainak maximális száma
- **Felhasználói fiókok korlátai** — Felhasználói szerepkörönkénti korlátok
- **Tárterület** — A weboldal tárolási kvótája
- **Egyéni domain** — Domain mapping engedélyezése ehhez a weboldalhoz
- **Plugin és sablon láthatóság** — Annak szabályozása, hogy mely pluginok és sablonok legyenek láthatók, rejtettek vagy előre aktiváltak

Alapértelmezetten a weboldalak a tagság szintjén beállított korlátokat követik. A weboldal szintjén megadott korlátok felülírják a tagsági beállításokat.

### Kapcsolatok

A weboldal beállításai alatt információkat találsz a következőkről:

- A weboldalhoz tartozó **hozzárendelt domain-ek**
- A **tagság**, amelyhez a weboldal tartozik
- A weboldalhoz kapcsolt **ügyfélfiók**

### Jobb oldali sáv

A jobb oldalon a következőket teheted:

- **A weboldal engedélyezése/letiltása** egy kapcsoló gombbal
- **A weboldal típusának módosítása** vagy a tulajdonjog átruházása
- **Weboldal kép/bélyegkép beállítása** (a frontend-en jelenik meg a weboldal sablonoknál)
- A weboldal **végleges törlése**

:::warning
A weboldal törlése visszafordíthatatlan. A weboldal és annak teljes tartalma véglegesen törlődik.
:::
