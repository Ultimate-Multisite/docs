---
title: Povratne informacije strank in poročanje o težavah
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Povratne informacije strankov in poročanje o težavah

Gratis AI Agent v1.5.0 vključuje zgrajen sistem za povratne informacije in poročanje o težavah, ki omogoča uporabnikom končnega termina, da označijo nepomembna odgovora in direktno poročajo o problemih iz čata. Ta sistem vključuje upravljanje soglasja (consent management), avtomatizirano ukaz za poročanje in AI-pomočeno trižiranje na backendu.

## Gumb z "Ne" (Thumbs-Down Button) {#thumbs-down-button}

Vsak sporočilo, ki ga pošlje asistenta AI, prikazuje gumb **z "ne"** (👎). Ko uporabnik klikne na njega, lahko označuje odgovor kot nepomemben ali napačen.

- Gumb se pojavlja pri prevoju miške ob vsakem sporočilu asistenta.
- Klik na njega odpre **Modal za soglasje za povratne informacije (Feedback Consent Modal)**.
- Povratna informacija je povezana z zagonom pogovora in specifičnim sporočilom.

## Modal za soglasje za povratne informacije (Feedback Consent Modal) {#feedback-consent-modal}

Ko uporabnik klikne na gumb z "ne", se pred oddajanjem podatkov pojavi modal za soglasje. Modal:

- Pojska, kakšno informacijo bo zbralo (odseg pogovora, kontekst brskalnika).
- Vpraša uporabnika, da potrdi, da soglašate z deljenjem teh podatkov.
- Omogoča polje za besedilo, kjer lahko uporabnik opiše, kaj je šlo slabo.
- Ponuja opcijo **Prekliči (Cancel)**, da se odpre brez oddajanja.

Povratne informacije ne so zapisane, dokler uporabnik to jasno potrdi.

## Banner za povratne informacije z avtomatskim prikazu (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

Na koncu pogovora lahko asistenta prikazuje **banner za avtomatiziran prikaz povratnih informacij** — neinvazivno sporočilo, ki vpraša, ali je se seans bilo koristilo.

Ta banner se pojavlja samodejno na podlagi dolžine pogovora in heuristik o rezultatu. Povezuje se z enim obtočnim potekom povratnih informacij kot gumb z "ne". Uporabniki lahko odpre banner brez prinašanja povratnih informacij.

## Komanda /report-issue Slash Command {#report-issue-slash-command}

Uporabniki lahko direktno sprostiti potek povratnih informacij, vpisanjem `/report-issue` v polje za vnos čata. Ta komanda:

Otevra Modali za soglasje o povratnih informacij takoj.
Predobrava polje opisa z kontekstom trenutne pogovore.
Omogoča uporabnikom dodajanje dodatnih podrobnosti pred oddajo.

Komanda `/report-issue` je na voljo v vseh načini spletnega mesta (inline, plovni widget, zaslon).

## AI-Assisted Triage (Triage z uporabo umetne inteligence) {#ai-assisted-triage}

Predbrana povratna informacija se usmerja do sloja za triage z uporabo AI, ki:

- Kategorizira poročilo (factual error, nepomagajoč odgovor, neprimojni vsebine itd.).
- Prilaga relevantne podatke o pogovoru.
- Preusmeri povzetek triage na konfiguričeno **Feedback Endpoint** (pogledajte [Settings > Advanced](#settings-advanced)).

To zmanjšuje čas ručne preglede, saj najprej prikaže najpomembnejše težave.

## Settings > Advanced {#settings-advanced} (Nastavitve > Napredno) {#settings--advanced}

Za vključitev backenda za povratne informacije konfigurirajte naslednje polja pod **Gratis AI Agent → Settings → Advanced**:

| Polje | Opis |
|---|---|
| **Feedback Endpoint URL** | URL, ki sprejme POST zahtev z podatki o povratnih informacijah (JSON). |
| **Feedback API Key** | Bearer token poslan v zaglavju `Authorization` za avtorizacijo oddajanja povratnih informacij. |

Prazno pustite oba polja, da bi deaktivirali zbiranje povratnih informacij. Samostojni gumbi za povratne informacije ostajajo vidni za uporabnike, vendar ne bodo oddaja preusmerjeni.

:::tip
Feedback endpoint mora sprejemati JSON telo s vsaj polji `message_id`, `conversation_id`, `feedback_text` in `triage_category`. Pogledajte dokumentacijo vašega dostavitelja endpointa za pričakovano sliko (schema).
