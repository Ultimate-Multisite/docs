---
title: Nkwado Code
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets for v2

Bara na, code snippets na WordPress-e nwere ihe ndị ọrụ ịbụghị ọrụ ndị ọzọ dị ka plugin ọkụ dị. Ọ bụrụ na a gbanwe code snippets ndị a n'ime file core WordPress na theme-nụ (nidi ọ bụla, functions.php file nke theme-nụ tusi), ma ọ bụ nwere ike ịnwurọ dịka MU plugin.

Nye ihe nrirobi a, anyị ga-eme ka ị chọrọ code snippets abụọ ndị na Ultimate Multisite v2:

  * [**Gbanwe oge nke Account menu item**](#changing-the-position-of-the-account-menu-item)

  * [**Ọ bụrụ na user onye ahụ n'ime plan ọ bụla ma ọ bụ nwere subscription a dị, ka ị chọrọ ịchekwa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Nche ihe CORS na Font-Icons na domain ndị ọzọ anọ**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Gbanwe oge nke Account menu item {#changing-the-position-of-the-account-menu-item}

Ọ bụrụ na ị chọrọ gbanwe oge nke Account menu item n'ime Dashboard nke client-nụ gị, jikwa code snippet a dị n'ime functions.php file theme mụ site-nụ gị. Ị chụrụ code snippet a n'ime otu na MU plugin na custom plugins ọ bụla.

add_filter('wu_my_account_menu_position', function() { return 10; // Gbanwe ihe a dị n'ime value ahụ ka ịwurọ menu ahụ n'ime oge ị chọrọ.

Na ị chọpụta ọ bụ active subscription ahụ, ị ga-asịka function a:

wu_is_active_subscriber($user_id)

Agoo bụ ihe atụ maka code ọkụkọ dị n'ụzọ:

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Biko ka ị maara na _**wu_has_plan**_ ọ ga-anọchi "Plan ID" ahụ ka ọ ga-arịrụ.

Ọ bụrụ na ị chọrọ ID nke plan, ị ga-asịka ịkpọ **Ultimate Multisite > Products**. ID nke ogniye ọ bụ n'ere a n'ere akụkọ ahụ.

Biko ka maara na ndị mmadụ nwere ike ịbụ subscription n'ụ **Plan** karịrị, ma ọ bụ Package ma Service, karịrị, karano ha bụ ihe ndị nwere ike ịdị n'ụ Plan.

![Products list showing plan IDs](/img/admin/products-list.png)

## Ọ dị mma maka CORS issues na Font-Icons na mapped domains {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Ọ dị mma maka CORS issues na Font-Icons na mapped domains {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Ọ bụrụ na ị maara domain ahụ n'ụ sub-site, ị ga-anọchi na site ahụ gị proble na ịloading custom fonts. Oge a bụ onye anọchịrị cross-origin block na server settings-ie.

Biko ka ọkụkọ font files dị n'ụzọ ọ bụla loading direct from CSS, plugin domain mapping anyị ga-anọchi ịgbagba URLs ahụ ka ọ ga-arịrụ use the mapped domain instead of original one. Karịrị maka ịgba ọsọ ihe a, ị ga-asịka ịchange your server configuration files.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Na .htaccess file-nne, add:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Na server config file-nne (location na-akara na-akara n'server), add:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
