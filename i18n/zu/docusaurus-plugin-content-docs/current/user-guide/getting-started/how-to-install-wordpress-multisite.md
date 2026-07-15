---
title: Indlela yokufaka i-WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Ngiyifaka kanjani i-WordPress Multisite?

WordPress Multisite ikuvumela ukuba ube nenethiwekhi yamasayithi ekufakweni okukodwa. Lesi isici esakhelwe ngaphakathi, kodwa asisebenzi ngokuzenzakalelayo.

:::tip
Ultimate Multisite ifaka **[iwizadi yokusetha ye-Multisite eyakhelwe ngaphakathi](./multisite-setup-wizard)** ezenzakalela yonke le nqubo. Uma une-Ultimate Multisite efakiwe, sincoma ukusebenzisa iwizadi esikhundleni sokulandela izinyathelo ezenziwa ngesandla ngezansi.
:::

Njengoba i-Ultimate Multisite iyi-plugin yenethiwekhi kuphela, kulesi sifundo, uzofunda ukufaka nokusetha i-WordPress Multisite ngesandla. Lo mbhalo ususelwe ku-[Indlela Yokufaka Nokumisa Inethiwekhi ye-WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), evela ku-WPBeginner.

**Izinto okufanele uzinake ngaphambi kokudala inethiwekhi yakho ye-multisite:**

  * Thola i-WordPress hosting enhle! Amawebhusayithi akunethiwekhi abelana ngezinsiza zeseva ezifanayo.

  * Uma unamasayithi ambalwa nje anethrafikhi ephansi, i-shared hosting cishe izokusebenzela.

  * Iningi **labahlinzeki be-Managed WordPress hosting** linikeza i-Multisite isilungile (bafaka i-WordPress ne-Multisite isivele isebenza futhi ilungiselelwe wena). Lokhu kunjalo nge-WP Engine, Closte, Cloudways, njll. Uma ungaqiniseki ukuthi kunjalo yini kumhlinzeki wakho we-host, xhumana nosekelo lwabo ngaphambi kokuqhubeka nalesi sifundo.

  * Kuhle futhi ukujwayelana nokufaka i-WordPress nokuhlela amafayela usebenzisa i-FTP .

_**KUBALULEKILE**_ **:** Uma usetha inethiwekhi ye-multisite kuwebhusayithi ye-WordPress ekhona ungakhohlwa uku:

  * Dala ikhophi eyisipele ephelele yesayithi lakho le-WordPress

  * Khubaza wonke ama-plugin kusayithi lakho ngokuya ekhasini lakho lama-plugin bese ukhetha _Khubaza_ ezenzweni zenqwaba bese uchofoza _Sebenzisa_

<!-- Isithombe-skrini asitholakali: ikhasi lama-plugin e-WordPress elibonisa isenzo sokukhubaza ngobuningi -->

Ukuze unike amandla i-Multisite, qala ngokuxhuma kusayithi lakho usebenzisa iklayenti le-FTP noma umphathi wamafayela we-cPanel, bese uvula ifayela lakho le-wp-config.php ukuze ulihlele.

Ngaphambi komugqa othi _*That’s all, stop editing! Happy blogging.*_, engeza le ngxenye yekhodi elandelayo:

define('WP_ALLOW_MULTISITE', true);

Londoloza bese ulayisha ifayela lakho le-wp-config.php ubuyele kusebenza.

Njengoba isici se-multisite sesinikwe amandla kusayithi lakho, manje sekuyisikhathi sokusetha inethiwekhi yakho.

Iya ku-**Tools » Network Setup**

<!-- Isithombe-skrini asitholakali: imenyu ye-WordPress Tools ebonisa inketho ye-Network Setup -->

Manje kudingeka utshele i-WordPress ukuthi yiluphi uhlobo lwesakhiwo sedomain ozolusebenzisa kumasayithi akunethiwekhi yakho: ama-subdomain noma ama-subdirectory.

Uma ukhetha ama-subdomain, kufanele ushintshe izilungiselelo zakho ze-DNS zokumadanisa idomain futhi uqinisekise ukusetha _**wildcard subdomains**_ zenethiwekhi yakho ye-multisite.

Buyela ku-Network Setup, nikeza inethiwekhi yakho isihloko futhi uqiniseke ukuthi ikheli le-imeyili ku-Network admin email lilungile. Chofoza _Faka_ ukuze uqhubeke.

<!-- Isithombe-skrini asitholakali: ikhasi le-WordPress Network Setup elinezinkambu zesihloko senethiwekhi ne-imeyili yomlawuli -->

Engeza le khodi, enikezwe yi-WordPress, ku-_**wp-config.php**_ yakho :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Futhi le khodi, nayo enikezwe yi-WordPress, kufayela lakho le-_**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Sebenzisa iklayenti le-FTP noma umphathi wamafayela (uma usebenzisa into efana ne-cPanel, ngokwesibonelo) ukukopisha nokunamathisela ikhodi kulawa mafayela amabili.

Ekugcineni, ngena futhi kusayithi lakho le-WordPress ukuze ufinyelele inethiwekhi yakho ye-multisite.

**Kubalulekile ukuhlola nokuqinisekisa ukuthi uyakwazi ukudala i-subsite ekufakweni kwakho kwe-WordPress Multisite ngaphambi kokufaka i-Ultimate Multisite.**

Ukuze udale i-subsite:

  1. Vula i-wp-admin yamawebhusayithi akho

  2. Zulazula uye ku-My Sites > Sites (/wp-admin/network/sites.php)

  3. Chofoza u-Add New phezulu

  4. Gcwalisa zonke izinkambu:

  * Ikheli Lesayithi — Ungalokothi usebenzise “www”

  * I-Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * I-Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Isihloko Sesayithi — Isihloko sesayithi, singashintshwa kamuva

  * I-imeyili Yomlawuli — Setha njengomsebenzisi wokuqala ongumlawuli we-subsite

![Ifomu lokwengeza isayithi elisha ku-WordPress Multisite](/img/admin/sites-list.png)

Ngemva kokugcwalisa izinkambu, chofoza inkinobho ethi "Engeza isayithi". Uma i-subsite entsha isidaliwe, qhubeka uyifinyelele ukuze uqinisekise ukuthi i-subsite iyasebenza.

## Izinkinga Ezivamile: {#common-problems}

### 1\. Ngiyakwazi ukudala amasayithi amasha kodwa awafinyeleleki. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Uma ukhethe ama-subdomain, kudingeka futhi usethe ama-wildcard subdomain enethiwekhi yakho ye-multisite.

Ukuze wenze lokho, iya ku-dashboard ye-control panel ye-akhawunti ye-hosting yeWebhusayithi yakho (isb. cPanel/Plesk/Direct Admin kuye ngomhlinzeki wakho we-hosting).

Thola inketho ethi “Domains” noma “Subdomains”. Kwamanye ama-control panel ibhalwe ngokuthi “Domain administration”.

Enkambini ye-subdomain, faka inkanyezi (*). Bese, kufanele ikucele ukuthi ukhethe igama ledomain ofuna ukuthi i-subdomain yengezwe ngaphansi kwalo.

I-document root yegama ledomain elikhethiwe izotholwa ngokuzenzakalela. Chofoza inkinobho ethi _Dala_ noma _Londoloza_ ukuze wengeze i-wildcard subdomain yakho. Okufakiwe kufanele kubukeke kanje “*.[mydomain.com](http://mydomain.com)”
