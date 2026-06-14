---
title: Kodo fragmentoj
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kodfragmentoj por v2

Na osnovu toga, kodfragmentoj za **WordPress** se koristi za izvođenje određenih radnji koje bi inače zahtevale poseban manji plugin. Takvi kodfragmenti se postavljaju u jedan od WordPress jezgra ili tematskih datoteka (obično `functions.php` vaše teme) ili mogu se koristiti kao MU plugin.

U ovom članku ćemo vam pokazati tri kodfragmenta koje možete koristiti sa **Ultimate Multisite v2**:

  * [**Promena pozicije stavke menija za račun**](#changing-the-position-of-the-account-menu-item)

  * [**Kako proveriti da li korisnik spada pod određeni plan i/ili ima aktivnu pretplatu**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Popravka CORS problemov sa Font-Icons na mapiranim domenima**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Promena pozicije stavke menija za račun

Da biste promenili poziciju stavke menija za račun na Dashboard vašeg klijenta, jednostavno dodajte sledeći kodfragment u `functions.php` vaše glavne teme. Takođe možete staviti fragment unutar jednog od vaših mu-pluginova ili prilagođenih pluginova.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Prilagodite ovu vrednost da biste postavili meni na željenu poziciju.
```

## Kako proveriti da li korisnik spada pod određeni plan i/ili ima aktivnu pretplatu

Kao administrator mreže, možda ćete morati da kreirate prilagođene funkcije koje će izvršavati osnovne radnje ili omogućiti uslugu/funkciju određenoj grupi pretplatnika ili krajnjim korisnicima, na osnovu statusa njihove pretplate i plana pod kojim su pretplaćeni.

Ove native funkcije Ultimate Multisite će vam pomoći u tome.

Da biste proverili da li je korisnik član određenog plana, možete koristiti funkciju:

`wu_has_plan($user_id, $plan_id)`

Ĉi sei vi volas kontroli, ĉu la subskribo estas aktiva, vi povas uzi la funkcion:

`wu_is_active_subscriber($user_id)`

Subsupera ekzemplo fragmento, kiu kontrolas ĉu la aktuala uzanto estas sub specifita planĉo (_Plan ID 50_) kaj ĉu la subskribo de la uzanto estas aktiva.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // UTILISTO EST SUB PLANO kaj SUKRIBONO EST AKTIVA, FAÇU ILI } else { // UTILISTO NE EST SUB PLANO -- APLIE -- SUKRIBONO NE EST AKTIVA, FAÇU ALIANON } // fin de if;`

Notu, `_**wu_has_plan**_` bezonas "Plan ID" por funkcii.

Por akiri la ID de planĉo, vi povas iri al **Ultimate Multisite > Products**. La ID de ĉiu produkto sera shown per la destra de la tabulo.

Notu, uzantoj povas subskribiĝi nur al **Plano**, ne al Paķa aŭ Servcoj, ĉar ili estas nur adiciónoj por una **Plano**.

![Produktoj listo montrant plan ID-ojn](/img/admin/products-list.png)

## Solvi CORS problemojn kun Font-Icons en mapitaj domajnoj
## Solvi CORS problemojn kun Font-Icons en mapitaj domajnoj

Post kiam vi mapas domen al sub-sito, vi povas diri, ke la sitio estas tiuj problemoj ŝanĝi la ŝarĝadon de memplaj fontoj. Tio estas kaŭzita per blokado interdoma sur via serverkonfiguracio.

Ĉar fontfiloj estas ĉiam malferme akirbataj el CSS, nia domajno mapilanto ne povas reekskribi la URL-ojn por uzi la mapitan domen en sto de la originala, tiel por ŝanĝi ti problemin, vi bezonas modifi la via serverkonfiguraciofiloj.

Jen la kodpartoj por ŝanĝi problemin por Apache kaj NGINX. Ti ŝanĝoj bezonas avan konsciencon pri serverkonfiguraĵaj fajiloj (.htaccess kaj NGINX konfiguraĵfajiloj). Se vi ne sentas diri ti ŝanĝojn mem, sendu ĉi ti paĝon al la subtenantaj agentoj de via alojon, se vi bezonas helpon.

### Apache

Al viaj .htaccess fajlo, aldonu:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Al via serverkonfiguraĵfajlo (la loko variĝas de server al servero), aldonu:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
