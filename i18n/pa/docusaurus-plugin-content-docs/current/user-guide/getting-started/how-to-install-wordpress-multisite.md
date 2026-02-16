---
title: ਵਰਡਪ੍ਰੈਸ ਮਲਟੀਸਾਈਟ ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰਨਾ ਹੈ
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# ਮੈਂ WordPress Multisite ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰਾਂ?

WordPress Multisite ਤੁਹਾਨੂੰ ਇੱਕ ਸਿੰਗਲ ਇੰਸਟਾਲੇਸ਼ਨ 'ਤੇ ਸਾਈਟਾਂ ਦਾ ਨੈੱਟਵਰਕ ਬਣਾਉਣ ਦੀ ਸਹੂਲਤ ਦਿੰਦਾ ਹੈ। ਇਹ ਇੱਕ ਬਿਲਟ-ਇਨ ਫੀਚਰ ਹੈ, ਪਰ ਇਹ ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ ਐਕਟਿਵ ਨਹੀਂ ਹੁੰਦਾ।

:::tip
Ultimate Multisite ਵਿੱਚ ਇੱਕ **[ਬਿਲਟ-ਇਨ Multisite Setup Wizard](./multisite-setup-wizard)** ਸ਼ਾਮਲ ਹੈ ਜੋ ਇਸ ਸਾਰੀ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਆਟੋਮੈਟਿਕ ਕਰ ਦਿੰਦਾ ਹੈ। ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ Ultimate Multisite ਇੰਸਟਾਲ ਹੈ, ਤਾਂ ਅਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਮੈਨੂਅਲ ਸਟੈਪਸ ਦੀ ਬਜਾਏ wizard ਵਰਤਣ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦੇ ਹਾਂ।
:::

ਕਿਉਂਕਿ Ultimate Multisite ਇੱਕ ਨੈੱਟਵਰਕ-ਓਨਲੀ plugin ਹੈ, ਇਸ ਟਿਊਟੋਰੀਅਲ ਵਿੱਚ ਤੁਸੀਂ ਸਿੱਖੋਗੇ ਕਿ WordPress Multisite ਨੂੰ ਮੈਨੂਅਲੀ ਕਿਵੇਂ ਇੰਸਟਾਲ ਅਤੇ ਸੈੱਟਅੱਪ ਕਰਨਾ ਹੈ। ਇਹ ਟੈਕਸਟ WPBeginner ਦੇ [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) 'ਤੇ ਅਧਾਰਿਤ ਹੈ।

**ਆਪਣਾ multisite ਨੈੱਟਵਰਕ ਬਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਧਿਆਨ ਦੇਣ ਵਾਲੀਆਂ ਗੱਲਾਂ:**

  * ਵਧੀਆ WordPress hosting ਲਓ! ਨੈੱਟਵਰਕ 'ਤੇ ਵੈੱਬਸਾਈਟਾਂ ਇੱਕੋ ਸਰਵਰ ਰਿਸੋਰਸਿਜ਼ ਸਾਂਝੀਆਂ ਕਰਦੀਆਂ ਹਨ।

  * ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਘੱਟ ਟ੍ਰੈਫਿਕ ਵਾਲੀਆਂ ਸਿਰਫ਼ ਕੁਝ ਸਾਈਟਾਂ ਹਨ, ਤਾਂ shared hosting ਸ਼ਾਇਦ ਤੁਹਾਡੇ ਲਈ ਕੰਮ ਕਰੇਗੀ।

  * ਜ਼ਿਆਦਾਤਰ **Managed WordPress hosting ਪ੍ਰੋਵਾਈਡਰ** Multisite ਆਊਟ-ਆਫ-ਦ-ਬਾਕਸ ਦਿੰਦੇ ਹਨ (ਉਹ WordPress ਨੂੰ Multisite ਪਹਿਲਾਂ ਤੋਂ ਐਕਟੀਵੇਟ ਅਤੇ ਕੌਂਫਿਗਰ ਕਰਕੇ ਇੰਸਟਾਲ ਕਰਦੇ ਹਨ)। ਇਹ WP Engine, Closte, Cloudways, ਆਦਿ ਦਾ ਮਾਮਲਾ ਹੈ। ਜੇਕਰ ਤੁਹਾਨੂੰ ਯਕੀਨ ਨਹੀਂ ਕਿ ਤੁਹਾਡੇ host provider ਨਾਲ ਇਹੀ ਮਾਮਲਾ ਹੈ, ਤਾਂ ਇਸ ਟਿਊਟੋਰੀਅਲ ਨਾਲ ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਉਨ੍ਹਾਂ ਦੀ ਸਪੋਰਟ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।

  * WordPress ਇੰਸਟਾਲ ਕਰਨ ਅਤੇ FTP ਵਰਤ ਕੇ ਫਾਈਲਾਂ ਐਡਿਟ ਕਰਨ ਤੋਂ ਜਾਣੂ ਹੋਣਾ ਵੀ ਚੰਗਾ ਹੈ।

