---
title: Wie installiert me WordPress Multisite?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Wie installier ich WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite erlaubt Ihnen, es e Netz vo Sites uf ere einzelne Installation z'ha. Das isch en integriert Feature, aber es isch standardmässig nöd aktiv.

:::tip
Ultimate Multisite beinhaltet en **[built-in Multisite Setup Wizard](./multisite-setup-wizard)**, wo die ganz Prozess automatisch macht. Wenn Sie Ultimate Multisite installiert händ, empfehli mir, de Wizard z'bruche statt d'manuelle Schritt unde z'folge.
:::

Will Ultimate Multisite en Netzwerk-only plugin isch, werdet Sie in dere Tutorial lerne, wie Sie WordPress Multisite manuell installiere und iistelle. De Text basiert uf [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), vo WPBeginner.

**Sache, wo Sie beachte sölled vor de Erschaffig vo Ihrem Multisite Netzwerk:**

  * Holet gueti WordPress Hosting! Websites uf eme Netz teile d'gliiche Serverressource.

  * Falls Sie nume es paar Sites mit wenig Traffic händ, wird Shared Hosting wahrschinlich für Sie passe.

  * Vill **Managed WordPress Hosting Provider** biete Multisite vo de Verpackig a (sie installiere WordPress scho mit Multisite aktiviert und konfiguriert für Sie). Das gilt für WP Engine, Closte, Cloudways usw. Wenn Sie nöd sicher sind, ob das so isch für Ihren Host-Provider, kontaktiere Sie ihre Support, bevor Sie wiiter mit dere Tutorial gohnd.

  * Es isch au guet, sich mit em Installiere vo WordPress und em Bearbeite vo Date mit FTP vertraut z'mache.

_**WICHTIG**_ **:** Wenn Sie es Multisite Netzwerk uf ere bestehende WordPress-Website iistelle, vergessed Sie nöd:

  * En vollständige Backup vo Ihrer WordPress-Site z'mache

  * Alli Plugins uf Ihrer Site inaktiv z'stelle, indem Sie zu Ihrer Plugin-Seite gohnd und unter de Massenaktionen _Deactivate_ wähle und denn _Apply_ druf klicke.

Um Multisite z'aktivierä, verbindet Sie sich zuerst mit Ihrer Site über en FTP-Client oder de cPanel File Manager und öffnet d'Datei `wp-config.php` zum Bearbeite.

Bevor d'Zeile `_*Das isch alles, ufhöre z'bearbeite! Froiti Blogge.*_` chunnt, füegt Sie folgendes Code-Snippet bi:

```php
define('WP_ALLOW_MULTISITE', true);
```

Speichere Sie und lade Sie Ihre `wp-config.php`-Datei wieder uf de Server hoch.

Mit de Multisite-Funktion aktiviert uf Ihrer Site isch jetz d'Ziit, s'Netzwerk iizrichte.

Gehe zu **Tools » Network Setup**

Jetzt müesse Sie WordPress säge, weli Art vo Domainstruktur Sie für d'Sites in Ihrem Netzwerk bruche wend: Subdomains oder Unterverzeichnisse (Subdirectories).

Wenn Sie Subdomains wähle, müesse Sie Ihre DNS-Iistellige für d'Domain-Mapping ändere und sicherstelle, dass d'Setup _**wildcard subdomains**_ für Ihr Multisite-Netzwerk gmacht isch.

Zurück zu de Network Setup: Geben Sie en Titel für Ihr Netzwerk und stellen Sie sicher, dass d'E-Mail-Adresse i de Network admin E-Mail korrekt isch. Klicken Sie auf _Install_, um wiiterzgah.

Füge diesen Code bi, wo vo WordPress zur `_**wp-config.php**_ bereitgstellt wird:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Und diesen Code, au vo WordPress bereitgstellt, bi Ihrer `**.htaccess**`-Datei:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# füegt en Trailing Slash zu /wp-admin hinzu

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Verwende en FTP-Client of e File Manager (falls du öppis wie cPanel bruchsch, zum Bischpil) om de Code in die zwee Date z'kopieere und z'füge.

Am Schluss muesch dich wieder i dini WordPress-Site iilogge, um uf dis Multisite-Netzwerk z'griffe.

**Es isch wichtig, dass du testisch und sicherstellsch, dass du e Untersite uf din WordPress Multisite-Installation chasch erstelle, bevor du Ultimate Multisite installiersch.**

Um e Untersite z'erstelle:

  1. Öffne dini Websites wp-admin
  2. Navigier zu My Sites > Sites (/wp-admin/network/sites.php)
  3. Klick uf Add New obe
4. Füll alli Felder us:

* Site Address — Nöd "www" bruche!

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Titel vo de Site, chann später ändere werde

* Admin Email — Als erschte Admin-User für d'Untersite iistelle

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Nachdem du alli Felder gfüllet hesch, klick uf de Knopf "Add site". Sobald d'neui Untersite erstellt isch, gaht du druf zue und überprüefsch, ob d'Untersite funktioniert.

## Häufigi Problem: {#add-a-trailing-slash-to-wp-admin}

### 1. Ich chan neui Sites erstelle, aber sie sind nöd zugänglich. {#common-problems}

Wenn du Subdomains gwählt hesch, muesch au Wildcard-Subdomains für dis Multisite-Netzwerk iistelle.

Dafür gaht du zu em Control Panel vo dim Website-Hosting-Account (zum Bischpil cPanel/Plesk/Direct Admin je nach Hosting-Provider).

Suech e Option für "Domains" oder "Subdomains". In manche Control Panels isch das als "Domain administration" beschriftet.

Im Feld für d'Subdomain gibts eifach en Stern (\*) i. Dänn wird dir gfragt, welchi Domain du wetsch, wo d'Subdomain druf agfüegt soll.

D'Dokumentwurzel (document root) für die gwählti Domain wird automatisch erkannt. Klick uf de _Create_ oder _Save_ Button, um dini Wildcard-Subdomain hinzuzfüege. D'Eingabe sött so usgseh: „*.[mydomain.com](http://mydomain.com)“
