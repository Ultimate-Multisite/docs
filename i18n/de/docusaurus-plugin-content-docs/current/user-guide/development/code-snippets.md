---
title: Code-Snippets
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code-Snippets für v2 {#code-snippets-for-v2}

Grundsätzlich werden Code-Snippets für **WordPress** verwendet, um bestimmte Aktionen auszuführen, die andernfalls möglicherweise ein eigenes kleineres Plugin erfordern würden. Solche Code-Snippets werden in einer der WordPress-Core- oder Theme-Dateien platziert (in der Regel in der functions.php-Datei deines Themes) oder können als MU plugin verwendet werden.

In diesem Artikel zeigen wir dir drei Code-Snippets, die mit **Ultimate Multisite v2** verwendet werden können:

  * [**Die Position des Account-Menüeintrags ändern**](#changing-the-position-of-the-account-menu-item)

  * [**So prüfst du, ob der Benutzer einem bestimmten Tarif zugeordnet ist und/oder ein aktives Abonnement hat**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**CORS-Probleme mit Font-Icons in zugeordneten Domains beheben**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Die Position des Account-Menüeintrags ändern {#changing-the-position-of-the-account-menu-item}

Um die Position des Account-Menüeintrags im Dashboard deines Kunden zu ändern, füge einfach das folgende Code-Snippet zur functions.php des aktiven Themes deiner Haupt-Website hinzu. Du kannst das Snippet auch in eines deiner mu-plugins oder benutzerdefinierten Plugins einfügen.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## So prüfst du, ob der Benutzer einem bestimmten Tarif zugeordnet ist und/oder ein aktives Abonnement hat {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Als Netzwerkadministrator musst du möglicherweise benutzerdefinierte Funktionen erstellen, die grundlegende Aktionen ausführen oder einen Dienst/eine Funktion für eine ausgewählte Gruppe von Abonnenten oder Endbenutzern verfügbar machen, basierend auf dem Status ihres Abonnements und dem Tarif, dem sie zugeordnet sind.

Diese nativen Funktionen von Ultimate Multisite helfen dir dabei.

Um zu prüfen, ob der Benutzer Mitglied eines bestimmten Tarifs ist, kannst du die Funktion verwenden:

wu_has_plan($user_id, $plan_id)

Um zu prüfen, ob das Abonnement aktiv ist, kannst du die Funktion verwenden:

wu_is_active_subscriber($user_id)

Unten findest du ein Beispiel-Snippet, das prüft, ob der aktuelle Benutzer einem bestimmten Tarif (_Tarif-ID 50_) zugeordnet ist und ob das Benutzerabonnement aktiv ist.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Beachte, dass _**wu_has_plan**_ eine „Tarif-ID“ benötigt, damit es funktioniert.

Um die ID eines Tarifs zu erhalten, kannst du zu **Ultimate Multisite > Produkte** gehen. Die ID jedes Produkts wird rechts in der Tabelle angezeigt.

Beachte, dass Benutzer nur einen **Tarif** abonnieren können, kein Paket oder keinen Dienst, da diese nur Add-ons für einen **Tarif** sind.

![Produktliste mit Tarif-IDs](/img/admin/products-list.png)

## CORS-Probleme mit Font-Icons in zugeordneten Domains beheben {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## CORS-Probleme mit Font-Icons in zugeordneten Domains beheben {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Nachdem du eine Domain einer Unter-Website zugeordnet hast, stellst du möglicherweise fest, dass die Website Probleme beim Laden benutzerdefinierter Schriftarten hat. Das wird durch eine Cross-Origin-Sperre in deinen Servereinstellungen verursacht.

Da Schriftdateien fast immer direkt aus CSS geladen werden, kann unser Domain-Mapping-Plugin die URLs nicht so umschreiben, dass die zugeordnete Domain anstelle der ursprünglichen verwendet wird. Um das Problem zu beheben, musst du daher deine Server-Konfigurationsdateien anpassen.

Unten findest du Code-Snippets, um das Problem für Apache und NGINX zu beheben. Diese Änderungen erfordern fortgeschrittene Kenntnisse über Server-Konfigurationsdateien (.htaccess-Dateien und NGINX-Konfigurationsdateien). Wenn du dich nicht wohl dabei fühlst, diese Änderungen selbst vorzunehmen, sende diese Seite an die Support-Mitarbeiter deines Hosting-Anbieters, wenn du Unterstützung benötigst.

### Apache {#apache}

Füge in deiner .htaccess-Datei Folgendes hinzu:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Füge in deiner Server-Konfigurationsdatei (der Speicherort variiert von Server zu Server) Folgendes hinzu:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
