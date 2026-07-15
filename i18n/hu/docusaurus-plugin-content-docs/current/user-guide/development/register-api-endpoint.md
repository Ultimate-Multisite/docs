---
title: API-végpont regisztrálása
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Az Ultimate Multisite Register API endpoint

Ebben az útmutatóban megtanulod, hogyan használd az Ultimate Multisite /register API endpointot, hogy létrehozd egy új ügyfél teljes onboarding folyamatát a hálózatodban, és hogyan tedd ezt meg Zapierrel.

Az endpoint a POST metódust használja, és az URL-lel hívható meg: _**https://yoursite.com/wp-json/wu/v2/register**_. Ebben a hívásban 4 folyamat fog lefutni a hálózatodban:

  * Létrejön egy új WordPress felhasználó, vagy megtörténik az azonosítása a felhasználói ID alapján.

  * Létrejön egy új ügyfél az Ultimate Multisite-ban, vagy megtörténik az azonosítása az ügyfél-ID alapján.

  * Létrejön egy új site a WordPress hálózaton.

  * Végül létrejön egy új Membership az Ultimate Multisite-ban.

Ehhez a folyamathoz szükséged lesz az API hitelesítő adataidra. Ezek megszerzéséhez menj a hálózati admin panelre, navigálj az **Ultimate Multisite > Settings** > **API & Webhooks,** részhez, és keresd meg az API Settings szakaszt.

![API Settings szakasz az Ultimate Multisite-ban](/img/config/settings-api.png)

Íme az API beállítások oldal teljes nézete:

![API beállítások teljes oldal](/img/config/settings-api-full.png)

Válaszd az **Enable API** opciót, és szerezd meg az API hitelesítő adataidat.

Most nézzük meg az endpointot, majd hozzunk létre egy regisztrációs műveletet Zapierben.

## Endpoint törzsparaméterei {#endpoint-body-parameters}

Tekintsük át azt a minimális információmennyiséget, amelyet el kell küldenünk az endpointnak. A cikk végén megtalálod a teljes hívást.

### Ügyfél {#customer}

Ez az az információ, amely a felhasználó és az Ultimate Multisite ügyfél létrehozási folyamatához szükséges:

"customer_id" : integer

Lehetséges elküldeni a hálózatodban létrehozott ügyfél-ID-t. Ha nincs megadva, az alábbi információk lesznek felhasználva egy új ügyfél és egy új WordPress felhasználó létrehozásához. A felhasználói ID ugyanúgy elküldhető, mint az ügyfél-ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Az egyetlen információ, amelyre ebben az objektumban szükségünk van, a Membership Status.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Termékek** {#products}

A termékek egy tömbben vannak megadva, a hálózatodból származó 1 vagy több termék-ID-val. Figyelem, ez az endpoint nem hoz létre termékeket. Nézd meg az Ultimate Multisite dokumentációját, hogy jobban megértsd a terméklétrehozási endpointot.

**"products" : [1,2],**

### Fizetés {#payment}

Ahogy a Membership esetében, itt is csak a statusra van szükségünk.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

A törzs lezárásához pedig szükségünk van a site URL-jére és címére, mindkettőre a Site objektumon belül.

**"site" : { "site_url" : "string", "site_title" : "string" }**

A register endpoint visszatérési értéke egy tömb lesz az újonnan létrehozott membership információival.

## Művelet létrehozása Zapierben {#creating-an-action-in-zapier}

Ennek az új és robusztusabb Account-létrehozási endpointnak a bevezetésével egy új művelethez is hozzáférsz Zapierben.

Tudod, hogyan használd és élvezd mindazt, amit a Zapier új verziója kínál? Tudj meg többet itt. (link?)

### Művelet létrehozása {#creating-an-action}

Annak jobb szemléltetésére, hogyan használd a regisztrációs endpointot Zapierrel, hozzunk létre egy integrációt a Google Forms szolgáltatással. Minden alkalommal, amikor ezt az űrlapot kitöltik, és az információk elmentésre kerülnek az űrlap válaszlapján, egy új membership jön létre az Ultimate Multisite hálózatban.

A Google Formsban készíts egy űrlapot a hálózatban új membership létrehozásához szükséges minimális mezőkkel.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Most Zapierben hozz létre egy új Zapet, és csatlakoztasd a Google-ban létrehozott űrlapot azon a táblázaton keresztül, ahol az adatok mentésre kerülnek.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Kész! A Google Forms űrlap össze van kapcsolva Zapierrel, és készen áll a hálózattal való integrációra. Most térjünk át arra az Actionre, amely a Google Forms által minden kitöltéskor elindított Trigger eredménye lesz.

Keresd meg az új Ultimate Multisite alkalmazást, és válaszd ki. Ehhez a fajta Zaphez válaszd a Register opciót.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Az első lépés után válaszd ki azt az accountot, amely ehhez a Zaphez kapcsolódik.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ez az egész folyamat legérzékenyebb része. Össze kell párosítanunk a Google Forms-ból érkező mezőket a register endpointhoz szükséges minimális mezőkkel, ahogy a cikk előző szakaszában látható.

Ebben a példában csak a felhasználónevet, az emailt, a jelszót, a nevet és a webhely URL-jét kell beállítanunk. A többi előre meghatározott marad, hogy az ezen a Google Formson létrehozott összes membership ugyanazt a termék- és status mintát kövesse.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Az információk beállítása után folytasd a végső teszttel. Az utolsó képernyőn láthatod az endpointnak elküldendő összes mezőt, a hozzájuk tartozó információkat és az üresen elküldendő mezőket.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Teszteld az új Zapedet, és sikeresen le kell futnia. Ha bármilyen hiba történik, ellenőrizd az összes mezőt, és azt, hogy helyesen vannak-e elküldve. Mivel sok információról van szó, néhány dolog könnyen észrevétlen maradhat.

### Teljes endpoint-paraméterek {#complete-endpoint-parameters}

Íme a teljes hívás és az elküldhető mezők összes lehetősége.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
