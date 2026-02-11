---
title: Codebeispiele
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# Code-Snippets für v2

Im Wesentlichen werden Code-Snippets für **WordPress** verwendet, um bestimmte Aktionen auszuführen, die sonst ein dediziertes, kleineres Plugin erfordern würden. Solche Code-Snippets werden in einer der WordPress-Kern- oder Theme-Dateien platziert (in der Regel die functions.php-Datei Ihres Themes) oder können als MU-Plugin verwendet werden.

In diesem Artikel zeigen wir Ihnen drei Code-Snippets, die mit **Ultimate Multisite v2** verwendet werden können:

* [**Ändern der Position des Kontomenü-Elements**](#changing-the-position-of-the-account-menu-item)

* [**Wie man prüft, ob der Benutzer unter einem bestimmten Plan steht und/oder ein aktives Abonnement hat**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

* [**Behebung von CORS-Problemen mit Font-Icons in zugeordneten Domains**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ändern der Position des Kontomenü-Elements

Um die Position des Kontomenü-Elements im Dashboard Ihres Kunden zu ändern, fügen Sie einfach das folgende Code-Snippet in die functions.php Ihres aktiven Themes der Hauptseite ein. Sie können das Snippet auch in eines Ihrer MU-Plugins oder benutzerdefinierten Plugins einfügen.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## Wie man prüft, ob der Benutzer unter einem bestimmten Plan steht und/oder ein aktives Abonnement hat

Als Netzwerkadministrator müssen Sie möglicherweise benutzerdefinierte Funktionen erstellen, die grundlegende Aktionen ausführen oder einen Service/Feature für eine ausgewählte Gruppe von Abonnenten oder Endbenutzern verfügbar machen, basierend auf dem Status ihres Abonnements und dem Plan, unter dem sie abonniert sind.

Diese nativen Ultimate Multisite-Funktionen helfen Ihnen dabei.

Um zu prüfen, ob der Benutzer Mitglied eines bestimmten Plans ist, können Sie die Funktion verwenden:

```php
wu_has_plan($user_id, $plan_id)
```

Um zu prüfen, ob das Abonnement aktiv ist, können Sie die Funktion verwenden:

```php
wu_is_active_subscriber($user_id)
```

Nachfolgend ein Beispiel-Snippet, das prüft, ob der aktuelle Benutzer unter einem bestimmten Plan (_Plan ID 50_) steht und ob das Abonnement des Benutzers aktiv ist.

```php
$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;
```

Beachten Sie, dass _**wu_has_plan**_ eine „Plan ID“ benötigt, damit es funktioniert.

Um die ID eines Plans zu erhalten, gehen Sie zu **Ultimate Multisite > Products**. Die ID jedes Produkts wird rechts in der Tabelle angezeigt.

Beachten Sie, dass Benutzer nur einem **Plan** abonniert sein können, nicht einem Paket oder Service, da diese nur Add-ons für einen **Plan** sind.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LAYTqHqw5w.png)

## Behebung von CORS-Problemen mit Font-Icons in zugeordneten Domains

## Behebung von CORS-Problemen mit Font-Icons in zugeordneten Domains

Nach dem Zuordnen einer Domain zu einer Subsite stellen Sie möglicherweise fest, dass die Seite Probleme beim Laden von benutzerdefinierten Schriftarten hat. Das wird durch einen Cross-Origin-Block in Ihren Servereinstellungen verursacht.

Da Schriftdateien fast immer direkt aus CSS geladen werden, kann unser Domain-Mapping-Plugin die URLs nicht umschreiben, um die zugeordnete Domain anstelle der ursprünglichen zu verwenden. Um das Problem zu beheben, müssen Sie Ihre Serverkonfigurationsdateien anpassen.

Nachfolgend finden Sie Code-Snippets, um das Problem für Apache und NGINX zu beheben. Diese Änderungen erfordern fortgeschrittene Kenntnisse der Serverkonfigurationsdateien (.htaccess-Dateien und NGINX-Konfigurationsdateien). Wenn Sie sich nicht sicher sind, diese Änderungen selbst vorzunehmen, senden Sie diese Seite an die Support-Mitarbeiter Ihres Hosting-Anbieters, wenn Sie Unterstützung benötigen.

### Apache

In Ihrer .htaccess-Datei fügen Sie hinzu:

```html
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”
```

### NGINX

In Ihrer Serverkonfigurationsdatei (der Speicherort variiert je nach Server) fügen Sie hinzu:

```nginx
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
```
