---
title: WordPress Multisite ಅನ್ನು ಹೇಗೆ ಸ್ಥಾಪಿಸುವುದು
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite ಅನ್ನು ಹೇಗೆ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು?

WordPress Multisite ಒಂದೇ ಇನ್‌ಸ್ಟಾಲೇಷನ್‌ನಲ್ಲಿ ಹಲವಾರು ಸೈಟ್‌ಗಳ ನೆಟ್‌ವರ್ಕ್ ಹೊಂದಲು ಅನುಮತಿಸುತ್ತದೆ. ಇದು ಅಂತರ್ನಿರ್ಮಿತ ವೈಶಿಷ್ಟ್ಯವಾಗಿದೆ, ಆದರೆ ಡೀಫಾಲ್ಟ್ ಆಗಿ ಸಕ್ರಿಯವಾಗಿರುವುದಿಲ್ಲ.

:::tip
Ultimate Multisite ನಲ್ಲಿ **[ಅಂತರ್ನಿರ್ಮಿತ Multisite Setup Wizard](./multisite-setup-wizard)** ಇದೆ, ಇದು ಈ ಸಂಪೂರ್ಣ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುತ್ತದೆ. ನೀವು Ultimate Multisite ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದ್ದರೆ, ಕೆಳಗಿನ ಮ್ಯಾನ್ಯುವಲ್ ಹಂತಗಳನ್ನು ಅನುಸರಿಸುವ ಬದಲು wizard ಬಳಸುವುದನ್ನು ನಾವು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ.
:::

