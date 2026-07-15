---
title: ಅಂತರ್ನಿರ್ಮಿತ ಏಜೆಂಟ್‌ಗಳು
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# ಅಂತರ್ನಿರ್ಮಿತ Agents

Gratis AI Agent v1.9.0 ಐದು ಅಂತರ್ನಿರ್ಮಿತ agents ಅನ್ನು ಒದಗಿಸುತ್ತದೆ. ಪ್ರತಿಯೊಂದೂ ಕೇಂದ್ರೀಕೃತ tools ಸಮೂಹ, ಹೊಂದಿಸಿದ system prompt, ಮತ್ತು ಆ ಕ್ಷೇತ್ರದ ಸಾಮಾನ್ಯ ಕಾರ್ಯಗಳಿಗೆ ಹೊಂದುವ starter suggestions ಗಳೊಂದಿಗೆ ಮುಂಚಿತವಾಗಿ ಸಂರಚಿಸಲಾಗಿದೆ. Agents ನಡುವೆ ಬದಲಿಸಿದರೆ assistant ಏನು ಮಾಡಬಹುದು ಮತ್ತು ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ ಎಂಬುದು ಬದಲಾಗುತ್ತದೆ — ನಿಮ್ಮಿಂದ ಯಾವುದೇ configuration ಅಗತ್ಯವಿಲ್ಲ. ಸಂಬಂಧಿತ integrations ಸಂರಚಿಸಲ್ಪಟ್ಟಾಗ Superdav AI Agent v1.18.0 ಈ workflows ಗೆ schedule-aware tools, reminder records, approval gates, ಮತ್ತು SMS notifications ಸೇರಿಸಬಹುದು.

## Agent ಎಂದರೇನು? {#what-is-an-agent}

ಪ್ರತಿ agent ಒಂದು ಹೆಸರಿರುವ configuration profile ಆಗಿದ್ದು, ಇವುಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ:

- **Tools** — agent ಗೆ ಬಳಸಲು ಅನುಮತಿಸಲಾದ ಸಾಮರ್ಥ್ಯಗಳು (ಉದಾ. Content Writer ಗೆ post-creation ಸಾಮರ್ಥ್ಯಗಳಿಗೆ access ಇದೆ; Design Studio ಗೆ CSS ಮತ್ತು theme.json ಸಾಮರ್ಥ್ಯಗಳಿಗೆ access ಇದೆ)
- **System prompt** — agent ನ ಧ್ವನಿ, ಆದ್ಯತೆಗಳು, ಮತ್ತು ನಿರ್ಬಂಧಗಳನ್ನು ನಿಗದಿಪಡಿಸುವ ಸೂಚನೆಗಳು
- **Suggestions** — ನೀವು ಬೇಗ ಪ್ರಾರಂಭಿಸಲು chat interface ನಲ್ಲಿ ತೋರಿಸುವ ಪೂರ್ವಲಿಖಿತ prompts

## Agent Picker ಪ್ರವೇಶಿಸುವುದು {#accessing-the-agent-picker}

1. WordPress admin sidebar ನಲ್ಲಿ **Gratis AI Agent** panel ತೆರೆಯಿರಿ.
2. chat header ನ ಮೇಲಿನ-ಎಡ ಭಾಗದಲ್ಲಿರುವ **agent icon** ಕ್ಲಿಕ್ ಮಾಡಿ (ಸಕ್ರಿಯ agent ಅನ್ನು ಪ್ರತಿಬಿಂಬಿಸಲು icon ಬದಲಾಗುತ್ತದೆ).
3. **Agent Picker** form-table overlay ಆಗಿ ತೆರೆಯುತ್ತದೆ. ಪ್ರತಿ agent ತನ್ನ icon, ಹೆಸರು, ಮತ್ತು ಒಂದು-ಸಾಲಿನ ವಿವರಣೆಯೊಂದಿಗೆ ಪಟ್ಟಿ ಮಾಡಲಾಗುತ್ತದೆ.
4. ಅದನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು agent row ಕ್ಲಿಕ್ ಮಾಡಿ. chat header ತಕ್ಷಣ update ಆಗುತ್ತದೆ.

