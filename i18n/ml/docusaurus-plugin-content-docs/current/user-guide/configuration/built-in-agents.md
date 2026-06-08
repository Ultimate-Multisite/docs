---
title: അന്തർനിർമ്മിത ഏജന്റുമാർ
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents (ഉൾ組み ഏജന്റുമാർ)

Gratis AI Agent v1.9.0 അഞ്ച് ഉൾ組み ഏജന്റുമാരോടുകൂടിയാണ് പുറത്തിറക്കിയിരിക്കുന്നത്. ഓരോ ഏജന്റിനും പ്രത്യേക ടൂളുകളുടെ കൂട്ടം, അതിനനുസരിച്ചുള്ള സിസ്റ്റം പ്രോംപ്റ്റ് (system prompt), കൂടാതെ ആ മേഖലയിലെ സാധാരണ ജോലികൾക്ക് അനുയോജ്യമായ സ്റ്റാർട്ടർ നിർദ്ദേശങ്ങൾ എന്നിവ മുൻകൂട്ടി സജ്ജീകരിച്ചിരിക്കുന്നു. ഏജന്റുമാർക്കിടയിൽ മാറുന്നത് അസിസ്റ്റന്റിന് എന്ത് ചെയ്യാൻ കഴിയും, അത് എങ്ങനെ പ്രതികരിക്കുന്നു എന്നതിനെ മാറ്റുന്നു — ഇതിനായി നിങ്ങൾക്ക് യാതൊരു കോൺഫിഗറേഷനും ചെയ്യേണ്ടതില്ല.

## What Is an Agent? (ഏജന്റ് എന്നാൽ എന്ത്?)

ഓരോ ഏജന്റും ഒരു പേര് നൽകിയ കോൺഫിഗറേഷൻ പ്രൊഫൈലാണ്. ഇത് താഴെ പറയുന്നവയെ സംയോജിപ്പിക്കുന്നു:

- **Tools (ടൂളുകൾ)** — ഏജന്റിന് ഉപയോഗിക്കാൻ അനുവാദമുള്ള കഴിവുകൾ (ഉദാഹരണത്തിന്, ഒരു Content Writer-ന് പോസ്റ്റ് ഉണ്ടാക്കാനുള്ള കഴിവുകൾ ലഭ്യമാണ്; ഒരു Design Studio-ക്ക് CSS, theme.json കഴിവുകൾ ലഭ്യമാണ്).
- **System prompt (സിസ്റ്റം പ്രോംപ്റ്റ്)** — ഏജന്റിന്റെ സ്വരം, മുൻഗണനകൾ, പരിമിതികൾ എന്നിവ സജ്ജമാക്കുന്ന നിർദ്ദേശങ്ങൾ.
- **Suggestions (നിർദ്ദേശങ്ങൾ)** — വേഗത്തിൽ തുടങ്ങാൻ നിങ്ങളെ സഹായിക്കുന്ന, ചാറ്റ് ഇന്റർഫേസിൽ മുൻകൂട്ടി എഴുതിയ പ്രോംപ്റ്റുകൾ.

## Accessing the Agent Picker (ഏജന്റ് പിക്കർ ഉപയോഗിക്കാനുള്ള വഴി)

1. WordPress admin sidebar-ൽ **Gratis AI Agent** പാനൽ തുറക്കുക.
2. ചാറ്റ് ഹെഡറിന്റെ മുകളിലെ ഇടതുവശത്തുള്ള **agent icon** ക്ലിക്ക് ചെയ്യുക (ഏത് ഏജന്റ് സജീവമാണോ എന്ന് കാണിക്കാൻ ഈ ഐക്കൺ മാറും).
3. **Agent Picker** ഒരു ഫോം-ടേബിൾ ഓവർലേ ആയി തുറക്കുന്നു. ഓരോ ഏജന്റിനും അതിന്റെ ഐക്കൺ, പേര്, ഒരു വരിയിലുള്ള വിവരണം എന്നിവ നൽകിയിരിക്കുന്നു.
4. ഒരു ഏജന്റ് റോ ക്ലിക്ക് ചെയ്ത് അത് സജീവമാക്കുക. ചാറ്റ് ഹെഡർ ഉടൻ തന്നെ അപ്ഡേറ്റ് ചെയ്യും.

