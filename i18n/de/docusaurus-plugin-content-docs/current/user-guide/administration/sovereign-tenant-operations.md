---
title: Operations des souveränen Mieters
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Betrieb souveräner Tenants {#sovereign-tenant-operations}

Ultimate Multisite Version 1.2.0 fügt betriebliche Werkzeuge für souveräne Tenants hinzu: Subsites, die mit ihrer eigenen Datenbank, ihrem Dateisystem-Root und ihrem Routing-Kontext laufen, während sie vom Netzwerkadministrator aus sichtbar bleiben.

Nutzen Sie diese Seite beim Verwalten isolierter Kundensitze, Fernwechseln oder Migrationen, bei denen ein Standard-Subsite in eine souveräne Infrastruktur überführt wird.

## Was sich für Administratoren ändert {#what-changes-for-administrators}

- **Stateless Tenant Autologin** — Netzwerkadministratoren können einen souveränen Tenant besuchen, ohne auf langlebige geteilte Sitzungszustände angewiesen zu sein. Das SSO-Token ist zweckgebunden (purpose-scoped), von der Quelle abhängig (origin-pinned), replay-geschützt und auf ein kurzes Ablauffenster begrenzt.
- **Souverän-sensitives Routing** — Alte isolierte Netzwerke und souveräne Tenants lösen über denselben Site Router Pfad, was Unterschiede beim Booten zwischen alten und neuen isolierten Installationen reduziert.
- **Verifizierter Migrationsstatus** — Die Migrationsprüfung kontrolliert die Benutzerbereitstellung, die Datenbank-Schreibberechtigungen, den Status des Queue Drains und das Fehlen alter Tabellen, bevor ein Tenant als abgeschlossen betrachtet wird.
- **Sichereres Abschalten (Teardown)** — Das Abschalten souveräner Tenants entfernt nun die Tenant-Anmeldeinformationen sauber, sodass gelöschte Tenants keinen veralteten Datenbankzugriff zurücklassen.

## Besuch eines souveränen Tenants {#visiting-a-sovereign-tenant}

1. Öffnen Sie **Network Admin > Ultimate Multisite > Sites**.
2. Wählen Sie den souveränen Tenant aus.
3. Nutzen Sie **Visit (SSO)**, wenn verfügbar, anstelle des Kopierens von Passwörtern oder der Erstellung temporärer Admin-Konten.

Der Besuchsprozess erstellt für diesen Tenant ein kurzlebiges Anmeldetoken und protokolliert das SSO-Ereignis im Audit-Trail des Tenants. Wenn die Schaltfläche fehlschlägt, überprüfen Sie bitte, ob die Tenant-Domain auf die erwartete Installation aufgelöst wird und ob der Tenant den SSO-Endpunkt auf der Netzwerkseite erreichen kann.

## Checkliste für Remote-Site-Operationen {#remote-site-operations-checklist}

Bevor Sie einen souveränen oder Remote-Tenant ändern, bestätigen Sie Folgendes:

- Die Domäne des Mieters zeigt auf den Host, der das Dateisystem des Mieters besitzt.
- Der Datenbankhost des Mieters stimmt mit der konfigurierten Hostbindung für diese Installation überein.
- Die Migrationsverifizierungsbefehle werden für den Mieter erfolgreich ausgeführt.
- Asynchrone Migrationswarteschlangen werden geleert, bevor DNS- oder Eigentümeränderungen vorgenommen werden.
- Der Benutzer des Tenant-Admins wurde während der Migration bereitgestellt und kann über SSO angemeldet werden.

## Löschen souveräner Mieter {#deleting-sovereign-tenants}

Das Löschen eines souveränen Mieters ist destruktiv. Bestätigen Sie zuerst den Backup- und Exportstatus und löschen Sie ihn dann über die Administrationsansicht der Website. Der Teardown-Prozess in Version 1.2.0 entfernt Datenbankzugangsdaten als Teil der Bereinigung, aber Administratoren sollten trotzdem überprüfen, ob Host-Level-Datenbankbenutzer und -Ordner verschwunden sind, wenn externe Hosting-Panels verwendet werden.

:::warning
Löschen Sie einen souveränen Mieter nicht, solange die Migrationsverifizierung noch läuft oder asynchrone Push-Jobs in der Warteschlange sind. Warten Sie, bis die Verifizierung abgeschlossen ist, damit der Teardown keine für ausstehende Jobs benötigten Anmeldeinformationen entfernt.
:::
