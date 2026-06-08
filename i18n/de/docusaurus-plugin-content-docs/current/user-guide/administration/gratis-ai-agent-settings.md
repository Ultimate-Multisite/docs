---
title: Kostenlose AI Agent Einstellungen
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Einstellungen

Der Bildschirm **Einstellungen → Erweitert** in Gratis AI Agent bietet Konfigurationsmöglichkeiten auf Administrator-Ebene für Backend-Integrationen, die in v1.5.0 eingeführt wurden. Diese Seite dokumentiert die Felder des **Feedback Endpunkts** und deren erwartetes Format.

## Einstellungen aufrufen

1. Gehen Sie im WordPress-Admin zu **Gratis AI Agent → Einstellungen**.
2. Klicken Sie auf den Tab **Erweitert**.

## Konfiguration des Feedback Endpunkts

Der Feedback Endpunkt empfängt POST-Anfragen vom AI Agent, immer dann, wenn ein Benutzer Feedback über die Daumen-runter-Schaltfläche, das Auto-Prompt-Banner oder den Befehl `/report-issue` sendet.

| Feld | Beschreibung |
|---|---|
| **Feedback Endpoint URL** | Die URL, die Feedback-Einreichungen als HTTP POST-Anfragen mit einem JSON-Body empfängt. |
| **Feedback API Key** | Ein Bearer-Token, das in den `Authorization`-Header jeder Feedback-Anfrage gesendet wird. Lassen Sie das Feld leer, wenn Ihr Endpunkt keine Authentifizierung erfordert. |

### Erwarteter JSON-Payload

Ihr Feedback Endpunkt muss einen JSON-Body akzeptieren, der mindestens die folgenden Felder enthält:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Die Antwort war falsch bezüglich der Preise.",
  "triage_category": "factual_error"
}
```

Je nach Gesprächskontext können weitere Felder im Payload vorhanden sein.

### `triage_category` Werte

Die AI Triage-Schicht weist vor dem Weiterleiten des Payloads einen der folgenden Werte für `triage_category` zu:

| Wert | Bedeutung |
|---|---|
| `factual_error` | Der Assistent hat falsche Fakteninformationen bereitgestellt. |
| `unhelpful_answer` | Die Antwort war technisch korrekt, aber nicht hilfreich. |
| `inappropriate_content` | Die Antwort enthielt Inhalte, die nicht den Benutzern gezeigt werden sollten. |
| `other` | Das Feedback passte nicht zu einer bekannten Kategorie. |

### Authentifizierung

Wenn Ihr Endpunkt eine Authentifizierung erfordert, setzen Sie das Feld **Feedback API Key** auf Ihr Bearer-Token. Der Agent sendet:

```
Authorization: Bearer <your-api-key>
```

Ist das Feld **Feedback API Key** leer, wird kein `Authorization`-Header gesendet.

### Sammlung von Feedback deaktivieren

Lassen Sie sowohl das Feld **Feedback Endpoint URL** als auch **Feedback API Key** leer. Die Daumen-runter-Schaltfläche und die Feedback-UI bleiben für Benutzer sichtbar, aber die Einreichungen werden nicht an einen externen Dienst weitergeleitet.

## Brave Search API Key

Auch auf dem Tab **Erweitert** ermöglicht das Feld **Brave Search API Key** die [Internet-Suche](../configuration/internet-search).

| Feld | Beschreibung |
|---|---|
| **Brave Search API Key** | Ihr API-Schlüssel aus dem Brave Search Developer Dashboard. Erforderlich, um die Internet-Suche im AI Assistenten zu aktivieren. |

Die Feldbezeichnung enthält einen anklickbaren Link zur Brave Search API Anmeldeseite. Lassen Sie das Feld leer, um die Internet-Suche zu deaktivieren.

Weitere Informationen für Endbenutzer finden Sie unter [Internet-Suche](../configuration/internet-search).

## Feature Flags

Auch in v1.9.0 eingeführt, bietet der Tab **Einstellungen → Feature Flags** Umschalter für optionale Funktionalität. Jedes Flag ist entweder für alle Benutzer aktiviert oder deaktiviert; es gibt derzeit keine Übersteuerung pro Website.

### Feature Flags aufrufen

1. Gehen Sie im WordPress-Admin zu **Gratis AI Agent → Einstellungen**.
2. Klicken Sie auf den Tab **Feature Flags**.

### Zugriffskontroll-Flags

| Flag | Standard | Beschreibung |
|---|---|---|
| **Restrict to Administrators** | Aus | Wenn aktiviert, können nur Benutzer mit der Rolle `administrator` das AI Agent Chat Panel öffnen. Alle anderen Rollen sehen stattdessen die Meldung „Kontaktieren Sie Ihren Administrator“. |
| **Restrict to Network Admins** | Aus | Wenn in einem Multisite-Netzwerk aktiviert, können nur Super Admins den Agenten nutzen. Einzelne Site-Administratoren sind blockiert. Hat Vorrang vor „Restrict to Administrators“, wenn beide aktiviert sind. |
| **Allow Subscriber Access** | Aus | Wenn aktiviert, können Benutzer mit der Rolle `subscriber` die Chat-Oberfläche nutzen, sind aber auf Lesezugriffe beschränkt (keine Beitragserstellung oder Einstellungen-Änderungen). |
| **Disable for Non-Members** | Aus | Integriert sich mit dem Ultimate Multisite Mitgliedsstatus. Wenn aktiviert, ist der Chat für Websites ausgeblendet, die kein aktives Mitgliedschaftsverhältnis haben. |

### Branding Flags

| Flag | Standard | Beschreibung |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Aus | Entfernt die Branding-Zuschreibungszeile, die am unteren Rand des Chat-Widgets angezeigt wird. Empfohlen für White-Label-Implementierungen. |
| **Custom Agent Name** | *(leer)* | Ersetzt das Standard-Label „Gratis AI Agent“ in der Chat-Überschrift und im Admin-Menü durch Ihren eigenen Produktnamen. Lassen Sie das Feld leer, um den Standard zu verwenden. |
| **Hide Agent Picker** | Aus | Wenn aktiviert, können Benutzer nicht zwischen den fünf integrierten Agenten wechseln. Der aktuelle Agent ist auf das festgelegt, was in Einstellungen → Allgemein als Standard konfiguriert ist. |
| **Use Site Icon as Chat Avatar** | Aus | Ersetzt das Standard-AI-Icon in der Chat-Widget-Überschrift durch das WordPress-Site-Icon (eingerichtet unter Erscheinungsbild → Anpassen → Site Identity). |

### Änderungen übernehmen

Klicken Sie nach dem Umschalten eines Flags auf **Einstellungen speichern**. Die Änderungen treten sofort in Kraft – es ist kein Cache-Flush oder Plugin-Reaktivierung erforderlich.
