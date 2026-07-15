---
title: Gratis AI Agent Einstellungen
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent-Einstellungen

Der Bildschirm **Settings → Advanced** in Gratis AI Agent bietet Konfiguration auf Administratorebene für Backend-Integrationen. Diese Seite dokumentiert Feedback-Weiterleitung, Schlüssel für Suchanbieter, Einrichtung des verwalteten Superdav-Dienstes, Google Calendar-Steuerungen, TextBee-SMS-Einstellungen und netzwerkweite Feature-Flags.

## Auf Einstellungen zugreifen {#accessing-settings}

1. Gehe im WordPress-Admin zu **Gratis AI Agent → Settings**.
2. Klicke auf den Tab **Advanced**.

## Konfiguration des Feedback-Endpoints {#feedback-endpoint-configuration}

Der Feedback-Endpoint empfängt POST-Anfragen vom AI Agent, wann immer ein Benutzer Feedback über die Daumen-runter-Schaltfläche, das Auto-Prompt-Banner oder den Befehl `/report-issue` einreicht.

| Feld | Beschreibung |
|---|---|
| **Feedback Endpoint URL** | Die URL, die Feedback-Einreichungen als HTTP-POST-Anfragen mit einem JSON-Body empfängt. |
| **Feedback API Key** | Ein bearer token, das im `Authorization` header jeder Feedback-Anfrage gesendet wird. Leer lassen, wenn dein Endpoint keine Authentifizierung erfordert. |

### Erwartete JSON-Nutzlast {#expected-json-payload}

Dein Feedback-Endpoint muss einen JSON-Body mit mindestens den folgenden Feldern akzeptieren:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Je nach Gesprächskontext können zusätzliche Felder in der Nutzlast vorhanden sein.

### `triage_category`-Werte {#triagecategory-values}

Die AI-Triage-Ebene weist `triage_category` einen der folgenden Werte zu, bevor sie die Nutzlast weiterleitet:

| Wert | Bedeutung |
|---|---|
| `factual_error` | Der Assistent hat sachlich falsche Informationen geliefert. |
| `unhelpful_answer` | Die Antwort war technisch korrekt, aber nicht hilfreich. |
| `inappropriate_content` | Die Antwort enthielt Inhalte, die Benutzern nicht angezeigt werden sollten. |
| `other` | Das Feedback entsprach keiner bekannten Kategorie. |

### Authentifizierung {#authentication}

Wenn dein Endpoint Authentifizierung erfordert, setze das Feld **Feedback API Key** auf dein bearer token. Der Agent sendet:

```
Authorization: Bearer <your-api-key>
```

Wenn das Feld **Feedback API Key** leer ist, wird kein `Authorization` header gesendet.

### Feedback-Erfassung deaktivieren {#disabling-feedback-collection}

Lasse sowohl die Felder **Feedback Endpoint URL** als auch **Feedback API Key** leer. Die Daumen-runter-Schaltfläche und die Feedback-UI bleiben für Benutzer sichtbar, aber Einreichungen werden nicht an einen externen Dienst weitergeleitet.

## Brave Search API Key {#brave-search-api-key}

Ebenfalls im Tab **Advanced** aktiviert das Feld **Brave Search API Key** die Fähigkeit [Internetsuche](../configuration/internet-search).

| Feld | Beschreibung |
|---|---|
| **Brave Search API Key** | Dein API-Schlüssel aus dem Brave Search-Entwickler-Dashboard. Erforderlich, um die Internetsuche im AI-Assistenten zu aktivieren. |

Die Feldbezeichnung enthält einen anklickbaren Link zur Brave Search API-Registrierungsseite. Leer lassen, um die Internetsuche zu deaktivieren.

Siehe [Internetsuche](../configuration/internet-search) für Endbenutzer-Dokumentation zu dieser Funktion.

## Verwalteter Superdav-Dienst {#managed-superdav-service}

