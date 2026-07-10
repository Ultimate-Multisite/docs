---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0-ൽ അവതരിപ്പിച്ചത്) എന്നത് മൾട്ടി-സ്റ്റെപ്പ് വെബ്സൈറ്റ് നിർമ്മാണത്തിന് ശക്തി നൽകുന്ന എഞ്ചിനാണ്. നിങ്ങൾ ഏജന്റിനോട് "ഒരു റെസ്റ്റോറന്റ് വെബ്സൈറ്റ് ഉണ്ടാക്കുക" അല്ലെങ്കിൽ "ഒരു ബ്ലോഗോടുകൂടിയ പോർട്ട്‌ഫോളിയോ ഉണ്ടാക്കുക" എന്ന് ആവശ്യപ്പെടുമ്പോൾ, ഈ ഓർക്കസ്ട്രേറ്റർ ആ ഉയർന്ന തലത്തിലുള്ള ലക്ഷ്യത്തെ ഘടനാപരമായ ഒരു **പദ്ധതിയായി (plan)** വിഭജിക്കുന്നു. അതിനുശേഷം, അത് അത് പൂർത്തിയാക്കാൻ ആവശ്യമായ plugins കണ്ടെത്തുന്നു, ഓരോ ഘട്ടവും ക്രമമായി പ്രവർത്തിപ്പിക്കുന്നു, പുരോഗതി ട്രാക്ക് ചെയ്യുന്നു, കൂടാതെ പിഴവുകൾ ഉണ്ടാകുമ്പോൾ സ്വയം പരിഹാരങ്ങൾ കണ്ടെത്തുകയും ചെയ്യും.

