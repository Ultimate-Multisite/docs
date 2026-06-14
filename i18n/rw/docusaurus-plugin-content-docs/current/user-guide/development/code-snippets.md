---
title: Urugero rw'ibyo bishobora gukoreshwa
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets ku v2

Muriye, code snippets mu **WordPress** bishobora gukoreshwa kugira ngo yorera ibyo byumva byashobora gutanga uburyo bwo plugin umwe w'ubwujubi. Ibi code snippets bisanzwe bishobora guhagarirwa mu ru rugero rwa WordPress cyangwa mu theme yawe (gusa, mu file functions.php). Cyangwa ushobora gukoresha mu MU plugin.

Mu gihe cyacu twakwibona uburyo bwo code snippets itatu byashobora gukoreshwa na **Ultimate Multisite v2** :

  * [**Gukoresha umuntu w'ubwujubi (Account menu item) uburenganzira**](#changing-the-position-of-the-account-menu-item)

  * [**Uburyo bwo gushobora kumenya niba umuntu yari mu gihe cyose cyangwa agira subscription ikoreshwa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Gukemura ibyemezo byo CORS n'Font-Icons mu gihe cyose cyangwa domain zikoreshwa**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Gukoresha umuntu w'ubwujubi (Account menu item) uburenganzira

Kugira ngo ushage umuntu w'ubwujubi ku Dashboard yawe, uburyo bwo gukoresha code snippet uyu mu file functions.php ya theme yawe ikoreshwa. Uho butera mu MU plugin cyangwa custom plugins zawe.

add_filter('wu_my_account_menu_position', function() { return 10; // Gukora ibi cyo kugira ngo umuntu w'ubwujubi yitanye mu gihe cyose cyangwa uburyo bwo gukoresha.

Kugera kugira ngo uburyo bwo gushyira umwujiza (subscription) wari wumukoresha, ushobora gukoresha ifungwa:

`wu_is_active_subscriber($user_id)`

Hano hari igikorwa cyo gushyira umwujiza uyu munsi umwanditsi (user) ni mu gihe cyose kuri plan ikirimo (Plan ID 50) kandi ko umwujiza we wari wumukoresha.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // UMUNSI WARI MU PLAN kandi UMUJIZA WE WARI WUMUKORESHA, YIBA IGIKORWA CYO GUCYIRA` else { // UMUNSI WARI MU PLAN -- CYO GISHYIRWA KUBWA -- CYO UMUJIZA WE WARI WUMUKORESHA, YIBA IGIKORWA CYO GUCYIRA` } // end if;`

Ushobora gushyira umwujiza uyu munsi (Plan) kugira ngo yorera.

Kugira ID ya Plan, ushobora kwiga ku **Ultimate Multisite > Products**. ID ya product ikurikira itarashyiramo kuri buri gihe cyo mu rubuga.

Ushobora gushyira umwujiza uyu munsi (Plan) gusa, nta Package cyangwa Service, kuko ni ibyo byari ibindi bishobora gutanga ku Plan.

![Products list showing plan IDs](/img/admin/products-list.png)

## Gukemura ibibazo byo CORS n'Font-Icons mu gihe cyo gushyirwa (mapped domains)
## Gukemura ibibazo byo CORS n'Font-Icons mu gihe cyo gushyirwa (mapped domains)

Nyuma yuko wari gushyira domain ikurikira ku sub-site, ushobora kumenya ko uburyo bwo gukoresha fonts zikoreshwa (custom fonts) bishobora guhinduka. Ibi byari byitwarirwa n'ibyo mu gihe cyo gushyira (server settings).

Kuko furi ya font files inshyerwa mu gihe cyose ku CSS, plugin yacu y'domain mapping itagira ubushobozi bwo guhindura URLs kugira ngo zishobore gukoresha domain ikurikira aho kwibandaho uburyo bw'umutera w'inyumbiro (original one). Bityo kugira ngo umubyiruko uyu gihe, ushobora guhindura ibyo mu gihe cyo gushyira (server configuration files).

Iyi ni uburyo bwo gukemura ikibazo cyangwa gukorera ibyo kuri Apache na NGINX. Uru rugero rwa kumenya uburenganzira bw'ubwuga (server configuration files) nk'uko .htaccess files n'NGINX config files. Ngira ko nta muntu wumva gukora uburyo bwo gukemura ibyo mu gihe cyose, ushije icyo cyangwa ugenda ku hosting provider support agents kugira ngo bashobore kukugira umuhombo.

### Apache

Mu .htaccess file yawe, yandika iki:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Mu server config file yawe (iki gice kigira uburyo bwo kubara ku gihe cyose), yandika iki:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
