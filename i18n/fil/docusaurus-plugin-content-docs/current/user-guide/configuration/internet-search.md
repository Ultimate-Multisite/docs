---
title: Paghahanap sa Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Paghahanap sa Internet

Nagdaragdag ang Gratis AI Agent v1.5.0 ng kakayahang **Internet Search** na nagpapahintulot sa AI assistant na kumuha ng napapanahong impormasyon mula sa web habang nag-uusap. Pinapagana ito ng [Brave Search API](https://brave.com/search/api/) o ng [Tavily API](https://tavily.com/).

## Paano Ito Gumagana {#how-it-works}

Kapag naka-enable ang internet search, awtomatikong magtatanong ang assistant sa iyong naka-configure na search provider kapag napagpasyahan nitong kailangan ng tanong ang kasalukuyan o panlabas na impormasyon — halimbawa, mga balitang nangyari kamakailan, live pricing, o dokumentasyon na maaaring nagbago mula nang matapos ang training ng model.

Ang mga resulta ay kinukuha sa real time at ipinapasok (injected) sa konteksto ng assistant bago ito bumuo ng sagot. Ipapahiwatig ng assistant kung gumamit ito ng search results para sagutin ang tanong.

## Pag-e-enable ng Internet Search {#enabling-internet-search}

Kailangan ng internet search ang isang API key mula sa napili mong search provider. Para i-configure ito:

1. Pumunta sa **Gratis AI Agent → Settings → Advanced**.
2. Hanapin ang *dropdown* na **Internet Search Provider** at piliin ang **Brave Search** o **Tavily**.
3. Ilagay ang iyong API key sa kaukulang *field*. May mga *sign-up link* na nakalagay sa tabi ng bawat *field*.
4. I-click ang **Save Settings**.

Kapag na-save na ang key, awtomatikong magagamit ng assistant ang kakayahan ng Internet Search.

## Brave Search {#brave-search}

### Pagkuha ng Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Bisitahin ang [Brave Search API page](https://brave.com/search/api/).
2. Mag-sign up para sa isang plano. Mayroong *free tier* na available na may limitasyon ng request kada buwan.
3. Kopyahin ang iyong API key mula sa Brave Search developer dashboard.
4. I-paste ito sa **Brave Search API Key** *field* sa settings ng Gratis AI Agent.

### Usage Limits {#usage-limits}

Ang paggamit ay binibigyan ng bayad ng Brave Search batay sa bilang ng mga *query* na ginawa. Ang bawat sagot ng AI na nagti-trigger ng search ay binibilang bilang isang *query*. Bantayan ang iyong paggamit sa [Brave Search developer dashboard](https://brave.com/search/api/) upang maiwasan ang hindi inaasahang singil.

## Tavily {#tavily}

Nagdaragdag ang Superdav AI Agent v1.10.0 ng **Tavily** bilang alternatibong internet search provider, na nag-aalok ng mas mayamang search results at advanced research capabilities.

### Pagkuha ng Tavily API Key {#obtaining-a-tavily-api-key}

1. Bisitahin ang [Tavily API page](https://tavily.com/).
2. Mag-sign up para sa isang account. Mayroong *free tier* na available na may limitasyon ng request kada buwan.
3. Kopyahin ang iyong API key mula sa Tavily dashboard.
4. I-paste ito sa **Tavily API Key** *field* sa settings ng Gratis AI Agent.

### Usage Limits {#usage-limits-1}

Ang paggamit ay binibigyan ng bayad ng Tavily batay sa bilang ng mga API call na ginawa. Ang bawat sagot ng AI na nagti-trigger ng search ay binibilang bilang isang *call*. Bantayan ang iyong paggamit sa [Tavily dashboard](https://tavily.com/) upang maiwasan ang hindi inaasahang singil.

## Pag-disable ng Internet Search {#disabling-internet-search}

Tanggalin ang API key mula sa *field* ng aktibong search provider at i-save. Hindi na iaalok sa assistant ang kakayahan ng Internet Search.

:::note
Nagdaragdag ang internet search ng *latency* sa mga sagot dahil kailangang maghintay ang assistant para sa search results bago makabuo ng sagot. Para sa mga sitwasyon na sensitibo sa oras, isaalang-alang kung kailangan ba talaga ang real-time search o kung sapat na ang built-in na kaalaman ng assistant.
:::
