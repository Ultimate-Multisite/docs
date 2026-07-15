---
title: Gratis AI Agent-instellingen
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent-instellingen

Het scherm **Settings → Advanced** in Gratis AI Agent biedt configuratie op beheerdersniveau voor backend-integraties. Deze pagina documenteert het doorsturen van feedback, sleutels voor zoekproviders, instelling van de beheerde Superdav-service, Google Calendar-bedieningselementen, TextBee SMS-instellingen en netwerkbrede feature flags.

## Instellingen openen {#accessing-settings}

1. Ga in de WordPress-beheeromgeving naar **Gratis AI Agent → Settings**.
2. Klik op de tab **Advanced**.

## Configuratie van feedback-endpoint {#feedback-endpoint-configuration}

Het feedback-endpoint ontvangt POST-verzoeken van de AI agent wanneer een gebruiker feedback indient via de duim-omlaagknop, de auto-promptbanner of de opdracht `/report-issue`.

| Veld | Beschrijving |
|---|---|
| **Feedback Endpoint URL** | De URL die feedbackinzendingen ontvangt als HTTP POST-verzoeken met een JSON-body. |
| **Feedback API Key** | Een bearer token die wordt verzonden in de `Authorization` header van elk feedbackverzoek. Laat leeg als je endpoint geen authenticatie vereist. |

### Verwachte JSON-payload {#expected-json-payload}

Je feedback-endpoint moet een JSON-body accepteren met ten minste de volgende velden:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Er kunnen extra velden in de payload aanwezig zijn, afhankelijk van de gesprekscontext.

### `triage_category`-waarden {#triagecategory-values}

De AI-triagelaag wijst een van de volgende waarden toe aan `triage_category` voordat de payload wordt doorgestuurd:

| Waarde | Betekenis |
|---|---|
| `factual_error` | De assistant gaf onjuiste feitelijke informatie. |
| `unhelpful_answer` | Het antwoord was technisch correct, maar niet nuttig. |
| `inappropriate_content` | Het antwoord bevatte inhoud die niet aan gebruikers getoond zou moeten worden. |
| `other` | De feedback kwam niet overeen met een bekende categorie. |

### Authenticatie {#authentication}

Als je endpoint authenticatie vereist, stel dan het veld **Feedback API Key** in op je bearer token. De agent verzendt:

```
Authorization: Bearer <your-api-key>
```

Als het veld **Feedback API Key** leeg is, wordt er geen `Authorization` header verzonden.

### Feedbackverzameling uitschakelen {#disabling-feedback-collection}

Laat zowel de velden **Feedback Endpoint URL** als **Feedback API Key** leeg. De duim-omlaagknop en feedback-UI blijven zichtbaar voor gebruikers, maar inzendingen worden niet doorgestuurd naar een externe service.

## Brave Search API Key {#brave-search-api-key}

Ook op de tab **Advanced** schakelt het veld **Brave Search API Key** de mogelijkheid [Internet Search](../configuration/internet-search) in.

| Veld | Beschrijving |
|---|---|
| **Brave Search API Key** | Je API key uit het Brave Search developer dashboard. Vereist om zoeken op internet in de AI assistant in te schakelen. |

Het veldlabel bevat een klikbare link naar de aanmeldpagina voor de Brave Search API. Laat leeg om zoeken op internet uit te schakelen.

Zie [Internet Search](../configuration/internet-search) voor eindgebruikersdocumentatie over deze functie.

## Beheerde Superdav-service {#managed-superdav-service}

Superdav AI Agent v1.18.0 voegt beheerde Superdav-service-endpoints en automatische verbindingsprovisioning toe voor ondersteunde sites. Gebruik deze bedieningselementen wanneer je site verbinding moet maken met de gehoste provider in plaats van met een handmatig geconfigureerd service-endpoint.

| Veld | Beschrijving |
|---|---|
| **Managed Superdav Service** | Schakelt de gehoste Superdav-serviceverbinding in voor ondersteunde sites. |
| **Provision Connection** | Start automatische provisioning van endpoint en inloggegevens. Gebruik dit nadat je hebt bevestigd dat de site de beheerde provider moet gebruiken. |
| **Service Endpoint / Connection Status** | Toont het huidige endpoint of de verbindingsstatus na provisioning. |

Sla na provisioning de instellingen op en controleer de verbindingsstatus voordat je op workflows voor beheerde services vertrouwt. Als provisioning mislukt, bekijk dan de weergegeven richtlijnen voor opnieuw proberen en bevestig dat de site toestemming heeft om de gehoste provider te gebruiken.

## Google Calendar-configuratie {#google-calendar-configuration}

Wanneer de kalenderfuncties van Superdav AI Agent v1.18.0 zijn ingeschakeld, kan de agent geconfigureerde kalenders en evenementdetails lezen. Kalendertools zijn gericht op lezen en zijn nuttig voor planningsbewuste herinneringen, opvolging van deelnemers en contactmatching.

| Veld | Beschrijving |
|---|---|
| **Google Calendar Credentials** | Slaat de inloggegevens of tokenverbinding op die nodig zijn om kalendergegevens te lezen. |
| **Calendar Selection** | Beperkt welke geconfigureerde kalenders de agent mag inspecteren. |
| **Calendar Connection Status** | Bevestigt of de huidige inloggegevens kalenders en evenementen kunnen lezen. |

