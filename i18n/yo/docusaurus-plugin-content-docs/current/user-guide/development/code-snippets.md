---
title: Àwọn àjákù Kóòdù
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Àwọn Àpẹẹrẹ Kóòdù fún v2

Ní pàtàkì, àwọn àpẹẹrẹ kóòdù fún **WordPress** ni a máa ń lò láti ṣe àwọn ìṣe kan tí ó lè máa béèrè plugin kékeré pàtó bí kò bá rí bẹ́ẹ̀. Irú àwọn àpẹẹrẹ kóòdù bẹ́ẹ̀ ni a máa ń fi sí ọ̀kan lára àwọn fáìlì core WordPress tàbí fáìlì theme (ní gbogbogbòò fáìlì functions.php ti theme rẹ) tàbí a lè lò wọ́n gẹ́gẹ́ bí MU plugin.

Nínú àpilẹ̀kọ yìí a máa fi àwọn àpẹẹrẹ kóòdù mẹ́ta hàn ọ tí a lè lò pẹ̀lú **Ultimate Multisite v2** :

  * [**Yíyí ipò ohun èlò menu Account padà**](#changing-the-position-of-the-account-menu-item)

  * [**Bí a ṣe lè ṣàyẹ̀wò bóyá olumulo wà lábẹ́ plan kan àti/tàbí ní subscription tó ń ṣiṣẹ́**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Ṣíṣe àtúnṣe àwọn ìṣòro CORS pẹ̀lú Font-Icons nínú àwọn domain tí a map**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Yíyí ipò ohun èlò menu Account padà {#changing-the-position-of-the-account-menu-item}

Láti yí ipò ohun èlò menu Account padà lórí Dashboard oníbàárà rẹ, kan fi àpẹẹrẹ kóòdù tó wà nísàlẹ̀ yìí kún functions.php ti theme tó ń ṣiṣẹ́ lórí site àkọ́kọ́ rẹ. O tún lè fi snippet náà sínú ọ̀kan lára àwọn mu-plugins rẹ tàbí àwọn plugins àdáni.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Bí a ṣe lè ṣàyẹ̀wò bóyá olumulo wà lábẹ́ plan kan àti/tàbí ní subscription tó ń ṣiṣẹ́ {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Gẹ́gẹ́ bí admin network, o lè nílò láti dá àwọn function àdáni tí yóò ṣe àwọn ìṣe ìpilẹ̀ tàbí jẹ́ kí iṣẹ́/àbùdá kan wà fún ẹgbẹ́ kan tí o yan nínú àwọn subscribers tàbí end-users, dá lórí ipò subscription wọn àti plan tí wọ́n subscribe sí lábẹ́ rẹ.

Àwọn function abínibí Ultimate Multisite wọ̀nyí yóò ràn ọ́ lọ́wọ́ pẹ̀lú èyí.

Láti ṣàyẹ̀wò bóyá olumulo jẹ́ ọmọ ẹgbẹ́ plan kan, o lè lo function náà:

wu_has_plan($user_id, $plan_id)

Láti ṣàyẹ̀wò bóyá subscription ń ṣiṣẹ́, o lè lo function náà:

wu_is_active_subscriber($user_id)

Ní ìsàlẹ̀ ni àpẹẹrẹ snippet kan tó ń ṣàyẹ̀wò bóyá olumulo lọwọlọwọ wà lábẹ́ plan kan pàtó (_Plan ID 50_) àti bóyá subscription olumulo náà ń ṣiṣẹ́.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Ṣàkíyèsí pé _**wu_has_plan**_ nílò "Plan ID" kí ó tó lè ṣiṣẹ́.

Láti gba ID plan kan, o lè lọ sí **Ultimate Multisite > Products**. ID ọja kọ̀ọ̀kan ni yóò hàn ní ọ̀tún tabili náà.

Ṣàkíyèsí pé àwọn olumulo lè subscribe sí **Plan** nìkan, kì í ṣe Package tàbí Service, nítorí pé wọ́n jẹ́ add-ons fún **Plan** nìkan.

![Àtòjọ Products tó ń fi àwọn plan ID hàn](/img/admin/products-list.png)

## Ṣíṣe àtúnṣe àwọn ìṣòro CORS pẹ̀lú Font-Icons nínú àwọn domain tí a map {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Ṣíṣe àtúnṣe àwọn ìṣòro CORS pẹ̀lú Font-Icons nínú àwọn domain tí a map {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Lẹ́yìn tí o bá map domain kan sí sub-site, o lè rí i pé site náà ní ìṣòro láti load àwọn font àdáni. Ohun tó fà á ni block cross-origin kan nínú àwọn ètò server rẹ.

Níwọ̀n bí a ti fẹ́rẹ̀ẹ́ máa ń load àwọn fáìlì font taara láti CSS ní gbogbo ìgbà, plugin mapping domain wa kò lè tún àwọn URL kọ láti lo domain tí a map dípò ti ìpilẹ̀ṣẹ̀ náà, nítorí náà láti ṣàtúnṣe ìṣòro náà, o ní láti ṣe àtúnṣe àwọn fáìlì ìṣètò server rẹ.

Ní ìsàlẹ̀ ni àwọn àpẹẹrẹ kóòdù láti ṣàtúnṣe ìṣòro náà fún Apache àti NGINX. Àwọn ìyípadà wọ̀nyí nílò ìmọ̀ tó ti gòkè nípa àwọn fáìlì ìṣètò server (àwọn fáìlì .htaccess àti àwọn fáìlì config NGINX). Tí kò bá rọrùn fún ọ láti ṣe àwọn ìyípadà wọ̀nyí fúnra rẹ, fi ojúewé yìí ránṣẹ́ sí àwọn aṣojú ìrànlọ́wọ́ olupèsè hosting rẹ nígbà tí o bá nílò ìrànlọ́wọ́.

### Apache {#apache}

Lórí fáìlì .htaccess rẹ, ṣàfikún:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Lórí fáìlì config server rẹ (ibi tó wà yàtọ̀ láti server sí server), ṣàfikún:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
