---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (jo Gratis AI Agent v1.4.0 vich introduce hoya hai) woh engine hai jo multi-step website banane ki shakti deta hai. Jadon tusi agent nu "restaurant di website banao" ya "blog naal portfolio banao" kehnde ho, taan orchestrator us bade lakshya nu ek sanrachit **plan** vich tod dinda hai, oh plugins khojda hai jo us nu poora karan layi zaroori ne, har step nu kram (sequence) vich chalaunda hai, progress track karda hai, ate galti hone te khud-ba-khud theek karda hai.

---

## Eh Ki Tarah Kaam Karda Hai

### 1. Plan Banana (Plan Generation)

Jadon agent nu site banane di koi hidayat milti hai, taan oh ek JSON **site plan** banane layi `create_site_plan` ability nu call karda hai. Eh plan eh cheezan bayan karda hai:

- **Goal** — ki poori hoi hoyi site ki kar sakni chahidi hai
- **Phases** — steps de kram-baddh group (misal layi: _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — har phase vich ikk-ikk ability call
- **Plugin requirements** — woh plugins jo kuch steps chalne layi zaroori ne
- **Fallbacks** — vikalpī steps, jadon koi mukhya step fail ho janda hai

**Example plan (chhota karke)**

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

### 2. Plugin Khoj (Plugin Discovery)

Execution shuru hon ton pehlan, orchestrator plan de `plugin_requirements` nu scan karda hai ate check karda hai ki kaun se plugins pehlan hi active ne. Jo plugins missing ne, oh:

1.  `recommend_plugin` de zariye registry vich sabh ton vadhia match khojda hai
2.  Agent nu recommendation confirm karan layi kehnda hai
3.  Agar manzoori de naal (ya agar settings vich auto-install enable hai) taan installation shuru karda hai

Plugin discovery fail hona koi badi gal nahi hai — orchestrator affected steps nu `skipped` mark karke baaki plan naal aage nikalda reha hai.

### 3. Plan Chalana (Plan Execution)

Orchestrator plan ID naal `execute_site_plan` nu call karda hai. Execution phase-by-phase, step-by-step chalta hai:

- **Step references** (`__ref:` prefix) — steps pichle steps de outputs nu reference kar sakde ne. Upar de example vich, `__ref:create_menu.menu_id` nu `create_menu` step de zariye wapas aayay `menu_id` naal resolve kitta janda hai.
- **Parallel steps** — ikk hi phase de andar de steps, jinna de beech koi dependency nahi hai, oh concurrently dispatch ho jande ne jadon `parallel` flag set kitta janda hai.
- **Step timeout** — har step da apna alag timeout hunda hai (default: `Ability Timeout` setting). Jo step timeout ho janda hai, oh `failed` mark karke plan aage chalda reha hai.

### 4. Progress Track Karna (Progress Tracking)

Execution status check karan layi kisi bhi samay `get_plan_progress` call karo:

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

WP-CLI users progress monitor kar sakde ne:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Galti Theek Karna (Error Recovery)

Jadon koi step fail hunda hai, taan orchestrator plan vich define kiye gaye **fallback** step nu check karda hai:

- **Fallback available** — fallback step nu turant try kita janda hai. Je oh kamyab ho janda hai, taan execution chalta reha hai. Je oh vi fail hunda hai, taan step nu `failed` mark karke agle step naal execution chalta reha hai.
- **No fallback** — step nu `failed` mark karke chhad ditta janda hai. Non-critical steps nu skip kitta janda hai; critical steps (jinhe `required: true` mark kita gaya hai) current phase nu rok dinde ne ate phase-level recovery attempt shuru karde ne.

Agent saare failures final plan summary vich report karda hai ate un failures layi manual remediation steps suggest kar sakda hai jo theek nahi ho sakde.

---

## Site Plan Abilities

### `create_site_plan`

Natural language goal description ton ek sanrachit site plan banaunda hai.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Desired website da natural language description |
| `style` | string | No | Visual style preference: `minimal`, `bold`, `professional`, `playful`. Default: agent chooses based on the goal |
| `plugins` | array | No | Plugin slugs jo plan vich shamil karne ne. Orchestrator zaroori plugins automatic add karda hai. |
| `dry_run` | boolean | No | Je `true` hai, taan oh plan JSON wapas karega bina save kiye ya execute kiye. Default `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Pehlan banaye hoye site plan nu execute karna shuru karda hai.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan nu execute karan layi ID |
| `auto_install_plugins` | boolean | No | Je `true` hai, taan oh confirmation de bina zaroori plugins automatic install kar dega. Default `false` |
| `max_retries` | integer | No | Aage badhan ton pehlan fail step nu retry karan di sankhya. Default `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Site plan da current execution status wapas karda hai.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Query karan layi Plan ID |

**Returns** Upar de [Progress Tracking](#4-progress-tracking) vich bayan kiye gaye progress object.

---

### `handle_plan_error`

Ek fail step nu haath naal theek karke plan execution nu agle step ton dobara shuru karda hai. Ise tab istemal karo jadon automatic recovery mumkin nahi si ate tusi intervene karna chahunde ho.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | Fail hoye step di ID |
| `resolution` | string | Yes | `skip` (skip karke aage badhna), `retry` (step nu turant dobara try karna), ya `mark_done` (dobara chalaye bina kamyab maan lena) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ate v2 Di Tulna

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Plan Commands

### `wp gratis-ai-agent plan create`

Goal description ton ek site plan banaunda hai.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Pehlan banaye hoye plan nu execute karda hai.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Chal rahe ya poore hoye plan da current progress dikhata hai.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Saare site plans (pending, in-progress, ate completed) list karda hai.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Ek fail plan nu `pending` te reset karda hai taaki oh shuru ton dobara execute ho sake.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
