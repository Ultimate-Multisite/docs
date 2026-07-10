---
title: Kundenfeedback & Problemmeldung
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Kundenfeedback und Problemmeldung {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 führt ein integriertes System zur Abgabe von Feedback und zur Meldung von Problemen ein. Dieses System ermöglicht es Endbenutzern, unbrauchbare Antworten zu kennzeichnen und Probleme direkt über die Chat-Oberfläche zu melden. Das System umfasst die Verwaltung der Zustimmung (Consent Management), einen automatisierten Meldebefehl und eine KI-gestützte Vorprüfung (Triage) im Backend.

## Daumen-runter-Button {#thumbs-down-button}

Jede Nachricht, die vom KI-Assistenten gesendet wird, zeigt einen **Daumen-runter** (👎)-Button an. Wenn ein Benutzer darauf klickt, kann er eine Antwort als unbrauchbar oder falsch markieren.

- Der Button erscheint beim Überfahren der Maus über jede Antwort des Assistenten.
- Ein Klick öffnet das **Feedback Consent Modal**.
- Das Feedback wird mit dem gesamten Gesprächsverlauf und der spezifischen Nachricht verknüpft.

## Feedback Consent Modal {#feedback-consent-modal}

Wenn ein Benutzer auf den Daumen-runter-Button klickt, erscheint ein Zustimmungs-Modal, bevor Daten gesendet werden. Das Modal:

- Erklärt, welche Informationen gesammelt werden (Auszug aus dem Gespräch, Browser-Kontext).
- Bittet den Benutzer um Bestätigung, dass er mit der Weitergabe dieser Daten einverstanden ist.
- Bietet ein Freitextfeld, in dem der Benutzer beschreiben kann, was schiefgelaufen ist.
- Bietet eine **Abbrechen**-Option, um ohne Übermittlung das Modal zu schließen.

Es wird kein Feedback gespeichert, bevor der Benutzer explizit zugestimmt hat.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Am Ende eines Gesprächs kann der Assistent ein **auto-prompt Feedback Banner** anzeigen – eine unaufdringliche Nachricht, die fragt, ob die Sitzung hilfreich war.

Dieses Banner erscheint automatisch, basierend auf Heuristiken wie der Gesprächslänge und dem Ergebnis. Es verlinkt auf denselben Feedback-Prozess wie der Daumen-runter-Button. Benutzer können das Banner schließen, ohne Feedback zu geben.

## /report-issue Slash Command {#report-issue-slash-command}

Benutzer können den Feedback-Prozess direkt auslösen, indem sie `/report-issue` in das Chat-Eingabefeld tippen. Dieser Befehl:

- Öffnet sofort das Feedback Consent Modal.
- Füllt das Beschreibungsfeld vorab mit Kontext über das aktuelle Gespräch.
- Ermöglicht es den Benutzern, vor dem Absenden zusätzliche Details hinzuzufügen.

Der `/report-issue`-Befehl ist in allen Chat-Modi verfügbar (Inline, Floating Widget, Vollbild).

## KI-gestützte Vorprüfung (AI-Assisted Triage) {#ai-assisted-triage}

Das übermittelte Feedback wird an eine KI-Vorprüfungs-Schicht weitergeleitet, die:

- Den Bericht kategorisiert (faktischer Fehler, unbrauchbare Antwort, unangemessener Inhalt usw.).
- Relevante Metadaten des Gesprächs hinzufügt.
- Die Zusammenfassung der Vorprüfung an den konfigurierten **Feedback Endpoint** weiterleitet (siehe [Settings > Advanced](#settings-advanced)).

Dadurch wird die manuelle Überprüfungszeit reduziert, da die kritischsten Probleme zuerst aufgedeckt werden.

## Settings > Advanced {#settings-advanced}

Um das Feedback-Backend zu aktivieren, konfigurieren Sie die folgenden Felder unter **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Die URL, die POST-Anfragen mit Feedback-Payloads (JSON) empfängt. |
| **Feedback API Key** | Bearer-Token, das im `Authorization`-Header gesendet wird, um die Übermittlung von Feedback zu authentifizieren. |

Lassen Sie beide Felder leer, um die Feedback-Sammlung zu deaktivieren. Die einzelnen Feedback-Buttons bleiben für Benutzer sichtbar, aber die Übermittlungen werden nicht weitergeleitet.

:::tip
Der Feedback-Endpoint muss einen JSON-Body akzeptieren, der mindestens die Felder `message_id`, `conversation_id`, `feedback_text` und `triage_category` enthält. Konsultieren Sie die Dokumentation Ihres Endpoint-Anbieters für das erwartete Schema.
:::
