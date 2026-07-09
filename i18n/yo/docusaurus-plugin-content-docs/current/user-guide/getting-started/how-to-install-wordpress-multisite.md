---
title: Bí a ṣe lè fi WordPress Multisite sori ẹrọ
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Báwo ni mo ṣe le Fi WordPress Multisite Sori Ẹrọ?

WordPress Multisite gba ọ laaye lati ní nẹ́tíwọ́ọ̀kì àwọn site lori fifi sori ẹrọ kan ṣoṣo. Èyí jẹ́ ẹ̀ya tí ó wà nínú rẹ̀, ṣùgbọ́n kò ṣiṣẹ́ ní aiyipada.

:::tip
Ultimate Multisite ní **[Multisite Setup Wizard tí a kọ sínú rẹ̀](./multisite-setup-wizard)** tí ń ṣe gbogbo ilana yìí laifọwọyi. Bí o bá ti fi Ultimate Multisite sori ẹrọ, a ṣedámọ̀ràn lílo wizard dípò títẹ̀lé àwọn ìgbésẹ̀ ọwọ́ ní ìsàlẹ̀.
:::

Níwọ̀n bí Ultimate Multisite ṣe jẹ́ plugin fún nẹ́tíwọ́ọ̀kì nìkan, nínú ìtọ́nisọ́nà yìí, ìwọ yóò kọ́ bí a ṣe ń fi WordPress Multisite sori ẹrọ àti ṣètò rẹ̀ pẹ̀lú ọwọ́. Ọ̀rọ̀ yìí dá lórí [Bí a ṣe ń Fi WordPress Multisite Network Sori Ẹrọ àti Ṣètò Rẹ̀](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), láti WPBeginner.

**Àwọn nkan láti fiyèsí kí o tó dá nẹ́tíwọ́ọ̀kì multisite rẹ sílẹ̀:**

  * Gba WordPress hosting tó dára! Àwọn website lori nẹ́tíwọ́ọ̀kì máa ń pín àwọn ohun èlò server kan náà.

  * Bí o bá ní site díẹ̀ péré tí traffic wọn kéré, shared hosting lè ṣiṣẹ́ fún ọ.

  * Ọ̀pọ̀ àwọn **olùpèsè Managed WordPress hosting** ń fúnni ní Multisite láìní ìṣètò míì (wọ́n fi WordPress sori ẹrọ pẹ̀lú Multisite tí a ti mú ṣiṣẹ́ tí a sì ti ṣètò fún ọ). Èyí rí bẹ́ẹ̀ fún WP Engine, Closte, Cloudways, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ. Bí o kò bá dá ọ lójú pé bẹ́ẹ̀ ni fún olùpèsè host rẹ, kan sí support wọn kí o tó tẹ̀síwájú pẹ̀lú ìtọ́nisọ́nà yìí.

  * Ó tún dára láti mọ bí a ṣe ń fi WordPress sori ẹrọ àti bí a ṣe ń ṣàtúnṣe àwọn file ní lílo FTP .

_**PÀTÀKÌ**_ **:** Bí o bá ń ṣètò nẹ́tíwọ́ọ̀kì multisite lori website WordPress tó ti wà tẹ́lẹ̀, má ṣe gbàgbé láti:

  * Ṣẹ̀dá backup pipe fún site WordPress rẹ

  * Mú gbogbo plugins lori site rẹ kúrò ní ṣiṣẹ́ nípa lílọ sí ojú ewé plugins rẹ, yíyan _Deactivate_ láti bulk actions, lẹ́yìn náà kí o tẹ _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Láti mú Multisite ṣiṣẹ́, kọ́kọ́ so mọ́ site rẹ ní lílo FTP client tàbí cPanel file manager, kí o sì ṣí file wp-config.php rẹ fún ṣíṣe àtúnṣe.

Ṣáájú ila _*That’s all, stop editing! Happy blogging.*_, ṣàfikún code snippet tó tẹ̀lé yìí:

define('WP_ALLOW_MULTISITE', true);

Fi file wp-config.php rẹ pamọ́, kí o sì upload rẹ padà sí server.

