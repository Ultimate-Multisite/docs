---
title: അന്തർനിർമിത ഏജന്റുകൾ
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# ഉൾനിർമ്മിത Agents

Gratis AI Agent v1.9.0 അഞ്ച് ഉൾനിർമ്മിത agents-കളോടെയാണ് ലഭ്യമാകുന്നത്. ഓരോന്നിലും ശ്രദ്ധാകേന്ദ്രമായ tools-ുകളുടെ ഒരു കൂട്ടം, അനുയോജ്യമായ system prompt, ആ മേഖലയിലെ സാധാരണ ജോലികൾക്ക് ചേർന്ന starter suggestions എന്നിവ മുൻകൂട്ടി ക്രമീകരിച്ചിരിക്കുന്നു. Agents തമ്മിൽ മാറുമ്പോൾ assistant-ന് ചെയ്യാനാകുന്നതും പ്രതികരിക്കുന്ന രീതിയും മാറും — നിങ്ങളുടെ ഭാഗത്ത് യാതൊരു configuration-ഉം വേണ്ട. ബന്ധപ്പെട്ട integrations ക്രമീകരിച്ചിട്ടുണ്ടെങ്കിൽ Superdav AI Agent v1.18.0 ഈ workflows-ലേക്ക് schedule-aware tools, reminder records, approval gates, SMS notifications എന്നിവ ചേർക്കാൻ കഴിയും.

## Agent എന്നത് എന്താണ്?

ഓരോ agent-വും താഴെപ്പറയുന്നവ ചേർക്കുന്ന പേരുള്ള ഒരു configuration profile ആണ്:

- **Tools** — agent-ന് invoke ചെയ്യാൻ അനുമതിയുള്ള കഴിവുകൾ (ഉദാ. Content Writer-ന് post സൃഷ്ടിക്കൽ കഴിവുകളിലേക്ക് access ഉണ്ട്; Design Studio-ക്ക് CSS, theme.json കഴിവുകളിലേക്ക് access ഉണ്ട്)
- **System prompt** — agent-ന്റെ ശൈലി, മുൻഗണനകൾ, നിയന്ത്രണങ്ങൾ എന്നിവ നിശ്ചയിക്കുന്ന നിർദേശങ്ങൾ
- **Suggestions** — വേഗത്തിൽ തുടങ്ങാൻ സഹായിക്കുന്ന chat interface-ൽ കാണിക്കുന്ന മുൻകൂട്ടി എഴുതിയ prompts

## Agent Picker ആക്‌സസ് ചെയ്യൽ

1. WordPress admin sidebar-ൽ **Gratis AI Agent** panel തുറക്കുക.
2. chat header-ന്റെ മുകളിൽ ഇടതുവശത്തുള്ള **agent icon** ക്ലിക്ക് ചെയ്യുക (active agent-നെ പ്രതിഫലിപ്പിക്കാൻ icon മാറും).
3. **Agent Picker** ഒരു form-table overlay ആയി തുറക്കും. ഓരോ agent-വും അതിന്റെ icon, പേര്, ഒരുവരിയുള്ള വിവരണം എന്നിവയോടൊപ്പം പട്ടികപ്പെടുത്തിയിരിക്കും.
4. സജീവമാക്കാൻ ഒരു agent row ക്ലിക്ക് ചെയ്യുക. chat header ഉടൻ update ചെയ്യും.

സംഭാഷണത്തിനിടെ തന്നെ agents മാറാനും കഴിയും — പുതിയ agent-ന്റെ system prompt അടുത്ത message മുതൽ പ്രാബല്യത്തിൽ വരും.

## അഞ്ച് ഉൾനിർമ്മിത Agents

### Content Writer

**ശ്രദ്ധ:** posts, pages, contact forms എന്നിവ സൃഷ്ടിക്കുകയും തിരുത്തുകയും ചെയ്യൽ.

**ലഭ്യമായ tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations enabled ആയാൽ, configured calendar context, approval gates, reminders, SMS notification tools എന്നിവ approved workflows-ക്ക് ലഭ്യമായേക്കാം.

