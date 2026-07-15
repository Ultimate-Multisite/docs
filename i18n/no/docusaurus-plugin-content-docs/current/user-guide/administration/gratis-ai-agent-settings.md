---
title: Gratis AI Agent-innstillinger
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Innstillinger for Gratis AI Agent

Skjermbildet **Innstillinger → Avansert** i Gratis AI Agent gir konfigurasjon på administratornivå for backend-integrasjoner. Denne siden dokumenterer videresending av tilbakemeldinger, nøkler for søkeleverandører, oppsett av administrert Superdav-tjeneste, Google Calendar-kontroller, TextBee SMS-innstillinger og funksjonsflagg for hele nettverket.

## Få tilgang til innstillinger {#accessing-settings}

1. I WordPress-admin går du til **Gratis AI Agent → Innstillinger**.
2. Klikk på fanen **Avansert**.

## Konfigurasjon av tilbakemeldings-endepunkt {#feedback-endpoint-configuration}

Tilbakemeldings-endepunktet mottar POST-forespørsler fra AI-agenten hver gang en bruker sender inn tilbakemelding via tommel ned-knappen, auto-ledetekstbanneret eller kommandoen `/report-issue`.

| Felt | Beskrivelse |
|---|---|
| **URL for tilbakemeldings-endepunkt** | URL-en som mottar tilbakemeldingsinnsendinger som HTTP POST-forespørsler med en JSON-body. |
| **Feedback API Key** | Et bearer token sendt i `Authorization` header for hver tilbakemeldingsforespørsel. La stå tomt hvis endepunktet ditt ikke krever autentisering. |

### Forventet JSON-nyttelast {#expected-json-payload}

Tilbakemeldings-endepunktet ditt må godta en JSON-body med minst følgende felt:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Flere felt kan være til stede i nyttelasten avhengig av samtalekonteksten.

### `triage_category`-verdier {#triagecategory-values}

AI-triagelaget tildeler en av følgende verdier til `triage_category` før nyttelasten videresendes:

| Verdi | Betydning |
|---|---|
| `factual_error` | Assistenten ga feil faktainformasjon. |
| `unhelpful_answer` | Svaret var teknisk korrekt, men ikke nyttig. |
| `inappropriate_content` | Svaret inneholdt innhold som ikke bør vises til brukere. |
| `other` | Tilbakemeldingen samsvarte ikke med en kjent kategori. |

### Autentisering {#authentication}

Hvis endepunktet ditt krever autentisering, setter du feltet **Feedback API Key** til ditt bearer token. Agenten sender:

```
Authorization: Bearer <your-api-key>
```

Hvis feltet **Feedback API Key** er tomt, sendes ingen `Authorization` header.

### Deaktivere innsamling av tilbakemeldinger {#disabling-feedback-collection}

La både feltene **URL for tilbakemeldings-endepunkt** og **Feedback API Key** stå tomme. Tommel ned-knappen og tilbakemeldingsgrensesnittet forblir synlige for brukere, men innsendinger videresendes ikke til noen ekstern tjeneste.

## Brave Search API Key {#brave-search-api-key}

Også på fanen **Avansert** aktiverer feltet **Brave Search API Key** funksjonen [Internett-søk](../configuration/internet-search).

| Felt | Beskrivelse |
|---|---|
| **Brave Search API Key** | Din API-nøkkel fra Brave Search-utviklerdashboardet. Kreves for å aktivere internettsøk i AI-assistenten. |

Feltetiketten inneholder en klikkbar lenke til registreringssiden for Brave Search API. La stå tomt for å deaktivere internettsøk.

Se [Internett-søk](../configuration/internet-search) for sluttbrukerdokumentasjon om denne funksjonen.

## Administrert Superdav-tjeneste {#managed-superdav-service}

Superdav AI Agent v1.18.0 legger til administrerte Superdav-tjenesteendepunkter og automatisk klargjøring av tilkobling for støttede nettsteder. Bruk disse kontrollene når nettstedet ditt skal koble til den driftede leverandøren i stedet for et manuelt konfigurert tjenesteendepunkt.

| Felt | Beskrivelse |
|---|---|
| **Administrert Superdav-tjeneste** | Aktiverer den driftede Superdav-tjenestetilkoblingen for støttede nettsteder. |
| **Klargjør tilkobling** | Starter automatisk klargjøring av endepunkt og legitimasjon. Bruk dette etter å ha bekreftet at nettstedet skal bruke den administrerte leverandøren. |
| **Tjenesteendepunkt / tilkoblingsstatus** | Viser gjeldende endepunkt eller tilkoblingstilstand etter klargjøring. |

Etter klargjøring lagrer du innstillingene og verifiserer tilkoblingsstatusen før du baserer deg på arbeidsflyter for administrert tjeneste. Hvis klargjøringen mislykkes, se gjennom den viste veiledningen for å prøve på nytt og bekreft at nettstedet har tillatelse til å bruke den driftede leverandøren.

## Google Calendar-konfigurasjon {#google-calendar-configuration}

Når kalenderfunksjonene i Superdav AI Agent v1.18.0 er aktivert, kan agenten lese konfigurerte kalendere og hendelsesdetaljer. Kalenderverktøy er leseorienterte og er nyttige for tidsplanbevisste påminnelser, oppfølging av deltakere og kontaktmatching.

