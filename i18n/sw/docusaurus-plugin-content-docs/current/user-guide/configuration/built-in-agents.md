---
title: Wawakala Ndani
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Zilizojengwa

Gratis AI Agent v1.9.0 inatoa agents tano zilizojengwa ndani, kila moja ikiwa imewekwa awali na seti maalum ya zana, maelekezo ya mfumo (system prompt) yanayolenga jambo moja, na mapendekezo ya kuanzia yanayolingana na kazi za kawaida katika eneo hilo. Kubadilisha kati ya agents hizi kunabadilisha uwezo wa msaidizi na jinsi anavyojibu — bila wewe kufanya mipangilio yoyote.

## Agent ni Nini?

Agent kila moja ni wasifu wa mipangilio wenye jina linalojumuisha:

- **Tools (Zana)** — uwezo ambao agent anaruhusiwa kutumia (k.m., Mwandishi wa Maudhui ana uwezo wa kuunda machapisho; Studio ya Ubunifu ina uwezo wa CSS na theme.json).
- **System prompt (Maelekezo ya Mfumo)** — maelekezo yanayoweka sauti, vipaumbele, na vikwazo vya agent.
- **Suggestions (Mapendekezo)** — maandishi yaliyojitayarisha katika kiolesura cha mazungumzo kukusaidia kuanza haraka.

## Kupata Agent Picker

1. Fungua sehemu ya **Gratis AI Agent** kwenye menyu ya upangishwaji wa WordPress (admin sidebar).
2. Bonyeza **icon ya agent** kwenye kona ya juu kushoto ya kichwa cha mazungumzo (icon inabadilika kuonyesha agent anayefanya kazi).
3. **Agent Picker** inafunguliwa kama tabaka la form-table. Agent kila mmoja anatajwa na icon yake, jina, na maelezo mafupi ya mstari mmoja.
4. Bonyeza safu ya agent ili kuifanya ianze kazi. Kichwa cha mazungumzo kinabadilika mara moja.

Unaweza pia kubadilisha agents katikati ya mazungumzo — maelekezo ya mfumo ya agent mpya yanatumika kuanzia ujumbe ujao.

## Agents Tano Zilizojengwa Ndani

### Content Writer (Mwandishi wa Maudhui)

**Lengo:** Kuunda na kuhariri machapisho, kurasa, na fomu za mawasiliano.

**Zana Zinazopatikana:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Inafanya vizuri nini:**
- Kuandika na kuchapisha machapisho ya blog kutoka kwa muhtasari au mpangilio wa mawazo.
- Kuunda makundi ya kurasa za kufika (landing pages) kwa tovuti mpya.
- Kuunda fomu za mawasiliano na maswali.
- Kuweka picha za sifa (featured images) kwenye machapisho kutoka kwa URL au kutafuta.

**Mapendekezo ya Kuanzia:**
- *Andika makala ya blog ya maneno 500 kuhusu faida za WordPress multisite.*
- *Tengeneza kurasa za Kuhusu, Huduma, na Mawasiliano na kuchapisha.*
- *Ongeza fomu ya maswali ya uhifadhi kwenye ukurasa wa Mawasiliano.*

---

### Site Builder (Mjenzi wa Tovuti)

**Lengo:** Kuunda tovuti kwa jumla kuanzia amri moja tu.

**Zana Zinazopatikana:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Inafanya vizuri nini:**
- Kuunda mpango wa ujenzi wa tovuti wenye hatua nyingi kwa aina ya biashara iliyoainishwa.
- Kutekeleza kila hatua kwa uhuru — muundo, maudhui, navigashoni, na usanifu.
- Kurejesha kutoka kwa makosa katikati ya mpango bila kuhitaji mwingiliano wa kibinadamu.
- Kusakinisha plugins zinazopendekezwa kama sehemu ya ujenzi.
- Kuunda fomu za mawasiliano moja kwa moja kutoka kwenye kiolesura cha mazungumzo (Superdav AI Agent v1.10.0+).

