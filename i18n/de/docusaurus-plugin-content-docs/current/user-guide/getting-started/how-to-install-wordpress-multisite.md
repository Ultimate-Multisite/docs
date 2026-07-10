---
title: So installieren Sie WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Wie installiere ich WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite ermöglicht es Ihnen, ein Netzwerk von Websites in einer einzigen Installation zu betreiben. Dies ist eine integrierte Funktion, sie ist jedoch standardmäßig nicht aktiv.

:::tip
Ultimate Multisite enthält einen **[integrierten Multisite-Einrichtungsassistenten](./multisite-setup-wizard)**, der diesen gesamten Prozess automatisiert. Wenn Sie Ultimate Multisite installiert haben, empfehlen wir, den Assistenten zu verwenden, anstatt die folgenden manuellen Schritte auszuführen.
:::

Da Ultimate Multisite ein reines Netzwerk-Plugin ist, erfahren Sie in diesem Tutorial, wie Sie WordPress Multisite manuell installieren und einrichten. Dieser Text basiert auf [So installieren und richten Sie ein WordPress Multisite-Netzwerk ein](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) von WPBeginner.

**Dinge, auf die Sie achten sollten, bevor Sie Ihr Multisite-Netzwerk erstellen:**

  * Besorgen Sie sich gutes WordPress-Hosting! Websites in einem Netzwerk teilen sich dieselben Serverressourcen.

  * Falls Sie nur ein paar Websites mit geringem Traffic haben, wird Shared Hosting wahrscheinlich für Sie funktionieren.

  * Die meisten **Managed WordPress-Hosting-Anbieter** bieten Multisite direkt einsatzbereit an (sie installieren WordPress mit bereits aktivierter und für Sie konfigurierter Multisite). Dies ist bei WP Engine, Closte, Cloudways usw. der Fall. Wenn Sie nicht sicher sind, ob das bei Ihrem Hosting-Anbieter der Fall ist, kontaktieren Sie dessen Support, bevor Sie mit diesem Tutorial fortfahren.

  * Es ist außerdem gut, mit der Installation von WordPress und dem Bearbeiten von Dateien per FTP vertraut zu sein.

_**WICHTIG**_ **:** Wenn Sie ein Multisite-Netzwerk auf einer bestehenden WordPress-Website einrichten, vergessen Sie nicht:

  * Erstellen Sie ein vollständiges Backup Ihrer WordPress-Website

  * Deaktivieren Sie alle Plugins auf Ihrer Website, indem Sie zu Ihrer Plugin-Seite gehen, in den Sammelaktionen _Deaktivieren_ auswählen und dann auf _Anwenden_ klicken

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Um Multisite zu aktivieren, verbinden Sie sich zuerst mit einem FTP-Client oder dem cPanel-Dateimanager mit Ihrer Website und öffnen Sie Ihre wp-config.php-Datei zur Bearbeitung.

Fügen Sie vor der Zeile _*That’s all, stop editing! Happy blogging.*_ den folgenden Code-Snippet hinzu:

define('WP_ALLOW_MULTISITE', true);

Speichern Sie Ihre wp-config.php-Datei und laden Sie sie zurück auf den Server hoch.

Nachdem die Multisite-Funktion auf Ihrer Website aktiviert wurde, ist es nun an der Zeit, Ihr Netzwerk einzurichten.

Gehen Sie zu **Werkzeuge » Netzwerk-Einrichtung**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nun müssen Sie WordPress mitteilen, welche Art von Domainstruktur Sie für Websites in Ihrem Netzwerk verwenden werden: Subdomains oder Unterverzeichnisse.

Wenn Sie Subdomains wählen, müssen Sie Ihre DNS-Einstellungen für Domain-Mapping ändern und sicherstellen, dass _**Wildcard-Subdomains**_ für Ihr Multisite-Netzwerk eingerichtet sind.

Zurück in der Netzwerk-Einrichtung geben Sie einen Titel für Ihr Netzwerk ein und stellen sicher, dass die E-Mail-Adresse in der Netzwerk-Admin-E-Mail korrekt ist. Klicken Sie auf _Installieren_, um fortzufahren.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Fügen Sie diesen von WordPress bereitgestellten Code in Ihre _**wp-config.php**_ ein:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Und diesen ebenfalls von WordPress bereitgestellten Code in Ihre _**.htaccess**_-Datei:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Verwenden Sie einen FTP-Client oder einen Dateimanager (wenn Sie zum Beispiel etwas wie cPanel verwenden), um den Code in diese beiden Dateien zu kopieren und einzufügen.

Melden Sie sich abschließend erneut bei Ihrer WordPress-Website an, um auf Ihr Multisite-Netzwerk zuzugreifen.

**Es ist wichtig zu testen und sicherzustellen, dass Sie eine Unterwebsite in Ihrer WordPress Multisite-Installation erstellen können, bevor Sie Ultimate Multisite installieren.**

So erstellen Sie eine Unterwebsite:

  1. Öffnen Sie das wp-admin Ihrer Website

  2. Navigieren Sie zu Meine Websites > Websites (/wp-admin/network/sites.php)

  3. Klicken Sie oben auf Neu hinzufügen

  4. Füllen Sie alle Felder aus:

  * Website-Adresse — Verwenden Sie niemals „www“

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Unterverzeichnis: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Website-Titel — Titel der Website, kann später geändert werden

  * Admin-E-Mail — Wird als anfänglicher Admin-Benutzer für die Unterwebsite festgelegt

![Formular zum Hinzufügen einer neuen Website in WordPress Multisite](/img/admin/sites-list.png)

Nachdem Sie die Felder ausgefüllt haben, klicken Sie auf den Button „Website hinzufügen“. Sobald die neue Unterwebsite erstellt wurde, rufen Sie sie auf, um sicherzustellen, dass die Unterwebsite funktionsfähig ist.

## Häufige Probleme: {#common-problems}

### 1\. Ich kann neue Websites erstellen, aber sie sind nicht erreichbar. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Wenn Sie Subdomains gewählt haben, müssen Sie außerdem Wildcard-Subdomains für Ihr Multisite-Netzwerk einrichten.

Gehen Sie dazu zum Control-Panel-Dashboard des Hosting-Accounts Ihrer Website (z. B. cPanel/Plesk/Direct Admin, abhängig von Ihrem Hosting-Anbieter).

Suchen Sie nach einer Option für „Domains“ oder „Subdomains“. In einigen Control Panels ist sie als „Domainverwaltung“ gekennzeichnet.

Geben Sie im Subdomain-Feld ein Sternchen (*) ein. Anschließend sollte es Sie auffordern, einen Domainnamen auszuwählen, unter dem die Subdomain hinzugefügt werden soll.

Das Dokumentenstammverzeichnis für den ausgewählten Domainnamen wird automatisch erkannt. Klicken Sie auf den Button _Erstellen_ oder _Speichern_, um Ihre Wildcard-Subdomain hinzuzufügen. Der Eintrag sollte wie „*.[mydomain.com](http://mydomain.com)“ aussehen.
