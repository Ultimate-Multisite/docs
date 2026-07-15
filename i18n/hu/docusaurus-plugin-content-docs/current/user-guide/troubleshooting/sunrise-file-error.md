---
title: Sunrise fájl hiba
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Hiba a Sunrise fájl telepítésekor

A sunrise.php egy speciális fájl, amelyet a WordPress a rendszerindítás során keres. Ahhoz, hogy a WordPress felismerje a sunrise.php fájlt, annak a **wp-content mappában** kell lennie.

Amikor aktiválod az Ultimate Multisite bővítményt és végigmész a beállítási varázslón (ahogy a képernyőképen is látható), az Ultimate Multisite megpróbálja átmásolni a saját sunrise.php fájlját a wp-content mappába.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Az esetek nagy részében a fájl másolása sikeresen megtörténik, és minden jól működik. Előfordulhat azonban, hogy valami nincs megfelelően beállítva (például a mappák jogosultságai), és emiatt az Ultimate Multisite nem tudja átmásolni a fájlt.

Ha elolvasod az Ultimo hibaüzenetét, látni fogod, hogy pontosan ez történt: **Sunrise copy failed** (A Sunrise másolása sikertelen).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

A probléma megoldásához egyszerűen másold át a sunrise.php fájlt a wp-ultimo plugin mappájából a wp-content mappába. Ezután töltsd újra a varázsló oldalát, és az ellenőrzéseknek sikeresen le kell futniuk.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Mindenesetre érdemes lehet általánosan is átnézni a mappák jogosultságait, hogy a jövőben elkerüld a hasonló problémákat (nem csak az Ultimate Multisite, hanem más bővítmények és sablonok esetében is).

A WordPress beépített **Webhely állapota eszköze** (a fő oldal **admin panel > Eszközök > Webhely állapota** menüpontjában érheted el) képes figyelmeztetni, ha a mappa jogosultságok olyan értékekre vannak állítva, amelyek problémákat okozhatnak a WordPress működésében.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