സംഭാഷണത്തിനിടയിൽ നിങ്ങൾക്ക് ഏജന്റുമാരെ മാറ്റാനും കഴിയും — പുതിയ ഏജന്റിന്റെ സിസ്റ്റം പ്രോംപ്റ്റ് അടുത്ത സന്ദേശത്തിൽ നിന്ന് പ്രാബല്യത്തിൽ വരും.

## The Five Built-in Agents (അഞ്ച് ഉൾ組み ഏജന്റുമാർ)

### Content Writer (ഉള്ളടക്ക എഴുത്തുകാരൻ)

**Focus (പ്രധാന ലക്ഷ്യം):** പോസ്റ്റുകൾ, പേജുകൾ, കോൺടാക്റ്റ് ഫോമുകൾ എന്നിവ സൃഷ്ടിക്കുന്നതിലും എഡിറ്റ് ചെയ്യുന്നതിലും.

**Available tools (ലഭ്യമായ ടൂളുകൾ):** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**What it does well (എന്തൊക്കെ കാര്യങ്ങൾ നന്നായി ചെയ്യും):**
- ഒരു സംക്ഷിപ്ത രൂപരേഖയോ ഔട്ട്ലൈനോ ഉപയോഗിച്ച് ബ്ലോഗ് പോസ്റ്റുകൾ എഴുതി പ്രസിദ്ധീകരിക്കുക.
- ഒരു പുതിയ സൈറ്റിനായുള്ള ലാൻഡിംഗ് പേജുകളുടെ ബാച്ചുകൾ സൃഷ്ടിക്കുക.
- കോൺടാക്റ്റ് ഫോമുകളും അന്വേഷണ ഫോമുകളും നിർമ്മിക്കുക.
- ഒരു URL-ൽ നിന്നോ തിരയലിൽ നിന്നോ പോസ്റ്റുകൾക്ക് ഫീച്ചർ ചെയ്ത ചിത്രങ്ങൾ സജ്ജമാക്കുക.

**Starter suggestions (തുടങ്ങാനുള്ള നിർദ്ദേശങ്ങൾ):**
- *WordPress multisite-ന്റെ പ്രയോജനങ്ങളെക്കുറിച്ച് 500 വാക്കുകളുള്ള ഒരു ബ്ലോഗ് പോസ്റ്റ് എഴുതുക.*
- *ഒരു About, Services, കൂടാതെ Contact പേജ് എന്നിവ സൃഷ്ടിച്ച് പ്രസിദ്ധീകരിക്കുക.*
- *Contact പേജിലേക്ക് ഒരു ബുക്കിംഗ് അന്വേഷണ ഫോം ചേർക്കുക.*

---

### Site Builder (സൈറ്റ് ബിൽഡർ)

**Focus (പ്രധാന ലക്ഷ്യം):** ഒറ്റ പ്രോംപ്റ്റ് ഉപയോഗിച്ച് മുഴുവൻ സൈറ്റും നിർമ്മിക്കൽ.

**Available tools (ലഭ്യമായ ടൂളുകൾ):** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**What it does well (എന്തൊക്കെ കാര്യങ്ങൾ നന്നായി ചെയ്യും):**
- വിവരിച്ച ബിസിനസ്സ് തരം അനുസരിച്ച് ഒരു മൾട്ടി-ഫേസ് സൈറ്റ് ബിൽഡ് പ്ലാൻ ഉണ്ടാക്കുക.
- ഓരോ ഘട്ടവും സ്വയം പ്രവർത്തിപ്പിക്കുക — ഘടന, ഉള്ളടക്കം, नेവിഗേഷൻ, ഡിസൈൻ.
- മാനുവൽ ഇടപെടൽ ആവശ്യമില്ലാതെ പ്ലാനിനിടയിലുള്ള പിഴവുകൾ പരിഹരിക്കുക.
- ബിൽഡിന്റെ ഭാഗമായി ശുപാർശ ചെയ്യുന്ന plugins ഇൻസ്റ്റാൾ ചെയ്യുക.
- ചാറ്റ് ഇന്റർഫേസിൽ നിന്ന് നേരിട്ട് കോൺടാക്റ്റ് ഫോമുകൾ സൃഷ്ടിക്കുക (Superdav AI Agent v1.10.0+).

