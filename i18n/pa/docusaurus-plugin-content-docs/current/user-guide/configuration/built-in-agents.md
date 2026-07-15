---
title: ਬਿਲਟ-ਇਨ ਏਜੰਟ
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# ਬਿਲਟ-ਇਨ ਏਜੰਟ

Gratis AI Agent v1.9.0 ਪੰਜ ਬਿਲਟ-ਇਨ ਏਜੰਟਾਂ ਨਾਲ ਆਉਂਦਾ ਹੈ, ਹਰ ਇੱਕ ਧਿਆਨ-ਕੇਂਦ੍ਰਿਤ ਟੂਲਾਂ ਦੇ ਸੈੱਟ, ਤਿਆਰ ਕੀਤੇ system prompt, ਅਤੇ ਉਸ ਖੇਤਰ ਦੇ ਆਮ ਕੰਮਾਂ ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਸ਼ੁਰੂਆਤੀ ਸੁਝਾਵਾਂ ਨਾਲ ਪਹਿਲਾਂ ਤੋਂ ਸੰਰਚਿਤ ਹੈ। ਏਜੰਟਾਂ ਵਿਚਕਾਰ ਬਦਲਣ ਨਾਲ ਸਹਾਇਕ ਕੀ ਕਰ ਸਕਦਾ ਹੈ ਅਤੇ ਕਿਵੇਂ ਜਵਾਬ ਦਿੰਦਾ ਹੈ, ਇਹ ਬਦਲ ਜਾਂਦਾ ਹੈ — ਤੁਹਾਡੇ ਵੱਲੋਂ ਕਿਸੇ ਵੀ ਸੰਰਚਨਾ ਤੋਂ ਬਿਨਾਂ। Superdav AI Agent v1.18.0 ਇਨ੍ਹਾਂ ਵਰਕਫ਼ਲੋਜ਼ ਵਿੱਚ schedule-aware ਟੂਲ, reminder ਰਿਕਾਰਡ, approval gates, ਅਤੇ SMS notifications ਸ਼ਾਮਲ ਕਰ ਸਕਦਾ ਹੈ ਜਦੋਂ ਸੰਬੰਧਿਤ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸੰਰਚਿਤ ਹੋਣ।

## ਏਜੰਟ ਕੀ ਹੈ? {#what-is-an-agent}

ਹਰ ਏਜੰਟ ਇੱਕ ਨਾਮਿਤ ਸੰਰਚਨਾ ਪ੍ਰੋਫ਼ਾਈਲ ਹੈ ਜੋ ਇਹਨਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ:

- **ਟੂਲ** — ਉਹ ਸਮਰੱਥਾਵਾਂ ਜਿਨ੍ਹਾਂ ਨੂੰ ਏਜੰਟ ਵਰਤਣ ਦੀ ਇਜਾਜ਼ਤ ਰੱਖਦਾ ਹੈ (ਉਦਾਹਰਨ ਲਈ, Content Writer ਕੋਲ ਪੋਸਟ-ਬਣਾਉਣ ਦੀਆਂ ਸਮਰੱਥਾਵਾਂ ਤੱਕ ਪਹੁੰਚ ਹੁੰਦੀ ਹੈ; Design Studio ਕੋਲ CSS ਅਤੇ theme.json ਸਮਰੱਥਾਵਾਂ ਤੱਕ ਪਹੁੰਚ ਹੁੰਦੀ ਹੈ)
- **System prompt** — ਹਦਾਇਤਾਂ ਜੋ ਏਜੰਟ ਦਾ ਲਹਿਜ਼ਾ, ਤਰਜੀਹਾਂ, ਅਤੇ ਪਾਬੰਦੀਆਂ ਸੈੱਟ ਕਰਦੀਆਂ ਹਨ
- **ਸੁਝਾਵ** — ਪਹਿਲਾਂ ਤੋਂ ਲਿਖੇ prompts ਜੋ chat interface ਵਿੱਚ ਦਿਖਾਏ ਜਾਂਦੇ ਹਨ ਤਾਂ ਜੋ ਤੁਸੀਂ ਜਲਦੀ ਸ਼ੁਰੂ ਕਰ ਸਕੋ

## ਏਜੰਟ ਪਿਕਰ ਤੱਕ ਪਹੁੰਚਣਾ {#accessing-the-agent-picker}

