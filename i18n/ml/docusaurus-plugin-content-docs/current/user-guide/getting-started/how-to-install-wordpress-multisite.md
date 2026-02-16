---
title: WordPress Multisite എങ്ങനെ ഇൻസ്റ്റാൾ ചെയ്യാം
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite എങ്ങനെ ഇൻസ്റ്റാൾ ചെയ്യാം?

WordPress Multisite ഉപയോഗിച്ച് നിങ്ങൾക്ക് ഒരൊറ്റ ഇൻസ്റ്റാളേഷനിൽ സൈറ്റുകളുടെ ഒരു നെറ്റ്‌വർക്ക് ഉണ്ടാക്കാം. ഇത് WordPress-ൽ built-in ആയി ഉള്ള ഒരു ഫീച്ചറാണ്, പക്ഷേ സ്വതവേ ഇത് active ആയിരിക്കില്ല.

:::tip
Ultimate Multisite-ൽ ഒരു **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** ഉൾപ്പെടുന്നു, ഇത് ഈ മുഴുവൻ പ്രക്രിയയും ഓട്ടോമേറ്റ് ചെയ്യുന്നു. നിങ്ങൾ Ultimate Multisite ഇൻസ്റ്റാൾ ചെയ്തിട്ടുണ്ടെങ്കിൽ, താഴെയുള്ള മാനുവൽ സ്റ്റെപ്പുകൾ പിന്തുടരുന്നതിനു പകരം wizard ഉപയോഗിക്കാൻ ഞങ്ങൾ ശുപാർശ ചെയ്യുന്നു.
:::

Ultimate Multisite ഒരു network-only plugin ആയതിനാൽ, ഈ ട്യൂട്ടോറിയലിൽ WordPress Multisite മാനുവലായി എങ്ങനെ ഇൻസ്റ്റാൾ ചെയ്യാമെന്നും സെറ്റപ്പ് ചെയ്യാമെന്നും നിങ്ങൾ പഠിക്കും. ഈ ടെക്സ്റ്റ് WPBeginner-ൽ നിന്നുള്ള [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) അടിസ്ഥാനമാക്കിയുള്ളതാണ്.

**നിങ്ങളുടെ multisite network ഉണ്ടാക്കുന്നതിന് മുമ്പ് ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ:**

  * നല്ല WordPress hosting എടുക്കുക! ഒരു network-ലെ വെബ്‌സൈറ്റുകൾ ഒരേ server resources പങ്കിടുന്നു.

  * കുറഞ്ഞ ട്രാഫിക്കുള്ള രണ്ടോ മൂന്നോ സൈറ്റുകൾ മാത്രമേ ഉള്ളൂവെങ്കിൽ, shared hosting നിങ്ങൾക്ക് മതിയാകും.

  * മിക്ക **Managed WordPress hosting providers**-ഉം Multisite out-of-the-box ഓഫർ ചെയ്യുന്നു (അവർ WordPress ഇൻസ്റ്റാൾ ചെയ്യുമ്പോൾ തന്നെ Multisite activate ചെയ്ത് configure ചെയ്തിരിക്കും). WP Engine, Closte, Cloudways മുതലായവയുടെ കാര്യത്തിൽ ഇങ്ങനെയാണ്. നിങ്ങളുടെ host provider-ന്റെ കാര്യത്തിൽ ഇതാണോ എന്ന് ഉറപ്പില്ലെങ്കിൽ, ഈ ട്യൂട്ടോറിയലുമായി മുന്നോട്ട് പോകുന്നതിന് മുമ്പ് അവരുടെ support-ൽ ബന്ധപ്പെടുക.

  * WordPress ഇൻസ്റ്റാൾ ചെയ്യുന്നതിലും FTP ഉപയോഗിച്ച് ഫയലുകൾ എഡിറ്റ് ചെയ്യുന്നതിലും പരിചയം ഉണ്ടായിരിക്കുന്നതും നല്ലതാണ്.

_**പ്രധാനം**_ **:** നിലവിലുള്ള ഒരു WordPress വെബ്‌സൈറ്റിൽ multisite network സെറ്റപ്പ് ചെയ്യുകയാണെങ്കിൽ ഇവ മറക്കരുത്:

  * നിങ്ങളുടെ WordPress സൈറ്റിന്റെ പൂർണ്ണമായ backup എടുക്കുക

  * നിങ്ങളുടെ plugins page-ൽ പോയി bulk actions-ൽ നിന്ന് _Deactivate_ തിരഞ്ഞെടുത്ത് _Apply_ ക്ലിക്ക് ചെയ്ത് എല്ലാ plugins-ഉം deactivate ചെയ്യുക

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite enable ചെയ്യാൻ, ആദ്യം FTP client അല്ലെങ്കിൽ cPanel file manager ഉപയോഗിച്ച് നിങ്ങളുടെ സൈറ്റിലേക്ക് connect ചെയ്യുക, എന്നിട്ട് wp-config.php ഫയൽ editing-നായി തുറക്കുക.

_*That's all, stop editing! Happy blogging.*_ എന്ന വരിക്ക് മുമ്പ്, ഈ code snippet ചേർക്കുക:

define('WP_ALLOW_MULTISITE', true);

നിങ്ങളുടെ wp-config.php ഫയൽ save ചെയ്ത് server-ലേക്ക് തിരികെ upload ചെയ്യുക.

