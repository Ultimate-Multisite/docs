---
title: Csomag frissítése
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Csomag frissítése (v2) {#upgrading-a-plan-v2}

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az ügyfeleid bármikor frissíthetik a csomagjaikat. Vagy átválthatnak egy másik csomagra, vagy megvásárolhatnak bármilyen további szolgáltatást vagy csomagot, amelyet a hálózatodon kínálsz.

Ebben az útmutatóban bemutatjuk, hogyan frissíthetik a csomagjukat, és mi történik a frissítési folyamat után.

A csomagjuk frissítéséhez az ügyfeleidnek meg kell nyitniuk a Dashboard felületüket, majd az **Account** oldalra kell lépniük.

![Ügyfél aloldalának Dashboard felülete látható Account menühivatkozással](/img/account-page/account-menu.png)

Az Account oldalon látni fogják a jelenlegi tagságukat és a hozzá társított csomagot. Másik csomagra való frissítéshez a **Your Membership** szakasz jobb felső sarkában a **Change** gombra kell kattintaniuk.

![Account oldal Your Membership kártyája Change gombbal](/img/account-page/membership-change-button.png)

Át lesznek irányítva egy pénztár űrlapra, ahol az összes elérhető csomag megjelenik.

Látni fogják a **jelenlegi csomagjukhoz elérhető szolgáltatásokat és csomagokat** is, arra az esetre, ha csak egy adott szolgáltatást vagy csomagot szeretnének megvásárolni (például korlátlan látogatásokat vagy tárhelyet a példánkban), és nem szeretnék frissíteni a csomagot.

![Frissítési választó, amely az elérhető csomagokat és kiegészítő csomagokat mutatja az ügyféloldalon](/img/account-page/upgrade-picker.png)

Miután kiválasztják a megvásárolni kívánt terméket, látni fogják, mennyit kell most fizetniük - a meglévő jóváírások nélkül -, és mennyit fognak felszámítani a következő számlázási dátumon.

Általában, ha a termék egy másik csomag, és a fizetés két tagsági terhelés között történik, jóváírást kapnak az első csomagra kifizetett összegért.

![Frissítési fizetési összegzés alkalmazott jóváírással és következő számlázási összeggel](/img/account-page/upgrade-summary.png)

Ha olyan csomagot vagy kiegészítő csomagot választanak, amely semmit sem változtat a jelenlegi előfizetésen, egy ezt elmagyarázó üzenetet fognak látni.

![Értesítés, amikor a kiválasztott csomag nem változtatja meg az előfizetést](/img/account-page/upgrade-no-change.png)

Miután a pénztárfolyamat befejeződött, az új termék(ek) hozzáadódnak az ügyfeleid fiókjához, és az új termék(ek) minden korlátja vagy funkciója azonnal hozzáadódik: látogatások, tárhely, bejegyzések stb...

##

##

## Frissítési és visszaváltási útvonalak {#upgrade-and-downgrade-paths}

Minden termékeden lesz egy **Up & Downgrades** lap. Ezen a lapon az első opció egy **Plan Group** nevű mező.

A **csomagcsoportok** teszik lehetővé, hogy tudasd az Ultimate Multisite-tal, hogy bizonyos csomagok ugyanahhoz a „családhoz” tartoznak, ezért ezeket kell használni a frissítési/visszaváltási útvonalak lehetőségeinek felépítéséhez.

![Termék szerkesztése Up and Downgrades lappal és Plan Group mezővel](/img/config/product-upgrades-plan-group.png)

Például elérhető egy **Free plan**, egy **Basic Plan** és egy **Premium Plan**. Azt szeretnéd, hogy a **Free Plan** alatt előfizetett felhasználók csak a **Premium Plan** csomagra tudjanak frissíteni, és ne lássák a „Basic Plan” csomagot frissítési lehetőségként. Mindössze annyit kell tenned, hogy ugyanazt a csomagcsoport-nevet rendeled hozzá a Free és a Premium csomaghoz, ahogy az alábbi képernyőképeken látható.

![Free Plan termékoldal hozzárendelt High End csomagcsoporttal](/img/config/product-upgrades-free.png)

![Premium Plan termékoldal hozzárendelt High End csomagcsoporttal](/img/config/product-upgrades-premium.png)

Ennek az a célja, hogy jelezze az Ultimate Multisite számára: a hálózatban létezik egy **High End** nevű csomag-„család”. Frissítések vagy visszaváltások felajánlásakor csak ugyanabból a családból származó csomagok jelennek meg opcióként a felhasználó számára.
