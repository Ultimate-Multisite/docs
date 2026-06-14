---
title: Kod fragmenata koda
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kod fragmen za v2

U osnovi, kod fragmeni za **WordPress** se koriste da se obavljaju određene akcije koje bi inače zahtevale poseban manji plugin. Takvi kod fragmeni se postavljaju u jedan od WordPress jezgra ili tematskih fajlova (obično u `functions.php` fajlu vaše teme) ili se mogu koristiti kao MU plugin.

U ovom članku ćemo vam pokazati tri kod fragmena koje možete koristiti sa **Ultimate Multisite v2**:

  * [**Promena pozicije stavke menija naloga**](#changing-the-position-of-the-account-menu-item)

  * [**Kako proveriti da li korisnik spada u određeni plan i/ili ima aktivnu pretplatu**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Rešavanje problema CORS-a sa Font-Icons na mapiranim domenima**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Promena pozicije stavke menija naloga

Da biste promenili poziciju stavke menija naloga na Dashboard-u vašeg klijenta, jednostavno dodajte sledeći kod fragmen u `functions.php` fajl vaše glavne teme. Možete takođe umetnuti fragmen unutar jednog od vaših mu-pluginova ili prilagođenih pluginova.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Prilagodite ovu vrednost da biste postavili meni na željenu poziciju.
```

## Kako proveriti da li korisnik spada u određeni plan i/ili ima aktivnu pretplatu

Kao administrator mreže, možda ćete morati da kreirate prilagođene funkcije koje će obavljati osnovne akcije ili omogućavati uslugu/funkciju određenoj grupi pretplatnika ili krajnjim korisnicima, na osnovu statusa njihove pretplate i plana na kojem su pretplaćeni.

Ove native funkcije Ultimate Multisite će vam pomoći u tome.

Da biste proverili da li je korisnik član određenog plana, možete koristiti sledeću funkciju:

`wu_has_plan($user_id, $plan_id)`

Da biste proverili da li je pretplata aktivna, možete koristiti funkciju:

`wu_is_active_subscriber($user_id)`

Ispod je primer koji proverava da li trenutni korisnik pripada određenom planu (_Plan ID 50_) i da li je korisničko pretplatničko stanje aktivno.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // KORISNIK JE ČLAN PLANJA I NJE PRETPLATNA JE AKTIVNA, URAČAJ NEŠTO} else { // KORISNIK NIJE ČLAN PLANJA -- ILI -- NJE PRETPLATNA NIJE AKTIVNA, URAČAJ DRUGO}
// end if;
```

Napomena je da funkcija `wu_has_plan` zahteva "Plan ID" kako bi mogla da radi.

Da biste dobili ID plana, možete otići u **Ultimate Multisite > Products**. ID svakog proizvoda će biti prikazan desno od tabele.

Napomena: korisnici se mogu pretplatiti samo na **Plan**, a ne na Paket ili Uslugu, jer su oni samo dodatci za **Plan**.

![Lista proizvoda koja pokazuje ID planova](/img/admin/products-list.png)

## Rešavanje problema CORS-a sa Font-Icons u mapiranim domenima
## Rešavanje problema CORS-a sa Font-Icons u mapiranim domenima

Nakon što mapirate domen na poddomen, možete primetiti da je sajtu teško učitati prilagođene fontove. To je uzrokovano blokadom izvan izvora (cross-origin block) u podešavanjima vašeg servera.

Pošto su fajlovi fontova skoro uvek učitani direktno iz CSS-a, naš plugin za mapiranje domena ne može da prepisuje URL-ove kako bi koristio mapirani domen umesto originalnog, tako da biste rešili problem potrebno je da modifikujete svoje server konfiguracione fajlove.

### Apache

U vašem .htaccess fajlu dodajte slede liniju:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

U vašem server konfiguracionom fajlu (lokacija se razlikuje od servera do servera), dodajte:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