---

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു {#how-it-works}

### 1. പ്ലാൻ ജനറേഷൻ (Plan Generation) {#1-plan-generation}

ഒരു വെബ്സൈറ്റ് നിർമ്മാണ നിർദ്ദേശം ഏജന്റ് സ്വീകരിക്കുമ്പോൾ, അത് ഒരു JSON **സൈറ്റ് പ്ലാൻ** ഉണ്ടാക്കാൻ `create_site_plan` എന്ന ability വിളിക്കുന്നു. ഈ പ്ലാൻ താഴെ പറയുന്ന കാര്യങ്ങൾ വിവരിക്കുന്നു:

- **Goal** — പൂർത്തിയാക്കിയ സൈറ്റ് എന്ത് ചെയ്യണം
- **Phases** — ഘട്ടങ്ങളുടെ ക്രമീകൃത കൂട്ടങ്ങൾ (ഉദാഹരണത്തിന്: _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — ഓരോ ഘട്ടത്തിലെയും വ്യക്തിഗത ability കോളുകൾ
- **Plugin requirements** — ചില ഘട്ടങ്ങൾ പ്രവർത്തിക്കാൻ നിർബന്ധമായും സജീവമായിരിക്കേണ്ട plugins
- **Fallbacks** — ഒരു പ്രധാന ഘട്ടം പരാജയപ്പെട്ടാൽ ഉപയോഗിക്കാവുന്ന ബദൽ ഘട്ടങ്ങൾ

**ഉദാഹരണ പ്ലാൻ (ചുരുക്കിയത്)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "ഒരു ഓൺലൈൻ മെനു, ബുക്കിംഗ് ഫോം, കോൺടാക്റ്റ് പേജ് എന്നിവയോടുകൂടിയ റെസ്റ്റോറന്റ് വെബ്സൈറ്റ് ഉണ്ടാക്കുക",
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
    { "slug": "contact-form-7", "reason": "ബുക്കിംഗിനും കോൺടാക്റ്റ് ഫോമുകൾക്കുമായി ആവശ്യമാണ്" }
  ]
}
```

### 2. Plugin Discovery {#2-plugin-discovery}

പ്രവർത്തനം തുടങ്ങുന്നതിന് മുമ്പ്, ഓർക്കസ്ട്രേറ്റർ പ്ലാനിന്റെ `plugin_requirements` സ്കാൻ ചെയ്യുകയും ഏത് plugins ഇതിനകം സജീവമാണെന്ന് പരിശോധിക്കുകയും ചെയ്യുന്നു. ഏതെങ്കിലും plugins നഷ്ടപ്പെട്ടാൽ, അത്:

1.  മികച്ച പൊരുത്തം കണ്ടെത്താൻ `recommend_plugin` വഴി റെജിസ്ട്രിയിൽ തിരയുന്നു
2.  ശുപാർശ സ്ഥിരീകരിക്കാൻ ഏജന്റിനോട് ആവശ്യപ്പെടുന്നു
3.  അംഗീകാരം ലഭിച്ചാൽ (അല്ലെങ്കിൽ സെറ്റിംഗുകളിൽ auto-install പ്രവർത്തനക്ഷമമാക്കിയിട്ടുണ്ടെങ്കിൽ) ഇൻസ്റ്റാളേഷൻ ആരംഭിക്കുന്നു

Plugin discovery പരാജയങ്ങൾ ഗുരുതരമല്ല — ബാധിച്ച ഘട്ടങ്ങൾ ഓർക്കസ്ട്രേറ്റർ `skipped` എന്ന് അടയാളപ്പെടുത്തുകയും പ്ലാനിന്റെ ബാക്കി ഭാഗങ്ങളുമായി മുന്നോട്ട് പോകുകയും ചെയ്യുന്നു.

### 3. Plan Execution {#3-plan-execution}

ഓർക്കസ്ട്രേറ്റർ പ്ലാൻ ID ഉപയോഗിച്ച് `execute_site_plan` വിളിക്കുന്നു. Execution ഘട്ടം ഘട്ടമായും, സ്റ്റെപ്പ് ബൈ സ്റ്റെപ്പ് ആയും മുന്നോട്ട് പോകുന്നു:

- **Step references** (`__ref:` prefix) — മുമ്പത്തെ ഘട്ടങ്ങളിൽ നിന്നുള്ള ഔട്ട്പുട്ടുകളെ സ്റ്റെപ്പുകൾക്ക് റഫർ ചെയ്യാൻ കഴിയും. മുകളിലെ ഉദാഹരണത്തിൽ, `__ref:create_menu.menu_id` എന്നത് `create_menu` സ്റ്റെപ്പ് നൽകുന്ന `menu_id` ലേക്ക് പരിഹരിക്കപ്പെടുന്നു.
- **Parallel steps** — ഒരേ ഘട്ടത്തിലെ, പരസ്പരം ആശ്രയിക്കാത്ത സ്റ്റെപ്പുകൾ `parallel` flag സജ്ജമാക്കിയാൽ ഒരേ സമയം (concurrently) വിതരണം ചെയ്യപ്പെടുന്നു.
- **Step timeout** — ഓരോ സ്റ്റെപ്പിനും ഒരു വ്യക്തിഗത ടൈമൗട്ട് ഉണ്ട് (ഡിഫോൾട്ട്: `Ability Timeout` സെറ്റിംഗ്). ടൈമൗട്ട് ആയ സ്റ്റെപ്പ് `failed` എന്ന് അടയാളപ്പെടുത്തുകയും പ്ലാൻ മുന്നോട്ട് പോകുകയും ചെയ്യുന്നു.

### 4. Progress Tracking {#4-progress-tracking}

Execution സ്റ്റാറ്റസ് പരിശോധിക്കാൻ എപ്പോൾ വേണമെങ്കിലും `get_plan_progress` വിളിക്കുക:

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

WP-CLI ഉപയോക്താക്കൾക്ക് ഇത് ഉപയോഗിച്ച് പുരോഗതി നിരീക്ഷിക്കാൻ കഴിയും:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Error Recovery {#5-error-recovery}

ഒരു സ്റ്റെപ്പ് പരാജയപ്പെട്ടാൽ, ഓർക്കസ്ട്രേറ്റർ പ്ലാനിൽ നിർവചിച്ചിട്ടുള്ള ഒരു **fallback** സ്റ്റെപ്പ് ഉണ്ടോ എന്ന് പരിശോധിക്കുന്നു:

- **Fallback available** — fallback സ്റ്റെപ്പ് ഉടൻ തന്നെ ശ്രമിക്കപ്പെടുന്നു. ഇത് വിജയിച്ചാൽ, execution തുടരുന്നു. ഇത് പരാജയപ്പെട്ടാലും, സ്റ്റെപ്പ് `failed` എന്ന് അടയാളപ്പെടുത്തുകയും അടുത്ത സ്റ്റെപ്പുമായി execution തുടരുകയും ചെയ്യുന്നു.
- **No fallback** — സ്റ്റെപ്പ് `failed` എന്ന് അടയാളപ്പെടുത്തുന്നു. നിർബന്ധമല്ലാത്ത സ്റ്റെപ്പുകൾ ഒഴിവാക്കപ്പെടുന്നു (skipped); നിർബന്ധമായ സ്റ്റെപ്പുകൾ (marked `required: true`) നിലവിലെ ഘട്ടത്തെ തടയുകയും ഒരു ഘട്ട-ലെവൽ recovery ശ്രമം ആരംഭിക്കുകയും ചെയ്യുന്നു.

അവസാന പ്ലാൻ സംഗ്രഹത്തിൽ എല്ലാ പരാജയങ്ങളും ഏജന്റ് റിപ്പോർട്ട് ചെയ്യും, കൂടാതെ പരിഹരിക്കാൻ കഴിയാത്ത പിഴവുകൾക്കായി മാനുവൽ പരിഹാര ഘട്ടങ്ങൾ നിർദ്ദേശിച്ചേക്കാം.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

ഒരു natural language ലക്ഷ്യ വിവരണത്തിൽ നിന്ന് ഘടനാപരമായ ഒരു സൈറ്റ് പ്ലാൻ സൃഷ്ടിക്കുന്നു.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | ആഗ്രഹിക്കുന്ന വെബ്സൈറ്റിന്റെ natural language വിവരണം |
| `style` | string | No | വിഷ്വൽ സ്റ്റൈൽ ഇഷ്ടം: `minimal`, `bold`, `professional`, `playful`. ഡിഫോൾട്ട്: ലക്ഷ്യത്തെ അടിസ്ഥാനമാക്കി ഏജന്റ് തിരഞ്ഞെടുക്കുന്നു |
| `plugins` | array | No | പ്ലാനിൽ ഉൾപ്പെടുത്തേണ്ട plugin slugs. ആവശ്യമായ plugins ഓർക്കസ്ട്രേറ്റർ സ്വയമേവ ചേർക്കുന്നു. |
| `dry_run` | boolean | No | `true` ആണെങ്കിൽ, പ്ലാൻ JSON സേവ് ചെയ്യുകയോ execute ചെയ്യുകയോ ചെയ്യാതെ അത് തിരികെ നൽകുന്നു. ഡിഫോൾട്ട് `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

