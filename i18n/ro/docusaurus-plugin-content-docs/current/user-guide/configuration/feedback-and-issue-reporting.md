---
title: Feedback și Raportare a Problemelor
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback de la Clienți și Raportarea Incidentelor

Gratis AI Agent v1.5.0 introduce un sistem nativ de feedback și raportare a incidentelor care permite utilizatorilor finali să semnaleze răspunsuri inutile și să raporteze probleme direct din interfața de chat. Acest sistem include gestionarea consimțământului, o comandă automatizată de raportare și o triaj asistat de AI în backend.

## Butonul „Nu mi-a plăcut” (Thumbs-Down) {#thumbs-down-button}

Fiecare mesaj trimis de asistentul AI afișează un buton **„Nu mi-a plăcut”** (👎). Când un utilizator îl apasă, poate marca un răspuns ca fiind inutil sau incorect.

- Butonul apare la trecerea cursorului deasupra fiecărui mesaj al asistentului.
- Apăsarea sa deschide **Modalul de Consimțământ pentru Feedback**.
- Feedback-ul este asociat cu firul de conversație și cu mesajul specific.

## Modalul de Consimțământ pentru Feedback {#feedback-consent-modal}

Când un utilizator apasă butonul „Nu mi-a plăcut”, apare un modal de consimțământ înainte ca orice date să fie trimise. Acest modal:

- Explică ce informații vor fi colectate (fragment din conversație, contextul browserului).
- Solicită utilizatorului confirmarea că își dă consimțământul pentru partajarea acestor date.
- Oferă un câmp de text liber pentru ca utilizatorul să descrie ce s-a întâmplat.
- Oferă o opțiune de **Anulare** pentru a închide fără a trimite.

Niciun feedback nu este înregistrat până când utilizatorul nu confirmă explicit.

## Bannerul de Feedback Auto-Prompt {#auto-prompt-feedback-banner}

La sfârșitul unei conversații, asistentul poate afișa un **banner de feedback auto-prompt** — un mesaj discret care întreabă dacă sesiunea a fost utilă.

Acest banner apare automat, pe baza lungimii și a unor heuristici de rezultat ale conversației. Acesta este legat de același flux de feedback ca și butonul „Nu mi-a plăcut”. Utilizatorii pot închide bannerul fără a oferi feedback.

## Comanda Slash /report-issue {#report-issue-slash-command}

Utilizatorii pot declanșa fluxul de feedback direct tastând `/report-issue` în câmpul de intrare al chat-ului. Această comandă:

- Deschide imediat Modalul de Consimțământ pentru Feedback.
- Umple automat câmpul de descriere cu context despre conversația curentă.
- Permite utilizatorilor să adauge detalii suplimentare înainte de a trimite.

Comanda `/report-issue` este disponibilă în toate modurile de chat (inline, widget plutitor, ecran integral).

## Triaj Asistat de AI {#ai-assisted-triage}

Feedback-ul trimis este direcționat către un strat de triaj AI care:

- Categorizează raportul (eroare factuală, răspuns inutil, conținut nepotrivit etc.).
- Atașează metadate relevante ale conversației.
- Transmite rezumatul triajului către **Feedback Endpoint** configurat (vezi [Settings > Advanced](#settings-advanced)).

Acest lucru reduce timpul de revizuire manuală, evidențiind în primul rând cele mai critice probleme.

## Settings > Advanced {#settings-advanced}

Pentru a activa backend-ul de feedback, configurați următoarele câmpuri în secțiunea **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL-ul care primește cererile POST cu payload-uri de feedback (JSON). |
| **Feedback API Key** | Token Bearer trimis în antetul `Authorization` pentru autentificarea trimiterilor de feedback. |

Lăsați ambele câmpuri goale pentru a dezactiva colectarea feedback-ului. Butoanele individuale de feedback rămân vizibile pentru utilizatori, dar trimiterile nu vor fi transmise.

:::tip
Feedback endpoint-ul trebuie să accepte un corp JSON cu cel puțin câmpurile `message_id`, `conversation_id`, `feedback_text` și `triage_category`. Vă rugăm să consultați documentația furnizorului dvs. de endpoint pentru schema așteptată.
:::
