---
title: Mga Sipi ng Code
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Mga Code Snippet para sa v2

Sa madaling salita, ang mga code snippet para sa **WordPress** ay ginagamit para gawin ang ilang partikular na aksyon na kung minsan ay nangangailangan ng isang hiwalay at mas maliit na plugin. Ang mga code snippet na ito ay inilalagay sa isa sa core file o theme file ng WordPress (karaniwan ay ang functions.php file ng iyong theme) o maaari itong gamitin bilang isang MU plugin.

Sa artikulong ito, ipapakita namin sa iyo ang tatlong code snippet na magagamit kasama ang **Ultimate Multisite v2**:

  * [**Pagbabago sa posisyon ng Account menu item**](#changing-the-position-of-the-account-menu-item)

  * [**Paano malalaman kung ang user ay nasa ilalim ng isang partikular na plano at/o may aktibong subscription**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Pag-aayos ng CORS issues sa Font-Icons sa mga naka-map na domain**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Pagbabago sa posisyon ng Account menu item

Para baguhin ang posisyon ng Account menu item sa Dashboard ng iyong kliyente, i-add lang ang sumusunod na code snippet sa functions.php ng active theme ng iyong pangunahing site. Maaari mo ring ilagay ang snippet sa loob ng isa sa iyong mu-plugins o custom plugins.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Ayusin ang value na ito para ilagay ang menu sa nais mong posisyon.
```

## Paano malalaman kung ang user ay nasa ilalim ng isang partikular na plano at/o may aktibong subscription

Bilang network admin, maaaring kailanganin mo ng mga custom function na magpapatupad ng mga pangunahing aksyon o magbigay ng serbisyo/feature sa isang piling grupo ng subscribers o end-users, batay sa status ng kanilang subscription at ang plan kung saan sila naka-subscribe.

Ang mga Ultimate Multisite native functions na ito ay tutulong sa iyo diyan.

Para malaman kung ang user ay miyembro ng isang partikular na plano, maaari mong gamitin ang function na ito:

`wu_has_plan($user_id, $plan_id)`

Para malaman kung aktibo ang subscription, maaari mong gamitin ang function na ito:

`wu_is_active_subscriber($user_id)`

Narito ang isang halimbawa ng snippet na tinitingnan kung ang kasalukuyang user ay nasa ilalim ng isang partikular na plano (_Plan ID 50_) at kung aktibo ang subscription ng user.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ANG USER AY MIYEMBRO NG PLAN AT AKTIBO ANG SUBSCRIPTION NIYA, GAWIN ITO } else { // ANG USER AY HINDI MIYEMBRO NG PLAN -- O -- HINDI AKTIBO ANG SUBSCRIPTION NIYA, GAWIN IBA` // end if;`

Tandaan na ang `_**wu_has_plan**_` ay nangangailangan ng isang "Plan ID" para gumana.

Para makuha ang ID ng isang plano, maaari kang pumunta sa **Ultimate Multisite > Products**. Ang ID ng bawat produkto ay makikita sa kanang bahagi ng table.

Tandaan na ang mga user ay maaaring mag-subscribe lamang sa isang **Plan**, hindi sa Package o Service, dahil sila ay add-ons lang para sa isang **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Pag-aayos ng CORS issues gamit ang Font-Icons sa mga naka-map na domain
## Pag-aayos ng CORS issues gamit ang Font-Icons sa mga naka-map na domain

Pagkatapos mong i-map ang isang domain sa isang sub-site, baka mapansin mo na may problema ang site sa pag-load ng custom fonts. Ito ay dahil sa cross-origin block sa iyong server settings.

Dahil ang font files ay halos palaging direktang ina-load mula sa CSS, hindi kayang i-rewrite ng ating domain mapping plugin ang mga URL para gamitin ang naka-map na domain sa halip na sa orihinal, kaya para maayos ang isyu, kailangan mong baguhin ang iyong server configuration files.

Para ayusin ang isyu na ito para sa Apache at NGINX, narito ang mga code snippet. Ang mga pagbabagong ito ay nangangailangan ng advanced na kaalaman sa server configuration files (.htaccess files at NGINX config files). Kung hindi ka komportable na gawin ang mga pagbabagong iyon mo mismo, ipadala ang pahinang ito sa support agents ng iyong hosting provider kapag humihingi ka ng tulong.

### Apache

Sa iyong .htaccess file, idagdag ito:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Sa iyong server config file (ang lokasyon nito ay nag-iiba depende sa server), idagdag ito:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
