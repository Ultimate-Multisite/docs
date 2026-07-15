---
title: Hvernig installa WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Hvernig get ég installað WordPress Multisite?

WordPress Multisite leyfir þér að hafa netverk vísúta á einum uppsetningu. Þetta er innbyggð eiginleiki, en hún er ekki á hjá í raunni af raunni.

:::tip
Ultimate Multisite hefur **[innbyggt multisite setup wizard](./multisite-setup-wizard)** sem sjálfstýrir þessari heildarferli. Ef þú hefur Ultimate Multisite installað, reynjum við að nota wizardinn í stað þess að fylgja manuelle skrefum hér eftir.
:::

Eftir að Ultimate Multisite er plugin sem virkar bara á netverk, munu þú í þessari leiðbeiningu læra hvernig geturð installað og sett upp WordPress Multisite manuelle. Þessi text er byggður á [Hvernig installa og sett upp WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), frá WPBeginner.

**Þær sem þú þarft að hafa í huga áður en þú byrjar með multisite netverk þitt:**

  * Fá gott WordPress hosting! Vísúta á netverk eiga sama serverrásir.

  * Ef þú hefur bara nokkrar vísúta með lítil trafiki, gæti sharð hosting verið mjög passandi fyrir þig.

  * Most **Managed WordPress hosting providers** býður Multisite í gangi (þau installa WordPress með Multisite sem er jákvætt og sett upp fyrir þig). Þetta er tilfelli WP Engine, Closte, Cloudways osafyrir. Ef þú ert ekki viss um því ef það er tilfelli fyrir hosting-þjónustuna þína, tengst þeim stöðuhafi áður en þú haldar þig í þessari leiðbeiningu.

  * Það er mjög góður að vera kjanna installað WordPress og að bregða lausnir með FTP .

_**VIÐSKILJA**_ **:** Ef þú sett upp multisite netverk á núverandi WordPress vísúta, gafi ekki glýpa til:

  * Skapa fullt backup af WordPress vísúnni þinni

  * Deaktiva allar pluginir á vísunni með því að ferðast yfir yfir plugin-sidan og velja _Deactivate_ úr bulk actions og svo klikka á _Apply_

Til að aktíva Multisite þarfðu fyrst að tengja sér við síðuna með FTP client eða file manager cPanel og opna `wp-config.php` til að bregða það.

Fyrir linuna _*Það er allt, stopp breytingar! Glæp glæpa.*_ bæti eftirfarandi kóði við:

```php
define('WP_ALLOW_MULTISITE', true);
```

Breytingu og hleðdu `wp-config.php` aftur upp á serverinn þinn.

Þegar Multisite eigin þín síðuna er aktíva, er nú tími til að sett upp nýnetið þitt.

Gangi í **Tools » Network Setup** (Værktöfnur » Sett upp netið)

Þá þarftu að segja WordPress hvaða hlutinn á domænum þú ert að nota fyrir síðuna í netinu þínu: subdomains eða subdirectories.

Ef þú valdið subdomains, verður þú að bregða DNS settirnar þín fyrir mapping domána og tryggja það að sett upp _**wildcard subdomains**_ fyrir Multisite netið þitt.

Til baka í Network Setup, gefðu títið fyrir netið sín og varðu suretturinn í tölvupósti Network admin eða rétturinn á tölvupósti Network admin settirnni. Klikka á _Install_ (Innstalla) til að halda áfram.

Bæta þennan kóða, sem WordPress sjálfur gefur, við `wp-config.php` þinn:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Og þennan kóða, sem WordPress sjálfur gefur, við `**.htaccess**` file þinn:

```apache
RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Brug FTP-klient eða lausnarafnustilboð (ef þú notar nánast eins og cPanel, t.d.) til að upplýsa og setja kóða í þessum tveimjum fólki.

Í lokum, skilja aftur inn á WordPress síðuna þinni til að aðgangast netverkinn þitt multisite.

**Það er mikilvægt að prófa og tryggja þér að þú getur skapað subsite á nánast multisite uppsetningu þinni áður en þú notar Ultimate Multisite.**

Til að skapa subsite:

  1. Opna wp-admin síðuna þína
  2. Gangi yfir í My Sites > Sites (/wp-admin/network/sites.php)
  3. Klikka á Add New uppstofa
  4. Fyll allir feldi:

* Site Address — Notkun “www” er aldrei rétt.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Titill síðunnar, sem kannast breyta seinna

* Admin Email — Set þetta sem fyrsta admin notanda fyrir subsiteinn

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Eftir að filla út feldi, klikka á knappa "Add site". Eftir að nýtt subsite er skorið upp, gangi í það og tryggja þér að subsiteinn sé virkni.

## Almenn vanda: {#add-a-trailing-slash-to-wp-admin}

### 1. Ég get skapað nýja síður en þeir eru ekki aðgangslegar. {#common-problems}

Ef þú valdið subdomainir, þurfaðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðuðu

Þú þarf að inn einstarðin fyrir vöðustún (subdomain field) asteríð (*). Það þarf að spurnast þig að velja dýna náðstæða (domain name) sem þarna undir þú ert að bæta vöðustúninn við.

Að greina upp hlutun í þessum dýnu náðstæði (domain name) verður sjálfskjálfandi (automatically detected). Klikka á knappa _Create_ eða _Save_ til að bæta vöðustúninn sem er *wildcard*. Innskrifingin verður að líta eins og “*.[mydomain.com](http://mydomain.com)”.
