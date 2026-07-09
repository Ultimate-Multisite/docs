---
title: Breytingaskrá
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Breytingaskrá

## 1.18.0 — Gefið út 2026-06-29

### Nýtt

- **Google Calendar verkfæri** — lesa stillt dagatöl og viðburði fyrir sjálfvirkni sem tekur mið af dagskrá
- **Tengiliðavörpun og hjálparar fyrir þátttakendur** — para þátttakendur í dagatali við notendur og tengiliði á vefsvæði
- **Samþykktarhlið manna og áminningaskrár** — gera hlé á sjálfvirkni til yfirferðar og forðast tvíteknar tilkynningar
- **TextBee SMS veitandi** — senda stilltar textaskilaboðatilkynningar í gegnum TextBee
- **Ítarlegur fylgipakki** — bæta við skráakerfis-, gagnagrunns-, WP-CLI-, REST dispatcher-, plugin builder-, git snapshot-, notendastjórnunar- og afkastaprófunarverkfærum fyrir trausta þróunaraðila, dreift aðskilið frá WordPress.org útgáfunni

### Bætt

- **Uppsetning á stýrðri Superdav þjónustu** — bæta við hýstum þjónustuendapunktum og sjálfvirkri tengingarútvegun fyrir studd vefsvæði
- **Útgáfupökkun** — byggja aðskilda core og Advanced ZIP-pakka, birta báða á GitHub og senda aðeins core-pakkann til WordPress.org

### Lagað

- **Áreiðanleiki AI-beiðna** — bæta val á líkani, tímamörk beiðna, sjálfgefið uppsetningarlíkan, meðhöndlun röksemdartexta og leiðbeiningar um endurtilraunir fyrir ógild verkfæraköll
- **Herðing dagatala og áminninga** — styrkja Google Calendar tokena og afritunarvörn áminninga
- **Nýliðun og áframhald samþykkta** — laga ræsingu nýliðunar í framenda og staðfest áframhald eiginleika
- **Yfirferðaratriði WordPress.org pökkunar** — bregðast við endurgjöf úr pökkunaryfirferð fyrir core-útgáfuna

## 1.16.0 — Gefið út 2026-05-20

### Nýtt

- **Generate Logo SVG eiginleiki** — Theme Builder getur nú búið til og fellt inn sérsniðin logo SVG með namespace-öruggri hreinsun
- **Upphleðsla mynda í könnunarviðtali** — könnunarviðtal Theme Builder inniheldur nú skref fyrir upphleðslu mynda til að gefa ríkara samhengi fyrir hönnun
- **Validate Palette Contrast eiginleiki** — athuga litapör með tilliti til WCAG-samræmis áður en þau eru notuð á þema
- **Matseðlar fyrir gestrisniþjónustu** — Theme Builder getur nú búið til skipulagðar matar- og drykkjarseðlasíður fyrir gestrisnifyrirtæki
- **Forskoðun á skjáborði og farsíma** — forskoðaðu hönnunina þína á skjáborðs- og fartækjum meðan hönnunarstefna er valin
- **Færibreyta fyrir leiðarkerfismerkingu** — Create Menu eiginleikinn styður nú aðskilið `navigation_label` sem er óháð síðutitli
- **Framboð Tier 1 verkfæra** — sd-ai-agent/site-scrape er nú Tier 1 verkfæri sem er sjálfgefið tiltækt í Theme Builder

### Lagað

- **AI Client skyndiminni** — er nú stutt af transients fyrir viðvarandi gögn milli beiðna og kemur í veg fyrir gagnatap í langkeyrandi agent-verkefnum
- **Aðgerðatenglar plugin-raðar** — leiðréttir og endurnefndir til skýrleika

## 1.10.0 — Gefið út 2026-05-05

### Nýtt

- **Tavily internetleit** — bæta Tavily við sem leitarveitanda fyrir ríkari internetleitarniðurstöður samhliða Brave Search
- **Innbyggð færni sem tekur mið af þemum** — færnileiðbeiningar fyrir Block Themes, Classic Themes, Kadence Blocks og Kadence Theme fylgja nú með plugin-inu
- **Eiginleiki fyrir samskiptaform í vefsíðusmíði** — bæta samskiptaformi við hvaða síðu sem er beint úr spjallviðmótinu

### Bætt

- **WooCommerce samþætting endursmíðuð** — notar nú innfædd WooCommerce API fyrir meiri áreiðanleika og samhæfni
- **Listi yfir veitendur endurnýjast sjálfkrafa** — þegar hvaða plugin sem er er virkjað eða afvirkjað

### Lagað

- **navigate-to eiginleiki** — lagaði endalausa endurhleðslulykkju á sumum stjórnandasíðum
- **list-posts eiginleiki** — leysir nú flokka- og merkjanöfn rétt yfir í slugs
- **WP-CLI skipanir** — endurheimti aliasa fyrir namespace sem vantaði eftir fyrri endursmíði
- **Sjálfvirkni viðburða** — meðhöndlar hnökralaust vefsvæði þar sem sjálfvirknitöflur hafa ekki enn verið búnar til
- **memory-save eiginleiki** — notar nú rétt namespace-forskeyti í smið kerfisleiðbeininga
- **Scalar verkfæraúttak** — er nú rétt vafið inn áður en það er skilað til AI
- **Notkunartölfræði** — meðhöndlar nú rétt eldra lykilsnið eiginleika við uppfærslu úr eldri útgáfum
