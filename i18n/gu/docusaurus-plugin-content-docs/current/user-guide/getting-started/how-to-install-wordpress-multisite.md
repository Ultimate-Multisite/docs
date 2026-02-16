---
title: WordPress Multisite કેવી રીતે ઇન્સ્ટોલ કરવું
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# હું WordPress Multisite કેવી રીતે ઇન્સ્ટોલ કરું?

WordPress Multisite તમને એક જ ઇન્સ્ટોલેશન પર સાઇટ્સનું નેટવર્ક બનાવવાની સુવિધા આપે છે. આ built-in feature છે, પરંતુ default રીતે active નથી.

:::tip
Ultimate Multisite માં **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** સામેલ છે જે આ આખી પ્રક્રિયાને automate કરે છે. જો તમારી પાસે Ultimate Multisite ઇન્સ્ટોલ છે, તો અમે નીચેના manual steps ને બદલે wizard વાપરવાની ભલામણ કરીએ છીએ.
:::

Ultimate Multisite એક network-only plugin હોવાથી, આ tutorial માં તમે WordPress Multisite ને manually ઇન્સ્ટોલ અને setup કરતા શીખશો. આ લખાણ WPBeginner ના [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) પર આધારિત છે.

**તમારું multisite network બનાવતા પહેલા ધ્યાનમાં રાખવાની બાબતો:**

  * સારું WordPress hosting મેળવો! નેટવર્ક પરની websites સમાન server resources share કરે છે.

  * જો તમારી પાસે ઓછી traffic વાળી માત્ર થોડી sites હોય, તો shared hosting કદાચ તમારા માટે કામ કરશે.

  * મોટાભાગના **Managed WordPress hosting providers** Multisite out-of-the-box આપે છે (તેઓ WordPress ને Multisite પહેલેથી activated અને configured સાથે ઇન્સ્ટોલ કરે છે). WP Engine, Closte, Cloudways વગેરે આવા છે. જો તમને ખાતરી ન હોય કે તમારા host provider માટે આવું છે કે નહીં, તો આ tutorial આગળ વધતા પહેલા તેમના support નો સંપર્ક કરો.

  * FTP વાપરીને WordPress ઇન્સ્ટોલ કરવા અને files edit કરવાની જાણકારી હોવી પણ સારી છે.

_**મહત્વપૂર્ણ**_ **:** જો તમે હાલની WordPress website પર multisite network setup કરી રહ્યા છો, તો આ ભૂલશો નહીં:

  * તમારી WordPress site નો સંપૂર્ણ backup બનાવો

  * તમારા plugins page પર જઈને, bulk actions માંથી _Deactivate_ પસંદ કરીને અને પછી _Apply_ પર click કરીને તમારી site પરના બધા plugins deactivate કરો

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite enable કરવા માટે, પહેલા FTP client અથવા cPanel file manager વાપરીને તમારી site સાથે connect થાઓ, અને તમારી wp-config.php file editing માટે ખોલો.

_*That's all, stop editing! Happy blogging.*_ લાઇન પહેલા, નીચેનો code snippet ઉમેરો:

define('WP_ALLOW_MULTISITE', true);

તમારી wp-config.php file save કરો અને server પર પાછી upload કરો.

તમારી site પર multisite feature enable થઈ ગયા પછી, હવે તમારું network setup કરવાનો સમય છે.

**Tools » Network Setup** પર જાઓ

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

હવે તમારે WordPress ને જણાવવાનું છે કે તમારા network માં sites માટે કયું domain structure વાપરશો: subdomains કે subdirectories.

જો તમે subdomains પસંદ કરો, તો domain mapping માટે તમારે DNS settings બદલવી પડશે અને તમારા multisite network માટે _**wildcard subdomains**_ setup કરવાની ખાતરી કરો.

Network Setup પર પાછા આવીને, તમારા network ને title આપો અને ખાતરી કરો કે Network admin email માં email address સાચું છે. ચાલુ રાખવા _Install_ પર click કરો.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress દ્વારા આપેલો આ code તમારી _**wp-config.php**_ માં ઉમેરો:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

અને WordPress દ્વારા આપેલો આ code તમારી _**.htaccess**_ file માં ઉમેરો:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin માં trailing slash ઉમેરો

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

આ બંને files માં code copy અને paste કરવા FTP client અથવા file manager (જો તમે cPanel જેવું કંઈક વાપરો છો) વાપરો.

છેલ્લે, તમારા multisite network ને access કરવા તમારી WordPress site માં ફરીથી login કરો.

**Ultimate Multisite ઇન્સ્ટોલ કરતા પહેલા તમે તમારા WordPress Multisite installation પર subsite બનાવી શકો છો તે test કરવું અને ખાતરી કરવી મહત્વપૂર્ણ છે.**

Subsite બનાવવા:

  1. તમારી websites નું wp-admin ખોલો

  2. My Sites > Sites (/wp-admin/network/sites.php) પર navigate કરો

  3. ટોચ પર Add New પર click કરો

  4. બધા fields ભરો:

  * Site Address — ક્યારેય "www" વાપરશો નહીં

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Site નું title, પછીથી બદલી શકાય છે

  * Admin Email — Subsite માટે initial admin user તરીકે set કરો

![WordPress Multisite માં Add new site form](/img/admin/sites-list.png)

Fields ભર્યા પછી, "Add site" button પર click કરો. નવી subsite બની ગયા પછી, આગળ વધો અને તેને access કરીને ખાતરી કરો કે subsite કામ કરે છે.

## સામાન્ય સમસ્યાઓ:

### 1\. હું નવી sites બનાવી શકું છું પણ તે accessible નથી.

જો તમે subdomains પસંદ કર્યા છે, તો તમારે તમારા multisite network માટે wildcard subdomains પણ setup કરવા પડશે.

આ કરવા, તમારી Website ના hosting account ના control panel dashboard (e.g cPanel/Plesk/Direct Admin તમારા hosting provider પ્રમાણે) પર જાઓ.

"Domains" અથવા "Subdomains" માટે option શોધો. કેટલાક control panels માં તેને "Domain administration" તરીકે label કરેલું હોય છે.

Subdomain field માં, asterisk (*) enter કરો. પછી, તે તમને domain name select કરવા કહેશે જ્યાં subdomain ઉમેરવામાં આવશે.

Selected domain name માટે document root automatically detect થઈ જશે. તમારું wildcard subdomain ઉમેરવા _Create_ અથવા _Save_ button પર click કરો. Entry "*.[mydomain.com](http://mydomain.com)" જેવી દેખાવી જોઈએ
