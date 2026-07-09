---
title: Einstellungsreferenz
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Einstellungen-Referenz

Diese Seite erfasst Einstellungen, die die tägliche Administration und jüngste Verhaltensänderungen in Ultimate Multisite betreffen.

## Weitere Optionen

Der Bereich **Weitere Optionen** erscheint unter **Ultimate Multisite > Einstellungen > Anmeldung & Registrierung**.

| Einstellung | Beschreibung |
|---|---|
| **Jumper aktivieren** | Zeigt das Jumper-Schnellnavigationstool im Admin-Bereich an. Verwenden Sie es, um direkt zu Ultimate Multisite-Bildschirmen, Netzwerkobjekten und unterstützten Admin-Zielen zu springen. Deaktivieren Sie es, wenn Sie diese Verknüpfung nicht sichtbar haben möchten. |

## Fehlerberichterstattung und Telemetrie

Die frühere Opt-in-Einstellung für Fehlerberichterstattung wurde von der Einstellungsseite entfernt. Anonyme Telemetrie ist deaktiviert, und es gibt keinen UI-Schalter, um sie zu aktivieren.

Wenn Sie interne Runbooks oder Screenshots für die Einstellungsseite pflegen, entfernen Sie Verweise auf das alte Opt-in-Feld für Fehlerberichterstattung, damit Administratoren nicht nach einer Einstellung suchen, die nicht mehr vorhanden ist.

## Import/Export-Einstellungen

Der Tab **Import/Export**-Einstellungen beschreibt, welche Einstellungen er steuert, und verlinkt direkt zu **Ultimate Multisite > Website-Export** für Website- und Netzwerkarchive. Verwenden Sie den Einstellungstab für die Import/Export-Konfiguration, **Werkzeuge > Export & Import** für den Export/Import-Workflow einer einzelnen Website und das Website-Export-Tool, wenn Sie ein vollständiges Netzwerk-Exportarchiv benötigen.

## Domain Seller HostAfrica-Saldenwarnung

Wenn das Domain Seller-Addon mit HostAfrica verbunden ist, sehen Netzwerkadministratoren jetzt eine ausblendbare Warnung bei niedrigem Saldo, wenn der Saldo des Reseller-Accounts zu niedrig für eine zuverlässige Domain-Registrierung oder Verlängerungsverarbeitung ist.

Behandeln Sie diesen Hinweis als betriebliche Warnung: Laden Sie den HostAfrica-Reseller-Saldo auf, bevor Sie weitere bezahlte Domain-Registrierungen annehmen, und kehren Sie dann zu den Domain Seller-Einstellungen oder dem Domain-Überwachungsbildschirm zurück, um zu bestätigen, dass Registrierungen und Verlängerungen normal fortgesetzt werden können.

## Einstellungen für AI-Anbieter-Connectoren

Einstellungen für AI-Anbieter-Connectoren zeigen jetzt nur noch die unterstützten OAuth-Account-Pools an:

| Anbieter | Einrichtungsablauf |
|---|---|
| **Anthropic Max** | Verbinden Sie ein oder mehrere Anthropic Max-Accounts mit dem OAuth-Button. Verwenden Sie den manuellen OAuth-Fallback, wenn ein sandboxed Browser die Weiterleitung nicht automatisch abschließen kann. |
| **OpenAI ChatGPT/Codex** | Verbinden Sie ChatGPT-Accounts über denselben OAuth-Pool-Workflow. Von Connectoren unterstützte Vorgänge können ChatGPT Codex-Tool-Aufrufe verwenden, nachdem der Account verbunden ist. |
| **Google AI Pro** | Verbinden Sie Google AI Pro-Accounts über OAuth und aktualisieren Sie dann den Connector, wenn die Account-Liste nicht sofort aktualisiert wird. |

Cursor Pro ist kein unterstützter Anbieter mehr. Entfernen Sie alte interne Screenshots, Runbooks oder Onboarding-Schritte, die Cursor Pro-Einrichtungsfelder oder Connector-Pfade erwähnen.

Wenn Sie Anbieter-Accounts hinzufügen oder entfernen, geben Sie eine gültige E-Mail-Adresse für den Account ein, der aktualisiert oder gelöscht wird, und speichern Sie die Anbietereinstellungen, bevor Sie Connector-gestützte Vorgänge testen.
