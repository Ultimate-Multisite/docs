---
title: Informoj de klientaj recenzoj kaj problemo-raportado
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Kundenfeedback & Problemberichte {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 introduziert en integri sistem für Feedback und Problemberichte, wo Endbenutzer unhilfsvolli antworten markiere und Problem direkt us de Chat-Schnittstell melde chön. Sies system beinhaltet Zuestimmigswirt, en automatisierti Meld-Befehl und AI-unterstützte Sortierig im Backend.

## Daumen runter-Knopf (Thumbs-Down Button) {#thumbs-down-button}

Jede Nachricht, wo de AI-assistent schickt, zeigt en **Daumen runter** (👎) Knopf a. Wenn en Benutzer druf klickt, chan er e Antwort als unhilfsvoll oder falsch markiere.

- De Knopf erscheint bi Hover nebed jede assistenten Nachricht.
- Wenn mer druf klickt, öffnet sich s'**Feedback Zuestimmig Modal**.
- S'Feedback wird mit em Konversationsstrang und de spezifische Nachricht verbunde.

## Feedback Zuestimmig Modal (Feedback Consent Modal) {#feedback-consent-modal}

Wenn en Benutzer uf de Daumen runter-Knopf klickt, erscheint vor dem Versende vo Date en Zuestimmigsmodal. De Modal:

- Erklärt, weli Informatione gsammelt werdet (Auszug us em Konversationsstrang, Browser-Kontext).
- Fragt de Benutzer, ob er zuestimmt, di Date z'teile.
- Bietet en freie Textfeld für de Benutzer, um z'beschriebe, was schief gloffe isch.
- Bietet en **Abbräch** (Cancel) Option, um ohni Versände abzschlüsse.

Kei Feedback wird ufzeichnet, bis de Benutzer es explizit bestätigt.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Am End vo eme Konversationsstrang chan de Assistent en **Auto-Prompt Feedback Banner** azeige — e nöd-aufdringlichi Nachricht, wo fragt, ob d'Sitzig hilfreich gsi isch.

De Banner erscheint automatisch basierend uf de Länge vom Konversationsstrang und Heuristike über s'Ergebnis. Er verlinkt zum gliiche Feedback-Fluss wie de Daumen runter-Knopf. Benutzer chön de Banner ohni Feedback abschlüsse.

## /report-issue Slash Command {#report-issue-slash-command}

Benutzer chön de Feedback-Fluss direkt uslöse, indem sie `/report-issue` im Chat-Eingabefeld tippe. Dä Befehl:

- Ĝis la Modal de Konsento de Rekonstruo (Feedback Consent) bezonigas tuj.
- Pre-prapopule la deskriban field per konteksto pri la konversacio aktuala.
- Permetas al uzantoj pli da detaili aji ankora pri submeti.

La komando `/report-issue` estas disponabla en ĉiuj chato modoj (inline, flotiĝanta widgeto, plena ekrano).

## AI-Asistita Triĝo {#ai-assisted-triage}

Submitita rekonstruo estas rutita al capa de triĝo per AI, kiu:

- Kategorias la raporton (fakta eraro, neajda respondo, neadequa contentaĵo, etc.).
- Atachas relevantan metadadon pri la konversacio.
- Transmite la triĝi resumon al la konfigurita **Feedback Endpoint** (vidu [Settings > Advanced](#settings-advanced)).

Tio reduktas la manĝustajn revizioj tempon per surfar la plej kritikan problemo unue.

## Settings > Advanced {#settings-advanced}

Por aktivi la feedback backendon, konfiguru la seguenti kampojn sub **Gratis AI Agent → Settings → Advanced**:

| Kampo | Deskribeco |
|---|---|
| **Feedback Endpoint URL** | La URL, kiu ricevas POST petojn kun feedback payloadoj (JSON). |
| **Feedback API Key** | Bearer token, sendita en la `Authorization` header por autentiki submitajn rekonstruojn. |

Lasu amba kampojn blankaj por desaktivigi la kolektadon de rekonstruoj. Individua butonoj de rekonstruo restas vidaj por uzantoj, sed submitoj ne transmigrios.

:::tip
La feedback endpoint devas akcepti JSON korpon kun almenaŭ `message_id`, `conversation_id`, `feedback_text` kaj `triage_category` kampojn. Vidu la esperitan skemion en la dokumentado de via endpoint provizanto.
