---
title: Kod segmenti
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kod fragmente za v2 {#code-snippets-for-v2}

Osnovno, kod fragmente za **WordPress** se uporabljajo za opravljanje določenih dejanj, ki bi jih drugače morali zahtevati poseben manjši plugin. Takšni kod fragmente se postavljajo v en od WordPress jezzer ali teme (običajno v datoteko functions.php vaše teme) ali lahko uporabite kot MU plugin.

V tem članku vam bom pokazal tri kod fragmente, ki jih lahko uporabite z **Ultimate Multisite v2**:

  * [**Spremanje položaja menija Račun](#changing-the-position-of-the-account-menu-item)**

  * [**Kako preveriti, ali je uporabnik pod določenim načrtom in/ali ima aktivno naročnino**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Popravljanje CORS težav z Font-Icons na mapiranih domenah**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Spremanje položaja menija Račun {#changing-the-position-of-the-account-menu-item}

Da bi spremenili položaj menija Račun na Dashboardu vašega stranke, le dodajte naslednji kod fragment v functions.php vaše glavne teme. Lahko ga tudi postavite notranje v en od vaših mu-pluginov ali prilagojenih pluginov.

add_filter('wu_my_account_menu_position', function() { return 10; // Uporabite to vrednost, da prilagodite položaj menija na željeno mesto.

Za preverjanje ali aktivnosti pretplate lahko uporabite funkcijo:

`wu_is_active_subscriber($user_id)`

Spodaj je primer, ki preverja, ali trenutni uporabnik spada pod določeno načrtko (_Plan ID 50_) in če je njegova pretplota aktivna.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // Uporabnik je član načrtke in njegova pretplota je aktivna, naredite to } else { // Uporabnik ni član načrtka -- ali -- njegova pretplota ni aktivna, naredite drugo } // kraj end if;`

Opazite, da zahteva `wu_has_plan` "Plan ID", da bi delovala.

Da bi dobili ID načrtke, lahko idete na **Ultimate Multisite > Products**. ID vsakega izdelka se bo prikazal na desni strani tabele.

Opazite, da uporabniki lahko pretplatijo le na **Plan**, ne na Paket ali Uslugo, ker so le dodatki za **Plan**.

![Lista izdelkov z ID-ji načrtkov](/img/admin/products-list.png)

## Reševanje težav s CORS v povezavi z Font-Icons na mapiranih domenah {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Reševanje težav s CORS v povezavi z Font-Icons na mapiranih domenah {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Po mapiranju domena na poddomeno boste morda ugotovili, da je strani težko zagotoviti nalaganje prilagojenih fontov. To je posledica blokiranja izza domene (cross-origin block) v nastavitvah vašega serverja.

Ker so fajli fontov skoraj vedno vključen neposredno iz CSS-a, naš plugin za mapiranje domen je neuspešen pri prepisovanju URL-ov tako, da bi jih uporabil mapirano domeno namesto originalnega, zato boste morali spremeniti svoje nastavitve serverja.

Spodaj so kod segmenti za rešitev problema za Apache in NGINX. Ti spremembe zahtevajo napredno znanje konfiguracij serverjevih datotek (.htaccess datotek in NGINX konfiguracijske datoteke). Če ste neprepričani, da boste sami opravili te spremembe, pošljite to stran vašim agentom podporuke hostinga, če potrebujete pomoč.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Na svoji .htaccess datoteci dodajte:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Na svojo server konfiguracijsko datoteko (lokacija se razlikuje od serverja do serverja) dodajte:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
