---
title: Orchestratio Constructoris Situs v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (introductum in Gratis AI Agent v1.4.0) est machina quae creationem situs interretialis pluribus gradibus sustentat. Cum rogas agentem ut "situm interretialem popinae aedificet" vel "collectionem operum cum diario creet", orchestrator illud propositum summi gradus in **consilium** structum dividit, plugins necessarios ad id perficiendum reperit, quemque gradum ordine exsequitur, progressum observat, atque ab erroribus sua sponte se recipit.

---

## Quomodo Operatur {#how-it-works}

### 1. Generatio Consilii {#1-plan-generation}

Cum agens mandatum ad situm aedificandum accipit, facultatem `create_site_plan` vocat ut **consilium situs** JSON efficiat. Consilium describit:

- **Propositum** — quid situs perfectus facere debeat
- **Phases** — ordinatos greges graduum (exempli gratia _Institutio_, _Genera Contenta_, _Designatio_, _Contentum_)
- **Gradus** — singulas vocationes facultatum intra quamque phasem
- **Requisita plugin** — plugins quae activa esse debent ut certi gradus currere possint
- **Substitutiones** — gradus alternativos si gradus primarius deficit

**Exemplum consilii (abbreviatum)**

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

### 2. Inventio Plugin {#2-plugin-discovery}

Antequam exsecutio incipit, orchestrator `plugin_requirements` consilii perquirit et examinat quae plugins iam activa sint. Pro plugins absentibus, is:

1. Registrum per `recommend_plugin` quaerit ut aptissimam convenientiam inveniat
2. Agentem rogat ut commendationem confirmet
3. Institutionem movet si probata est (vel si auto-install in optionibus activatum est)

Defectus inventionis plugin non sunt fatales — orchestrator gradus affectos ut `skipped` signat et cum reliquo consilio pergit.

### 3. Exsecutio Consilii {#3-plan-execution}

Orchestrator `execute_site_plan` cum ID consilii vocat. Exsecutio procedit per phases, gradatim:

- **Relationes graduum** (praefixum `__ref:`) — gradus possunt ad exitus graduum priorum referre. In exemplo supra, `__ref:create_menu.menu_id` resolvitur in `menu_id` a gradu `create_menu` redditum.
- **Gradus paralleli** — gradus intra eandem phasem qui nullas interdependentias habent simul mittuntur cum signum `parallel` positum est.
- **Tempus maximum gradus** — quisque gradus proprium tempus maximum habet (praedefinitum: optio `Ability Timeout`). Gradus cui tempus exspiravit ut `failed` signatur, et consilium pergit.

### 4. Observatio Progressus {#4-progress-tracking}

Voca `get_plan_progress` quovis tempore ut statum exsecutionis inspicias:

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

Usatores WP-CLI progressum observare possunt per:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Recuperatio ab Erroribus {#5-error-recovery}

Cum gradus deficit, orchestrator quaerit gradum **substitutionis** in consilio definitum:

- **Substitutio praesto** — gradus substitutionis statim temptatur. Si succedit, exsecutio pergit. Si etiam deficit, gradus ut `failed` signatur et exsecutio cum gradu proximo pergit.
- **Nulla substitutio** — gradus ut `failed` signatur. Gradus non critici praetermittuntur; gradus critici (notati `required: true`) phasem praesentem sistunt et conatum recuperationis in gradu phasis movent.

Agens omnes defectus in summa finali consilii refert et gradus remediationis manuales pro erroribus irreparabilibus suggerere potest.

---

## Facultates Consilii Situs {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Consilium situs structum generat ex descriptione propositi lingua naturali.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Descriptio lingua naturali situs interretialis optati |
| `style` | string | No | Praeferentia stili visualis: `minimal`, `bold`, `professional`, `playful`. Praedefinitum: agens secundum propositum eligit |
| `plugins` | array | No | Slugs plugin quae in consilium includenda sunt. Orchestrator plugins requisita automatice addit. |
| `dry_run` | boolean | No | Si `true`, JSON consilii reddit sine eo servando aut exsequendo. Praedefinitum `false` |

**Redit** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Exsecutionem consilii situs antea generati incipit.

**Parametri**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `plan_id` | string | Ita | ID consilii exsequendi |
| `auto_install_plugins` | boolean | Non | Si `true`, additamenta requisita automatice sine confirmatione instituit. Praedefinitum `false` |
| `max_retries` | integer | Non | Numerus vicium quibus gradus deficiens iterandus est antequam progrediaris. Praedefinitum `1` |

**Reddit** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Reddit statum exsecutionis praesentem consilii situs.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `plan_id` | string | Ita | ID consilii interrogandum |

**Reddit** obiectum progressus supra in [Vestigatio Progressus](#4-progress-tracking) descriptum.

---

### `handle_plan_error` {#handleplanerror}

Gradum deficientem manualiter resolvit et exsecutionem consilii a proximo gradu resumit. Hoc utere cum recuperatio automatica possibilis non fuit et intervenire vis.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `plan_id` | string | Ita | ID consilii |
| `step_id` | string | Ita | ID gradus deficientis |
| `resolution` | string | Ita | Unum ex `skip` (praetermitte et continua), `retry` (statim gradum iterum tenta), aut `mark_done` (tracta tamquam successum sine re-exsecutione) |

**Reddit** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparatio v1 et v2 {#comparing-v1-and-v2}

| Proprietas | v1 | v2 |
|---|---|---|
| Consilia plurium phasium | Non | Ita |
| Relationes exitus graduum (`__ref:`) | Non | Ita |
| Inventio additamentorum | Manualis | Automatica |
| API vestigationis progressus | Non | Ita |
| Recuperatio errorum | Deficere et consistere | Substitutio + pergere |
| Exsecutio graduum parallela | Non | Ita (eligendum per phasin) |
| Mandata consiliorum WP-CLI | Non | Ita |
| Integratio mensurae comparativae | Non | Ita (`q-restaurant-website`) |

---

## Mandata Consiliorum WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Generat consilium situs ex descriptione finis.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Exsequitur consilium antea generatum.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Ostendit progressum praesentem consilii exsequentis aut perfecti.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Enumerat omnia consilia situs (pendentia, in-progressu, et perfecta).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Reponit consilium deficiens ad `pending` ut denuo ab initio exsequi possit.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