**ഇത് നന്നായി ചെയ്യുന്ന കാര്യങ്ങൾ:**
- ഒരു brief അല്ലെങ്കിൽ outline അടിസ്ഥാനമാക്കി blog posts തയ്യാറാക്കി publish ചെയ്യൽ
- പുതിയ site-ക്കായി landing pages batch ആയി സൃഷ്ടിക്കൽ
- contact, enquiry forms നിർമ്മിക്കൽ
- ഒരു URL അല്ലെങ്കിൽ search ഉപയോഗിച്ച് posts-ൽ featured images സജ്ജമാക്കൽ
- configured Google Calendar context-ൽ നിന്ന് event follow-up messages തയ്യാറാക്കി, notifications അയയ്ക്കുന്നതിന് മുമ്പ് approval-നായി നിർത്തിവെക്കൽ

**Starter suggestions:**
- *WordPress multisite-ന്റെ ഗുണങ്ങളെക്കുറിച്ച് 500 വാക്കുകളുള്ള ഒരു blog post എഴുതുക.*
- *About, Services, Contact page എന്നിവ സൃഷ്ടിച്ച് publish ചെയ്യുക.*
- *Contact page-ലേക്ക് ഒരു booking enquiry form ചേർക്കുക.*
- *നാളത്തെ configured calendar event-ലെ attendees-ക്കായി ഒരു reminder തയ്യാറാക്കി, അത് അയയ്ക്കുന്നതിന് മുമ്പ് approval-നായി കാത്തിരിക്കുക.*

---

### Site Builder

**ശ്രദ്ധ:** ഒരൊറ്റ prompt-ിൽ നിന്ന് end-to-end website സൃഷ്ടിക്കൽ.

**ലഭ്യമായ tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 ഉപയോഗിച്ച്, administrators enable ചെയ്യുന്നിടത്ത് configured managed-service, approval, reminder, calendar, SMS tools എന്നിവ ലഭ്യമായേക്കാം.

**ഇത് നന്നായി ചെയ്യുന്ന കാര്യങ്ങൾ:**
- വിവരണം നൽകിയ business type-നായി multi-phase site build plan സൃഷ്ടിക്കൽ
- ഓരോ phase-വും സ്വയം execute ചെയ്യൽ — structure, content, navigation, design
- manual intervention ആവശ്യമില്ലാതെ mid-plan errors-ൽ നിന്ന് recover ചെയ്യൽ
- build-ന്റെ ഭാഗമായി recommended plugins install ചെയ്യൽ
- chat interface-ൽ നിന്ന് നേരിട്ട് contact forms സൃഷ്ടിക്കൽ (Superdav AI Agent v1.10.0+)
- approval gates, reminder records enabled ആയപ്പോൾ duplicate notifications ഇല്ലാതെ launch reminders അല്ലെങ്കിൽ attendee follow-up coordinate ചെയ്യൽ

**Starter suggestions:**
- *gallery post type, booking page, contact form എന്നിവയുള്ള ഒരു photography portfolio site നിർമ്മിക്കുക.*
- *online menu, opening hours, table-booking enquiry form എന്നിവയുള്ള ഒരു restaurant website സൃഷ്ടിക്കുക.*
- *service pages, portfolio section, blog എന്നിവയുള്ള ഒരു freelance consulting site സജ്ജമാക്കുക.*
- *site builder ഉപയോഗിച്ച് Contact page-ലേക്ക് ഒരു contact form ചേർക്കുക.*
- *site launch checklist approved ആയതിന് ശേഷം, configured stakeholder contact-ലേക്ക് ഒരു SMS reminder അയയ്ക്കുക.*

---

### Design Studio

**ശ്രദ്ധ:** ദൃശ്യ customisation — colours, typography, CSS, block patterns.

**ലഭ്യമായ tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ഇത് നന്നായി ചെയ്യുന്ന കാര്യങ്ങൾ:**
- പേരുള്ള theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) apply ചെയ്യൽ
- theme.json വഴി global typography, colour palettes എന്നിവ fine-tune ചെയ്യൽ
- brand-specific overrides-ക്കായി custom CSS inject ചെയ്യൽ
- ഒരു page-ന്റെ screenshot എടുത്ത് design issues വിലയിരുത്തൽ

