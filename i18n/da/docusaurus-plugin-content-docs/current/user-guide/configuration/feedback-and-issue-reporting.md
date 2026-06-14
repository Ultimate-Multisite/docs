---
title: Kunde Feedback og Fejlrapportering
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Kundefeedback og fejlrapportering

Gratis AI Agent v1.5.0 introducerer et indbygget system til feedback og fejlrapportering, som lader slutbrugere markere unhelpful respons og rapportere problemer direkte fra chatgrænsefladen. Dette system inkluderer samtykkehåndtering, en automatiseret rapporteringskommando og AI-assisteret triage i baggrunden.

## Tommelfinger ned-knap (Thumbs-Down Button)

Hver besked sendt af AI-assistenten viser en **tommelfinger ned** (👎) knap. Når brugeren klikker på den, kan de markere et svar som unhelpful eller forkert.

- Knappen vises ved hover ved hver assistentbesked.
- Ved at klikke åbnes **Feedback Consent Modal**.
- Feedbacken knyttes til samtaletråden og den specifikke besked.

## Feedback Samtykke Modal (Feedback Consent Modal)

Når en bruger klikker på tommelfinger ned-knappen, vises en samtykke-modal før nogen data sendes. Modalen:

- Forklarer, hvilken information der vil blive indsamlet (udsnit af samtalen, browserkontekst).
- Bed brugeren bekræfte, at de giver samtykke til at dele disse data.
- Tilbyder et frit tekstfelt, hvor brugeren kan beskrive, hvad der gik galt.
- Tilbyder en **Annuller** mulighed for at lukke uden at indsende.

Ingen feedback registreres, før brugeren eksplicit bekræfter det.

## Automatisk Feedback Banner (Auto-Prompt Feedback Banner)

I slutningen af en samtale kan assistenten vise et **automatisk feedback banner** — en ikke-påtrængende besked, der spørger, om sessionen var nyttig.

Dette banner vises automatisk baseret på samtalens længde og udfaldsheuristikker. Det linker til den samme feedbackproces som tommelfinger ned-knappen. Brugere kan lukke banneret uden at give feedback.

## /report-issue Slash Command

Brugere kan starte feedbackprocessen direkte ved at skrive `/report-issue` i chatinputtet. Denne kommando:

Åbner Feedback Consent Modal med det samme.
Forudfylder beskrivelsesfeltet med kontekst om den aktuelle samtale.
Giver brugerne mulighed for at tilføje yderligere detaljer, før de sender.

Kommandolinjen `/report-issue` er tilgængelig i alle chatmodi (inline, flydende widget, fuldskærm).

## AI-Assisteret Triage

Indsendt feedback bliver sendt videre til et AI triage lag, som:

- Kategoriserer rapporten (faktuel fejl, hjælpeløs besvarelse, upassende indhold osv.).
- Tilføjer relevant samtaledata.
- Sender opsummeringen af triagen videre til den konfigurerede **Feedback Endpoint** (se [Indstillinger > Avanceret](#settings-advanced)).

Dette reducerer manuel gennemgangstid ved at fremhæve de mest kritiske problemer først.

## Indstillinger > Avanceret {#settings-advanced}

For at aktivere feedback backend skal du konfigurere følgende felter under **Gratis AI Agent → Indstillinger → Avanceret**:

| Felt | Beskrivelse |
|---|---|
| **Feedback Endpoint URL** | URL'en, der modtager POST-anmodninger med feedback payloads (JSON). |
| **Feedback API Key** | Bearer token sendt i `Authorization` header til autentificering af feedback-indsendelser. |

Lad begge felter tomme for at deaktivere indsamling af feedback. Individuelle feedbackknapper forbliver synlige for brugerne, men indsendelser vil ikke blive videregivet.

:::tip
Feedback endpoint skal acceptere en JSON-krop med mindst `message_id`, `conversation_id`, `feedback_text` og `triage_category` felter. Se din endpoints leverandørs dokumentation for det forventede skema.
:::
