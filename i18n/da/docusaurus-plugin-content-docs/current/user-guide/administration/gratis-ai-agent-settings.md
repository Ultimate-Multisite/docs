---
title: Gratis AI Agent-indstillinger
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent-indstillinger {#gratis-ai-agent-settings}

Skærmen **Settings → Advanced** i Gratis AI Agent giver konfiguration på administratorniveau til backend-integrationer. Denne side dokumenterer videresendelse af feedback, nøgler til søgeudbydere, opsætning af administreret Superdav-tjeneste, Google Calendar-kontroller, TextBee SMS-indstillinger og funktionsflag for hele netværket.

## Adgang til indstillinger {#accessing-settings}

1. I WordPress-administrationen skal du gå til **Gratis AI Agent → Settings**.
2. Klik på fanen **Advanced**.

## Konfiguration af feedback-endpoint {#feedback-endpoint-configuration}

Feedback-endpointet modtager POST-anmodninger fra AI-agenten, hver gang en bruger indsender feedback via tommel-ned-knappen, auto-prompt-banneret eller kommandoen `/report-issue`.

| Felt | Beskrivelse |
|---|---|
| **Feedback Endpoint URL** | Den URL, der modtager feedbackindsendelser som HTTP POST-anmodninger med en JSON-body. |
| **Feedback API Key** | En bearer token, der sendes i `Authorization` header i hver feedbackanmodning. Lad feltet være tomt, hvis dit endpoint ikke kræver godkendelse. |

### Forventet JSON-payload {#expected-json-payload}

Dit feedback-endpoint skal acceptere en JSON-body med mindst følgende felter:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Der kan være yderligere felter i payloaden afhængigt af samtalekonteksten.

### `triage_category`-værdier {#triagecategory-values}

AI-triage-laget tildeler en af følgende værdier til `triage_category`, før payloaden videresendes:

| Værdi | Betydning |
|---|---|
| `factual_error` | Assistenten leverede ukorrekte faktuelle oplysninger. |
| `unhelpful_answer` | Svaret var teknisk korrekt, men ikke nyttigt. |
| `inappropriate_content` | Svaret indeholdt indhold, der ikke bør vises for brugere. |
| `other` | Feedbacken matchede ikke en kendt kategori. |

### Godkendelse {#authentication}

Hvis dit endpoint kræver godkendelse, skal du sætte feltet **Feedback API Key** til din bearer token. Agenten sender:

```
Authorization: Bearer <your-api-key>
```

Hvis feltet **Feedback API Key** er tomt, sendes der ingen `Authorization` header.

### Deaktivering af feedbackindsamling {#disabling-feedback-collection}

Lad både felterne **Feedback Endpoint URL** og **Feedback API Key** være tomme. Tommel-ned-knappen og feedback-UI'en forbliver synlige for brugere, men indsendelser videresendes ikke til nogen ekstern tjeneste.

## Brave Search API Key {#brave-search-api-key}

Også på fanen **Advanced** aktiverer feltet **Brave Search API Key** funktionen [Internetsøgning](../configuration/internet-search).

| Felt | Beskrivelse |
|---|---|
| **Brave Search API Key** | Din API-nøgle fra Brave Search-udviklerdashboardet. Kræves for at aktivere internetsøgning i AI-assistenten. |

Feltetiketten indeholder et klikbart link til tilmeldingssiden for Brave Search API. Lad feltet være tomt for at deaktivere internetsøgning.

Se [Internetsøgning](../configuration/internet-search) for slutbrugerdokumentation om denne funktion.

## Administreret Superdav-tjeneste {#managed-superdav-service}

Superdav AI Agent v1.18.0 tilføjer administrerede Superdav-tjeneste-endpoints og automatisk klargøring af forbindelse for understøttede websteder. Brug disse kontroller, når dit websted skal oprette forbindelse til den hostede udbyder i stedet for et manuelt konfigureret tjeneste-endpoint.

| Felt | Beskrivelse |
|---|---|
| **Managed Superdav Service** | Aktiverer den hostede Superdav-tjenesteforbindelse for understøttede websteder. |
| **Provision Connection** | Starter automatisk klargøring af endpoint og legitimationsoplysninger. Brug dette efter at have bekræftet, at webstedet skal bruge den administrerede udbyder. |
| **Service Endpoint / Connection Status** | Viser det aktuelle endpoint eller forbindelsestilstanden efter klargøring. |

Efter klargøring skal du gemme indstillingerne og bekræfte forbindelsestilstanden, før du baserer dig på arbejdsgange for administrerede tjenester. Hvis klargøringen mislykkes, skal du gennemgå den viste vejledning til nyt forsøg og bekræfte, at webstedet har tilladelse til at bruge den hostede udbyder.

## Google Calendar-konfiguration {#google-calendar-configuration}

Når kalenderfunktioner i Superdav AI Agent v1.18.0 er aktiveret, kan agenten læse konfigurerede kalendere og begivenhedsdetaljer. Kalenderværktøjer er læseorienterede og er nyttige til tidsplansbevidste påmindelser, opfølgning på deltagere og matchning af kontakter.

| Felt | Beskrivelse |
|---|---|
| **Google Calendar Credentials** | Gemmer de legitimationsoplysninger eller den token-forbindelse, der kræves for at læse kalenderdata. |
| **Calendar Selection** | Begrænser, hvilke konfigurerede kalendere agenten må inspicere. |
| **Calendar Connection Status** | Bekræfter, om de aktuelle legitimationsoplysninger kan læse kalendere og begivenheder. |

Begræns kalenderlegitimationsoplysninger til de kalendere, agenten har brug for. Opret forbindelse igen, eller roter legitimationsoplysninger, hvis status angiver en udløbet token.

## TextBee SMS-notifikationer {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 tilføjer TextBee som SMS-udbyder til konfigurerede notifikationsarbejdsgange. SMS-notifikationer bør kombineres med godkendelsestrin fra mennesker for følsomme eller brugerrettede beskeder.

| Felt | Beskrivelse |
|---|---|
| **TextBee API Key** | Godkender anmodninger til TextBee SMS-udbyderen. |
| **TextBee Device / Sender** | Vælger den TextBee-afsender eller enhed, der bruges til udgående beskeder, når udbyderen kræver det. |
| **SMS Notifications Enabled** | Tillader godkendte arbejdsgange at sende tekstbeskednotifikationer. Lad det være deaktiveret for at forhindre SMS-afsendelser. |

Send kun en testbesked til et administrator-ejet nummer, og bekræft derefter adfærden for godkendelsestrin, før planlagte eller deltagerrettede påmindelser aktiveres.

## Funktionsflag {#feature-flags}

Fanen **Settings → Feature Flags**, som også blev introduceret i v1.9.0, giver vippekontakter til valgfri funktionalitet. Hvert flag er enten aktiveret eller deaktiveret for hele netværket; der er i øjeblikket ingen tilsidesættelse pr. websted.

### Adgang til funktionsflag {#accessing-feature-flags}

1. I WordPress-administrationen skal du gå til **Gratis AI Agent → Settings**.
2. Klik på fanen **Feature Flags**.

### Adgangskontrolflag {#access-control-flags}

| Flag | Standard | Beskrivelse |
|---|---|---|
| **Begræns til administratorer** | Fra | Når det er aktiveret, kan kun brugere med rollen `administrator` åbne AI Agent-chatpanelet. Alle andre roller ser i stedet en besked om "Kontakt din administrator". |
| **Begræns til Network Admins** | Fra | Når det er aktiveret på et multisite-netværk, kan kun Super Admins bruge agenten. Individuelle site-administratorer blokeres. Har forrang over "Begræns til administratorer", hvis begge er aktiveret. |
| **Tillad Subscriber-adgang** | Fra | Når det er aktiveret, kan brugere med rollen `subscriber` bruge chatgrænsefladen, men er begrænset til skrivebeskyttede muligheder (ingen oprettelse af indlæg eller ændringer af indstillinger). |
| **Deaktiver for ikke-medlemmer** | Fra | Integrerer med Ultimate Multisite-medlemskabsstatus. Når det er aktiveret, skjules chat for sites, der ikke har et aktivt medlemskab. |

### Branding-flag {#branding-flags}

| Flag | Standard | Beskrivelse |
|---|---|---|
| **Skjul "Powered by Gratis AI Agent"-footer** | Fra | Fjerner branding-attributionslinjen, der vises nederst i chat-widgetten. Anbefales til white-label-udrulninger. |
| **Brugerdefineret agentnavn** | *(tom)* | Erstatter standardetiketten "Gratis AI Agent" i chat-headeren og admin-menuen med dit eget produktnavn. Lad feltet være tomt for at bruge standarden. |
| **Skjul agentvælger** | Fra | Når det er aktiveret, kan brugere ikke skifte mellem de fem indbyggede agenter. Den aktuelle agent er fastsat til det, der er konfigureret som standard i Settings → General. |
| **Brug site-ikon som chat-avatar** | Fra | Erstatter standard-AI-ikonet i chat-widgettens header med WordPress-site-ikonet (angivet under Appearance → Customize → Site Identity). |

### Automationssikkerhedsflag {#automation-safety-flags}

Superdav AI Agent v1.18.0 introducerer godkendelsesporte for mennesker og påmindelsesposter til sikrere automatiseringskørsler. Disse kontroller kan vises i funktionsflagene eller de avancerede automatiseringsindstillinger, afhængigt af den installerede pakke.

| Flag | Standard | Beskrivelse |
|---|---|---|
| **Kræv menneskelig godkendelse** | Anbefalet til | Sætter følsomme automatiseringer på pause, indtil en autoriseret bruger gennemgår og bekræfter den foreslåede handling. |
| **Påmindelsesdeduplikering** | Til | Registrerer sendte påmindelser, så gentagne forsøg eller planlagte kørsler ikke sender duplikerede notifikationer. |
| **Aktivér kalenderværktøjer** | Fra indtil konfigureret | Giver agenten mulighed for at læse konfigurerede Google-kalendere og begivenheder. |
| **Aktivér SMS-notifikationer** | Fra indtil konfigureret | Giver godkendte workflows mulighed for at sende TextBee SMS-notifikationer, efter legitimationsoplysninger er gemt. |

### Anvendelse af ændringer {#applying-changes}

Klik på **Gem indstillinger** efter at have slået et flag til eller fra. Ændringer træder i kraft med det samme — ingen cache-tømning eller genaktivering af plugin er nødvendig.
