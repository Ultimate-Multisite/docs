---
title: Mga Code Snippet
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Mga Code Snippets para sa v2 {#code-snippets-for-v2}

Sa laktod, ang mga code snippets para sa **WordPress** ginagamit para himuon ang pipila ka mga aksyon nga basin kinahanglan pa og usa ka mas gamay nga plugin. Ang mga code snippet kining gipangita sa usa sa core files o theme file sa WordPress (kasagaran ang functions.php sa imong theme) o mahimong gamiton isip MU plugin.

Niini nga article ihatag nato ang tulo ka code snippets nga pwede gamiton uban sa **Ultimate Multisite v2**:

  * [**Pagbag-o sa posisyon sa Account menu item**](#changing-the-position-of-the-account-menu-item)

  * [**Unsaon pag-check kung ang user naa ubos sa usa ka plan ug/o adunay aktibo nga subscription**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Pag-ayo sa CORS issues uban sa Font-Icons sa mga mapped domains**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Pagbag-o sa posisyon sa Account menu item {#changing-the-position-of-the-account-menu-item}

Para bag-ohon ang posisyon sa Account menu item sa Dashboard sa imong kliyente, basta i-add lang kini nga code snippet sa functions.php sa active theme sa imong main site. Mahimo usab nimo ibutang ang snippet sulod sa usa sa imong mu-plugins o custom plugins.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## Unsaon pag-check kung ang user naa ubos sa usa ka plan ug/o adunay aktibo nga subscription {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Isip network admin, basin kinahanglan nimo maghimo og custom functions nga magahimo og basic actions o maghatag og serbisyo/feature ngadto sa usa ka piho nga grupo sa mga subscriber o end-users, base sa status sa ilang subscription ug sa plan nga ilang gisuportahan.

Kining Ultimate Multisite native functions makatabang nimo niini.

Aron ma-check kung ang user miyembro sa usa ka plan, pwede nimong gamiton ang function:

`wu_has_plan($user_id, $plan_id)`

Para ma-check kung aktibo ba ang subscription, pwede nimo gamiton ang function:

`wu_is_active_subscriber($user_id)`

Ania ang usa ka example snippet nga nag-check kung ang kasamtang user naa ba sa usa ka specific plan (_Plan ID 50_) ug kung aktibo na ang subscription sa user.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ANG USER MEMBER SA PLAN UG AKTIBO NA ANG SUBSCRIPTION, BUHIN KINI } else { // ANG USER DILI MEMBER SA PLAN -- O -- DILI AKTIBO ANG IYA SUBSCRIPTION, BUHIN KINI } // end if;`

Pahinumdoma nga ang `_**wu_has_plan**_` nagkinahanglan og "Plan ID" para magtrabaho.

Para makuha ang ID sa usa ka plan, pwede kang moadto sa **Ultimate Multisite > Products**. Ang ID sa matag product ipakita sa tuo sa table.

Pahinumdoma nga ang mga user mahimong mag-subscribe lang sa usa ka **Plan**, dili sa Package o Service, kay sila mga add-on ra para sa usa ka **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Pag-ayo sa CORS issues gamit ang Font-Icons sa mga mapped domains {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Fixing CORS issues with Font-Icons in mapped domains {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Paghuman nga na-mapa (mapped) nimo ang usa ka domain ngadto sa sub-site, mahimong makita nimo nga adunay problema ang site sa pag-load og custom fonts. Kini tungod sa cross-origin block sa imong server settings.

Tungod kay ang mga font file halos kanunay nga gi-load direkta gikan sa CSS, dili makahimo ang among domain mapping plugin nga i-rewrite ang URLs aron gamiton ang mapped domain imbes sa original, busa para maayo ang problema, kinahanglan nimo usbon ang imong server configuration files.

Mga code snippets kini para maayo ang problema para sa Apache ug NGINX. Kinahanglan ni nga adunay advanced knowledge sa server configuration files (.htaccess files ug NGINX config files). Kung dili ka komportable sa paghimo niini mismo, ipadala kining page sa inyong hosting provider support agents kung nanginahanglan mo og tabang.

### Apache {#apache}

Sa inyong .htaccess file, i-add kini:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Sa inyong server config file (ang lokasyon nag-usab depende sa server), i-add kini:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
