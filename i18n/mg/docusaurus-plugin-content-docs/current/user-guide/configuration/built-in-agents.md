---
title: Mpanampy ao anaty
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Mbaovao (Built-in Agents)

Ny Gratis AI Agent v1.9.0 dia mitondra agent faingo fa misy agent dimy efa voaomana, izay efa vita ny fepetra sy fitaovana manokana ho an'ny asa isan-karazany, famaritana (system prompt) mifanaraka amin'ny zavatra atao azy ary fanampiana (suggestions) voaomana eo amin'ny interface resaka. Ny fifindrana eo amin'ireo agent ireo dia manova izay vitan'ilay asistant sy ny fomba fiatrehany — tsy mila manova na manao zavatra ianao.

## Inona no Agent? (What Is an Agent?)

Ny agent tsirairay dia endrika famaritana misy anarana izay mampifangaro ireto:

- **Tools** — ireo fahaizana azo ampiasain'ny agent (ohatra, ny Content Writer dia afaka mamorona sy manova lahatsoratra; ny Design Studio kosa dia afaka mampiasa CSS sy theme.json).
- **System prompt** — toromarika izay mamaritra ny fihetsiky ny agent, ny laharam-pahamehany ary ny fetrany.
- **Suggestions** — fanazavana (prompts) efa voarakitra eo amin'ny fampisehoana resaka mba hanampiana anao hahatonga azy haingana.

## Fidirana amin'ny Agent Picker

1. Afaka manokatra ny panel **Gratis AI Agent** ao amin'ny WordPress admin sidebar ianao.
2. Tsindrio ny **agent icon** eo an-torenan'ny header resaka (miova ny endrika izy rehefa misy agent mavitrika).
3. Ho afaka misokatra ny **Agent Picker** ho toy ny form-table overlay. Ny agent tsirairay dia voalaza miaraka amin'ny sary, anarana ary famaritana fohy iray.
4. Tsindrio ny tsipika (row) an'ny agent iray mba hampandehanana azy. Ho avy eo dia hivoatra avy hatrany ny header resaka.

Afaka manova agent ianao mandritra ny resaka — ny system prompt an'ilay agent vaovao no hanomboka avy amin'ny hafatra manaraka.

## Ireo Agent Dimy Voaomana (The Five Built-in Agents)

### Content Writer

**Fokajy:** Famoronana sy fanovana lahatsoratra, pejy ary forms fifandraisana.

**Fitaovana azo ampiasaina:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Inona no tena mahay atao tsara:**
- Fanoratana sy famoahana lahatsoratra (blog posts) avy amin'ny fanazavana fohy na drafitra efa misy
- Famoronana vondrona (batches) an'ny landing pages ho an'ny tranonkala vaovao
- Fanamboarana forms fandraisana antso sy fanontanianao (contact and enquiry forms)
- Fametrahana sary manasongadina (featured images) amin'ny posts avy amin'ny URL na fitadiavana

**Soso-kevitra fanombohana:**
- *Manoratra lahatsoratra 500 teny momba ny tombontsoa azo avy amin'ny WordPress multisite.*
- *Mamorona pejy "About", "Services", ary "Contact" dia avereno famoahana azy ireo.*
- *Ampidiro form fandraisana antso (booking enquiry form) eo amin'ny pejy Contact.*

---

### Site Builder

**Fokajy:** Famoronana tranonkala manontolo avy amin'ny fangatahana iray.

**Fitaovana azo ampiasaina:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Inona no tena mahay atao tsara:**
- Famoronana drafitra fanorenana tranonkala maromaro dingana ho an'ny karazana orinasa voalaza
- Fanatanterahana ny dingana tsirairay amin'ny fomba manokana — ny rafitra, ny votoaty, ny lalana (navigation), ny endrika (design)
- Fampanantenana rehefa misy fahadisoana eo anivon'ny drafitra nefa tsy mila fandraisan'anjara mivantana avy amin'ny olona
- Fametrahana plugins nozaraina ho an'ny fanorenana ho an'ny famoronana azy

