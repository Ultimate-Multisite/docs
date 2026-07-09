---
title: Klantfeedback en probleemrapportage
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback van Gebruikers en Probleemrapportage {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 introduceert een ingebouwd systeem voor feedback en probleemrapportage waarmee eindgebruikers onjuiste antwoorden kunnen markeren en problemen direct vanuit de chatinterface kunnen melden. Dit systeem omvat toestemmingsbeheer, een geautomatiseerde rapportagecommando en AI-ondersteunde triage op de backend.

## Duim-omlaag Knop {#thumbs-down-button}

Elke bericht die door de AI-assistent wordt verzonden, toont een **duim-omlaag** (👎) knop. Wanneer een gebruiker hierop klikt, kan hij een antwoord markeren als onjuist of niet nuttig.

- De knop verschijnt bij hover naast elk bericht van de assistent.
- Door erop te klikken, opent de **Feedback Toestemmingsmodal**.
- De feedback wordt gekoppeld aan het conversatiedraad en het specifieke bericht.

## Feedback Toestemmingsmodal {#feedback-consent-modal}

Wanneer een gebruiker op de duim-omlaag knop klikt, verschijnt er een toestemmingsmodal voordat er gegevens worden verzonden. De modal:

- Legt uit welke informatie wordt verzameld (conversatie-uittreksel, browsercontext).
- Vraagt de gebruiker om te bevestigen dat hij akkoord gaat met het delen van deze gegevens.
- Biedt een vrije tekstveld waar de gebruiker kan beschrijven wat er misging.
- Biedt een **Annuleren** optie om te sluiten zonder te verzenden.

Er wordt geen feedback geregistreerd totdat de gebruiker dit expliciet bevestigt.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Aan het einde van een conversatie kan de assistent een **auto-prompt feedback banner** weergeven — een niet-opdringerige melding die vraagt of de sessie nuttig was.

Deze banner verschijnt automatisch op basis van de conversatielengte en uitkomstheuristieken. Het linkt naar dezelfde feedbackflow als de duim-omlaag knop. Gebruikers kunnen de banner sluiten zonder feedback te geven.

## /report-issue Slash Command {#report-issue-slash-command}

Gebruikers kunnen de feedbackflow direct activeren door `/report-issue` in het chat-inputveld te typen. Dit commando:

- Opent de Feedback Toestemmingsmodal onmiddellijk.
- Vul het beschrijvingsveld vooraf in met context over het huidige gesprek.
- Hiermee kunnen gebruikers aanvullende details toevoegen voordat ze verzenden.

Het `/report-issue` commando is beschikbaar in alle chatmodi (inline, zwevend widget, full-screen).

## AI-Assisted Triage {#ai-assisted-triage}

De ingediende feedback wordt doorgestuurd naar een AI-triage-laag die:

- Het rapport categoriseert (feitelijke fout, onbruikbaar antwoord, ongepast materiaal, enz.).
- Relevante conversatiemetadata bijvoegt.
- De triage-samenvatting doorstuurt naar het geconfigureerde **Feedback Endpoint** (zie [Settings > Advanced](#settings-advanced)).

Dit vermindert de tijd voor handmatige beoordeling door de meest kritieke problemen eerst te signaleren.

## Settings > Advanced {#settings-advanced}

Om de feedback backend in te schakelen, configureer de volgende velden onder **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | De URL die POST-verzoeken met feedback payloads (JSON) ontvangt. |
| **Feedback API Key** | Bearer token dat in het `Authorization` header wordt gestuurd voor het authenticeren van feedbacksubmissions. |

Laat beide velden leeg om de verzameling van feedback uit te schakelen. De individuele feedbackknoppen blijven zichtbaar voor gebruikers, maar de submissions worden niet doorgestuurd.

:::tip
Het feedback endpoint moet een JSON body accepteren met minstens de velden `message_id`, `conversation_id`, `feedback_text` en `triage_category`. Raadpleeg de documentatie van uw endpointprovider voor het verwachte schema.
:::