**Starter suggestions:**
- *warm-editorial preset apply ചെയ്ത് ശേഷം primary colour #2d6a4f ആയി set ചെയ്യുക.*
- *homepage-ന്റെ screenshot എടുത്ത് നിങ്ങൾ എന്താണ് മെച്ചപ്പെടുത്തുക എന്ന് പറയുക.*
- *full-width background image, centred heading എന്നിവയുള്ള reusable hero block pattern സൃഷ്ടിക്കുക.*

### Plugin Manager

**ശ്രദ്ധ:** WordPress plugins കണ്ടെത്തൽ, install ചെയ്യൽ, manage ചെയ്യൽ.

**ലഭ്യമായ tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ഇത് നന്നായി ചെയ്യുന്ന കാര്യങ്ങൾ:**
- വിവരിച്ച use case-നായി മികച്ച plugin recommend ചെയ്യൽ
- registry-യിൽ നിന്ന് ability packs install ചെയ്യൽ
- category പ്രകാരം ലഭ്യമായ ability catalogue browse ചെയ്യൽ

**Starter suggestions:**
- *membership directory-ക്കുള്ള മികച്ച plugin ഏതാണ്?*
- *WooCommerce abilities pack install ചെയ്യുക.*
- *ലഭ്യമായ എല്ലാ ecommerce ability packs കാണിക്കുക.*

---

### Support Assistant

**ശ്രദ്ധ:** site content, settings, WordPress configuration എന്നിവയെക്കുറിച്ചുള്ള ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകൽ.

**ലഭ്യമായ tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ഇത് നന്നായി ചെയ്യുന്ന കാര്യങ്ങൾ:**
- നിലവിലെ സൈറ്റ് ക്രമീകരണങ്ങളും ഓപ്ഷനുകളും കണ്ടെത്തൽ
- സൈറ്റിൽ ക്രമീകരിച്ചിരിക്കുന്ന പോസ്റ്റ് തരങ്ങൾ, ടാക്സോണമികൾ, മെനുകൾ എന്നിവ വിശദീകരിക്കൽ
- ലൈവ് മൂല്യങ്ങൾ വായിച്ച് "ഈ ക്രമീകരണം എന്താണ് ചെയ്യുന്നത്?" എന്ന ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകൽ
- മാറ്റങ്ങൾ വരുത്തുന്നതിന് മുമ്പ് വായനയ്ക്ക് മാത്രമുള്ള ഡയഗ്നോസ്റ്റിക് പാളിയായി പ്രവർത്തിക്കൽ

**തുടക്ക നിർദ്ദേശങ്ങൾ:**
- *ഈ സൈറ്റിൽ നിലവിൽ സജീവമായിരിക്കുന്ന പ്ലഗിനുകളും ക്രമീകരണങ്ങളും ഏവയാണ്?*
- *ഈ സൈറ്റിൽ രജിസ്റ്റർ ചെയ്തിട്ടുള്ള എല്ലാ കസ്റ്റം പോസ്റ്റ് തരങ്ങളും പട്ടികപ്പെടുത്തുക.*
- *ഏത് നാവിഗേഷൻ മെനുകളുണ്ട്, അവ എവിടെയാണ് നിയോഗിച്ചിരിക്കുന്നത്?*

---

## Superdav ഓട്ടോമേഷൻ സംയോജനങ്ങൾ

Superdav AI Agent v1.18.0 സംയോജനങ്ങൾ ക്രമീകരിച്ചിരിക്കുമ്പോൾ, ബിൽറ്റ്-ഇൻ ഏജന്റുകൾക്ക് കൂടുതൽ സുരക്ഷിതവും ഷെഡ്യൂൾ പരിഗണിക്കുന്നതുമായ ഓട്ടോമേഷൻ വർക്ക്‌ഫ്ലോകളിൽ പങ്കെടുക്കാൻ കഴിയും:

