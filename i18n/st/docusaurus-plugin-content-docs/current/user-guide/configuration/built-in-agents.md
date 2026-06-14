---
title: Mopang a tšhoahla
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents a Matlala (Built-in Agents)

Gratis AI Agent v1.9.0 e le fa lima (ships) lima a'ai (agents) lima, ea e fa feso (pre-configured) li tso (tools) a'ai (focused set of tools), e fa mose (tailored system prompt), le fa lusa (starter suggestions) li e fa sefisi (matched to common tasks in that area). E fa feso (Switching between agents) e fa sefisi (changes what the assistant can do and how it responds) — a'ai (without any configuration on your part).

## O le Fa A'ai? (What Is an Agent?)

O fa a'ai (Each agent) o le fa feso (named configuration profile) li e fa sefisi (combines):

- **Tools** — o le fa lima (the abilities the agent is allowed to invoke) (e.g. a Content Writer has access to post-creation abilities; a Design Studio has access to CSS and theme.json abilities).
- **System prompt** — o le fa mose (instructions that set the agent's tone, priorities, and constraints).
- **Suggestions** — o le fa lusa (pre-written prompts shown in the chat interface) li e fa sefisi (to help you get started quickly).

## O le Fa A'ai (Accessing the Agent Picker)

1. Fa le panel **Gratis AI Agent** i le WordPress admin sidebar.
2. Klik o le **agent icon** i le tasi-tasi (top-left of the chat header) (o le icon e fa feso (changes to reflect the active agent)).
3. O le **Agent Picker** e fa sefisi (opens as a form-table overlay). Fa le fa a'ai (Each agent is listed with its icon, name, and a one-line description).
4. Klik o le row o le agent e fa feso (to activate it). Le chat header e fa sefisi (updates immediately).

E fa sefisi (You can also switch agents mid-conversation) — o le fa mose (the new agent's system prompt takes effect from the next message).

## O Fa Lima A'ai (The Five Built-in Agents)

### Content Writer

**Focus:** E fa feso (Creating and editing posts, pages, and contact forms).

**Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Ce e le fa fana ka e fana well:**
- Ho fana le fana blog posts ho a fana ho tsela le outline (outline)
- Ho fana batch o landing pages ho site tsotsi tse ntlha
- Ho fana forms tsa boithuto le boithuto

**Tlhahlobo ya ho fana ka:**
- *Fana blog post le 500 words ka fa WordPress multisite e na le fa fa.*
- *Fana About, Services, le Contact page le fana le fana.*
- *Fana form ya boithuto la booking le Contact page.*

---

### Site Builder (Motswako o fana)

**Tlhahlobo:** Ho fana le tsotsi tsa site ka tsela e nngwe.

**Tse mo tharo:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Ce e fana ka:**
- Ho fana le tsotsi tsa site tse di fana ka tsela e ntse e nngwe ho ba le fa fa. - structure, content, navigation, design
- Ho fana le tsotsi ea tsotsi (error) le fa ho na le fa fa ka teng, ho na le fa ho na le fa fa ka teng ho na le fa fa ka teng.
- Ho fana le plugins tse di hlalosang ho ba le fa fa ka tsela e nngwe.
- Ho fana forms tsa boithuto ka tsela e ntse e nngwe (Superdav AI Agent v1.10.0+).

**Tlhahlobo ya ho fana ka:**
- *Fana site ea portfolio ea sefane le post type ea gallery, page ea booking, le form ea boithuto.*
- *Fana website ea restaurant le menu e ntlha, saika sa tsela, le form ea boithuto ea table booking.*
- *Ho fana site ea consulting ea freelance le service pages, section ea portfolio, le blog.*
- *Ho fana form ya boithuto ka Contact page ka ho setsoe Site Builder.*

---

### Design Studio (Mokotlolo o fana)

**Tlhahlobo:** Ho fana le tsotsi tsa tsela — colours, typography, CSS, le block patterns.

**Tlhahlobo leits'aetso** (Available tools): `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ena eto e ntse:** (What it does well):
- Goala preset a leina (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ho fana ka seboetse typography le palettes ya lona ka theme.json
- Ho fana CSS e ntle ho go reba ka brand-specific overrides
- Ho ba screenshot ea page le ho reba maemo a design

**Tlhahlobo ea ho natsa:** (Starter suggestions):
- *Sebeletse preset ea warm-editorial pele u seboetse primary colour seo e #2d6a4f.*
- *Ba screenshot ea homepage pele u re: eng o ka fetola.*
- *Hlola block pattern ea hero le background image ea full-width le heading e ntle.*

---

### Plugin Manager (Maneho a ho natsa plugins)

**Fokozolo:** Ho bona, ho natsa, le ho lebanya WordPress plugins.

**Tlhahlobo ea ho natsa:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ena eto e ntse:**
- Ho re: plugin e fapaneng ea tsela ea ho sebelisa
- Ho natsa ability packs ka registry
- Ho hlola catalogue ea ability a fapaneng ka category

**Tlhahlobo ea ho natsa:** (Starter suggestions):
- *Plugin e fapaneng seo sehlopha sa membership directory?*
- *Natsa WooCommerce abilities pack.*
- *Ba re: setseba hore na packs tsa ecommerce a fapaneng.*

---

### Support Assistant (Maneho a ho tsamaea)

**Fokozolo:** Ho go bona dikotla tsa site, settings, le configuration ea WordPress.

**Tlhahlobo ea ho natsa:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Le fa ntlha ho ba le kae:**
- Ho bala litlhoka litlhoko tsa site le litlhokai.
- Ho reka hore na eng ke post types, taxonomies, le menus e fana'a ka site.
- Ho gobala lipotso tse di re: "na ke setlhokai se fana'a?" ka ho bala litlhoko tsa live.
- Ho ba le lekhase la tsamaiso (read-only diagnostic layer) fa a re ka fetola litlhokai.

**Litlhokai tsa ho natsa:**
- *Na eng ke plugins le litlhokai tse fana'ang ka site?*
- *Lipa ka post types hantle tse di tsamaisang ka site.*
- *Na menus ea tšepo e fana'a, le ba fetoga fa?*

---

## Ho natsa Agents (Agents)

Ka mofuta oona oa agent ea WordPress, o ka fana'a ho fana'a kapa ho fetola ka filter ea `gratis_ai_agent_agents`.

### Ho fana'a system prompt e fapaneng sa agent e fapaneng

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Ho tsamaisa agent e ntlha

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Ho fana'a posts le pages ho search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'O na le ho ba SEO specialist. Le tšepo ea ho fana'a keyword optimisation, meta descriptions, le structured data.',
        'suggestions'   => [
            'Re ke homepage title le meta description.',
            'Ho fana'a li improvements tsa title tag ho posts lima tse ntlha.'
        ],
    ];
    return $agents;
} );
```

Mohlomang, bo agent ya ntlha a tla ba lehle ka nako e le teng ha filter a fetileng.

### Ho laola agent ya tsamaiso (built-in)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
