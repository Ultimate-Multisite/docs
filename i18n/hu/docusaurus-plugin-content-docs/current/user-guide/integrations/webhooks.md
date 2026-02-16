---
title: Webhookok
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Első pillantás a Webhookokra (v2)

_**FIGYELEM: Ez a funkció vagy cikk haladó felhasználóknak szól.**_

A **webhook** egy módszer, amellyel egy alkalmazás vagy szoftver – mint az Ultimate Multisite – valós idejű információkat tud küldeni más alkalmazásoknak. A webhook azonnal továbbítja az adatokat vagy payload-okat más alkalmazásoknak, amint azok keletkeznek, vagyis **az adatokat azonnal megkapod.**

Ez akkor hasznos, ha bizonyos adatokat kell átadnod az Ultimate Multisite-ból egy másik CRM-be vagy rendszerbe, valahányszor egy esemény bekövetkezik. Például el kell küldened a felhasználó nevét és e-mail címét egy levelezőlistára minden alkalommal, amikor új felhasználói fiók jön létre.

## Hogyan hozz létre webhookot

Webhook létrehozásához lépj be a hálózati admin vezérlőpultba. Kattints az **Ultimate Multisite > Webhooks > Add New Webhook** menüpontra.

![Webhookok listája az Add New Webhook gombbal](/img/admin/webhooks-list.png)

Új webhook létrehozásakor meg kell adnod a **Name, URL** és **Event** mezőket. Bármilyen nevet használhatsz a webhookodhoz. A legfontosabb mezők az URL és az Event.

![Új webhook űrlap a Name, URL és Event mezőkkel](/img/admin/webhooks-list.png)

Az URL a **végpont vagy célhely**, ahová az Ultimate Multisite elküldi a **payload-ot vagy adatokat**. Ez az az alkalmazás, amely fogadja az adatokat.

A Zapier a leggyakoribb megoldás, amelyet a felhasználók harmadik féltől származó alkalmazásokkal való integráció megkönnyítésére használnak. Olyan platform nélkül, mint a Zapier, manuálisan kell létrehoznod egy egyedi függvényt, amely fogadja és feldolgozza az adatokat. Olvasd el ezt a cikket arról, **hogyan használd az Ultimate Multisite webhookot a Zapierrel.**

Ebben a cikkben a webhook működésének alapkoncepcióját és az Ultimate Multisite-ban elérhető eseményeket tekintjük át. Egy harmadik féltől származó oldalt fogunk használni, a [requestbin.com](https://requestbin.com/)-ot. Ez az oldal lehetővé teszi, hogy létrehozzunk egy végpontot és fogadjuk a payload-ot programozás nélkül. _**Megjegyzés: mindössze annyit fog tenni, hogy megmutatja, az adatok megérkeztek.**_ Nem történik feldolgozás vagy bármilyen művelet a payload-dal.

Menj a [requestbin.com](https://requestbin.com/) oldalra és kattints a Create Request Bin gombra.

![RequestBin weboldal Create Request Bin gomb](/img/admin/webhooks-list.png)

A gombra kattintás után be kell jelentkezned, ha már van fiókod, vagy regisztrálnod kell. Ha már van fiókod, egyenesen a vezérlőpultjukra kerülsz. A vezérlőpulton azonnal látni fogod a végpontot vagy URL-t, amelyet az Ultimate Multisite webhook létrehozásához használhatsz.

![RequestBin vezérlőpult a végpont URL-lel](/img/admin/webhooks-list.png)

Másold ki az URL-t és menj vissza az Ultimate Multisite-ba. Illeszd be a végpontot az URL mezőbe, és válassz egy eseményt a legördülő listából. Ebben a példában a **Payment Received** eseményt választjuk.

Ez az esemény akkor aktiválódik, amikor egy felhasználó fizetést hajt végre. Az összes elérhető esemény, leírásuk és payload-jaik az oldal alján találhatók. Kattints az **Add New Webhook** gombra a webhook mentéséhez.

![Webhook beállítva a Payment Received eseménnyel](/img/admin/webhooks-list.png)

Most már küldhetünk egy teszteseményt a végpontra, hogy lássuk, működik-e a létrehozott webhook. Ezt úgy tehetjük meg, hogy a létrehozott webhook alatt a **Send Test Event** gombra kattintunk.

![Send Test Event opció a webhook alatt](/img/admin/webhooks-list.png)

Megjelenik egy megerősítő ablak, amely jelzi, hogy a teszt sikeres volt.

![Webhook tesztesemény sikeres megerősítése](/img/admin/webhooks-list.png)

Ha most visszamegyünk a _Requestbin_ oldalra, látni fogjuk, hogy a payload megérkezett néhány tesztadattal.

![RequestBin a fogadott webhook payload adatokkal](/img/admin/webhooks-list.png)

Ez a webhook és a végpontok működésének alapelve. Ha egyedi végpontot szeretnél létrehozni, egy egyedi függvényt kell írnod az Ultimate Multisite-tól kapott adatok feldolgozásához.
