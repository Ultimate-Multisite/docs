---
title: Kódar
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kodarmiðir fyrir v2

Í grunninn eru code snippets fyrir **WordPress** notaðir til að gera sérstaka aðgerðir sem átt við þurfa sérstaklega sjálfan plugin. Þessar code snippets eru staðsett í einum af kjarnafylgjum WordPress eða þema (almennt í `functions.php` fylkim þíns þema) eða þeir geta verið notað sem MU plugin.

Í þessari greininum sýnam við þér þrjár code snippets sem gætu verið notað með **Ultimate Multisite v2**:

  * [**Að breyta stöðu menútilboðar reikninga**](#changing-the-position-of-the-account-menu-item)

  * [**Hvernig að skoða hvort notandinn sé undir gittum plan og/eða hefur aktivt skýrslu**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Að lausa CORS-þróunarsvæði með Font-Icons í mappa dómum**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Að breyta stöðu menútilboðar reikninga

Til að breyta stöðu menútilboðar reikninga á Dashboard þíns viðskiptavina, bastað bara eftir að bæta eftir følgjandi code snippet í `functions.php` fylkim þema sem er aktivt á hlutinn. Þú getur einnig stórt snippet inn í eitt af MU pluginum þínum eða sérstökum pluginum.

add_filter('wu_my_account_menu_position', function() { return 10; // Breytð þennan gildi til að setja menúinn á önskuleg stöðu.

Til að spyrja hvort er skýrslu (subscription) aktiv, geturðu nota þennan eins og:

`wu_is_active_subscriber($user_id)`

Hér er dæmi um snið sem skynjur hvort notandinn sé undir sérstakri plani (_Plan ID 50_) og hvort skýrslu notandans sé aktiv.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // NOTANDINN ER MEÐ PLANIN OG SKÝRSLA HANNAR ER AAKTIV, GERA ÞAÐ` else { // NOTANDINN ER EINN MEÐ PLANIN -- ELLER -- SKÝRSLA HANNAR ER EINN AAKTIV, GERA ÖNNU ÞAÐ}`

Athugiðu að `_**wu_has_plan**_` þarf „Plan ID“ til að virka.

Til að fá ID planins, geturðu ferðist í **Ultimate Multisite > Products**. ID hverrar auðlindar (product) sýnist á höndum ymisins.

Athugiðu að notendur gætu bara skýrslu (Plan) skráð í, ekki pakka eða þjónustu, þar sem þau eru bara viðbót fyrir **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Lögð upp CORS-þróun á Font-Icons í mappaðum vöndum
## Lögð upp CORS-þróun á Font-Icons í mappaðum vöndum

Eftir að mappa vönd (domain) yfir á sub-site geturð þú verið í því að hljómsveitinn er ekki fær í að ladda sérstök fontar. Þetta er vegna þess að cross-origin blokk er sett í þarfirinn þínum serverinnstillingum.

Eftir að fontafile ræðið er oft ladið beint úr CSS, getur ekki mappa vöndin mappað URL-ar til notkun með mappaðri vöndinni í stað upprunalinn, svo þú þar sem lausa þetta þarfurðu að breyta serverstillingum þínum.

Til að lausa þennan vanda fyrir Apache og NGINX þarf þessar breytingar að þekkingu á uppsetningum servera (í .htaccess og NGINX config files). Ef þú ert ekki hönnuð til að gera þessar breytingar sjálfur, sendu þetta síðu til stuðlingsstjórnar hjá hostingsveitmanninum þegar þú þarft hjálp.

### Apache

Í .htaccess lausnu þína skrá, bæti við:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Í uppsetningarskrá serverinnar (staðsetningur skráinnar er að breytast eftir serveri) bæti við:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
