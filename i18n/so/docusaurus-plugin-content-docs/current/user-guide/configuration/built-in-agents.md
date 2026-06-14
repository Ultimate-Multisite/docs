---
title: Ajeenti ku dhismiye
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents-ka La Midigelin

Gratis AI Agent v1.9.0 waxay la soo baxday shan agent oo la diyaariyay, kuwaas oo kasta oo si gaar ah loo habeeyay qalab diirran, system prompt gaar ah, iyo talooyin bilaash ah oo la jaanqaaday hawlaha caadiga ah ee dhinacaas. Isbeddelka agent-yada waxay beddelaa waxa ay assistant-ku samayn karo sida uu uga jawaabo — iyadoon lagun baahna hagaajin ku sameyn.

## Waa Maxay Agent?

Agent kasta waa qaabka hagaajinta (configuration profile) la magacawday oo isku daraya:

- **Qalabka (Tools)** — awoodaha agent-ku u oggolaado inuu isticmaalo (tusaale, Qoraaga Macaamiisha wuxuu helaa awoodda samaynta maqaalka; Studio-ga Naqshadaynta wuxuu helaa awoodda CSS iyo theme.json).
- **System prompt** — tilmaamaha ku hagaaya qaabka (tone), mudnaanta (priorities), iyo xaddidda agent-ka.
- **Talooyin (Suggestions)** — prompts la qoray hore oo muujinaya interface-ka wada hadalka si aad u bilaawto si degdeg ah.

## Sida Loo Gelayo Agent Picker

1. Fur **Gratis AI Agent** panel-ka ku jira sidebar-ka admin-ka WordPress-ka.
2. Guji **icon-ka agent-ka** ee sare ee header-ka wada hadalka (icon-ka ayaa isbeddelaya si uu u muujiyo agent-ka la firfiray).
3. **Agent Picker** waxay furataa sidii qaab-tarrum (form-table overlay). Agent kasta waxaa lagu soo bandhigaa icon-kiisa, magaciisa, iyo sharaxaad hal-jumlad ah.
4. Guji xarunta agent-ka si aad u firfiriso. Header-ka wada hadalka ayaa isla markiiba la cusboonaysiiyaa.

Waxaad sidoo kale isbeddeli kartaa agent-yada inta aanad wada hadlin — system prompt-ka agent-ka cusub wuxuu bilaabaa shaqadiisa bilowga farriinta xigta.

## Shan Agent-ka La Midigelin

### Qoraaga Macaamiisha (Content Writer)

**Diiradda:** Abuurista iyo hagaajinta maqaallada, bogagga, iyo foomamka la xiriira macmiilka.

**Qalabka la heli karo:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Waxa ay si fiican u qabto:**
- Qorita iyo daabaca maqaallo blog ah oo ka bilaabmay qoraal kooban ama qaab (outline).
- Abuurista kooxro (batches) oo bogag loo diyaariyay website cusub.
- Dhisidda foomamada la xiriirka iyo su'aalaha (enquiry forms).
- Ku dhista sawirrada muhiimka ah ee maqaallada iyadoo la isticmaalayo URL ama raadinta.

**Talooyin bilaash ah:**
- *Qor maqaal blog oo ku ah 500 eray oo ku saabsan faa'iidada WordPress multisite.*
- *Abuur bogagka "About", "Services", iyo "Contact" oo daabac.*
- *Ku dar foomam la socod (booking enquiry form) bogga Contact.*

---

### Site Builder

**Diiradda:** Abuurista website oo dhammaystiran iyadoo la isticmaalayo tilmaamo kooban.

**Qalabka la heli karo:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Waxa ay si fiican u qabto:**
- Sameynta qorshe website oo badan qaybo ah (multi-phase site build plan) oo ku habboon nooc ganacsi la sharaxay.
- Fulinta qayb kasta oo qorshaha ah iyadoo iska hubinaya — qaabdhismeedka, waxyaabaha la qoray, habka socodka (navigation), iyo naqshadda (design).
- Wax ka soo celinta qaladkii markii uu yahay doorkii qorshaha adiga oo aan loo baahnayn in la gacanta ku hagaajiyo.
- Dhisidda plugin-yada la talagalay qayb ka ah dhismaha website-ka.
- Abuurista foomamada la xiriirka si toos ah iyadoo la isticmaalayo interface-ka wada hadalka (Superdav AI Agent v1.10.0+).

