---
title: Mavandiso ekupenyu
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets for v2

Kuti, code snippets dzine **WordPress** chinotora kuti zvakaita zvinhu zviri kuita zvichakanaka zvinogona kuendesa neplugin yakachena. Izvi code snippets inozivakwa muiri dzinogona kuenda mu file ya WordPress core kana theme yako (zvakakosha, ndiyo functions.php ya theme yako) kana kuti dzineva kuwedzera MU plugin.

Muriwezi wese tinokupa matshwaro maviri anogona kushandiswa ne**Ultimate Multisite v2**:

  * [**Kutamba chakanikwa chete cha Account menu item**](#changing-the-position-of-the-account-menu-item)

  * [**Kuona kuti user anenge ari under plan yakati uye/kana anenge akabva nesubscription inenge inotarisirwa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Kupfura CORS issues nemafont-icons mu mapped domains**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Kutamba chakanikwa chete cha Account menu item

Kuti utambe chakanikwa chete cha Account menu item pa Dashboard ya client yako, ndichida kuti uingire code snippet iyi mu functions.php ya theme yako inotarisirwa. Unogona kusiya snippet iyi muiri ye MU plugin yako kana custom plugins.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

Kuti ukubheke kungu subscription inachikumbuka, unogona kuitumia function iyi:

wu_is_active_subscriber($user_id)

Panguva iyi ndiyo example snippet inotjeka kuti user anenge ari munzira yakagadzirwa (_Plan ID 50_) uye kungo subscription ya user inenge inachikumbuka.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER ANGAARI MUNZIRA INO -- NESUBSCRIPTION YAKE INACHIKUMBUKA, CHIVHA ICHIITIRA ZVINA} else { // USER ANGAARI MUNZIRA INO -- CHIVHA SUBSCRIPTION YAKE INACHIKUMBUKA, ITIITIRA ZVINA} // end if;

Chii chineipa kuti _**wu_has_plan**_ inenge inoreva "Plan ID" kuti inenge inofanya iye.

Kuti utange ID ya plan, unogona kuenda kune **Ultimate Multisite > Products**. ID ya product inozuva pa upande wechokwadi (right side) ye table.

Chii chineipa kuti users vanenge vachikumbuka **Plan** chete, asi havanenge vachikumbuka Package kana Service, nekuti vanenge vachiri kuita zvinhu zvinotevera munzira ya **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Kuti Ungekurudzira CORS issues neFont-Icons mu mapped domains
## Kuti Ungekurudzira CORS issues neFont-Icons mu mapped domains

Panguva unenge uingira domain kune sub-site, unogona kuona kuti site inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge in

Kuti zvinhu izvi zvinoreva kuti ndikubatsire kupepo reApache neNGINX. Izvi chirova dzinoda kunzwisisa zvakawanda nezvechinhu chinotevera (server configuration files) zvichiri mune .htaccess files uye NGINX config files. Usiunze support agents vehosting provider kana usina kudzidza kuenda nekuita izviwo uri wekuti unenge usina kunzwisisa.

### Apache

Mune .htaccess file yako, shandisa izvi:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Mune server config file yako (chiri chinobva kunenge chinekuvaka kune server), shandisa izvi:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
