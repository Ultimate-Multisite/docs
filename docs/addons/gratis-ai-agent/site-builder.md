---
title: "Site Builder Orchestration v2"
sidebar_position: 4
---

# Site Builder Orchestration v2

Site Builder Orchestration v2 (introduced in Gratis AI Agent v1.4.0) is the engine that powers multi-step website creation. When you ask the agent to "build a restaurant website" or "create a portfolio with a blog", the orchestrator breaks that high-level goal into a structured **plan**, discovers the plugins needed to fulfil it, executes each step in sequence, tracks progress, and recovers from errors autonomously.

---

## How It Works

### 1. Plan Generation

When the agent receives a site-building instruction, it calls the `create_site_plan` ability to produce a JSON **site plan**. The plan describes:

- **Goal** — what the finished site should do
- **Phases** — ordered groups of steps (e.g. _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — individual ability calls within each phase
- **Plugin requirements** — plugins that must be active for certain steps to run
- **Fallbacks** — alternative steps if a primary step fails

**Example plan (abbreviated)**

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

### 2. Plugin Discovery

Before execution begins, the orchestrator scans the plan's `plugin_requirements` and checks which plugins are already active. For missing plugins, it:

1. Searches the registry via `recommend_plugin` for the best match
2. Prompts the agent to confirm the recommendation
3. Triggers installation if approved (or if auto-install is enabled in settings)

Plugin discovery failures are non-fatal — the orchestrator marks the affected steps as `skipped` and continues with the rest of the plan.

### 3. Plan Execution

The orchestrator calls `execute_site_plan` with the plan ID. Execution proceeds phase-by-phase, step-by-step:

- **Step references** (`__ref:` prefix) — steps can reference outputs from previous steps. In the example above, `__ref:create_menu.menu_id` is resolved to the `menu_id` returned by the `create_menu` step.
- **Parallel steps** — steps within the same phase that have no inter-dependencies are dispatched concurrently when the `parallel` flag is set.
- **Step timeout** — each step has an individual timeout (default: the `Ability Timeout` setting). A timed-out step is marked `failed` and the plan continues.

### 4. Progress Tracking

Call `get_plan_progress` at any time to check execution status:

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

WP-CLI users can monitor progress with:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Error Recovery

When a step fails, the orchestrator checks for a **fallback** step defined in the plan:

- **Fallback available** — the fallback step is attempted immediately. If it succeeds, execution continues. If it also fails, the step is marked `failed` and execution continues with the next step.
- **No fallback** — the step is marked `failed`. Non-critical steps are skipped; critical steps (marked `required: true`) halt the current phase and trigger a phase-level recovery attempt.

The agent reports all failures in the final plan summary and may suggest manual remediation steps for unrecoverable errors.

---

## Site Plan Abilities

### `create_site_plan`

Generates a structured site plan from a natural language goal description.

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

Begins executing a previously generated site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID of the plan to execute |
| `auto_install_plugins` | boolean | No | If `true`, automatically installs required plugins without confirmation. Default `false` |
| `max_retries` | integer | No | Number of times to retry a failed step before moving on. Default `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Returns the current execution status of a site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID to query |

**Returns** the progress object described in [Progress Tracking](#4-progress-tracking) above.

---

### `handle_plan_error`

Manually resolves a failed step and resumes plan execution from the next step. Use this when automatic recovery was not possible and you want to intervene.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID of the failed step |
| `resolution` | string | Yes | One of `skip` (skip and continue), `retry` (retry the step immediately), or `mark_done` (treat as succeeded without re-running) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparing v1 and v2

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

Generates a site plan from a goal description.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Executes a previously generated plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Shows current progress for an executing or completed plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Lists all site plans (pending, in-progress, and completed).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Resets a failed plan to `pending` so it can be re-executed from the beginning.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