നേരത്തെ സൃഷ്ടിച്ച സൈറ്റ് പ്ലാൻ പ്രവർത്തിപ്പിക്കുന്നത് ആരംഭിക്കുന്നു.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | പ്രവർത്തിപ്പിക്കേണ്ട പ്ലാനിന്റെ ID |
| `auto_install_plugins` | boolean | No | `true` ആണെങ്കിൽ, സ്ഥിരീകരണം കൂടാതെ ആവശ്യമായ plugins സ്വയമേവ ഇൻസ്റ്റാൾ ചെയ്യുന്നു. ഡിഫോൾട്ട് `false` |
| `max_retries` | integer | No | മുന്നോട്ട് പോകുന്നതിന് മുമ്പ് പരാജയപ്പെട്ട സ്റ്റെപ്പ് എത്ര തവണ വീണ്ടും ശ്രമിക്കണം. ഡിഫോൾട്ട് `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

ഒരു സൈറ്റ് പ്ലാനിന്റെ നിലവിലെ execution സ്റ്റാറ്റസ് തിരികെ നൽകുന്നു.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | അന്വേഷിക്കാനുള്ള പ്ലാൻ ID |

**Returns** മുകളിൽ പറഞ്ഞ [Progress Tracking](#4-progress-tracking) ൽ വിവരിച്ച progress object.

---

### `handle_plan_error` {#handleplanerror}

ഒരു പരാജയപ്പെട്ട സ്റ്റെപ്പ് മാനുവലായി പരിഹരിച്ച്, അടുത്ത സ്റ്റെപ്പിൽ നിന്ന് പ്ലാൻ execution പുനരാരംഭിക്കുന്നു. ഓട്ടോമാറ്റിക് recovery സാധ്യമല്ലെങ്കിൽ ഇടപെടാൻ ഇത് ഉപയോഗിക്കുക.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | പ്ലാൻ ID |
| `step_id` | string | Yes | പരാജയപ്പെട്ട സ്റ്റെപ്പിന്റെ ID |
| `resolution` | string | Yes | `skip` (ഒഴിവാക്കി തുടരുക), `retry` (സ്റ്റെപ്പ് ഉടൻ വീണ്ടും ശ്രമിക്കുക), അല്ലെങ്കിൽ `mark_done` (വീണ്ടും പ്രവർത്തിപ്പിക്കാതെ വിജയിച്ചതായി കണക്കാക്കുക) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ഉം v2 ഉം താരതമ്യം ചെയ്യുമ്പോൾ {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | ഇല്ല | ഉണ്ട് |
| Step output references (`__ref:`) | ഇല്ല | ഉണ്ട് |
| Plugin discovery | മാനുവൽ | ഓട്ടോമാറ്റിക് |
| Progress tracking API | ഇല്ല | ഉണ്ട് |
| Error recovery | പരാജയപ്പെട്ട് നിർത്തുക | Fallback + തുടരുക |
| Parallel step execution | ഇല്ല | ഉണ്ട് (ഘട്ടം അനുസരിച്ച് ഓപ്ഷണൽ) |
| WP-CLI plan commands | ഇല്ല | ഉണ്ട് |
| Benchmark integration | ഇല്ല | ഉണ്ട് (`q-restaurant-website`) |

---

## WP-CLI Plan Commands {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

ഒരു ലക്ഷ്യ വിവരണത്തിൽ നിന്ന് ഒരു സൈറ്റ് പ്ലാൻ സൃഷ്ടിക്കുന്നു.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

നേരത്തെ സൃഷ്ടിച്ച പ്ലാൻ പ്രവർത്തിപ്പിക്കുന്നു.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

പ്രവർത്തനം നടന്നുകൊണ്ടിരിക്കുന്നതോ പൂർത്തിയാക്കിയതോ ആയ പ്ലാനിന്റെ നിലവിലെ പുരോഗതി കാണിക്കുന്നു.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

എല്ലാ സൈറ്റ് പ്ലാനുകളും (pending, in-progress, completed) ലിസ്റ്റ് ചെയ്യുന്നു.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

പരാജയപ്പെട്ട ഒരു പ്ലാൻ `pending` ലേക്ക് റീസെറ്റ് ചെയ്യുന്നു, അതിനാൽ അത് തുടക്കം മുതൽ വീണ്ടും പ്രവർത്തിപ്പിക്കാൻ കഴിയും.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