Pẹ̀lú ẹ̀ya multisite tí a ti mú ṣiṣẹ́ lori site rẹ, báyìí àsìkò ti tó láti ṣètò nẹ́tíwọ́ọ̀kì rẹ.

Lọ sí **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Báyìí o ní láti sọ fún WordPress irú eto domain tí ìwọ yóò máa lò fún àwọn site nínú nẹ́tíwọ́ọ̀kì rẹ: subdomains tàbí subdirectories.

Bí o bá yan subdomains, o gbọ́dọ̀ yí àwọn ìṣètò DNS rẹ padà fún domain mapping, kí o sì rii dájú pé o ṣètò _**wildcard subdomains**_ fún nẹ́tíwọ́ọ̀kì multisite rẹ.

Padà sí Network Setup, fún nẹ́tíwọ́ọ̀kì rẹ ní àkọlé, kí o sì rii dájú pé àdírẹ́sì email nínú Network admin email tọ́. Tẹ _Install_ láti tẹ̀síwájú.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Ṣàfikún code yìí, tí WordPress pèsè, sí _**wp-config.php**_ rẹ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Àti code yìí, tí WordPress tún pèsè, sí file _**.htaccess**_ rẹ:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Lo FTP client tàbí file manager (bí o bá ń lo nkan bí cPanel, fún àpẹẹrẹ) láti copy àti paste code sínú àwọn file méjì yìí.

Ní ìparí, wọlé padà sí site WordPress rẹ láti wọlé sí nẹ́tíwọ́ọ̀kì multisite rẹ.

**Ó ṣe pàtàkì láti dán an wò, kí o sì rii dájú pé o lè ṣẹ̀dá subsite lori fifi sori ẹrọ WordPress Multisite rẹ kí o tó fi Ultimate Multisite sori ẹrọ.**

Láti ṣẹ̀dá subsite:

  1. Ṣí wp-admin àwọn website rẹ

  2. Lọ sí My Sites > Sites (/wp-admin/network/sites.php)

  3. Tẹ Add New ní òkè

  4. Kun gbogbo field:

  * Site Address — Má ṣe lo “www” rárá

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Àkọlé site náà, a lè yí i padà lẹ́yìn náà

  * Admin Email — Ṣètò gẹ́gẹ́ bí admin user àkọ́kọ́ fún subsite náà

![Fọ́ọ̀mù fífi site tuntun kún un nínú WordPress Multisite](/img/admin/sites-list.png)

Lẹ́yìn fífi àwọn field kún, tẹ bọ́tìnì "Add site". Nígbà tí a bá ti ṣẹ̀dá subsite tuntun náà, tẹ̀síwájú kí o wọlé sí i láti rii dájú pé subsite náà ń ṣiṣẹ́.

## Àwọn Ìṣòro Tó Wọ́pọ̀:

### 1\. Mo lè ṣẹ̀dá àwọn site tuntun ṣùgbọ́n a kò lè wọlé sí wọn.

Bí o bá yan subdomains, o tún ní láti ṣètò wildcard subdomains fún nẹ́tíwọ́ọ̀kì multisite rẹ.

Láti ṣe bẹ́ẹ̀, lọ sí dashboard control panel account hosting Website rẹ (àpẹẹrẹ cPanel/Plesk/Direct Admin, ó dá lórí olùpèsè hosting rẹ).

Wa aṣayan fún “Domains” tàbí “Subdomains”. Nínú díẹ̀ lára àwọn control panel, a máa ń pè é ní “Domain administration”.

Lori field subdomain, tẹ asterisk (*) sí i. Lẹ́yìn náà, ó yẹ kí ó béèrè lọwọ rẹ láti yan orúkọ domain tí o fẹ́ kí a fi subdomain náà sí abẹ́ rẹ̀.

Document root fún orúkọ domain tí a yan yóò jẹ́ àmúlò laifọwọyi. Tẹ bọ́tìnì _Create_ tàbí _Save_ láti ṣàfikún wildcard subdomain rẹ. Ìwọlé náà yẹ kí ó dàbí “*.[mydomain.com](http://mydomain.com)”
