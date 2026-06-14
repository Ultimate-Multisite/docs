---
title: Gratis AI Agent Einstellungen
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

D'**Settings → Advanced**-scherm in Gratis AI Agent biedt Administrator-Level-Konfiguratiön für Backend-Integrationen, wo mit v1.5.0 eingeführt worde sind. Dë Page dokumentiert d'Felder vom **Feedback Endpoint** und de erwartete Format.

## Zuegang zu Settings

1. Im WordPress Admin geet an **Gratis AI Agent → Settings**.
2. Klicke uf de Tab **Advanced**.

## Feedback Endpoint Konfiguratiön

De Feedback Endpoint empfangt POST-Requests vum AI Agent, wann e Benutzer Feedback über d'Daumen-nach-un Button, de Auto-Prompt Banner oder de `/report-issue` Befehl absendet.

| Feld | Beschriwwungs |
|---|---|
| **Feedback Endpoint URL** | D'URL, déi Feedback-Absendungen als HTTP POST Requests mit eme JSON Body empfangt. |
| **Feedback API Key** | E Bearer Token, dem weier in de `Authorization` Header vun jeder Feedback-Request gesendet gëtt. Laach ihn leer la, wann din Endpoint ke Authentifizatioun brucht. |

### Erwarteti JSON Payload

Din Feedback Endpoint muss e JSON Body akzepté, de mindestens déi folgend Felder enthält:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "D'Antwort war falsch wärend de Priisbestimmungen.",
  "triage_category": "factual_error"
}
```

Zusätzlech Felder chënntet am Payload vorhanden sinn, abhängig vun der Konversatiounskontext.

### `triage_category` Werten

D'AI Triage-Schicht weist e vun de folgend Werten dem `triage_category` zue, bevor se de Payload wiiterleit:

| Wert | Bedéckung |
|---|---|
| `factual_error` | De Assistent hat falsche Fakte gegeleit. |
| `unhelpful_answer` | D'Antwort war technisch korrekt, aber nützlich. |
| `inappropriate_content` | D'Antwort enthaitt Inhalt, de net a Benutzer gpaasse ass. |
| `other` | De Feedback het ke bekannte Kategorie bedeit. |

### Authentifizatioun

Wenn d'Endpoint vo Ihrem Endpunkt Authentifizierig brucht, setze s'Feld **Feedback API Key** uf Ihren Bearer Token. De Agent schickt:

```
Authorization: Bearer <ihre-api-key>
```

Wenn s'Feld **Feedback API Key** leer isch, wird kei `Authorization` Header gschickt.

### Feedback-Sammlig deaktivierä

Lass sowohl s'Feld **Feedback Endpoint URL** als au s'Feld **Feedback API Key** leer. D'Daumen-runter-Schaltflächi und d'Feedback-UI bliebe für d'User sichtbar, aber d'Iisend vo de Feedback nöd a irgendeine externe Service wiitergäh.

## Brave Search API Key

Au im **Advanced** Tab isch s'Feld **Brave Search API Key** aktiv, wenn Sie d'Funktionalität vom [Internet Search](../configuration/internet-search) aktiviere wend.

| Feld | Beschriibig |
|---|---|
| **Brave Search API Key** | Ihr API-Schlüssel vo de Brave Search Developer Dashboard. Erforderlich, um s'Internet-Suchen im KI-Assistent z'aktivierä. |

D'Feldbezeichnung enthält en klickbare Link zur Anmeldeseite für d'Brave Search API. Lassen Sie es leer, um s'Internet-Suchen z'deaktivierä.

Siehe [Internet Search](../configuration/internet-search) für d'Dokumentation für Endbenutzer zu dere Funktionalität.

## Feature Flags

Au mit v1.9.0 eingeführt, bietet de Tab **Settings → Feature Flags** Schalter für optionali Funktionalitäte. Jede Flag isch entweder uf ganz Netzwiit aktiviert oder deaktiviert; es git im Momänt kei Möglichkeit, das pro Website z'überschriibe.

### Zugriff uf Feature Flags

1. Im WordPress Admin-Bereich gaht Sie zu **Gratis AI Agent → Settings**.
2. Klicke Sie uf de Tab **Feature Flags**.

### Access Control Flags

| Flag | Standardwert | Beschriitig |
|---|---|---|
| **Nur für Administratore beschränke** | Aus | Wenn aktiviert, chönne nur Benutzer mit de Rolle `administrator` de AI Agent Chat Panel öffne. Alli andere Rollen gsehnd e Nachricht wie "Kontaktieret Ihre Administrator". |
| **Nur für Netzwerk-Admins beschränke** | Aus | Wenn das uf eme Multisite Network aktiviert isch, chönne nume Super Admins de Agent bruche. Einzelsite-Admins sind blockiert. Das het Vorrang vor "Nur für Administratore beschränke", wenn beidi aktiviert sind. |
| **Abonnentenzugriff erlauben** | Aus | Wenn aktiviert, chönne Benutzer mit de Rolle `subscriber` d'Chat-Schnittstell bruche, aber si sind uf lesi-nami Fähigkeite beschränkt (kei Post-Erstellige oder Einstellungswiächsel). |
| **Für Nicht-Mitglieder deaktivieren** | Aus | Integriert sich mit em Membership-Status vo Ultimate Multisite. Wenn aktiviert, wird de Chat für Sites versteckt, wo kei aktivi Mitgliedschaft händ. |

### Branding Flags

| Flag | Standardwert | Beschriitig |
|---|---|---|
| **"Powered by Gratis AI Agent" Footer verbergen** | Aus | Entfernt d'Branding-Zueordnungslinie, wo am Bode vom Chat Widget zeigt wird. Empfehlenswert für White-Label-Implementierige. |
| **Benutzername des Agents anpassen** | *(leer)* | Ersetzt de Standard-Label "Gratis AI Agent" im Chat-Header und im Admin-Menü dur Ihren eigene Produktname. Leer lassen, um de Standard z'bruche. |
| **Agent-Auswahl verbergen** | Aus | Wenn aktiviert, chönne Benutzer nöd zwüsche de fünf integrierte Agents wächsle. De aktuelli Agent isch fix uf das gsetzt, was in Settings → General als Standard konfiguriert isch. |
| **Webseiten-Icon als Chat-Avatar bruche** | Aus | Ersetzt s'Standard-AI-Icon im Chat Widget Header dur s'WordPress-Webseiten-Icon (gsetzt unter Appearance → Customize → Site Identity). |

### Änderungen anwenden

Klicke uf **Einstellungen speichern**, nachdem du e Flag umgeschaltet häsch. D'Änderige sind sofort aktiv – es isch kei Cache-Leeren oder Plugin-Neustart nötig.
