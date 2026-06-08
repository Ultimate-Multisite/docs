---
title: Kode-snippets
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kode-snippets vir v2

Basies word kode-snippets vir **WordPress** gebruik om sekere aksies uit te voer wat andersins 'n toegewyde, kleiner plugin sou vereis. Sulke kode-snippets word in een van die WordPress-kern- of tema-lêre geplaas (gewoonlik die `functions.php` lêer van jou tema) of hulle kan as 'n MU plugin gebruik word.

In hierdie artikel sal ons drie kode-snippets wys wat met **Ultimate Multisite v2** gebruik kan word:

  * [**Verander die posisie van die Account-item in die menu**](#changing-the-position-of-the-account-menu-item)

  * [**Hoe om te kyk of die gebruiker onder 'n gegewe plan is en/of 'n aktiewe abonnement het**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Regstel CORS-probleme met Font-Icons in gemapte domeine**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Verander die posisie van die Account-menu-item

Om die posisie van die Account-menu-item op jou kliënt se Dashboard te verander, voeg bloot die volgende kode-snippet by die `functions.php` van jou hoofwebwerf se aktiewe tema. Jy kan die snippet ook binne een van jou mu-plugins of aangepaste plugins plaas.

add_filter('wu_my_account_menu_position', function() { return 10; // Pas hierdie waarde aan om die menu in die gewenste posisie te plaas.

## Hoe om te kyk of die gebruiker onder 'n gegewe plan is en/of 'n aktiewe abonnement het

As 'n netwerkbeheerder het jy dalk aangepaste funksies nodig wat basiese aksies sal uitvoer of 'n diens/funksie beskikbaar sal maak vir 'n geselekteerde groep abonnees of eindgebruikers, gebaseer op die status van hul abonnement en die plan waaronder hulle abonneer.

Hierdie Ultimate Multisite-natuurlike funksies sal jou help daarmee.

Om te kyk of die gebruiker 'n lid van 'n gegewe plan is, kan jy die funksie gebruik:

wu_has_plan($user_id, $plan_id)

Om te kyk of die abonnement aktief is, kan jy die funksie gebruik:

wu_is_active_subscriber($user_id)

Hieronder is 'n voorbeeld-snippet wat nagaan of die huidige gebruiker onder 'n spesifieke plan (_Plan ID 50_) is en of die gebruiker se abonnement aktief is.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // GEBRUIKER IS LID VAN PLAN EN SY ABONNEMENT IS AKTIEF, DO DIT} else { // GEBRUIKER IS GEEN LID VAN PLAN -- OF -- SY ABONNEMENT IS NIE AKTIEF, DO ANDER DIT} // einde if;

Let op dat **wu_has_plan** 'n "Plan ID" vereis om te funksioneer.

Om die ID van 'n plan te kry, kan jy na **Ultimate Multisite > Products** gaan. Die ID van elke produk sal aan die regterkant van die tabel getoon word.

Let op dat gebruikers slegs aan 'n **Plan** kan abonneer, nie 'n Pakket of Diens nie, aangesien laasgenoemde slegs byvoegings is vir 'n **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Regstel CORS-probleme met Font-Icons in gemapte domeine
## Regstel CORS-probleme met Font-Icons in gemapte domeine

Nadat jy 'n domein aan 'n sub-webwerf gemap het, kan jy ontdek dat die webwerf probleme het om aangepaste lettertipes te laai. Dit word veroorsaak deur 'n cross-origin blokkering op jou bedienersinstellings.

Aangesien lettertip-lêre byna altyd direk van CSS gelaai word, is ons domein-mapping plugin nie in staat om die URL's te herskryf om die gemapte domein te gebruik in plaas van die oorspronklike een nie, sodat om die probleem reg te stel, moet jy jou bedienerskonfigurasie-lêre aanpas.

Hieronder is kode-snippets om die probleem vir Apache en NGINX reg te stel. Hierdie veranderinge vereis gevorderde kennis van bedienerskonfigurasie-lêre (.htaccess lêers en NGINX konfigurasie-lêre). As jy nie gemaklik voel om daardie veranderinge self te maak nie, stuur hierdie bladsy na jou hosting-verskaffer se ondersteuningsagent as jy hulp benodig.

### Apache

Voeg op jou .htaccess lêer by:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Voeg op jou bedienerskonfigurasie-lêer (die ligging verskil van bedieners na bedieners) by:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
