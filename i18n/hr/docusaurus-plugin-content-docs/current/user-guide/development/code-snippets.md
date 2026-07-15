---
title: Kod fragmenata koda
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kod fragmenji za v2

U osnovi, kod fragmeni za **WordPress** se koriste za obavljanje određenih radnji koje bi inače zahtijevale poseban manji plugin. Takvi kod fragmenji se postavljaju u jedan od WordPress jezgra ili tematskih datoteka (obično u `functions.php` datoteci vaše teme) ili se mogu koristiti kao MU plugin.

U ovom članku pokazat ćemo vam tri kod fragmena koje možete koristiti s **Ultimate Multisite v2**:

  * [**Promjena pozicije stavke menija Račun (Account menu item)**](#changing-the-position-of-the-account-menu-item)

  * [**Kako provjeriti je li korisnik pod određenim planom i/ili ima aktivnu pretplatu**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Rješavanje problema CORS-a s Font-Icons na mapiranih domenima**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Promjena pozicije stavke menija Račun (Account menu item) {#changing-the-position-of-the-account-menu-item}

Da biste promijenili poziciju stavke menija Račun na Dashboardu vašeg klijenta, jednostavno dodajte sljedeći kod fragmen u `functions.php` datoteku vaše glavne teme koja je aktivna. Također možete smjestiti fragmen unutar jednog od vaših mu-pluginova ili prilagođenih pluginova.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Prilagodite ovu vrijednost kako biste postavili meni na željenu poziciju.
```

## Kako provjeriti je li korisnik pod određenim planom i/ili ima aktivnu pretplatu {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Kao administrator mreže, možda ćete morati kreirati prilagođene funkcije koje će obavljati osnovne radnje ili omogućiti uslugu/funkciju odabranoj grupi pretplatnika ili krajnjim korisnicima, ovisno o statusu njihove pretplate i plana na kojem su pretplatnici.

Ove native Ultimate Multisite funkcije će vam pomoći s tim.

Da biste provjerili je li korisnik član određenog plana, možete koristiti sljedeću funkciju:

`wu_has_plan($user_id, $plan_id)`

Da biste provjerili je li pretplata aktivna, možete koristiti funkciju:

`wu_is_active_subscriber($user_id)`

Ispod je primjer koji provjerava je li trenutni korisnik pod određenim planom (_Plan ID 50_) i je li korisničko pretplatničko pretplata aktivna.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // KORISNIK JE ČLAN PLANOVA I NJE PRETPLATNA JE AKTIVNA, URAČI NEŠTO} else { // KORISNIK NIJE ČLAN PLANOVA -- ILI -- NJE PRETPLATNA NIJE AKTIVNA, URAČI DRUGO}
// end if;
```

Napomena je da funkcija `_**wu_has_plan**_` zahtijeva "Plan ID" kako bi funkcionirala.

Da biste dobili ID plana, možete otići u **Ultimate Multisite > Products**. ID svakog proizvoda će se prikazati desno od tabele.

Napomena je da korisnici mogu biti pretplati samo na **Plan**, a ne na Paket ili Uslugu, jer su oni samo dodaci za **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Rješavanje problema CORS-a s Font-Icons u mapiranih domenima {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Rješavanje problema CORS-a s Font-Icons u mapiranih domenima {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Nakon što mapirate domen na poddomen, možete primijetiti da je stranica imala probleme pri učitavanju prilagođenih fontova. To uzrokuje blokiranje izvan izvora (cross-origin block) u postavkama vašeg servera.

Budući da su font datoteke gotovo uvijek učitane direktno iz CSS-a, naš plugin za mapiranje domena ne može prepisati URL-ove kako bi koristio mapirani domen umjesto originalnog, tako da biste riješili problem trebate izmijeniti svoje server konfiguracijske datoteke.

Ovi kodovi su predlozi za popravak problema za Apache i NGINX. Ove promjene zahtijevaju napredno znanje o konfiguracijskim datotekama servera (.htaccess datoteke i NGINX konfiguracijske datoteke). Ako niste sigurni u sebe da možete sami napraviti te promjene, pošaljite ovu stranicu svojim agentima podrške hostera kada vam je potrebna pomoć.

### Apache {#apache}

U svojoj .htaccess datoteci dodajte:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

U vašoj server konfiguracijskoj datoteci (lokacija se razlikuje ovisno o serveru) dodajte:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