**Starter suggestions (തുടങ്ങാനുള്ള നിർദ്ദേശങ്ങൾ):**
- *ഒരു ഗാലറി പോസ്റ്റ് ടൈപ്പും, ഒരു ബുക്കിംഗ് പേജും, ഒരു കോൺടാക്റ്റ് ഫോമുമുള്ള ഫോട്ടോഗ്രാഫി പോർട്ട്‌ഫോളിയോ സൈറ്റ് ബിൽഡ് ചെയ്യുക.*
- *ഓൺലൈൻ മെനു, പ്രവർത്തന സമയം, ടേബിൾ ബുക്കിംഗ് അന്വേഷണ ഫോം എന്നിവയടങ്ങിയ ഒരു റെസ്റ്റോറന്റ് വെബ്സൈറ്റ് സൃഷ്ടിക്കുക.*
- *സർവീസ് പേജുകൾ, ഒരു പോർട്ട്‌ഫോളിയോ സെക്ഷൻ, ഒരു ബ്ലോഗ് എന്നിവയടങ്ങിയ ഒരു ഫ്രീലാൻസ് കൺസൾട്ടിംഗ് സൈറ്റ് സജ്ജമാക്കുക.*
- *സൈറ്റ് ബിൽഡർ ഉപയോഗിച്ച് Contact പേജിലേക്ക് ഒരു കോൺടാക്റ്റ് ഫോം ചേർക്കുക.*

---

### Design Studio (ഡിസൈൻ സ്റ്റുഡിയോ)

**Focus (പ്രധാന ലക്ഷ്യം):** വിഷ്വൽ കസ്റ്റമൈസേഷൻ — നിറങ്ങൾ, ടൈപ്പോഗ്രാഫി, CSS, ബ്ലോക്ക് പാറ്റേണുകൾ.

**Available tools (ലഭ്യമായ ടൂളുകൾ):** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**What it does well (എന്തൊക്കെ കാര്യങ്ങൾ നന്നായി ചെയ്യും):**
- പേര് നൽകിയ തീം പ്രീസെറ്റുകൾ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) പ്രയോഗിക്കുക.
- theme.json വഴി ഗ്ലോബൽ ടൈപ്പോഗ്രാഫിയും കളർ പാലറ്റുകളും മെച്ചപ്പെടുത്തുക.
- ബ്രാൻഡ്-നിർദ്ദിഷ്ട ഓവർറൈഡുകൾക്കായി കസ്റ്റം CSS ഇൻജക്റ്റ് ചെയ്യുക.
- ഒരു പേജിന്റെ സ്ക്രീൻഷോട്ട് എടുത്ത് ഡിസൈൻ പ്രശ്നങ്ങളെക്കുറിച്ച് അവലോകനം ചെയ്യുക.

**Starter suggestions (തുടങ്ങാനുള്ള നിർദ്ദേശങ്ങൾ):**
- *warm-editorial പ്രീസെറ്റ് പ്രയോഗിച്ച്, തുടർന്ന് പ്രാഥമിക നിറം #2d6a4f എന്ന് സജ്ജമാക്കുക.*
- *ഹോംപേജിന്റെ സ്ക്രീൻഷോട്ട് എടുത്ത് എവിടെ മെച്ചപ്പെടുത്തണമെന്ന് പറയുക.*
- *ഒരു ഫുൾ-വിഡ്ത്ത് ബാക്ക്ഗ്രൗണ്ട് ഇമേജ്, സെന്റർ ചെയ്ത ഹെഡിംഗ് എന്നിവ ഉപയോഗിച്ച് പുനരുപയോഗിക്കാവുന്ന ഒരു ഹീറോ ബ്ലോക്ക് പാറ്റേൺ സൃഷ്ടിക്കുക.*

---

### Plugin Manager (പ്ലഗിൻ മാനേജർ)

**Focus (പ്രധാന ലക്ഷ്യം):** WordPress plugins കണ്ടെത്തുക, ഇൻസ്റ്റാൾ ചെയ്യുക, കൈകാര്യം ചെയ്യുക.