നിങ്ങളുടെ സൈറ്റിൽ multisite feature enable ചെയ്തതോടെ, ഇനി network സെറ്റപ്പ് ചെയ്യാനുള്ള സമയമാണ്.

**Tools » Network Setup**-ലേക്ക് പോകുക

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

ഇനി നിങ്ങളുടെ network-ലെ sites-ന് ഏത് തരം domain structure ഉപയോഗിക്കുമെന്ന് WordPress-നോട് പറയണം: subdomains അല്ലെങ്കിൽ subdirectories.

നിങ്ങൾ subdomains തിരഞ്ഞെടുക്കുകയാണെങ്കിൽ, domain mapping-നായി DNS settings മാറ്റുകയും നിങ്ങളുടെ multisite network-നായി _**wildcard subdomains**_ സെറ്റപ്പ് ചെയ്യുകയും വേണം.

Network Setup-ലേക്ക് തിരിച്ചുവന്ന്, നിങ്ങളുടെ network-ന് ഒരു title നൽകുക, Network admin email-ലെ email address ശരിയാണെന്ന് ഉറപ്പാക്കുക. തുടരാൻ _Install_ ക്ലിക്ക് ചെയ്യുക.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress നൽകുന്ന ഈ code നിങ്ങളുടെ _**wp-config.php**_-ൽ ചേർക്കുക:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

WordPress നൽകുന്ന ഈ code നിങ്ങളുടെ _**.htaccess**_ ഫയലിലും ചേർക്കുക:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin-ന് trailing slash ചേർക്കുക

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

ഈ രണ്ട് ഫയലുകളിലും code copy ചെയ്ത് paste ചെയ്യാൻ FTP client അല്ലെങ്കിൽ file manager (ഉദാഹരണത്തിന്, cPanel പോലെ എന്തെങ്കിലും ഉപയോഗിക്കുകയാണെങ്കിൽ) ഉപയോഗിക്കുക.

അവസാനമായി, നിങ്ങളുടെ multisite network access ചെയ്യാൻ WordPress site-ലേക്ക് വീണ്ടും login ചെയ്യുക.

**Ultimate Multisite ഇൻസ്റ്റാൾ ചെയ്യുന്നതിന് മുമ്പ് നിങ്ങളുടെ WordPress Multisite installation-ൽ ഒരു subsite ഉണ്ടാക്കാൻ കഴിയുന്നുണ്ടെന്ന് test ചെയ്ത് ഉറപ്പാക്കേണ്ടത് പ്രധാനമാണ്.**

ഒരു subsite ഉണ്ടാക്കാൻ:

  1. നിങ്ങളുടെ websites wp-admin തുറക്കുക

  2. My Sites > Sites-ലേക്ക് നാവിഗേറ്റ് ചെയ്യുക (/wp-admin/network/sites.php)

  3. മുകളിൽ Add New ക്ലിക്ക് ചെയ്യുക

  4. എല്ലാ fields-ഉം പൂരിപ്പിക്കുക:

  * Site Address — ഒരിക്കലും "www" ഉപയോഗിക്കരുത്

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — സൈറ്റിന്റെ title, പിന്നീട് മാറ്റാവുന്നതാണ്

  * Admin Email — subsite-ന്റെ initial admin user ആയി സെറ്റ് ചെയ്യുക

![WordPress Multisite-ൽ Add new site form](/img/admin/sites-list.png)

fields പൂരിപ്പിച്ചതിന് ശേഷം, "Add site" ബട്ടൺ ക്ലിക്ക് ചെയ്യുക. പുതിയ subsite ഉണ്ടായിക്കഴിഞ്ഞാൽ, subsite ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കാൻ അത് access ചെയ്ത് നോക്കുക.

## സാധാരണ പ്രശ്നങ്ങൾ:

### 1\. എനിക്ക് പുതിയ sites ഉണ്ടാക്കാൻ കഴിയുന്നു, പക്ഷേ അവ access ചെയ്യാൻ കഴിയുന്നില്ല.

നിങ്ങൾ subdomains തിരഞ്ഞെടുത്തതാണെങ്കിൽ, നിങ്ങളുടെ multisite network-നായി wildcard subdomains സെറ്റപ്പ് ചെയ്യേണ്ടതുണ്ട്.

അത് ചെയ്യാൻ, നിങ്ങളുടെ Website-ന്റെ hosting account-ന്റെ control panel dashboard-ലേക്ക് പോകുക (നിങ്ങളുടെ hosting provider-നെ ആശ്രയിച്ച് cPanel/Plesk/Direct Admin).

"Domains" അല്ലെങ്കിൽ "Subdomains" എന്ന option കണ്ടെത്തുക. ചില control panels-ൽ ഇത് "Domain administration" എന്ന് label ചെയ്തിരിക്കും.

subdomain field-ൽ, ഒരു asterisk (*) enter ചെയ്യുക. എന്നിട്ട്, subdomain ഏത് domain name-ന്റെ കീഴിൽ ചേർക്കണമെന്ന് തിരഞ്ഞെടുക്കാൻ ആവശ്യപ്പെടും.

തിരഞ്ഞെടുത്ത domain name-ന്റെ document root സ്വയം detect ചെയ്യപ്പെടും. നിങ്ങളുടെ wildcard subdomain ചേർക്കാൻ _Create_ അല്ലെങ്കിൽ _Save_ ബട്ടൺ ക്ലിക്ക് ചെയ്യുക. entry "*.[mydomain.com](http://mydomain.com)" എന്ന് കാണിക്കണം
