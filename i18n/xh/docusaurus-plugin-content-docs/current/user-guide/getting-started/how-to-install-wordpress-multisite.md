---
title: Uyifaka njani i-WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Ndiyifaka njani i-WordPress Multisite?

WordPress Multisite ikuvumela ukuba ube nenethiwekhi yeesayithi kufakelo olunye. Eli luphawu olwakhelwe ngaphakathi, kodwa alusebenzi ngokungagqibekanga.

:::tip
Ultimate Multisite iquka **[i-Multisite Setup Wizard eyakhelwe ngaphakathi](./multisite-setup-wizard)** ezenzekelayo kuyo yonke le nkqubo. Ukuba une-Ultimate Multisite efakiweyo, sicebisa ukusebenzisa iwizard endaweni yokulandela amanyathelo esandla angezantsi.
:::

Kuba Ultimate Multisite iyi-plugin yenethiwekhi kuphela, kwesi sifundo uza kufunda indlela yokufaka nokuseta WordPress Multisite ngesandla. Lo mbhalo usekelwe ku-[Indlela yokufaka nokuseta i-WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), evela ku-WPBeginner.

**Izinto omawuziqwalasele phambi kokudala inethiwekhi yakho ye-multisite:**

  * Fumana i-WordPress hosting elungileyo! Iiwebhusayithi kwinethiwekhi zabelana ngezixhobo ezifanayo zeseva.

  * Ukuba uneesayithi ezimbalwa kuphela ezinetrafikhi ephantsi, i-shared hosting mhlawumbi iya kukusebenzela.

  * Uninzi **lwababoneleli be-Managed WordPress hosting** banikela nge-Multisite kwangoko (bafaka i-WordPress ene-Multisite esele ivuliwe kwaye ilungiselelwe wena). Oku kunjalo kwi-WP Engine, Closte, Cloudways, njl. Ukuba awuqinisekanga ukuba kunjalo kumboneleli wakho we-host, qhagamshelana nenkxaso yabo ngaphambi kokuba uqhubeke nesi sifundo.

  * Kukwalungile ukuqhelana nokufaka WordPress nokuhlela iifayile usebenzisa i-FTP .

_**KUBALULEKILE**_ **:** Ukuba useta inethiwekhi ye-multisite kwiwebhusayithi ye-WordPress esele ikhona, ungalibali uku:

  * Yenza i-backup epheleleyo yesayithi yakho ye-WordPress

  * Khubaza zonke ii-plugin kwisayithi yakho ngokuya kwiphepha lakho lee-plugin uze ukhethe _Khubaza_ kwizenzo ezininzi uze ucofe _Faka_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Ukuvula i-Multisite, qala uqhagamshele kwisayithi yakho usebenzisa i-FTP client okanye umphathi weefayile we-cPanel, uze uvule ifayile yakho ye-wp-config.php ukuze uyihlele.

Phambi komgca othi _*That’s all, stop editing! Happy blogging.*_, yongeza le code snippet ilandelayo:

define('WP_ALLOW_MULTISITE', true);

Gcina uze ulayishe ifayile yakho ye-wp-config.php kwakhona kwiseva.

Nophawu lwe-multisite luvuliwe kwisayithi yakho, ngoku lixesha lokuseta inethiwekhi yakho.

Yiya ku-**Izixhobo » Ukuseta Inethiwekhi**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Ngoku kufuneka uxelele WordPress ukuba luhlobo luni lwesakhiwo sedomain oza kusisebenzisa kwiisayithi kwinethiwekhi yakho: ii-subdomain okanye ii-subdirectory.

Ukuba ukhetha ii-subdomain, kufuneka utshintshe izicwangciso zakho ze-DNS ze-domain mapping kwaye uqinisekise ukuba useta _**wildcard subdomains**_ zenethiwekhi yakho ye-multisite.

Buyela kwi-Network Setup, nika inethiwekhi yakho isihloko uze uqinisekise ukuba idilesi ye-imeyile kwi-imeyile yomlawuli weNethiwekhi ichanekile. Cofa _Faka_ ukuze uqhubeke.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Yongeza le khowudi, enikwe ngu-WordPress, kwi-_**wp-config.php**_ yakho :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Kunye nale khowudi, ekwanikwe ngu-WordPress, kwifayile yakho ye-_**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Sebenzisa i-FTP client okanye umphathi weefayile (ukuba usebenzisa into efana ne-cPanel, umzekelo) ukukopa nokuncamathisela ikhowudi kwezi fayile zimbini.

Ekugqibeleni, ngena kwakhona kwisayithi yakho ye-WordPress ukuze ufikelele kwinethiwekhi yakho ye-multisite.

**Kubalulekile ukuvavanya nokuqinisekisa ukuba uyakwazi ukudala i-subsite kufakelo lwakho lwe-WordPress Multisite ngaphambi kokuba ufake Ultimate Multisite.**

Ukudala i-subsite:

  1. Vula i-wp-admin yeewebhusayithi zakho

  2. Yiya ku-Iisayithi Zam > Iisayithi (/wp-admin/network/sites.php)

  3. Cofa u-Yongeza Entsha phezulu

  4. Gcwalisa zonke iifildi:

  * Idilesi yeSayithi — Ungaze usebenzise “www”

  * I-Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * I-Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Isihloko seSayithi — Isihloko sesayithi, sinokutshintshwa kamva

  * I-imeyile yoMlawuli — Misela njengomsebenzisi wokuqala ongumlawuli we-subsite

![Ifom yokongeza isayithi entsha kwi-WordPress Multisite](/img/admin/sites-list.png)

Emva kokugcwalisa iifildi, cofa iqhosha elithi "Yongeza isayithi". Xa i-subsite entsha sele idaliwe, qhubeka uyifikelele ukuze uqinisekise ukuba i-subsite iyasebenza.

## Iingxaki eziqhelekileyo: {#common-problems}

### 1\. Ndiyakwazi ukudala iisayithi ezintsha kodwa azifikeleleki. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Ukuba ukhethe ii-subdomain, kufuneka kwakhona usete ii-wildcard subdomain zenethiwekhi yakho ye-multisite.

Ukuze wenze oko, yiya kwi-dashboard yephaneli yolawulo ye-akhawunti ye-hosting yeWebhusayithi yakho (umz. cPanel/Plesk/Direct Admin kuxhomekeke kumboneleli wakho we-hosting).

Fumana ukhetho lwe-“Domains” okanye “Subdomains”. Kwezinye iiphaneli zolawulo lubhalwe njenge-“Domain administration”.

Kwifildi ye-subdomain, faka i-asterisk (*). Emva koko, kufuneka ikucele ukuba ukhethe igama ledomain apho ufuna i-subdomain yongezwe phantsi kwalo.

I-document root yegama ledomain elikhethiweyo iya kufunyanwa ngokuzenzekelayo. Cofa kwiqhosha elithi _Dala_ okanye _Gcina_ ukuze wongeze i-wildcard subdomain yakho. Ungeniso kufuneka lubonakale ngolu hlobo “*.[mydomain.com](http://mydomain.com)”