**Soso-kevitra fanombohana:**
- *Manorina tranonkala portfolio ho an'ny sarimihetsika (photography) miaraka amin'ny post type gallery, pejy famandrihana (booking page), ary form contact.*
- *Mamorona tranonkala fivarotana sakafo miaraka amin'ny menio an-tserasera, ora fotsiny, ary form fangatahana fametrahana tavanandro.*
- *Manamboatra tranonkala ho an'ny mpanome torohevitra (freelance consulting) miaraka amin'ny pejy serivisy, faritra portfolio, ary blog.*
- *Ampidiro form contact eo amin'ny pejy Contact dia ampiasao ny Site Builder.*

---

### Design Studio

**Fokajy:** Fanaovana endrika manokana — loko, karazana soratra (typography), CSS, ary modely (block patterns).

**Fita fita azo ampiasaina:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Inona no fahaizany tsara indrindra:**
- Fampiharana presets (fita) anarana toy ny minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog.
- Fanitsiana ny tipika (typography) sy ny loko global amin'ny alalan'ny theme.json.
- Fametrahana CSS manokana ho fanovana mifanaraka amin'ny marika.
- Fanaovana screenshot an'ny pejy ary famakafakana azy mba hijerena olana momba ny endrika (design).

**Torohevitra fanombohana:**
- *Ampidiro ilay preset warm-editorial dia ataovy #2d6a4f ho loko fototra.*
- *Atao screenshot an'ny homepage ary lazao ahy izay tianao hatsofina.*
- *Ataovy block pattern (endrika fita) azo ampiasaina ho hero misy sary mpanazava ny lalana manontolo sy lohateny eo afovoany.*

---

### Plugin Manager

**Fokajy:** Fikarohana, fametrahana ary fitantanana ireo plugin ao amin'ny WordPress.

**Fita azo ampiasaina:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Inona no fahaizany tsara indrindra:**
- Fanoroana ny plugin tsara indrindra ho an'ny toe-javatra voalaza.
- Fametrahana ability packs avy amin'ny registry (fizarana).
- Fijerena ny lisitry ny ability catalogue araka karazany.

**Torohevitra fanombohana:**
- *Inona no plugin tsara indrindra ho an'ny directory fandraisana anjara?*
- *Ampidiro ilay WooCommerce abilities pack.*
- *Asehoy ahy ny ability packs efa misy.*

---

### Support Assistant

**Fokajy:** Mamaly fanontaniana momba ny votoatin'ny tranokala, ny setings (fepetra), ary ny fomba fiasa an'ny WordPress.

**Fita azo ampiasaina:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Inona no mahasoa azy tsara:**
- Fikarohana ny fepetra sy safidy ankehitriny amin'ny tranonkala.
- Fanazavana hoe inona ireo *post types*, *taxonomies*, ary *menus* napetraka eo amin'ny tranonkala.
- Valin-teny ny fanontaniana hoe "inona no ataon'ity fepetra ity?" amin'ny famakiana ny sandan'izay miseho ankehitriny.
- Ho lasa lafiny fandinihana (diagnostic layer) mitsidika aloha fa tsy manova zavatra.

**Soso-kevitra fanombohana:**
- *Inona ireo plugin sy fepetra miasa amin'ity tranonkala ity?*
- *Apetraho ny karazana post types rehetra voatonga eo amin'ity tranonkala ity.*
- *Inona ireo navigation menus misy ary aiza no apetraka azy ireo?*

---

## Fanovana Agents (Customising Agents)

Ny agent anaty dia azo ampahafantarina na ovaina amin'ny alalan'ny `gratis_ai_agent_agents` filter.

### Fampidirana *system prompt* manokana ho agent efa misy

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Fandefasana agent vaovao

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Manatsara ny post sy pejy ho an'ny mitady (search engines).',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ianao dia SEO specialist. Mifantoka amin\'ny fanatsarana ny teny (keyword optimisation), meta descriptions, ary structured data.',
        'suggestions'   => [
            'Jereo ny lohateny sy ny meta description an'ny pejy fampisehoana (homepage).',
            'Manolotra fanatsarana ny title tag ho an'ireo post dimy farany indrindra.',
        ],
    ];
    return $agents;
} );
```

Ny agent vaovao dia miseho avy eo amin'ny Agent Picker rehefa vita ny fanaovana filter.

### Famoahana agent efa ao anaty (built-in)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
