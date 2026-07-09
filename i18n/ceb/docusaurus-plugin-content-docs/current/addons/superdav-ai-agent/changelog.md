---
title: Talaan sa mga kausaban
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Talaan sa mga Kausaban {#changelog}

## 1.18.0 — Gipagawas niadtong 2026-06-29 {#1180--released-on-2026-06-29}

### Bag-o {#new}

- **Mga himan sa Google Calendar** — basaha ang na-configure nga mga kalendaryo ug panghitabo alang sa mga awtomasyon nga nakasabot sa iskedyul
- **Pagmapa sa kontak ug mga tabang sa attendee** — ipares ang mga partisipante sa kalendaryo ngadto sa mga tiggamit ug kontak sa site
- **Mga ganghaan sa pagtugot sa tawo ug mga rekord sa pahinumdom** — ihunong kadiyot ang mga awtomasyon alang sa pagrepaso ug likayi ang doble nga mga pahibalo
- **TextBee SMS provider** — ipadala ang na-configure nga mga pahibalo sa text-message pinaagi sa TextBee
- **Advanced companion package** — idugang ang trusted-developer filesystem, database, WP-CLI, REST dispatcher, tigbuhat og plugin, git snapshot, pagdumala sa tiggamit, ug mga benchmark nga himan nga gilain og apod-apod gikan sa WordPress.org build

### Gipaayo {#improved}

- **Pag-setup sa gidumalang Superdav nga serbisyo** — idugang ang hosted service endpoints ug awtomatikong paghatag og koneksyon alang sa gisuportahang mga site
- **Pagputos sa release** — paghimo og bulag nga core ug Advanced ZIPs, imantala ang duha sa GitHub, ug ipadala lang ang core package ngadto sa WordPress.org

### Giayo {#fixed}

- **Kasaligan sa AI request** — paayohon ang pagpili sa modelo, request timeouts, default setup model, pagdumala sa reasoning-text, ug giya sa retry alang sa dili balidong tool calls
- **Pagpalig-on sa kalendaryo ug pahinumdom** — palig-ona ang Google Calendar tokens ug deduplication sa pahinumdom
- **Onboarding ug pagpadayon sa pagtugot** — ayohon ang paglunsad sa frontend onboarding ug ang confirmed ability resumes
- **Mga isyu sa pagrepaso sa WordPress.org packaging** — tubagon ang feedback sa pagrepaso sa pagputos alang sa core release

## 1.16.0 — Gipagawas niadtong 2026-05-20 {#1160--released-on-2026-05-20}

### Bag-o {#new-1}

- **Generate Logo SVG ability** — ang Theme Builder makahimo na ug maka-embed og custom logo SVGs nga adunay namespace-safe nga sanitisation
- **Pag-upload sa litrato sa discovery interview** — ang Theme Builder discovery interview karon naglakip og lakang sa pag-upload og litrato alang sa mas dato nga konteksto sa disenyo
- **Validate Palette Contrast ability** — susiha ang mga pares sa kolor alang sa pagsunod sa WCAG sa dili pa i-apply sa usa ka tema
- **Mga menu sa hospitality** — ang Theme Builder makahimo na og estrukturadong mga panid sa menu sa pagkaon ug ilimnon alang sa mga negosyo sa hospitality
- **Pag-render sa preview sa desktop ug mobile** — tan-awa daan ang imong disenyo sa desktop ug mobile devices atol sa pagpili sa design-direction
- **Parameter sa navigation label** — ang Create Menu ability karon nagsuporta og lahi nga `navigation_label` nga bulag sa titulo sa panid
- **Pagkaanaa sa Tier 1 nga himan** — ang sd-ai-agent/site-scrape karon usa na ka Tier 1 nga himan nga available by default sa Theme Builder

### Giayo {#fixed-1}

- **AI Client cache** — karon gisuportahan sa transients alang sa cross-request persistence, nga nagpugong sa pagkawala sa datos sa dugay nga agent tasks
- **Mga link sa aksyon sa row sa plugin** — gitul-id ug giusab ang ngalan alang sa katin-awan

## 1.10.0 — Gipagawas niadtong 2026-05-05 {#1100--released-on-2026-05-05}

### Bag-o {#new-2}

- **Tavily internet search** — idugang ang Tavily isip search provider alang sa mas dato nga mga resulta sa internet search uban sa Brave Search
- **Built-in skills nga nakasabot sa tema** — ang Block Themes, Classic Themes, Kadence Blocks, ug Kadence Theme skill guides karon kauban na sa plugin
- **Kapabilidad sa contact form sa site builder** — idugang ang contact form sa bisan unsang panid direkta gikan sa chat interface

### Gipaayo {#improved-1}

- **WooCommerce integration gi-refactor** — karon naggamit og native WooCommerce APIs alang sa mas maayong kasaligan ug compatibility
- **Awtomatikong mag-refresh ang lista sa provider** — kung bisan unsang plugin gi-activate o gi-deactivate

### Giayo {#fixed-2}

- **navigate-to ability** — giayo ang walay katapusang reload loop sa pipila ka admin pages
- **list-posts ability** — karon husto nang mo-resolve sa mga ngalan sa category ug tag ngadto sa slugs
- **WP-CLI commands** — gipahiuli ang nawalang namespace aliases human sa miaging refactor
- **Event automation** — hapsay nga modumala sa mga site diin ang automation tables wala pa mahimo
- **memory-save ability** — karon naggamit sa hustong namespace prefix sa system instruction builder
- **Scalar tool results** — karon husto nang giputos sa dili pa ibalik ngadto sa AI
- **Usage statistics** — karon husto nang modumala sa legacy ability key format sa upgrade gikan sa mas karaang mga bersyon
