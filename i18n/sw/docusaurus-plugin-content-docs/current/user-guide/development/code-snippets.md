---
title: Vijisehemu vya Msimbo
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Vipande vya Msimbo kwa v2

Kimsingi, vipande vya msimbo kwa **WordPress** hutumiwa kufanya vitendo fulani ambavyo vingeweza kuhitaji plugin ndogo maalum. Vipande hivyo vya msimbo huwekwa kwenye moja ya faili za msingi za WordPress au faili za theme (kwa kawaida faili ya functions.php ya theme yako) au vinaweza kutumika kama MU plugin.

Katika makala hii tutakuonyesha vipande vitatu vya msimbo ambavyo vinaweza kutumika na **Ultimate Multisite v2** :

  * [**Kubadilisha nafasi ya kipengee cha menyu ya Akaunti**](#changing-the-position-of-the-account-menu-item)

  * [**Jinsi ya kuangalia kama mtumiaji yuko chini ya mpango fulani na/au ana usajili unaofanya kazi**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Kurekebisha matatizo ya CORS na Font-Icons kwenye domains zilizounganishwa**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Kubadilisha nafasi ya kipengee cha menyu ya Akaunti

Kubadilisha nafasi ya kipengee cha menyu ya Akaunti kwenye Dashboard ya mteja wako, ongeza tu kipande cha msimbo kifuatacho kwenye functions.php ya theme inayotumika kwenye tovuti yako kuu. Unaweza pia kuweka kipande hicho ndani ya moja ya mu-plugins au plugins zako za kawaida.

add_filter('wu_my_account_menu_position', function() { return 10; // Badilisha thamani hii kuweka menyu katika nafasi unayoitaka.

## Jinsi ya kuangalia kama mtumiaji yuko chini ya mpango fulani na/au ana usajili unaofanya kazi

Kama msimamizi wa mtandao, huenda ukahitaji kuunda functions za kawaida ambazo zitafanya vitendo vya msingi au kufanya huduma/kipengele kipatikane kwa kundi maalum la wanachama au watumiaji wa mwisho, kulingana na hali ya usajili wao na mpango wanaojisajili chini yake.

Functions hizi za asili za Ultimate Multisite zitakusaidia na hilo.

Kuangalia kama mtumiaji ni mwanachama wa mpango fulani, unaweza kutumia function:

wu_has_plan($user_id, $plan_id)

Kuangalia kama usajili unafanya kazi, unaweza kutumia function:

wu_is_active_subscriber($user_id)

Hapa chini kuna mfano wa kipande kinachoangalia kama mtumiaji wa sasa yuko chini ya mpango maalum (_Plan ID 50_) na kama usajili wa mtumiaji unafanya kazi.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // MTUMIAJI NI MWANACHAMA WA MPANGO NA USAJILI WAKE UNAFANYA KAZI, FANYA MAMBO} else { // MTUMIAJI SI MWANACHAMA WA MPANGO -- AU -- USAJILI WAKE HAUFANYI KAZI, FANYA MAMBO MENGINE} // end if;

Kumbuka kwamba _**wu_has_plan**_ inahitaji "Plan ID" ili iweze kufanya kazi.

Kupata ID ya mpango, unaweza kwenda **Ultimate Multisite > Products**. ID ya kila bidhaa itaonyeshwa upande wa kulia wa jedwali.

Kumbuka kwamba watumiaji wanaweza kusajiliwa tu kwa **Plan** , si Package au Service, kwani hizo ni nyongeza tu za **Plan**.

![Orodha ya bidhaa inayoonyesha Plan IDs](/img/admin/products-list.png)

## Kurekebisha matatizo ya CORS na Font-Icons kwenye domains zilizounganishwa
## Kurekebisha matatizo ya CORS na Font-Icons kwenye domains zilizounganishwa

Baada ya kuunganisha domain kwenye tovuti ndogo unaweza kugundua kuwa tovuti ina matatizo ya kupakia fonti za kawaida. Hii inasababishwa na kuzuiwa kwa cross-origin kwenye mipangilio ya seva yako.

Kwa kuwa faili za fonti karibu kila wakati hupakiwa moja kwa moja kutoka CSS, plugin yetu ya domain mapping haiwezi kuandika upya URLs kutumia domain iliyounganishwa badala ya ile ya asili, kwa hivyo kurekebisha tatizo hili, utahitaji kubadilisha faili za usanidi wa seva yako.

Hapa chini kuna vipande vya msimbo vya kurekebisha tatizo kwa Apache na NGINX. Mabadiliko haya yanahitaji ujuzi wa kina wa faili za usanidi wa seva (faili za .htaccess na faili za usanidi wa NGINX). Ikiwa hujisikii vizuri kufanya mabadiliko hayo mwenyewe, tuma ukurasa huu kwa wakala wa msaada wa mtoaji wako wa hosting unapohitaji usaidizi.

### Apache

Kwenye faili yako ya .htaccess, ongeza:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

Kwenye faili ya usanidi wa seva yako (mahali panatofautiana kutoka seva hadi seva), ongeza:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