**Talooyin bilaash ah:**
- *Abuur website sawirro (photography portfolio site) oo leh nooc post-ka gallery, bog la socod (booking page), iyo foomam la xiriirka.*
- *Abuur website cuntada (restaurant website) oo leh menu online, saacalka furitaanka, iyo foomam la socod oo lagu codsanayo meel ku dhexgelin (table-booking enquiry form).*
- *Dhis website la shaqaynaya (freelance consulting site) oo leh bogag adeegyo (service pages), qayb sawirro (portfolio section), iyo blog.*
- *Ku dar foomam la xiriirka bogga Contact adiga oo isticmaalaya Site Builder.*

---

### Design Studio

**Diiradda:** Wax ka beddelka muuqaalka — midabada, qaabka qoraalka (typography), CSS, iyo qaababka qaybaha (block patterns).

**Qalabka la heli karto:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Waxa uu si fiican u qabtaa:**
- Isticmaalka presets-ka theme-yada la magaca (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Habaynta qaabka qoraalka iyo midabada guud ee theme.json
- Soo daxaynta CSS gaar ah oo ku saabsan qaybta brand-ka
- Qaato screenshot-ka bogga oo aad dib u eegto arrimaha naqshadaynta

**Talooyin bilaash ah:**
- *Isticmaal preset-ka warm-editorial ka dibna qabow midabka ugu muhiimsan #2d6a4f.*
- *Qaado screenshot-ka bogga hore oo ii sheeg waxyaabaha aad hagaajin lahayd.*
- *Abuur qaab block (block pattern) ah oo la isticmaali karo oo leh sawir dhinac oo dhan iyo qoraal la dhejiyay dhexe.*

---

### Plugin Manager

**Diiradda:** Helitaanka, rakibidda, iyo maamulka plugins-ka WordPress.

**Qalabka heli kara:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Waxa uu si fiican u qabtaa:**
- Talo bixinta plugin-ka ugu habboon macluumaadka aad sheegtay
- Rakibidda ability packs-ka laga helo registry-ga
- Eegista katalogga awoodaha la heli karo iyadoo loo kala qaaday qaybo

**Talooyin bilaash ah:**
- *Waa maxay plugin-ka ugu habboon directory-ga xubnaha (membership directory)?*
- *Rakbi ability pack-ka WooCommerce.*
- *Soo bandhig dhammaan ability packs-ka e-commerce ee la heli karo.*

---

### Support Assistant

**Diiradda:** Jawaabidda su'aalaha ku saabsan waxyaabaha bogga, settings-yada, iyo qaabdhismeedka WordPress.

**Qalabka heli kara:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Waxa uu si fiican u qabtaa:**
- In la raaco dejimaha iyo xulashada hadda jira ee website-ka.
- Fasalka wuxuu sharraxayaa noocyada post (post types), taxonomies, iyo menus-ka ku hagaajiyay website-ka.
- Waa inuu ka jawaabaa su'aalaha "maxaad samaynaysaa dejimadan?" iyadoo la akhrinayo qiimaha dhabta ah ee hadda jira.
- Waxay u adeegaysaa heer la akhriyo oo lagu baadhayo (read-only diagnostic layer) ka hor inta aan la beddelin waxyaabaha.

**Talooyin bilaash ah:**
- *Waa maxay plugin-yada iyo dejimaha hadda jira ee website-kan?*
- *Liisow dhammaan noocyada post (custom post types) ee ku soo bandhigay website-ka.*
- *Waa maxay menus-yada kale ee la isticmaali karo oo ay ku qoran yihiin meel kasta?*

---

## Wax ka beddelid Agents-ka (Customising Agents)

Agencies-ka (agents) ee dhasha ayaa laga faafin karaa ama la badali karaa iyadoo la isticmaalayo filter-ka `gratis_ai_agent_agents`.

### Ku darid system prompt cusub agensi hore
```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Diyaarinta agent cusub
```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Waxa uu hagaajinayaa posts iyo pages si ay u fududaan yihiin search engines-ka.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Waxaad tahay SEO specialist. Diiradda saar hagaajinta keywords, meta descriptions, iyo structured data.',
        'suggestions'   => [
            'Dib u eeg magaca homepage-ka (title) iyo meta description-ka.',
            'Sugista hagaajinaya title tag-yada saddexda post ugu dambeeyay.'
        ],
    ];
    return $agents;
} );
```

Eeggaas kale oo la sameeyay (Removing a built-in agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
