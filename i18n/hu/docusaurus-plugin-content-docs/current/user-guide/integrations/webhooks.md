---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Első pillantás a Webhooks (v2) működésére

_**FIGYELEM: Vedd figyelembe, hogy ez a funkció vagy cikk haladó felhasználóknak szól.**_

A **webhook** egy módja annak, hogy egy alkalmazás vagy szoftver, például az Ultimate Multisite, valós idejű információkat biztosítson más alkalmazásoknak. A webhook adatokat vagy payloadokat továbbít más alkalmazásoknak akkor, amikor az esemény megtörténik, vagyis **azonnal megkapod az adatokat.**

Ez akkor hasznos, ha bizonyos adatokat kell integrálnod vagy továbbítanod az Ultimate Multisite-ból egy másik CRM vagy rendszer felé minden alkalommal, amikor egy esemény aktiválódik. Például el kell küldened a felhasználó nevét és e-mail-címét egy levelezőlistára minden alkalommal, amikor új felhasználói fiók jön létre.

## Hogyan hozz létre webhookot {#how-to-create-a-webhook}

Webhook létrehozásához lépj a hálózati admin dashboardra. Kattints a **Ultimate Multisite > Webhooks > Add New Webhook** elemre.

![Üres Webhooks listaoldal Add New Webhook gombbal](/img/admin/webhooks-list-empty.png)

Ezután szerkesztheted a webhook konfigurációját:

![Add New Webhook űrlap Name, Event és URL mezőkkel](/img/admin/webhook-add-modal.png)

Új webhook létrehozásakor olyan információkat kell megadnod, mint a **Name, URL** és **Event**. Bármilyen nevet használhatsz a webhookodhoz. A legfontosabb mezők az URL és az Event.

![Webhook szerkesztőfelület, amely az URL mezőt és a payload előnézetét mutatja](/img/admin/webhook-url-field.png)

Az URL az az **endpoint vagy cél**, amelyre az Ultimate Multisite elküldi a **payloadot vagy adatokat**. Ez az az alkalmazás, amely fogadni fogja az adatokat.

A Zapier a leggyakoribb megoldás, amelyet a felhasználók arra használnak, hogy megkönnyítsék a 3rd party alkalmazásokkal való integrációt. Olyan platform nélkül, mint a Zapier, manuálisan kell létrehoznod egy egyedi függvényt, amely elkapja az adatokat és feldolgozza őket. Lásd ezt a cikket arról, **hogyan használd az Ultimate Multisite webhookot a Zapierrel.**

Ebben a cikkben a webhook működésének alapvető koncepcióját és az Ultimate Multisite-ban elérhető eseményeket tekintjük át. Egy 3rd party site-ot fogunk használni, a [requestbin.com](https://requestbin.com/) nevűt. Ez a site lehetővé teszi, hogy létrehozzunk egy endpointot, és kódolás nélkül elkapjuk a payloadot. _**Jogi nyilatkozat: mindössze azt fogja megmutatni, hogy az adatok megérkeztek.**_ A payloadon nem történik feldolgozás vagy bármilyen művelet.

Menj a [requestbin.com](https://requestbin.com/) oldalra, és kattints a Create Request Bin gombra.

Miután erre a gombra kattintottál, bejelentkezést kér, ha már van fiókod, vagy regisztrációt. Ha már van fiókod, közvetlenül a dashboardjukra visz. A dashboardjukon azonnal látni fogod az endpointot vagy URL-t, amelyet az Ultimate Multisite webhookod létrehozásához használhatsz.

Másold ki az URL-t, és térj vissza az Ultimate Multisite-hoz. Helyezd az endpointot az URL mezőbe, és válassz egy eseményt a legördülő listából. Ebben a példában a **Payment Received** lehetőséget választjuk.

Ez az esemény akkor aktiválódik, amikor egy felhasználó fizetést végez. Az összes elérhető esemény, azok leírása és payloadjai az oldal alján vannak felsorolva. Kattints az **Add New Webhook** gombra a webhook mentéséhez.

![Webhook esemény legördülő lista kiválasztott Payment Received opcióval](/img/admin/webhook-event-picker.png)

Most küldhetünk egy teszteseményt az endpointnak, hogy lássuk, működik-e az általunk létrehozott webhook. Ezt úgy tehetjük meg, hogy a létrehozott webhook alatt a **Send Test Event** elemre kattintunk.

![Webhooks lista egy konfigurált webhookkal és Send Test művelettel](/img/admin/webhooks-list-populated.png)

Ez egy megerősítő ablakot jelenít meg, amely azt mondja, hogy a teszt sikeres volt.

![Webhook tesztesemény eredménye teszt payload küldése után](/img/admin/webhook-test-result.png)

Most, ha visszatérünk a _Requestbin_ site-ra, látni fogjuk, hogy a payload megérkezett, és néhány tesztadatot tartalmaz.

Ez a webhook és az endpointok működésének alapelve. Ha egyedi endpointot szeretnél létrehozni, egyedi függvényt kell létrehoznod az Ultimate Multisite-tól kapott adatok feldolgozásához.
