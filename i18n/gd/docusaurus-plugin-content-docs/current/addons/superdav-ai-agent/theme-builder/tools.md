---
title: Innealan agus Rèiteachadh
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Innealan agus Rèiteachadh {#tools-and-configuration}

Bidh Theme Builder a’ cleachdadh seata de dh’innealan gus anailis a dhèanamh air, dealbhadh, agus togail a dhèanamh air an làrach WordPress agad. Ann an tionndadh 1.16.0, **tha sd-ai-agent/site-scrape a-nis na inneal Ìre 1**, ga dhèanamh ri fhaighinn gu bunaiteach ann an Theme Builder. Tha Superdav AI Agent v1.18.0 cuideachd a’ toirt a-steach pacaid chompanach Adhartach a tha air a sgaoileadh air leth airson sruthan-obrach luchd-leasachaidh earbsach; chan eil na h-innealan sin nam pàirt den phrìomh phacaid WordPress.org agus feumar an stàladh is ùghdarrachadh air leth.

## Innealan a tha rim faighinn {#available-tools}

### Innealan Ìre 1 (Ri fhaighinn an-còmhnaidh) {#tier-1-tools-always-available}

Tha innealan Ìre 1 rim faighinn gu bunaiteach ann an Theme Builder gun rèiteachadh a bharrachd sam bith.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Adhbhar:** Dèan anailis air làraichean-lìn a tha ann mu thràth gus brosnachadh dealbhaidh, structar susbaint, agus gnìomhachd a tharraing a-mach.

**Comasan:**

- **Anailis làraich-lìn** — sgrìob agus dèan anailis air làraichean-lìn farpaisich no làraichean brosnachaidh
- **Tarraing a-mach dealbhaidh** — aithnich dathan, cruthan-clò, agus pàtrain cruth-laighe
- **Structar susbaint** — tuig eagrachadh agus rangachd dhuilleagan
- **Lorg feartan** — aithnich plugins agus gnìomhachd
- **Anailis coileanaidh** — thoir sùil air astar dhuilleagan agus optimachadh
- **Anailis SEO** — lèirmheas air tagaichean meta agus dàta structaraichte

**Cleachdadh:**

```
Dèan anailis air dealbhadh example.com agus cleachd e mar bhrosnachadh airson an làraich agam.
```

**Na tha e a’ tarraing a-mach:**

- Pailead dhathan agus cleachdadh dhathan
- Clò-eòlas (cruthan-clò agus meudan)
- Structar cruth-laighe agus farsaingeachd
- Pàtrain seòlaidh
- Eagrachadh susbaint
- Cleachdadh ìomhaighean agus mheadhanan
- Eileamaidean eadar-ghnìomhach
- Freagarrachd do dh’innealan-làimhe

**Cuingealachaidhean:**

- Chan urrainn dha làraichean fo dhìon facail-fhaire a sgrìobadh
- Tha e a’ toirt urram do robots.txt agus poileasaidhean làraich
- Dh’fhaodadh nach glac e susbaint dhinimigeach
- Dh’fhaodadh anailis chuingealaichte a bhith aig làraichean le tòrr JavaScript
- Dh’fhaodadh làraichean mòra barrachd ùine a ghabhail airson anailis

### Innealan Ìre 2 (Roghainneil) {#tier-2-tools-optional}

Tha innealan Ìre 2 rim faighinn nuair a thèid an comasachadh gu soilleir ann an roghainnean Theme Builder.

#### Anailisean Adhartach {#advanced-analytics}

A’ toirt seachad meatairean coileanaidh mionaideach:

- Amannan luchdachadh dhuilleagan
- Core Web Vitals
- Sgòr SEO
- Sgòr ruigsinneachd
- Sgòr dheagh chleachdaidhean

#### Leasaiche Susbaint {#content-optimizer}

A’ dèanamh anailis agus a’ moladh leasachaidhean airson:

- So-leughaidh
- Optimachadh SEO
- Cleachdadh phrìomh-fhaclan
- Structar susbaint
- Suidheachadh gairm-gu-gnìomh

### Innealan Ìre 3 (Premium) {#tier-3-tools-premium}

Feumaidh innealan Ìre 3 rèiteachadh a bharrachd no feartan premium.

#### Gineadair Susbaint AI {#ai-content-generator}

A’ gineadh susbaint airson:

- Tuairisgeulan thoraidhean
- Duilleagan seirbheis
- Puist-bhloga
- Tuairisgeulan meta
- Teacsa gairm-gu-gnìomh

#### Innealan Dealbhaidh Adhartach {#advanced-design-tools}

A’ toirt seachad comasan dealbhaidh adhartach:

- Gineadh CSS gnàthaichte
- Cruthachadh beòthachaidhean
- Dealbhadh eileamaidean eadar-ghnìomhach
- Teòiridh dhathan adhartach
- Optimachadh clò-eòlais

### Innealan Com-pàirteach Adhartach (Pacaid air leth) {#advanced-companion-tools-separate-package}

Tha am pacaid chompanach Adhartach air a sgaoileadh air leth bho fhoillseachadh bunaiteach Superdav AI Agent. Tha e an dùil airson àrainneachdan earbsach luchd-leasachaidh agus sealbhadairean-làraich far a bheil rianairean gu soilleir a’ leigeil leis an agent innealan le buaidh mhòr a chleachdadh.

Faodaidh comasan a’ chompanach Adhartach a bhith a’ gabhail a-steach:

- **Innealan siostam-fhaidhlichean** — sgrùd agus atharraich faidhlichean ceadaichte ann an àrainneachdan earbsach
- **Innealan stòr-dàta** — ceasnaich no ùraich dàta làraich nuair a tha e ùghdarraichte gu soilleir
- **Innealan WP-CLI** — ruith àitheantan cumail-suas agus sgrùdaidh WordPress
- **Innealan sgaoilidh REST** — gairm endpoints REST clàraichte tro shruthan-obrach sgaoilidh fo smachd
- **Innealan togail plugin** — cruthaich bun-structar agus leasaich code plugin gu h-iterative
- **Innealan snapshot Git** — cruthaich snapshots mus dèanar obrachaidhean luchd-leasachaidh cunnartach
- **Innealan stiùireadh luchd-cleachdaidh** — cuidich le lèirmheas no atharrachadh chlàran luchd-cleachdaidh far a bheil cead
- **Innealan benchmark** — ruith benchmarks coileanaidh no comais airson lèirmheas leasachaidh

Na sgrìobh sgrìobhainnean mun deidhinn mar innealan Theme Builder a tha rim faighinn san fharsaingeachd airson gach stàladh. Chan eil iad rim faighinn ach nuair a tha am pacaid chompanach Adhartach air a stàladh, air a chomasachadh, agus air a chuingealachadh ri rianairean earbsach.

## Rèiteachadh Innealan {#tool-configuration}

### A’ comasachadh innealan {#enabling-tools}

Gus innealan a bharrachd a chomasachadh ann an Theme Builder:

1. Seòl gu **Gratis AI Agent → Settings**
2. Rach gu **Theme Builder → Tools**
3. Cuir innealan air/dheth mar a dh’fheumar
4. Sàbhail roghainnean

### Ceadan Innealan {#tool-permissions}

Feumaidh cuid de dh’innealan ceadan:

- **Sgrìobadh làraich** — feumaidh ruigsinneachd eadar-lìn
- **Anailisean** — feumaidh amalachadh Google Analytics
- **Gineadh susbaint** — feumaidh iuchraichean API
- **Feartan adhartach** — dh’fhaodadh gum feum iad ballrachd premium
- **Innealan com-pàirteach Adhartach** — feumaidh iad am pacaid Adhartach a tha air a sgaoileadh air leth agus earbsa shoilleir rianaire

### Iuchraichean API agus Teisteanasan {#api-keys-and-credentials}

Rèitich iuchraichean API airson innealan a tha gan iarraidh:

1. Rach gu **Gratis AI Agent → Settings → API Keys**
2. Cuir a-steach teisteanasan airson gach inneal
3. Dèan deuchainn air a’ cheangal
4. Sàbhail gu tèarainte

### A’ stàladh a’ Phacaid Chompanach Adhartach {#installing-the-advanced-companion-package}

Tha am pacaid chompanach Adhartach air fhoillseachadh air leth bhon phrìomh ZIP WordPress.org. Stàlaich e a-mhàin bhon t-sianal sgaoilidh pròiseict oifigeil airson an fhoillseachaidh, agus an uair sin cuingich ruigsinneachd ri rianairean earbsach. Dèan lèirmheas air geataichean aonta daonna agus giùlan snapshot git mus comasaich thu innealan siostam-fhaidhlichean, stòr-dàta, WP-CLI, sgaoilidh REST, togail plugin, stiùireadh luchd-cleachdaidh, no benchmark air làrach riochdachaidh.

## A’ cleachdadh sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Cleachdadh Bunaiteach {#basic-usage}

Iarr air Theme Builder anailis a dhèanamh air làrach-lìn:

```
Dèan anailis air dealbhadh làrach an fharpaisich agam aig competitor.com
agus mol leasachaidhean dealbhaidh airson an làraich agam.
```

### Anailis Shònraichte {#specific-analysis}

Iarr seòrsaichean sònraichte de dh’anailis:

```
Tarraing a-mach am pailead dhathan bho example.com agus cleachd e mar bhrosnachadh.
```

```
Dèan anailis air structar seòlaidh example.com agus cuir eagrachadh
coltach ris an sàs air an làrach agam.
```

```
Thoir sùil air freagarrachd do dh’innealan-làimhe example.com agus dèan cinnteach gu bheil an làrach agam
a cheart cho freagarrach.
```

### Anailis Choimeasach {#comparison-analysis}

Dèan coimeas eadar iomadh làrach:

```
Dèan coimeas eadar dealbhaidhean site1.com agus site2.com agus cruthaich dealbhadh
a chuireas còmhla na h-eileamaidean as fheàrr bhon dà chuid.
```

## Cuingealachaidhean is Beachdachaidhean Innealan {#tool-limitations-and-considerations}

### Cuingealachadh reata {#rate-limiting}

- Tha sgrìobadh fo chuingealachadh reata gus cus-luchd air an fhrithealaiche a sheachnadh
- Dh’fhaodadh grunn iarrtasan chun na h-aon làraich a bhith air an slaodadh sìos
- Dh’fhaodadh làraichean mòra barrachd ùine a ghabhail airson mion-sgrùdadh

### Cruinneas Susbaint {#content-accuracy}

- Dh’fhaodadh nach tèid susbaint dhinimigeach a ghlacadh gu h-iomlan
- Dh’fhaodadh susbaint air a renderadh le JavaScript a bhith neo-iomlan
- Dh’fhaodadh nach bi dàta fìor-ùine air a nochdadh
- Dh’fhaodadh cuid de shusbaint a bhith air cùl paywalls

### Beachdachaidhean Laghail is Beusanta {#legal-and-ethical-considerations}

- Thoir urram do robots.txt agus poileasaidhean na làraich
- Na sgrìob susbaint fo dhlighe-sgrìobhaidh airson ath-riochdachadh
- Cleachd mion-sgrùdadh airson brosnachadh, chan ann airson copaidh
- Dearbhaich gu bheil còraichean agad susbaint a chaidh a thoirt a-mach a chleachdadh
- Lean teirmichean seirbheis nan làraichean a chaidh a mhion-sgrùdadh

### Buaidh air Coileanadh {#performance-impact}

- Dh’fhaodadh sgrìobadh làraichean mòra ùine a ghabhail
- Dh’fhaodadh grunn sgrìobaidhean aig an aon àm a bhith nas slaodaiche
- Tha ceangailteachd lìonraidh a’ toirt buaidh air astar
- Dh’fhaodadh seataichean-dàta mòra barrachd giullachd iarraidh

## Cleachdaidhean as Fheàrr {#best-practices}

### A’ Cleachdadh Mion-sgrùdadh Làraich {#using-site-analysis}

1. **Dèan mion-sgrùdadh air grunn làraichean** — cruinnich brosnachadh bho ghrunn thùsan
2. **Cuir fòcas air structar** — ionnsaich pàtranan cruth is eagrachaidh
3. **Thoir a-mach dathan** — cleachd paileatan dhathan mar phuingean-tòiseachaidh
4. **Dèan sgrùdadh air clò-ghrafaigs** — aithnich cothlamadh chruthan-clò a tha a’ còrdadh riut
5. **Dèan lèirmheas air seòladh** — tuig eagrachadh chlàran-taice

### Sgrìobadh Beusanta {#ethical-scraping}

1. **Thoir urram do robots.txt** — lean stiùiridhean na làraich
2. **Na dèan copaidh de shusbaint** — cleachd mion-sgrùdadh airson brosnachadh a-mhàin
3. **Dearbhaich còraichean** — dèan cinnteach gun urrainn dhut susbaint a chaidh a thoirt a-mach a chleachdadh
4. **Aithnich tùsan** — thoir creideas do thùsan brosnachaidh
5. **Lean teirmichean** — gèill ri teirmichean seirbheis na làraich

### A’ Meudachadh Èifeachdas nan Innealan {#maximizing-tool-effectiveness}

1. **Bi sònraichte** — iarr seòrsaichean sònraichte de mhion-sgrùdadh
2. **Thoir co-theacsa seachad** — mìnich adhbhar na làraich agad
3. **Suidhich dùilean** — thoir cunntas air na h-amasan dealbhaidh agad
4. **Dèan ath-aithris** — grinnich stèidhichte air toraidhean
5. **Cuir innealan còmhla** — cleachd grunn innealan airson mion-sgrùdadh coileanta

## Fuasgladh Dhuilgheadasan {#troubleshooting}

### Cha Sgrìob an Làrach {#site-wont-scrape}

- Thoir sùil a bheil an làrach ri fhaighinn gu poblach
- Dearbhaich gu bheil robots.txt a’ ceadachadh sgrìobadh
- Feuch làrach eile
- Thoir sùil air ceangal an eadar-lìn
- Cuir fios gu taic ma mhaireas an duilgheadas

### Mion-sgrùdadh Neo-iomlan {#incomplete-analysis}

- Dh’fhaodadh susbaint dhinimigeach a bhith aig an làrach
- Dh’fhaodadh nach eil JavaScript air a renderadh gu h-iomlan
- Dh’fhaodadh làraichean mòra timeout
- Feuch ri duilleagan sònraichte a mhion-sgrùdadh an àite sin
- Iarr seòrsaichean sònraichte de mhion-sgrùdadh

### Coileanadh Slaodach {#slow-performance}

- Gabhaidh làraichean mòra barrachd ùine airson mion-sgrùdadh
- Tha grunn sgrìobaidhean aig an aon àm nas slaodaiche
- Tha ceangailteachd lìonraidh a’ toirt buaidh air astar
- Feuch rè uairean nach eil cho trang
- Dèan mion-sgrùdadh air earrannan nas lugha an toiseach

## Sgrìobhainnean Co-cheangailte {#related-documentation}

- [Agallamh Lorg](./discovery-interview.md) — cruinnich fiosrachadh dealbhaidh
- [Stiùireadh Dealbhaidh](./design-direction.md) — grinnich an dealbhadh agad
- [Clàran-taice Aoigheachd](./hospitality-menus.md) — cruthaich duilleagan chlàran-taice
