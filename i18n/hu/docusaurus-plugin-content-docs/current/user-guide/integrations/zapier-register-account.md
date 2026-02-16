---
title: Fiók regisztrálása Zapier-en keresztül
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Esemény: Fiók regisztrálása Zapier segítségével

Az [Ultimate Multisite és Zapier integrálása](zapier.md) című cikkben bemutattuk, hogyan használhatod a Zapiert különböző műveletek végrehajtására az Ultimate Multisite-ban triggerek és események alapján. Ebben a cikkben azt mutatjuk be, hogyan integrálhatsz külső alkalmazásokat. A Google Táblázatokat fogjuk használni adatforrásként, és az információkat elküldjük az Ultimate Multisite-nak egy fiók regisztrálásához.

Először hozz létre egy **Google Táblázatot** a Google Drive-odban. Ügyelj rá, hogy minden oszlopot megfelelően nevezz el, így később könnyedén összerendelhetők lesznek az adatok.

![Google Táblázat ügyféladatok oszlopaival](/img/admin/webhooks-list.png)A Google Táblázat létrehozása után jelentkezz be a Zapier fiókodba, és kezdj el egy új zapet létrehozni.

![Zapier vezérlőpult zap létrehozásához](/img/admin/webhooks-list.png)Az **„App event"** keresőmezőben válaszd ki a **„Google Sheets"** lehetőséget

![Google Sheets kiválasztása alkalmazás eseményként](/img/admin/webhooks-list.png)

Ezután az „**Event**" mezőben válaszd a „**New spreadsheet row**" lehetőséget, majd kattints a „**Continue**" gombra

![New spreadsheet row esemény kiválasztása a Zapierben](/img/admin/webhooks-list.png)A következő lépésben ki kell választanod azt a **Google Fiókot**, ahol a **Google Táblázat** mentve van. Győződj meg róla, hogy a megfelelő Google fiók van megadva.

![Google Fiók kiválasztása a Google Táblázathoz](/img/admin/webhooks-list.png)

A „**Set up trigger**" résznél ki kell választanod és meg kell adnod azt a Google táblázatot és munkalapot, ahonnan az adatok származnak majd. Töltsd ki ezeket a mezőket, majd kattints a „**Continue**" gombra

![Trigger beállítása táblázat és munkalap kiválasztásával](/img/admin/webhooks-list.png)A következő lépés a „**test your trigger**", hogy megbizonyosodj róla, a Google táblázatod megfelelően csatlakozik.

![Trigger tesztelése lépés a Zapierben](/img/admin/webhooks-list.png)Ha a teszt sikeres, látni fogod az eredményt a táblázatod értékeivel. Kattints a „**Continue**" gombra a folytatáshoz.

![Sikeres trigger teszt a táblázat értékeivel](/img/admin/webhooks-list.png)A következő lépés a második művelet beállítása, amely létrehozza vagy regisztrálja a fiókot az Ultimate Multisite-ban. A keresőmezőben válaszd ki az „**Ultimate Multisite(2.0.2)**" lehetőséget

![Ultimate Multisite kiválasztása művelet alkalmazásként](/img/admin/webhooks-list.png)

Az „**Event**" mezőben válaszd a „**Register an Account in Ultimate Multisite**" lehetőséget, majd kattints a „**Continue**" gombra.

![Register an Account in Ultimate Multisite művelet esemény](/img/admin/webhooks-list.png)A „**Set up an action**" résznél különböző mezőket látsz majd ügyféladatokhoz, tagságokhoz, termékekhez stb. A Google táblázatod értékeit hozzárendelheted a megfelelő mezőkhöz, ahová azoknak kerülniük kell, ahogy az alábbi képernyőképen látható.

![Google Táblázat értékeinek hozzárendelése Ultimate Multisite mezőkhöz](/img/admin/webhooks-list.png)

Az értékek hozzárendelése után tesztelheted a műveletet.

![Fiók regisztrálása Zapier művelet tesztelése](/img/admin/webhooks-list.png)
