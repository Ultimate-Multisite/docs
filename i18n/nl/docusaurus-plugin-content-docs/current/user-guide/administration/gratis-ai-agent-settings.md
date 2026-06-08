---
title: Gratis AI Agent Instellingen
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Instellingen

Het scherm **Instellingen → Geavanceerd** in Gratis AI Agent biedt configuratie op administratorniveau voor backend-integraties die zijn geïntroduceerd in v1.5.0. Deze pagina documenteert de velden van het **Feedback Endpoint** en hun verwachte formaat.

## Instellingen Toegankelijk Maken

1. Ga in het WordPress-admin naar **Gratis AI Agent → Instellingen**.
2. Klik op het tabblad **Geavanceerd**.

## Feedback Endpoint Configuratie

Het feedback endpoint ontvangt POST-verzoeken van de AI-agent wanneer een gebruiker feedback geeft via de duim-omlaag-knop, de auto-prompt banner, of de `/report-issue` opdracht.

| Veld | Beschrijving |
|---|---|
| **Feedback Endpoint URL** | De URL die feedbackinzendingen ontvangt als HTTP POST-verzoeken met een JSON-body. |
| **Feedback API Key** | Een bearer token dat wordt verzonden in het `Authorization`-header van elk feedbackverzoek. Laat dit veld leeg als uw endpoint geen authenticatie vereist. |

### Verwachte JSON Payload

Uw feedback endpoint moet een JSON-body accepteren met op zijn minst de volgende velden:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Het antwoord was onjuist over de prijzen.",
  "triage_category": "factual_error"
}
```

Er kunnen aanvullende velden in de payload aanwezig zijn, afhankelijk van de context van het gesprek.

### `triage_category` Waarden

De AI triage layer wijst een van de volgende waarden toe aan `triage_category` voordat de payload wordt doorgestuurd:

| Waarde | Betekenis |
|---|---|
| `factual_error` | De assistent heeft onjuiste feitelijke informatie verstrekt. |
| `unhelpful_answer` | Het antwoord was technisch correct, maar niet nuttig. |
| `inappropriate_content` | Het antwoord bevatte inhoud die niet aan gebruikers getoond zou moeten worden. |
| `other` | De feedback kwam niet overeen met een bekende categorie. |

### Authenticatie

Als uw endpoint authenticatie vereist, stel dan het veld **Feedback API Key** in op uw bearer token. De agent stuurt:

```
Authorization: Bearer <uw-api-key>
```

Als het veld **Feedback API Key** leeg is, wordt er geen `Authorization`-header verstuurd.

### Feedback Verzameling Uitschakelen

Laat zowel het veld **Feedback Endpoint URL** als **Feedback API Key** leeg. De duim-omlaag-knop en de feedback-UI blijven zichtbaar voor gebruikers, maar inzendingen worden niet doorgestuurd naar een externe dienst.

## Brave Search API Key

Ook op het tabblad **Geavanceerd** maakt het veld **Brave Search API Key** de [Internet Search](../configuration/internet-search) functionaliteit mogelijk.

| Veld | Beschrijving |
|---|---|
| **Brave Search API Key** | Uw API-sleutel van het Brave Search developer dashboard. Vereist om internet zoeken in de AI-assistent in te schakelen. |

Het veldlabel bevat een klikbare link naar de Brave Search API aanmeldpagina. Laat het veld leeg om internet zoeken uit te schakelen.

Zie [Internet Search](../configuration/internet-search) voor de documentatie voor eindgebruikers over deze functie.

## Feature Flags

Ook geïntroduceerd in v1.9.0, biedt het tabblad **Instellingen → Feature Flags** schakelaars voor optionele functionaliteit. Elke flag kan network-breed ingeschakeld of uitgeschakeld worden; er is momenteel geen override per site mogelijk.

### Feature Flags Toegankelijk Maken

1. Ga in het WordPress-admin naar **Gratis AI Agent → Instellingen**.
2. Klik op het tabblad **Feature Flags**.

### Toegangscontrole Flags

| Flag | Standaard | Beschrijving |
|---|---|---|
| **Restrict to Administrators** | Uit | Als deze ingeschakeld is, kunnen alleen gebruikers met de `administrator`-rol het AI Agent chatpaneel openen. Alle andere rollen zien in plaats daarvan de melding "Neem contact op met uw administrator". |
| **Restrict to Network Admins** | Uit | Als deze ingeschakeld is op een multisite network, kunnen alleen Super Admins de agent gebruiken. Individuele site-admins worden geblokkeerd. Dit heeft voorrang op "Restrict to Administrators" als beide ingeschakeld zijn. |
| **Allow Subscriber Access** | Uit | Als deze ingeschakeld is, kunnen gebruikers met de `subscriber`-rol de chatinterface gebruiken, maar zijn ze beperkt tot alleen-lezen functionaliteiten (geen postcreatie of instellingenwijzigingen). |
| **Disable for Non-Members** | Uit | Integreert met de lidmaatschapsstatus van Ultimate Multisite. Als deze ingeschakeld is, wordt de chat verborgen voor sites die geen actief lidmaatschap hebben. |

### Branding Flags

| Flag | Standaard | Beschrijving |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Uit | Verwijdert de merkattributielijn die onderaan de chatwidget wordt weergegeven. Aanbevolen voor white-label implementaties. |
| **Custom Agent Name** | *(leeg)* | Vervangt de standaardlabel "Gratis AI Agent" in de chatheader en het adminmenu door de naam van uw eigen product. Laat het veld leeg om de standaardnaam te gebruiken. |
| **Hide Agent Picker** | Uit | Als deze ingeschakeld is, kunnen gebruikers niet schakelen tussen de vijf ingebouwde agents. De huidige agent wordt vastgezet op wat is geconfigureerd als standaard in Instellingen → Algemeen. |
| **Use Site Icon as Chat Avatar** | Uit | Vervangt het standaard AI-icoon in de chatwidgetheader door het WordPress site-icoon (ingesteld onder Uiterlijk → Aanpassen → Site-identiteit). |

### Wijzigingen Toepassen

Klik op **Instellingen Opslaan** nadat u een flag heeft omgeschakeld. De wijzigingen zijn onmiddellijk van kracht — er is geen cache flush of plugin-reactivering nodig.
