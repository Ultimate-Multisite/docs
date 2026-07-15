---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 führt das **Plugin Builder & Sandbox System** ein. Damit kann der KI-Assistent WordPress-Plugins in Ihrem Netzwerk generieren, aktivieren und verwalten – und das alles innerhalb einer sicheren, isolierten Sandbox-Umgebung.

## Überblick {#overview}

Der Plugin Builder ermöglicht es dem KI-Assistenten, auf natürliche Sprachanfragen hin benutzerdefinierte WordPress-Plugins zu schreiben. Die generierten Plugins werden validiert, gespeichert und in einer Sandbox-Schicht aktiviert, bevor sie jemals die Funktionalität der Live-Seite beeinflussen.

Anwendungsfälle sind unter anderem:

- Generierung leichter Utility-Plugins ohne Entwicklerbeteiligung.
- Prototyping von Funktionen, die WordPress Hooks oder benutzerdefinierte Beitragstypen erfordern.
- Erstellung kurzlebiger Automatisierungsskripte für Stapeloperationen.

## Generieren eines Plugins mittels KI {#generating-a-plugin-via-ai}

Um ein Plugin zu generieren, öffnen Sie die Chat-Oberfläche des Gratis AI Agent und beschreiben Sie, was Sie benötigen. Zum Beispiel:

> "Erstelle ein Plugin, das eine benutzerdefinierte Admin-Benachrichtigung auf dem Dashboard hinzufügt."

Die KI wird:

1. Den PHP-Code des Plugins mithilfe strukturierter Code-Generierung erstellen.
2. Die Ausgabe auf Syntaxfehler und unsichere Muster überprüfen.
3. Das generierte Plugin im Sandbox-Speicher speichern.
4. Eine Bestätigung mit dem Plugin-Slug und einem Button **In Sandbox aktivieren** zurückgeben.

Sie können das Ergebnis verfeinern, indem Sie vor der Aktivierung eine Folgefrage im selben Gesprächs-Thread stellen.

## Sandbox-Aktivierung {#sandbox-activation}

Die Aktivierung eines generierten Plugins in der Sandbox unterscheidet sich von der Aktivierung im Live-Netzwerk. Die Sandbox:

- Führt das Plugin in einer isolierten WordPress-Umgebung (wp-env) aus.
- Erfasst alle PHP-Fehler, Warnungen oder Hook-Konflikte.
- Meldet das Aktivierungsergebnis in der Chat-Oberfläche zurück.

Um ein Plugin in der Sandbox zu aktivieren, klicken Sie auf den Button **In Sandbox aktivieren** in der KI-Chat-Antwort oder verwenden Sie den Slash-Befehl:

```
/activate-plugin <plugin-slug>
```

Eine Statusmeldung bestätigt, ob die Aktivierung erfolgreich war oder fehlgeschlagen ist. Bei einem Fehler wird das Fehlerprotokoll im Chat-Thread angezeigt.

## Verwalten von generierten Plugins {#managing-generated-plugins}

Generierte Plugins werden unter **Gratis AI Agent → Plugin Builder → Manage Plugins** aufgelistet. Von diesem Bildschirm aus können Sie:

| Aktion | Beschreibung |
|---|---|
| **Quelle ansehen** | Überprüfen Sie den vollständigen Plugin-PHP-Code. |
| **In Sandbox reaktivieren** | Führen Sie die Sandbox-Aktivierungsprüfung erneut durch. |
| **Im Netzwerk installieren** | Bereitstellen des Plugins im Live-Netzwerk (erfordert manuelle Bestätigung). |
| **Aktualisieren** | Geben Sie über die KI eine neue Version an, die den bestehenden Code ersetzt. |
| **Löschen** | Entfernt das Plugin aus dem Sandbox-Speicher. Deaktiviert es zuerst von allen Seiten. |

:::warning
**Im Netzwerk installieren** stellt das generierte Plugin auf Ihr Live-WordPress-Multisite bereit. Überprüfen Sie den Plugin-Code, bevor Sie fortfahren. Gratis AI Agent fordert Sie vor Abschluss einer Live-Installation zur Bestätigung auf.
:::

## Installation eines generierten Plugins im Netzwerk {#installing-a-generated-plugin-on-the-network}

Wenn Sie mit einem in der Sandbox getesteten Plugin zufrieden sind, können Sie es im Live-Netzwerk installieren:

1. Gehen Sie zu **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klicken Sie neben dem Plugin, das Sie bereitstellen möchten, auf **Install on Network**.
3. Bestätigen Sie das Dialogfeld. Das Plugin wird in `wp-content/plugins/` installiert und auf Netzwerkebene aktiviert.

Alternativ verwenden Sie den Slash-Befehl in der Chat-Oberfläche:

```
/install-plugin <plugin-slug>
```

## Plugin-Updates {#plugin-updates}

Um ein generiertes Plugin zu aktualisieren, beschreiben Sie die Änderung in einem neuen Gespräch dem KI-Assistenten:

> "Aktualisiere das dashboard-notice Plugin so, dass die Benachrichtigung nur für Administratoren sichtbar ist."

Die KI generiert eine neue Version, die zusammen mit der aktuellen Version in der Sandbox erscheint. Sie überprüfen den Diff und bestätigen, bevor das Update angewendet wird.

## HookScanner Integration {#hookscanner-integration}

Der Plugin Builder verwendet einen integrierten **HookScanner**, um die Hooks und Filter zu analysieren, die jedes generierte Plugin registriert. Die Ausgabe des HookScanners wird in der Chat-Antwort angezeigt und enthält:

- Registrierte Action Hooks (`add_action` Aufrufe).
- Registrierte Filter Hooks (`add_filter` Aufrufe).
- Alle in Plugin-Abhängigkeiten gefundenen Hooks (überspringt Verzeichnisse wie `vendor/` und `node_modules/`).

Dies hilft Ihnen, das Verhalten eines Plugins zu verstehen, bevor Sie es aktivieren.

## Sicherheitsaspekte {#security-considerations}

- Generierte Plugins werden separat von manuell installierten Plugins gespeichert und sind nicht über den Standard-WordPress-Plugin-Verwaltungsbildschirm zugänglich, bis Sie sie explizit im Netzwerk installieren.
- Die Sandbox verwendet Pfadvalidierung, um Verzeichnisdurchläufe zu verhindern, wenn Plugin-Dateien geschrieben werden.
- Plugins mit gefährlichen Funktionsaufrufen (z. B. `eval`, `exec`, `system`) werden während der Validierung markiert und werden nicht aktiviert.
