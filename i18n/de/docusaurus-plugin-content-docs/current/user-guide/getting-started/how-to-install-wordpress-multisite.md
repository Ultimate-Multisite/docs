---
title: WordPress Multisite installieren
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# Wie installiere ich WordPress Multisite?

WordPress Multisite ermöglicht es Ihnen, ein Netzwerk von Websites in einer einzigen Installation zu betreiben. Dies ist eine integrierte Funktion, aber sie ist standardmäßig nicht aktiviert.

Da Ultimate Multisite ein ausschließlich für Netzwerke entwickeltes Plugin ist, lernen Sie in diesem Tutorial, wie Sie WordPress Multisite installieren und einrichten. Dieser Text basiert auf [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), von WPBeginner.

**Wichtige Punkte vor der Erstellung Ihres Multisite-Netzwerks:**

- Holen Sie sich ein gutes WordPress-Hosting! Websites in einem Netzwerk teilen sich dieselben Serverressourcen.
- Falls Sie nur ein paar Websites mit geringem Traffic haben, reicht Shared Hosting wahrscheinlich aus.
- Die meisten **Managed WordPress Hosting-Anbieter** bieten Multisite sofort einsatzbereit an (sie installieren WordPress mit bereits aktivierter und konfigurierter Multisite). Das gilt für WP Engine, Closte, Cloudways usw. Wenn Sie nicht sicher sind, ob das bei Ihrem Hosting-Anbieter der Fall ist, kontaktieren Sie deren Support, bevor Sie mit diesem Tutorial fortfahren.
- Es ist auch hilfreich, mit der Installation von WordPress und dem Bearbeiten von Dateien über FTP vertraut zu sein.

_**WICHTIG** **:** Wenn Sie ein Multisite-Netzwerk auf einer bestehenden WordPress-Website einrichten, vergessen Sie nicht:_

- Erstellen Sie ein vollständiges Backup Ihrer WordPress-Website
- Deaktivieren Sie alle Plugins auf Ihrer Website, indem Sie zur Plugin-Seite gehen, _Deactivate_ aus den Massenaktionen auswählen und dann _Apply_ klicken

[![](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)

Um Multisite zu aktivieren, verbinden Sie sich zunächst mit Ihrer Website über einen FTP-Client oder den cPanel-Dateimanager und öffnen Sie die wp-config.php-Datei zum Bearbeiten.

Vor der Zeile _*That’s all, stop editing! Happy blogging.*_ fügen Sie den folgenden Code-Snippet hinzu:

```php
define('WP_ALLOW_MULTISITE', true);
```

Speichern und laden Sie Ihre wp-config.php-Datei wieder auf den Server hoch.

Mit aktiviertem Multisite-Feature auf Ihrer Website ist es nun an der Zeit, Ihr Netzwerk einzurichten.

Gehen Sie zu **Tools » Network Setup**

[![](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)

Jetzt müssen Sie WordPress mitteilen, welche Art von Domainstruktur Sie für die Websites in Ihrem Netzwerk verwenden: Subdomains oder Unterverzeichnisse.

Wenn Sie Subdomains wählen, müssen Sie Ihre DNS-Einstellungen für die Domain-Mapping ändern und sicherstellen, dass _**wildcard subdomains**_ für Ihr Multisite-Netzwerk eingerichtet sind.

Zurück zum Network Setup geben Sie Ihrem Netzwerk einen Titel und stellen Sie sicher, dass die E-Mail-Adresse im Network Admin Email korrekt ist. Klicken Sie auf _Install_, um fortzufahren.

[![](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)

Fügen Sie diesen Code, bereitgestellt von WordPress, in Ihre _**wp-config.php**_ ein:

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

Und diesen Code, ebenfalls bereitgestellt von WordPress, in Ihre _**.htaccess**_ Datei:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

Verwenden Sie einen FTP-Client oder einen Dateimanager (falls Sie etwas wie cPanel verwenden, zum Beispiel), um den Code in diese beiden Dateien zu kopieren und einzufügen.

Schließlich melden Sie sich erneut bei Ihrer WordPress-Website an, um auf Ihr Multisite-Netzwerk zuzugreifen.

**Es ist wichtig, zu testen und sicherzustellen, dass Sie in Ihrer WordPress Multisite-Installation eine Subsite erstellen können, bevor Sie Ultimate Multisite installieren.**

Um eine Subsite zu erstellen:

1. Öffnen Sie das wp-admin Ihrer Website
2. Navigieren Sie zu My Sites > Sites (/wp-admin/network/sites.php)
3. Klicken Sie oben auf Add New
4. Füllen Sie alle Felder aus:

   - Site Address — Verwenden Sie niemals „www“
   - Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
   - Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
   - Site Title — Titel der Website, kann später geändert werden
   - Admin Email — Als ersten Admin-Benutzer für die Subsite festlegen

![image](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hrA3XtntYQ.png)

Nach dem Ausfüllen der Felder klicken Sie auf die Schaltfläche „Add site“. Sobald die neue Subsite erstellt wurde, greifen Sie darauf zu, um sicherzustellen, dass die Subsite funktioniert.

## Häufige Probleme:

### 1\. Ich kann neue Sites erstellen, aber sie sind nicht erreichbar.

Wenn Sie Subdomains gewählt haben, müssen Sie ebenfalls wildcard Subdomains für Ihr Multisite-Netzwerk einrichten.

Dazu gehen Sie zum Dashboard des Control Panels Ihres Hosting-Kontos (z. B. cPanel/Plesk/Direct Admin, je nach Hosting-Anbieter).

Suchen Sie nach einer Option für „Domains“ oder „Subdomains“. In einigen Control Panels ist sie als „Domain administration“ gekennzeichnet.

Geben Sie im Feld Subdomain ein Sternchen (*). Dann sollte Sie aufgefordert werden, einen Domainnamen auszuwählen, unter dem die Subdomain hinzugefügt werden soll.

Der Dokumentenstamm für den ausgewählten Domainnamen wird automatisch erkannt. Klicken Sie auf die Schaltfläche _Create_ oder _Save_, um Ihre wildcard Subdomain hinzuzufügen. Der Eintrag sollte wie „*.[mydomain.com](http://mydomain.com)“ aussehen.
