---
title: Mbiri ya zosintha
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Mbiri ya Zosintha

## 1.18.0 — Yatulutsidwa pa 2026-06-29 {#1180--released-on-2026-06-29}

### Zatsopano {#new}

- **Zida za Google Calendar** — werengani makalendala ndi zochitika zokonzedwa kuti ma automations azidziwa ndandanda
- **Kufananitsa ma contact ndi othandizira opezekapo** — fananitsani otenga nawo mbali pa kalendala ndi ogwiritsa ntchito pa tsamba komanso ma contact
- **Zipata zovomereza ndi munthu ndi marekodi a zikumbutso** — imitsani ma automations kuti awunikidwe ndipo pewani zidziwitso zobwerezedwa
- **Wopereka TextBee SMS** — tumizani zidziwitso za mauthenga a text zokonzedwa kudzera pa TextBee
- **Phukusi la advanced companion** — onjezani zida za filesystem ya developer wodalirika, database, WP-CLI, REST dispatcher, womanga pulagini, git snapshot, kasamalidwe ka ogwiritsa ntchito, ndi benchmark zomwe zimagawidwa padera ndi WordPress.org build

### Zakonzedwa Bwino {#improved}

- **Kukhazikitsa ntchito ya Managed Superdav** — onjezani ma endpoints a ntchito yochitidwa ndi ena ndi kupereka kulumikizana kokha kwa masamba othandizidwa
- **Kukonza phukusi la release** — pangani core ndi Advanced ZIPs zosiyana, falitsani zonse pa GitHub, ndipo tumizani phukusi la core lokha ku WordPress.org

### Zokonzedwa {#fixed}

- **Kudalirika kwa pempho la AI** — konzani kusankha model, request timeouts, default setup model, kasamalidwe ka reasoning-text, ndi malangizo obwereza poyitanitsa zida zosavomerezeka
- **Kulimbitsa kalendala ndi zikumbutso** — limbitsani ma token a Google Calendar ndi kuchotsa kubwereza kwa zikumbutso
- **Onboarding ndi kuyambiranso kwa approval** — konzani kuyambitsa onboarding pa frontend ndi kuyambiranso kwa luso lovomerezedwa
- **Nkhani za review ya phukusi la WordPress.org** — yankhani ndemanga za packaging review pa core release

## 1.16.0 — Yatulutsidwa pa 2026-05-20 {#1160--released-on-2026-05-20}

### Zatsopano {#new-1}

- **Luso la Generate Logo SVG** — Theme Builder tsopano ikhoza kupanga ndi kuyika ma SVG a logo achizolowezi okhala ndi sanitisation yotetezeka pa namespace
- **Kukweza chithunzi mu discovery interview** — discovery interview ya Theme Builder tsopano ili ndi sitepe yokweza chithunzi kuti pakhale nkhani ya kapangidwe yolemera
- **Luso la Validate Palette Contrast** — fufuzani ma colour pairs kuti agwirizane ndi WCAG musanawagwiritse ntchito pa theme
- **Menyu za hospitality** — Theme Builder tsopano ikhoza kupanga masamba a menyu a zakudya ndi zakumwa okhala ndi dongosolo kwa mabizinesi a hospitality
- **Kuwonetsa preview pa desktop ndi mobile** — onani preview ya design yanu pa zida za desktop ndi mobile panthawi yosankha design-direction
- **Parameter ya navigation label** — luso la Create Menu tsopano limathandiza `navigation_label` yosiyana ndi mutu wa tsamba
- **Kupezeka kwa zida za Tier 1** — sd-ai-agent/site-scrape tsopano ndi chida cha Tier 1 chopezeka mwachisawawa mu Theme Builder

### Zokonzedwa {#fixed-1}

- **Cache ya AI Client** — tsopano imathandizidwa ndi transients kuti isunge pakati pa requests, kupewa kutayika kwa data pa ntchito za agent zomwe zimayenda nthawi yayitali
- **Maulalo a zochita pa mzere wa pulagini** — zakonzedwa ndi kusinthidwa mayina kuti zimveke bwino

## 1.10.0 — Yatulutsidwa pa 2026-05-05 {#1100--released-on-2026-05-05}

### Zatsopano {#new-2}

- **Kusaka pa internet kwa Tavily** — onjezani Tavily ngati wopereka kusaka kuti mupeze zotsatira za kusaka pa internet zolemera limodzi ndi Brave Search
- **Maluso omangidwa mkati odziwa theme** — malangizo a maluso a Block Themes, Classic Themes, Kadence Blocks, ndi Kadence Theme tsopano amabwera ndi pulagini
- **Luso la contact form la site builder** — onjezani contact form patsamba lililonse mwachindunji kuchokera pa chat interface

### Zakonzedwa Bwino {#improved-1}

- **Kuphatikiza kwa WooCommerce kwakonzedwanso** — tsopano kumagwiritsa ntchito ma API achibadwa a WooCommerce kuti pakhale kudalirika ndi kugwirizana kwabwino
- **Mndandanda wa opereka umasinthidwa zokha** — pulagini iliyonse ikayatsidwa kapena kuzimitsidwa

### Zokonzedwa {#fixed-2}

- **luso la navigate-to** — loop yobwereza reload yopanda malire yakonzedwa pamasamba ena a admin
- **luso la list-posts** — tsopano limasandutsa molondola mayina a category ndi tag kukhala slugs
- **Malamulo a WP-CLI** — ma namespace aliases omwe anasowa abwezeretsedwa pambuyo pa refactor yam'mbuyomu
- **Event automation** — imagwira bwino masamba omwe matebulo a automation sanapangidwebe
- **luso la memory-save** — tsopano limagwiritsa ntchito namespace prefix yolondola mu system instruction builder
- **Zotsatira za zida za Scalar** — tsopano zimakulungidwa molondola zisanabwezeretsedwe ku AI
- **Ziwerengero za kugwiritsa ntchito** — tsopano zimagwira molondola legacy ability key format pa upgrade kuchokera ku ma version akale
