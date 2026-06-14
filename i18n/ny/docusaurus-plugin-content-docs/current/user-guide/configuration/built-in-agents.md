---
title: Mawone awo m'moyo wopambwa
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Zilipo (Built-in)

Gratis AI Agent v1.9.0 ilipere m'agent alambiri limodzi, m'm'agent alambiri limodzi wosamwa ndi zinthu zomwe zimeneledwa m'mwayi, zomwe zimeneledwa ndi zinthu zomwe zimeneledwa m'mwayi, ndipo zimeneledwa ndi zinthu zomwe zimeneledwa m'mwayi zomwe zimeneledwa m'mwayi. Kukhazikitsa m'mwayi ndi m'mwayi kumenezo ndi m'mwayi wosonyeza zomwe zimeneledwa m'mwayi zomwe zimeneledwa m'mwayi. Kukhazikitsa m'mwayi ndi m'mwayi kumenezo ndi m'mwayi wosonyeza zomwe zimeneledwa m'mwayi zomwe zimeneledwa m'mwayi.

## M'Agent ndi chiyani?

M'agent imodzi ndi m'configuration profile lomwe limapambana:

- **Tools** — zinthu zomwe m'agent aliyense kuyesa (mwachitsanzo, Content Writer ali ndi ulemu wopereka kuti atse post; Design Studio ali ndi ulemu wopereka CSS ndi theme.json).
- **System prompt** — mafunso omwe amapambana mwayi wa m'agent, zowonjezera zomwe amagwiritsa ntchito, ndipo zinthu zomwe zimeneledwa.
- **Suggestions** — mafunso omwe amapambana m'chat interface kuti mukhale ndi chidziwitso kwa nthawi yomwe mukuම්භa.

## Kukhazikitsa M'Agent Picker

1. Longani panel ya **Gratis AI Agent** m'WordPress admin sidebar.
2. Longani **agent icon** m'malo wopambana wa chat header (icon imayenera kuti itanthauze m'agent wosonyeza).
3. **Agent Picker** limapambana monga form-table overlay. M'agent imodzi imalimbidwa ndi icon yake, dzina lake, ndipo mwayi wosonyeza wosonyeza m'mwayi.
4. Longani row ya agent kuti mukhazikitsidwe. Chat header limapambana mwachangu.

Mukuwoneka kuti mukhazikitsa m'agent m'mwayi — mwayi wa m'agent wosonyeza wosonyeza m'mwayi mwamenezo m'mwayi wosonyeza m'mwayi.

**Kufunapulidwa bwino:**
- Kufotokozera ndi blog posts kuchokera ku outline kapena mwayi wosonyeza
- Kukhazikitsa batches za landing pages zokhudza site lino lili lino
- Kukhazikitsa forms za kukhala ndi malo (contact and enquiry forms)

**Mawonjezere a m'moyo:**
- *Tikhani blog post ya mitundu yomwe WordPress multisite imapereka.*
- *Tikhazikitsa About, Services, ndipo Contact page ndipo tikhazikitsani.*
- *Tikhazikitsani form ya kukhala ndi malo (booking enquiry form) pa Contact page.*

---

### Site Builder

**Mwayi:** Kukhazikitsa website lino lili lino kuchokera ku mwayi wosonyeza wosonyeza.

**Zinthu zomwe zimakwanirira:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Kufotokozera bwino:**
- Kukhazikitsa mwayi wosonyeza wa site wosonyeza kwa ntchito yomwe imapereka.
- Kukhazikitsani m'moyo m'moyo m'moyo — njira, malo (content), njira ya kukhala (navigation), ndipo zinthu zomwe zimapereka (design).
- Kukhazikitsa kuchokera ku mavuto m'moyo pamene simukufunika kuti mumalipirere.
- Kukhazikitsani plugins zomwe zimapereka monga chifukwa cha kukhazikitsa site lino lili lino.
- Kukhazikitsani contact forms kuchokera m'moyo wosonyeza (Superdav AI Agent v1.10.0+).

**Mawonjezere a m'moyo:**
- *Tikhazikitsani site ya maphunziro yomwe imapereka post type ya gallery, booking page, ndipo contact form.*
- *Tikhazikitsani website la restaurant ndi menu yomwe imapereka online, masiku a kupita (opening hours), ndipo form ya kukhala ndi malo ya kuphatikiza uli. (table-booking enquiry form).*
- *Tikhazikitsani site la m'moyo wosonyeza (freelance consulting) ndi service pages, section ya portfolio, ndipo blog.*
- *Tikhazikitsani contact form pa Contact page monga momwe Site Builder imapereka.*

---

### Design Studio

**Mwayi:** Kukhazikitsa zinthu zomwe zimapereka kwa maviri — malo (colours), njira ya kulankhula (typography), CSS, ndipo mapulogalamu a block.

**Mawu ya Zochulidwa (Available Tools):** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Kufunsa Kuti Zikufunse (What it does well):**
- Kufuna presets za theme zolembedwa (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Kufinira typography ndi palettes za chinthu kwa mpaka m'moyo monga m'theme.json
- Kuwerenga CSS yomwe imapereka zolembedwa (overrides) zomwe zimapereka kwa brand ya wamene
- Kupanga screenshot ya page ndikufuna kuti muwone mavuto a design

**Mawu Okhudzana Kuti Muli ndi Mwayi (Starter Suggestions):**
- *Apply the warm-editorial preset ndipo set primary colour ku #2d6a4f.*
- *Take a screenshot ya homepage ndikufuna kuti mupereke chiyani chomwe mungofunse.*
- *Create reusable hero block pattern ndi full-width background image ndikugwiritsa ntchito heading yomwe ndi m'moyo wopereka (centred).*

---

### Plugin Manager

**Mwayi:** Kufuna, kuwerenga, ndikuyendetsa WordPress plugins.

**Mawu Okhudzana Kuti Muli ndi Mwayi (Available Tools):** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Kufunsa Kuti Zikufunse (What it does well):**
- Kuwerenga plugin yomwe ndi yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yom

**Kutendeka kulipeza bwino:**
- Kufuna zinthu zomwe ziliwonse pa site (site settings and options)
- Kufotokozera kuti post types, taxonomies, ndi menus zimene ziliwonse pa site.
- Kupereka upatanirano "kodi ndiyo kulipeza?" mwachidule kwa kulimbikira maungano omwe ali ndi mavuto (live values).
- Kukhala m'malo wopereka chithandizo cha kupanga (read-only diagnostic layer) mopereka kuchitira mabwera.

**Zilondolo za kuchotsa m'malo:**
- *Ndi m'malo ndi zinthu zoteteza (plugins and settings) zomwe ziliwonse pa site?*
- *Limbikani post types zonse zomwe ziliwonse pa site.*
- *Kodi pali menus za kupanga (navigation menus) ndipo zimapereka kuwene?*

---

## Kukhazikitsa Agents (Customising Agents)

M'malo wosonyeza m'malo (built-in agent) lomwe ndi wogulitsa (extended) kapena kuchotsedwa m'malo, mumagwiritsa ntchito filter yomwe imapanga `gratis_ai_agent_agents`.

### Kukhazikitsa system prompt yosonyeza m'malo kwa agent wosonyeza m'malo wosonyeza m'malo (Adding a custom system prompt to an existing agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Kukhazikitsa agent watsopano (Registering a new agent)

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

Mwana wamba wamba uliyooneka m'Agent Picker mara ya m'filter ikamaliza.

### Kuondoa agent iliyopo

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
