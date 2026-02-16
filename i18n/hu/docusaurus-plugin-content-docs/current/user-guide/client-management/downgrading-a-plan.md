---
title: Csomag visszaminősítése
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Előfizetési csomag visszaminősítése (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az előfizetési csomag visszaminősítése gyakori művelet, amelyet ügyfeleid végezhetnek, ha korlátozott a költségkeretük, vagy úgy döntöttek, hogy nincs szükségük sok erőforrásra az aloldaluk működtetéséhez.

## Hogyan lehet visszaminősíteni egy csomagot

Ügyfeleid bármikor visszaminősíthetik csomagjukat: be kell jelentkezniük az aloldaluk admin vezérlőpultjára, majd a fiókjuk oldalán a **Change** gombra kell kattintaniuk.

![Fiókoldal a Change gombbal a tagság alatt](/img/admin/memberships-list.png)

A **Change** gombra kattintva a felhasználó/ügyfél átirányításra kerül a pénztár oldalra, ahol kiválaszthatja, melyik csomagra szeretné módosítani az előfizetését.

![Pénztár oldal a visszaminősítéshez elérhető csomagokkal](/img/admin/memberships-list.png)

Ebben a példában a **Premium** csomagról a **Free** csomagra minősítünk vissza.

A folytatáshoz a felhasználónak csak a **Complete Checkout** gombra kell kattintania. Ezután visszakerül a fiók oldalra, ahol egy üzenet jelenik meg a tagság függőben lévő változásáról. A módosítások az ügyfél **következő számlázási ciklusában** lépnek életbe.

![Fiókoldal a függőben lévő tagságváltozás üzenetével](/img/admin/memberships-list.png)

### Mi történik, amikor egy felhasználó visszaminősíti a csomagját

Fontos megjegyezni, hogy a csomag visszaminősítése nem módosítja a felhasználó aloldalának meglévő beállításait.

Nem változtatja meg automatikusan az oldal sablonját, mivel a sablon megváltoztatása teljesen törölné és visszaállítaná az aloldalt. Ezzel elkerüljük a felesleges adatvesztést. Így a tárterület, témák, bővítmények stb. érintetlenek maradnak, kivéve a bejegyzéseket.

Tisztában vagyunk azzal, hogy a fő aggodalmad az egyes csomagokhoz beállított korlátok és kvóták lehetnek, de figyelembe kell vennünk, milyen károkat okozna a felhasználó aloldalának, ha törölnénk vagy megváltoztatnánk bármely beállítását.

A csomag korlátját meghaladó bejegyzések esetén 3 különböző lehetőséged van: **Keep the posts as it** *,* **Move the posts to trash** *,* vagy **Move the posts to draft** *.* Ezt az Ultimate Multisite beállításaiban konfigurálhatod.

![Bejegyzéskorlát túllépése opciók az Ultimate Multisite beállításokban](/img/config/settings-sites.png)

### Mi történik a fizetéssel

A 2.0-s verzióban már nincs szükség arányosítási kiigazításokra a fizetésnél.

Ennek az az oka, hogy a rendszer megvárja, amíg a meglévő tagság **befejezi a számlázási ciklusát**, mielőtt az új csomag/tagság életbe lépne. Az új tagság új számlázási összege automatikusan alkalmazásra kerül és levonásra kerül a következő számlázási ciklusban.
