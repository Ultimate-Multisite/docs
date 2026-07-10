---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 ರಲ್ಲಿ ಪರಿಚಯಿಸಲಾಯಿತು) ಎಂಬುದು ಬಹು-ಹಂತದ ವೆಬ್‌ಸೈಟ್ ರಚನೆಗೆ ಶಕ್ತಿ ನೀಡುವ ಎಂಜಿನ್ ಆಗಿದೆ. ನೀವು ಏಜೆಂಟ್‌ಗೆ "ರೆಸ್ಟೋರೆಂಟ್ ವೆಬ್‌ಸೈಟ್ ನಿರ್ಮಿಸಿ" ಅಥವಾ "ಬ್ಲಾಗ್‌ ಜೊತೆ 포ಟ್‌ಫೋಲಿಯೋ ರಚಿಸಿ" ಎಂದು ಕೇಳಿದಾಗ, ಈ ಆರ್ಕೆಸ್ಟರೇಟರ್ ಆ ದೊಡ್ಡ ಗುರಿಯನ್ನು ಒಂದು ರಚನಾತ್ಮಕ **ಯೋಜನೆಗೆ (plan)** ವಿಭಜಿಸುತ್ತದೆ, ಅದನ್ನು ಪೂರೈಸಲು ಅಗತ್ಯವಾದ ಪ್ಲಗ್ಇನ್‌ಗಳನ್ನು ಕಂಡುಕೊಳ್ಳುತ್ತದೆ, ಪ್ರತಿ ಹಂತವನ್ನು ಕ್ರಮವಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ, ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ದೋಷಗಳಿಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತದೆ.

---

## ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ {#how-it-works}

### 1. ಯೋಜನೆ ರಚನೆ (Plan Generation) {#1-plan-generation}

ಏಜೆಂಟ್‌ಗೆ ವೆಬ್‌ಸೈಟ್ ನಿರ್ಮಾಣದ ಸೂಚನೆ ಬಂದಾಗ, ಅದು JSON **ಸೈಟ್ ಪ್ಲಾನ್** ಅನ್ನು ಉತ್ಪಾದಿಸಲು `create_site_plan` ಸಾಮರ್ಥ್ಯವನ್ನು (ability) ಕರೆಯುತ್ತದೆ. ಈ ಯೋಜನೆಯು ಈ ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ:

- **Goal (ಗುರಿ)** — ಅಂತಿಮ ವೆಬ್‌ಸೈಟ್ ಏನು ಮಾಡಬೇಕು
- **Phases (ಹಂತಗಳು)** — ಕ್ರಮಬದ್ಧವಾಗಿ ಜೋಡಿಸಲಾದ ಹಂತಗಳ ಗುಂಪುಗಳು (ಉದಾಹರಣೆಗೆ: _Setup_, _Content Types_, _Design_, _Content_)
- **Steps (ಹಂತಗಳು)** — ಪ್ರತಿ ಹಂತದೊಳಗಿನ 개별 ಸಾಮರ್ಥ್ಯ ಕေါ်ಡಿಂಗ್‌ಗಳು
- **Plugin requirements (ಪ್ಲಗ್ಇನ್ ಅವಶ್ಯಕತೆಗಳು)** — ಕೆಲವು ಹಂತಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಸಕ್ರಿಯವಾಗಿರಬೇಕಾದ ಪ್ಲಗ್ಇನ್‌ಗಳು
- **Fallbacks (ಬದಲಿ ಯೋಜನೆಗಳು)** — ಪ್ರಮುಖ ಹಂತವು ವಿಫಲವಾದರೆ ಬಳಸಬಹುದಾದ ಪರ್ಯಾಯ ಹಂತಗಳು

**ಉದಾಹರಣಾ ಯೋಜನೆ (ಸಂಕ್ಷಿಪ್ತ)**

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

