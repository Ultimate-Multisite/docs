---
title: Pōwhiri i te whakatūpāpāke o te pūrere wāhi i te rāhui
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Pātai i te Raukura (Internet Search)

Ko te Gratis AI Agent v1.5.0 e whānui i te kaha o **Internet Search**, e hiahia ana ki te tino pai, e hiahia ana ki te whai i mōhio hou mai i te wāhi hou (web) akorua i roto i te whaikōrero. Ko tēnei e whakamahinga ana i te [Brave Search API](https://brave.com/search/api/) heta ko te [Tavily API](https://tavily.com/).

## He aha ia mahi? (How It Works) {#how-it-works}

I roto i te wā e pēnei i te whānui i te Internet Search, ka taea te whakamahi ai te assistant ki te whakamārama ana i te search provider kua e whakatika koe i te whenua i te wā e whakaaro ana ia he mea tino nui te mōhio hou pei o ngā pūrongo hou, ngā whakaingo whakaa (live pricing), apo, au te whakamārama, heta ngā whakamārama he taea ai ki te whakahaupū i te model tēnei i te wā e whakatika i te training.

Ka whai ake ngā whakamārama i te wā real-time ka puta mai i te search pūrongo i te context o te assistant mō i te mea i roto i te whakautu ia. Ka whakaatu te assistant i te wā i he whakamahinga ia i ngā whakamārama search ki te whai i te pēnei i te whakahaupū i te question.

## Whakawhanaungatanga Internet Search (Enabling Internet Search) {#enabling-internet-search}

Ka tino hiahia ai te Internet Search i te API key mai i te search provider kua e whakatika koe. Hei whakamārama ia:

1. Pāinga ki **Gratis AI Agent → Settings → Advanced**.
2. Whakawātea ko te dropdown o te **Internet Search Provider** he whai ake, he titiro ki **Brave Search** pe ka **Tavily**.
3. Whakarite i tō API key i te fēka whakahaupū (field) e hāngai ana. Ka puta ngā link whakamārama (sign-up links) i runga i te fēka heke.
4. Whakawatea ko **Save Settings**.

I te wā e whakatika koe i te key, ka taea te whakamahi ai te kaha o Internet Search ki te assistant automatically.

## Brave Search {#brave-search}

### Whakamutunga API Key Brave Search (Obtaining a Brave Search API Key) {#obtaining-a-brave-search-api-key}

1. Pāinga ki te [Brave Search API page](https://brave.com/search/api/).
2. Whakawhanaungatanga i he plan. He option free (free tier) e hiahia ana ki te whakatika i te pēnei i heta monthly request limit.
3. Kopiko tō API key mai i te developer dashboard o Brave Search.
4. Whakarite ia i te fēka **Brave Search API Key** i ngā settings o Gratis AI Agent.

### Whakawhanaungatanga Whakamutunga (Usage Limits) {#usage-limits}

Whakaritea i te whakamahi e pētea atu ana e Brave Search ahau i runga i te whakatū o ngā whakamārama (queries) e whakamahia. Ko te whaiaro response AI ko e whakačara te whakamārama he tino whakamārama (query) ata. Titiro i te whakamahi mo te [Brave Search developer dashboard](https://brave.com/search/api/) kia tūnga atu i ngā pētea whakahauata (charges) e hiahia ana koe.

## Tavily {#tavily}

Ko Superdav AI Agent v1.10.0 e puta mai ana ki **Tavily** he wahi whakamārama internet search, e tino pai ake ngā whakamārama o te whakatū me ngā mahi tino whaiora i te whakaahua (research capabilities).

### Whakamāua API Key o Tavily {#obtaining-a-tavily-api-key}

1. Pānga ki te [Tavily API page](https://tavily.com/).
2. Pānga atu mō akaupā. He taringa (free tier) e pētea ana me te whakataunga (limit) o whakamārama ata ko e pētea ana.
3. Kopako i tō API key mo te dashboard o Tavily.
4. Paste i ai i te **Tavily API Key** field i ngā whakaritenga o Gratis AI Agent.

### Whakataunga Whakamahi (Usage Limits) {#usage-limits-1}

Ko te whakamahi e pētea atu ana e Tavily i runga i te whakatū o ngā API calls e whakamahia. Ko te ai response AI ko e whakačara te whakamārama he tino call ata. Titiro i tō whakamahi mo te [Tavily dashboard](https://tavily.com/) kia tūnga atu i ngā pētea whakahauata e hiahia ana koe.

## Whakamutunga Internet Search {#disabling-internet-search}

Whakaahua i te API key mo te wahi o te search active me save. Ko te mahi o internet search e hoki mai nei ko e hoki mai ai te mahi o te assistant.

:::note
Ko te internet search e puta mai i te whakatika (latency) ki ngā response ahiko, i roto i te mea kua whakaaro atu te assistant kia whai i ngā whakamārama o te search mō te whakamaoritanga o te whakataunga. Mo ngā wā pēnei i he tino whakahauata o te wā (time-sensitive use cases), he tino pai koe ki te whakaaro ahau: he tino tika ana te search i te wā real-time, apo he mō te mātauranga e hoki mai i te assistant?
:::