- **Google Calendar വായനാ ഉപകരണങ്ങൾ** തുടർപ്രവർത്തനം തയ്യാറാക്കുന്നതിന് മുമ്പ് ക്രമീകരിച്ച കലണ്ടറുകളും ഇവന്റുകളും പരിശോധിക്കാൻ ഏജന്റുകളെ അനുവദിക്കുന്നു.
- **കോൺടാക്റ്റ്, പങ്കെടുക്കുന്നവരുടെ മാപ്പിംഗ്** ഇവന്റിലെ പങ്കെടുക്കുന്നവരെ WordPress ഉപയോക്താക്കളുമായോ അറിയാവുന്ന കോൺടാക്റ്റുകളുമായോ പൊരുത്തപ്പെടുത്താൻ സഹായിക്കുന്നു.
- **മാനുഷിക അംഗീകാര ഗേറ്റുകൾ** അംഗീകൃത ഉപയോക്താവ് പരിശോധിച്ച് സ്ഥിരീകരിക്കുന്നതുവരെ സൂക്ഷ്മമായ പ്രവർത്തനങ്ങൾ താൽക്കാലികമായി നിർത്തുന്നു.
- **റിമൈൻഡർ രേഖകൾ** ഷെഡ്യൂൾ ചെയ്ത ജോലികൾ വീണ്ടും ശ്രമിക്കുമ്പോഴോ ആവർത്തിക്കുമ്പോഴോ ഡ്യൂപ്ലിക്കേറ്റ് അറിയിപ്പുകൾ ഒഴിവാക്കുന്നു.
- **TextBee SMS അറിയിപ്പുകൾ** SMS ക്രെഡൻഷ്യലുകളും വർക്ക്‌ഫ്ലോ അനുമതികളും പ്രവർത്തനക്ഷമമാക്കിയിരിക്കുമ്പോൾ മാത്രം ക്രമീകരിച്ച ടെക്സ്റ്റ് സന്ദേശങ്ങൾ അയയ്ക്കുന്നു.

ശുപാർശ ചെയ്യുന്ന വർക്ക്‌ഫ്ലോ: സന്ദേശമോ പ്രവർത്തനമോ തയ്യാറാക്കാൻ ഏജന്റിനോട് ആവശ്യപ്പെടുക, അംഗീകാര പ്രോംപ്റ്റ് പരിശോധിക്കുക, തുടർന്ന് അംഗീകരിച്ച പ്രവർത്തനം പുനരാരംഭിക്കാൻ അനുവദിക്കുക. ആവർത്തിക്കുന്ന റിമൈൻഡറുകൾക്കായി, ഒരേ ഇവന്റിനോ കോൺടാക്റ്റിനോ ആവർത്തിച്ച് അറിയിപ്പ് ലഭിക്കാതിരിക്കാൻ റിമൈൻഡർ ഡീഡ്യൂപ്ലിക്കേഷൻ പ്രവർത്തനക്ഷമമാക്കി നിലനിർത്തുക.

---

## ഏജന്റുകൾ കസ്റ്റമൈസ് ചെയ്യൽ

ഓരോ ബിൽറ്റ്-ഇൻ ഏജന്റിനെയും `gratis_ai_agent_agents` ഫിൽട്ടറിലൂടെ വിപുലീകരിക്കുകയോ മാറ്റിസ്ഥാപിക്കുകയോ ചെയ്യാം.

### നിലവിലുള്ള ഏജന്റിലേക്ക് കസ്റ്റം സിസ്റ്റം പ്രോംപ്റ്റ് ചേർക്കൽ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### പുതിയ ഏജന്റ് രജിസ്റ്റർ ചെയ്യൽ

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

ഫിൽട്ടർ പ്രവർത്തിച്ചതിന് പിന്നാലെ പുതിയ ഏജന്റ് ഏജന്റ് പിക്കറിൽ പ്രത്യക്ഷപ്പെടും.

### ബിൽറ്റ്-ഇൻ ഏജന്റ് നീക്കം ചെയ്യൽ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