| Felt | Beskrivelse |
|---|---|
| **Google Calendar-legitimasjon** | Lagrer legitimasjonen eller token-tilkoblingen som kreves for å lese kalenderdata. |
| **Kalendervalg** | Begrenser hvilke konfigurerte kalendere agenten kan inspisere. |
| **Kalendertilkoblingsstatus** | Bekrefter om gjeldende legitimasjon kan lese kalendere og hendelser. |

Hold kalenderlegitimasjon begrenset til kalenderne agenten trenger. Koble til på nytt eller roter legitimasjon hvis statusen indikerer et utløpt token.

## TextBee SMS-varsler {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 legger til TextBee som en SMS-leverandør for konfigurerte varslingsarbeidsflyter. SMS-varsler bør kombineres med godkjenningsporter fra mennesker for sensitive eller brukerrettede meldinger.

| Felt | Beskrivelse |
|---|---|
| **TextBee API-nøkkel** | Autentiserer forespørsler til TextBee SMS-leverandøren. |
| **TextBee-enhet / avsender** | Velger TextBee-avsenderen eller -enheten som brukes for utgående meldinger, når leverandøren krever det. |
| **SMS-varsler aktivert** | Lar godkjente arbeidsflyter sende tekstmeldingsvarsler. La være deaktivert for å forhindre SMS-sendinger. |

Send en testmelding kun til et nummer eid av en administrator, og bekreft deretter oppførselen til godkjenningsporten før du aktiverer planlagte eller deltakerrettede påminnelser.

## Funksjonsflagg {#feature-flags}

Også introdusert i v1.9.0 gir fanen **Innstillinger → Funksjonsflagg** brytere for valgfri funksjonalitet. Hvert flagg er enten aktivert eller deaktivert for hele nettverket; det finnes ingen overstyring per nettsted på dette tidspunktet.

### Få tilgang til funksjonsflagg {#accessing-feature-flags}

1. I WordPress-admin går du til **Gratis AI Agent → Innstillinger**.
2. Klikk på fanen **Funksjonsflagg**.

### Tilgangskontrollflagg {#access-control-flags}

| Flagg | Standard | Beskrivelse |
|---|---|---|
| **Begrens til administratorer** | Av | Når aktivert, kan bare brukere med rollen `administrator` åpne AI Agent-chatpanelet. Alle andre roller ser i stedet en melding om å «Kontakt administratoren din». |
| **Begrens til Network Admins** | Av | Når aktivert på et multisite-nettverk, kan bare Super Admins bruke agenten. Administratorer for individuelle nettsteder blokkeres. Har forrang over «Begrens til administratorer» hvis begge er aktivert. |
| **Tillat Subscriber-tilgang** | Av | Når aktivert, kan brukere med rollen `subscriber` bruke chatgrensesnittet, men er begrenset til skrivebeskyttede muligheter (ingen oppretting av innlegg eller endringer i innstillinger). |
| **Deaktiver for ikke-medlemmer** | Av | Integreres med Ultimate Multisite-medlemskapsstatus. Når aktivert, skjules chatten for nettsteder som ikke har et aktivt medlemskap. |

### Merkevareflagg {#branding-flags}

| Flagg | Standard | Beskrivelse |
|---|---|---|
| **Skjul "Powered by Gratis AI Agent"-bunntekst** | Av | Fjerner merkevareattribusjonslinjen som vises nederst i chat-widgeten. Anbefales for white-label-distribusjoner. |
| **Egendefinert agentnavn** | *(tomt)* | Erstatter standardetiketten "Gratis AI Agent" i chatoverskriften og administratormenyen med ditt eget produktnavn. La stå tomt for å bruke standarden. |
| **Skjul agentvelger** | Av | Når aktivert, kan ikke brukere bytte mellom de fem innebygde agentene. Gjeldende agent er låst til det som er konfigurert som standard i Innstillinger → Generelt. |
| **Bruk nettstedsikon som chat-avatar** | Av | Erstatter standard AI-ikon i chat-widgetens topptekst med WordPress-nettstedsikonet (angitt under Utseende → Tilpass → Nettstedsidentitet). |

### Sikkerhetsflagg for automatisering {#automation-safety-flags}

Superdav AI Agent v1.18.0 introduserer godkjenningsporter for mennesker og påminnelsesoppføringer for tryggere automatiseringskjøringer. Disse kontrollene kan vises i funksjonsflaggene eller avanserte automatiseringsinnstillinger, avhengig av den installerte pakken.

| Flagg | Standard | Beskrivelse |
|---|---|---|
| **Krev menneskelig godkjenning** | Anbefalt på | Setter sensitive automatiseringer på pause til en autorisert bruker gjennomgår og bekrefter den foreslåtte handlingen. |
| **Deduplisering av påminnelser** | På | Registrerer sendte påminnelser slik at nye forsøk eller planlagte kjøringer ikke sender dupliserte varsler. |
| **Aktiver kalenderverktøy** | Av til konfigurert | Lar agenten lese konfigurerte Google-kalendere og hendelser. |
| **Aktiver SMS-varsler** | Av til konfigurert | Lar godkjente arbeidsflyter sende TextBee SMS-varsler etter at legitimasjon er lagret. |

### Bruke endringer {#applying-changes}

Klikk på **Lagre innstillinger** etter å ha slått av eller på et flagg. Endringer trer i kraft umiddelbart — ingen tømming av hurtigbuffer eller reaktivering av plugin er nødvendig.
