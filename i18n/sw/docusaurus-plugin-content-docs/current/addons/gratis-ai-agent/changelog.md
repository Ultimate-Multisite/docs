---
title: Orodha ya mabadiliko
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Iliachiriwa tarehe 2026-04-28

### Vipya

- **Uwezo wa `create_contact_form`** — unaunda fomu ya mawasiliano kwa kutumia plugin ya fomu iliyoaktifishwa (Contact Form 7, WPForms, Fluent Forms, au Gravity Forms) na inarejesha shortcode tayari ya kuwekwa kwenye chapisho au ukurasa wowote.
- **Uwezo wa `set_featured_image`** — unatoa picha kuu (featured image) kwenye chapisho au ukurasa kutoka kwa ID ya kiambatisho ilipo ya Media Library au kutoka URL ya mbali; unapakua picha kiotomatiki wakati URL inatolewa.
- **Uwezo wa `batch_create_posts`** — unaunda chapisho nyingi kwa wito mmoja wa uwezo (ability). Unasaidia vigezo (parameters) sawa na `create_post`, hutoa ripoti ya mafanikio/kushindwa kwa kila chapisho, na una hali ya hiari ya `stop_on_error`.
- **Kigezo cha `page_template`** — kimeongezwa kwenye `create_post` na `update_post`. Kinatoa faili ya muundo wa ukurasa wa PHP (k.m., `page-full-width.php`) wakati wa kuunda au kusasisha. Tuma string tupu kwa `update_post` kurudi kwenye muundo wa kiwango cha mada (theme default).
- **Uwezo wa kuchukua picha za skrini kutoka upande wa mteja (Client-side screenshot abilities)** — `capture_screenshot`, `compare_screenshots`, na `review_page_design`. Huchukua picha za skrini kamili au za sehemu ya kuonekana (viewport) za kurasa halisi kupitia headless browser wa upande wa seva, analinganisha picha mbili, na kupata mapitio ya muundo yanayotokana na AI yanayofunika mpangilio, fonti, rangi, na uwezo wa kufikiwa (accessibility).
- **Ajeneti tano zilizojengwa ndani (Five built-in agents)** — Content Writer, Site Builder, Design Studio, Plugin Manager, na Support Assistant. Kila ajenti ana seti maalum ya zana, prompt ya mfumo iliyobadilishwa, na mapendekezo ya kuanzia. Inaweza kubadilishwa kupitia **Agent Picker** mpya kwenye kichwa cha chat. Tazama [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Bendera za vipengele (Feature flags)** — tab mpya ya **Settings → Feature Flags** na swichi za udhibiti wa ufikiaji (kuzuia kwa wasimamizi, kuzuia kwa wasimamizi wa mtandao, ufikiaji wa wanachama, zima kwa wasio wanachama) na chaguo za chapa (ficha attribution ya footer, jina la ajenti maalum, ficha agent picker, tumia icon ya tovuti kama avatar ya chat). Tazama [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Kurejesha kikao cha mwisho (Restore last session)** — sehemu ya chat sasa inapakia mazungumzo ya hivi karibuni kiotomatiki wakati wa kupakia ukurasa na wakati wa kufungua widget, kwa hivyo muktadha haupotei kamwe kupitia urambazishaji wa kurasa.
- **Viungo vya kitendo cha plugin (Plugin action links)** — viungo vya haraka kwenda Settings na Abilities Registry sasa vinaonekana kwenye skrini ya WordPress **Plugins → Installed Plugins** chini ya maelezo ya plugin.

### Imerekebishwa

- **Jaribio la upya la chanzo cha picha (Image source retry)** — ajenti sasa inajaribu upya vyanzo vyote vilivyowekwa vya picha huru kabla ya kurudi kwenye picha iliyotokana na AI wakati wa kushindwa kwa upakaji.
- **Panel ya taarifa ya mfumo (Model info panel)** — inaonekana kila wakati kwenye kichwa cha chat; haionekani tena baada ya ujumbe wa kwanza.
- **Tabia ya kusonga kiotomatiki (Auto-scroll behaviour)** — kusonga kiotomatiki kunasimama wakati mtumiaji anasonga juu kusoma; kitufe kinachosonga **Scroll to bottom** kinaonekana na kufungwa kiotomatiki wakati mtumiaji anafika kwenye ujumbe wa hivi karibuni.
- **UI ya Agent Picker** — imerekebishwa kama overlay ya form-table na icons za ajenti kila moja, ikifanya iwe rahisi kutambua na kubadilisha ajenti kwa kuangalia kwa haraka.
- **Vipande vya JS vinavyopakuliwa kwa uvivu (Lazy-loaded JS chunks)** — bundle ya JavaScript ya awali ya widget ya chat sasa imegawanywa katika vipande vinavyopakuliwa kwa uvivu, ikopunguza ukubwa wa bundle ya awali kwa 75–90%.
- **Kubadilisha muundo wa widget ya chat (Chat widget redesign)** — icon ya AI iliyounganishwa inachukua nafasi ya avatar ya awali iliyobadilishwa; inalingana na mfumo wa ajenti uliunjengwa ndani.
- **Kuunda viungo vya URL (URL linkification)** — URL zinazoonekana kwenye ujumbe wa mfumo na kwenye bubbles za ujumbe wa makosa sasa zinaonyeshwa kama viungo vinavyobonyezwa.

### Kurekebishwa

- **Uwezo wa kugundua abilities (Ability discoverability)** — maelezo, marejeleo ya prompt ya mfumo, na mpangilio wa nafasi (namespace) zimekorekebishwa ili uwezo wote waonekane kwenye orodha ya zana ya ajenti kwa uhakika.
- **Cache ya Providers** — providers sasa zimehifadhiwa kwa kiwango cha tovuti kupitia kaunta ya toleo, kuzuia matatizo ya providers zilizopitwa muda wake kwenye mitandao ya multisite.
- **`ability_invalid_output`** — imetatuliwa kwenye handlers 12 za uwezo; zote zinarejesha majibu ya JSON yenye muundo sahihi.
- **`pending_client_tool_calls` pipeline** — imounganishwa kutoka mwisho hadi mwisho ili wito wa zana za upande wa mteja kukamilika kwa usahihi na kurejesha matokeo kwa mfumo.
- **Drawe ya historia (History drawer)** — mabadiliko ambayo hayana uwezo wa kurejeshwa yameondolewa kutoka orodha ya kurejesha; kiungo cha **View full history** sasa kinafanya kazi kwa usahihi.
- **Mfumo wa Mabadiliko/Kurejesha (Changes/revert system)** — makosa matano tofauti yamekorekebishwa na kuunganishwa chini ya kiolesura kipya cha admin.
- **Toast ya Kuokoa Settings** — arifa ya snackbar sasa inaonekana kwa uhakika baada ya kubonyeza **Save Settings**.
- **Menyu ya muktadha ya kuvunja (Trash context menu)** — chaguo la **Delete Permanently** limeongezwa ili vitu viweze kufutwa kabisa bila kuacha kuonekana kwenye sehemu ya kuvunja.
- **Hariri na Tuma upya (Edit & resend)** — kubonyeza icon ya kuhariri sasa huweka katika hali ya kuhariri tu kwa ujumbe uliobonyezwa, sio ujumbe wote kwenye mtiririko.
- **Urefu wa mpangilio wa chat (Chat layout height)** — sehemu ya chat inabadilisha urefu wake wakati maudhui yanayowekwa na plugin (notices za admin, banners) yanaonekana juu ya ukurasa, kuzuia eneo la kuingiza kuondoka nje ya skrini.

---

## 1.4.0 — Iliachiriwa tarehe 2026-04-09

### Vipya

- **Amri ya vipimo vya WP-CLI** (`wp gratis-ai-agent benchmark`) — inatendesha seti ya vipimo vya Agent Capabilities v1 kutoka kwenye mstari wa amri kwa ajili ya CI pipelines na kazi za tathmini ya mfumo. Inasaidia kuendesha kwa kila swali, kubadilisha providers/models, na matokeo ya JSON/CSV.
- **Seti ya vipimo vya Agent Capabilities v1** — seti iliyopangwa ya prompts tata, zenye hatua nyingi zinazofanya mazoezi ya uwezo wote, na ripoti ya alama na token/muda.
- **Uwezo wa Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Usajili unadumu kupitia upya kwa kutumia options table.
- **Uwezo wa Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Inasaidia taxonomies za kiwango na zile za kawaida (flat) na slugs za kuandika za hiari.
- **Uwezo wa Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inajumuisha presets tano zilizochaguliwa: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Uwezo wa Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Inasoma na kuandika maadili ya theme.json kupitia WordPress Global Styles API.
- **Uwezo wa usimamizi wa Menyu ya Urambazaji (Navigation Menu management ability)** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Inasaidia menyu zilizo ndani (nested menus) na kuweka eneo la mada.
- **Uwezo wa Usimamizi wa Options** — `get_option`, `set_option`, `delete_option`, `list_options`. Inajumuisha blocklist ya usalama iliyo ndani inayolinda options muhimu za WordPress dhidi ya mabadiliko.
- **Abilities Registry Inayoweza Kupakuliwa (Installable Abilities Registry)** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Gundua na anza kutumia vifurushi vya uwezo vilivyogawanywa kama plugins za WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Mipango ya ujenzi wa tovuti ya hatua nyingi na kugundua plugins, marejeleo ya matokeo ya hatua, ufuatiliaji wa maendeleo, na urejesho wa makosa kiotomatiki.
- **Swali la vipimo vya tovuti ya mgahawa** (`q-restaurant-website`) — jaribio la mwisho hadi mwisho linalofunika usajili wa CPT, design system, urambazaji, na kugundua plugins.
- **Plugins za muunganishi wa AI provider** zimeongezwa kwenye blueprints za WordPress Playground kwa kuweka upatikanaji wa eneo la maendeleo ya ndani.

### Imerekebishwa

- README imosasishwa na hati za muunganishi wa AI provider na maelekezo ya kuweka.

### Kurekebishwa

- Kushindwa kwa vipimo 25 vya PHPUnit kwenye tawi la `main` vimekorekebishwa.
- Muundo wa URL ya matoleo ya GitHub katika `blueprint.json` umerekebishwa.
- Namba za kazi (Task ID) zimebadilishwa ili kuepuka migogoro na IDs za zamani.

---

## 1.3.x

_Maelezo ya matoleo ya awali yanadumishwa kwenye repository ya plugin._
