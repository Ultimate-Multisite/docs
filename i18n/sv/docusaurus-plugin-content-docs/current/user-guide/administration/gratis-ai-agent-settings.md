---
title: Gratis AI Agent Inställningar
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Inställningar

Skärmen **Inställningar → Avancerat** i Gratis AI Agent ger administratörsnivåskonfiguration för backend-integrationer som introducerades i v1.5.0. Denna sida dokumenterar fälten för **Feedback Endpoint** och deras förväntade format.

## Åtkomst till Inställningar

1. I WordPress-administratören, gå till **Gratis AI Agent → Inställningar**.
2. Klicka på fliken **Avancerat**.

## Konfiguration av Feedback Endpoint

Feedback endpoint tar emot POST-förfrågningar från AI-agenten varje gång en användare skickar in feedback via tummen ned-knappen, auto-prompt-bannern eller kommandot `/report-issue`.

| Fält | Beskrivning |
|---|---|
| **Feedback Endpoint URL** | URL:en som tar emot feedbackinlämningar som HTTP POST-förfrågningar med en JSON-kropp. |
| **Feedback API Key** | Ett bearer-token som skickas i `Authorization`-huvudet för varje feedbackförfrågan. Lämna tomt om din endpoint inte kräver autentisering. |

### Förväntad JSON-payload

Din feedback endpoint måste acceptera en JSON-kropp med minst följande fält:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Svaret var felaktigt angående prissättning.",
  "triage_category": "factual_error"
}
```

Ytterligare fält kan finnas i payloaden beroende på kontexten i konversationen.

### `triage_category` Värden

AI-triage-lagret tilldelar ett av följande värden till `triage_category` innan det skickar vidare payloaden:

| Värde | Betydelse |
|---|---|
| `factual_error` | Assistenten gav felaktig faktabaserad information. |
| `unhelpful_answer` | Svaret var tekniskt korrekt men inte användbart. |
| `inappropriate_content` | Svaret innehöll innehåll som inte ska visas för användare. |
| `other` | Feedbacken matchade ingen känd kategori. |

### Autentisering

Om din endpoint kräver autentisering, ställ in fältet **Feedback API Key** till ditt bearer-token. Agenten skickar:

```
Authorization: Bearer <your-api-key>
```

Om fältet **Feedback API Key** är tomt skickas inget `Authorization`-huvud.

### Inaktivera Feedbackinsamling

Lämna både fälten **Feedback Endpoint URL** och **Feedback API Key** tomma. Tummen ned-knappen och feedback-UI förblir synliga för användare, men inlämningarna skickas inte vidare till någon extern tjänst.

## Brave Search API Key

Även på fliken **Avancerat** aktiverar fältet **Brave Search API Key** funktionen för [Internet Search](../configuration/internet-search).

| Fält | Beskrivning |
|---|---|
| **Brave Search API Key** | Ditt API-nyckel från Brave Search developer dashboard. Krävs för att aktivera internet-sökning i AI-assistenten. |

Fältetiketten innehåller en klickbar länk till Brave Search API-registreringssidan. Lämna tomt för att inaktivera internet-sökning.

Se [Internet Search](../configuration/internet-search) för användardokumentation för denna funktion.

## Feature Flags

Introducerades också i v1.9.0, ger fliken **Inställningar → Feature Flags** omkopplare för valfri funktionalitet. Varje flagga kan antingen vara aktiverad eller avaktiverad över hela nätverket; det finns inget överstyrningsalternativ per webbplats just nu.

### Åtkomstkontrollflaggor

| Flagga | Standard | Beskrivning |
|---|---|---|
| **Restrict to Administrators** | Av | När den är aktiverad kan endast användare med rollen `administrator` öppna AI Agent-chattpanelen. Alla andra roller ser istället ett meddelande om att "Kontakta din administratör". |
| **Restrict to Network Admins** | Av | När den är aktiverad på ett multisite-nätverk kan endast Super Admins använda agenten. Enskilda webbplatsadministratörer blockeras. Har företräde framför "Restrict to Administrators" om båda är aktiverade. |
| **Allow Subscriber Access** | Av | När den är aktiverad kan användare med rollen `subscriber` använda chattgränssnittet men är begränsade till läs-endast-förmågor (ingen inläggsskapande eller inställningsändringar). |
| **Disable for Non-Members** | Av | Integreras med medlemsstatusen i Ultimate Multisite. När den är aktiverad döljs chatten för webbplatser som inte har ett aktivt medlemskap. |

### Branding Flags

| Flagga | Standard | Beskrivning |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Av | Tar bort varumärkesangivelsen som visas längst ner i chattwidgeten. Rekommenderas för white-label-utrullningar. |
| **Custom Agent Name** | *(tom)* | Ersätter standardetiketten "Gratis AI Agent" i chattrubriken och adminmenyn med ditt eget produktnamn. Lämna tomt för att använda standardnamnet. |
| **Hide Agent Picker** | Av | När den är aktiverad kan användare inte växla mellan de fem inbyggda agenterna. Den aktuella agenten är fixerad till vad som är konfigurerat som standard i Inställningar → Allmänt. |
| **Use Site Icon as Chat Avatar** | Av | Ersätter standard-AI-ikonen i chattwidgetens rubrik med WordPress-webbplatsikonen (inställs under Utseende → Anpassa → Webbplatsidentitet). |

### Tillämpa Ändringar

Klicka på **Save Settings** efter att du har ändrat någon flagga. Ändringarna träder i kraft omedelbart – ingen cacherensning eller plugin-reaktivering krävs.
