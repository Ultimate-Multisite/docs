---
title: Kundfeedback och felrapportering
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Återkoppling och felrapportering från användare

Gratis AI Agent v1.5.0 introducerar ett inbyggt system för återkoppling och felrapportering som låter slutanvändare flagga svar som inte var hjälpsamma och rapportera problem direkt från chattgränssnittet. Detta system inkluderar hantering av samtycke, ett automatiserat rapporteringskommando och AI-assisterad sortering i bakgrunden.

## Tummen ner-knappen

Varje meddelande som skickas av AI-assistenten visar en **tummen ner** (👎)-knapp. När en användare klickar på den kan de markera ett svar som ohjälpsamt eller felaktigt.

- Knappen visas vid hovring bredvid varje assistentmeddelande.
- Ett klick öppnar **Feedback Consent Modal** (Samtyckesmodalen för återkoppling).
- Återkopplingen kopplas till konversationsflödet och det specifika meddelandet.

## Feedback Consent Modal

När en användare klickar på tummen ner-knappen visas en samtyckesmodal innan någon data skickas. Modalens funktion är att:

- Förklara vilken information som kommer att samlas in (utdrag ur konversationen, webbläsarkontext).
- Be användaren bekräfta att de samtycker till att dela denna data.
- Tillhandahålla ett textfält där användaren kan beskriva vad som gick fel.
- Erbjuder ett alternativ att **Avbryta** för att stänga utan att skicka in.

Ingen återkoppling sparas förrän användaren uttryckligen bekräftar.

## Auto-Prompt Feedback Banner

I slutet av en konversation kan assistenten visa en **auto-prompt feedback banner** – ett diskret meddelande som frågar om sessionen var hjälpsam.

Denna banner visas automatiskt baserat på konversationslängd och utfallshypoteser. Den länkar till samma återkopplingsflöde som tummen ner-knappen. Användare kan stänga bannern utan att ge återkoppling.

## /report-issue Slash Command

Användare kan trigga återkopplingsflödet direkt genom att skriva `/report-issue` i chattinmatningen. Detta kommando:

- Öppnar Feedback Consent Modal omedelbart.
- Fyller i beskrivningsfältet med kontext om den aktuella konversationen.
- Gör det möjligt för användare att lägga till ytterligare detaljer innan de skickar in.

Kommandot `/report-issue` är tillgängligt i alla chattlägen (inline, flytande widget, fullskärm).

## AI-Assisted Triage

Inlämnad återkoppling skickas till ett AI-sorteringslager som:

- Kategoriserar rapporten (faktiskt fel, ohjälpsamt svar, olämpligt innehåll, etc.).
- Bifogar relevant konversationsmetadata.
- Skickar sorteringssammanfattningen till den konfigurerade **Feedback Endpoint** (se [Settings > Advanced](#settings-advanced)).

Detta minskar manuell gransknings tid genom att lyfta fram de mest kritiska problemen först.

## Settings > Advanced {#settings-advanced}

För att aktivera backend för återkoppling, konfigurera följande fält under **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL:en som tar emot POST-förfrågningar med feedback-payloads (JSON). |
| **Feedback API Key** | Bearer token som skickas i `Authorization`-headern för att autentisera inlämnade återkopplingar. |

Lämna båda fälten tomma för att inaktivera insamlingen av återkoppling. Individuella återkopplingsknappar förblir synliga för användarna, men inlämningar kommer inte att skickas vidare.

:::tip
Feedback endpointen måste acceptera en JSON-kropp med minst fälten `message_id`, `conversation_id`, `feedback_text` och `triage_category`. Se din endpointleverantörs dokumentation för det förväntade schemat.
:::
