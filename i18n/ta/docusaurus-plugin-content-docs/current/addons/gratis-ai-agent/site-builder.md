---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 இல் அறிமுகப்படுத்தப்பட்டது) என்பது பல-படி (multi-step) வலைத்தளத்தை உருவாக்கும் சக்தியாகும். நீங்கள் ஏஜென்ட்டிடம் "ஒரு உணவக வலைத்தளத்தை உருவாக்கவும்" அல்லது "ஒரு வலைப்பதிவுடன் கூடிய போர்ட்ஃபோலியோவை உருவாக்கவும்" என்று கேட்டால், இந்த ஒருங்கிணைப்பாளர் (orchestrator) அந்த உயர் மட்ட இலக்கை ஒரு கட்டமைக்கப்பட்ட **திட்டமாக (plan)** பிரித்து, அதை நிறைவேற்றத் தேவையான plugins-களைக் கண்டறிந்து, ஒவ்வொரு படியையும் வரிசையாகச் செயல்படுத்தி, முன்னேற்றத்தைக் கண்காணித்து, பிழைகளிலிருந்து தானாகவே மீண்டு வரும்.

---

## இது எப்படி வேலை செய்கிறது

### 1. திட்ட உருவாக்கம் (Plan Generation)

ஏஜென்ட் ஒரு வலைத்தளத்தை உருவாக்கும் அறிவுறுத்தலைப் பெறும்போது, அது ஒரு JSON **சைட் திட்டத்தை (site plan)** உருவாக்க `create_site_plan` என்ற திறனை (ability) அழைக்கிறது. இந்தத் திட்டம் பின்வருவனவற்றை விவரிக்கிறது:

- **இலக்கு (Goal)** — முடிக்கப்பட்ட வலைத்தளம் என்ன செய்ய வேண்டும்
- **கட்டங்கள் (Phases)** — படிநிலைகளின் வரிசைப்படுத்தப்பட்ட குழுக்கள் (உதாரணமாக: _Setup_, _Content Types_, _Design_, _Content_)
- **படிகள் (Steps)** — ஒவ்வொரு கட்டத்திலும் உள்ள தனிப்பட்ட ability அழைப்புகள்
- **Plugin தேவைகள் (Plugin requirements)** — சில படிகள் இயங்குவதற்கு கட்டாயம் இருக்க வேண்டிய plugins-கள்
- **மாற்று வழிகள் (Fallbacks)** — ஒரு முதன்மை படி தோல்வியடைந்தால் பின்பற்ற வேண்டிய மாற்றுப் படிகள்

**மாதிரித் திட்டம் (சுருக்கப்பட்டது)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Plugin கண்டுபிடிப்பு (Plugin Discovery)

செயல்படுத்தல் தொடங்குவதற்கு முன், ஒருங்கிணைப்பாளர் திட்டத்தின் `plugin_requirements`-ஐ ஸ்கேன் செய்து, எந்த plugins ஏற்கனவே செயல்படுகின்றன என்பதைச் சரிபார்க்கிறது. காணாமல் போன plugins-களுக்கு, அது:

1. சிறந்த பொருத்தத்தைக் கண்டறிய `recommend_plugin` மூலம் பதிவேட்டில் (registry) தேடுகிறது
2. பரிந்துரையை உறுதிப்படுத்த ஏஜென்ட்டிடம் கேட்கிறது
3. ஒப்புதல் அளிக்கப்பட்டால் (அல்லது அமைப்புகளில் auto-install இயக்கப்பட்டிருந்தால்) நிறுவலைத் தூண்டுகிறது

Plugin கண்டுபிடிப்பு தோல்விகள் பெரிய பிரச்சனைகள் அல்ல — ஒருங்கிணைப்பாளர் பாதிக்கப்பட்ட படிகளை `skipped` என்று குறித்து, திட்டத்தின் மீதமுள்ள பகுதிகளுடன் தொடர்கிறது.

