---
title: Kundfeedback & Problem-Meldig
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Kundefeedback & Problemberichte {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 füecht en integrierten System zur Rückmeldig und Meldig vo Problem hinzu, wo Endbenutzer d'Antworte als nöd hilfreich markiere und Problem direkt us de Chat-Oberflächi melde chönd. Sues System beinhaltet Zuestimmigsverwaltung (consent management), en automatisches Meldekommando und AI-unterstützte Sortierig (triage) im Backend.

## Daumen runter-Button {#thumbs-down-button}

Jede Nachricht, wo de AI-Assistent schickt, zeigt en **Daumen runter** (👎) Button a. Wenn en Benutzer druf klickt, chan er d'Antwort als nöd hilfreich oder falsch markiere.

- De Button erscheint bi Hover nebed jede Assistentnachricht.
- Wenn mer druf klickt, öffnet sich s'**Feedback Consent Modal**.
- D'Rückmeldig wird mit em Gesprächsverlauf und de spezifische Nachricht verbunde.

## Feedback Consent Modal {#feedback-consent-modal}

Wenn en Benutzer uf de Daumen runter-Button klickt, erscheint es en Zuestimmigsmodal, bevor irgendwelchi Date gschickt wärde. S'Modal:

- Erklärt, weli Informatione gsammelt wärde (Auszug us em Gespräch, Browser-Kontext).
- Fragt de Benutzer, ob er zue de Teilig vo dene Date zuestimmt.
- Bietet en Freitextfeld für de Benutzer, um z'beschriebe, was schief gläge isch.
- Bietet en **Abbrechen**-Option, um ohni Absende z'schließe.

Kei Rückmeldig wird ufzeichnet, bis de Benutzer explizit bestätigt het.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Am End vo eme Gespräch chan de Assistent en **Auto-Prompt Feedback Banner** azeige — e nöd aufdringlichi Nachricht, wo fragt, ob d'Sitzig hilfreich gsi isch.

Diesen Banner erscheint automatisch basierend uf de Länge vom Gespräch und Heuristiken über s'Ergebnis. Er verlinkt zur gliiche Feedback-Ablauf wie de Daumen runter-Button. Benutzer chönd de Banner ohni Rückmeldig abschließe.

## /report-issue Slash Command {#report-issue-slash-command}

Benutzer chönd de Feedback-Ablauf direkt uslöse, indem sie `/report-issue` i d'Chat-Eingabe tippe. Dä Befehl:

- Öffnet sofort s'Feedback Consent Modal.
- Füllt s'Beschreibungsfeld automatisch mit Kontext zur aktuelle Unterhaltig.
- Erlaubt de Benutzer, no meh Details hinzuzfüege, bevor sie absenden.

De `/report-issue` Command isch in all Chat Modi (inline, floating widget, full-screen) verfügbar.

## AI-Assisted Triage {#ai-assisted-triage}

Abgsendti Feedback wird an e AI Triage Layer gschickt, wo:

- De Bericht kategorisiert (faktische Fehler, unhilftige Antwort, unangemesseni Inhalt usw.).
- Relevanti Unterhaltigsmetadate anhängt.
- D'Triage-Zusammenfassig an de konfigurierti **Feedback Endpoint** wiiterleit (siehe [Settings > Advanced](#settings-advanced)).

Das reduziert d'manuelli Prüefziit, indem es d'wichtigste Problem zerscht ufzeigt.

## Settings > Advanced {#settings-advanced}

Um de Feedback Backend z'aktivierä, konfiguriert die folgendi Felder unter **Gratis AI Agent → Settings → Advanced**:

| Feld | Beschriibig |
|---|---|
| **Feedback Endpoint URL** | D'URL, wo POST-Aafrog mit Feedback Payloads (JSON) empfängt. |
| **Feedback API Key** | De Bearer Token, wo im `Authorization` Header gschickt wird für d'Authentifizierig vo de Feedback-Absändige. |

Lass beidi Felder leer, um d'Feedback-Sammlig z'deaktivierä. D'individuelle Feedback-Buttons bliebe für d'Benutzer sichtbar, aber Absändige werdet nöd wiitergleit.

:::tip
De Feedback Endpoint muess en JSON Body akzeptiere mit mindestens de Felder `message_id`, `conversation_id`, `feedback_text` und `triage_category`. Lueg d'Dokumentation vomene Endpoint-Provider für s'erwarteti Schema.
:::
