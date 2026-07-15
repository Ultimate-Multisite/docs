---
title: Kunde tilbakemeldinger og feilrapportering
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Kunde-tilbakemeldinger og feilrapportering

Gratis AI Agent v1.5.0 introduserer et innebygd system for tilbakemeldinger og feilrapportering som lar sluttbrukere flagge lite nyttige svar og rapportere problemer direkte fra chat-grensesnittet. Dette systemet inkluderer samtykkeforvaltning, en automatisert rapporteringskommando og AI-assistert triage i bakgrunnen.

## Tommel ned-knappen {#thumbs-down-button}

Hver melding sendt av AI-assistenten viser en **tommel ned** (👎)-knapp. Når en bruker klikker på den, kan de merke et svar som lite nyttig eller feil.

- Knappen vises ved hover ved siden av hver assistentmelding.
- Å klikke på den åpner **Samtykke-modal for tilbakemelding**.
- Tilbakemeldingen knyttes til samtaletråden og den spesifikke meldingen.

## Samtykke-modal for tilbakemelding {#feedback-consent-modal}

Når en bruker klikker på tommel ned-knappen, vises en samtykke-modal før data sendes. Modalvinduet:

- Forklarer hvilken informasjon som vil bli samlet inn (utdrag fra samtalen, nettleserkontekst).
- Ber brukeren bekrefte at de samtykker til å dele disse dataene.
- Tilbyr et fritekstfelt der brukeren kan beskrive hva som gikk galt.
- Tilbyr et **Avbryt**-alternativ for å lukke uten å sende inn.

Ingen tilbakemelding blir registrert før brukeren eksplisitt bekrefter.

## Automatisk tilbakemeldingsbanner {#auto-prompt-feedback-banner}

Ved slutten av en samtale kan assistenten vise et **automatisk tilbakemeldingsbanner** – en ikke-påtrengende melding som spør om økten var nyttig.

Dette banneret vises automatisk basert på samtalelengde og utfallshypoteser. Det lenker til samme tilbakemeldingsflyt som tommel ned-knappen. Brukere kan lukke banneret uten å gi tilbakemelding.

## /report-issue Slash-kommando {#report-issue-slash-command}

Brukere kan utløse tilbakemeldingsflyten direkte ved å skrive `/report-issue` i chat-inndatafeltet. Denne kommandoen:

- Åpner Samtykke-modal for tilbakemelding umiddelbart.
- Fyller forhåndsutfylt beskrivelsesfeltet med kontekst om den nåværende samtalen.
- Lar brukerne legge til ytterligere detaljer før innsending.

`/report-issue`-kommandoen er tilgjengelig i alle chat-moduser (inline, flytende widget, fullskjerm).

## AI-assistert triage {#ai-assisted-triage}

Sendte tilbakemeldinger sendes til et AI-triage-lag som:

- Kategoriserer rapporten (faktisk feil, lite nyttig svar, upassende innhold, osv.).
- Legger ved relevant samtalemetadata.
- Videresender triage-sammendraget til det konfigurerte **Feedback Endpoint** (se [Settings > Advanced](#settings-advanced)).

Dette reduserer manuell gjennomgangstid ved å fremheve de mest kritiske problemene først.

## Settings > Advanced {#settings-advanced}

For å aktivere tilbakemeldings-backend, konfigurer følgende felt under **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL-en som mottar POST-forespørsler med tilbakemeldingspayloads (JSON). |
| **Feedback API Key** | Bearer-token sendt i `Authorization`-headeren for å autentisere tilbakemeldingsoppsendelser. |

La begge feltene stå blankt for å deaktivere innsamling av tilbakemeldinger. Individuelle tilbakemeldingsknapper forblir synlige for brukere, men innsendinger vil ikke bli videresendt.

:::tip
Feedback endpointet må akseptere en JSON-kropp med minst `message_id`, `conversation_id`, `feedback_text` og `triage_category` felt. Se dokumentasjonen til din endpoint-leverandør for forventet skjema.
:::
