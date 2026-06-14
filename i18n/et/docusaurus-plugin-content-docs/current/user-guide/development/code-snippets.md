---
title: Koodikonnad
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Koodi-nõuded v2 versioonile

Põhine on **WordPress** koodinõudmeid kasutatakse teatud toimende sooritamiseks, mida oleks võimalik teha eraldatuna väiksemaks pluginiga. Sellise koodinõudmeid paigutatakse ühe WordPress core või teema faili (otsinguks tavaliselt teie teema `functions.php` fail) sisse või neid saab kasutada MU pluginina.

Selles artiklis näitame kolme koodinõudmeid, mida saab kasutada **Ultimate Multisite v2**-ga:

  * [**Arvestusmenüüpunkti paigutuse muutmine**](#changing-the-position-of-the-account-menu-item)

  * [**Käsimale kontroll, kas kasutaja on antud plaanil ja/või on aktiivne subskriptioon**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**CORS-probleemide lahendamine Font-Iconsiga mappitud domeenides**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Arvestusmenüüpunkti paigutuse muutmine

Kliendi Dashboardil olev arvestusmenüüpunkti paigutuse muutamiseks lisa lihtsalt järgmine koodinõudmeel faili `functions.php` oma peal olevas teemas. Saate ka seda koodinõudmet sisse ühe oma mu-pluginiga või custom pluginiga.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Muuta seda väärtust, et paigutada menüü soovitud asendesse.
```

## Käsimale kontroll, kas kasutaja on antud plaanil ja/või on aktiivne subskriptioon

Võrreva administraatorina võib vaja olla luua custom funktsioone, mis teostavad alusel toiminguid või lühendavad teenust/funktsiooni valitud subskriptorite või lõppklientide grupi jaoks nende subskriptiooni ja selle plaani staatuse põhjal.

Need Ultimate Multisite loodud funktsioonid aitavad teil selles.

Kas kasutaja antud plaanil on, kontrollimiseks saate kasutada funktsiooni:

```php
wu_has_plan($user_id, $plan_id)
```

Kontrolli, kasubsubskriptioon aktive on või mitte, kasutades funktsiooni:

`wu_is_active_subscriber($user_id)`

Allpool on si näide fragment, mis kontrollib, kas praegune kasutaja on teatud plaani (plaan ID 50) all ja kas kasutaja subskriptioon on aktiveeritud.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // KAUSTAJ ON PLAANI LAUJA JA TÄS SUBSKRIPTIOON ON AKTUEERITUD, TEGE SI
} else { // KAUSTAJ EI SEA PLAANI ALL -- VÄLLE -- ESISUBSKRIPTIOON EI SEA AKTUEERITUD, TEGE ÜHEM
} // end if;
```

Päraste on meelestada, et `wu_has_plan`-funktsioon nõuab "Plaan ID"-t, et see toimuks.

Plani ID saada saab minna **Ultimate Multisite > Products** sekssioonile. Iga toote ID näidatakse tabeli paremal.

Päraste on meelestada, et kasutajad võivad subskribe ainult **Planni**, mitte pakettide või teenuste, kuna need on ainult **Plani** lisakomplektid.

![Tootete lista näide plaani ID-d](/img/admin/products-list.png)

## CORS-probleemide lahendamine Font-Iconsiga mappitud domeenides
## CORS-probleemide lahendamine Font-Iconsiga mappitud domeenides

Domeeni sub-saitile mappamise pärast saates teada, et veebilehel on probleem fontide laadimisel. See põhjustab ületatud (cross-origin) blokeerimise teie serveri seadistustes.

Kuna fontifailid on lähes alati laaditud otseselt CSS-st, meie domeeni mappimise plugin ei saa URL-id ümberkirjutada ja kasutada mappitud domeeni asemel algset, seetõttu tuleb probleem lahendamiseks muuta teie serveri konfiguratsioonifailid.

### Apache

Lisate oma .htaccess faili, lisage:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Server konfiguratsioonifailis (koht on serveri järgi erinev) lisage:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