1. WordPress admin sidebar ਵਿੱਚ **Gratis AI Agent** ਪੈਨਲ ਖੋਲ੍ਹੋ।
2. chat header ਦੇ ਉੱਪਰ-ਖੱਬੇ ਵਿੱਚ **ਏਜੰਟ ਆਇਕਨ** ਤੇ ਕਲਿੱਕ ਕਰੋ (ਆਇਕਨ ਸਰਗਰਮ ਏਜੰਟ ਨੂੰ ਦਰਸਾਉਣ ਲਈ ਬਦਲਦਾ ਹੈ)।
3. **Agent Picker** ਇੱਕ form-table overlay ਵਜੋਂ ਖੁਲ੍ਹਦਾ ਹੈ। ਹਰ ਏਜੰਟ ਆਪਣੇ ਆਇਕਨ, ਨਾਮ, ਅਤੇ ਇੱਕ-ਲਾਈਨ ਵੇਰਵੇ ਨਾਲ ਸੂਚੀਬੱਧ ਹੁੰਦਾ ਹੈ।
4. ਇਸਨੂੰ ਸਰਗਰਮ ਕਰਨ ਲਈ ਕਿਸੇ ਏਜੰਟ ਕਤਾਰ ਤੇ ਕਲਿੱਕ ਕਰੋ। chat header ਤੁਰੰਤ ਅੱਪਡੇਟ ਹੁੰਦਾ ਹੈ।

ਤੁਸੀਂ ਗੱਲਬਾਤ ਦੇ ਵਿਚਕਾਰ ਵੀ ਏਜੰਟ ਬਦਲ ਸਕਦੇ ਹੋ — ਨਵੇਂ ਏਜੰਟ ਦਾ system prompt ਅਗਲੇ ਸੁਨੇਹੇ ਤੋਂ ਲਾਗੂ ਹੋ ਜਾਂਦਾ ਹੈ।

## ਪੰਜ ਬਿਲਟ-ਇਨ ਏਜੰਟ {#the-five-built-in-agents}

### Content Writer {#content-writer}

**ਧਿਆਨ:** ਪੋਸਟਾਂ, ਪੇਜਾਂ, ਅਤੇ ਸੰਪਰਕ ਫਾਰਮ ਬਣਾਉਣਾ ਅਤੇ ਸੋਧਣਾ।

**ਉਪਲਬਧ ਟੂਲ:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`। Superdav AI Agent v1.18.0 ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਮਰੱਥ ਹੋਣ ਨਾਲ, ਸੰਰਚਿਤ calendar context, approval gates, reminders, ਅਤੇ SMS notification ਟੂਲ ਵੀ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਵਰਕਫ਼ਲੋਜ਼ ਲਈ ਉਪਲਬਧ ਹੋ ਸਕਦੇ ਹਨ।

**ਇਹ ਕਿਸ ਵਿੱਚ ਵਧੀਆ ਹੈ:**
- brief ਜਾਂ outline ਤੋਂ blog posts ਦਾ ਮਸੌਦਾ ਤਿਆਰ ਕਰਨਾ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨਾ
- ਨਵੀਂ ਸਾਈਟ ਲਈ landing pages ਦੇ batches ਬਣਾਉਣਾ
- ਸੰਪਰਕ ਅਤੇ enquiry forms ਬਣਾਉਣਾ
- URL ਜਾਂ ਖੋਜ ਤੋਂ ਪੋਸਟਾਂ ਤੇ featured images ਸੈੱਟ ਕਰਨਾ
- ਸੰਰਚਿਤ Google Calendar context ਤੋਂ ਇਵੈਂਟ follow-up ਸੁਨੇਹਿਆਂ ਦਾ ਮਸੌਦਾ ਤਿਆਰ ਕਰਨਾ, ਫਿਰ notifications ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ approval ਲਈ ਰੁਕਣਾ

**ਸ਼ੁਰੂਆਤੀ ਸੁਝਾਵ:**
- *WordPress multisite ਦੇ ਫਾਇਦਿਆਂ ਬਾਰੇ 500-ਸ਼ਬਦਾਂ ਦੀ blog post ਲਿਖੋ।*
- *About, Services, ਅਤੇ Contact ਪੇਜ ਬਣਾਓ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ।*
- *Contact ਪੇਜ ਤੇ booking enquiry form ਸ਼ਾਮਲ ਕਰੋ।*
- *ਕੱਲ੍ਹ ਦੇ ਸੰਰਚਿਤ calendar event ਦੇ ਹਾਜ਼ਰੀਨਾਂ ਲਈ reminder ਦਾ ਮਸੌਦਾ ਤਿਆਰ ਕਰੋ ਅਤੇ ਇਸਨੂੰ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ approval ਦੀ ਉਡੀਕ ਕਰੋ।*

---

### Site Builder {#site-builder}

**ਧਿਆਨ:** ਇਕੱਲੇ prompt ਤੋਂ ਪੂਰੀ ਵੈੱਬਸਾਈਟ ਬਣਾਉਣਾ।

**ਉਪਲਬਧ ਟੂਲ:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`। Superdav AI Agent v1.18.0 ਨਾਲ, ਸੰਰਚਿਤ managed-service, approval, reminder, calendar, ਅਤੇ SMS ਟੂਲ ਉੱਥੇ ਉਪਲਬਧ ਹੋ ਸਕਦੇ ਹਨ ਜਿੱਥੇ administrators ਉਨ੍ਹਾਂ ਨੂੰ ਸਮਰੱਥ ਕਰਦੇ ਹਨ।