Ultimate Multisite ನೆಟ್‌ವರ್ಕ್-ಮಾತ್ರ plugin ಆಗಿರುವುದರಿಂದ, ಈ ಟ್ಯುಟೋರಿಯಲ್‌ನಲ್ಲಿ ನೀವು WordPress Multisite ಅನ್ನು ಮ್ಯಾನ್ಯುವಲ್ ಆಗಿ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು ಮತ್ತು ಸೆಟಪ್ ಮಾಡುವುದು ಹೇಗೆ ಎಂದು ಕಲಿಯುತ್ತೀರಿ. ಈ ಪಠ್ಯವು WPBeginner ನ [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ಆಧಾರಿತವಾಗಿದೆ.

**ನಿಮ್ಮ multisite network ರಚಿಸುವ ಮೊದಲು ಗಮನಿಸಬೇಕಾದ ವಿಷಯಗಳು:**

  * ಉತ್ತಮ WordPress hosting ಪಡೆಯಿರಿ! ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿರುವ ವೆಬ್‌ಸೈಟ್‌ಗಳು ಒಂದೇ ಸರ್ವರ್ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ.

  * ನಿಮ್ಮ ಬಳಿ ಕಡಿಮೆ ಟ್ರಾಫಿಕ್ ಹೊಂದಿರುವ ಕೆಲವು ಸೈಟ್‌ಗಳು ಮಾತ್ರ ಇದ್ದರೆ, shared hosting ನಿಮಗೆ ಸಾಕಾಗಬಹುದು.

  * ಹೆಚ್ಚಿನ **Managed WordPress hosting ಪೂರೈಕೆದಾರರು** Multisite ಅನ್ನು ಸಿದ್ಧವಾಗಿಯೇ ನೀಡುತ್ತಾರೆ (ಅವರು WordPress ಅನ್ನು Multisite ಈಗಾಗಲೇ ಸಕ್ರಿಯಗೊಳಿಸಿ ಮತ್ತು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುತ್ತಾರೆ). WP Engine, Closte, Cloudways, ಇತ್ಯಾದಿಗಳ ವಿಷಯದಲ್ಲಿ ಇದು ಹೀಗೆಯೇ ಇದೆ. ನಿಮ್ಮ hosting ಪೂರೈಕೆದಾರರ ವಿಷಯದಲ್ಲಿ ಹೀಗಿದೆಯೇ ಎಂದು ಖಚಿತವಿಲ್ಲದಿದ್ದರೆ, ಈ ಟ್ಯುಟೋರಿಯಲ್ ಮುಂದುವರಿಸುವ ಮೊದಲು ಅವರ support ಅನ್ನು ಸಂಪರ್ಕಿಸಿ.

  * WordPress ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು ಮತ್ತು FTP ಬಳಸಿ ಫೈಲ್‌ಗಳನ್ನು ಎಡಿಟ್ ಮಾಡುವುದು ತಿಳಿದಿರುವುದು ಸಹ ಒಳ್ಳೆಯದು.

_**ಮಹತ್ವದ ಸೂಚನೆ**_ **:** ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ WordPress ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ multisite network ಸೆಟಪ್ ಮಾಡುತ್ತಿದ್ದರೆ ಇವುಗಳನ್ನು ಮರೆಯಬೇಡಿ:

  * ನಿಮ್ಮ WordPress ಸೈಟ್‌ನ ಸಂಪೂರ್ಣ backup ತೆಗೆದುಕೊಳ್ಳಿ

  * ನಿಮ್ಮ plugins ಪುಟಕ್ಕೆ ಹೋಗಿ bulk actions ನಿಂದ _Deactivate_ ಆಯ್ಕೆ ಮಾಡಿ ನಂತರ _Apply_ ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ ನಿಮ್ಮ ಸೈಟ್‌ನಲ್ಲಿರುವ ಎಲ್ಲಾ plugins ಅನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite ಸಕ್ರಿಯಗೊಳಿಸಲು, ಮೊದಲು FTP client ಅಥವಾ cPanel file manager ಬಳಸಿ ನಿಮ್ಮ ಸೈಟ್‌ಗೆ ಸಂಪರ್ಕಿಸಿ, ಮತ್ತು ನಿಮ್ಮ wp-config.php ಫೈಲ್ ಅನ್ನು ಎಡಿಟ್ ಮಾಡಲು ತೆರೆಯಿರಿ.

_*That's all, stop editing! Happy blogging.*_ ಸಾಲಿನ ಮೊದಲು, ಈ ಕೆಳಗಿನ code snippet ಸೇರಿಸಿ:

define('WP_ALLOW_MULTISITE', true);

ನಿಮ್ಮ wp-config.php ಫೈಲ್ ಅನ್ನು save ಮಾಡಿ ಮತ್ತು ಸರ್ವರ್‌ಗೆ ಮರಳಿ upload ಮಾಡಿ.

ನಿಮ್ಮ ಸೈಟ್‌ನಲ್ಲಿ multisite ವೈಶಿಷ್ಟ್ಯ ಸಕ್ರಿಯಗೊಂಡ ನಂತರ, ಈಗ ನಿಮ್ಮ network ಸೆಟಪ್ ಮಾಡುವ ಸಮಯ.

**Tools » Network Setup** ಗೆ ಹೋಗಿ

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

ಈಗ ನಿಮ್ಮ network ನಲ್ಲಿರುವ ಸೈಟ್‌ಗಳಿಗೆ ಯಾವ ರೀತಿಯ domain ರಚನೆ ಬಳಸುತ್ತೀರಿ ಎಂದು WordPress ಗೆ ಹೇಳಬೇಕು: subdomains ಅಥವಾ subdirectories.

ನೀವು subdomains ಆಯ್ಕೆ ಮಾಡಿದರೆ, domain mapping ಗಾಗಿ ನಿಮ್ಮ DNS settings ಬದಲಾಯಿಸಬೇಕು ಮತ್ತು ನಿಮ್ಮ multisite network ಗಾಗಿ _**wildcard subdomains**_ ಸೆಟಪ್ ಮಾಡಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.

Network Setup ಗೆ ಹಿಂತಿರುಗಿ, ನಿಮ್ಮ network ಗೆ ಒಂದು ಶೀರ್ಷಿಕೆ ನೀಡಿ ಮತ್ತು Network admin email ನಲ್ಲಿರುವ ಇಮೇಲ್ ವಿಳಾಸ ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ಮುಂದುವರಿಸಲು _Install_ ಕ್ಲಿಕ್ ಮಾಡಿ.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress ಒದಗಿಸಿದ ಈ code ಅನ್ನು ನಿಮ್ಮ _**wp-config.php**_ ಗೆ ಸೇರಿಸಿ:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

ಮತ್ತು WordPress ಒದಗಿಸಿದ ಈ code ಅನ್ನು ನಿಮ್ಮ _**.htaccess**_ ಫೈಲ್‌ಗೆ ಸೇರಿಸಿ:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin ಗೆ trailing slash ಸೇರಿಸಿ

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

ಈ ಎರಡು ಫೈಲ್‌ಗಳಲ್ಲಿ code ಅನ್ನು copy ಮತ್ತು paste ಮಾಡಲು FTP client ಅಥವಾ file manager (ನೀವು cPanel ನಂತಹದ್ದನ್ನು ಬಳಸುತ್ತಿದ್ದರೆ, ಉದಾಹರಣೆಗೆ) ಬಳಸಿ.

ಕೊನೆಯದಾಗಿ, ನಿಮ್ಮ multisite network ಪ್ರವೇಶಿಸಲು ನಿಮ್ಮ WordPress ಸೈಟ್‌ಗೆ ಮರು-ಲಾಗಿನ್ ಮಾಡಿ.

**Ultimate Multisite ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಮೊದಲು ನಿಮ್ಮ WordPress Multisite installation ನಲ್ಲಿ subsite ರಚಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುವುದು ಮುಖ್ಯ.**

subsite ರಚಿಸಲು:

  1. ನಿಮ್ಮ websites wp-admin ತೆರೆಯಿರಿ

  2. My Sites > Sites (/wp-admin/network/sites.php) ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ

  3. ಮೇಲ್ಭಾಗದಲ್ಲಿ Add New ಕ್ಲಿಕ್ ಮಾಡಿ

  4. ಎಲ್ಲಾ ಫೀಲ್ಡ್‌ಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ:

  * Site Address — "www" ಎಂದಿಗೂ ಬಳಸಬೇಡಿ

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — ಸೈಟ್‌ನ ಶೀರ್ಷಿಕೆ, ನಂತರ ಬದಲಾಯಿಸಬಹುದು

  * Admin Email — subsite ಗಾಗಿ ಆರಂಭಿಕ admin ಬಳಕೆದಾರರಾಗಿ ಹೊಂದಿಸಲಾಗುತ್ತದೆ

![WordPress Multisite ನಲ್ಲಿ ಹೊಸ ಸೈಟ್ ಸೇರಿಸುವ ಫಾರ್ಮ್](/img/admin/sites-list.png)

ಫೀಲ್ಡ್‌ಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿದ ನಂತರ, "Add site" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ಹೊಸ subsite ರಚಿಸಿದ ನಂತರ, subsite ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಅದನ್ನು ಪ್ರವೇಶಿಸಿ.

## ಸಾಮಾನ್ಯ ಸಮಸ್ಯೆಗಳು:

### 1\. ನಾನು ಹೊಸ ಸೈಟ್‌ಗಳನ್ನು ರಚಿಸಬಹುದು ಆದರೆ ಅವುಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ.

ನೀವು subdomains ಆಯ್ಕೆ ಮಾಡಿದ್ದರೆ, ನಿಮ್ಮ multisite network ಗಾಗಿ wildcard subdomains ಸಹ ಸೆಟಪ್ ಮಾಡಬೇಕು.

ಇದನ್ನು ಮಾಡಲು, ನಿಮ್ಮ Website ನ hosting account ನ control panel dashboard ಗೆ ಹೋಗಿ (ಉದಾ. ನಿಮ್ಮ hosting ಪೂರೈಕೆದಾರರನ್ನು ಅವಲಂಬಿಸಿ cPanel/Plesk/Direct Admin).

"Domains" ಅಥವಾ "Subdomains" ಆಯ್ಕೆಯನ್ನು ಹುಡುಕಿ. ಕೆಲವು control panels ನಲ್ಲಿ ಇದನ್ನು "Domain administration" ಎಂದು ಲೇಬಲ್ ಮಾಡಲಾಗಿರುತ್ತದೆ.

subdomain ಫೀಲ್ಡ್‌ನಲ್ಲಿ, ನಕ್ಷತ್ರ ಚಿಹ್ನೆ (*) ನಮೂದಿಸಿ. ನಂತರ, subdomain ಯಾವ domain name ಅಡಿಯಲ್ಲಿ ಸೇರಿಸಬೇಕು ಎಂದು ಆಯ್ಕೆ ಮಾಡಲು ಕೇಳಬಹುದು.

ಆಯ್ಕೆ ಮಾಡಿದ domain name ಗಾಗಿ document root ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪತ್ತೆಯಾಗುತ್ತದೆ. ನಿಮ್ಮ wildcard subdomain ಸೇರಿಸಲು _Create_ ಅಥವಾ _Save_ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ಎಂಟ್ರಿ "*.[mydomain.com](http://mydomain.com)" ಎಂದು ಕಾಣಿಸಬೇಕು
