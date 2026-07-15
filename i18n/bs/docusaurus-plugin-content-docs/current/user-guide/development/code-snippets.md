---
title: Kodni snipeti
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets za v2

Ukratko, kodni snipeti za **WordPress** se koriste za obavljanje određenih radnji koje bi inače zahtijevale poseban, manji plugin. Takvi kodni snipeti se postavljaju u jednu od WordPress osnovnih ili tematskih datoteka (obično je to `functions.php` datoteka vaše teme) ili se mogu koristiti kao MU plugin.

U ovom članku prikazat ćemo vam tri kodnih snipeta koje možete koristiti s **Ultimate Multisite v2**:

  * [**Promjena pozicije stavke menija "Account"**](#changing-the-position-of-the-account-menu-item)

  * [**Kako provjeriti je li korisnik pod određenim planom i/ili ima aktivnu pretplatu**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Popravak CORS problema s Font-Icons u mapiranim domenima**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Promjena pozicije stavke menija "Account" {#changing-the-position-of-the-account-menu-item}

Da biste promijenili poziciju stavke menija "Account" na Dashboardu vašeg klijenta, samo dodajte sljedeći kodni snipet u `functions.php` vaše aktivne teme glavne stranice. Snipet možete postaviti i unutar jednog od vaših mu-plugins ili custom plugins.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Kako provjeriti je li korisnik pod određenim planom i/ili ima aktivnu pretplatu {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Kao network administrator, možda ćete morati kreirati prilagođene funkcije koje će obavljati osnovne radnje ili učiniti neku uslugu/funkcionalnost dostupnom odabranoj grupi pretplatnika ili krajnjih korisnika, na temelju statusa njihove pretplate i plana kojem su pretplaćeni.

Ove ugrađene funkcije Ultimate Multisite pomoći će vam u tome.

Da biste provjerili je li korisnik član određenog plana, možete koristiti funkciju:

wu_has_plan($user_id, $plan_id)

Da biste provjerili je li pretplata aktivna, možete koristiti funkciju:

wu_is_active_subscriber($user_id)

Ispod je primjer snipeta koji provjerava je li trenutni korisnik pod određenim planom (_Plan ID 50_) i je li korisnikova pretplata aktivna.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Napomena da funkcija _**wu_has_plan**_ zahtijeva "Plan ID" kako bi funkcionisala.

Da biste dobili ID plana, možete otići na **Ultimate Multisite > Products**. ID svakog proizvoda prikazat će se desno u tabeli.

Napomena da korisnici mogu biti pretplaćeni samo na **Plan**, a ne na Paket ili Uslugu, jer su oni samo dodaci za **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Popravak CORS problema s Font-Icons u mapiranim domenima {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Popravak CORS problema s Font-Icons u mapiranim domenima {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Nakon mapiranja domena na pod-sajt, možda ćete otkriti da stranica ima problema s učitavanjem prilagođenih fontova. To je uzrokovano blokiranjem iz drugog izvora (cross-origin block) u postavkama vašeg servera.

Budući da se fontovi gotovo uvijek učitavaju izravno iz CSS-a, naš plugin za mapiranje domena nije u stanju prepraviti URL-ove kako bi koristio mapirani domen umjesto originalnog, pa kako bi se problem popravio, trebat će vam da izmijenite vaše server konfiguraacijske datoteke.

Ispod su kodni snipeti za popravak problema za Apache i NGINX. Ove promjene zahtijevaju napredno znanje o server konfiguraacijskim datotekama (.htaccess datoteke i NGINX konfig datoteke). Ako niste sigurni u mogućnosti izvođenja tih promjena sami, pošaljite ovu stranicu agentima podrške vašeg hosting provajdera kada zatražite pomoć.

### Apache {#apache}

Na vašu .htaccess datoteku, dodajte:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Na vašu server konfig datoteku (lokacija varira od servera do servera), dodajte:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
