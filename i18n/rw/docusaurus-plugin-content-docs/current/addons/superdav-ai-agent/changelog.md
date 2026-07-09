---
title: Inyandiko y'impinduka
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Amateka y'impinduka

## 1.18.0 — Yasohotse ku 2026-06-29

### Ibishya

- **Ibikoresho bya Google Calendar** — soma calendars n'ibyabaye byagenwe kugira ngo automations zishingire kuri gahunda
- **Guhuza contact n'abafasha b'abitabiriye** — huza abitabiriye calendar n'abakoresha urubuga na contacts
- **Inzugi zo kwemezwa n'umuntu n'inyandiko z'ibyibutsa** — hagarika automations kugira ngo zisuzumwe kandi wirinde notifications zisubirwamo
- **TextBee SMS provider** — ohereza notifications z'ubutumwa bugufi zagenwe ukoresheje TextBee
- **Pakeji y'inyongera yateye imbere** — ongeramo ibikoresho bya filesystem y'umutezimbere wizewe, database, WP-CLI, REST dispatcher, plugin builder, git snapshot, gucunga abakoresha, na benchmark bitangwa bitandukanye na build ya WordPress.org

### Byanonosowe

- **Igenamiterere rya serivisi ya Superdav icungwa** — ongeramo service endpoints zicumbikiwe no gutegura connection mu buryo bwikora ku mbuga zishyigikiwe
- **Gupakira release** — kubaka core na ZIPs zateye imbere bitandukanye, kubitangaza byombi kuri GitHub, no kohereza pakeji ya core gusa kuri WordPress.org

### Byakosowe

- **Kwizerwa kwa AI request** — kunoza guhitamo model, request timeouts, default setup model, gutunganya reasoning-text, n'ubuyobozi bwo kongera kugerageza ku tool calls zitemewe
- **Gukomeza Calendar n'ibyibutsa** — gukomeza Google Calendar tokens no kudasubiramo ibyibutsa
- **Onboarding no gukomeza approvals** — gukosora itangizwa rya onboarding kuri frontend no gukomeza ubushobozi bwemejwe
- **Ibibazo by'isuzuma ryo gupakira WordPress.org** — gukemura feedback y'isuzuma ryo gupakira kuri core release

## 1.16.0 — Yasohotse ku 2026-05-20

### Ibishya

- **Ubushobozi bwa Generate Logo SVG** — Theme Builder ubu ishobora gukora no gushyiramo logo SVGs zihariye zifite isukura ritekeye namespace
- **Gushyiraho ifoto mu kiganiro cyo kuvumbura** — ikiganiro cyo kuvumbura cya Theme Builder ubu kirimo intambwe yo gushyiraho ifoto kugira ngo haboneke design context ikungahaye
- **Ubushobozi bwa Validate Palette Contrast** — genzura amabara abiri kugira ngo yemezwe ko akurikiza WCAG mbere yo kuyashyira kuri theme
- **Menus z'ubwakiranyi** — Theme Builder ubu ishobora gukora amapaji ya menu y'ibiribwa n'ibinyobwa yubakitse neza ku bucuruzi bw'ubwakiranyi
- **Kwerekana preview kuri desktop na mobile** — reba design yawe kuri desktop no ku bikoresho bya mobile mu gihe cyo guhitamo icyerekezo cya design
- **Parameter ya label ya navigation** — ubushobozi bwa Create Menu ubu bushyigikira `navigation_label` yihariye itandukanye n'umutwe w'ipaji
- **Kuboneka kw'igikoresho cya Tier 1** — sd-ai-agent/site-scrape ubu ni igikoresho cya Tier 1 kiboneka by'ibanze muri Theme Builder

### Byakosowe

- **Cache ya AI Client** — ubu ishyigikiwe na transients kugira ngo igumeho hagati ya requests, ikumira gutakaza data ku mirimo ya agent imara igihe kirekire
- **Plugin row action links** — byakosowe kandi byongera kwitwa amazina asobanutse

## 1.10.0 — Yasohotse ku 2026-05-05

### Ibishya

- **Gushakisha internet kwa Tavily** — ongeramo Tavily nka search provider kugira ngo haboneke ibisubizo by'ishakisha rya internet bikungahaye kurushaho hamwe na Brave Search
- **Ubuhanga bwubakiwemo busobanukiwe na theme** — imfashanyigisho z'ubuhanga za Block Themes, Classic Themes, Kadence Blocks, na Kadence Theme ubu zizana na plugin
- **Ubushobozi bwa contact form bwa site builder** — ongeramo contact form kuri paji iyo ari yo yose uhereye muri chat interface

### Byanonosowe

- **WooCommerce integration yavuguruwe** — ubu ikoresha WooCommerce APIs kavukire kugira ngo yizerwe kurushaho kandi ihuzagurika neza
- **Urutonde rwa providers rwisubiramo mu buryo bwikora** — igihe plugin iyo ari yo yose ikorejwe cyangwa ihagaritswe

### Byakosowe

- **ubushobozi bwa navigate-to** — hakosowe infinite reload loop kuri zimwe mu paji za admin
- **ubushobozi bwa list-posts** — ubu buhuza neza amazina ya category na tag na slugs
- **WP-CLI commands** — hasubijwe namespace aliases zari zabuze nyuma ya refactor yabanje
- **Event automation** — ifata neza imbuga aho automation tables zitararemwa
- **ubushobozi bwa memory-save** — ubu bukoresha namespace prefix nyayo muri system instruction builder
- **Scalar tool results** — ubu zipfunyikwa neza mbere yo gusubizwa kuri AI
- **Imibare y'imikoreshereze** — ubu ifata neza imiterere ya legacy ability key igihe hazamurwa version uhereye kuri versions za kera
