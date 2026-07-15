---
title: Gratis AI Agent-inställningar
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent-inställningar

Skärmen **Settings → Advanced** i Gratis AI Agent tillhandahåller konfiguration på administratörsnivå för backend-integrationer. Den här sidan dokumenterar vidarebefordran av feedback, nycklar för sökleverantörer, konfiguration av hanterad Superdav-tjänst, Google Calendar-kontroller, TextBee SMS-inställningar och nätverksomfattande funktionsflaggor.

## Åtkomst till inställningar {#accessing-settings}

1. I WordPress-admin, gå till **Gratis AI Agent → Settings**.
2. Klicka på fliken **Advanced**.

## Konfiguration av feedback-endpoint {#feedback-endpoint-configuration}

Feedback-endpointen tar emot POST-förfrågningar från AI-agenten när en användare skickar feedback via tummen-ned-knappen, auto-prompt-bannern eller kommandot `/report-issue`.

| Fält | Beskrivning |
|---|---|
| **Feedback Endpoint URL** | URL:en som tar emot feedbackinlämningar som HTTP POST-förfrågningar med en JSON-body. |
| **Feedback API Key** | En bearer token som skickas i `Authorization` header för varje feedbackförfrågan. Lämna tomt om din endpoint inte kräver autentisering. |

### Förväntad JSON-payload {#expected-json-payload}

Din feedback-endpoint måste acceptera en JSON-body med minst följande fält:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Ytterligare fält kan finnas i payloaden beroende på konversationskontexten.

### `triage_category`-värden {#triagecategory-values}

AI-triage-lagret tilldelar ett av följande värden till `triage_category` innan payloaden vidarebefordras:

| Värde | Betydelse |
|---|---|
| `factual_error` | Assistenten gav felaktig faktainformation. |
| `unhelpful_answer` | Svaret var tekniskt korrekt men inte användbart. |
| `inappropriate_content` | Svaret innehöll innehåll som inte bör visas för användare. |
| `other` | Feedbacken matchade inte en känd kategori. |

### Autentisering {#authentication}

Om din endpoint kräver autentisering, ställ in fältet **Feedback API Key** till din bearer token. Agenten skickar:

```
Authorization: Bearer <your-api-key>
```

Om fältet **Feedback API Key** är tomt skickas ingen `Authorization` header.

### Inaktivera insamling av feedback {#disabling-feedback-collection}

Lämna både fälten **Feedback Endpoint URL** och **Feedback API Key** tomma. Tummen-ned-knappen och feedback-UI förblir synliga för användare, men inlämningar vidarebefordras inte till någon extern tjänst.

## Brave Search API Key {#brave-search-api-key}

Även på fliken **Advanced** aktiverar fältet **Brave Search API Key** funktionen [Internetsökning](../configuration/internet-search).

| Fält | Beskrivning |
|---|---|
| **Brave Search API Key** | Din API-nyckel från Brave Search-utvecklardashboarden. Krävs för att aktivera internetsökning i AI-assistenten. |

Fältetiketten innehåller en klickbar länk till registreringssidan för Brave Search API. Lämna tomt för att inaktivera internetsökning.

Se [Internetsökning](../configuration/internet-search) för dokumentation för slutanvändare om den här funktionen.

## Hanterad Superdav-tjänst {#managed-superdav-service}

Superdav AI Agent v1.18.0 lägger till hanterade Superdav-tjänsteendpoints och automatisk anslutningsprovisionering för stödda webbplatser. Använd dessa kontroller när din webbplats ska ansluta till den hostade leverantören i stället för en manuellt konfigurerad tjänsteendpoint.

| Fält | Beskrivning |
|---|---|
| **Managed Superdav Service** | Aktiverar den hostade Superdav-tjänsteanslutningen för stödda webbplatser. |
| **Provision Connection** | Startar automatisk provisionering av endpoint och autentiseringsuppgifter. Använd detta efter att du har bekräftat att webbplatsen ska använda den hanterade leverantören. |
| **Service Endpoint / Connection Status** | Visar aktuell endpoint eller anslutningsstatus efter provisionering. |

Efter provisionering, spara inställningarna och verifiera anslutningsstatusen innan du förlitar dig på arbetsflöden för hanterade tjänster. Om provisioneringen misslyckas, granska den visade vägledningen för att försöka igen och bekräfta att webbplatsen har behörighet att använda den hostade leverantören.

## Google Calendar-konfiguration {#google-calendar-configuration}

När kalenderfunktioner i Superdav AI Agent v1.18.0 är aktiverade kan agenten läsa konfigurerade kalendrar och händelsedetaljer. Kalenderverktyg är läsorienterade och är användbara för schemamedvetna påminnelser, uppföljning av deltagare och kontaktmatchning.

| Fält | Beskrivning |
|---|---|
| **Google Calendar Credentials** | Lagrar autentiseringsuppgifterna eller tokenanslutningen som krävs för att läsa kalenderdata. |
| **Calendar Selection** | Begränsar vilka konfigurerade kalendrar agenten får granska. |
| **Calendar Connection Status** | Bekräftar om de aktuella autentiseringsuppgifterna kan läsa kalendrar och händelser. |