_**ਜ਼ਰੂਰੀ**_ **:** ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਮੌਜੂਦਾ WordPress ਵੈੱਬਸਾਈਟ 'ਤੇ multisite ਨੈੱਟਵਰਕ ਸੈੱਟਅੱਪ ਕਰ ਰਹੇ ਹੋ ਤਾਂ ਇਹ ਨਾ ਭੁੱਲੋ:

  * ਆਪਣੀ WordPress ਸਾਈਟ ਦਾ ਪੂਰਾ ਬੈਕਅੱਪ ਬਣਾਓ

  * ਆਪਣੀ ਸਾਈਟ 'ਤੇ ਸਾਰੇ plugins ਡੀਐਕਟੀਵੇਟ ਕਰੋ, ਆਪਣੇ plugins ਪੇਜ 'ਤੇ ਜਾ ਕੇ bulk actions ਵਿੱਚੋਂ _Deactivate_ ਚੁਣੋ ਅਤੇ ਫਿਰ _Apply_ 'ਤੇ ਕਲਿੱਕ ਕਰੋ

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite ਐਨੇਬਲ ਕਰਨ ਲਈ, ਪਹਿਲਾਂ ਆਪਣੀ ਸਾਈਟ ਨਾਲ FTP client ਜਾਂ cPanel file manager ਵਰਤ ਕੇ ਕਨੈਕਟ ਕਰੋ, ਅਤੇ ਆਪਣੀ wp-config.php ਫਾਈਲ ਐਡਿਟ ਕਰਨ ਲਈ ਖੋਲ੍ਹੋ।

_*That's all, stop editing! Happy blogging.*_ ਲਾਈਨ ਤੋਂ ਪਹਿਲਾਂ, ਇਹ ਕੋਡ ਸਨਿੱਪਟ ਜੋੜੋ:

define('WP_ALLOW_MULTISITE', true);

ਆਪਣੀ wp-config.php ਫਾਈਲ ਸੇਵ ਕਰੋ ਅਤੇ ਸਰਵਰ 'ਤੇ ਵਾਪਸ ਅੱਪਲੋਡ ਕਰੋ।

ਤੁਹਾਡੀ ਸਾਈਟ 'ਤੇ multisite ਫੀਚਰ ਐਨੇਬਲ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਹੁਣ ਆਪਣਾ ਨੈੱਟਵਰਕ ਸੈੱਟਅੱਪ ਕਰਨ ਦਾ ਸਮਾਂ ਹੈ।

**Tools » Network Setup** 'ਤੇ ਜਾਓ

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

ਹੁਣ ਤੁਹਾਨੂੰ WordPress ਨੂੰ ਦੱਸਣਾ ਹੋਵੇਗਾ ਕਿ ਤੁਸੀਂ ਆਪਣੇ ਨੈੱਟਵਰਕ ਵਿੱਚ ਸਾਈਟਾਂ ਲਈ ਕਿਹੜੀ ਕਿਸਮ ਦੀ domain structure ਵਰਤੋਗੇ: subdomains ਜਾਂ subdirectories।

ਜੇਕਰ ਤੁਸੀਂ subdomains ਚੁਣਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ domain mapping ਲਈ ਆਪਣੀਆਂ DNS ਸੈਟਿੰਗਾਂ ਬਦਲਣੀਆਂ ਹੋਣਗੀਆਂ ਅਤੇ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਆਪਣੇ multisite ਨੈੱਟਵਰਕ ਲਈ _**wildcard subdomains**_ ਸੈੱਟਅੱਪ ਕਰੋ।

Network Setup 'ਤੇ ਵਾਪਸ ਆਓ, ਆਪਣੇ ਨੈੱਟਵਰਕ ਨੂੰ ਇੱਕ ਟਾਈਟਲ ਦਿਓ ਅਤੇ ਯਕੀਨੀ ਬਣਾਓ ਕਿ Network admin email ਵਿੱਚ ਈਮੇਲ ਐਡਰੈੱਸ ਸਹੀ ਹੈ। ਜਾਰੀ ਰੱਖਣ ਲਈ _Install_ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress ਵੱਲੋਂ ਦਿੱਤਾ ਗਿਆ ਇਹ ਕੋਡ ਆਪਣੀ _**wp-config.php**_ ਵਿੱਚ ਜੋੜੋ:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

ਅਤੇ ਇਹ ਕੋਡ, ਜੋ WordPress ਵੱਲੋਂ ਵੀ ਦਿੱਤਾ ਗਿਆ ਹੈ, ਆਪਣੀ _**.htaccess**_ ਫਾਈਲ ਵਿੱਚ ਜੋੜੋ:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin ਵਿੱਚ trailing slash ਜੋੜੋ

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client ਜਾਂ file manager (ਜੇਕਰ ਤੁਸੀਂ cPanel ਵਰਗਾ ਕੁਝ ਵਰਤ ਰਹੇ ਹੋ, ਉਦਾਹਰਨ ਲਈ) ਵਰਤੋ ਅਤੇ ਇਹਨਾਂ ਦੋਵਾਂ ਫਾਈਲਾਂ ਵਿੱਚ ਕੋਡ ਕਾਪੀ ਅਤੇ ਪੇਸਟ ਕਰੋ।