ನೀವು ಸಂಭಾಷಣೆಯ ಮಧ್ಯದಲ್ಲಿಯೂ agents ಬದಲಿಸಬಹುದು — ಹೊಸ agent ನ system prompt ಮುಂದಿನ message ಇಂದಲೇ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ.

## ಐದು ಅಂತರ್ನಿರ್ಮಿತ Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**ಕೇಂದ್ರೀಕರಣ:** posts, pages, ಮತ್ತು contact forms ರಚಿಸುವುದು ಮತ್ತು ಸಂಪಾದಿಸುವುದು.

**ಲಭ್ಯ tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations ಸಕ್ರಿಯವಾಗಿದ್ದರೆ, ಸಂರಚಿಸಿದ calendar context, approval gates, reminders, ಮತ್ತು SMS notification tools ಅನುಮೋದಿತ workflows ಗೆ ಲಭ್ಯವಿರಬಹುದು.

**ಇದು ಚೆನ್ನಾಗಿ ಮಾಡುವ ಕೆಲಸಗಳು:**
- brief ಅಥವಾ outline ನಿಂದ blog posts ಕರಡು ಮಾಡುವುದು ಮತ್ತು ಪ್ರಕಟಿಸುವುದು
- ಹೊಸ site ಗಾಗಿ landing pages ಗಳ batches ರಚಿಸುವುದು
- contact ಮತ್ತು enquiry forms ನಿರ್ಮಿಸುವುದು
- URL ಅಥವಾ search ನಿಂದ posts ಗೆ featured images ಹೊಂದಿಸುವುದು
- ಸಂರಚಿಸಿದ Google Calendar context ನಿಂದ event follow-up messages ಕರಡು ಮಾಡಿ, notifications ಕಳುಹಿಸುವ ಮೊದಲು approval ಗಾಗಿ ವಿರಾಮಗೊಳ್ಳುವುದು

**Starter suggestions:**
- *WordPress multisite ನ ಪ್ರಯೋಜನಗಳ ಬಗ್ಗೆ 500 ಪದಗಳ blog post ಬರೆಯಿರಿ.*
- *About, Services, ಮತ್ತು Contact page ರಚಿಸಿ ಪ್ರಕಟಿಸಿ.*
- *Contact page ಗೆ booking enquiry form ಸೇರಿಸಿ.*
- *ನಾಳೆಯ ಸಂರಚಿಸಿದ calendar event ನ attendees ಗಾಗಿ reminder ಕರಡು ಮಾಡಿ ಮತ್ತು ಅದನ್ನು ಕಳುಹಿಸುವ ಮೊದಲು approval ಗೆ ಕಾಯಿರಿ.*

---

### Site Builder {#site-builder}

**ಕೇಂದ್ರೀಕರಣ:** ಒಂದೇ prompt ನಿಂದ ಸಂಪೂರ್ಣ website creation.

**ಲಭ್ಯ tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 ಜೊತೆಗೆ, administrators ಸಕ್ರಿಯಗೊಳಿಸಿದಲ್ಲಿ ಸಂರಚಿಸಿದ managed-service, approval, reminder, calendar, ಮತ್ತು SMS tools ಲಭ್ಯವಿರಬಹುದು.

**ಇದು ಚೆನ್ನಾಗಿ ಮಾಡುವ ಕೆಲಸಗಳು:**
- ವಿವರಿಸಿದ business type ಗಾಗಿ multi-phase site build plan ರಚಿಸುವುದು
- ಪ್ರತಿ phase ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸುವುದು — structure, content, navigation, design
- manual intervention ಅಗತ್ಯವಿಲ್ಲದೆ plan ಮಧ್ಯದ errors ನಿಂದ ಚೇತರಿಸಿಕೊಳ್ಳುವುದು
- build ನ ಭಾಗವಾಗಿ ಶಿಫಾರಸು ಮಾಡಿದ plugins ಸ್ಥಾಪಿಸುವುದು
- chat interface ನಿಂದಲೇ contact forms ರಚಿಸುವುದು (Superdav AI Agent v1.10.0+)
- approval gates ಮತ್ತು reminder records ಸಕ್ರಿಯವಾಗಿದ್ದಾಗ duplicate notifications ಇಲ್ಲದೆ launch reminders ಅಥವಾ attendee follow-up ಸಂಯೋಜಿಸುವುದು

