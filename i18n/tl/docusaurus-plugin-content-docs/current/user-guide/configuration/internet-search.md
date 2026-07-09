---
title: Paghahanap sa Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Search {#internet-search}

Ang Gratis AI Agent v1.5.0 ay nagdaragdag ng kakayahang **Internet Search** na nagpapahintulot sa AI assistant na kumuha ng napapanahong impormasyon mula sa web habang nakikipag-usap. Ito ay pinapagana ng [Brave Search API](https://brave.com/search/api/) o [Tavily API](https://tavily.com/).

## Paano Ito Gumagana {#how-it-works}

Kapag naka-enable ang internet search, awtomatikong magtatanong ang assistant sa iyong itinakdang search provider kapag napagtanto nito na ang isang tanong ay nangangailangan ng kasalukuyang impormasyon o panlabas na datos — halimbawa, mga bagong balita, live pricing, o dokumentasyon na maaaring nagbago mula noong training cutoff ng model.

Ang resulta ay kinukuha sa real-time at ipinapasok sa context ng assistant bago ito bumuo ng sagot. Ipinapakita ng assistant kung kailan ginamit nito ang mga search result upang sagutin ang isang tanong.

## Pag-enable ng Internet Search {#enabling-internet-search}

Kailangan ng internet search ng API key mula sa iyong napiling search provider. Para i-configure ito:

1. Pumunta sa **Gratis AI Agent → Settings → Advanced**.
2. Hanapin ang dropdown na **Internet Search Provider** at piliin ang **Brave Search** o **Tavily**.
3. Ilagay ang iyong API key sa kaukulang field. May mga link para mag-sign up sa tabi ng bawat field.
4. I-click ang **Save Settings**.

Kapag na-save na ang key, awtomatikong magagamit na ang kakayahang Internet Search para sa assistant.

## Brave Search {#brave-search}

### Pagkuha ng Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Bisitahin ang [Brave Search API page](https://brave.com/search/api/).
2. Mag-sign up para sa isang plano. Mayroong libreng antas na may limitasyon sa bilang ng request bawat buwan.
3. Kopyahin ang iyong API key mula sa Brave Search developer dashboard.
4. I-paste ito sa field na **Brave Search API Key** sa settings ng Gratis AI Agent.

### Mga Limitasyon sa Paggamit {#usage-limits}

Ang paggamit ay binabayaran ng Brave Search batay sa dami ng mga query na ginawa. Ang bawat AI response na nag-trigger ng search ay bilang isang query. Bantayan ang iyong usage sa [Brave Search developer dashboard](https://brave.com/search/api/) para maiwasan ang hindi inaasahang singil.

## Tavily {#tavily}

Ang Superdav AI Agent v1.10.0 ay nagdaragdag ng **Tavily** bilang alternatibong internet search provider, na nag-aalok ng mas mayamang resulta ng search at advanced research capabilities.

### Pagkuha ng Tavily API Key {#obtaining-a-tavily-api-key}

1. Pumunta sa [Tavily API page](https://tavily.com/).
2. Mag-sign up para sa isang account. Mayroong libreng tier na may limitasyon sa bilang ng request bawat buwan.
3. Kopyahin ang iyong API key mula sa Tavily dashboard.
4. I-paste ito sa field na **Tavily API Key** sa mga setting ng Gratis AI Agent.

### Mga Limitasyon sa Paggamit {#usage-limits-1}

Ang paggamit ay binabayaran ng Tavily batay sa dami ng ginawang API calls. Ang bawat AI response na nag-trigger ng search ay bilang isang call. Bantayan ang iyong usage sa [Tavily dashboard](https://tavily.com/) para maiwasan ang hindi inaasahang singil.

## Pagpapatigil sa Internet Search {#disabling-internet-search}

Tanggalin ang API key mula sa active search provider field at i-save. Hindi na magbibigay ng kakayahan sa internet search ang assistant.

:::note
Nagdaragdag ang internet search ng latency sa mga response dahil kailangang maghintay ang assistant para makuha ang resulta ng search bago bumuo ng sagot. Para sa mga sitwasyong sensitibo sa oras, isaalang-alang kung kinakailangan ba ang real-time search o kung sapat na ang built-in knowledge ng assistant.
:::
