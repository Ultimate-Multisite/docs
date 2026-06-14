---
title: Mawu wa code
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets for v2

Mwayi, code snippets yaite kusedwa kuti mwayi wina woyenera kufanya zinthu zina zomwe zingakhale zikufunika plugin yina yomwe wina. Zomwe zikuyenera kodewo zikuyenera kuwera m'file ya WordPress kapena theme yanu (kuti nthawi zambiri ndi file ya functions.php ya theme yanu) kapena zingathe kutendeka m'MU plugin.

M'articleoni, ndikukwera m'code snippets ntatu zomwe mung kusedwe kuti mwayi wina wa **Ultimate Multisite v2** :

  * [**Kutsegula malo a menu ya Account**](#changing-the-position-of-the-account-menu-item)

  * [**Kuti mwayi wina ali ndi plan yomwe yenera ndipo/kapena ali ndi subscription yomwe ikulimbikira**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Kuteteza CORS issues ndi Font-Icons m'domains zomwe zikuyenera**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Kutsegula malo a menu ya Account

Kuti mutsegule malo a menu ya Account pa Dashboard ya wina wanu, ndikufuna kuti mwayi wina woyenera kuwera code snippet iliyonse mu functions.php ya theme yanu yomwe ikulimbikira. Mumweyi mung utendeka snippet iye mu MU plugin kapena custom plugins.

add_filter('wu_my_account_menu_position', function() { return 10; // Kufotokoza izi kuti mwayi wina woyenera kukhala pa malo omwe mukuwoneza.

## Kutsegula kuti mwayi wina ali ndi plan yomwe yenera ndipo/kapena ali ndi subscription yomwe ikulimbikira

Koma mwayi wina wa network admin, mung kukonzekere functions zosonyeza zomwe zimene kufanya zinthu zina zosangalatsa kapena kuti m'service/feature iwonse imathandizira kwa group ya subscribers kapena endusers omwe ali ndi status ya subscription yake ndipo plan yomwe ikulimbikira.

Functions za Ultimate Multisite zomwe zikuyenera zikukonzekera zimene kumathandiza m'izambiri.

Kuti mutsegule kuti mwayi wina ali ndi plan yomwe yenera, mung kusedwe functionyi:

wu_has_plan($user_id, $plan_id)

Kuti kuti ukwazi ukuthi isubunzi sikhona, ungakwazi ukusebenzisa ifunction:

wu_is_active_subscriber($user_id)

Nansi inkhokelo eyengeziwayo eyayibhekisa kungumuntu ongasubunzi (plan) olusemthethweni (_Plan ID 50_) futhi isubunzi sakhe sikhona.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // UMUNTU UNGASEKHA KUSUBUNZI NAKUSUBUNZI SAKHO SIKHONA, SEBENZA LOKUBA} else { // UMUNTU AWUSUBUNZI KUSUBUNZI -- OMAKUBA AWUSUBUNZI KUSUBUNZI, SEBENZA OKUNYESE} // end if;

Qaphela ukuthi _**wu_has_plan**_ udinga "Plan ID" ukuze ingasebenze.

Ukuze uthole ID yesubunzi, ungakwazi ukuthela **Ultimate Multisite > Products**. ID yesiqobo sokuqobo siyoshwa ngaphansi kwesigaba esikhulu sombhalo.

Qaphela ukuthi abantu bangasubunzi ku-**Plan**, hhayi ku-Package noma i-Service, njengoba bahlobo nje yisibonelo (add-ons) sokuqobo.

![Products list showing plan IDs](/img/admin/products-list.png)

## Ukuphepha izinkinga zokuhlangana kweCORS nenthemba (Font-Icons) ezinhlelo eziphambili
## Ukuphepha izinkinga zokuhlangana kweCORS nenthemba (Font-Icons)

Ngemuva kokuthi uqaphele i-domain esihambiswe ku-sub-site, ungakwazi ukuthi isikhathi sokuhlola i-font ezithile kukhona amancane. Lokhu kukhona ngoba kukhona ukususa (cross-origin block) emisebenzini yasekhaya lakho.

Njengoba i-font files ziningi kakhulu zihambiswe ngendlela efana ne-CSS, i-plugin yethu yokuhlangana kwe-domain ayikwazi ukulungisa izinhlobo (URLs) ukuze ihambiswe nge-mapped domain kunokuthi kwakho okukhona, ngakho ukuze ulungele le nto, kufanele ulele izixazululo zokuhlela i-server configuration files zakho.

Malingaliwo monga mwayi wopambana n’Apache ndi NGINX. Malingaliwo monga mwayi wopambana n’Apache ndi NGINX. Kukhala kofunika kuti muli ndi chidziwika kwambiri pa zinthu zomwe zimene m’server configuration files (zifotokozi za .htaccess ndi zifotokozi za NGINX). Ngati simukuti mukuti muli woyenera kuchitira zoti mumapambana, ndikufunsa kuti mupereke upeti wanu wopambana kuti akupatseni chithandizo.

### Apache

Pa .htaccess yanu, pogonani:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Pa server config file (moyo wopambana umakhala m’server monga m’server), pogonani:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