Begränsa kalenderautentiseringsuppgifterna till de kalendrar agenten behöver. Anslut på nytt eller rotera autentiseringsuppgifter om statusen indikerar en utgången token.

## TextBee SMS-aviseringar {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 lägger till TextBee som SMS-leverantör för konfigurerade aviseringsarbetsflöden. SMS-aviseringar bör kombineras med grindar för mänskligt godkännande för känsliga eller användarriktade meddelanden.

| Fält | Beskrivning |
|---|---|
| **TextBee API Key** | Autentiserar förfrågningar till TextBee SMS-leverantören. |
| **TextBee Device / Sender** | Väljer TextBee-avsändaren eller enheten som används för utgående meddelanden, när leverantören kräver det. |
| **SMS Notifications Enabled** | Tillåter godkända arbetsflöden att skicka textmeddelandeaviseringar. Lämna inaktiverat för att förhindra SMS-utskick. |

Skicka ett testmeddelande endast till ett nummer som ägs av en administratör, och bekräfta sedan beteendet för godkännandegrindar innan du aktiverar schemalagda eller deltagarriktade påminnelser.

## Funktionsflaggor {#feature-flags}

Fliken **Settings → Feature Flags**, som också introducerades i v1.9.0, tillhandahåller växlingsknappar för valfri funktionalitet. Varje flagga är antingen aktiverad eller inaktiverad nätverksomfattande; det finns för närvarande ingen åsidosättning per webbplats.

### Åtkomst till funktionsflaggor {#accessing-feature-flags}

1. I WordPress-admin, gå till **Gratis AI Agent → Settings**.
2. Klicka på fliken **Feature Flags**.

### Flaggor för åtkomstkontroll {#access-control-flags}

| Flagga | Standard | Beskrivning |
|---|---|---|
| **Begränsa till administratörer** | Av | När detta är aktiverat kan endast användare med rollen `administrator` öppna AI Agent-chattpanelen. Alla andra roller ser i stället meddelandet "Kontakta din administratör". |
| **Begränsa till Network Admins** | Av | När detta är aktiverat i ett multisite-nätverk kan endast Super Admins använda agenten. Administratörer för enskilda sajter blockeras. Har företräde framför "Begränsa till administratörer" om båda är aktiverade. |
| **Tillåt Subscriber-åtkomst** | Av | När detta är aktiverat kan användare med rollen `subscriber` använda chattgränssnittet men är begränsade till skrivskyddade möjligheter (ingen skapande av inlägg eller ändringar av inställningar). |
| **Inaktivera för icke-medlemmar** | Av | Integreras med Ultimate Multisite-medlemskapsstatus. När detta är aktiverat döljs chatten för sajter som inte har ett aktivt medlemskap. |

### Varumärkesflaggor {#branding-flags}

| Flagga | Standard | Beskrivning |
|---|---|---|
| **Dölj "Powered by Gratis AI Agent"-sidfot** | Av | Tar bort varumärkesattributionsraden som visas längst ned i chattwidgeten. Rekommenderas för white-label-distributioner. |
| **Anpassat agentnamn** | *(tomt)* | Ersätter standardetiketten "Gratis AI Agent" i chatthuvudet och administratörsmenyn med ditt eget produktnamn. Lämna tomt för att använda standardvärdet. |
| **Dölj agentväljaren** | Av | När detta är aktiverat kan användare inte växla mellan de fem inbyggda agenterna. Den aktuella agenten är låst till det som är konfigurerat som standard i Inställningar → Allmänt. |
| **Använd sajtikon som chattavatar** | Av | Ersätter standard-AI-ikonen i chattwidgetens huvud med WordPress-sajtikonen (inställd under Utseende → Anpassa → Sajtidentitet). |

### Säkerhetsflaggor för automatisering {#automation-safety-flags}

Superdav AI Agent v1.18.0 introducerar godkännandesteg från människor och påminnelseposter för säkrare automatiseringskörningar. Dessa kontroller kan visas i funktionsflaggorna eller avancerade automatiseringsinställningar, beroende på det installerade paketet.

| Flagga | Standard | Beskrivning |
|---|---|---|
| **Kräv mänskligt godkännande** | Rekommenderas på | Pausar känsliga automatiseringar tills en auktoriserad användare granskar och bekräftar den föreslagna åtgärden. |
| **Deduplicering av påminnelser** | På | Registrerar skickade påminnelser så att nya försök eller schemalagda körningar inte skickar dubbla aviseringar. |
| **Aktivera kalenderverktyg** | Av tills konfigurerat | Gör att agenten kan läsa konfigurerade Google-kalendrar och händelser. |
| **Aktivera SMS-aviseringar** | Av tills konfigurerat | Gör att godkända arbetsflöden kan skicka TextBee SMS-aviseringar efter att autentiseringsuppgifter har sparats. |

### Tillämpa ändringar {#applying-changes}

Klicka på **Spara inställningar** efter att du växlat någon flagga. Ändringar träder i kraft omedelbart — ingen cachetömning eller återaktivering av plugin krävs.