Superdav AI Agent v1.18.0 fügt verwaltete Superdav-Dienst-Endpoints und automatische Verbindungsbereitstellung für unterstützte Sites hinzu. Verwende diese Steuerelemente, wenn deine Site mit dem gehosteten Anbieter statt mit einem manuell konfigurierten Dienst-Endpoint verbunden werden soll.

| Feld | Beschreibung |
|---|---|
| **Managed Superdav Service** | Aktiviert die Verbindung zum gehosteten Superdav-Dienst für unterstützte Sites. |
| **Provision Connection** | Startet die automatische Bereitstellung von Endpoint und Anmeldedaten. Verwende dies, nachdem du bestätigt hast, dass die Site den verwalteten Anbieter verwenden soll. |
| **Service Endpoint / Connection Status** | Zeigt den aktuellen Endpoint oder Verbindungszustand nach der Bereitstellung an. |

Speichere nach der Bereitstellung die Einstellungen und überprüfe den Verbindungsstatus, bevor du dich auf Workflows des verwalteten Dienstes verlässt. Wenn die Bereitstellung fehlschlägt, prüfe die angezeigten Hinweise zum erneuten Versuch und bestätige, dass die Site die Berechtigung hat, den gehosteten Anbieter zu verwenden.

## Google Calendar-Konfiguration {#google-calendar-configuration}

Wenn Kalenderfunktionen von Superdav AI Agent v1.18.0 aktiviert sind, kann der Agent konfigurierte Kalender und Ereignisdetails lesen. Kalender-Tools sind leseorientiert und nützlich für terminbewusste Erinnerungen, Teilnehmer-Follow-up und Kontaktabgleich.

| Feld | Beschreibung |
|---|---|
| **Google Calendar Credentials** | Speichert die Anmeldedaten oder Token-Verbindung, die zum Lesen von Kalenderdaten erforderlich sind. |
| **Calendar Selection** | Beschränkt, welche konfigurierten Kalender der Agent prüfen darf. |
| **Calendar Connection Status** | Bestätigt, ob die aktuellen Anmeldedaten Kalender und Ereignisse lesen können. |

Beschränke Kalender-Anmeldedaten auf die Kalender, die der Agent benötigt. Verbinde die Anmeldedaten neu oder rotiere sie, wenn der Status ein abgelaufenes Token anzeigt.

## TextBee-SMS-Benachrichtigungen {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 fügt TextBee als SMS-Anbieter für konfigurierte Benachrichtigungs-Workflows hinzu. SMS-Benachrichtigungen sollten bei sensiblen oder an Benutzer gerichteten Nachrichten mit menschlichen Freigabe-Gates kombiniert werden.

| Feld | Beschreibung |
|---|---|
| **TextBee API Key** | Authentifiziert Anfragen an den TextBee-SMS-Anbieter. |
| **TextBee Device / Sender** | Wählt den TextBee-Absender oder das Gerät aus, das für ausgehende Nachrichten verwendet wird, wenn vom Anbieter erforderlich. |
| **SMS Notifications Enabled** | Ermöglicht genehmigten Workflows, Textnachrichten-Benachrichtigungen zu senden. Deaktiviert lassen, um SMS-Versand zu verhindern. |

Sende eine Testnachricht nur an eine Nummer, die einem Administrator gehört, und bestätige dann das Verhalten der Freigabe-Gates, bevor geplante oder an Teilnehmer gerichtete Erinnerungen aktiviert werden.

## Feature-Flags {#feature-flags}

Ebenfalls in v1.9.0 eingeführt, bietet der Tab **Settings → Feature Flags** Umschalter für optionale Funktionen. Jedes Flag ist netzwerkweit entweder aktiviert oder deaktiviert; derzeit gibt es keine Überschreibung pro Site.

### Auf Feature-Flags zugreifen {#accessing-feature-flags}

1. Gehe im WordPress-Admin zu **Gratis AI Agent → Settings**.
2. Klicke auf den Tab **Feature Flags**.

### Zugriffskontroll-Flags {#access-control-flags}

