---
title: Sida loo soo saaro WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Sidee aan ku soo installaa WordPress Multisite?

WordPress Multisite waxay kuu oggolaanaysaa inaad hal installation (warqabinta) ku haysato shabakad oo websites ah. Tani waa astaamada la bilaabay, laakiin ma aha mid firfircoon (active) si toos ah.

:::tip
Ultimate Multisite wuxuu la socdaa **[Multisite Setup Wizard-ka la bilaabmay](./multisite-setup-wizard)** oo si toos ah u samaynaya dhammaan habkan. Haddii aad Ultimate Multisite ku haysato, waxaan ku talinaynaa inaad isticmaasho wizard-ka halkii aad ka raadin lahayd talaabooyinka gacanta ee hoose.
:::

Maadaama Ultimate Multisite uu yahay plugin oo kaliya shabakad (network-only), inta badan tutorial-kan, waxaan ku baran doonaa sida loo installayo oo loo dejiyo WordPress Multisite si gacanta ah. Qoraalkan waxaa lagu salaynaya [Sida loo Installayo oo Lagu Dejiya Network-ka WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), oo ka timaada WPBeginner.

**Waxyaabaha aad u baahan tahay inaad diiradda saarto ka hor intaadan samayn network-kaaga multisite:**

  * Hel hosting-ka WordPress-ka wanaagsan! Website-yada ku jira network waxay wada isticmaala server-ka isku mid ah.

  * Haddii aad leedahay laba ama saddex website oo traffic-ga yar leh, shared hosting (hosting la wadaagta) inta badan kuu shaqeyn doonaa.

  * Inta badan **Managed WordPress hosting providers** waxay bixiyaan Multisite si diyaar ah (waxay ku install-kaayaan WordPress oo ay horey u fuliyeen iyo hagaajiyay). Tani waa sida WP Engine, Closte, Cloudways, iwm. Haddii aadan hubin in tani tahay qofka hosting-kaaga, la xiriir taageerada (support) ka hor intaadan sii wado casharkaas.

  * Waa wanaagsan inaad la yaabto sida loo install-kaaro WordPress iyo sida loo wax ka beddelo faylasha adiga oo isticmaalaya FTP.

**MUHIIMAD** **:** Haddii aad samaynayso shabakad (multisite network) WordPress oo ku jirta website hore, ha ilaawin inaad:

  * Samaysid nooc dhammaystiran oo backup ah oo ka mid ah website-kaaga WordPress.

  * Joojin dhammaan plugins-kaaga adiga oo aadiya bogga plugins-kaaga, aad doorato _Deactivate_ (Jooji) laga bilaabo bulk actions (marka la samaynayo wax badan), kadibna aad riixid _Apply_ (Applies).

<!-- Sawirka ma lahayn: Bogga plugins-ka WordPress oo muujinaya ficilka joojinta dhammaan plugins-ka -->

Si aad u furto Multisite, marka hore isku xir website-kaaga iyadoo la isticmaalayo FTP client ama cPanel file manager, ka dibna fur faylka wp-config.php si aad u hagaajisid.

Ka hor intaadan ku qorin safka _*That’s all, stop editing! Happy blogging.*_ (Waa dhammaan, jooji hagaajinta! Blogga wanaagsan). waxaa ku dhex jira koodkan:

define('WP_ALLOW_MULTISITE', true);

Kaydi faylka wp-config.php oo soo geliyo server-kaaga.

Markaha aad furteen feeksiyada multisite-kaaga, hadda wuxuu yahay wakhtiga inaad dejisato shabakadaha (network).

U socdo **Tools » Network Setup**

<!-- Sawirka ma lahayn: Menu-ga WordPress Tools oo muujinaya doorashada Network Setup -->

Hadda waxaad u baahan tahay inaad si WordPress-ka u sheegto nooca qaabka domain-ka aad isticmaali doonto shaqooyinka (sites) ee shabakadahaaga: subdomains mise subdirectories.

Haddii aad doorato subdomains, waa inaad beddeshaa dejinta DNS-kaaga si loo xiro domain-ka iyo in la hubiyo **wildcard subdomains**-kaaga oo ku habboon shabakadaha multisite-kaaga.

Dib u socota Network Setup, bixi magac (title) shabakaddaada oo hubi in email-ka ku jira email-ka maamulka (admin email) ee Network-kaagu yahay mid sax ah. Click **Install** si aad u sii socoto.

<!-- Sawirka ma la hayn: Bogga WordPress Network Setup oo leh magaca shabakadda iyo meelaha email-ka maamulka -->

Kani code-ka WordPress-ka kuu soo dar, oo ay ku jiraa _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Waxaa sidoo kale code-ka WordPress-ka kuu soo dar, oo ay ku jiraa faylka _**.htaccess**_:

RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# si loo dari slash u dambeeya /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]

Isticmaal FTP client ama file manager (haddii aad isticmaalayso mid sida cPanel, tusaale ahaan), si aad u nuugto oo aad u dhejiso koodka ee labada faylkan.

Ugu dambayn, dib u gal WordPress-kaaga si aad u heli karto shabakadaha multisite-kaaga.

**Waa muhiim in la baaro oo la hubiyo inaad awood u leedahay inaad samayso subsite (website yar) ku WordPress Multisite-kaaga ka hor intaadan install gareyn Ultimate Multisite.**

Si aad u samayso subsite:

  1. Fur wp-admin ee website-yadaada.

  2. Tag "My Sites" > "Sites" (/wp-admin/network/sites.php).

  3. Guji "Add New" oo ku taal sare.

  4. Buuxi dhammaan meelaha:

  * Site Address — Ha isticmaalin "www" weli.

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Magaca Website-ka — Waa magaca website-ka, oo laga beddeli karo dambe

  * Email-ka Maamulka — Waxaad u qorsaysaa inuu yahay isticmaalaha maamulka (admin user) ee hore ee subsite-ka.

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Marka aad buuxisato dhammaan meelaha, riix badhanka "Add site" (Ku dar website). Marka la samaynayo subsite cusub, tag si aad u fogaato oo aad hubiso inuu subsite-ku shaqeeyo.

## Dhibaatooyinka Caadiga ah: {#common-problems}

### 1\. Waxaan samayn karaa subsite cusub laakiin ma heli karo (access). {#1-i-can-create-new-sites-but-they-are-not-accessible}

Haddii aad dooratay subdomain-yada (subdomains), waxaad u baahan tahay inaad siiyeyso wildcard subdomains oo ay ku jiraan shabakadda multisite-kaaga.

Si aad u samayso, tag dashboard-ka control panel-ka hosting-ga website-kaaga (tusaale cPanel/Plesk/Direct Admin iyadoo ku xiran barnaamijka hosting-kaaga).

Raadi dooro "Domains" ama "Subdomains". Mararka qaar barnaamijyada maamulka (control panels) waxaa lagu magacaabaa "Domain administration".

Marka aad ku qorto meelka subdomain-ka, ku qor naxariis (*). Ka dib, wuxuu kuu weydiinayaa inaad doorato magac domain oo aad rabto in subdomain-ku la soo daro.

Asalka dukumentiga (document root) ee magaca domain-ka la doortay ayaa si toos ah loo ogaadaa. Guji badhanka _Create_ ama _Save_ si aad u dariin subdomain-ka wildcard-ka ah ee aad rabto. Qoraalka waa inuu muuqdo sida "*.[mydomain.com](http://mydomain.com)".
