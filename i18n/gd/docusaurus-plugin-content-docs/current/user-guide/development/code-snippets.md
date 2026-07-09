---
title: Còd Snipeannach
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets airson v2 {#code-snippets-for-v2}

Gach code snippet airson **WordPress** a' bhainean a tha a' chuidich eadar-dhearg a tha thuig a thgoinneamh. Mar sin, tha sinn a' chleachdadh an code snippets seo anns am fhadraidh de WordPress (a thàinig an fhathair functions.php de thiamh agad) no faicinn a' chleachdadh mar MU plugin.

An t-am astain, rinn am ceann code snippet sin a tha a' chleachdadh le **Ultimate Multisite v2**:

  * [**Chlàradh an posad na meall an Account menu item**](#changing-the-position-of-the-account-menu-item)

  * [**Còmhraidh airson faicinn gu siostama a tha an neach-oileach ann agus/n'a tha e cur-aithreachadh a' sealltain**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Ceannachadh earrachais CORS le Font-Icons anns na domainhean a tha a' cur-aithreachadh**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Chlàradh an posad na meall an Account menu item {#changing-the-position-of-the-account-menu-item}

 airson chlàradh an posad na meall an Account menu item ar Dashboard a th' iadair, dìreach leugh an code snippet seo a' chleachdadh anns an functions.php de thiamh sin a tha a' sealltain. Is e air a fhadraidh an snippet seo a' chlàradh anns am mu-plugin no plugin a' chuidich.

add_filter('wu_my_account_menu_position', function() { return 10; // Chlàradh an fhadaiche sin airson posad a tha thuig a thgoinneamh.

Chan eil a bhith a bhith beag airson a bhith a' cheannachadh gu WordPress.

Tha eadar-dheargadh an fhoiclas:

wu_is_active_subscriber($user_id)

Sealladh seo chan eil a' cheannach an obair.

Sealladh seo, tha eadar-dheargadh a' cheannachadh gu sgaidhligan (plan) a tha a' cheannach an t-ùisgeil (subscription).

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Note: Tha **wu_has_plan** a' deghinn a "Plan ID" airson eadar-dheargadh.

Tha an t-ID air a bhith agad airson plan a raibh thu a' cheannach. Is e an t-ID air a bhith agad ann an curteas: **Ultimate Multisite > Products**. Bidh an t-ID de chùis each air a' chùis ar a' curteas a' ghrian.

Note: Aerthaich a tha thu a' cheannach gu **Plan**, ach cha thu a bhith a' cheannach gu Package (pàc) no Service, agus tha thu beag-aon airson Plan.

![Products list showing plan IDs](/img/admin/products-list.png)

## Amhdan CORS issues le Font-Icons ar domain sinneachd {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Amhdan CORS issues le Font-Icons ar domain sinneachd {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Tha eadar-dheargadh an t-ùisgeil air a bhith agad airson sgaidhlig (sub-site), tha thu a' cheannach gun a bhith ag obair gu sgaidhligan font. Tha seo a' cheannach de chùl-aon (cross-origin block) ar fhaighinn an t-àiteachan font air a' chùisiche server.

Air a tha faighinn tòisichichean font gu sòn gu CSS, cha tha an plugin sinneachd domain sinneachd a' cheannach an t-àiteachan (URLs) airson a bhith a' cheannach an domain sinneachd air a' chùisiche a tha a' cheannach. Mar sin, gus an tòisichichean a' cheannachadh, rinn thu a' cheannach ar fhaighinn curteas server.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Ar tuo .htaccess file, add an:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Ar tuo server config file (le locant varia de server a server), add:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
