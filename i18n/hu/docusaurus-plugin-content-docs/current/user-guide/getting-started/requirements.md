---
title: Követelmények
sidebar_position: 1
_i18n_hash: 77ce1a129b3eb304cc0b89d72faef9cf
---
# Az Ultimate Multisite követelményei

Az első kérdés, amit az Ultimate Multisite megvásárlása előtt feltehetsz magadnak: milyen követelmények szükségesek a bővítményünk futtatásához? Szerencsére csak néhány alapvető követelmény van az Ultimate Multisite használatához: egy **domainnév**, egy jó **tárhelyszolgáltató** és egy WordPress **Multisite** telepítés. Ennyi az egész!

## Domainnév

Először beszéljünk a domainnévről.

A domainnév kiválasztásakor gondold át, mi a konkrét szakterületed, és mit szeretnél létrehozni az Ultimate Multisite segítségével: ügynökséget szeretnél indítani? Webshop-jellegű weboldalakat értékesíteni? Vagy talán WordPress webtárhelyet kínálni? Az Ultimate Multisite-tal minden lehetséges.

A bővítményünk előfizetéses szolgáltatásokat, fizetésbegyűjtést, pénztár űrlapokat, kedvezménykuponokat és ügyfélkommunikációt biztosít. A WordPress Multisite telepítéséhez, konfigurálásához és karbantartásához szükséges munka nagy részét az Ultimate Multisite megkönnyíti.

Bármilyen szakterületet választasz, a bővítményünkkel kezelheted, amíg weboldalakat értékesítesz szolgáltatásként! Ügyelj arra, hogy olyan domainnevet válassz, amely illeszkedik az üzleti terveidhez.

## Tárhelyszolgáltató

Most, hogy van egy figyelemfelkeltő domainneved, amely tükrözi a szakterületedet és vállalkozásodat, egy jó webtárhely-szolgáltatót kell választanod, hogy elhelyezd rajta a hálózatodat az Ultimate Multisite-tal. Számos jó lehetőség van a piacon. Egyes tárhelyszolgáltatók jól integrálódnak az Ultimate Multisite-tal, ami döntő tényező lehet attól függően, hogy mit tervezel építeni.

Az Ultimate Multisite-nak bármely tárhelyszolgáltatónál működnie kell. Az egyetlen különbség, hogy egyes cégek, mint a _WPMU DEV Hosting_, _WP Engine_, _Closte_, _Cloudways_, _Gridpane_ és _Runcloud_ szorosabb integrációt kínálnak a domain mapping funkcióhoz. Más tárhelyeknél előfordulhat, hogy az egyéni domaineket manuálisan kell hozzárendelned. Érdemes olyan tárhelyszolgáltatót választani, amely támogatja az AutoSSL-t. A _Closte_, _Runcloud_ és _cPanel_ támogatja ezt.

Ami a szerver specifikációit illeti, nincs konkrét képlet, mivel ez attól függ, milyen funkciókat kínálsz, és mekkora a hálózatod. Egy osztott tárhely jó kiindulópont lehet, de amint a hálózatod növekedni kezd, valószínűleg dedikált VPS-re lesz szükséged.

## WordPress Multisite

Most beszéljünk egy kicsit a WordPress Multisite telepítésről.

A WordPress Multisite lehetővé teszi, hogy egyetlen telepítésen belül webhelyek hálózatát működtesd. Ez egy beépített funkció, de alapértelmezés szerint nincs aktiválva. Engedélyezned kell ezt a funkciót a WordPress telepítésedben és a webtárhely vezérlőpultján.

A Multisite funkcióval engedélyezett WordPress **az Ultimate Multisite alapja**. Mivel az Ultimate Multisite fő célja, hogy segítsen a felhasználóknak weboldalakat kezelni és szolgáltatásként értékesíteni, ezt a Multisite funkcióval engedélyezett WordPress-en kell megtenni.

Készítettünk **egy részletes útmutatót**, amely lépésről lépésre bemutatja, mit kell tenned a Multisite funkció engedélyezéséhez a WordPress telepítésedben.

Miután engedélyezted a Multisite funkciót a WordPress-ben, itt az ideje telepíteni az Ultimate Multisite-ot. Az Ultimate Multisite helyes telepítéséhez a következőkre van szükséged:

  * WordPress: v5.3+ (Ajánlott: Legutóbbi stabil verzió)

  * PHP: 7.4.x (a > 8.0 támogatás hamarosan érkezik)

  * MySQL: v5+ (Ajánlott: 5.6, ha a 8.0 nem érhető el a tárhelyszolgáltatódnál)

Ezek az Ultimate Multisite egyetlen szoftverkövetelményei.

Ne feledd, hogy az Ultimate Multisite működhet PHP 8.0-val, de mi a PHP 7.4.x használatát javasoljuk.

Továbbá ajánljuk, hogy **fő domainekre** telepítsd, ne aldomainekre vagy alkönyvtárakba. Működhet aldomaineken/alkönyvtárakban is, de előfordulhatnak hibák.

Az Ultimate Multisite telepítésének részletes útmutatójáért **kattints ide**.