### 3. திட்டத்தை செயல்படுத்துதல் (Plan Execution)

ஒரு திட்ட ID உடன் `execute_site_plan` என்பதை ஒருங்கிணைப்பாளர் அழைக்கிறது. செயல்படுத்தல் கட்டம் வாரியாக, படி படியாக முன்னேறுகிறது:

- **படி குறிப்புகள் (Step references)** (`__ref:` முன்னொட்டு) — முந்தைய படிகளின் வெளியீடுகளைப் படிகள் குறிக்க முடியும். மேலே உள்ள உதாரணத்தில், `__ref:create_menu.menu_id` என்பது `create_menu` படி மூலம் திரும்பப் பெறப்பட்ட `menu_id`-க்கு மாற்றப்படுகிறது.
- **இணைப் படிகள் (Parallel steps)** — ஒரே கட்டத்தில் உள்ள, ஒன்றுக்கொன்று சார்பு இல்லாத படிகள், `parallel` என்ற flag அமைக்கப்படும்போது ஒரே நேரத்தில் அனுப்பப்படுகின்றன.
- **படி காலாவதி (Step timeout)** — ஒவ்வொரு படிக்கும் தனிப்பட்ட காலாவதி உள்ளது (இயல்புநிலை: `Ability Timeout` அமைப்பு). காலாவதியான படி `failed` என்று குறிக்கப்பட்டு, திட்டம் தொடர்கிறது.

### 4. முன்னேற்றத்தைக் கண்காணித்தல் (Progress Tracking)

செயல்பாட்டு நிலையைச் சரிபார்க்க எந்த நேரத்திலும் `get_plan_progress` என்பதை அழைக்கவும்:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

WP-CLI பயனர்கள் இதை வைத்து முன்னேற்றத்தைக் கண்காணிக்கலாம்:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. பிழை மீட்பு (Error Recovery)

ஒரு படி தோல்வியடையும்போது, ஒருங்கிணைப்பாளர் திட்டத்தில் வரையறுக்கப்பட்ட **மாற்று வழி (fallback)** படி உள்ளதா என்று சரிபார்க்கிறது:

- **மாற்று வழி கிடைக்கிறது (Fallback available)** — மாற்று வழி படி உடனடியாக முயற்சிக்கப்படுகிறது. அது வெற்றி பெற்றால், செயல்படுத்தல் தொடர்கிறது. அதுவும் தோல்வியடைந்தால், படி `failed` என்று குறிக்கப்பட்டு, அடுத்த படியுடன் செயல்படுத்தல் தொடர்கிறது.
- **மாற்று வழி இல்லை (No fallback)** — படி `failed` என்று குறிக்கப்படுகிறது. முக்கியமானதல்லாத படிகள் தவிர்க்கப்படும்; முக்கியமான படிகள் ( `required: true` என்று குறிக்கப்பட்டவை) தற்போதைய கட்டத்தை நிறுத்தி, கட்டம் அளவிலான மீட்பு முயற்சியைத் தூண்டுகிறது.

ஏஜென்ட் அனைத்து தோல்விகளையும் இறுதித் திட்டச் சுருக்கத்தில் தெரிவிக்கும், மேலும் மீட்க முடியாத பிழைகளுக்கான கையேடு திருத்த வழிமுறைகளையும் பரிந்துரைக்கலாம்.

---

## Site Plan Abilities

### `create_site_plan`