**ਇਹ ਕਿਸ ਵਿੱਚ ਵਧੀਆ ਹੈ:**
- ਵਰਣਿਤ business type ਲਈ multi-phase site build plan ਤਿਆਰ ਕਰਨਾ
- ਹਰ phase ਨੂੰ ਸਵੈਚਾਲਿਤ ਤੌਰ ਤੇ ਪੂਰਾ ਕਰਨਾ — structure, content, navigation, design
- manual intervention ਦੀ ਲੋੜ ਤੋਂ ਬਿਨਾਂ mid-plan ਗਲਤੀਆਂ ਤੋਂ ਸੰਭਲਣਾ
- build ਦੇ ਹਿੱਸੇ ਵਜੋਂ ਸਿਫ਼ਾਰਸ਼ੀ plugins ਇੰਸਟਾਲ ਕਰਨਾ
- chat interface ਤੋਂ ਸਿੱਧੇ contact forms ਬਣਾਉਣਾ (Superdav AI Agent v1.10.0+)
- approval gates ਅਤੇ reminder records ਸਮਰੱਥ ਹੋਣ ਤੇ duplicate notifications ਤੋਂ ਬਿਨਾਂ launch reminders ਜਾਂ attendee follow-up ਦਾ ਸਮਨਵਯ ਕਰਨਾ

**ਸ਼ੁਰੂਆਤੀ ਸੁਝਾਵ:**
- *gallery post type, booking page, ਅਤੇ contact form ਨਾਲ photography portfolio site ਬਣਾਓ।*
- *online menu, opening hours, ਅਤੇ table-booking enquiry form ਨਾਲ restaurant website ਬਣਾਓ।*
- *service pages, portfolio section, ਅਤੇ blog ਨਾਲ freelance consulting site ਸੈੱਟ ਅੱਪ ਕਰੋ।*
- *site builder ਦੀ ਵਰਤੋਂ ਕਰਕੇ Contact ਪੇਜ ਤੇ contact form ਸ਼ਾਮਲ ਕਰੋ।*
- *site launch checklist ਮਨਜ਼ੂਰ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਸੰਰਚਿਤ stakeholder contact ਨੂੰ SMS reminder ਭੇਜੋ।*

---

### Design Studio {#design-studio}

**ਧਿਆਨ:** ਦ੍ਰਿਸ਼ ਅਨੁਕੂਲਨ — ਰੰਗ, typography, CSS, ਅਤੇ block patterns।

**ਉਪਲਬਧ ਟੂਲ:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ਇਹ ਕਿਸ ਵਿੱਚ ਵਧੀਆ ਹੈ:**
- ਨਾਮਿਤ theme presets ਲਾਗੂ ਕਰਨਾ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json ਰਾਹੀਂ global typography ਅਤੇ colour palettes ਨੂੰ ਸੁਧਾਰਨਾ
- brand-specific overrides ਲਈ custom CSS inject ਕਰਨਾ
- ਕਿਸੇ ਪੇਜ ਦਾ screenshot ਲੈਣਾ ਅਤੇ design issues ਲਈ ਇਸਦੀ ਸਮੀਖਿਆ ਕਰਨਾ

**ਸ਼ੁਰੂਆਤੀ ਸੁਝਾਵ:**
- *warm-editorial preset ਲਾਗੂ ਕਰੋ ਅਤੇ ਫਿਰ primary colour ਨੂੰ #2d6a4f ਤੇ ਸੈੱਟ ਕਰੋ।*
- *homepage ਦਾ screenshot ਲਓ ਅਤੇ ਮੈਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਸੁਧਾਰੋਗੇ।*
- *full-width background image ਅਤੇ centred heading ਨਾਲ reusable hero block pattern ਬਣਾਓ।*

### Plugin Manager {#plugin-manager}

**ਧਿਆਨ:** WordPress plugins ਦੀ ਖੋਜ, ਇੰਸਟਾਲੇਸ਼ਨ, ਅਤੇ ਪ੍ਰਬੰਧਨ।