**Starter suggestions:**
- *gallery post type, booking page, ಮತ್ತು contact form ಹೊಂದಿರುವ photography portfolio site ನಿರ್ಮಿಸಿ.*
- *online menu, opening hours, ಮತ್ತು table-booking enquiry form ಹೊಂದಿರುವ restaurant website ರಚಿಸಿ.*
- *service pages, portfolio section, ಮತ್ತು blog ಹೊಂದಿರುವ freelance consulting site set up ಮಾಡಿ.*
- *site builder ಬಳಸಿ Contact page ಗೆ contact form ಸೇರಿಸಿ.*
- *site launch checklist ಅನುಮೋದನೆಯಾದ ನಂತರ, ಸಂರಚಿಸಿದ stakeholder contact ಗೆ SMS reminder ಕಳುಹಿಸಿ.*

---

### Design Studio {#design-studio}

**ಕೇಂದ್ರೀಕರಣ:** ದೃಶ್ಯ customisation — colours, typography, CSS, ಮತ್ತು block patterns.

**ಲಭ್ಯ tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ಇದು ಚೆನ್ನಾಗಿ ಮಾಡುವ ಕೆಲಸಗಳು:**
- ಹೆಸರಿತ theme presets ಅನ್ವಯಿಸುವುದು (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json ಮೂಲಕ global typography ಮತ್ತು colour palettes ಸೂಕ್ಷ್ಮವಾಗಿ ಹೊಂದಿಸುವುದು
- brand-specific overrides ಗಾಗಿ custom CSS inject ಮಾಡುವುದು
- page ನ screenshot ತೆಗೆದು design issues ಗಾಗಿ review ಮಾಡುವುದು

**Starter suggestions:**
- *warm-editorial preset ಅನ್ವಯಿಸಿ, ನಂತರ primary colour ಅನ್ನು #2d6a4f ಗೆ ಹೊಂದಿಸಿ.*
- *homepage ನ screenshot ತೆಗೆದು, ನೀವು ಏನು ಸುಧಾರಿಸುತ್ತೀರಿ ಎಂದು ತಿಳಿಸಿ.*
- *full-width background image ಮತ್ತು centred heading ಹೊಂದಿರುವ reusable hero block pattern ರಚಿಸಿ.*

### Plugin Manager {#plugin-manager}

**ಕೇಂದ್ರೀಕರಣ:** WordPress plugins ಹುಡುಕುವುದು, ಸ್ಥಾಪಿಸುವುದು, ಮತ್ತು ನಿರ್ವಹಿಸುವುದು.

**ಲಭ್ಯ tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ಇದು ಚೆನ್ನಾಗಿ ಮಾಡುವ ಕೆಲಸಗಳು:**
- ವಿವರಿಸಿದ use case ಗಾಗಿ ಅತ್ಯುತ್ತಮ plugin ಶಿಫಾರಸು ಮಾಡುವುದು
- registry ನಿಂದ ability packs ಸ್ಥಾಪಿಸುವುದು
- category ಪ್ರಕಾರ ಲಭ್ಯ ability catalogue browse ಮಾಡುವುದು

**Starter suggestions:**
- *membership directory ಗಾಗಿ ಅತ್ಯುತ್ತಮ plugin ಯಾವುದು?*
- *WooCommerce abilities pack ಸ್ಥಾಪಿಸಿ.*
- *ಲಭ್ಯವಿರುವ ಎಲ್ಲಾ ecommerce ability packs ತೋರಿಸಿ.*

---

### Support Assistant {#support-assistant}

**ಕೇಂದ್ರೀಕರಣ:** site content, settings, ಮತ್ತು WordPress configuration ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವುದು.

**ಲಭ್ಯ tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ಇದು ಚೆನ್ನಾಗಿ ಮಾಡುವವು:**
- ಪ್ರಸ್ತುತ site settings ಮತ್ತು ಆಯ್ಕೆಗಳನ್ನು ಹುಡುಕುವುದು
- site‌ನಲ್ಲಿ ಯಾವ post types, taxonomies ಮತ್ತು menus configure ಮಾಡಲಾಗಿದೆ ಎಂಬುದನ್ನು ವಿವರಿಸುವುದು
- live values ಓದಿ "ಈ setting ಏನು ಮಾಡುತ್ತದೆ?" ಎಂಬ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವುದು
- ಬದಲಾವಣೆಗಳನ್ನು ಮಾಡುವ ಮೊದಲು read-only diagnostic layer ಆಗಿ ಸೇವೆ ನೀಡುವುದು

**ಆರಂಭಿಕ ಸಲಹೆಗಳು:**
- *ಈ site‌ನಲ್ಲಿ ಪ್ರಸ್ತುತ ಯಾವ plugins ಮತ್ತು settings ಸಕ್ರಿಯವಾಗಿವೆ?*
- *ಈ site‌ನಲ್ಲಿ register ಮಾಡಿರುವ ಎಲ್ಲಾ custom post types ಪಟ್ಟಿ ಮಾಡಿ.*
- *ಯಾವ navigation menus ಇವೆ ಮತ್ತು ಅವುಗಳನ್ನು ಎಲ್ಲಿ assign ಮಾಡಲಾಗಿದೆ?*

---

## Superdav Automation Integrations {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 integrations configure ಮಾಡಿದಾಗ, ಅಂತರ್ನಿರ್ಮಿತ agents ಹೆಚ್ಚು ಸುರಕ್ಷಿತವಾದ schedule-aware automation workflows‌ಗಳಲ್ಲಿ ಭಾಗವಹಿಸಬಹುದು:

- **Google Calendar read tools** follow-up ಕೆಲಸವನ್ನು draft ಮಾಡುವ ಮೊದಲು configure ಮಾಡಿದ calendars ಮತ್ತು events ಪರಿಶೀಲಿಸಲು agents‌ಗೆ ಅವಕಾಶ ಕೊಡುತ್ತವೆ.
- **Contact ಮತ್ತು attendee mapping** event participants‌ಗಳನ್ನು WordPress users ಅಥವಾ ತಿಳಿದಿರುವ contacts‌ಗಳಿಗೆ match ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
- **Human approval gates** authorised user ಅವುಗಳನ್ನು review ಮಾಡಿ confirm ಮಾಡುವವರೆಗೆ sensitive actions‌ಗಳನ್ನು pause ಮಾಡುತ್ತವೆ.
- **Reminder records** scheduled jobs retry ಅಥವಾ repeat ಆದಾಗ duplicate notifications ತಡೆಯುತ್ತವೆ.
- **TextBee SMS notifications** SMS credentials ಮತ್ತು workflow permissions enable ಆಗಿರುವಾಗ ಮಾತ್ರ configure ಮಾಡಿದ text messages ಕಳುಹಿಸುತ್ತವೆ.

ಶಿಫಾರಸು ಮಾಡಿದ workflow: message ಅಥವಾ action ಸಿದ್ಧಪಡಿಸಲು agent‌ಗೆ ಹೇಳಿ, approval prompt ಅನ್ನು review ಮಾಡಿ, ನಂತರ approve ಮಾಡಿದ action ಮತ್ತೆ ಮುಂದುವರಿಯಲು ಅನುಮತಿಸಿ. Recurring reminders‌ಗಾಗಿ, reminder deduplication enable ಆಗಿಯೇ ಇರಲಿ. ಹೀಗಾದರೆ ಅದೇ event ಅಥವಾ contact‌ಗೆ ಮತ್ತೆ ಮತ್ತೆ notification ಹೋಗುವುದಿಲ್ಲ.

---

## Agents ಕಸ್ಟಮೈಸ್ ಮಾಡುವುದು {#customising-agents}

ಪ್ರತಿ built-in agent ಅನ್ನು `gratis_ai_agent_agents` filter ಮೂಲಕ ವಿಸ್ತರಿಸಬಹುದು ಅಥವಾ ಬದಲಾಯಿಸಬಹುದು.

### ಈಗಿರುವ agent‌ಗೆ custom system prompt ಸೇರಿಸುವುದು {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### ಹೊಸ agent register ಮಾಡುವುದು {#registering-a-new-agent}

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

filter run ಆದ ಕೂಡಲೇ ಹೊಸ agent Agent Picker‌ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.

### built-in agent ತೆಗೆದುಹಾಕುವುದು {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
