---
title: Gratis AI Agent Indstillinger
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Indstillinger

Skærmen **Indstillinger → Avanceret** i Gratis AI Agent giver administratorindstillinger for backend-integrationer introduceret i v1.5.0. Denne side dokumenterer felterne for **Feedback Endpoint** og deres forventede format.

## Adgang til Indstillinger

1. I WordPress admin gå til **Gratis AI Agent → Indstillinger**.
2. Klik på fanen **Avanceret**.

## Konfiguration af Feedback Endpoint

Feedback endpoint modtager POST-anmodninger fra AI agenten, når en bruger sender feedback via "tommelfinger ned"-knappen, auto-prompt banneret eller kommandoen `/report-issue`.

| Felt | Beskrivelse |
|---|---|
| **Feedback Endpoint URL** | URL'en, der modtager feedback-indsendelser som HTTP POST anmodninger med en JSON-krop. |
| **Feedback API Key** | En bearer token sendt i `Authorization` headeret for hver feedbackanmodning. Lad den stå tom, hvis dit endpoint ikke kræver autentifikation. |

### Forventet JSON Payload

Dit feedback endpoint skal acceptere en JSON krop med mindst følgende felter:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Svaret var forkert vedrørende priser.",
  "triage_category": "factual_error"
}
```

Yderligere felter kan være til stede i payloadet afhængigt af samtalens kontekst.

### `triage_category` Værdier

AI triage-laget tildeler én af følgende værdier til `triage_category` før payloadet sendes videre:

| Værdi | Betydning |
|---|---|
| `factual_error` | Assistenten har givet forkert faktuel information. |
| `unhelpful_answer` | Svaret var teknisk korrekt, men ikke nyttigt. |
| `inappropriate_content` | Svaret indeholdt indhold, der ikke bør vises til brugere. |
| `other` | Feedbacken matchede ingen kendt kategori. |

### Autentifikation

Hvis dit endpoint kræver autentifikation, skal du sætte feltet **Feedback API Key** til din bearer token. Agenten sender:

```
Authorization: Bearer <din-api-nøgle>
```

Hvis feltet **Feedback API Key** er tomt, sendes ingen `Authorization` header.

### Deaktivering af Feedbackindsamling

Lad både felterne **Feedback Endpoint URL** og **Feedback API Key** tomme. Tommelfinger-ned-knappen og feedback-grænsefladen forbliver synlige for brugerne, men indsendelser sendes ikke videre til nogen ekstern service.

## Brave Search API Key

Også på fanen **Advanced** aktiverer feltet **Brave Search API Key** muligheden for [Internet Search](../configuration/internet-search).

| Felt | Beskrivelse |
|---|---|
| **Brave Search API Key** | Din API-nøgle fra Brave Search developer dashboard. Nødvendig for at aktivere internet søgning i AI-assistenten. |

Feltets label indeholder et klikbart link til Brave Search sign-up side. Lad det være tomt for at deaktivere internet søgning.

Se [Internet Search](../configuration/internet-search) for brugerdokumentation om denne funktion.

## Feature Flags

Også introduceret i v1.9.0 giver fanen **Settings → Feature Flags** afbrydere til valgfri funktionalitet. Hver flag er enten aktiveret eller deaktiveret på tværs af netværket; der er ikke mulighed for overstyring pr. site lige nu.

### Adgang til Feature Flags

1. I WordPress admin, gå til **Gratis AI Agent → Settings**.
2. Klik på fanen **Feature Flags**.

### Access Control Flags

| Flag | Standardværdi | Beskrivelse |
|---|---|---|
| **Begræns til administratorer** | Slå fra (Off) | Når denne er aktiveret, kan kun brugere med rollen `administrator` åbne AI Agent chatpanelet. Alle andre roller ser i stedet beskeden "Kontakt din administrator". |
| **Begræns til netværksadministratorer** | Slå fra (Off) | Når denne er slået til på et multisite-netværk, kan kun Super Administratorer bruge agenten. Individuelle sites administratorer blokeres. Denne indstilling har forrang for "Begræns til administratorer", hvis begge er aktiveret. |
| **Tillad abonnentadgang** | Slå fra (Off) | Når denne er aktiveret, kan brugere med rollen `subscriber` bruge chatgrænsefladen, men de er begrænset til kun læsefunktioner (ingen opslagsskabelse eller ændringer i indstillinger). |
| **Deaktiver for ikke-medlemmer** | Slå fra (Off) | Integreres med Ultimate Multisite medlemsstatus. Når denne er aktiveret, skjules chatten for sites, der ikke har et aktivt medlemskab. |

### Branding Flags

| Flag | Standardværdi | Beskrivelse |
|---|---|---|
| **Skjul "Powered by Gratis AI Agent" fodnote** | Slå fra (Off) | Fjerner den branding-angivelse, der vises nederst i chatwidget'en. Anbefales til white-label implementeringer. |
| **Tilpass agentnavn** | *(tom)* | Erstatter standardmærket "Gratis AI Agent" i chatheaderen og adminmenuen med dit eget produktnavn. Lad den stå tom for at bruge standardnavnet. |
| **Skjul agentvælger** | Slå fra (Off) | Når denne er aktiveret, kan brugere ikke skifte mellem de fem indbyggede agenter. Den aktuelle agent forbliver fastsat til det, der er konfigureret som standard i Indstillinger → Generelt. |
| **Brug sites ikon som chatavatar** | Slå fra (Off) | Erstatter det standard AI-ikon i chatwidgetens header med WordPress sites ikone (indstilles under Udseende → Tilpas → Sites identitet). |

### Anvendelse af ændringer

Klik på **Gem indstillinger** efter at have slået en flag om. Ændring træder i kraft øjeblikkeligt – der er ingen behov for cache-udrensning eller genaktivering af plugin'er.
