---
title: Jinsi ya Kusanikisha WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Jinsi ya Kusanidi WordPress Multisite?

WordPress Multisite inakuwezesha kuwa na mtandao wa tovuti kwenye usanidi mmoja. Hii ni kipengele kilichojengwa ndani, lakini hakijawashwa kwa chaguo-msingi.

:::tip
Ultimate Multisite inajumuisha **[Mwongozo wa Kusanidi Multisite uliojengwa ndani](./multisite-setup-wizard)** ambao unaendesha mchakato huu wote kiotomatiki. Ikiwa una Ultimate Multisite imesanidiwa, tunapendekeza kutumia mwongozo huo badala ya kufuata hatua za mikono zilizo hapa chini.
:::

Kwa kuwa Ultimate Multisite ni plugin ya mtandao pekee, katika mwongozo huu, utajifunza jinsi ya kusanidi WordPress Multisite kwa mikono. Maandishi haya yanategemea [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), kutoka WPBeginner.

**Mambo ya kuzingatia kabla ya kuunda mtandao wako wa multisite:**

  * Pata huduma bora ya WordPress hosting! Tovuti kwenye mtandao zinashiriki rasilimali sawa za seva.

  * Ikiwa una tovuti chache tu zenye trafiki ndogo, shared hosting huenda ikafanya kazi kwako.

  * Watoa huduma wengi wa **Managed WordPress hosting** wanatoa Multisite tayari (wanasanidi WordPress na Multisite imewashwa na kusanidiwa tayari kwako). Hii ndio hali kwa WP Engine, Closte, Cloudways, na kadhalika. Ikiwa hujui kama ndivyo ilivyo kwa mtoa huduma wako, wasiliana na msaada wao kabla ya kuendelea na mwongozo huu.

  * Pia ni vizuri kufahamu jinsi ya kusanidi WordPress na kuhariri faili kwa kutumia FTP.

_**MUHIMU**_ **:** Ikiwa unasanidi mtandao wa multisite kwenye tovuti ya WordPress iliyopo usisahau:

  * Kuunda nakala rudufu kamili ya tovuti yako ya WordPress

  * Kuzima plugin zote kwenye tovuti yako kwa kwenda kwenye ukurasa wa plugins na kuchagua _Deactivate_ kutoka kwa vitendo vya wingi kisha kubofya _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Ili kuwasha Multisite, kwanza unganisha na tovuti yako ukitumia FTP client au cPanel file manager, na ufungue faili yako ya wp-config.php kwa kuhariri.

Kabla ya mstari wa _*That's all, stop editing! Happy blogging.*_, ongeza msimbo ufuatao:

define('WP_ALLOW_MULTISITE', true);

Hifadhi na upakue faili yako ya wp-config.php kurudi kwenye seva.

Kipengele cha multisite kikishawashwa kwenye tovuti yako, sasa ni wakati wa kusanidi mtandao wako.

Nenda kwenye **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Sasa unahitaji kumwambia WordPress ni aina gani ya muundo wa domain utakayotumia kwa tovuti kwenye mtandao wako: subdomains au subdirectories.

Ukichagua subdomains, lazima ubadilishe mipangilio yako ya DNS kwa domain mapping na uhakikishe umesanidi _**wildcard subdomains**_ kwa mtandao wako wa multisite.

Kurudi kwenye Network Setup, weka jina la mtandao wako na uhakikishe kuwa anwani ya barua pepe kwenye Network admin email ni sahihi. Bofya _Install_ kuendelea.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Ongeza msimbo huu, uliotolewa na WordPress, kwenye _**wp-config.php**_ yako:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Na msimbo huu, pia uliotolewa na WordPress, kwenye faili yako ya _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Tumia FTP client au file manager (ikiwa unatumia kitu kama cPanel, kwa mfano) kunakili na kubandika msimbo kwenye faili hizi mbili.

Hatimaye, ingia tena kwenye tovuti yako ya WordPress ili kufikia mtandao wako wa multisite.

**Ni muhimu kujaribu na kuhakikisha kuwa unaweza kuunda subsite kwenye usanidi wako wa WordPress Multisite kabla ya kusanidi Ultimate Multisite.**

Ili kuunda subsite:

  1. Fungua wp-admin ya tovuti yako

  2. Nenda kwenye My Sites > Sites (/wp-admin/network/sites.php)

  3. Bofya Add New juu

  4. Jaza sehemu zote:

  * Site Address — Usitumie "www" kamwe

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Jina la tovuti, linaweza kubadilishwa baadaye

  * Admin Email — Weka kama mtumiaji wa awali wa admin kwa subsite

![Fomu ya kuongeza tovuti mpya katika WordPress Multisite](/img/admin/sites-list.png)

Baada ya kujaza sehemu, bofya kitufe cha "Add site". Subsite mpya ikiundwa, endelea na kuifikia ili kuhakikisha kuwa subsite inafanya kazi.

## Matatizo ya Kawaida:

### 1\. Ninaweza kuunda tovuti mpya lakini hazipatikani.

Ukichagua subdomains, unahitaji pia kusanidi wildcard subdomains kwa mtandao wako wa multisite.

Ili kufanya hivyo, nenda kwenye dashibodi ya paneli ya udhibiti ya akaunti ya hosting ya Tovuti yako (k.m. cPanel/Plesk/Direct Admin kulingana na mtoa huduma wako wa hosting).

Tafuta chaguo la "Domains" au "Subdomains". Katika paneli fulani za udhibiti linaitwa "Domain administration".

Kwenye sehemu ya subdomain, ingiza nyota (*). Kisha, itakuuliza kuchagua jina la domain ambapo unataka subdomain iongezwe chini yake.

Document root kwa jina la domain lililochaguliwa itagunduliwa kiotomatiki. Bofya kitufe cha _Create_ au _Save_ ili kuongeza wildcard subdomain yako. Ingizo linapaswa kuonekana "*.[mydomain.com](http://mydomain.com)"
