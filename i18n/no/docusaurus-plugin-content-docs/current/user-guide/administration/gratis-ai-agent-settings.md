---
title: Gratis AI Agent Innstillinger
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Innstillinger

Skjermen **Innstillinger → Avansert** i Gratis AI Agent gir administratornivå konfigurasjon for backend-integrasjoner som ble introdusert i v1.5.0. Denne siden dokumenterer feltene for **Feedback Endpoint** og deres forventede format.

## Tilgang til Innstillinger

1. I WordPress-admin, gå til **Gratis AI Agent → Innstillinger**.
2. Klikk på fanen **Avansert**.

## Konfigurasjon av Feedback Endpoint

Feedback endpoint mottar POST-forespørsler fra AI-agenten hver gang en bruker sender inn tilbakemelding via tommel ned-knappen, auto-prompt banneret, eller `/report-issue` kommandoen.

| Felt | Beskrivelse |
|---|---|
| **Feedback Endpoint URL** | URL-en som mottar tilbakemeldinger som HTTP POST-forespørsler med en JSON-kropp. |
| **Feedback API Key** | Et bearer token sendt i `Authorization`-headeren for hver tilbakemeldingsforespørsel. La feltet stå tomt hvis endpoint-et ditt ikke krever autentisering. |

### Forventet JSON-payload

Feedback endpoint-et ditt må akseptere en JSON-kropp med minst følgende felt:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Svaret var feil angående prising.",
  "triage_category": "factual_error"
}
```

Ytterligere felt kan være til stede i payloaden avhengig av samtalekonteksten.

### `triage_category` Verdier

AI triage-laget tildeler en av følgende verdier til `triage_category` før det videresender payloaden:

| Verdi | Betydning |
|---|---|
| `factual_error` | Assistenten ga feil faktiske opplysninger. |
| `unhelpful_answer` | Svaret var teknisk korrekt, men lite nyttig. |
| `inappropriate_content` | Svaret inneholdt innhold som ikke skal vises til brukere. |
| `other` | Tilbakemeldingen samsvarte ikke med en kjent kategori. |

### Autentisering

Hvis endpoint-et ditt krever autentisering, sett **Feedback API Key**-feltet til ditt bearer token. Agenten sender:

```
Authorization: Bearer <your-api-key>
```

Hvis **Feedback API Key**-feltet er tomt, sendes ingen `Authorization`-header.

### Deaktivering av Tilbakemeldingssamling

La både **Feedback Endpoint URL** og **Feedback API Key**-feltene stå tomme. Tommel ned-knappen og feedback-grensesnittet forblir synlig for brukere, men innsendinger videresendes ikke til noen ekstern tjeneste.

## Brave Search API Key

Også på fanen **Avansert** muliggjør **Brave Search API Key**-feltet [Internet Search](../configuration/internet-search) funksjonaliteten.

| Felt | Beskrivelse |
|---|---|
| **Brave Search API Key** | Din API-nøkkel fra Brave Search developer dashboard. Nødvendig for å aktivere internettsøk i AI-assistenten. |

Feltetiketten inkluderer en klikkbar lenke til Brave Search API-registreringssiden. La feltet stå tomt for å deaktivere internettsøk.

Se [Internet Search](../configuration/internet-search) for sluttbrukerdokumentasjon om denne funksjonen.

## Feature Flags

Også introdusert i v1.9.0, gir fanen **Innstillinger → Feature Flags** brytere for valgfri funksjonalitet. Hver flagg er enten aktivert eller deaktivert på tvers av nettverket; det er ingen overstyring per nettsted for øyeblikket.

### Tilgangskontroll Flags

| Flag | Standard | Beskrivelse |
|---|---|---|
| **Restrict to Administrators** | Av | Når det er aktivert, kan kun brukere med rollen `administrator` åpne AI Agent chat-panelet. Alle andre roller ser i stedet meldingen "Kontakt din administrator". |
| **Restrict to Network Admins** | Av | Når det er aktivert på et multisite-nettverk, kan kun Super Admins bruke agenten. Individuelle nettstedadministratorer blir blokkert. Har forrang over "Restrict to Administrators" hvis begge er aktivert. |
| **Allow Subscriber Access** | Av | Når det er aktivert, kan brukere med rollen `subscriber` bruke chat-grensesnittet, men er begrenset til kun lesefunksjonalitet (ingen innleggs- eller innstillingsendringer). |
| **Disable for Non-Members** | Av | Integrerer med Ultimate Multisite medlemsstatus. Når det er aktivert, er chatten skjult for nettsteder som ikke har et aktivt medlemskap. |

### Branding Flags

| Flag | Standard | Beskrivelse |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Av | Fjerner merkevareattribusjonslinjen som vises nederst i chat-widgeten. Anbefalt for white-label utrullinger. |
| **Custom Agent Name** | *(blank)* | Erstatter standardetiketten "Gratis AI Agent" i chat-headeren og admin-menyen med ditt eget produktnavn. La feltet stå tomt for å bruke standardnavnet. |
| **Hide Agent Picker** | Av | Når det er aktivert, kan brukere ikke bytte mellom de fem innebygde agentene. Den nåværende agenten er låst til det som er konfigurert som standard i Innstillinger → Generelt. |
| **Use Site Icon as Chat Avatar** | Av | Erstatter standard AI-ikonet i chat-widget-headeren med WordPress-nettstedikonet (satt under Utseende → Tilpass → Nettstedidentitet). |

### Anvende Endringer

Klikk **Save Settings** etter å ha slått av/på et flagg. Endringene trer i kraft umiddelbart – ingen cache-flush eller plugin-reaktivering er nødvendig.