**ਉਪਲਬਧ ਟੂਲ:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ਇਹ ਕਿਸ ਵਿੱਚ ਵਧੀਆ ਹੈ:**
- ਵਰਣਿਤ use case ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ plugin ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕਰਨਾ
- registry ਤੋਂ ability packs ਇੰਸਟਾਲ ਕਰਨਾ
- category ਮੁਤਾਬਕ ਉਪਲਬਧ ability catalogue ਨੂੰ browse ਕਰਨਾ

**ਸ਼ੁਰੂਆਤੀ ਸੁਝਾਵ:**
- *membership directory ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ plugin ਕਿਹੜਾ ਹੈ?*
- *WooCommerce abilities pack ਇੰਸਟਾਲ ਕਰੋ।*
- *ਮੈਨੂੰ ਸਾਰੇ ਉਪਲਬਧ ecommerce ability packs ਦਿਖਾਓ।*

---

### Support Assistant {#support-assistant}

**ਧਿਆਨ:** ਸਾਈਟ ਸਮੱਗਰੀ, ਸੈਟਿੰਗਾਂ, ਅਤੇ WordPress configuration ਬਾਰੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣਾ।

**ਉਪਲਬਧ ਟੂਲ:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ਇਹ ਕੀ ਚੰਗੀ ਤਰ੍ਹਾਂ ਕਰਦਾ ਹੈ:**
- ਮੌਜੂਦਾ ਸਾਈਟ ਸੈਟਿੰਗਾਂ ਅਤੇ ਵਿਕਲਪਾਂ ਨੂੰ ਵੇਖਣਾ
- ਸਮਝਾਉਣਾ ਕਿ ਸਾਈਟ 'ਤੇ ਕਿਹੜੀਆਂ ਪੋਸਟ ਕਿਸਮਾਂ, ਟੈਕਸੋਨੋਮੀਆਂ, ਅਤੇ ਮੀਨੂ ਕਾਨਫਿਗਰ ਕੀਤੇ ਗਏ ਹਨ
- ਲਾਈਵ ਮੁੱਲ ਪੜ੍ਹ ਕੇ "ਇਹ ਸੈਟਿੰਗ ਕੀ ਕਰਦੀ ਹੈ?" ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣਾ
- ਤਬਦੀਲੀਆਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੇਵਲ-ਪੜ੍ਹਨ ਵਾਲੀ ਡਾਇਗਨੋਸਟਿਕ ਪਰਤ ਵਜੋਂ ਕੰਮ ਕਰਨਾ

**ਸ਼ੁਰੂਆਤੀ ਸੁਝਾਅ:**
- *ਇਸ ਸਾਈਟ 'ਤੇ ਇਸ ਵੇਲੇ ਕਿਹੜੇ plugin ਅਤੇ ਸੈਟਿੰਗਾਂ ਸਰਗਰਮ ਹਨ?*
- *ਇਸ ਸਾਈਟ 'ਤੇ ਰਜਿਸਟਰ ਕੀਤੀਆਂ ਸਾਰੀਆਂ ਕਸਟਮ ਪੋਸਟ ਕਿਸਮਾਂ ਦੀ ਸੂਚੀ ਦਿਓ।*
- *ਕਿਹੜੇ ਨੇਵੀਗੇਸ਼ਨ ਮੀਨੂ ਮੌਜੂਦ ਹਨ ਅਤੇ ਉਹ ਕਿੱਥੇ ਨਿਰਧਾਰਤ ਹਨ?*

---

## Superdav Automation ਇੰਟੀਗ੍ਰੇਸ਼ਨ {#superdav-automation-integrations}

ਜਦੋਂ Superdav AI Agent v1.18.0 ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਕਾਨਫਿਗਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਬਿਲਟ-ਇਨ ਏਜੰਟ ਹੋਰ ਸੁਰੱਖਿਅਤ ਸ਼ਡਿਊਲ-ਸਚੇਤ ਆਟੋਮੇਸ਼ਨ ਵਰਕਫਲੋ ਵਿੱਚ ਭਾਗ ਲੈ ਸਕਦੇ ਹਨ:

