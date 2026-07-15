---
title: Fragmenta codicis
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Fragmenta de cod pentru v2

În esență, fragmentele de cod pentru **WordPress** se folosesc pentru a realiza anumite acțiuni care altfel ar putea necesita un plugin dedicat mai mic. Aceste fragmente de cod sunt plasate în unul dintre fișierele de bază WordPress sau tema ta (de obicei, fișierul functions.php al temei tale) sau pot fi folosite ca un MU plugin.

În acest articol vă vom arăta trei fragmente de cod pe care le puteți folosi cu **Ultimate Multisite v2**:

  * [**Modificarea poziției elementului de meniu Cont**](#changing-the-position-of-the-account-menu-item)

  * [**Cum să verifici dacă utilizatorul se află sub un plan dat și/sau are o abonare activă**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Corectarea problemelor CORS cu Font-Icons în domenii mapate**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Modificarea poziției elementului de meniu Cont {#changing-the-position-of-the-account-menu-item}

Pentru a schimba poziția elementului de meniu Cont pe Dashboard-ul clientului tău, pur și simplu adaugă fragmentele de cod următoare în fișierul functions.php al temei principale a site-ului tău active. Poți pune fragmentele de cod în interiorul unui MU plugin sau al unui plugin personal.

add_filter('wu_my_account_menu_position', function() { return 10; // Ajustează această valoare pentru a plasa meniul în poziția dorită.

Adneque si abonamentum est activum, potes uti functionem:

`wu_is_active_subscriber($user_id)`

Hic est exemplum snippet quod videt si usor actuel sub plan specifico (_Plan ID 50_) est et si abonamentus usoris est activum.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USOR EST MEMBRUM PLANIS ET SUBSCRIPTIONIS EST ACTIVUM, FAC EST} else { // USOR NON EST MEMBRUM PLANIS -- AUT -- SUBSCRIPTIONIS NON EST ACTIVUM, FAC ALIAM RECTAMITUR} // finis if;`

Nota quod `_**wu_has_plan**_` necesse est "Plan ID" ut operari possit.

Ad ID planum obtinere, potes ire ad **Ultimate Multisite > Products**. ID omni productus in dextra tabula ostendetur.

Nota quod utentes solum in **Plan** subscribi possunt, non in Package vel Service, quia sunt solum addenda ad **Plan**.

![Lista Productuum ostendens plan IDs](/img/admin/products-list.png)

## Rectificatio problematicarum CORS cum Font-Icons in domibus mappatis {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Rectificatio problematicarum CORS cum Font-Icons in domibus mappatis {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Postquam domenum ad sub-site mappas, potes invenire quod situs in difficoltate est ladenis fontium customium. Hoc causatum est bloc by cross-origin in parametris serveris tuis.

Quia file fontium quasi semper directum ex CSS loquuntur, plugin mappae domini nostrum non potest redigere URLs ut usum domenii mappati in lugarine originale, ita ut problematicam rectificare necesse tibi est modificare files configuration serveris tuorum.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

In tu archivo .htaccess, añade esto:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

En tu archivo de configuración del servidor (la ubicación varía de servidor a servidor), añade esto:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
