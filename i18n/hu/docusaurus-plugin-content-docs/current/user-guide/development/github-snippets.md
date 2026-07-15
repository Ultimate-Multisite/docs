---
title: GitHub kódrészletek
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Az Ultimate Multisite kódrészletek használata a GitHub tárolónkban

A GitHub tárolónkban olyan kódrészleteket találsz, amelyeket gyakran kérnek azok az Ultimate Multisite felhasználók, akik kisebb funkciókat szeretnének hozzáadni – például Google Analytics szkriptet a regisztrációs oldalakhoz, vagy egy meta box elrejtését az admin felületen.

Ebben a cikkben megmutatjuk, hogyan használhatod ezeket a kódokat, és pontosabban hová kell őket elhelyezni.

A kódrészleteket az alábbi linken találod:

https://github.com/next-press/wp-ultimo-snippets/

Kétféleképpen adhatod hozzá a kódot:

  1. A sablon functions.php fájljában.

  2. Must-Use Plugins (mu-plugins) használatával.

# Hogyan add hozzá a kódrészletet a sablon functions.php fájljához

  1. Jelentkezz be a WordPress hálózat admin felületére, és navigálj a Megjelenés > Sablonszerkesztő menüpontra (lásd az alábbi képernyőképet).

  2. A „Sablonok szerkesztése" oldalon győződj meg róla, hogy az aktív sablonod van kiválasztva a képernyő jobb felső sarkában található legördülő mezőben (lásd a képernyőkép 3. pontját).

  3. Kattints a functions.php fájlra a „Sablonfájlok" részben a fájl betöltéséhez. Görgess le az aljára, és illeszd be a GitHub tárolóból származó Ultimate Multisite kódrészletet.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Hogyan hozz létre Must-Use Plugins (mu-plugins) bővítményt

A WordPress rendelkezik egy funkcióval, amely lehetővé teszi egyéni funkciók betöltését „Must-Use Plugins" vagy röviden „mu-plugins" néven.

Ezek a speciális mu-plugins bővítmények az összes többi normál plugin előtt töltődnek be, és nem lehet őket kikapcsolni. Multisite hálózatban az ezekben a mu-plugins fájlokban található kód a telepítés összes webhelyén betöltődik.

1\. FTP vagy SSH segítségével csatlakozz a WordPress telepítésed fájlrendszeréhez.

2\. A WordPress telepítésed wp-content könyvtárában hozz létre egy új mappát mu-plugins néven.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Hozz létre egy új PHP fájlt a számítógépeden wu-snippet.php néven a Jegyzettömb vagy bármely kódszerkesztő segítségével.

4\. Illeszd be a GitHub tárolóból származó Ultimate Multisite kódrészletet a fájlba, és mentsd el. A kódrészlet tetejére hozzáadhatod az alábbi kódot is, hogy címkézd a mu plugin bővítményedet.
