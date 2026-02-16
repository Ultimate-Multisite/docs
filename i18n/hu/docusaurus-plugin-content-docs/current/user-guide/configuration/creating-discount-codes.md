---
title: Kedvezménykódok létrehozása
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Kedvezménykódok létrehozása (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az Ultimate Multisite segítségével kedvezménykódokat hozhatsz létre, amelyekkel ügyfeleid kedvezményt kaphatnak előfizetéseikre. A létrehozásuk pedig egyszerű!

## Kedvezménykódok létrehozása és szerkesztése

Kedvezménykód létrehozásához vagy szerkesztéséhez navigálj az **Ultimate Multisite > Discount Codes** menüpontra.

![](/img/config/discount-codes-list.png)

Itt láthatod a már létrehozott kedvezménykódok listáját.

Kattints az **Add Discount** **Code** gombra új kupon létrehozásához, vagy szerkeszd a meglévőket úgy, hogy föléjük viszed az egeret és a **Edit** lehetőségre kattintasz.

![Kedvezménykódok listája hover műveletekkel](/img/config/discount-codes-list.png)

![Add Discount Code gomb](/img/config/discount-codes-list.png)

Átirányítunk arra az oldalra, ahol létrehozhatod vagy szerkesztheted a kuponkódot. Ebben a példában egy újat fogunk létrehozni.

![Kedvezménykód szerkesztési oldala](/img/config/discount-codes-list.png)

Nézzük meg az itt elérhető beállításokat:

**Enter Discount Code:** Ez csak a kedvezménykód neve. Ez nem az a kód, amelyet ügyfeleidnek a pénztárűrlapon kell majd használniuk.

**Description:** Itt röviden leírhatod, mire szolgál ez a kupon.

![Kedvezménykód neve és leírása mezők](/img/config/discount-codes-list.png)

**Coupon code:** Itt határozod meg azt a kódot, amelyet ügyfeleidnek a fizetéskor meg kell adniuk.

![Kuponkód mező](/img/config/discount-codes-list.png)

**Discount:** Itt beállíthatsz **százalékos** vagy **fix összegű** kedvezményt a kódhoz.

![Százalékos vagy fix összegű kedvezmény beállítása](/img/config/discount-codes-list.png)

**Apply to renewals:** Ha ez az opció ki van kapcsolva, a kedvezménykód csak az **első fizetésre** vonatkozik. Az összes további fizetésnél nem lesz kedvezmény. Ha ez az opció be van kapcsolva, a kedvezménykód az összes jövőbeli fizetésre érvényes lesz.

**Setup fee discount:** Ha ez az opció ki van kapcsolva, a kuponkód **nem ad kedvezményt a rendelés beállítási díjára**. Ha ez az opció be van kapcsolva, beállíthatod azt a kedvezményt (százalékos vagy fix összegű), amelyet ez a kuponkód a csomagok beállítási díjára alkalmazni fog.

![Apply to renewals és setup fee discount opciók](/img/config/discount-codes-list.png)

**Active:** Manuálisan aktiválhatod vagy deaktiválhatod ezt a kuponkódot.

![Kedvezménykód aktív kapcsolója](/img/config/discount-codes-list.png)

Az **Advanced Optio** **ns** alatt a következő beállításokat találod:

**Limit uses:**

  * **Uses:** Itt láthatod, hányszor használták fel a kedvezménykódot.

  * **Max uses:** Ez korlátozza, hányszor használhatják a felhasználók ezt a kedvezménykódot. Például, ha 10-et írsz ide, a kupon csak 10 alkalommal használható fel. E limit elérése után a kuponkód már nem használható.

![Felhasználási limit beállítása uses és max uses mezőkkel](/img/config/discount-codes-list.png)**Start & expiration dates:** Itt lehetőséged van kezdő dátumot és/vagy lejárati dátumot beállítani a kuponodhoz.

![Kezdő és lejárati dátum mezők](/img/config/discount-codes-list.png)

**Limit products:** Ha bekapcsolod a **Select products** opciót, megjelenik az összes terméked. Manuálisan kiválaszthatod (be- vagy kikapcsolással), mely termékekre alkalmazható ez a kuponkód. Az itt kikapcsolt termékek nem változnak, ha ügyfeleid megpróbálják rájuk használni ezt a kuponkódot.

![Termékkorlátozás kiválasztó kapcsolók](/img/config/discount-codes-list.png)

Miután beállítottad ezeket az opciókat, kattints a **Save Discount Code** gombra a kupon mentéséhez, és kész is!

![Save Discount Code gomb](/img/config/discount-codes-list.png)

A kupon most már a listádon van, és onnan **szerkesztheted vagy törölheted**.

![Kedvezménykód a listában szerkesztési és törlési opciókkal](/img/config/discount-codes-list.png)

### 

### URL paraméterek használata:

Ha testre szeretnéd szabni az árazási táblázataidat, vagy egy szép kuponkód oldalt szeretnél készíteni a weboldaladhoz, és automatikusan alkalmazni szeretnéd a kedvezménykódot a pénztárűrlapon, ezt URL paraméterekkel teheted meg.

Először meg kell szerezned a csomag megosztható linkjét. Ehhez navigálj az **Ultimate Multisite > Products** menüpontra és válassz ki egy csomagot.

Kattints a **Click to Copy Shareable Link** gombra. Ez megadja a megosztható linket ehhez a konkrét csomaghoz. Esetünkben a kapott megosztható link: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Termékoldal megosztható link gombbal](/img/config/products-list.png)

A kedvezménykód alkalmazásához erre a konkrét csomagra egyszerűen add hozzá a **?discount_code=XXX** paramétert az URL-hez. Ahol az **XXX** a kuponkód.

Ebben a példában az **50OFF** kuponkódot fogjuk alkalmazni erre a konkrét termékre.

Az URL ehhez a csomaghoz az 50OFF kedvezménykóddal alkalmazva így fog kinézni: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