### 2. ಪ್ಲಗ್ಇನ್ ಹುಡುಕಾಟ (Plugin Discovery) {#2-plugin-discovery}

ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮೊದಲು, ಆರ್ಕೆಸ್ಟರೇಟರ್ ಯೋಜನೆಯ `plugin_requirements` ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ಯಾವ ಪ್ಲಗ್ಇನ್‌ಗಳು ಈಗಾಗಲೇ ಸಕ್ರಿಯವಾಗಿವೆಯో ಪರಿಶೀಲಿಸುತ್ತದೆ. ಕಾಣೆಯಾದ ಪ್ಲಗ್ಇನ್‌ಗಳಿದ್ದರೆ, ಅದು:

1.  ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆಗಾಗಿ `recommend_plugin` ಮೂಲಕ 레ಜಿಸ್ಟ್ರಿಯನ್ನು ಹುಡುಕುತ್ತದೆ
2.  ಶಿಫಾರಸ್ಸುಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಏಜೆಂಟ್‌ಗೆ ಕೇಳುತ್ತದೆ
3.  ಅನುಮೋದಿಸಿದರೆ (ಅಥವಾ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಆಟೋ-ಇನ್‌ಸ್ಟಾಲ್ ಆನ್ ಆಗಿದ್ದರೆ) ಅಳವಡಿಕೆಯನ್ನು décligates (trigger) ಮಾಡುತ್ತದೆ

ಪ್ಲಗ್ಇನ್ ಹುಡುಕಾಟದ ವೈಫಲ್ಯಗಳು ಗಂಭೀರವಲ್ಲ — ಆರ್ಕೆಸ್ಟರೇಟರ್ ಬಾಧಿತ ಹಂತಗಳನ್ನು `skipped` ಎಂದು ಗುರುತಿಸುತ್ತದೆ ಮತ್ತು ಯೋಜನೆಯ ಉಳಿದ ಭಾಗಗಳೊಂದಿಗೆ ಮುಂದುವರಿಯುತ್ತದೆ.

### 3. ಯೋಜನೆ ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ (Plan Execution) {#3-plan-execution}

ಆರ್ಕೆಸ್ಟರೇಟರ್ ಯೋಜನೆಯ ID ಯೊಂದಿಗೆ `execute_site_plan` ಅನ್ನು ಕರೆಯುತ್ತದೆ. ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಯು ಹಂತದಿಂದ ಹಂತಕ್ಕೆ, ಹಂತದಿಂದ ಹಂತಕ್ಕೆ ಮುಂದುವರಿಯುತ್ತದೆ:

- **Step references (`__ref:` ಪೂರ್ವಪ್ರತ್ಯಯ)** — ಹಂತಗಳು ಹಿಂದಿನ ಹಂತಗಳ ಔಟ್‌ಪುಟ್‌ಗಳನ್ನು ಉಲ್ಲೇಖಿಸಬಹುದು. ಮೇಲಿನ ಉದಾಹರಣೆಯಲ್ಲಿ, `__ref:create_menu.menu_id` ಅನ್ನು `create_menu` ಹಂತದಿಂದ ಮರಳಿ ಬಂದ `menu_id` ಗೆ ಪರಿಹರಿಸಲಾಗುತ್ತದೆ.
- **Parallel steps (ಸಮಾನ ಹಂತಗಳು)** — ಒಂದೇ ಹಂತದೊಳಗಿನ, ಪರಸ್ಪರ ಅವಲಂಬನೆ ಇಲ್ಲದ ಹಂತಗಳನ್ನು `parallel` ಫ್ಲ್ಯಾಗ್ ಅನ್ನು ಹೊಂದಿಸಿದಾಗ ಏಕಕಾಲದಲ್ಲಿ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.
- **Step timeout (ಹಂತದ ಸಮಯ ಮಿತಿ)** — ಪ್ರತಿ ಹಂತಕ್ಕೂ ವೈಯಕ್ತಿಕ ಸಮಯ ಮಿತಿ ಇರುತ್ತದೆ (ಡಿಫಾಲ್ಟ್: `Ability Timeout` ಸೆಟ್ಟಿಂಗ್). ಸಮಯ ಮಿತಿಯಾದ ಹಂತವನ್ನು `failed` ಎಂದು ಗುರುತಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಯೋಜನೆ ಮುಂದುವರಿಯುತ್ತದೆ.

### 4. ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್ (Progress Tracking) {#4-progress-tracking}

