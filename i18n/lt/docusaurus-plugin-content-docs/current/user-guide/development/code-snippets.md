---
title: Kodų fragmentai
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kodų fragmentai v2

Pagrindinis požiūris yra tas, kad **WordPress** kodų fragmentai naudojami atlikti įvairius veiksmus, kuriems gali reikėti veikt specializuotas mažas pluginas. Šiuos kodų fragmentus galima pateikti viename WordPress core ar temo failu (bendriai jūsų temo `functions.php` failui) arba jie gali būti naudojami kaip MU pluginas.

Šiame straipsnyje pateiksime tris kodų fragmentus, kuriuos galite naudoti su **Ultimate Multisite v2**:

  * [**Mokėjimo meniu žymybės pozicijos keitimas**](#changing-the-position-of-the-account-menu-item)

  * [**Kaip patikrinti, ar vartotojas yra nurodyto planui ir/arba turi aktyvų prenumeratą**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**CORS problemų iššvinimas su Font-Icons nurodytos domenų viduje**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Mokėjimo meniu žymybės pozicijos keitimas {#changing-the-position-of-the-account-menu-item}

Kad pakeisti Mokėjimo meniu žymybės poziciją jūsų klientų Dashboard'e, visai vienu pridėkite šį kodų fragmentą į jūsų pagrindinio svetainės aktyvumo temo `functions.php` failą. Galite taip pat pateikti fragmentą viename iš savo mu-pluginų ar pritaikytų pluginų.

add_filter('wu_my_account_menu_position', function() { return 10; // Pakeiskite šią vertę, kad meniu būtų pateikta norimo pozicijoje.

Jei norisini patikrinim, arcinis aktyvumas, galite naudoti funkciją:

`wu_is_active_subscriber($user_id)`

Štai pavyzdinis skriptas, kuris patikrina, ar dabartinis vartotojas yra nurodyto planui (_Plan ID 50_) ir ar vartotojo prenumerata yra aktyvi.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // Vartotojas yra nurodyto planui ir jo prenumerata yra aktyvi, atlikkite veiksmus } else { // Vartotojas nėra nurodyto planui -- AR -- jo prenumerata nėra aktyvi, atlikkite kitus veiksmus } // galo if;`

Paminėkite, kad `_**wu_has_plan**_` reikalauja „Plan ID“, kad galėtų veikti.

Kad gauti planui ID, galite eiti į **Ultimate Multisite > Products**. Kiekvieno produkto ID bus rodomas pusėje table.

Paminėkite, kad vartotojai gali prenumeruoti tik **Planą**, o ne Paketą ar Paslaugą, nes jie yra tik papildomai planui.

![Produkto sąrašas rodo planų ID](/img/admin/products-list.png)

## CORS problemų atšalinimas su Font-Icons įmappedaus domenų {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## CORS problemų atšalinimas su Font-Icons įmappedaus domenų {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Po domenų įmaito sub-saitą galite nustatyti, kad svetaine trudra įkelti pritaikytus fontus. Tai vykta dėl cross-origin blokavimo jūsų serverio nustatymuose.

Kadangi fontų failai praktiškai visada įkeldami tiesiog iš CSS, mūsų domenų įmaito pluginas negali perrašyti URL adresų, kad naudotų įmappedą domeną vietoj originalio, todėl, kad galėtumėte atšalinti šią problemą, jums reikės pakeisti savo serverio konfigūracijos failus.

Šie kodų fragmentai skirti problemui, kurį reikia išspręsti Apache ir NGINX serveriuose. Šios pakeitimai reikalauja gilių žinių apie serverio konfigūracijos failus (.htaccess ir NGINX konfigūracijos failai). Jei jūs nepatogiai atliksite šias pakeitimus, siųskite šią puslapį savo hostingo paslaugų agentams, jei jums reikalinga pagalba.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Jūsų .htaccess failui pridėkite:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Jūsų serverio konfigūracijos failui (vieta skiriasi nuo serverui į serverį) pridėkite:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
