---
title: Az adminisztrációs panel bemutatása
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Az admin panel bemutatása

Az Ultimate Multisite célja, hogy a lehető legegyszerűbb és magától értetődő legyen, de egy ilyen hatékony eszköznél hasznos lehet egy vezetett bemutató. Nézzük végig az admin oldalakat, hogy könnyebben eligazodj.

## Dashboard {#dashboard}

Az Ultimate Multisite **Dashboard** alapvető jelentéseket és analitikákat jelenít meg, beleértve a bevételeket, a webhelytevékenységeket, a tagság növekedését, a látogatószámokat és a földrajzi adatokat.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Íme a Dashboard teljes nézete:

![Ultimate Multisite Dashboard teljes oldal](/img/admin/um-dashboard-full.png)

És a Dashboard alsó szakasza:

![Ultimate Multisite Dashboard alsó szakasz](/img/admin/um-dashboard-bottom.png)

Íme a hálózati Dashboard teljes nézete is:

![Hálózati Dashboard teljes oldal](/img/admin/network-dashboard-full-page.png)

## Fizetési űrlapok {#checkout-forms}

A **fizetési űrlapok** rugalmasságot adnak egyedi regisztrációs oldalak létrehozásához. Testre szabhatod a mezőket, egyedi osztályokat és szkripteket illeszthetsz be, valamint korlátozhatod a hozzáférést a látogató országa vagy helye alapján.

![Fizetési űrlapok listája](/img/admin/checkout-forms-list.png)

## Termékek {#products}

A **Termékek** szakaszban hozhatod létre a hálózatod különböző csomagjait, ajánlatait és szolgáltatásait. Állíts be árakat, számlázási gyakoriságokat, valamint korlátokat és kvótákat termékszinten.

![Termékek listája](/img/admin/products-list.png)

## Tagságok {#memberships}

A **Tagságok** oldal a hálózatod összes előfizetését megjeleníti. Tekintsd át és szerkeszd az előfizetés részleteit, beleértve a csomagokat, termékeket, számlázási összegeket és gyakoriságokat, fizetési előzményeket és időbélyegeket.

![Tagságok listája](/img/admin/memberships-list.png)

## Fizetések {#payments}

A **Fizetések** oldal gyors áttekintést nyújt a teljes hálózat fizetési előzményeiről, részletes tranzakciós információkkal, beleértve az adott termékeket és összegeket.

![Fizetések listája](/img/admin/payments-list.png)

## Ügyfelek {#customers}

Az **Ügyfelek** oldal megjeleníti a hálózatodban regisztrált összes tagot alapvető felhasználói információkkal, beleértve a nevet, az e-mail-címet, az utolsó bejelentkezést és egy „váltás erre” hivatkozást az aloldalukra való bejelentkezéshez.

![Ügyfelek listája](/img/admin/customers-list.png)

## Webhelyek {#sites}

A **Webhelyek** oldal felsorolja a hálózatod összes aloldalát, beleértve a webhelysablonokat és az ügyfelek tulajdonában lévő webhelyeket. Könnyedén kezelheted a hozzárendelt domaineket, korlátokat és kvótákat, pluginokat és témákat, valamint a webhelyek bélyegképeit.

![Webhelyek listája](/img/admin/sites-list.png)

## Domaineken {#domains}

A **Domainek** oldal az aloldalakhoz rendelt egyedi domainek kezelésére szolgál. Super adminként manuálisan adhatsz hozzá vagy rendelhetsz hozzá egyedi domainneveket, valamint megtekintheted a DNS-rekordokat és naplókat.

![Domainek listája](/img/admin/domains-list.png)

## Kedvezménykódok {#discount-codes}

A **kedvezménykódok** lehetővé teszik kuponkódok létrehozását, amelyekkel kedvezményeket kínálhatsz a végfelhasználóidnak. Add meg a kedvezmény értékét, és célozz meg konkrét felhasználókat vagy csoportokat.

![Kedvezménykódok listája](/img/admin/discount-codes-list.png)

## Közlemények {#broadcasts}

A **közlemények** eszközt biztosít bejelentések közzétételéhez vagy privát üzenetek küldéséhez az aloldalaid felhasználóinak. Célozz meg konkrét felhasználói csoportokat az alapján, hogy melyik csomagra vagy termékre fizettek elő.

![Közlemények listája](/img/admin/broadcasts-list.png)

## Beállítások {#settings}

A **Beállítások** oldalon konfigurálhatod az Ultimate Multisite-ot — regisztrációs beállítások, fizetések, API és webhookok, domain-hozzárendelés és egyéb integrációk.

Az AI-összekötő beállításai felsorolják a jelenleg támogatott OAuth szolgáltatói készleteket: Anthropic Max, OpenAI ChatGPT/Codex és Google AI Pro. Minden szolgáltatói kártya lehetővé teszi a super adminoknak fiókok csatlakoztatását, mentett fiókok frissítését, fiókok eltávolítását e-mail alapján, valamint a manuális OAuth tartalékmegoldás használatát, amikor egy sandboxolt környezet blokkolja a böngésző átirányítását. A Cursor Pro beállítási opciók el lettek távolítva az admin panelről.

A ChatGPT/Codex fiókok támogatják az összekötő által biztosított eszközhasználatot ott, ahol a művelet engedélyezi az eszközöket, így az összekötő által támogatott műveletektől függő admin munkafolyamatok használhatják a Codex eszközviselkedését az OpenAI fiók csatlakoztatása után.

![Beállítások oldal](/img/admin/settings-general.png)

Íme az általános beállítások oldal teljes nézete:

![Általános beállítások teljes oldal](/img/admin/settings-general-full.png)

És az e-mail beállítások oldala:

![E-mail beállítások teljes oldal](/img/admin/settings-emails-full.png)

És a fizetési beállítások oldala:

![Fizetési beállítások teljes oldal](/img/admin/settings-payments-full.png)

És a fizetési beállítások alsó szakasza:

![Fizetési beállítások alsó szakasz](/img/admin/settings-payments-bottom.png)

És a webhelybeállítások oldala:

![Webhelybeállítások teljes oldal](/img/admin/settings-sites-full.png)

## Események {#events}

Az **Események** oldal nyilvántartást vezet a hálózatod összes eseményéről és naplójáról. Nyomon követi az olyan tevékenységeket, mint a csomagmódosítások, regisztrációk és egyéb változások — hasznos a multisite felügyeletéhez.

![Események listája](/img/admin/events-list.png)

## Webhookok {#webhooks}

A **Webhookok** lehetővé teszik adatok továbbítását egy másik alkalmazásnak. Hasznos adatok küldéséhez az Ultimate Multisite-ból olyan platformokra, mint a Zapier.

![Webhookok listája](/img/admin/webhooks-list.png)
