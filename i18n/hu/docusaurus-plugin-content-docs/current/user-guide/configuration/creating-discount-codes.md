---
title: Kedvezménykódok létrehozása
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kedvezménykódok létrehozása (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az Ultimate Multisite segítségével kedvezménykódokat hozhatsz létre, hogy kedvezményeket adj ügyfeleidnek az előfizetéseikre. A létrehozásuk pedig egyszerű!

## Kedvezménykódok létrehozása és szerkesztése

Kedvezménykód létrehozásához vagy szerkesztéséhez menj ide: **Ultimate Multisite > Kedvezménykódok**.

![Kedvezménykódok listája — üres állapot, mielőtt bármilyen kód létezne](/img/config/discount-codes-empty.png)

Itt láthatod a már létrehozott kedvezménykódok listáját.

Kattinthatsz a **Kedvezmény** **kód hozzáadása** elemre egy új kupon létrehozásához, vagy szerkesztheted a meglévőket úgy, hogy föléjük viszed az egeret, majd a **Szerkesztés** elemre kattintasz.

![Kedvezménykódok listája, ahol az egér fölévitele után megjelennek a Szerkesztés és Törlés hivatkozások](/img/config/discount-codes-list-hover.png)

![Kedvezménykód hozzáadása gomb az oldal fejlécében](/img/config/discount-codes-add-button.png)

Átirányítunk arra az oldalra, ahol létrehozhatod vagy szerkesztheted a kuponkódodat. Ebben a példában egy újat fogunk létrehozni.

![Kedvezménykód szerkesztőoldala, minden szekcióval láthatóan](/img/config/discount-code-edit.png)

Nézzük meg az itt elérhető beállításokat:

**Kedvezménykód megadása:** Ez egyszerűen a kedvezménykódod neve. Ez nem az a kód, amelyet az ügyfeleidnek a fizetési űrlapon kell használniuk.

**Leírás:** Itt röviden leírhatod, mire szolgál ez a kupon.

![Kedvezménykód neve és leírás mezői a szerkesztőoldal tetején](/img/config/discount-code-description.png)

A kedvezménykódot aktívként vagy inaktívként is megtekintheted:

![Kedvezménykód aktív állapota](/img/config/discount-code-active.png)

**Kuponkód:** Itt adhatod meg azt a kódot, amelyet az ügyfeleidnek a fizetés során be kell írniuk.

![Kuponkód mező, ahová az ügyfelek a fizetéskor beírják a kódot](/img/config/discount-code-coupon-field.png)

**Kedvezmény:** Itt beállíthatsz **százalékos** vagy **fix összegű** pénzbeli kedvezményt a kedvezménykódodhoz.

![Kedvezmény összegének beállítása százalékos vagy fix összegű legördülővel](/img/config/discount-code-amount.png)

**Megújításokra alkalmazás:** Ha ez az opció ki van kapcsolva, ez a kedvezménykód csak az **első fizetésre** lesz alkalmazva. Az összes többi fizetésre nem jár kedvezmény. Ha ez az opció be van kapcsolva, a kedvezménykód minden jövőbeli fizetésre érvényes lesz.

**Telepítési díj kedvezménye:** Ha ez az opció ki van kapcsolva, a kuponkód **nem ad kedvezményt a rendelés telepítési díjára**. Ha ez az opció be van kapcsolva, beállíthatod azt a kedvezményt (százalékos vagy fix összegű), amelyet ez a kuponkód a csomagjaid telepítési díjára alkalmaz.

![Megújításokra alkalmazás és telepítési díj kedvezménye kapcsolóopciók](/img/config/discount-code-renewals.png)

**Aktív:** Manuálisan aktiváld vagy deaktiváld ezt a kuponkódot.

![Aktív kapcsoló a kedvezménykód manuális engedélyezéséhez vagy letiltásához](/img/config/discount-code-active.png)

A **Speciális beállítások** alatt a következő beállítások találhatók:

![Kedvezménykód speciális beállításai](/img/config/discount-code-advanced.png)

**Használatok korlátozása:**

  * **Használatok:** Itt láthatod, hányszor használták a kedvezménykódot.

  * **Maximális használatok:** Ez korlátozza, hogy a felhasználók hányszor használhatják ezt a kedvezménykódot. Például, ha ide 10-et írsz, a kupon csak 10 alkalommal használható. E korlát után a kuponkód már nem használható.

![Használatok korlátozása beállítás az aktuális használati számmal és a maximális használatok mezővel](/img/config/discount-code-limit-uses.png)

**Kezdő és lejárati dátumok:** Itt lehetőséged van kezdő dátumot és/vagy lejárati dátumot hozzáadni a kuponodhoz.

![Kezdő és lejárati dátum mezők a kedvezménykód ütemezéséhez](/img/config/discount-code-dates.png)

**Termékek korlátozása:** Ha bekapcsolod a **Termékek kiválasztása** opciót, az összes terméked megjelenik. Lehetőséged lesz manuálisan kiválasztani (be- vagy kikapcsolással), hogy melyik termék fogadhatja el ezt a kuponkódot. Azok a termékek, amelyek itt ki vannak kapcsolva, nem mutatnak semmilyen változást, ha az ügyfeleid megpróbálják hozzájuk használni ezt a kuponkódot.

![Termékek korlátozása szekció termékenkénti kapcsolókkal](/img/config/discount-code-limit-products.png)

Miután beállítottad az összes ilyen opciót, kattints a **Kedvezménykód mentése** gombra a kupon mentéséhez, és kész is!

![Kedvezménykód mentése gomb a szerkesztőoldal alján](/img/config/discount-code-save.png)

A kupon most már szerepel a listádban, és onnan rákattinthatsz a **szerkesztésre vagy törlésre**.

![Kedvezménykód sora a listában Szerkesztés és Törlés műveletekkel egér fölévitelekor](/img/config/discount-codes-list-hover.png)

###

### URL-paraméterek használata:

Ha testre szeretnéd szabni az ártáblázataidat, vagy egy szép kuponkódoldalt szeretnél készíteni a webhelyedhez, és automatikusan szeretnél kedvezménykódot alkalmazni a fizetési űrlapodra, ezt URL-paraméterekkel teheted meg.

Először meg kell szerezned a csomagod megosztható hivatkozását. Ehhez menj ide: **Ultimate Multisite > Termékek**, és válassz ki egy csomagot.

Kattints a **Kattints a megosztható hivatkozás másolásához** gombra. Ez megadja az adott csomag megosztható hivatkozását. A mi esetünkben a megadott megosztható hivatkozás ez volt: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Termékoldal megosztható hivatkozás gombbal](/img/config/products-list.png)

Ahhoz, hogy a kedvezménykódodat erre a konkrét csomagra alkalmazd, egyszerűen add hozzá a **?discount_code=XXX** paramétert az URL-hez. Ahol az **XXX** a kuponkód.

Ebben a példában az **50OFF** kuponkódot fogjuk alkalmazni erre a konkrét termékre.

Ennek a konkrét csomagnak az URL-je az alkalmazott 50OFF kedvezménykóddal így fog kinézni: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
