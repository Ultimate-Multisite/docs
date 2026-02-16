---
title: Hogyan Telepítsük a WordPress Multisite-ot
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Hogyan telepítsem a WordPress Multisite-ot?

A WordPress Multisite lehetővé teszi, hogy egyetlen telepítésen belül egy teljes webhelyhálózatot működtess. Ez egy beépített funkció, de alapértelmezetten nincs bekapcsolva.

:::tip
Az Ultimate Multisite tartalmaz egy **[beépített Multisite beállítási varázslót](./multisite-setup-wizard)**, amely automatizálja a teljes folyamatot. Ha az Ultimate Multisite már telepítve van, javasoljuk, hogy az alábbi kézi lépések helyett használd inkább a varázslót.
:::

Mivel az Ultimate Multisite egy csak hálózati szinten működő plugin, ebben az útmutatóban megtanulod, hogyan telepítsd és állítsd be kézzel a WordPress Multisite-ot. Ez a szöveg a WPBeginner [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) című cikkén alapul.

**Mire figyelj, mielőtt létrehozod a multisite hálózatodat:**

  * Válassz jó WordPress tárhelyet! A hálózaton lévő webhelyek ugyanazokat a szervererőforrásokat használják.

  * Ha csak néhány alacsony forgalmú webhelyed van, az osztott tárhely valószínűleg megfelelő lesz számodra.

  * A legtöbb **menedzselt WordPress tárhelyszolgáltató** készen kínálja a Multisite-ot (már aktivált és konfigurált Multisite-tal telepítik a WordPress-t). Ilyen például a WP Engine, a Closte, a Cloudways stb. Ha nem vagy biztos benne, hogy a te tárhelyszolgáltatód is így működik, az útmutató folytatása előtt vedd fel a kapcsolatot az ügyfélszolgálatukkal.

  * Hasznos, ha jártas vagy a WordPress telepítésében és a fájlok FTP-vel történő szerkesztésében.

_**FONTOS**_ **:** Ha egy már meglévő WordPress webhelyen állítasz be multisite hálózatot, ne felejtsd el:

  * Készíts teljes biztonsági mentést a WordPress webhelyedről

  * Kapcsold ki az összes plugint a webhelyeden: menj a bővítmények oldalra, válaszd ki a _Deaktiválás_ lehetőséget a tömeges műveletek menüből, majd kattints az _Alkalmaz_ gombra

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

A Multisite engedélyezéséhez először csatlakozz a webhelyedhez FTP klienssel vagy cPanel fájlkezelővel, és nyisd meg szerkesztésre a wp-config.php fájlt.

A _*That's all, stop editing! Happy blogging.*_ sor elé add hozzá a következő kódrészletet:

define('WP_ALLOW_MULTISITE', true);

Mentsd el, és töltsd vissza a wp-config.php fájlt a szerverre.

Most, hogy a multisite funkció engedélyezve van a webhelyeden, ideje beállítani a hálózatot.

Menj az **Eszközök » Hálózat beállítása** menüpontra

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Most meg kell adnod a WordPress-nek, hogy milyen domain-struktúrát szeretnél használni a hálózatod webhelyeihez: aldomaineket vagy alkönyvtárakat.

Ha az aldomaineket választod, módosítanod kell a DNS-beállításaidat a domain-leképezéshez, és be kell állítanod a _**wildcard aldomaineket**_ a multisite hálózatodhoz.

Visszatérve a Hálózat beállításához, adj egy címet a hálózatodnak, és győződj meg róla, hogy a Hálózati adminisztrátor e-mail cím mezőben a helyes cím szerepel. Kattints a _Telepítés_ gombra a folytatáshoz.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Add hozzá ezt a WordPress által generált kódot a _**wp-config.php**_ fájlodhoz:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

És ezt a kódot, szintén a WordPress-től, a _**.htaccess**_ fájlodhoz:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Használj FTP klienst vagy fájlkezelőt (ha például cPanel-t használsz) a kód bemásolásához és beillesztéséhez ebbe a két fájlba.

Végül jelentkezz be újra a WordPress webhelyedre, hogy hozzáférj a multisite hálózatodhoz.

**Fontos, hogy teszteld és győződj meg róla, hogy létre tudsz hozni egy alwebhelyet a WordPress Multisite telepítéseden, mielőtt telepíted az Ultimate Multisite-ot.**

Alwebhely létrehozásához:

  1. Nyisd meg a webhelyed wp-admin felületét

  2. Navigálj a Saját webhelyek > Webhelyek menüpontra (/wp-admin/network/sites.php)

  3. Kattints a tetején az Új hozzáadása gombra

  4. Töltsd ki az összes mezőt:

  * Webhely címe — Soha ne használj "www"-t

  * Aldomain: [webhelycim.tedomained.com](http://siteaddress.yourdomain.com)

  * Alkönyvtár: [tedomained.com/webhelycim](http://yourdomain.com/siteaddress)

  * Webhely címe — A webhely címe, később módosítható

  * Admin e-mail — Ez lesz az alwebhely kezdeti admin felhasználója

![Új webhely hozzáadása űrlap a WordPress Multisite-ban](/img/admin/sites-list.png)

A mezők kitöltése után kattints a „Webhely hozzáadása" gombra. Miután az új alwebhely létrejött, nyisd meg, és győződj meg róla, hogy megfelelően működik.

## Gyakori problémák:

### 1\. Létre tudok hozni új webhelyeket, de nem érhetők el.

Ha aldomaineket választottál, be kell állítanod a wildcard aldomaineket is a multisite hálózatodhoz.

Ehhez menj a webhelyed tárhelyfiókjának vezérlőpult felületére (pl. cPanel/Plesk/Direct Admin a tárhelyszolgáltatódtól függően).

Keresd meg a „Domainek" vagy „Aldomainek" opciót. Egyes vezérlőpultokon „Domain adminisztráció" néven található.

Az aldomain mezőbe írj be egy csillagot (*). Ezután ki kell választanod azt a domain nevet, amelyhez az aldomaint hozzá szeretnéd adni.

A kiválasztott domain név dokumentumgyökere automatikusan felismerésre kerül. Kattints a _Létrehozás_ vagy _Mentés_ gombra a wildcard aldomain hozzáadásához. A bejegyzésnek így kell kinéznie: "*.[sajatdomained.com](http://mydomain.com)"
