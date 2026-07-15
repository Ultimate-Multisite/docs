---
title: Pangita sa Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Search

Ang Gratis AI Agent v1.5.0 naghatag og abilidad nga **Internet Search** nga nagtugot sa AI assistant nga mangon og bag-ong impormasyon gikan sa web atol sa usa ka panag-istoryahanay. Kini gi-power pinaagi sa [Brave Search API](https://brave.com/search/api/) o [Tavily API](https://tavily.com/).

## Unsaon Niini Paglihok {#how-it-works}

Kung ang internet search gipahimo, ang assistant mahimong awtomatikong mag-query sa imong gi-configure nga search provider kung makita niini nga kinahanglan og kasamtang o gawas nga impormasyon ang usa ka pangutana — pananglitan, bag-ong balita, live pricing, o dokumentasyon nga mahimong nausab sukad sa training cutoff sa model.

Ang mga resulta kuhaon sa real time ug i-inject sa context sa assistant sa dili pa kini maghimo og tubag. Ang assistant magpahibalo kung gigamit niya ang search results aron matubag ang usa ka pangutana.

## Pag-enable sa Internet Search {#enabling-internet-search}

Kinahanglan nimo og API key gikan sa imong gipili nga search provider para sa internet search. Aron kini i-configure:

1. Adto sa **Gratis AI Agent → Settings → Advanced**.
2. Pangitaa ang dropdown nga **Internet Search Provider** ug piliha ang **Brave Search** o **Tavily**.
3. I-enter ang imong API key sa katumbas nga field. Ang mga link sa sign-up anaa sa sunod sa matag field.
4. I-click ang **Save Settings**.

Human ma-save ang key, ang abilidad sa Internet Search awtomatikong magamit sa assistant.

## Brave Search {#brave-search}

### Pagkuha og Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Bisitaha ang [Brave Search API page](https://brave.com/search/api/).
2. Mag-sign up alang sa usa ka plano. Aduna'y libre nga lebel nga adunay limitasyon sa monthly request.
3. Kopyaha ang imong API key gikan sa Brave Search developer dashboard.
4. I-paste kini sa field nga **Brave Search API Key** sa settings sa Gratis AI Agent.

### Usage Limits {#usage-limits}

Ang paggamit kinikwenta sa Brave Search base sa gidaghanon sa mga query nga gihimo. Ang matag AI response nga mag-trigger og search nagbilang og usa ka query. Monitora ang imong paggamit sa [Brave Search developer dashboard](https://brave.com/search/api/) aron malikayan ang dili inaasahang bayad.

## Tavily {#tavily}

Ang Superdav AI Agent v1.10.0 nagdugang og **Tavily** isip alternatibo nga internet search provider, nga nagtanyag og mas dagkong resulta sa pagpangita ug advanced research capabilities.

### Pagkuha og Tavily API Key {#obtaining-a-tavily-api-key}

1. Bisitaha ang [Tavily API page](https://tavily.com/).
2. Mag-sign up para sa usa ka account. Naa'y libre nga tier nga adunay limit sa monthly request.
3. Kopyaha ang imong API key gikan sa Tavily dashboard.
4. I-paste kini sa field nga **Tavily API Key** sa Gratis AI Agent settings.

### Mga Limitasyon sa Paggamit {#usage-limits-1}

Ang paggamit kinikwenta sa Tavily base sa gidaghanon sa mga API call nga gihimo. Ang matag AI response nga mag-trigger og search nagbilang og usa ka call. Monitora ang imong paggamit sa [Tavily dashboard](https://tavily.com/) aron malikayan ang dili inaasahang bayad.

## Pagsalikway sa Internet Search {#disabling-internet-search}

Tangtangon ang API key gikan sa active search provider field ug i-save. Ang abilidad sa Internet Search dili na gihatag sa assistant.

:::note
Ang internet search nagdadagdag og latency sa mga response tungod kay kinahanglan maghulat ang assistant sa mga resulta sa search sa dili pa makahatag og tubag. Para sa mga sitwasyon nga sensitibo sa oras, hunahunaa kung kinahanglan ba ang real-time search o kung sapat na ang built-in knowledge sa assistant.
:::
