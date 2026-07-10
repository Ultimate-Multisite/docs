---
title: Kutsimbisa Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Kurungu Kunechira (Internet Search) {#internet-search}

Gratis AI Agent v1.5.0 inenge kuva nzira ya **Kurungu Kunechira (Internet Search)** inenge kutaura zvinhu zvinobva m'web wakati unenge uchitungamirira neAI assistant kuti iwe shandise mahengetsi ekutanga kubva m'web chiri. Izvi zvinhu zvinhasi nezvinhasi zvakagadzirwa ne [Brave Search API](https://brave.com/search/api/) kana [Tavily API](https://tavily.com/).

## Inenge Inenge Yakwanisa Kuti Iwe Kurungu Kunechira (How It Works) {#how-it-works}

Nekuti kurungu kunechira kunenge kuitwa, assistant inogona kuenda kuteerera (query) munzvimbo wako wekuchengetedza search provider kana iwe chinonzi — kana iwe chinonzi Brave Search kana Tavily — kana iwe chinonzi kuti chine zvinhu zvinobva m'web. Izvi zvinhasi zvinhasi nezvinhasi zvakagadzirwa neAI assistant nekuti inenge inoziva kuti mufungwaro (question) inoda mahengetsi ekutanga kana zvinhu zvinhasi — sei, kunge kune nyaya dzinobva m'web, mari yakare, kana zvinangwa zvakagadzirwa kuti zviri kuendesa panguva yakagadzirwa neAI model.

Zvinonzi kuenda kuteerera (retrieve) zvinhasi zvinhasi zvakagadzirwa uye kunge kuita m'context ya assistant panguva inenge inogona kuita response. Assistant inonyira kana inenge yakaita kuti iwe uone kuti inenge yakaitira kurungu kunechira kuti inenge inoziva mufungwaro.

## Kuratidza Kurungu Kunechira (Enabling Internet Search) {#enabling-internet-search}

Kurungu kunechira kunoda API key kubva munzvimbo wako wekuchengetedza search provider. Uye kuita izvi:

1.enda ku **Gratis AI Agent → Settings → Advanced**.
2.Tsvaga dropdown ya **Internet Search Provider** uye chine zvinhu zvinonzi **Brave Search** kana **Tavily**.
3.Chinjisa API key yako munzvimbo yakagadzirwa. Mufungwaro yekutanga (sign-up links) inenge inogona kuone panguva yaunenge uchinjisa mufungwaro.
4.Chinjisa **Save Settings**.

Nekuti key yakanzwa, kurungu kunechira kunenge kuitwa nekuti assistant inenge yakwanisa kutanga kubva m'web.

## Brave Search {#brave-search}

### Kuita API Key ya Brave Search (Obtaining a Brave Search API Key) {#obtaining-a-brave-search-api-key}

1.enda ku [Brave Search API page](https://brave.com/search/api/).
2.Chinjisa plan. Kune tier yakafanana inenge inogona kuonekwa nekuratidza mahengetsi ekutanga (free tier) nekuti kuna limit ya mufungwaro panguva yese.
3.Chinjisa API key yako kubva munzvimbo wako wekuchengetedza Brave Search developer dashboard.
4.Chinjisa iye mu field ye **Brave Search API Key** munzvimbo wekuchengetedza Gratis AI Agent settings.

### Limits Yekuti Iwe Uye (Usage Limits) {#usage-limits}

Kugadzirwa nekuita zvishanduro:

Kugadzirwa nekugona kutaura nezvemu, ndiri kuita izvi:

Kugadzirwa nekugonzi kwemashure anogona kubva pa Brave Search kunogone nemashure anogona kuenda. Mazuva onozivikanwa kuti unenge ukanga uri munzvimbo yakasiyana-yana. Chaka chiri mune zvinangwa zvakawanda.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 inenge inopa **Tavily** sechikamu chinobva pa kutsvaga m'internet, chinhu chinopara kuipa matare anogona kubva kune zvinhu zvakawanda uye kugadzirisa zvinhu zvinokosha.

### Kuva neAPI Key ya Tavily {#obtaining-a-tavily-api-key}

1. Ndosha pa [Tavily API page](https://tavily.com/).
2. Ndosha kuti uonekane (sign up) kuti uwe mabhuku. Chaka kune chine kufamba kwakawanda chinogona kuenda nekuita zvinhu zvinogone kubva mweya.
3. Ramba API key yako kubva mu Tavily dashboard.
4. Ramba iye mu field inosanganisira **Tavily API Key** mumazuva anonyanya (settings) ya Gratis AI Agent.

### Mabhuku ekugadzirwa {#usage-limits-1}

Kugadzirwa nekugonzi kwemashure anogone kubva pa Tavily kunogona kuenda nemabhuku anogone kubva mabhuku anogone kubva muviri. Chaka chiri munzvimbo yakasiyana-yana kuti uonekane zvinhu zvinokanganisira.

## Kupa Mashure Anogone Kubva pa Internet {#disabling-internet-search}

Fara API key yakanaka mu field inosanganisira search provider inotarisirwa uye ramba iye (save). Kutsvaga m'internet haizvo kuita latency (kufamba kwemashure) kubva kune matsvheru nekuti assistant anofanira kuenda zvinhu zvinogone kubva pa kutsvaga pfungwa nedanho dzinogona kuita. Kuti unenge uonekane zvakare, ramba iye kuti search inogone kuita latency.
