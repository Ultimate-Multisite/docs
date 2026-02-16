---
title: API végpont regisztrálása
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Az Ultimate Multisite Register API végpont

Ebben az útmutatóban megtanulod, hogyan használhatod az Ultimate Multisite /register API végpontját egy új ügyfél teljes regisztrációs folyamatának létrehozásához a hálózatodon belül, és hogyan valósíthatod ezt meg Zapier segítségével.

A végpont a POST metódust használja, és a következő URL-en érhető el: _**https://yoursite.com/wp-json/wu/v2/register**_. A hívás során 4 folyamat fut le a hálózatodon belül:

  * Új WordPress felhasználó jön létre, vagy a meglévő felhasználó azonosítása történik meg a felhasználói azonosító alapján.

  * Új Ügyfél jön létre az Ultimate Multisite-ban, vagy a meglévő ügyfél azonosítása történik meg az ügyfél-azonosító alapján.

  * Új webhely jön létre a WordPress hálózaton.

  * Végül új Tagság jön létre az Ultimate Multisite-ban.

Ehhez a folyamathoz szükséged lesz az API hitelesítő adataidra. Ezeket a hálózati adminisztrációs felületen találod meg: navigálj az **Ultimate Multisite > Settings** > **API & Webhooks** menüpontra, és keresd meg az API Settings szekciót.

![API Settings szekció az Ultimate Multisite-ban](/img/config/settings-api.png)  
Jelöld be az **Enable API** opciót, és másold ki az API hitelesítő adataidat.

Most nézzük meg részletesen a végpontot, majd hozzunk létre egy regisztrációs műveletet a Zapierben.

## A végpont törzsparaméterei

Tekintsük át, milyen minimális információkat kell elküldenünk a végpontnak. A cikk végén megtalálod a teljes hívást.

### Customer

Ezek az adatok szükségesek a Felhasználó és az Ultimate Multisite Ügyfél létrehozásához:

"customer_id" : integer

Megadhatod a hálózatodban már létrehozott ügyfél azonosítóját. Ha nem küldöd el, az alábbi adatok alapján új ügyfél és új WordPress felhasználó jön létre. A felhasználói azonosító ugyanúgy megadható, mint az ügyfél-azonosító.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

Ebben az objektumban csak a Tagság állapotát kell megadnunk.

"membership" { "status" : "string", // a következők egyike: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

A termékeket egy tömbben adhatod meg, amely 1 vagy több termékazonosítót tartalmaz a hálózatodból. Fontos: ez a végpont nem hoz létre termékeket. A termékek létrehozásáról az Ultimate Multisite dokumentációjában, a termék-létrehozási végpontnál olvashatsz bővebben.

**"products" : [1,2],**

### Payment

A Tagsághoz hasonlóan itt is csak az állapotot kell megadnunk.

**"payment" { "status" : "string", // a következők egyike: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

A törzs lezárásaként meg kell adnunk a webhely URL-jét és címét, mindkettőt a Site objektumon belül.

**"site" : { "site_url" : "string", "site_title" : "string" }**

A register végpont válasza egy tömb lesz, amely az újonnan létrehozott tagság adatait tartalmazza.

## Művelet létrehozása a Zapierben

Ennek az új, robusztusabb fióklétrehozási végpontnak a bevezetésével egy új művelet is elérhető a Zapierben.

Tudod, hogyan használhatod ki a Zapier új verziójának minden előnyét? Itt többet is megtudhatsz róla. (link?)

### Művelet létrehozása

A regisztrációs végpont Zapierrel való használatának szemléltetéséhez hozzunk létre egy integrációt a Google Forms-szal. Minden alkalommal, amikor valaki kitölti ezt az űrlapot és az adatok mentésre kerülnek a válaszokat tartalmazó táblázatba, új tagság jön létre az Ultimate Multisite hálózatban.

A Google Forms-ban készíts egy űrlapot a hálózatban történő új tagság létrehozásához szükséges minimális mezőkkel.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Most a Zapierben hozz létre egy új Zap-et, és csatlakoztasd a létrehozott Google űrlapot azon a táblázaton keresztül, ahol az adatok mentésre kerülnek.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Kész! A Google Forms űrlap csatlakoztatva van a Zapierhez, és készen áll a hálózattal való integrációra. Most térjünk át arra a műveletre (Action), amely a Google Forms által minden kitöltéskor aktivált eseményindító (Trigger) eredményeként fut le.

Keresd meg az új Ultimate Multisite alkalmazást és válaszd ki. Ehhez a Zap típushoz válaszd a Register opciót.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Az első lépés után válaszd ki a fiókot, amelyet ehhez a Zap-hez szeretnél csatlakoztatni.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ez a teljes folyamat legkényesebb része. Össze kell párosítanunk a Google Forms-ból érkező mezőket a register végponthoz szükséges minimális mezőkkel, ahogy azt a cikk előző részében bemutattuk.

Ebben a példában csak a felhasználónevet, e-mail címet, jelszót, nevet és a weboldal URL-jét kell beállítanunk. A többi mező előre meghatározott értékeket kap, így minden, ezen a Google Forms-on keresztül létrehozott tagság ugyanazt a terméket és állapotot kapja.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

A beállítások elvégzése után lépj tovább a végső tesztre. Az utolsó képernyőn láthatod az összes mezőt, amely a végpontnak elküldésre kerül, a hozzájuk tartozó értékeket, valamint azokat a mezőket, amelyek üresen maradnak.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Teszteld az új Zap-edet – sikeresen le kell futnia. Ha bármilyen hiba történik, ellenőrizd az összes mezőt és azt, hogy helyesen kerülnek-e elküldésre. Mivel sok adat van, könnyen előfordulhat, hogy valami elkerüli a figyelmedet.

### A végpont összes paramétere

Íme a teljes hívás az összes elküldhető mezővel.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // a következők egyike: "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // a következők egyike: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
