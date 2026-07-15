---
title: Կոդի հատվածներ
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets for v2

Հիմնականում, **WordPress**-ի համար կոդային հատվածները օգտագործվում են որոշակի գործողություններ կատարելու համար, որոնք հաճախ պահանջում են առանձին փոքր plugin։ Այս կոդային հատվածները տեղադրվում են WordPress-ի մի կոռ (core) կամ թեմայի (theme) ֆայլերից (հիմնականում՝ ձեր թեմայի functions.php ֆայլից), կամ դրանք կարելի է օգտագործել որպես MU plugin։

Այս հոդվածում մենք կցույց տանք երեք կոդային հատված, որոնք կարելի է օգտագործել **Ultimate Multisite v2**-ի հետ.

  * [**Հաշվի (Account) մենյու տարրի դիրքը փոխելը**](#changing-the-position-of-the-account-menu-item)

  * [**Ինչպես ստուգել, թե արդյոք օգտվողը գտնվում է տրված պլանի ներքո և/կամ ունի ակտիվ բաժանորդագրություն**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**CORS խնդիրները լուծել Font-Icons-ի հետ քարտեզագրված ադմիններում**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Հաշվի (Account) մենյու տարրի դիրքը փոխելը {#changing-the-position-of-the-account-menu-item}

Ձեր հաճախորդի Dashboard-ի վրա Account մենյու տարրի դիրքը փոխելու համար, պարզապես ավելացրեք հետևյալ կոդային հատվածը ձեր հիմնական սայթի ակտիվ թեմայի functions.php-ում։ Կարող եք նաև տեղադրել այս հատվածը մեկ MU plugin-ի կամ custom plugin-ի ներսում։

add_filter('wu_my_account_menu_position', function() { return 10; // Ստուգեք այս արժեքը՝ մենյուն դնելու ցանկալի դիրքում։

Ստուգելու համար, թե արդյոք բաժանորդագրությունը ակտիվ է, կարող եք օգտագործել հետևյալ ֆունկցիան.

`wu_is_active_subscriber($user_id)`

Ստորև տրված է օրինակ հատվածը, որը ստուգում է, թե արդյոք ընթացիկ օգտվողը գտնվում է կոնկրետ պլանի ներքո (_Plan ID 50_) և արդյոք օգտվողի բաժանորդագրությունը ակտիվ է։

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // Օգտվողը պլանի անդամ է և նրա բաժանորդագրությունը ակտիվ է, անել այս գործողությունները } else { // Օգտվողը պլանի անդամ չէ կամ նրա բաժանորդագրությունը ակտիվ չէ, անել այլ գործողություններ } // վերջ`

Նշում. `_**wu_has_plan**_` ֆունկցիան աշխատելու համար պահանջում է «Plan ID»։

Պլանի ID-ն ստանալու համար կարող եք գնալ **Ultimate Multisite > Products**-ին։ Յուրաքանչյուր արտադրանքի ID-ն կցուցադրվի աղյուսակի աջ կողմում։

Նշում. օգտվողները կարող են բաժանորդագրվել միայն **Plan**-ին, այլ ոչ թե Package-ին կամ Service-ին, քանի որ դրանք պարզապես **Plan**-ի լրացուցիչ տարրեր են։

![Products list showing plan IDs](/img/admin/products-list.png)

## CORS խնդիրների լուծում Font-Icons-ով ըստ քարտեզագրված ադմիների {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## CORS խնդիրների լուծում Font-Icons-ով ըստ քարտեզագրված ադմիների {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Երբ դոմենը կապում եք ենթա-сайтի հետ, կարող եք հայտնաբերել, որ սайտը խնդիրներ ունի հատուկ տառատեսակների (custom fonts) բեռնելու մեջ։ Սա առաջանում է ձեր սերվերի կարգավորումներով կրոս-օրիգինային արգելքից (cross-origin block)։

Քանի որ տառատեսակի ֆայլերը գրեթե միշտ բեռնվում են ուղղակի CSS-ից, մեր դոմեն քարտեզագրման plugin-ը չի կարող URL-ները վերագրել՝ օգտագործելով քարտեզագրված ադմինը փոխարեն սկզբնականը։ Հետևաբար, խնդիրը լուծելու համար անհրաժեշտ կլինի ձեր սերվերի կոնֆիգուրացիայի ֆայլերը փոփոխել։

Apache

Ձեր .htaccess ֆայլում ավելացրեք հետևյալը.

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

NGINX

Ձեր սերվերի կոնֆիգուրացիոն ֆայլում (տեղը տարբեր է սերվերից սերվեր) ավելացրեք.

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