ಕಾರ್ಯಗತಗೊಳಿಸುವ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ `get_plan_progress` ಅನ್ನು ಕರೆಯಿರಿ:

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

WP-CLI ಬಳಕೆದಾರರು ಈ ಕೆಳಗಿನ ಮೂಲಕ ಪ್ರಗತಿಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಬಹುದು:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. ದೋಷದಿಂದ ಚೇತರಿಸಿಕೊಳ್ಳುವುದು (Error Recovery) {#5-error-recovery}

ಒಂದು ಹಂತ ವಿಫಲವಾದಾಗ, ಆರ್ಕೆಸ್ಟರೇಟರ್ ಯೋಜನೆಯಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾದ **ಬದಲಿ ಹಂತವನ್ನು (fallback)** ಪರಿಶೀಲಿಸುತ್ತದೆ:

- **Fallback ಲಭ್ಯವಿದೆ** — ಬದಲಿ ಹಂತವನ್ನು ತಕ್ಷಣವೇ ಪ್ರಯತ್ನಿಸಲಾಗುತ್ತದೆ. ಇದು ಯಶಸ್ವಿಯಾದರೆ, ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಯು ಮುಂದುವರಿಯುತ್ತದೆ. ಇದು ಕೂಡ ವಿಫಲವಾದರೆ, ಹಂತವನ್ನು `failed` ಎಂದು ಗುರುತಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಮುಂದಿನ ಹಂತದೊಂದಿಗೆ ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಯು ಮುಂದುವರಿಯುತ್ತದೆ.
- **Fallback ಇಲ್ಲ** — ಹಂತವನ್ನು `failed` ಎಂದು ಗುರುತಿಸಲಾಗುತ್ತದೆ. ನಿರ್ಣಾಯಕವಲ್ಲದ ಹಂತಗಳನ್ನು 건너뛰ಲಾಗುತ್ತದೆ; ನಿರ್ಣಾಯಕ ಹಂತಗಳು ( `required: true` ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ) ಪ್ರಸ್ತುತ ಹಂತವನ್ನು ನಿಲ್ಲಿಸುತ್ತವೆ ಮತ್ತು ಹಂತ-ಮಟ್ಟದ ಚೇತರಿಕೆ ಪ್ರಯತ್ನವನ್ನು décligates (trigger) ಮಾಡುತ್ತವೆ.

ಏಜೆಂಟ್ ಎಲ್ಲಾ ವೈಫಲ್ಯಗಳನ್ನು ಅಂತಿಮ ಯೋಜನೆ ಸಾರಾಂಶದಲ್ಲಿ ವರದಿ ಮಾಡುತ್ತದೆ ಮತ್ತು ಚೇತರಿಸಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗದ ದೋಷಗಳಿಗೆ ಕೈಯಾರೆ ಪರಿಹಾರ ಹಂತಗಳನ್ನು ಸೂಚಿಸಬಹುದು.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

ನೈಸರ್ಗಿಕ ಭಾಷೆಯ ಗುರಿ ವಿವರಣೆಯಿಂದ ರಚನಾತ್ಮಕ ಸೈಟ್ ಯೋಜನೆಯನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ.

**Parameters (ಪarameterಗಳು)**

| Parameter (ಪarameter) | Type (ಪ್ರಕಾರ) | Required (ಕಡ್ಡಾಯ) | Description (ವಿವರಣೆ) |
|---|---|---|---|
| `goal` | string | Yes (ಹೌದು) | ಅಪೇಕ್ಷಿತ ವೆಬ್‌ಸೈಟ್‌ನ ನೈಸರ್ಗಿಕ ಭಾಷೆಯ ವಿವರಣೆ |
| `style` | string | No (ಇಲ್ಲ) | ದೃಶ್ಯ ಶೈಲಿಯ ಆದ್ಯತೆ: `minimal`, `bold`, `professional`, `playful`. ಡಿಫಾಲ್ಟ್: ಏಜೆಂಟ್ ಗುರಿ ಆಧಾರದ ಮೇಲೆ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ |
| `plugins` | array | No (ಇಲ್ಲ) | ಯೋಜನೆಯಲ್ಲಿ ಸೇರಿಸಬೇಕಾದ ಪ್ಲಗ್ಇನ್ ಸ್ಲಗ್‌ಗಳು. ಆರ್ಕೆಸ್ಟರೇಟರ್ ಅಗತ್ಯ ಪ್ಲಗ್ಇನ್‌ಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೇರಿಸುತ್ತದೆ. |
| `dry_run` | boolean | No (ಇಲ್ಲ) | ಇದು `true` ಆಗಿದ್ದರೆ, ಉಳಿಸದೆ ಅಥವಾ ಕಾರ್ಯಗತಗೊಳಿಸದೆ ಯೋಜನೆ JSON ಅನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ. ಡಿಫಾಲ್ಟ್ `false` |

**Returns (ಮರಳಿ ನೀಡುತ್ತದೆ)** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

ಈ ಹಿಂದೆ ರಚಿಸಲಾದ ಸೈಟ್ ಯೋಜನೆಯನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.

**Parameters (ಪarameterಗಳು)**

| Parameter (ಪarameter) | Type (ಪ್ರಕಾರ) | Required (ಕಡ್ಡಾಯ) | Description (ವಿವರಣೆ) |
|---|---|---|---|
| `plan_id` | string | Yes (ಹೌದು) | ಕಾರ್ಯಗತಗೊಳಿಸಲು ಯೋಜನೆಯ ID |
| `auto_install_plugins` | boolean | No (ಇಲ್ಲ) | ಇದು `true` ಆಗಿದ್ದರೆ, ಖಚಿತಪಡಿಸಿಕೊಳ್ಳದೆ ಅಗತ್ಯ ಪ್ಲಗ್ಇನ್‌ಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅಳವಡಿಸುತ್ತದೆ. ಡಿಫಾಲ್ಟ್ `false` |
| `max_retries` | integer | No (ಇಲ್ಲ) | ಮುಂದುವರಿಯುವ ಮೊದಲು ವಿಫಲವಾದ ಹಂತವನ್ನು ಪ್ರಯತ್ನಿಸುವ ಸಂಖ್ಯೆ. ಡಿಫಾಲ್ಟ್ `1` |

**Returns (ಮರಳಿ ನೀಡುತ್ತದೆ)** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

ಸೈಟ್ ಯೋಜನೆಯ ಪ್ರಸ್ತುತ ಕಾರ್ಯಗತಗೊಳಿಸುವ ಸ್ಥಿತಿಯನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ.

**Parameters (ಪarameterಗಳು)**

| Parameter (ಪarameter) | Type (ಪ್ರಕಾರ) | Required (ಕಡ್ಡಾಯ) | Description (ವಿವರಣೆ) |
|---|---|---|---|
| `plan_id` | string | Yes (ಹೌದು) | ಪ್ರಶ್ನಿಸಲು ಯೋಜನೆಯ ID |

**Returns (ಮರಳಿ ನೀಡುತ್ತದೆ)** ಮೇಲಿನ [Progress Tracking](#4-progress-tracking) ನಲ್ಲಿ ವಿವರಿಸಲಾದ ಪ್ರಗತಿ ಆಬ್ಜೆಕ್ಟ್.

---

### `handle_plan_error` {#handleplanerror}

ವಿಫಲವಾದ ಹಂತವನ್ನು ಕೈಯಾರೆ ಪರಿಹರಿಸುತ್ತದೆ ಮತ್ತು ಮುಂದಿನ ಹಂತದಿಂದ ಯೋಜನೆಯ ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಯನ್ನು ಪುನರಾರಂಭಿಸುತ್ತದೆ. ಸ್ವಯಂಚಾಲಿತ ಚೇತರಿಕೆ ಸಾಧ್ಯವಾಗದಿದ್ದಾಗ ಮತ್ತು ನೀವು ಮಧ್ಯಪ್ರವೇಶಿಸಲು ಬಯಸಿದಾಗ ಇದನ್ನು ಬಳಸಿ.

**Parameters (ಪarameterಗಳು)**

| Parameter (ಪarameter) | Type (ಪ್ರಕಾರ) | Required (ಕಡ್ಡಾಯ) | Description (ವಿವರಣೆ) |
|---|---|---|---|
| `plan_id` | string | Yes (ಹೌದು) | ಯೋಜನೆಯ ID |
| `step_id` | string | Yes (ಹೌದು) | ವಿಫಲವಾದ ಹಂತದ ID |
| `resolution` | string | Yes (ಹೌದು) | `skip` (ಬಿಟ್ಟು ಮುಂದುವರಿಯಿರಿ), `retry` (ತಕ್ಷಣವೇ ಪುನರಾವರ್ತಿಸಿ), ಅಥವಾ `mark_done` (ಮರು-ಚಲಾಯಿಸದೆ ಯಶಸ್ವಿಯಾಗಿದೆ ಎಂದು ಪರಿಗಣಿಸಿ) |

**Returns (ಮರಳಿ ನೀಡುತ್ತದೆ)** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ಮತ್ತು v2 ಗಳನ್ನು ಹೋಲಿಕೆ ಮಾಡುವುದು {#comparing-v1-and-v2}

| Feature (ಲಕ್ಷಣ) | v1 | v2 |
|---|---|---|
| Multi-phase plans (ಬಹು-ಹಂತದ ಯೋಜನೆಗಳು) | No (ಇಲ್ಲ) | Yes (ಹೌದು) |
| Step output references (`__ref:`) (ಹಂತದ ಔಟ್‌ಪುಟ್ ಉಲ್ಲೇಖಗಳು) | No (ಇಲ್ಲ) | Yes (ಹೌದು) |
| Plugin discovery (ಪ್ಲಗ್ಇನ್ ಹುಡುಕಾಟ) | Manual (ಕೈಯಾರೆ) | Automatic (ಸ್ವಯಂಚಾಲಿತ) |
| Progress tracking API (ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್ API) | No (ಇಲ್ಲ) | Yes (ಹೌದು) |
| Error recovery (ದೋಷದಿಂದ ಚೇತರಿಕೆ) | Fail-and-stop (ವಿಫಲವಾಗಿ ನಿಲ್ಲುತ್ತದೆ) | Fallback + continue (ಬದಲಿ + ಮುಂದುವರಿಯುತ್ತದೆ) |
| Parallel step execution (ಸಮಾನ ಹಂತಗಳ ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆ) | No (ಇಲ್ಲ) | Yes (ಹೌದು) (ಪ್ರತಿ ಹಂತಕ್ಕೆ ಆಪ್ಷನಲ್) |
| WP-CLI plan commands (WP-CLI ಯೋಜನೆ ಕಮಾಂಡ್‌ಗಳು) | No (ಇಲ್ಲ) | Yes (ಹೌದು) |
| Benchmark integration (ಬೆಂಚ್‌ಮಾರ್ಕ್ ಏಕೀಕರಣ) | No (ಇಲ್ಲ) | Yes (ಹೌದು) (`q-restaurant-website`) |

---

## WP-CLI Plan Commands (ಕಮಾಂಡ್‌ಗಳು) {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

ಗುರಿ ವಿವರಣೆಯಿಂದ ಸೈಟ್ ಯೋಜನೆಯನ್ನು ರಚಿಸುತ್ತದೆ.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

ಈ ಹಿಂದೆ ರಚಿಸಲಾದ ಯೋಜನೆಯನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತಿರುವ ಅಥವಾ ಪೂರ್ಣಗೊಂಡ ಯೋಜನೆಯ ಪ್ರಸ್ತುತ ಪ್ರಗತಿಯನ್ನು ತೋರಿಸುತ್ತದೆ.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

ಎಲ್ಲಾ ಸೈಟ್ ಯೋಜನೆಗಳನ್ನು (ಬಾ待ち, ಪ್ರಗತಿಯಲ್ಲಿದೆ, ಮತ್ತು ಪೂರ್ಣಗೊಂಡ) ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

ವಿಫಲವಾದ ಯೋಜನೆಯನ್ನು `pending` ಗೆ ಮರುಹೊಂದಿಸುತ್ತದೆ, ಇದರಿಂದ ಅದನ್ನು ಮೊದಲಿನಿಂದ ಮರು-ಕಾರ್ಯಗತಗೊಳಿಸಬಹುದು.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
