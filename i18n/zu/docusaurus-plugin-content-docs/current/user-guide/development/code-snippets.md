---
title: Izingcezu Zekhodi
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Izingcezu zekhodi ze-v2 {#code-snippets-for-v2}

Empeleni, izingcezu zekhodi ze-**WordPress** zisetshenziselwa ukwenza izenzo ezithile ebezingase zidinge isandiso esincane esizinikele. Izingcezu ezinjalo zekhodi zifakwa kwelinye lamafayela ayisisekelo e-WordPress noma e-theme (ngokuvamile ifayela le-functions.php le-theme yakho) noma zingasetshenziswa njenge-MU plugin.

Kulesi sihloko sizokubonisa izingcezu zekhodi ezintathu ezingasetshenziswa ne-**Ultimate Multisite v2** :

  * [**Ukushintsha indawo yento yemenyu ye-Account**](#changing-the-position-of-the-account-menu-item)

  * [**Indlela yokuhlola ukuthi umsebenzisi ungaphansi kohlelo olunikeziwe futhi/noma unokubhaliselwe okusebenzayo**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Ukulungisa izinkinga ze-CORS ngama-Font-Icons kuma-domain amamephiwe**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ukushintsha indawo yento yemenyu ye-Account {#changing-the-position-of-the-account-menu-item}

Ukuze ushintshe indawo yento yemenyu ye-Account ku-Dashboard yekhasimende lakho, mane ungeze ingcezu yekhodi elandelayo ku-functions.php ye-theme esebenzayo yesayithi lakho eliyinhloko. Ungaphinde ufake le ngcezu ngaphakathi kwenye yama-mu-plugins akho noma izandiso ezenziwe ngokwezifiso.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Indlela yokuhlola ukuthi umsebenzisi ungaphansi kohlelo olunikeziwe futhi/noma unokubhaliselwe okusebenzayo {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Njengomlawuli wenethiwekhi, ungase udinge ukudala imisebenzi eyenziwe ngokwezifiso ezokwenza izenzo eziyisisekelo noma yenze isevisi/isici sitholakale eqenjini elikhethiwe lababhalisile noma abasebenzisi bokugcina, ngokusekelwe esimweni sokubhaliselwe kwabo kanye nohlelo ababhalisele ngaphansi kwalo.

Le misebenzi yendabuko ye-Ultimate Multisite izokusiza ngalokho.

Ukuze uhlole ukuthi umsebenzisi uyilungu lohlelo olunikeziwe, ungasebenzisa umsebenzi:

wu_has_plan($user_id, $plan_id)

Ukuze uhlole ukuthi ukubhaliselwe kuyasebenza, ungasebenzisa umsebenzi:

wu_is_active_subscriber($user_id)

Ngezansi kunesibonelo sengcezu esihlola ukuthi umsebenzisi wamanje ungaphansi kohlelo oluthile (_ID Yohlelo 50_) nokuthi ukubhaliselwe komsebenzisi kuyasebenza yini.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Qaphela ukuthi _**wu_has_plan**_ idinga i-"ID Yohlelo" ukuze isebenze.

Ukuze uthole i-ID yohlelo, ungaya ku-**Ultimate Multisite > Imikhiqizo**. I-ID yomkhiqizo ngamunye izoboniswa kwesokudla setafula.

Qaphela ukuthi abasebenzisi bangabhaliselwa kuphela **Uhlelo** , hhayi Iphakheji noma Isevisi, njengoba kuyizengezo kuphela ze-**Uhlelo**.

![Uhlu lwemikhiqizo olubonisa ama-ID wezinhlelo](/img/admin/products-list.png)

## Ukulungisa izinkinga ze-CORS ngama-Font-Icons kuma-domain amamephiwe {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Ukulungisa izinkinga ze-CORS ngama-Font-Icons kuma-domain amamephiwe {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Ngemva kokumapha i-domain kusayithi elingaphansi, ungase uthole ukuthi isayithi linenkinga yokulayisha amafonti enziwe ngokwezifiso. Lokho kubangelwa ukuvinjwa kwe-cross-origin kuzilungiselelo zeseva yakho.

Njengoba amafayela amafonti cishe njalo elayishwa ngokuqondile ku-CSS, isandiso sethu sokumapha ama-domain asikwazi ukubhala kabusha ama-URL ukuze sisebenzise i-domain emaphiwe esikhundleni saleyo yoqobo, ngakho ukuze ulungise inkinga, uzodinga ukuchibiyela amafayela okulungiselela iseva yakho.

Ngezansi kunezingcezu zekhodi zokulungisa inkinga ye-Apache ne-NGINX. Lezi zinguquko zidinga ulwazi oluthuthukile lwamafayela okulungiselela iseva (amafayela e-.htaccess namafayela e-config e-NGINX). Uma ungakhululekile ukwenza lezo zinguquko ngokwakho, thumela leli khasi kuma-ejenti osekelo omhlinzeki wakho wokusingatha lapho udinga usizo.

### Apache {#apache}

Kufayela lakho le-.htaccess, engeza:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Kufayela lakho le-config leseva (indawo iyahluka kuseva kuya kuseva), engeza:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
