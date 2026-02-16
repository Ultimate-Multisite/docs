---
title: Mga Code Snippet
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Mga Code Snippet para sa v2

Sa pangkalahatan, ang mga code snippet para sa **WordPress** ay ginagamit upang gawin ang ilang mga aksyon na maaaring mangailangan ng isang mas maliit na dedikadong plugin. Ang mga ganitong code snippet ay inilalagay sa isa sa mga core o theme file ng WordPress (karaniwang sa functions.php file ng iyong theme) o maaari rin silang gamitin bilang MU plugin.

Sa artikulong ito, ipapakita namin sa iyo ang tatlong code snippet na maaaring gamitin sa **Ultimate Multisite v2**:

  * [**Pagbabago ng posisyon ng Account menu item**](#changing-the-position-of-the-account-menu-item)

  * [**Paano suriin kung ang user ay nasa ilalim ng isang partikular na plan at/o may aktibong subscription**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Pag-aayos ng mga isyu sa CORS gamit ang Font-Icons sa mga naka-map na domain**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Pagbabago ng posisyon ng Account menu item

Upang baguhin ang posisyon ng Account menu item sa Dashboard ng iyong kliyente, idagdag lamang ang sumusunod na code snippet sa functions.php ng aktibong theme ng iyong main site. Maaari mo ring ilagay ang snippet sa loob ng isa sa iyong mga mu-plugin o custom plugin.

add_filter('wu_my_account_menu_position', function() { return 10; // Baguhin ang value na ito upang ilagay ang menu sa gustong posisyon.

## Paano suriin kung ang user ay nasa ilalim ng isang partikular na plan at/o may aktibong subscription

Bilang network admin, maaaring kailanganin mong lumikha ng mga custom function na magsasagawa ng mga pangunahing aksyon o magbibigay ng serbisyo/feature sa isang napiling grupo ng mga subscriber o end-user, batay sa status ng kanilang subscription at sa plan kung saan sila naka-subscribe.

Ang mga native function na ito ng Ultimate Multisite ay makakatulong sa iyo.

Upang suriin kung ang user ay miyembro ng isang partikular na plan, maaari mong gamitin ang function na:

wu_has_plan($user_id, $plan_id)

Upang suriin kung aktibo ang subscription, maaari mong gamitin ang function na:

wu_is_active_subscriber($user_id)

Nasa ibaba ang isang halimbawang snippet na sumusuri kung ang kasalukuyang user ay nasa ilalim ng isang partikular na plan (_Plan ID 50_) at kung aktibo ang subscription ng user.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ANG USER AY MIYEMBRO NG PLAN AT AKTIBO ANG KANYANG SUBSCRIPTION, GAWIN ANG MGA AKSYON} else { // ANG USER AY HINDI MIYEMBRO NG PLAN -- O -- HINDI AKTIBO ANG KANYANG SUBSCRIPTION, GAWIN ANG IBANG MGA AKSYON} // end if;

Tandaan na ang _**wu_has_plan**_ ay nangangailangan ng "Plan ID" upang gumana.

Upang makuha ang ID ng isang plan, pumunta sa **Ultimate Multisite > Products**. Ang ID ng bawat produkto ay ipapakita sa kanang bahagi ng talahanayan.

Tandaan na ang mga user ay maaari lamang mag-subscribe sa isang **Plan**, hindi sa Package o Service, dahil ang mga ito ay mga add-on lamang para sa isang **Plan**.

![Listahan ng mga produkto na nagpapakita ng mga plan ID](/img/admin/products-list.png)

## Pag-aayos ng mga isyu sa CORS gamit ang Font-Icons sa mga naka-map na domain

Pagkatapos i-map ang isang domain sa isang sub-site, maaaring makita mong nahihirapan ang site na mag-load ng mga custom font. Ito ay sanhi ng cross-origin block sa mga setting ng iyong server.

Dahil ang mga font file ay halos palaging direktang nilo-load mula sa CSS, ang aming domain mapping plugin ay hindi kayang i-rewrite ang mga URL upang gamitin ang naka-map na domain sa halip na ang orihinal, kaya upang ayusin ang isyu, kakailanganin mong baguhin ang mga configuration file ng iyong server.

Nasa ibaba ang mga code snippet upang ayusin ang isyu para sa Apache at NGINX. Ang mga pagbabagong ito ay nangangailangan ng advanced na kaalaman sa mga server configuration file (mga .htaccess file at NGINX config file). Kung hindi ka komportable sa paggawa ng mga pagbabagong ito sa iyong sarili, ipadala ang pahinang ito sa mga support agent ng iyong hosting provider kapag humihingi ng tulong.

### Apache

Sa iyong .htaccess file, idagdag ang:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

Sa iyong server config file (nag-iiba-iba ang lokasyon depende sa server), idagdag ang:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