**Available tools (ലഭ്യമായ ടൂളുകൾ):** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**What it does well (എന്തൊക്കെ കാര്യങ്ങൾ നന്നായി ചെയ്യും):**
- വിവരിച്ച ഉപയോഗ കേസിനായി ഏറ്റവും മികച്ച plugin ശുപാർശ ചെയ്യുക.
- റെജിസ്ട്രിയിൽ നിന്ന് ability packs ഇൻസ്റ്റാൾ ചെയ്യുക.
- വിഭാഗമനുസരിച്ച് ലഭ്യമായ ability കാറ്റലോഗ് ब्राउസ് ചെയ്യുക.

**Starter suggestions (തുടങ്ങാനുള്ള നിർദ്ദേശങ്ങൾ):**
- *ഒരു membership directory-ക്ക് ഏറ്റവും മികച്ച plugin ഏതാണ്?*
- *WooCommerce abilities pack ഇൻസ്റ്റാൾ ചെയ്യുക.*
- *ലഭ്യമായ എല്ലാ ecommerce ability packs കാണിക്കുക.*

---

### Support Assistant (സപ്പോർട്ട് അസിസ്റ്റന്റ്)

**Focus (പ്രധാന ലക്ഷ്യം):** സൈറ്റ് ഉള്ളടക്കം, സെറ്റിംഗുകൾ, WordPress കോൺഫിഗറേഷൻ എന്നിവയെക്കുറിച്ച് ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകുക.

**Available tools (ലഭ്യമായ ടൂളുകൾ):** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**What it does well (എന്തൊക്കെ കാര്യങ്ങൾ നന്നായി ചെയ്യും):**
- നിലവിലെ സൈറ്റ് സെറ്റിംഗുകളും ഓപ്ഷനുകളും പരിശോധിക്കുക.
- സൈറ്റിൽ എന്തൊക്കെ post types, taxonomies, menus എന്നിവ കോൺഫിഗർ ചെയ്തിരിക്കുന്നു എന്ന് വിശദീകരിക്കുക.
- ലൈവ് മൂല്യങ്ങൾ വായിച്ചുകൊണ്ട് "ഈ സെറ്റിംഗ് എന്ത് ചെയ്യും?" എന്ന ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകുക.
- മാറ്റങ്ങൾ വരുത്തുന്നതിന് മുമ്പ് ഒരു read-only ഡയഗ്നോസ്റ്റിക് ലെയറായി പ്രവർത്തിക്കുക.

**Starter suggestions (തുടങ്ങാനുള്ള നിർദ്ദേശങ്ങൾ):**
- *ഈ സൈറ്റിൽ നിലവിൽ സജീവമായ plugins, സെറ്റിംഗുകൾ എന്നിവ എന്തൊക്കെയാണ്?*
- *ഈ സൈറ്റിൽ രജിസ്റ്റർ ചെയ്തിട്ടുള്ള എല്ലാ കസ്റ്റം post types ലിസ്റ്റ് ചെയ്യുക.*
- *എന്തൊക്കെ नेവിഗേഷൻ മെനൂകൾ ഉണ്ട്, അവ എവിടെയാണ് നൽകിയിരിക്കുന്നത്?*

---

## Customising Agents (ഏജന്റുമാരെ കസ്റ്റമൈസ് ചെയ്യൽ)

`gratis_ai_agent_agents` filter ഉപയോഗിച്ച് ഓരോ ഉൾ組み ഏജന്റിനെയും വികസിപ്പിക്കാനോ മാറ്റിസ്ഥാപിക്കാനോ കഴിയും.

### Adding a custom system prompt to an existing agent (നിലവിലുള്ള ഏജന്റിന് കസ്റ്റം സിസ്റ്റം പ്രോംപ്റ്റ് ചേർക്കൽ)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registering a new agent (ഒരു പുതിയ ഏജന്റ് രജിസ്റ്റർ ചെയ്യൽ)

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

ഈ പുതിയ ഏജന്റ് filter പ്രവർത്തിച്ച ഉടൻ തന്നെ Agent Picker-ൽ പ്രത്യക്ഷപ്പെടും.

### Removing a built-in agent (ഒരു ഉൾ組み ഏജന്റ് നീക്കം ചെയ്യൽ)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
