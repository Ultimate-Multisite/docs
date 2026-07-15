---
title: Cyfderau cyffredinol
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Cyfderch Internet

Mae Gratis AI Agent v1.5.0 yn ychwanegu fäith **Cyfderch Internet** (Internet Search) sy'n sylw'r AI assistant i gael wybodaeth allweddol o'r web yn ystod siarad. Mae hyn yn cael ei gyflawni gan [Brave Search API](https://brave.com/search/api/) neu [Tavily API](https://tavily.com/).

## Sut mae hyn yn gweithio {#how-it-works}

Pan fydd cyfderch internet yn cael ei chwarae, gall y assistant gwneud cwestiynau i'r chyfderwr sydd wedi'i ddefnyddio pan mae'n meddwl bod angen wybodaeth allweddol neu oethol — fel news yn rhyddol, gysyniadau byddol, neu drafodau a gallai fod wedi newid ers y cyflawni'r model.

Mae'r enillyau yn cael eu cael eu cadw mewn amser byth ac yn cael eu cyflwyno i'r context (cyddeall) y assistant قبل iddo gynhyrchu ateb. Mae'r assistant yn dangos pan mae'n defnyddio enillyau cyfderch i ddewis ateb ar cwestiwn.

## Cyflawni Cyfderch Internet {#enabling-internet-search}

Mae cyfderch internet yn angen llapi API o'r chyfderwr sydd wedi'i ddefnyddio. I weld ei gyflawni:

1. Ymddangos i **Gratis AI Agent → Settings → Advanced**.
2. Llogi'r drwyll **Internet Search Provider** ac defnyddio neu **Brave Search** neu **Tavily**.
3. Rheoliwch eich llapi API yn y ffeil sydd wedi'i ddefnyddio. Mae linkau cyflawni ar gael yn y cyflym arall i'r ffeil hwnnw.
4. Clic ar **Save Settings** (Cadw Ystyriaethau).

Ar ôl cadw y llapi, mae'r fäith Cyfderch Internet yn cael ei ddefnyddio'n awtomatig i'r assistant.

## Brave Search {#brave-search}

### Gellio Llapi Brave Search API {#obtaining-a-brave-search-api-key}

1. Ymddangos ar y [Brave Search API page](https://brave.com/search/api/).
2. Cyflawni plan. Mae cyfres o ddefnydd yn cael ei gynnig gyda hanes cyhoeddiad (request limit) mewn manylion.
3. Copi eich llapi API o'r dashboard debydwr Brave Search.
4. Rheoliwch yllori i'r ffeil **Brave Search API Key** yn y setyniadau Gratis AI Agent.

### Gyflawniadau Defnydd {#usage-limits}

Mae defnyddio yn cael ei chynllunio gan Brave Search ar adilrolol ar gyfer nifer y cwestiynau a cael eu gwneud. Mae pob ateb AI sy'n gweithredu'r chwilio yn cael ei hyd yn oed fel un cwestiwn. Monitiorwch eich defnydd mewn [dashboard dewelwyr Brave Search](https://brave.com/search/api/) i ddarganfod ychwanegau anghyffredol.

## Tavily {#tavily}

Mae Superdav AI Agent v1.10.0 yn ychwanegu **Tavily** fel cyfider chwilio internet, gan offeru gysylltfadau chwilio mwy gyfoethog a fydduiadau ymchwil anhygoel.

### Cyflwyno Clai API Tavily {#obtaining-a-tavily-api-key}

1. Ymddangos i'r [peidiad API Tavily](https://tavily.com/).
2. Cyflwynwch cyfrifolion argyfwng. Mae y tier cyffredinol yn cael ei offertu gyda chylid cyfleus ar gyfer mlynediad.
3. Copi'r clai API eich o ddashboard Tavily.
4. Ymddangos ychwanegwch i'r field **Tavily API Key** mewn setegau Gratis AI Agent.

### Cyflwyno Cyflenau Defnyddio {#usage-limits-1}

Mae defnydd yn cael ei chynllunio gan Tavily ar adilrolol ar gyfer nifer y cyfathiad API a cael eu gwneud. Mae pob ateb AI sy'n gweithredu'r chwilio yn cael ei hyd fel un cyfathiad. Monitiorwch eich defnydd mewn [dashboard Tavily](https://tavily.com/) i ddarganfod ychwanegau anghyffredol.

## Dysgu Chwilio Internet {#disabling-internet-search}

Afn o gwblhau'r clai API o'r cyfider chwilio ar gyfer y chyfider chwilio weithredol a gadw. Bydd y gallu chwilio internet yn cael ei ddefnyddio i'r asiant.

:::note
Mae chwilio internet yn cytuno llawer i atebau oherwydd bod angen i'r asiant ei ailadrodd y canlyniadau chwilio قبل ychwanegu ateb. Ar gyfer cyfathiadau sy'n agoredig amser, meddwlwch aroli beth yw'r hanes chwilio real-time neu beth yw'r gwybodaeth sydd yn ei fod yn ddigon i'r asiant.
:::