- **Google Calendar ਪੜ੍ਹਨ ਵਾਲੇ ਟੂਲ** ਏਜੰਟਾਂ ਨੂੰ ਫਾਲੋ-ਅੱਪ ਕੰਮ ਦਾ ਮਸੌਦਾ ਤਿਆਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕਾਨਫਿਗਰ ਕੀਤੇ ਕੈਲੰਡਰਾਂ ਅਤੇ ਇਵੈਂਟਾਂ ਦੀ ਜਾਂਚ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦੇ ਹਨ।
- **ਸੰਪਰਕ ਅਤੇ ਹਾਜ਼ਰ ਵਿਅਕਤੀ ਮੈਪਿੰਗ** ਇਵੈਂਟ ਭਾਗੀਦਾਰਾਂ ਨੂੰ WordPress ਵਰਤੋਂਕਾਰਾਂ ਜਾਂ ਜਾਣੇ-ਪਛਾਣੇ ਸੰਪਰਕਾਂ ਨਾਲ ਮਿਲਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।
- **ਮਨੁੱਖੀ ਮਨਜ਼ੂਰੀ ਗੇਟ** ਸੰਵੇਦਨਸ਼ੀਲ ਕਾਰਵਾਈਆਂ ਨੂੰ ਤਦ ਤੱਕ ਰੋਕਦੇ ਹਨ ਜਦ ਤੱਕ ਕੋਈ ਅਧਿਕਾਰਿਤ ਵਰਤੋਂਕਾਰ ਉਨ੍ਹਾਂ ਦੀ ਸਮੀਖਿਆ ਅਤੇ ਪੁਸ਼ਟੀ ਨਹੀਂ ਕਰਦਾ।
- **ਰੀਮਾਈਂਡਰ ਰਿਕਾਰਡ** ਜਦੋਂ ਸ਼ਡਿਊਲ ਕੀਤੇ ਕੰਮ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਜਾਂ ਦੁਹਰਾਉਂਦੇ ਹਨ ਤਾਂ ਡੁਪਲੀਕੇਟ ਸੂਚਨਾਵਾਂ ਨੂੰ ਰੋਕਦੇ ਹਨ।
- **TextBee SMS ਸੂਚਨਾਵਾਂ** ਕਾਨਫਿਗਰ ਕੀਤੇ ਟੈਕਸਟ ਸੁਨੇਹੇ ਸਿਰਫ਼ ਤਦ ਭੇਜਦੀਆਂ ਹਨ ਜਦੋਂ SMS ਕ੍ਰੈਡੈਂਸ਼ਲ ਅਤੇ ਵਰਕਫਲੋ ਅਨੁਮਤੀਆਂ ਸਮਰੱਥ ਹੁੰਦੀਆਂ ਹਨ।

ਸਿਫ਼ਾਰਸ਼ੀ ਵਰਕਫਲੋ: ਏਜੰਟ ਨੂੰ ਸੁਨੇਹਾ ਜਾਂ ਕਾਰਵਾਈ ਤਿਆਰ ਕਰਨ ਲਈ ਕਹੋ, ਮਨਜ਼ੂਰੀ ਪ੍ਰੌਮਪਟ ਦੀ ਸਮੀਖਿਆ ਕਰੋ, ਫਿਰ ਮਨਜ਼ੂਰ ਕੀਤੀ ਕਾਰਵਾਈ ਨੂੰ ਮੁੜ ਸ਼ੁਰੂ ਹੋਣ ਦਿਓ। ਦੁਹਰਾਉਂਦੇ ਰੀਮਾਈਂਡਰਾਂ ਲਈ, ਰੀਮਾਈਂਡਰ ਡੀਡੁਪਲੀਕੇਸ਼ਨ ਸਮਰੱਥ ਰੱਖੋ ਤਾਂ ਜੋ ਉਹੀ ਇਵੈਂਟ ਜਾਂ ਸੰਪਰਕ ਨੂੰ ਵਾਰ-ਵਾਰ ਸੂਚਿਤ ਨਾ ਕੀਤਾ ਜਾਵੇ।

---

## ਏਜੰਟਾਂ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰਨਾ {#customising-agents}

ਹਰ ਬਿਲਟ-ਇਨ ਏਜੰਟ ਨੂੰ `gratis_ai_agent_agents` ਫਿਲਟਰ ਰਾਹੀਂ ਵਧਾਇਆ ਜਾਂ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ।

### ਮੌਜੂਦਾ ਏਜੰਟ ਵਿੱਚ ਕਸਟਮ ਸਿਸਟਮ ਪ੍ਰੌਮਪਟ ਜੋੜਨਾ {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### ਨਵਾਂ ਏਜੰਟ ਰਜਿਸਟਰ ਕਰਨਾ {#registering-a-new-agent}

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

ਨਵਾਂ ਏਜੰਟ ਫਿਲਟਰ ਚੱਲਣ ਦੇ ਤੁਰੰਤ ਬਾਅਦ Agent Picker ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ।

### ਬਿਲਟ-ਇਨ ਏਜੰਟ ਹਟਾਉਣਾ {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
