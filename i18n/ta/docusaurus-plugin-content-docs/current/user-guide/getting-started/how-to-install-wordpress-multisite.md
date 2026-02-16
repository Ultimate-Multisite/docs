---
title: WordPress Multisite எவ்வாறு நிறுவுவது
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite-ஐ எப்படி நிறுவுவது?

WordPress Multisite ஒரே நிறுவலில் பல தளங்களின் நெட்வொர்க்கை உருவாக்க அனுமதிக்கிறது. இது உள்ளமைக்கப்பட்ட அம்சம், ஆனால் இயல்பாக இயக்கப்பட்டிருக்காது.

:::tip
Ultimate Multisite-ல் **[உள்ளமைக்கப்பட்ட Multisite Setup Wizard](./multisite-setup-wizard)** உள்ளது, இது இந்த முழு செயல்முறையையும் தானியங்கியாக்குகிறது. உங்களிடம் Ultimate Multisite நிறுவப்பட்டிருந்தால், கீழே உள்ள கைமுறை படிகளைப் பின்பற்றுவதற்குப் பதிலாக wizard-ஐ பயன்படுத்துவதை நாங்கள் பரிந்துரைக்கிறோம்.
:::

Ultimate Multisite ஒரு network-only plugin என்பதால், இந்த டுடோரியலில் WordPress Multisite-ஐ கைமுறையாக நிறுவி அமைப்பது எப்படி என்று கற்றுக்கொள்ளப் போகிறீர்கள். இந்த உரை WPBeginner-ன் [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) அடிப்படையில் எழுதப்பட்டது.

**உங்கள் multisite நெட்வொர்க்கை உருவாக்குவதற்கு முன் கவனிக்க வேண்டிய விஷயங்கள்:**

  * நல்ல WordPress hosting பெறுங்கள்! நெட்வொர்க்கில் உள்ள தளங்கள் அதே சர்வர் வளங்களைப் பகிர்ந்து கொள்கின்றன.

  * குறைந்த traffic கொண்ட ஒரு சில தளங்கள் மட்டுமே உங்களிடம் இருந்தால், shared hosting உங்களுக்கு வேலை செய்யும்.

  * பெரும்பாலான **Managed WordPress hosting வழங்குநர்கள்** Multisite-ஐ உடனடியாக வழங்குகின்றனர் (அவர்கள் WordPress-ஐ Multisite ஏற்கனவே செயல்படுத்தப்பட்டு கட்டமைக்கப்பட்ட நிலையில் நிறுவுகின்றனர்). WP Engine, Closte, Cloudways போன்றவை இதற்கு உதாரணங்கள். உங்கள் host provider-க்கு இது பொருந்துமா என்று தெரியாவிட்டால், இந்த டுடோரியலைத் தொடர்வதற்கு முன் அவர்களின் support-ஐ தொடர்பு கொள்ளுங்கள்.

  * WordPress நிறுவுவது மற்றும் FTP பயன்படுத்தி கோப்புகளை திருத்துவது பற்றிய அறிவும் நல்லது.

_**முக்கியம்**_ **:** ஏற்கனவே உள்ள WordPress தளத்தில் multisite நெட்வொர்க்கை அமைக்கிறீர்கள் என்றால் மறக்காமல்:

  * உங்கள் WordPress தளத்தின் முழுமையான backup உருவாக்குங்கள்

  * உங்கள் plugins பக்கத்திற்குச் சென்று bulk actions-ல் _Deactivate_ தேர்ந்தெடுத்து _Apply_ கிளிக் செய்து அனைத்து plugins-ஐயும் முடக்குங்கள்

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite-ஐ இயக்க, முதலில் FTP client அல்லது cPanel file manager பயன்படுத்தி உங்கள் தளத்துடன் இணைந்து, உங்கள் wp-config.php கோப்பைத் திருத்துவதற்குத் திறக்கவும்.

_*That's all, stop editing! Happy blogging.*_ வரிக்கு முன், பின்வரும் code snippet-ஐ சேர்க்கவும்:

define('WP_ALLOW_MULTISITE', true);

உங்கள் wp-config.php கோப்பைச் சேமித்து சர்வருக்கு மீண்டும் upload செய்யவும்.

உங்கள் தளத்தில் multisite அம்சம் இயக்கப்பட்டுள்ளதால், இப்போது உங்கள் நெட்வொர்க்கை அமைக்க வேண்டிய நேரம்.

**Tools » Network Setup** க்குச் செல்லவும்

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

