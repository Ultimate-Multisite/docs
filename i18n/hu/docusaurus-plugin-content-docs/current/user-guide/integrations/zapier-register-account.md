---
title: Account regisztrálása Zapier segítségével
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Esemény: Account regisztrálása Zapier-en keresztül {#event-register-an-account-via-zapier}

Az [Ultimate Multisite integrálása Zapier-rel](zapier.md) című cikkben bemutattuk, hogyan használható a Zapier különböző műveletek végrehajtására az Ultimate Multisite-on belül triggerek és események alapján. Ebben a cikkben megmutatjuk, hogyan integrálhatsz 3rd party alkalmazásokat. A Google Sheets-et használjuk adatforrásként, és az információkat elküldjük az Ultimate Multisite számára egy Account regisztrálásához.

A Zapier csatlakoztatása előtt menj az **Ultimate Multisite > Settings > API & Webhooks** részhez, és ellenőrizd, hogy az API engedélyezve van-e. Másold ki az API Key-t és az API Secret-et erről a képernyőről, amikor a Zapier kéri az Ultimate Multisite Account hitelesítő adatait.

![API és Webhooks beállítások API Key, API Secret és Enable API opciókkal](/img/admin/settings-api-webhooks.png)

Először létre kell hoznod egy **Google Sheet**-et a Google Drive-odban. Ügyelj arra, hogy minden oszlopot megfelelően definiálj, hogy később könnyen leképezhesd az adatokat.

A Google sheet létrehozása után bejelentkezhetsz a Zapier Account-odba, és elkezdhetsz létrehozni egy zap-et.

Az **"App event"** keresőmező alatt válaszd a **"Google Sheets"** lehetőséget


Ezután az "**Event** " mezőnél válaszd a "**New spreadsheet row** " lehetőséget, majd kattints a "**Continue** " gombra

A következő lépésben ki kell választanod azt a **Google Account**-ot, ahol a **Google Sheet** mentve van. Tehát csak győződj meg arról, hogy a megfelelő google account van megadva.


A **"Set up trigger** " alatt ki kell választanod és meg kell adnod azt a google spreadsheetet és worksheetet, amelyet használni fogsz, és ahonnan az adatok érkeznek. Egyszerűen töltsd ki ezeket, majd kattints a "**Continue** " gombra

A következő lépés a "**test your trigger** ", hogy megbizonyosodj arról, hogy a google sheet megfelelően csatlakoztatva van.

Ha a teszt sikeres, látnod kell az eredményt, amely néhány értéket mutat a spreadsheetjeidből. Kattints a "**Continue** " gombra a folytatáshoz.

A következő lépés a második művelet beállítása, amely létrehoz vagy regisztrál egy Account-ot az Ultimate Multisite-ban. A keresőmezőben válaszd az "**Ultimate Multisite(2.0.2)** " lehetőséget


Az "**Event** " mező alatt válaszd a "**Register an Account in Ultimate Multisite** " lehetőséget, majd kattints a "**Continue** " gombra.

A "**Set up an action** " alatt különböző mezőket fogsz látni ügyféladatokhoz, membership-ekhez, termékekhez stb. A Google sheet alatt lévő értékeket leképezheted, és hozzárendelheted őket a megfelelő mezőhöz, ahol meg kell jelenniük, ahogy az alábbi képernyőképen látható.


Az értékek leképezése után tesztelheted a műveletet.
