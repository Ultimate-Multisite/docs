---
title: Gukoresha uburyo bwo gushaka ku Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Urugero mu Ubwumwebwe (Internet Search) {#internet-search}

Gratis AI Agent v1.5.0 yagira ubushobozi bwo gukoresha **Internet Search** (Ubwumwebwe bw'ubwumwebwe) kuko yagira uburyo bwo gutangira umuntu w'ubwumwebwe ku rwego rwa kera mu gihe cy'umuryango. Icyo ni cyitwa n'ubushobozi bwa [Brave Search API](https://brave.com/search/api/) cyangwa [Tavily API](https://tavily.com/).

## Uburyo Bwo Gukora Icyo {#how-it-works}
Iyo ubwumwebwe bw'ubwumwebwe bugaragara, umuntu w'ubwumwebwe ashobora gukoresha uburyo bwa search wakoze mu gihe yashobora kumenya ko ikibazo cyo cyo gutanga ibyerekeye igihe cy'umwihariko cyangwa ibindi by'ubwumwebwe - urugero, ibyerekeye za nyaho z'u Rwanda, ubushobozi bwa buri gihe, cyangwa inyandiko zikwiye gukoreshwa kandi zishobora yagize uburyo bw'ibindi mu gihe cy'umwihariko cy'ubwumwebwe.

Ibyo byose bigera mu gihe cy'ubwumwebwe kandi bigera mu gihe cy'umuntu w'ubwumwebwe mbere yashobora gukora uburyo bwo guhagarara umuntu w'ubwumwebwe mu gihe yashobora gutanga isobanuro. Umuntu w'ubwumwebwe yagira uburyo bwo kumenya iyo yashobaye gukoresha ibyerekeye ubwumwebwe kugira ngo atangire igisubizo.

## Gukoresha Internet Search {#enabling-internet-search}
Ubwumwebwe bw'ubwumwebwe buhagarara ku buryo bwa API key mu gihe cyo wakoze uburyo bwo gutanga ibyerekeye ubwumwebwe. Kuko wifuza gukora iki:

1. Gukoresha **Gratis AI Agent → Settings → Advanced**.
2. Gushaka igice cy'Internet Search Provider (Ubwumwebwe bw'ubwumwebwe) kandi ugira uburyo bwo gukoresha **Brave Search** cyangwa **Tavily**.
3. Gutangira API key yawe mu gihe cyo kera. Urugero, hari amakuru y'uko wibone mu gihe cyo gutanga ibyerekeye uburyo bwa Brave cyangwa Tavily.
4. Gukoresha **Save Settings** (Gukoresha Icyemezo).

Iyo API key igaragara, ubushobozi bwo Internet Search buhagarara ku buryo bwa umuntu w'ubwumwebwe mbere yashobora gukora uburyo bwo guhagarara.

## Brave Search {#brave-search}
### Gutangira Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Gukoresha [Brave Search API page](https://brave.com/search/api/).
2. Gutangira uburyo bwo gutanga (plan). Hari uburyo bw'umwihariko (free tier) kandi hari igihe cyo gukoresha ibyerekeye mu gihe cy'umwuka.
3. Gukopya API key yawe ku dashboard ya Brave Search developer.
4. Gutangira mu **Brave Search API Key** mu gihe cyo kera mu Gratis AI Agent settings.

### Icyemezo cyo Gukoresha {#usage-limits}

Urugero ryo mu gihe cyangwa uburyo bwo gukoresha (Usage) bishobora guhindurwa n'ubushobozi bw'Inyandiko ya Brave Search ku gukoresha amakoresho y'uwo. Iki gikorwa cyiza cyane: Icyemezo cy'Umuco (AI response) cyose cyo gutera umusaruro (search) kigira ikubwiriza nk'umusaruro (query) igice cyacyo. Kugira ngo ushuye n'ibyo bishobora gukera mu buryo bw'ibindi, ushuye mu [Brave Search developer dashboard](https://brave.com/search/api/).

## Tavily {#tavily}

Superdav AI Agent v1.10.0 yagize **Tavily** nk'umusaruro (provider) w'internet cyane, kandi yugira ibyerekeye uburyo bwo gukoresha amakoresho y'ubumenyi n'ibindi by'ubwujgwa bwiza mu guteka ibyo.

### Gukoresha Tavily API Key {#obtaining-a-tavily-api-key}

1. Gukoresha [Tavily API page](https://tavily.com/).
2. Gutera umwanya (Sign up) ku aka kanya. Hari uburyo bwo gukoresha cyane (free tier) kandi hari igice cy'umwihariko cyo gutera amakoresho mu gihe cyiza.
3. Gukora API key yawe ku dashboard ya Tavily.
4. Gutera aya ma key mu ikoreshye **Tavily API Key** mu gice cyo gutera AI Agent (Gratis AI Agent settings).

### Igice cyo Gukoresha (Usage Limits) {#usage-limits-1}

Urugero ryo guhindurwa n'u Tavily ku buryo bwo gukoresha amakoresho y'API. Icyemezo cy'Umuco cyose cyo gutera umusaruro kigira ikubwiriza nk'umusaruro (call). Kugira ngo ushuye mu gihe cyiza, ushuye ku [Tavily dashboard](https://tavily.com/).

## Guhindura Uburyo bwo Gutera Umusaruro (Disabling Internet Search) {#disabling-internet-search}

Gusubiza API key mu gice cyo gutera umusaruro w'igice cy'ubumenyi kandi ushuye. Icyemezo cyo gutera umusaruro kigira ikubwiriza nk'umusaruro (latency) kubera ko AI Agent yaba ifite uburyo bwo gukora ibyo mu gihe cyo guteka amakoresho y'umusaruro mbere yuko yugira icyo cyemezo. Icyo cyangwa se, ushuye niba umusaruro w'internet (Internet Search) si ari igice cyo kubyara imisoro itari yashobora gukera mu gihe cyiza.

:::note
Uburyo bwo gutera umusaruro w'internet (Internet search) rishobora guhindura uburyo bwo gukoresha ibyo (latency) kuko AI Agent igomba kwifashisha ibyo byo guteka amakoresho y'umusaruro mbere yuko yugira icyo cyemezo. Kugira ngo ushuye mu gihe cyiza, ushuye niba umusaruro w'internet (real-time search) si ari igice cyo kubyara imisoro itari yashobora gukera mu gihe cyiza cyangwa se uburyo bwo guteka ibyo byo AI Agent.
:::