இப்போது உங்கள் நெட்வொர்க்கில் உள்ள தளங்களுக்கு என்ன வகையான domain அமைப்பைப் பயன்படுத்தப் போகிறீர்கள் என்று WordPress-க்குச் சொல்ல வேண்டும்: subdomains அல்லது subdirectories.

நீங்கள் subdomains தேர்வு செய்தால், domain mapping-க்கு உங்கள் DNS settings-ஐ மாற்ற வேண்டும், மேலும் உங்கள் multisite நெட்வொர்க்கிற்கு _**wildcard subdomains**_ அமைக்க வேண்டும்.

Network Setup-க்குத் திரும்பி, உங்கள் நெட்வொர்க்கிற்கு ஒரு தலைப்பு கொடுங்கள், Network admin email-ல் உள்ள மின்னஞ்சல் முகவரி சரியானதா என்பதை உறுதிப்படுத்துங்கள். தொடர _Install_ கிளிக் செய்யவும்.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress வழங்கிய இந்த code-ஐ உங்கள் _**wp-config.php**_-ல் சேர்க்கவும்:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

இந்த code-ஐயும், WordPress வழங்கியது, உங்கள் _**.htaccess**_ கோப்பில் சேர்க்கவும்:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin-க்கு trailing slash சேர்க்கவும்

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client அல்லது file manager (நீங்கள் cPanel போன்றது பயன்படுத்தினால்) பயன்படுத்தி இந்த இரண்டு கோப்புகளிலும் code-ஐ copy and paste செய்யவும்.

இறுதியாக, உங்கள் multisite நெட்வொர்க்கை அணுக உங்கள் WordPress தளத்தில் மீண்டும் login செய்யவும்.

**Ultimate Multisite நிறுவுவதற்கு முன் உங்கள் WordPress Multisite நிறுவலில் ஒரு subsite உருவாக்க முடிகிறது என்பதைச் சோதித்து உறுதிப்படுத்துவது முக்கியம்.**

Subsite உருவாக்க:

  1. உங்கள் தளத்தின் wp-admin-ஐ திறக்கவும்

  2. My Sites > Sites (/wp-admin/network/sites.php) க்கு செல்லவும்

  3. மேலே Add New கிளிக் செய்யவும்

  4. அனைத்து fields-ஐயும் நிரப்புங்கள்:

  * Site Address — "www" பயன்படுத்த வேண்டாம்

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — தளத்தின் தலைப்பு, பின்னர் மாற்றலாம்

  * Admin Email — subsite-க்கான ஆரம்ப admin பயனராக அமைக்கப்படும்

![WordPress Multisite-ல் புதிய தளம் சேர்க்கும் படிவம்](/img/admin/sites-list.png)

Fields-ஐ நிரப்பிய பிறகு, "Add site" பொத்தானை கிளிக் செய்யவும். புதிய subsite உருவாக்கப்பட்டவுடன், subsite சரியாக வேலை செய்கிறதா என்பதை உறுதிப்படுத்த அதை அணுகவும்.

## பொதுவான பிரச்சனைகள்:

### 1\. புதிய தளங்களை உருவாக்க முடிகிறது ஆனால் அவற்றை அணுக முடியவில்லை.

நீங்கள் subdomains தேர்வு செய்திருந்தால், உங்கள் multisite நெட்வொர்க்கிற்கு wildcard subdomains-ஐயும் அமைக்க வேண்டும்.

அதைச் செய்ய, உங்கள் தளத்தின் hosting account-ன் control panel dashboard-க்குச் செல்லவும் (உங்கள் hosting provider-ஐ பொறுத்து cPanel/Plesk/Direct Admin).

"Domains" அல்லது "Subdomains" என்ற option-ஐ கண்டுபிடிக்கவும். சில control panels-ல் இது "Domain administration" என்று குறிப்பிடப்பட்டிருக்கும்.

Subdomain field-ல், ஒரு asterisk (*) உள்ளிடவும். பின்னர், subdomain எந்த domain name-ன் கீழ் சேர்க்கப்பட வேண்டும் என்று தேர்ந்தெடுக்கச் சொல்லும்.

தேர்ந்தெடுக்கப்பட்ட domain name-க்கான document root தானாகவே கண்டறியப்படும். உங்கள் wildcard subdomain-ஐ சேர்க்க _Create_ அல்லது _Save_ பொத்தானை கிளிக் செய்யவும். Entry "*.[mydomain.com](http://mydomain.com)" என்று இருக்க வேண்டும்
