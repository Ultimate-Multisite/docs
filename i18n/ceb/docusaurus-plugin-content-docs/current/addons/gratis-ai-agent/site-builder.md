---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
Ang Site Builder Orchestration v2 (nga gipaila sa Gratis AI Agent v1.4.0) mao ang makina nga naghatag gahum sa paghimo og website nga adunay daghang mga lakang. Kung mangayo ka sa agent nga "maghimo og restaurant website" o "pagmugna og portfolio uban sa blog," ang orchestrator magbahin anang dako nga tumong ngadto sa usa ka estrukturadong **plan**, makakita sa mga plugins nga gikinahanglan aron kini matuman, mo-execute sa matag lakang sunod-sunod, motago sa pag-uswag, ug makabangon sa mga sayop nga dili maayo.

---

## Giunsa Kini Pagtrabaho

### 1. Paggama og Plan (Plan Generation)

Kung modawat ang agent og instruksyon sa paghimo og site, tawagon niini ang `create_site_plan` ability aron makahimo og JSON nga **site plan**. Ang plano naghulagway:

- **Goal** — unsa ang buhaton sa katapusan nga website
- **Phases** — mga grupo sa lakang nga naka-order (pananglitan, _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — indibidwal nga tawag sa ability sulod sa matag phase
- **Plugin requirements** — ang mga plugins nga kinahanglan nga aktibo aron molihok ang pipila ka lakang
- **Fallbacks** — alternatibong mga lakang kung mapakyas ang usa ka pangunhud nga lakang

**Sample plan (gipakagamay)**

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

### 2. Pagdiskobre sa Plugin (Plugin Discovery)

Sa wala pa magsugod ang pag-execute, susihon sa orchestrator ang `plugin_requirements` sa plan ug i-check kung unsang mga plugins ang aktibo na. Para sa mga nawala nga plugins, kini:

1. Mangita sa registry gamit ang `recommend_plugin` aron makakuha og labing maayo nga match
2. Mo-prompt sa agent aron kumpirmahon ang rekomendasyon
3. Magpahigayon og pag-install kung giuyonan (o kung naka-enable ang auto-install sa settings)

Ang mga kapakyasan sa plugin discovery dili makapahunong — i-marka lang sa orchestrator ang apektadong mga step isip `skipped` ug magpadayon sa nahabilin nga plan.

### 3. Pag-execute sa Plan (Plan Execution)

Tawagon sa orchestrator ang `execute_site_plan` gamit ang plan ID. Ang pag-execute moagi sa phase, lakang-paagi:

- **Step references** (`__ref:` prefix) — mahimo nga mag-reference ang mga step sa output gikan sa miaging mga step. Sa sample sa itaas, ang `__ref:create_menu.menu_id` gi-resolve ngadto sa `menu_id` nga gibalik sa `create_menu` step.
- **Parallel steps** — ang mga step sulod sa samang phase nga walay magkaugnay (inter-dependencies) maipadala dayon kung naka-set ang `parallel` flag.
- **Step timeout** — ang matag step adunay indibidwal nga timeout (default: ang setting nga `Ability Timeout`). Ang step nga na-timeout i-marka nga `failed` ug magpadayon ang plan.

### 4. Pagsubay sa Pag-uswag (Progress Tracking)

Tawaga ang `get_plan_progress` bisan unsang oras aron ma-check ang status sa pag-execute:

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

Ang mga user sa WP-CLI makasubay sa pag-uswag gamit ang:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Pagbangon gikan sa Sayop (Error Recovery)

Kung mapakyas ang usa ka step, susihon sa orchestrator kung adunay **fallback** step nga gi-define sa plan:

- **Fallback available** — sulayan dayon ang fallback step. Kung malampuson kini, magpadayon ang pag-execute. Kung mapakyas usab kini, i-marka ang step isip `failed` ug magpadayon ang pag-execute sa sunod nga step.
- **No fallback** — i-marka ang step isip `failed`. Ang dili importante nga mga step ma-skip; ang kritikal nga mga step (na-marka og `required: true`) mopahunong sa kasamtangang phase ug magpahigayon og recovery attempt sa lebel sa phase.

Ang agent mohatag og report sa tanan nga kapakyasan sa final plan summary ug mahimong magsugyot og manual remediation steps alang sa mga sayop nga dili na maayo pag-recover.

---

## Site Plan Abilities

### `create_site_plan`

Naghimo og estrukturadong site plan gikan sa usa ka natural language goal description.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Natural language description of the desired website |
| `style` | string | No | Visual style preference: `minimal`, `bold`, `professional`, `playful`. Default: agent chooses based on the goal |
| `plugins` | array | No | Plugin slugs to include in the plan. The orchestrator adds required plugins automatically. |
| `dry_run` | boolean | No | If `true`, returns the plan JSON without saving or executing it. Default `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Magsugod sa pag-execute sa usa ka nauna nang nahimo nga site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID of the plan to execute |
| `auto_install_plugins` | boolean | No | If `true`, automatically installs required plugins without confirmation. Default `false` |
| `max_retries` | integer | No | Number of times to retry a failed step before moving on. Default `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Mopauli sa kasamtangang status sa pag-execute sa usa ka site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID to query |

**Returns** ang progress object nga gihulagway sa [Progress Tracking](#4-progress-tracking) sa itaas.

---

### `handle_plan_error`

Manually resolve ang usa ka mapakyas nga step ug ipadayon pag-usab ang plan execution gikan sa sunod nga step. Gamita kini kung dili posible ang automatic recovery ug gusto nimo nga mointervene.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID of the failed step |
| `resolution` | string | Yes | Usa sa `skip` (ma-skip ug magpadayon), `retry` (i-try pag-usab dayon ang step), o `mark_done` (isip malampuson nga wala na pag-run) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Pagtandi sa v1 ug v2

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

Naghimo og site plan gikan sa usa ka goal description.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Nag-execute sa nauna nang nahimo nga plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Nagpakita sa kasamtangang pag-uswag alang sa nag-execute o nakompleto nga plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Naghlista sa tanan nga site plans (nagpaabot, nagpadayon, ug nakompleto).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Nag-reset sa usa ka mapakyas nga plan ngadto sa `pending` aron mahimo kining i-execute pag-usab gikan sa sinugdanan.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