Beperk kalenderinloggegevens tot de kalenders die de agent nodig heeft. Maak opnieuw verbinding of roteer inloggegevens als de status een verlopen token aangeeft.

## TextBee SMS-meldingen {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 voegt TextBee toe als SMS-provider voor geconfigureerde meldingsworkflows. SMS-meldingen moeten worden gecombineerd met menselijke goedkeuringspoorten voor gevoelige of gebruikersgerichte berichten.

| Veld | Beschrijving |
|---|---|
| **TextBee API Key** | Authenticeert verzoeken aan de TextBee SMS-provider. |
| **TextBee Device / Sender** | Selecteert de TextBee-afzender of het apparaat dat wordt gebruikt voor uitgaande berichten, wanneer de provider dit vereist. |
| **SMS Notifications Enabled** | Staat goedgekeurde workflows toe om tekstberichtmeldingen te verzenden. Laat uitgeschakeld om SMS-verzendingen te voorkomen. |

Stuur een testbericht alleen naar een nummer dat eigendom is van een beheerder en bevestig daarna het gedrag van goedkeuringspoorten voordat je geplande of op deelnemers gerichte herinneringen inschakelt.

## Feature Flags {#feature-flags}

Ook geïntroduceerd in v1.9.0 biedt de tab **Settings → Feature Flags** schakelaars voor optionele functionaliteit. Elke flag is netwerkbreed ingeschakeld of uitgeschakeld; er is momenteel geen override per site.

### Feature Flags openen {#accessing-feature-flags}

1. Ga in de WordPress-beheeromgeving naar **Gratis AI Agent → Settings**.
2. Klik op de tab **Feature Flags**.

### Toegangscontroleflags {#access-control-flags}

| Vlag | Standaard | Beschrijving |
|---|---|---|
| **Beperken tot Administrators** | Uit | Wanneer ingeschakeld, kunnen alleen gebruikers met de rol `administrator` het chatpaneel van de AI Agent openen. Alle andere rollen zien in plaats daarvan een bericht "Neem contact op met je administrator". |
| **Beperken tot Network Admins** | Uit | Wanneer ingeschakeld op een multisite-netwerk, kunnen alleen Super Admins de agent gebruiken. Individuele sitebeheerders worden geblokkeerd. Heeft voorrang op "Beperken tot Administrators" als beide zijn ingeschakeld. |
| **Subscriber-toegang toestaan** | Uit | Wanneer ingeschakeld, kunnen gebruikers met de rol `subscriber` de chatinterface gebruiken, maar zijn ze beperkt tot alleen-lezen mogelijkheden (geen aanmaak van berichten of wijzigingen in instellingen). |
| **Uitschakelen voor niet-leden** | Uit | Integreert met de lidmaatschapsstatus van Ultimate Multisite. Wanneer ingeschakeld, wordt chat verborgen voor sites die geen actief lidmaatschap hebben. |

### Branding-vlaggen {#branding-flags}

| Vlag | Standaard | Beschrijving |
|---|---|---|
| **"Powered by Gratis AI Agent"-footer verbergen** | Uit | Verwijdert de branding-toeschrijvingsregel die onderaan de chatwidget wordt weergegeven. Aanbevolen voor white-label-implementaties. |
| **Aangepaste agentnaam** | *(leeg)* | Vervangt het standaardlabel "Gratis AI Agent" in de chatheader en het adminmenu door je eigen productnaam. Laat leeg om de standaard te gebruiken. |
| **Agentkiezer verbergen** | Uit | Wanneer ingeschakeld, kunnen gebruikers niet schakelen tussen de vijf ingebouwde agents. De huidige agent staat vast op wat als standaard is geconfigureerd in Instellingen → Algemeen. |
| **Site-icoon gebruiken als chatavatar** | Uit | Vervangt het standaard AI-icoon in de header van de chatwidget door het WordPress site-icoon (ingesteld onder Weergave → Customizer → Site-identiteit). |

### Veiligheidsvlaggen voor automatisering {#automation-safety-flags}

Superdav AI Agent v1.18.0 introduceert goedkeuringspoorten door mensen en herinneringsrecords voor veiligere automatiseringsruns. Deze controles kunnen verschijnen in de feature flags of geavanceerde automatiseringsinstellingen, afhankelijk van het geïnstalleerde pakket.

| Vlag | Standaard | Beschrijving |
|---|---|---|
| **Menselijke goedkeuring vereisen** | Aanbevolen aan | Pauzeert gevoelige automatiseringen totdat een geautoriseerde gebruiker de voorgestelde actie beoordeelt en bevestigt. |
| **Herinneringsdeduplicatie** | Aan | Registreert verzonden herinneringen zodat nieuwe pogingen of geplande runs geen dubbele meldingen verzenden. |
| **Kalendertools inschakelen** | Uit totdat geconfigureerd | Staat de agent toe geconfigureerde Google-agenda's en evenementen te lezen. |
| **SMS-meldingen inschakelen** | Uit totdat geconfigureerd | Staat goedgekeurde workflows toe TextBee SMS-meldingen te verzenden nadat inloggegevens zijn opgeslagen. |

### Wijzigingen toepassen {#applying-changes}

Klik op **Instellingen opslaan** nadat je een vlag hebt omgeschakeld. Wijzigingen worden onmiddellijk van kracht — er is geen cacheflush of plugin-heractivering vereist.
