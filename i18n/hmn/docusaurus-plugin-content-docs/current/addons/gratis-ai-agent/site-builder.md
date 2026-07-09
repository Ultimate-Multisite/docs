---
title: Kev Tswj thiab Sib Koom Tus Tsim Vev Xaib v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (tau qhia hauv Gratis AI Agent v1.4.0) yog lub cav uas txhawb kev tsim website ntau-kauj ruam. Thaum koj hais kom agent "tsim ib lub website rau tsev noj mov" lossis "tsim ib qho portfolio nrog ib lub blog", tus orchestrator yuav muab lub hom phiaj loj ntawd faib ua ib **plan** uas muaj qauv, nrhiav cov plugins uas xav tau kom ua tau raws li ntawd, khiav txhua kauj ruam raws li txheej txheem, taug qab kev nce qib, thiab rov kho tau ntawm kev yuam kev nws tus kheej.

---

## Nws Ua Haujlwm Li Cas

### 1. Kev Tsim Plan

Thaum agent tau txais ib qho lus qhia tsim site, nws hu rau lub peev xwm `create_site_plan` kom tsim tau ib JSON **site plan**. Lub plan piav qhia:

- **Hom phiaj** — lub site uas ua tiav lawm yuav tsum ua dab tsi
- **Phases** — pawg kauj ruam uas muab teeb raws kev txiav txim (piv txwv _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — kev hu peev xwm ib qho zuj zus hauv txhua phase
- **Plugin requirements** — plugins uas yuav tsum active rau qee kauj ruam thiaj khiav tau
- **Fallbacks** — lwm kauj ruam hloov yog tias kauj ruam tseem ceeb ua tsis tiav

**Plan piv txwv (txo luv)**

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

### 2. Kev Nrhiav Plugin

Ua ntej kev khiav pib, tus orchestrator tshuaj xyuas cov `plugin_requirements` hauv plan thiab kuaj seb cov plugins twg twb active lawm. Rau cov plugins uas ploj lawm, nws:

1. Tshawb registry ntawm `recommend_plugin` kom nrhiav qhov phim tshaj
2. Nug agent kom lees paub qhov kev pom zoo ntawd
3. Pib installation yog tias tau pom zoo (lossis yog auto-install qhib hauv settings)

Kev nrhiav plugin uas ua tsis tiav tsis ua rau tag nrho txoj haujlwm tuag — tus orchestrator cim cov kauj ruam cuam tshuam ua `skipped` thiab txuas ntxiv nrog seem ntawm plan.

### 3. Kev Khiav Plan

Tus orchestrator hu `execute_site_plan` nrog plan ID. Kev khiav mus raws phase-rau-phase, kauj ruam-rau-kauj ruam:

- **Step references** (`__ref:` prefix) — cov kauj ruam tuaj yeem siv outputs los ntawm cov kauj ruam ua ntej. Hauv piv txwv saum toj, `__ref:create_menu.menu_id` raug daws mus rau `menu_id` uas kauj ruam `create_menu` xa rov qab.
- **Parallel steps** — cov kauj ruam hauv tib phase uas tsis muaj kev vam khom sib txuas yuav raug xa khiav tib txhij thaum tus chij `parallel` raug teeb.
- **Step timeout** — txhua kauj ruam muaj timeout riêng (default: qhov setting `Ability Timeout`). Ib kauj ruam uas dhau sijhawm yuav raug cim tias `failed` thiab plan txuas ntxiv.

### 4. Kev Taug Qab Kev Nce Qib

Hu `get_plan_progress` thaum twg los tau kom kuaj qhov xwm txheej kev khiav:

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

Cov neeg siv WP-CLI tuaj yeem saib kev nce qib nrog:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Kev Rov Kho Kev Yuam Kev

Thaum ib kauj ruam ua tsis tiav, tus orchestrator kuaj seb puas muaj ib kauj ruam **fallback** uas tau txhais hauv plan:

- **Muaj fallback** — yuav sim kauj ruam fallback tam sim ntawd. Yog nws ua tiav, kev khiav txuas ntxiv. Yog nws kuj ua tsis tiav thiab, kauj ruam raug cim tias `failed` thiab kev khiav txuas ntxiv nrog kauj ruam tom ntej.
- **Tsis muaj fallback** — kauj ruam raug cim tias `failed`. Cov kauj ruam uas tsis tseem ceeb raug hla; cov kauj ruam tseem ceeb (cim `required: true`) yuav nres phase tam sim no thiab pib sim rov kho qib phase.

Agent yuav qhia tag nrho cov kev ua tsis tiav hauv daim ntawv xaus plan kawg thiab tej zaum yuav qhia cov kauj ruam kho manually rau cov kev yuam kev uas rov kho tsis tau.

---

## Cov Peev Xwm Site Plan

### `create_site_plan`

Tsim ib site plan uas muaj qauv los ntawm ib qho kev piav qhia hom phiaj ua lus ntuj.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Kev piav qhia ua lus ntuj txog lub website uas xav tau |
| `style` | string | No | Kev nyiam style pom kev: `minimal`, `bold`, `professional`, `playful`. Default: agent xaiv raws li lub hom phiaj |
| `plugins` | array | No | Plugin slugs uas yuav suav rau hauv plan. Tus orchestrator ntxiv cov plugins uas xav tau tau nws tus kheej. |
| `dry_run` | boolean | No | Yog `true`, xa rov qab plan JSON yam tsis khaws lossis khiav nws. Default `false` |

**Xa rov qab** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Pib khiav ib site plan uas twb tau tsim ua ntej lawm.

**Parameters**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `plan_id` | string | Yog | ID ntawm lub plan uas yuav khiav |
| `auto_install_plugins` | boolean | Tsis yog | Yog `true`, cia li nruab cov plugin uas yuav tsum muaj yam tsis tas nug kom paub tseeb. Default `false` |
| `max_retries` | integer | Tsis yog | Tus naj npawb zaug rov sim ib kauj ruam uas ua tsis tiav ua ntej mus rau tom ntej. Default `1` |

**Xa rov qab** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Xa rov qab qhov execution status tam sim no ntawm ib lub site plan.

**Parameters**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `plan_id` | string | Yog | Plan ID uas yuav nug |

**Xa rov qab** lub progress object uas piav hauv [Kev Taug Qab Progress](#4-progress-tracking) saum toj no.

---

### `handle_plan_error`

Kho ib kauj ruam uas ua tsis tiav ntawm tes thiab rov pib plan execution ntawm kauj ruam tom ntej. Siv qhov no thaum kev rov kho cia li ua tsis tau thiab koj xav los cuam tshuam kho.

**Parameters**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `plan_id` | string | Yog | Plan ID |
| `step_id` | string | Yog | ID ntawm kauj ruam uas ua tsis tiav |
| `resolution` | string | Yog | Ib qho ntawm `skip` (hla thiab txuas ntxiv), `retry` (rov sim kauj ruam tam sim ntawd), lossis `mark_done` (xam tias ua tiav yam tsis rov khiav dua) |

**Xa rov qab** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Muab v1 thiab v2 Los Sib Piv

| Qhov muaj peev xwm | v1 | v2 |
|---|---|---|
| Cov plan muaj ntau theem | Tsis muaj | Muaj |
| Cov kev siv rau step output (`__ref:`) | Tsis muaj | Muaj |
| Kev nrhiav plugin | Ua ntawm tes | Ua cia li |
| Progress tracking API | Tsis muaj | Muaj |
| Kev rov kho error | Ua tsis tiav thiab nres | Fallback + txuas ntxiv |
| Kev khiav ntau kauj ruam tib lub sijhawm | Tsis muaj | Muaj (xaiv qhib rau ib theem twg) |
| Cov lus txib WP-CLI plan | Tsis muaj | Muaj |
| Kev txuas benchmark | Tsis muaj | Muaj (`q-restaurant-website`) |

---

## Cov Lus Txib WP-CLI Plan

### `wp gratis-ai-agent plan create`

Tsim ib lub site plan los ntawm ib nqe lus piav txog lub hom phiaj.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Khiav ib lub plan uas twb tsim ua ntej lawm.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Qhia progress tam sim no rau ib lub plan uas tab tom khiav lossis twb tiav lawm.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Sau tag nrho cov site plan (tseem tos, tab tom khiav, thiab tiav lawm).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Reset ib lub plan uas ua tsis tiav rau `pending` kom nws rov khiav tau ntawm qhov pib.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
