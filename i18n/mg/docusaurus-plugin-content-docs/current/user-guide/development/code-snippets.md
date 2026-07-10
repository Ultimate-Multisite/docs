---
title: Teny an-tsipika
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets ho an'ny v2 {#code-snippets-for-v2}

Amin'ny ankapobeny, ny code snippets ho an'ny **WordPress** dia ampiasaina mba hanaovana asa sasany izay mety mila plugin kely manokana. Ity code snippets ity dia apetraka ao amin'ny rakitra fototra na ny loha-taranaka (theme) anao (matetika ny rakitra functions.php an'ny theme anao), na azo ampiasaina ho MU plugin izany koa.

Ao anatin'ity lahatsoratra ity dia haneho antsika code snippets telo izay azo ampiasaina amin'ny **Ultimate Multisite v2** :

  * [**Fanovana ny toerana misy ny menu Account**](#changing-the-position-of-the-account-menu-item)

  * [**Ahoana no hanamarinana raha eo ambanin'ny plan iray ny mpampiasa ary/na manana fandraisana (subscription) mavitrika**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Fanamboarana olana CORS miaraka amin'ny Font-Icons ao amin'ny domain mifandray (mapped domains)**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Fanovana ny toerana misy ny menu Account {#changing-the-position-of-the-account-menu-item}

Mba hanovana ny toerana misy ny menu Account eo amin'ny Dashboard an'ny mpanjifa anao, dia ampiana ity code snippet ity ao amin'ny functions.php an'ny theme lehiben'ny tranokala anao fotsiny. Afaka apetraka koa ianao ao anatin'ny mu-plugin na custom plugin iray aminareo.

add_filter('wu_my_account_menu_position', function() { return 10; // Ovay ity sandana ity mba hapetraka eo amin'ny toerana tianao ny menu.

## Ahoana no hanamarinana raha ao anaty plan iray ny mpampiasa ary/na manana fandraisana (subscription) mavitrika {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Ho administrator an-drafitra (network admin), mety mila mamorona functions manokana ianao izay hanao asa fototra na hanome tolotra/feature iray ho an'ny vondron'ny mpandray anjara (subscribers) na mpampiasa farany voafidy, miankina amin'ny sata ny fandraisana azy sy ny plan izay ananany.

Ireo functions native an'ny Ultimate Multisite dia hanampy anao amin'izany.

Mba hanamarinana raha mpikambana ao anatin'ny plan iray ny mpampiasa, azona ampiasaina ity function ity:

wu_has_plan($user_id, $plan_id)

Mba hanamarinana raha mavitrika ny abonnement ve ianao dia afaka mampiasa ity function ity:

`wu_is_active_subscriber($user_id)`

Ity ohatra iray izay manamarina raha toa ka ao anatin'ny plan manokana (Plan ID 50) ilay mpampiasa ankehitriny ary raha mavitrika ny abonnement an'ilay mpampiasa.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // MPANOMPO ANAO NY PLAN IZY ary mavitrika ny abonnementy, ATAO IZANY } else { // TSY MPANOMPO NY PLAN IZY -- NA -- TSY MAVITRIKA NY ABONNEMENTY, ATAO IZANY ANDRIKASA } // farany`

Tandremo fa mila "Plan ID" ianao mba hanatanterahana ny `_**wu_has_plan**_`.

Mba hahazoana ny ID an'ny plan iray dia afaka mandeha any amin'ny **Ultimate Multisite > Products**. Ny ID an'ilay vokatra dia haseho eo anilan'ny tabilao.

Tandremo fa azo atao ny manome abonnement ho an'ny **Plan** ihany ny mpampiasa, fa tsy Package na Service, satria ireo dia fanampiny (add-ons) ho an'ny **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Fanamboarana olana CORS miaraka amin'ny Font-Icons ao amin'ny domain voafidy {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Fanamboarana olana CORS miaraka amin'ny Font-Icons ao amin'ny domain voafidy {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Rehefa manome domain iray ho sub-site ianao dia mety hahita fa misy olana amin'ny fametrahana fonts manokana ny tranokala. Izany dia vokatry ny fanakana fifandraisana (cross-origin block) ao amin'ny fandrindrana an'ny server anao.

Satria matetika ny rakitra font dia apetaka mivantana avy amin'ny CSS, tsy afaka manova ny URL ny plugin fametrahana domain anay mba hampiasana ny domain voafidy fa mbola mitazona ilay domain voalohany izy. Noho izany, mba hanamboarana ity olana ity dia mila manitsy ireo rakitra fandrindrana server anao ianao.

Ireto ny code snippets mba hanamboarana ny olana ho an'ny Apache sy NGINX. Ireo fanovana ireo dia mitaky fahalalana lalina momba ny rafitry ny server (file .htaccess sy config files NGINX). Raha tsy mahay manao izany ianao, dia alefa ity pejy ity amin'ny mpanohana hosting anao rehefa mila fanampiana.

### Apache {#apache}

Ao amin'ny file `.htaccess` anao, ampiana ireto:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Ao amin'ny server config file anao (miova ny toerana misy azy arakaraka ny server), ampiana ity:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
