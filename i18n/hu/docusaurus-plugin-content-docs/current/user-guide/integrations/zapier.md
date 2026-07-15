---
title: Zapier integráció
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Az Ultimate Multisite integrálása Zapierrel

Az egyik cikkben a [Webhooks](webhooks.md) témáját tárgyaltuk, és azt, hogyan használhatók 3rd party alkalmazásokkal való integrációra.

A webhookok használata kissé bonyolult, mivel haladó kódolási ismereteket és a payloadok fogadásának ismeretét igényli. A **Zapier** használata egy mód arra, hogy ezt megkerüld.

A Zapier több mint 5000+ alkalmazással integrálható, ami megkönnyíti a különböző alkalmazások közötti kommunikációt.

Létrehozhatsz **triggereket**, amelyek akkor indulnak el, amikor események történnek a hálózatodon (pl. létrejön egy account, és kiváltja az account_create eseményt), vagy létrehozhatsz **műveleteket** a hálózatodon, amelyek külső eseményekre reagálnak (pl. új account membership létrehozása az Ultimate Multisite hálózatodban).

Ez azért lehetséges, mert az **Ultimate Multisite Zapier triggerek** és műveletek a [REST API](https://developer.ultimatemultisite.com/api/docs/) segítségével működnek.

## Hogyan kezdd el {#how-to-start}

Először keresd meg az Ultimate Multisite-ot a Zapier alkalmazáslistájában. Alternatívaként kattinthatsz [erre a linkre](https://zapier.com/apps/wp-ultimo/integrations).

Menj a Dashboardodra, és nyomd meg a bal oldalsávon a **+** **Zap létrehozása** gombot egy új Zap beállításához.

![Zapier Dashboard a Zap létrehozása gombbal](/img/admin/webhooks-list.png)

Át leszel irányítva a Zap létrehozási oldalára.

A keresőmezőbe írd be: "wp ultimo". Kattints a **Beta** verzió opció kiválasztásához.

![WP Ultimo keresése a Zapier alkalmazáslistájában](/img/admin/webhooks-list.png)

Az alkalmazásunk kiválasztása után válaszd az elérhető eseményt: **Új Ultimate Multisite esemény**.

![Az Új Ultimate Multisite esemény trigger kiválasztása](/img/admin/webhooks-list.png)

Most hozzáférést kell adnunk a Zapiernek **a hálózatodhoz**. A **Bejelentkezés** gombra kattintva egy új ablak nyílik meg, amely az **API hitelesítési adatokat** kéri.

![Zapier bejelentkezési kérés API hitelesítési adatokhoz](/img/admin/webhooks-list.png)

Menj a hálózati admin panelre, navigálj az **Ultimate Multisite > Settings** > **API & Webhooks** menüponthoz, és keresd meg az API Settings szakaszt.

Válaszd az **API engedélyezése** opciót, mivel ez szükséges a kapcsolat működéséhez.

![API és Webhooks beállítások API Settings és API engedélyezése opciókkal](/img/admin/settings-api-webhooks.png)

Használd a **Másolás a vágólapra** ikont az API Key és API Secret mezőkön, majd illeszd be ezeket az értékeket az integrációs képernyőn.

Az URL mezőbe írd be a hálózatod teljes URL-jét, beleértve a protokollt is (HTTP vagy HTTPS).

![Zapier integrációs képernyő API Key, Secret és URL mezőkkel](/img/admin/webhooks-list.png)

Kattints az **Igen, folytatás** gombra a következő lépéshez. Ha minden rendben működik, az újonnan csatlakoztatott accountod fogad majd! Kattints a **Folytatás** gombra egy új trigger létrehozásához.

## Hogyan hozz létre új triggert {#how-to-create-a-new-trigger}

Most, hogy az accountod csatlakoztatva van, láthatod az elérhető eseményeket. Ehhez az oktatóanyaghoz válasszuk a **payment_received** eseményt.

![payment_received esemény kiválasztása a Zapier triggerben](/img/admin/webhooks-list.png)

Miután kiválasztottad az eseményt, és a **folytatás** gombra kattintasz, megjelenik egy **tesztlépés**.

![Zapier tesztlépés a triggerhez](/img/admin/webhooks-list.png)

Ebben a szakaszban a Zapier teszteli, hogy a Zapod képes-e **lekérni az adott eseményhez tartozó konkrét payloadot**. A jövőbeni, azonos típusú eseményeknél ugyanezzel a struktúrával rendelkező információk lesznek elküldve.

![Zapier trigger teszt sikeresen befejezve payload adatokkal](/img/admin/webhooks-list.png)

Az oktatóanyagunkban a teszt **sikeresen befejeződött**, és visszaadta a payload példaadatait. Ezek a példaadatok hasznosak lesznek, amikor műveleteket hozunk létre. A triggered most már létrejött, és készen áll arra, hogy más alkalmazásokhoz kapcsolódjon.

## Hogyan hozz létre műveleteket {#how-to-create-actions}

A műveletek más triggerekből származó információkat használnak fel új bejegyzések létrehozásához a hálózatodban.

A **művelet létrehozási lépésében** az Ultimate Multisite **Beta** verziót és az **Elemek létrehozása Ultimate Multisite-on** opciót fogod választani.

![Művelet létrehozása az Elemek létrehozása Ultimate Multisite-on opcióval](/img/admin/webhooks-list.png)

A következő lépésben vagy létrehozod a hitelesítésedet, ahogy a **Hogyan kezdd el** részben tettük, vagy kiválasztasz egy már létrehozott hitelesítést. Ebben az oktatóanyagban ugyanazt a korábban létrehozott hitelesítést választjuk.

![Hitelesítés kiválasztása a Zapier művelethez](/img/admin/webhooks-list.png)

### A művelet beállítása {#setting-up-the-action}

Ez a **művelet fő lépése**, és itt a dolgok egy kicsit eltérnek. Az első információ, amelyet kiválasztasz, az **Elem**. Az elem a hálózatod **információs modellje**, például **Ügyfelek, Fizetések, Oldalak, E-mailek** és mások.

![Elemtípus kiválasztása a Zapier művelethez](/img/admin/webhooks-list.png)

Egy elem kiválasztásakor az űrlap **átrendeződik, hogy megjelenítse a kötelező és opcionális mezőket** a kiválasztott elemhez.

Például a **Customer** elem kiválasztásakor az űrlapmezők mindent megjelenítenek, amit ki kell tölteni egy új Customer létrehozásához a hálózatban.

![Customer elem mezői a Zapier művelet beállításában](/img/admin/webhooks-list.png)

Miután kitöltötted az összes **kötelezőként** megjelölt mezőt, és a folytatásra kattintottál, egy utolsó képernyő megmutatja a kitöltött mezőket és azokat a mezőket, amelyek kitöltetlenül maradtak.

![Zapier művelet tesztje a kitöltött és kitöltetlen mezőkkel](/img/admin/webhooks-list.png)

Amint a teszted befejeződik és sikeres, a műveleted konfigurálva van. Fontos azt is ellenőrizni a hálózatodon, hogy az elem létrejött-e a műveleted tesztjével.
