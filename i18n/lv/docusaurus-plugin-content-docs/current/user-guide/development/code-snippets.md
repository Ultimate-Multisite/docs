---
title: Koda fragmenti
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kodu fragmenti v2

Visbie kodas fragmenti **WordPress** tiek izmantoti noteiktām darbībām, kas, iespējams, būtu nepieciešamas atļautai īpašu mazā pluginam. Šos kodu fragmentus ietver vienā WordPress core vai tēmas failā (parasti jūsu tēmas `functions.php` failā) vai var izmantot kā MU pluginu.

Šajā rakstā parādīsim triju kodu fragmentus, ko var izmantot ar **Ultimate Multisite v2**:

  * [**Uzlabot konta menū elementa pozīciju**](#changing-the-position-of-the-account-menu-item)

  * [**Kā pārbaudīt, vai lietotājs ir noteiktā plānā un/vai ir aktīva abonentāks**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Atbalstīt CORS problēmas ar Font-Icons mapejotas domānos**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Uzlabot konta menū elementa pozīciju

Lai izmainītu konta menū elementa pozīciju jūsu klienta Dashboardā, vienkārši pievienojiet šo kodu fragmentu savas galvenās vietnes aktīvas tēmas `functions.php` failam. Jūs varat arī ietvert šo fragmentu vienā no saviem MU pluginus vai custom pluginos.

add_filter('wu_my_account_menu_position', function() { return 10; // Pielaupi šo vērtību, lai izvietotu menū noteiktajā pozīcijā.

Lai pārbaudītu, vai abonent ir aktīvs, var izmantot funkciju:

`wu_is_active_subscriber($user_id)`

Šeit ir piemēra skripta, kas pārbauda, vai pašreizējais lietotājs atrodas konkrētā plānā (_Plan ID 50_) un vai lietotāja abonentā ir aktīva abonentā.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // LIETOTĀJS IR PLĀNA ABONENTS UN VIŅAS ABONENTS IR AKTĪVA, DARBOŠANI ŠEVI } else { // LIETOTĀJS NEATROKIR PLĀNA ABONENTS -- VAIZAMO BĪDOS CITA KAUTU } // galvenais if;`

Piezīmi: `wu_has_plan` funkcijā ir nepieciešams "Plan ID", lai tā varētu darboties.

Lai saņemtu plāna ID, varat navigēt uz **Ultimate Multisite > Products**. Katras produkta ID redzams tabulas labajā pusē.

Piezīmi: lietotāji var abonentēt tikai **Plānus**, bet nepackage vai pakalojumus, jo tie ir tikai papildu funkcijas (add-ons) plāna.

![Produktu saraksts ar plānu ID](/img/admin/products-list.png)

## Problemas ar CORS atvaļinājumu fontiem mapētajos domānos
## Problemas ar CORS atvaļinājumu fontiem mapētajos domānos

Pēc domānas mapēšanas subvietai varētu atklāt, ka vietnei ir grūtības ielādēt personīgus fontus. Tas ir radīts šāda problēma dēļ servera iestatījumiem, kas blokēu krušējo attiecību (cross-origin block).

Tā kā font faili gandrīz vienmēr tiek ielādēti tieši no CSS, mūsu domānas mapēšanas pluginam nav iespējams pārrakstīt URL adresi, lai izmantotu mapētu domānu vietā, bet nevis oriģinālo. Tāpēc, lai labotu šo problēmu, jums būs jāmodifica servera konfiguracijas faili.

Šie koda fragmenti ir paredzēti, lai atrisinātu problēmu Apache un NGINX serveros. Šie izmaiņas prasa attīstīto zināšanu servera konfiguracijas failu (.htaccess un NGINX konfiguraācijas faili) piemērošanai. Ja jūs nepaliekiet ērti veikt šīs izmaiņas sevi, sūtiet šo lapu savam hostings pakalpojumu atbalsta agentiem, ja jums ir nepieciešama palīdzība.

### Apache

Jums jāievieca šis kodājamajā failā (.htaccess):

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Jums jāievieca šis jūsu servera konfiguraācijas failā (viens vietne atšķiras no otra), pie `location` bloka:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