ਅੰਤ ਵਿੱਚ, ਆਪਣੇ multisite ਨੈੱਟਵਰਕ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਲਈ ਆਪਣੀ WordPress ਸਾਈਟ ਵਿੱਚ ਦੁਬਾਰਾ ਲੌਗਇਨ ਕਰੋ।

**Ultimate Multisite ਇੰਸਟਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਟੈਸਟ ਕਰਨਾ ਅਤੇ ਯਕੀਨੀ ਬਣਾਉਣਾ ਮਹੱਤਵਪੂਰਨ ਹੈ ਕਿ ਤੁਸੀਂ ਆਪਣੀ WordPress Multisite ਇੰਸਟਾਲੇਸ਼ਨ 'ਤੇ subsite ਬਣਾ ਸਕਦੇ ਹੋ।**

subsite ਬਣਾਉਣ ਲਈ:

  1. ਆਪਣੀ ਵੈੱਬਸਾਈਟ ਦਾ wp-admin ਖੋਲ੍ਹੋ

  2. My Sites > Sites (/wp-admin/network/sites.php) 'ਤੇ ਜਾਓ

  3. ਉੱਪਰ Add New 'ਤੇ ਕਲਿੱਕ ਕਰੋ

  4. ਸਾਰੇ ਫੀਲਡ ਭਰੋ:

  * Site Address — ਕਦੇ ਵੀ "www" ਨਾ ਵਰਤੋ

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — ਸਾਈਟ ਦਾ ਟਾਈਟਲ, ਬਾਅਦ ਵਿੱਚ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ

  * Admin Email — subsite ਲਈ ਸ਼ੁਰੂਆਤੀ admin ਯੂਜ਼ਰ ਵਜੋਂ ਸੈੱਟ ਕਰੋ

![WordPress Multisite ਵਿੱਚ ਨਵੀਂ ਸਾਈਟ ਜੋੜਨ ਦਾ ਫਾਰਮ](/img/admin/sites-list.png)

ਫੀਲਡ ਭਰਨ ਤੋਂ ਬਾਅਦ, "Add site" ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਨਵੀਂ subsite ਬਣਨ ਤੋਂ ਬਾਅਦ, ਅੱਗੇ ਵਧੋ ਅਤੇ ਇਸ ਤੱਕ ਪਹੁੰਚ ਕਰੋ ਤਾਂ ਜੋ ਯਕੀਨੀ ਬਣਾਇਆ ਜਾ ਸਕੇ ਕਿ subsite ਸਹੀ ਤਰ੍ਹਾਂ ਕੰਮ ਕਰ ਰਹੀ ਹੈ।

## ਆਮ ਸਮੱਸਿਆਵਾਂ:

### 1\. ਮੈਂ ਨਵੀਆਂ ਸਾਈਟਾਂ ਬਣਾ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ ਪਰ ਉਹ ਐਕਸੈਸ ਨਹੀਂ ਹੋ ਰਹੀਆਂ।

ਜੇਕਰ ਤੁਸੀਂ subdomains ਚੁਣੇ ਹਨ, ਤਾਂ ਤੁਹਾਨੂੰ ਆਪਣੇ multisite ਨੈੱਟਵਰਕ ਲਈ wildcard subdomains ਵੀ ਸੈੱਟਅੱਪ ਕਰਨੇ ਪੈਣਗੇ।

ਇਹ ਕਰਨ ਲਈ, ਆਪਣੀ ਵੈੱਬਸਾਈਟ ਦੇ hosting account ਦੇ control panel dashboard (ਜਿਵੇਂ cPanel/Plesk/Direct Admin, ਤੁਹਾਡੇ hosting provider 'ਤੇ ਨਿਰਭਰ ਕਰਦਿਆਂ) 'ਤੇ ਜਾਓ।

"Domains" ਜਾਂ "Subdomains" ਲਈ ਆਪਸ਼ਨ ਲੱਭੋ। ਕੁਝ control panels ਵਿੱਚ ਇਸਨੂੰ "Domain administration" ਲੇਬਲ ਕੀਤਾ ਹੁੰਦਾ ਹੈ।

subdomain ਫੀਲਡ ਵਿੱਚ, ਇੱਕ asterisk (*) ਦਰਜ ਕਰੋ। ਫਿਰ, ਇਹ ਤੁਹਾਨੂੰ ਇੱਕ domain name ਚੁਣਨ ਲਈ ਕਹੇਗਾ ਜਿਸ ਦੇ ਅਧੀਨ ਤੁਸੀਂ subdomain ਜੋੜਨਾ ਚਾਹੁੰਦੇ ਹੋ।

ਚੁਣੇ ਗਏ domain name ਲਈ document root ਆਪਣੇ ਆਪ ਡਿਟੈਕਟ ਹੋ ਜਾਵੇਗਾ। ਆਪਣਾ wildcard subdomain ਜੋੜਨ ਲਈ _Create_ ਜਾਂ _Save_ ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਐਂਟਰੀ "*.[mydomain.com](http://mydomain.com)" ਵਰਗੀ ਦਿਖਣੀ ਚਾਹੀਦੀ ਹੈ
