---
title: Csomag visszaminősítése
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Csomag visszaminősítése (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Egy csomag vagy előfizetés visszaminősítése gyakori művelet, amelyet az ügyfeleid elvégezhetnek, ha korlátozott a költségvetésük, vagy úgy döntöttek, hogy nem lesz szükségük sok erőforrásra az alwebhelyük futtatásához.

## Hogyan lehet visszaminősíteni egy csomagot

Az ügyfeleid bármikor visszaminősíthetik a csomagjukat úgy, hogy bejelentkeznek az alwebhelyük admin dashboardjába, és az Account oldalukon a **Change** gombra kattintanak.

![Ügyfél Account oldala Your Membership kártyával és Change gombbal](/img/account-page/membership-change-button.png)

A **Change** gombra kattintás után a felhasználó/ügyfél át lesz irányítva a checkout oldalra, ahol kiválaszthatja azt a csomagot, amelyre módosítani szeretné az előfizetését.

![Csomag-visszaminősítési opciók oldala az ügyféloldalon](/img/account-page/downgrade-picker.png)

Ebben a példában a csomagot **Premium** csomagról **Free** csomagra minősítjük vissza.

A folytatáshoz a felhasználónak csak a **Complete Checkout** gombra kell kattintania. Ezután visszakerül az Account oldalra, ahol egy üzenet jelenik meg a tagság függőben lévő módosításáról. A változások az ügyfél **következő számlázási ciklusában** lépnek hatályba.

![Account oldal függőben lévő tagságmódosítási bannerrel](/img/account-page/pending-change.png)

### Mi történik, amikor egy felhasználó visszaminősíti a csomagját

Fontos megjegyezni, hogy a csomag visszaminősítése nem módosítja a felhasználó alwebhelyének meglévő konfigurációját.

Nem módosítja automatikusan a webhelysablont, mivel a webhelysablon módosítása teljesen törölné és visszaállítaná az alwebhelyet. Ez a szükségtelen adatvesztés elkerülésére szolgál. Így a tárhely, a theme-ek, a pluginok stb. érintetlenek maradnak, a bejegyzések kivételével.

Megértjük, hogy a fő aggodalmad a korlátok és kvóták lennének, amelyeket az egyes csomagoknál állítottál be, de figyelembe kell vennünk, mekkora kárt okozna a felhasználó alwebhelyében, ha törölnénk vagy módosítanánk bármelyik konfigurációját.

A csomagban beállított korlátot meghaladó bejegyzések esetén 3 különböző lehetőséged van: **A bejegyzések megtartása változatlanul** *,* **A bejegyzések áthelyezése a kukába** *,* vagy **A bejegyzések áthelyezése vázlatba** *.* Ezt az Ultimate Multisite beállításaiban konfigurálhatod.

![Network Admin Settings Sites oldal a post-limit-exceeded viselkedési opciókkal](/img/account-page/settings-sites-post-limit.png)

### Mi történik a fizetéssel

A 2.0-s verzióban már nincs szükség semmilyen fizetési korrekcióra az időarányos elszámolás tekintetében.

Ennek az az oka, hogy a rendszer megvárja, amíg a meglévő tagság **befejezi a számlázási ciklusát, mielőtt** az új csomag/tagság hatályba lépne. Az új tagság új számlázási összege automatikusan alkalmazásra kerül, és a következő számlázási ciklusban kerül terhelésre.
