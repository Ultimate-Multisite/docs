---
title: Iziqwenga zekhowudi
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Iziqwengana zekhowudi ze-v2

Ngokusisiseko, iziqwengana zekhowudi ze-**WordPress** zisetyenziswa ukwenza izenzo ezithile ezinokuthi kungenjalo zifune iplagi encinane ezinikeleyo. Ezo ziqwengana zekhowudi zibekwa kwenye yeefayile ezingundoqo ze-WordPress okanye ze-theme (ngokuqhelekileyo ifayile functions.php ye-theme yakho) okanye zingasetyenziswa njenge-MU plugin.

Kweli nqaku siza kukubonisa iziqwengana zekhowudi ezintathu ezinokusetyenziswa ne-**Ultimate Multisite v2** :

  * [**Ukutshintsha indawo yento yemenyu ye-Account**](#changing-the-position-of-the-account-menu-item)

  * [**Indlela yokujonga ukuba umsebenzisi uphantsi kwesicwangciso esinikiweyo kunye/okanye unesubscription esebenzayo**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Ukulungisa iingxaki ze-CORS nge-Font-Icons kwiidomeyini ezimaphuweyo**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ukutshintsha indawo yento yemenyu ye-Account

Ukutshintsha indawo yento yemenyu ye-Account kwi-Dashboard yomthengi wakho, yongeza nje esi siqwengana sekhowudi silandelayo kwi-functions.php ye-theme esebenzayo yesayithi yakho ephambili. Unako nokubeka isiqwengana ngaphakathi kwenye yee-mu-plugins zakho okanye iiplagi ezenzelwe wena.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Indlela yokujonga ukuba umsebenzisi uphantsi kwesicwangciso esinikiweyo kunye/okanye unesubscription esebenzayo

Njengomlawuli wenethiwekhi, ungadinga ukwenza imisebenzi eyenzelwe wena eza kwenza izenzo ezisisiseko okanye yenze inkonzo/umsebenzi ufumaneke kwiqela elikhethiweyo lababhalisi okanye abasebenzisi bokugqibela, ngokusekelwe kwimeko yesubscription yabo kunye nesicwangciso ababhalise phantsi kwaso.

Le misebenzi yemveli ye-Ultimate Multisite iza kukunceda ngaloo nto.

Ukujonga ukuba umsebenzisi lilungu lesicwangciso esinikiweyo, ungasebenzisa umsebenzi:

wu_has_plan($user_id, $plan_id)

Ukujonga ukuba isubscription iyasebenza, ungasebenzisa umsebenzi:

wu_is_active_subscriber($user_id)

Ngezantsi kukho umzekelo wesiqwengana ojonga ukuba umsebenzisi wangoku uphantsi kwesicwangciso esithile (_ID yesicwangciso 50_) kwaye ukuba isubscription yomsebenzisi iyasebenza.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Qaphela ukuba _**wu_has_plan**_ ifuna "ID yesicwangciso" ukuze isebenze.

Ukufumana i-ID yesicwangciso, ungaya ku-**Ultimate Multisite > Iimveliso**. I-ID yemveliso nganye iya kuboniswa ekunene kwetheyibhile.

Qaphela ukuba abasebenzisi banokubhaliswa kuphela kwi-**Sicwangciso** , hayi kwi-Package okanye kwi-Service, kuba zona zizongezo kuphela ze-**Sicwangciso**.

![Uluhlu lweemveliso olubonisa ii-ID zezicwangciso](/img/admin/products-list.png)

## Ukulungisa iingxaki ze-CORS nge-Font-Icons kwiidomeyini ezimaphuweyo
## Ukulungisa iingxaki ze-CORS nge-Font-Icons kwiidomeyini ezimaphuweyo

Emva kokumapha idomeyini kwisub-site unokufumanisa ukuba isayithi inengxaki yokulayisha iifonti ezenzelwe wena. Oko kubangelwa yibhloko ye-cross-origin kwiisetingi zeseva yakho.

Kuba iifayile zefonti phantse zihlala zilayishwa ngokuthe ngqo kwi-CSS, iplagi yethu yokumapha idomeyini ayikwazi ukubhala kwakhona ii-URL ukuze isebenzise idomeyini emaphuweyo endaweni yeyokuqala, ngoko ukuze ulungise ingxaki, kuya kufuneka uhlengahlengise iifayile zoqwalaselo lweseva yakho.

Ngezantsi kukho iziqwengana zekhowudi zokulungisa ingxaki ye-Apache kunye ne-NGINX. Olu tshintsho lufuna ulwazi oluphambili lweefayile zoqwalaselo lweseva (iifayile ze-.htaccess kunye neefayile zoqwalaselo ze-NGINX). Ukuba awukhululekanga ukwenza olo tshintsho ngokwakho, thumela eli phepha kubameli benkxaso bomboneleli wakho wokuhostwa xa ufuna uncedo.

### Apache

Kwifayile yakho ye-.htaccess, yongeza:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Kwifayile yoqwalaselo lweseva yakho (indawo iyahluka ukusuka kwiseva ukuya kwiseva), yongeza:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
