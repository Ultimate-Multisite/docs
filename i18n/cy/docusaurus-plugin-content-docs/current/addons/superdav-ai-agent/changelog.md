---
title: Log newidiadau
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Cofnod newidiadau {#changelog}

## 1.18.0 — Rhyddhawyd ar 2026-06-29 {#1180--released-on-2026-06-29}

### Newydd {#new}

- **Offer Google Calendar** — darllen calendrion a digwyddiadau wedi’u ffurfweddu ar gyfer awtomeiddiadau sy’n ymwybodol o amserlen
- **Mapio cysylltiadau a chynorthwywyr mynychwyr** — paru cyfranogwyr calendr â defnyddwyr a chysylltiadau’r safle
- **Gatiau cymeradwyaeth ddynol a chofnodion atgoffa** — seibio awtomeiddiadau ar gyfer adolygiad ac osgoi hysbysiadau dyblyg
- **Darparwr SMS TextBee** — anfon hysbysiadau neges destun wedi’u ffurfweddu drwy TextBee
- **Pecyn cydymaith uwch** — ychwanegu offer system ffeiliau datblygwr dibynadwy, cronfa ddata, WP-CLI, dosbarthwr REST, adeiladwr plugin, ciplun git, rheoli defnyddwyr, a meincnodi a ddosberthir ar wahân i adeilad WordPress.org

### Gwell {#improved}

- **Gosodiad gwasanaeth Superdav a reolir** — ychwanegu endpoints gwasanaeth lletyol a darpariaeth cysylltiad awtomatig ar gyfer safleoedd a gefnogir
- **Pecynnu rhyddhau** — adeiladu ZIPs craidd ac Advanced ar wahân, cyhoeddi’r ddau ar GitHub, ac anfon y pecyn craidd yn unig i WordPress.org

### Wedi’i drwsio {#fixed}

- **Dibynadwyedd ceisiadau AI** — gwella dewis model, terfynau amser ceisiadau, model gosod diofyn, trin testun rhesymu, ac arweiniad ailgeisio ar gyfer galwadau offer annilys
- **Caledu calendr ac atgoffa** — cryfhau tocynnau Google Calendar a dad-ddyblygu atgoffa
- **Ymuno ac ailddechrau cymeradwyaeth** — trwsio lansiadau ymuno frontend ac ailddechrau galluoedd a gadarnhawyd
- **Materion adolygiad pecynnu WordPress.org** — mynd i’r afael ag adborth adolygiad pecynnu ar gyfer y rhyddhad craidd

## 1.16.0 — Rhyddhawyd ar 2026-05-20 {#1160--released-on-2026-05-20}

### Newydd {#new-1}

- **Gallu Cynhyrchu Logo SVG** — gall Theme Builder bellach gynhyrchu ac ymgorffori SVGs logo personol gyda glanweithdra diogel o ran namespace
- **Llwytho llun i fyny yn y cyfweliad darganfod** — mae cyfweliad darganfod Theme Builder bellach yn cynnwys cam llwytho llun i fyny ar gyfer cyd-destun dylunio cyfoethocach
- **Gallu Dilysu Cyferbyniad Palet** — gwirio parau lliwiau am gydymffurfiaeth WCAG cyn eu cymhwyso i thema
- **Bwydlenni lletygarwch** — gall Theme Builder bellach gynhyrchu tudalennau bwydlen bwyd a diod strwythuredig ar gyfer busnesau lletygarwch
- **Rendro rhagolwg bwrdd gwaith a symudol** — rhagolwg o’ch dyluniad ar ddyfeisiau bwrdd gwaith a symudol yn ystod dewis cyfeiriad dylunio
- **Paramedr label llywio** — mae gallu Create Menu bellach yn cefnogi `navigation_label` ar wahân i deitl y dudalen
- **Argaeledd offer Haen 1** — mae sd-ai-agent/site-scrape bellach yn offeryn Haen 1 sydd ar gael yn ddiofyn yn Theme Builder

### Wedi’i drwsio {#fixed-1}

- **Storfa AI Client** — bellach wedi’i chefnogi gan transients ar gyfer parhad rhwng ceisiadau, gan atal colli data ar dasgau agent hirhoedlog
- **Dolenni gweithredu rhes plugin** — wedi’u cywiro a’u hailenwi er eglurder

## 1.10.0 — Rhyddhawyd ar 2026-05-05 {#1100--released-on-2026-05-05}

### Newydd {#new-2}

- **Chwilio rhyngrwyd Tavily** — ychwanegu Tavily fel darparwr chwilio ar gyfer canlyniadau chwilio rhyngrwyd cyfoethocach ochr yn ochr â Brave Search
- **Sgiliau mewnol sy’n ymwybodol o thema** — mae canllawiau sgiliau Block Themes, Classic Themes, Kadence Blocks, a Kadence Theme bellach yn cael eu cynnwys gyda’r plugin
- **Gallu ffurflen gyswllt adeiladwr safle** — ychwanegu ffurflen gyswllt at unrhyw dudalen yn uniongyrchol o’r rhyngwyneb sgwrsio

### Gwell {#improved-1}

- **Integreiddiad WooCommerce wedi’i ailffactorio** — bellach yn defnyddio APIs brodorol WooCommerce ar gyfer gwell dibynadwyedd a chydnawsedd
- **Rhestr darparwyr yn adnewyddu’n awtomatig** — pan gaiff unrhyw plugin ei actifadu neu ei ddadactifadu

### Wedi’i drwsio {#fixed-2}

- **gallu navigate-to** — trwsio dolen ail-lwytho ddiddiwedd ar rai tudalennau gweinyddol
- **gallu list-posts** — bellach yn datrys enwau categorïau a thagiau yn gywir i slugs
- **Gorchmynion WP-CLI** — adfer aliasau namespace coll ar ôl ailffactorio blaenorol
- **Awtomeiddio digwyddiadau** — trin yn osgeiddig safleoedd lle nad yw tablau awtomeiddio wedi’u creu eto
- **gallu memory-save** — bellach yn defnyddio’r rhagddodiad namespace cywir yn adeiladwr cyfarwyddyd y system
- **Canlyniadau offer sgalar** — bellach wedi’u lapio’n gywir cyn cael eu dychwelyd i’r AI
- **Ystadegau defnydd** — bellach yn trin fformat allwedd gallu etifeddol yn gywir wrth uwchraddio o fersiynau hŷn