**Mapendekezo ya Kuanzia:**
- *Jenga tovuti ya wasanii wa picha yenye aina ya machapisho ya wasifu, ukurasa wa uhifadhi, na fomu ya mawasiliano.*
- *Tengeneza tovuti ya mgahawa yenye menyu ya mtandaoni, saa za kazi, na fomu ya maswali ya kuhifadhi meza.*
- *Weka upangishwaji wa tovuti ya mshauri huru yenye kurasa za huduma, sehemu ya wasifu, na blog.*
- *Ongeza fomu ya mawasiliano kwenye ukurasa wa Mawasiliano kwa kutumia mjenzi wa tovuti.*

---

### Design Studio (Studio ya Ubunifu)

**Lengo:** Kubadilisha usanifu kwa macho — rangi, fonti (typography), CSS, na mifumo ya block.

**Zana Zinazopatikana:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Inafanya vizuri nini:**
- Kutumia mapendekezo ya usanifu yanayojulikana (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog).
- Kurekebisha fonti za jumla na mapambo ya rangi kupitia theme.json.
- Kuweka CSS maalum kwa ajili ya kubadilisha rangi kwa ajili ya chapa (brand-specific overrides).
- Kuchukua picha ya skrini ya ukurasa na kuichunguza kwa matatizo ya usanifu.

**Mapendekezo ya Kuanzia:**
- *Tumia mapendekezo ya warm-editorial kisha weka rangi kuu kuwa #2d6a4f.*
- *Chukua picha ya skrini ya ukurasa wa nyumbani na niambie nini ningeboresha.*
- *Tengeneza mfumo wa block wa hero unaoweza kutumika na picha ya mandhari yenye upana kamili na kichwa kilicho katikati.*

---

### Plugin Manager (Meneja wa Plugins)

**Lengo:** Kugundua, kusakinisha, na kusimamia plugins za WordPress.

**Zana Zinazopatikana:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Inafanya vizuri nini:**
- Kupendekeza plugin bora kwa matumizi yanayoelezewa.
- Kusakinisha vifurushi vya uwezo (ability packs) kutoka kwenye rejista.
- Kutazama katalogi ya uwezo inayopatikana kwa kategoria.

**Mapendekezo ya Kuanzia:**
- *Plugin bora kwa ajili ya saraka ya usanahi (membership directory) ni ipi?*
- *Sakinisha vifurushi vya uwezo vya WooCommerce.*
- *Nionyeshe vifurushi vyote vya uwezo vya e-commerce vinavyopatikana.*

---

### Support Assistant (Msaidizi wa Usaidizi)

**Lengo:** Kujibu maswali kuhusu maudhui ya tovuti, mipangilio, na usanidi wa WordPress.

**Zana Zinazopatikana:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Inafanya vizuri nini:**
- Kutafuta mipangilio na chaguzi za sasa za tovuti.
- Kueleza ni aina gani za machapisho (post types), taxonomies, na menyu zimepangishwa kwenye tovuti.
- Kujibu maswali ya "hili mipangilio linafanya nini?" kwa kusoma thamani halisi.
- Kutumikia kama tabaka la uchunguzi (diagnostic layer) lisilo na uwezo wa kubadilisha data kabla ya kufanywa mabadiliko.

**Mapendekezo ya Kuanzia:**
- *Plugins na mipangilio gani ni hai kwenye tovuti hii kwa sasa?*
- *Orodhesha aina zote za machapisho ya custom zilizosajiliwa kwenye tovuti hii.*
- *Ni menyu gani za navigashoni zipo na zimepangishwa wapi?*

---

## Kubadilisha Agents

Agent yeyote iliyojaa ndani inaweza kupanuzwa au kubadilishwa kupitia filter ya `gratis_ai_agent_agents`.

### Kuongeza system prompt maalum kwa agent iliyopo

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Kusajili agent mpya

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Agent mpya inaonekana kwenye Agent Picker mara moja baada ya filter kuendesha.

### Kuondoa agent iliyojaa ndani

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