இயற்கை மொழி இலக்கு விளக்கத்திலிருந்து கட்டமைக்கப்பட்ட Site Plan-ஐ உருவாக்குகிறது.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | விரும்பிய வலைத்தளத்தின் இயற்கை மொழி விளக்கம் |
| `style` | string | No | காட்சி பாணி விருப்பம்: `minimal`, `bold`, `professional`, `playful`. இயல்புநிலை: இலக்கின் அடிப்படையில் ஏஜென்ட் தேர்வு செய்கிறது |
| `plugins` | array | No | திட்டத்தில் சேர்க்க வேண்டிய plugin slugs. தேவையான plugins-களை ஒருங்கிணைப்பாளர் தானாகவே சேர்க்கும். |
| `dry_run` | boolean | No | `true` என்றால், சேமிக்கவோ அல்லது செயல்படுத்தவோ செய்யாமல் plan JSON-ஐ திருப்பி அனுப்பும். இயல்புநிலை `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

முன்பே உருவாக்கப்பட்ட Site Plan-ஐ செயல்படுத்தத் தொடங்குகிறது.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | செயல்படுத்த வேண்டிய plan-இன் ID |
| `auto_install_plugins` | boolean | No | `true` என்றால், உறுதிப்படுத்தல் இல்லாமல் தேவையான plugins-களை தானாகவே நிறுவும். இயல்புநிலை `false` |
| `max_retries` | integer | No | அடுத்ததற்குச் செல்வதற்கு முன் தோல்வியடைந்த படியை மீண்டும் முயற்சி செய்ய வேண்டிய எண்ணிக்கை. இயல்புநிலை `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

ஒரு Site Plan-இன் தற்போதைய செயலாக்க நிலையைத் திருப்பி அளிக்கிறது.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | விசாரிக்க வேண்டிய Plan ID |

**Returns** மேலே உள்ள [Progress Tracking](#4-progress-tracking) இல் விவரிக்கப்பட்டுள்ள progress object.

---

### `handle_plan_error`

தோல்வியடைந்த ஒரு படியை கைகளால் சரிசெய்து, அடுத்த படியிலிருந்து plan செயல்பாட்டை மீண்டும் தொடங்குகிறது. தானியங்கி மீட்பு சாத்தியமில்லாமல், நீங்கள் தலையிட விரும்பும்போது இதை பயன்படுத்தவும்.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | தோல்வியடைந்த படியின் ID |
| `resolution` | string | Yes | `skip` (தவிர்த்துத் தொடரவும்), `retry` (உடனடியாக மீண்டும் முயற்சிக்கவும்), அல்லது `mark_done` (மீண்டும் இயக்காமல் வெற்றிகரமாகக் கருதவும்) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 மற்றும் v2 ஒப்பீடு

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | இல்லை | ஆம் |
| Step output references (`__ref:`) | இல்லை | ஆம் |
| Plugin discovery | கையேடு (Manual) | தானியங்கி (Automatic) |
| Progress tracking API | இல்லை | ஆம் |
| Error recovery | தோல்வியடைந்து நிறுத்தம் | மாற்று வழி + தொடர்ச்சி |
| Parallel step execution | இல்லை | ஆம் (கட்டத்தின் அடிப்படையில் விருப்பம்) |
| WP-CLI plan commands | இல்லை | ஆம் |
| Benchmark integration | இல்லை | ஆம் (`q-restaurant-website`) |

---

## WP-CLI Plan Commands

### `wp gratis-ai-agent plan create`

ஒரு இலக்கு விளக்கத்திலிருந்து Site Plan-ஐ உருவாக்குகிறது.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

முன்பே உருவாக்கப்பட்ட plan-ஐ செயல்படுத்துகிறது.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

செயல்படுத்தப்படும் அல்லது முடிக்கப்பட்ட plan-இன் தற்போதைய முன்னேற்றத்தைக் காட்டுகிறது.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

அனைத்து Site Plans-களையும் (காத்திருப்பு, செயல்பாட்டில், மற்றும் முடிக்கப்பட்டவை) பட்டியலிடுகிறது.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

தோல்வியடைந்த plan-ஐ `pending` நிலைக்கு மீட்டமைக்கிறது, இதனால் அதை ஆரம்பத்தில் இருந்து மீண்டும் செயல்படுத்த முடியும்.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
