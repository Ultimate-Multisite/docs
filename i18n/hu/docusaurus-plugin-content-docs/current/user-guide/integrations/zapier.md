---
title: Zapier integráció
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Az Ultimate Multisite integrálása a Zapier-rel

Az egyik korábbi cikkünkben bemutattuk a [Webhookok](webhooks.md) működését, és azt, hogyan használhatók külső alkalmazásokkal való összekapcsolásra.

A webhookok használata kissé bonyolult, mivel haladó programozási ismereteket és a payload-ok kezelését igényli. A **Zapier** segítségével ezt egyszerűbben is megoldhatod.

A Zapier több mint 5000 alkalmazással képes együttműködni, így a különböző rendszerek közötti kommunikáció sokkal könnyebbé válik.

Létrehozhatsz **Triggereket** (eseményindítókat), amelyek a hálózatodon történő eseményekre aktiválódnak (például egy fiók létrehozásakor elindul az account_create esemény), vagy **Action-öket** (műveleteket) hozhatsz létre, amelyek külső események hatására hajtanak végre változtatásokat a hálózatodon (például új tagságot hoznak létre az Ultimate Multisite hálózatodban).

Mindez azért lehetséges, mert az **Ultimate Multisite Zapier triggereit** és action-jeit a [REST API](https://developer.ultimatemultisite.com/api/docs/) működteti.

## Első lépések

Először keresd meg az Ultimate Multisite alkalmazást a Zapier alkalmazáslistájában. Másik lehetőségként kattints [erre a linkre](https://zapier.com/apps/wp-ultimo/integrations).

Nyisd meg a vezérlőpultodat, és kattints a bal oldali sávban található **+** **Create Zap** gombra egy új Zap beállításához.

![Zapier vezérlőpult a Create Zap gombbal](/img/admin/webhooks-list.png)

Ezután a Zap létrehozási oldalára kerülsz.

A keresőmezőbe írd be: „wp ultimo". Válaszd ki a **Beta** verziót.

![WP Ultimo keresése a Zapier alkalmazáslistában](/img/admin/webhooks-list.png)

Az alkalmazás kiválasztása után válaszd az elérhető eseményt: **New Ultimate Multisite Event**.

![A New Ultimate Multisite Event trigger kiválasztása](/img/admin/webhooks-list.png)

Most hozzáférést kell adnunk a Zapiernek **a hálózatodhoz**. A **Sign in** gombra kattintva egy új ablak nyílik meg, ahol meg kell adnod az **API hitelesítő adatokat**.

![Zapier bejelentkezési ablak az API hitelesítő adatokhoz](/img/admin/webhooks-list.png)

Lépj be a hálózatod admin felületére, és navigálj az **Ultimate Multisite > Settings** > **API & Webhooks** menüpontra, majd keresd meg az API Settings szakaszt.

Jelöld be az **Enable API** opciót, mivel ez szükséges a kapcsolat működéséhez.

![API Settings az Enable API opcióval az Ultimate Multisite-ban](/img/admin/webhooks-list.png)

Használd a **Copy to Clipboard** ikont az API Key és API Secret mezőknél, majd illeszd be ezeket az értékeket az integrációs képernyőn.

Az URL mezőbe írd be a hálózatod teljes címét, a protokollal együtt (HTTP vagy HTTPS).

![Zapier integrációs képernyő az API Key, Secret és URL mezőkkel](/img/admin/webhooks-list.png)

Kattints a **Yes, Continue** gombra a következő lépéshez. Ha minden rendben működik, megjelenik az újonnan csatlakoztatott fiókod! Kattints a **Continue** gombra egy új trigger létrehozásához.

## Trigger létrehozása

Most, hogy a fiókod csatlakoztatva van, láthatod az elérhető eseményeket. Ebben az útmutatóban válasszuk a **payment_received** eseményt.

![A payment_received esemény kiválasztása a Zapier triggerben](/img/admin/webhooks-list.png)

Miután kiválasztottad az eseményt és a **continue** gombra kattintasz, megjelenik a **tesztlépés**.

![Zapier tesztlépés a triggerhez](/img/admin/webhooks-list.png)

Ebben a szakaszban a Zapier ellenőrzi, hogy a Zap képes-e **lekérni az adott eseményhez tartozó payload-ot**. A jövőbeli, azonos típusú eseményeknél ugyanilyen szerkezetű információk kerülnek küldésre.

![Sikeresen befejezett Zapier trigger teszt a payload-dal](/img/admin/webhooks-list.png)

Az útmutatónkban a teszt **sikeresen befejeződött**, és visszaadta a példa payload információkat. Ezek a példaadatok segítenek majd az action-ök létrehozásában. A triggered ezzel elkészült, és készen áll a többi alkalmazással való összekapcsolásra.

## Action-ök létrehozása

Az action-ök más triggerekből származó információkat használnak új bejegyzések létrehozására a hálózatodban.

Az **action létrehozása lépésben** válaszd az Ultimate Multisite **Beta** verziót és a **Create Items on Ultimate Multisite** opciót.

![Action létrehozása a Create Items on Ultimate Multisite opcióval](/img/admin/webhooks-list.png)

A következő lépésben vagy létrehozod a hitelesítést – ahogy az **Első lépések** szakaszban tettük –, vagy kiválasztasz egy már meglévő hitelesítést. Ebben az útmutatóban a korábban létrehozott hitelesítést választjuk.

![Hitelesítés kiválasztása a Zapier action-höz](/img/admin/webhooks-list.png)

### Az Action beállítása

Ez az **action fő lépése**, és itt a dolgok kicsit másképp működnek. Az első információ, amit ki kell választanod, az **Item** (elem). Az Item a hálózatod **adatmodellje**, például **Customers, Payments, Sites, Emails** és mások.

![Item típus kiválasztása a Zapier action-höz](/img/admin/webhooks-list.png)

Egy elem kiválasztásakor az űrlap **átrendeződik, és megjeleníti a kiválasztott elemhez tartozó kötelező és opcionális mezőket**.

Például a **Customer** elem kiválasztásakor az űrlap minden olyan mezőt megjelenít, amelyet ki kell tölteni egy új Customer létrehozásához a hálózatban.

![Customer elem mezői a Zapier action beállításában](/img/admin/webhooks-list.png)

Miután kitöltötted az összes **required** (kötelező) jelölésű mezőt és a continue gombra kattintasz, egy utolsó képernyő mutatja a kitöltött és az üresen hagyott mezőket.

![Zapier action teszt a kitöltött és üresen hagyott mezőkkel](/img/admin/webhooks-list.png)

Amint a teszt befejeződik és sikeres, az action konfigurálása kész. Fontos, hogy ellenőrizd a hálózatodon, valóban létrejött-e az elem a teszt során.