| Flag | Standard | Beschreibung |
|---|---|---|
| **Auf Administratoren beschränken** | Aus | Wenn aktiviert, können nur Benutzer mit der Rolle `administrator` das Chat-Panel des AI Agent öffnen. Alle anderen Rollen sehen stattdessen eine Meldung „Wenden Sie sich an Ihren Administrator“. |
| **Auf Network Admins beschränken** | Aus | Wenn in einem Multisite-Netzwerk aktiviert, können nur Super Admins den Agent verwenden. Einzelne Website-Administratoren werden blockiert. Hat Vorrang vor „Auf Administratoren beschränken“, wenn beide aktiviert sind. |
| **Subscriber-Zugriff erlauben** | Aus | Wenn aktiviert, können Benutzer mit der Rolle `subscriber` die Chat-Oberfläche verwenden, sind jedoch auf Nur-Lese-Funktionen beschränkt (keine Beitragserstellung oder Einstellungsänderungen). |
| **Für Nichtmitglieder deaktivieren** | Aus | Integriert sich mit dem Mitgliedschaftsstatus von Ultimate Multisite. Wenn aktiviert, ist der Chat für Websites ausgeblendet, die keine aktive Mitgliedschaft haben. |

### Branding-Flags {#branding-flags}

| Flag | Standard | Beschreibung |
|---|---|---|
| **„Powered by Gratis AI Agent“-Footer ausblenden** | Aus | Entfernt die Branding-Zuordnungszeile, die unten im Chat-Widget angezeigt wird. Empfohlen für White-Label-Bereitstellungen. |
| **Benutzerdefinierter Agent-Name** | *(leer)* | Ersetzt das standardmäßige Label „Gratis AI Agent“ im Chat-Header und Admin-Menü durch Ihren eigenen Produktnamen. Leer lassen, um den Standard zu verwenden. |
| **Agent-Auswahl ausblenden** | Aus | Wenn aktiviert, können Benutzer nicht zwischen den fünf integrierten Agents wechseln. Der aktuelle Agent ist fest auf das eingestellt, was unter Einstellungen → Allgemein als Standard konfiguriert ist. |
| **Site Icon als Chat-Avatar verwenden** | Aus | Ersetzt das standardmäßige AI-Symbol im Header des Chat-Widgets durch das WordPress Site Icon (festgelegt unter Design → Anpassen → Website-Identität). |

### Sicherheits-Flags für Automatisierung {#automation-safety-flags}

Superdav AI Agent v1.18.0 führt Genehmigungs-Gates durch Menschen und Erinnerungsdatensätze für sicherere Automatisierungsläufe ein. Diese Steuerelemente können je nach installiertem Paket in den Feature-Flags oder den erweiterten Automatisierungseinstellungen erscheinen.

| Flag | Standard | Beschreibung |
|---|---|---|
| **Menschliche Genehmigung erforderlich** | Empfohlen an | Pausiert sensible Automatisierungen, bis ein autorisierter Benutzer die vorgeschlagene Aktion überprüft und bestätigt. |
| **Erinnerungs-Deduplizierung** | An | Zeichnet gesendete Erinnerungen auf, damit Wiederholungen oder geplante Läufe keine doppelten Benachrichtigungen senden. |
| **Kalender-Tools aktivieren** | Aus, bis konfiguriert | Ermöglicht dem Agent, konfigurierte Google-Kalender und Ereignisse zu lesen. |
| **SMS-Benachrichtigungen aktivieren** | Aus, bis konfiguriert | Ermöglicht genehmigten Workflows, TextBee-SMS-Benachrichtigungen zu senden, nachdem Zugangsdaten gespeichert wurden. |

### Änderungen anwenden {#applying-changes}

Klicken Sie auf **Einstellungen speichern**, nachdem Sie ein Flag umgeschaltet haben. Änderungen werden sofort wirksam — kein Leeren des Caches und keine Reaktivierung des Plugin ist erforderlich.
