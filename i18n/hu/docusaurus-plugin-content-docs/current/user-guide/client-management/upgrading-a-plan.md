---
title: Csomag frissítése
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Csomagváltás (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az ügyfeleid bármikor magasabb csomagra válthatnak. Választhatnak másik csomagot, vagy megvásárolhatják a hálózatodon elérhető kiegészítő szolgáltatásokat és csomagokat.

Ebben az útmutatóban bemutatjuk, hogyan válthatnak magasabb csomagra, és mi történik a váltás után.

A csomagváltáshoz az ügyfeleidnek be kell lépniük a vezérlőpultjukba, és a **Fiók** oldalra kell navigálniuk.

![Ügyfél vezérlőpult a Fiók oldal hivatkozásával](/img/admin/memberships-list.png)

A Fiók oldalon láthatják az aktuális tagságukat és a hozzá tartozó csomagot. Másik csomagra váltáshoz a **Tagságod** szakasz jobb felső sarkában található **Módosítás** gombra kell kattintaniuk.

![Tagságod szakasz a Módosítás gombbal](/img/admin/memberships-list.png)

Ezután egy fizetési űrlapra kerülnek, ahol az összes elérhető csomag megjelenik.

Itt láthatják az **aktuális csomagjukhoz elérhető szolgáltatásokat és kiegészítőket** is, ha csak egy adott szolgáltatást vagy kiegészítőt szeretnének megvásárolni (például korlátlan látogatószámot vagy tárhelyet, mint a példánkban), és nem akarnak csomagot váltani.

![Fizetési űrlap az elérhető csomagokkal és kiegészítőkkel](/img/admin/memberships-list.png)

Miután kiválasztották a megvásárolni kívánt terméket, láthatják, mennyit kell most fizetniük – a meglévő egyenleg levonása nélkül –, és mennyit fogunk levonni a következő számlázási napon.

Általában, ha a termék egy másik csomag, és a fizetés két tagságidíj-levonás között történik, jóváírást kapnak az első csomag után befizetett összegből.

![Csomagváltás fizetési összesítő jóváírással és következő számlázási összeggel](/img/admin/memberships-list.png)

Ha olyan csomagot vagy kiegészítőt választanak, ami nem változtat semmin az aktuális előfizetésükön, erről üzenetet kapnak.

![Üzenet, ha a kiválasztott csomag nem módosítja az előfizetést](/img/admin/memberships-list.png)

A fizetés befejezése után az új termék(ek) hozzáadódnak az ügyfeleid fiókjához, és az új termék(ek) összes korlátja és funkciója azonnal érvénybe lép: látogatószám, tárhely, bejegyzések stb.

## 

## 

## Csomagemelési és -csökkentési útvonalak

Minden termékednél található egy **Csomagemelés és -csökkentés** fül. Ennek a fülnek az első opciója a **Csomagcsoport** mező.

A **csomagcsoportok** teszik lehetővé, hogy az Ultimate Multisite tudja, mely csomagok tartoznak ugyanabba a „családba", és így ezeket kell használni a csomagemelési/csökkentési lehetőségek összeállításához.

![Csomagemelés és -csökkentés fül a Csomagcsoport mezővel](/img/config/product-upgrades.png)

Például van egy **Ingyenes csomag**, egy **Alap csomag** és egy **Prémium csomag**. Azt szeretnéd, hogy az **Ingyenes csomag** előfizetői csak a **Prémium csomagra** tudjanak váltani, és ne lássák az „Alap csomagot" váltási lehetőségként. Mindössze annyit kell tenned, hogy ugyanazt a csomagcsoport-nevet adod meg az Ingyenes és a Prémium csomaghoz, ahogy az alábbi képernyőképeken látható.

![Ingyenes csomag a Kiemelt csomagcsoporthoz rendelve](/img/config/product-upgrades.png)

![Prémium csomag a Kiemelt csomagcsoporthoz rendelve](/img/config/product-upgrades.png)

Ezzel azt közlöd az Ultimate Multisite-tal, hogy létezik egy **Kiemelt** nevű csomagcsalád a hálózaton. Csomagemelés vagy -csökkentés felajánlásakor csak az ugyanabba a családba tartozó csomagok jelennek meg opcióként a felhasználó számára.
