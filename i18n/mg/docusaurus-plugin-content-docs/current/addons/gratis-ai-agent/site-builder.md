---
title: Fandrindrana ny Mpanamboatra Tranonkala v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Fandrindrana Site Builder v2

Site Builder Orchestration v2 (nampidirina tao amin'ny Gratis AI Agent v1.4.0) no motera mampandeha ny famoronana tranonkala amin'ny dingana maro. Rehefa mangataka amin'ilay agent ianao hoe "manangana tranonkalan'ny trano fisakafoanana" na "mamorona portfolio misy bilaogy", dia zarain'ilay orchestrator ho **drafitra** voarafitra ilay tanjona ambony, tadiaviny ireo plugins ilaina hanatanterahana azy, tanterahiny misesy ny dingana tsirairay, arahiny ny fandrosoana, ary averiny amin'ny laoniny ho azy rehefa misy hadisoana.

---

## Fomba fiasany {#how-it-works}

### 1. Famoronana drafitra {#1-plan-generation}

Rehefa mandray toromarika fananganana tranonkala ilay agent, dia miantso ny fahaiza-manao `create_site_plan` izy mba hamokatra **drafitra tranonkala** JSON. Ny drafitra dia mamaritra:

- **Tanjona** — izay tokony hataon'ilay tranonkala vita
- **Dingana lehibe** — vondron-dingana voalahatra (oh: _Fanomanana_, _Karazana votoaty_, _Famolavolana_, _Votoaty_)
- **Dingana** — antso fahaiza-manao tsirairay ao anatin'ny dingana lehibe tsirairay
- **Fepetra takian'ny plugin** — plugins tsy maintsy miasa mba hahafahan'ny dingana sasany mandeha
- **Safidy solony** — dingana hafa raha tsy mahomby ny dingana fototra

**Ohatra drafitra (nohafohezina)**

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

### 2. Fikarohana plugin {#2-plugin-discovery}

Alohan'ny hanombohan'ny fanatanterahana, dia zahain'ilay orchestrator ny `plugin_requirements` ao amin'ny drafitra ary jerena izay plugins efa miasa. Ho an'ireo plugins tsy hita, dia:

1. Mikaroka ao amin'ny rejisitra amin'ny alalan'ny `recommend_plugin` mba hahitana ny mifanandrify indrindra
2. Mangataka amin'ilay agent hanamarina ilay tolo-kevitra
3. Mandefa fametrahana raha nekena (na raha alefa ao amin'ny fikirana ny fametrahana mandeha ho azy)

Tsy mahafaty ny tsy fahombiazan'ny fikarohana plugin — marihin'ilay orchestrator ho `skipped` ireo dingana voakasika ary tohizany ny ambin'ny drafitra.

### 3. Fanatanterahana drafitra {#3-plan-execution}

Miantso ny `execute_site_plan` miaraka amin'ny ID-n'ny drafitra ilay orchestrator. Mizotra isaky ny dingana lehibe, isaky ny dingana, ny fanatanterahana:

- **Fanondroan-dingana** (tovona `__ref:`) — afaka manondro vokatra avy amin'ny dingana teo aloha ny dingana. Ao amin'ny ohatra etsy ambony, ny `__ref:create_menu.menu_id` dia voavaha ho ilay `menu_id` naverin'ny dingana `create_menu`.
- **Dingana mifanindran-dalana** — ireo dingana ao anatin'ny dingana lehibe iray izay tsy mifampiankina dia alefa miaraka rehefa napetraka ny saina `parallel`.
- **Fe-potoana dingana** — manana fe-potoana manokana ny dingana tsirairay (sanda mahazatra: ny fikirana `Ability Timeout`). Ny dingana lany fotoana dia marihina ho `failed` ary mitohy ny drafitra.

### 4. Fanarahana fandrosoana {#4-progress-tracking}

Antsoy ny `get_plan_progress` amin'ny fotoana rehetra hijerena ny satan'ny fanatanterahana:

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

Afaka manara-maso ny fandrosoana amin'ity ny mpampiasa WP-CLI:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Famerenana amin'ny laoniny rehefa misy hadisoana {#5-error-recovery}

Rehefa tsy mahomby ny dingana iray, dia zahain'ilay orchestrator raha misy dingana **solony** voafaritra ao amin'ny drafitra:

- **Misy solony** — andramana avy hatrany ilay dingana solony. Raha mahomby izany, dia mitohy ny fanatanterahana. Raha tsy mahomby koa izy, dia marihina ho `failed` ilay dingana ary mitohy amin'ny dingana manaraka ny fanatanterahana.
- **Tsy misy solony** — marihina ho `failed` ilay dingana. Tsipahina ireo dingana tsy tena manan-danja; ireo dingana tena ilaina (voamarika `required: true`) dia mampiato ny dingana lehibe ankehitriny ary mandefa andrana famerenana amin'ny laoniny amin'ny haavon'ny dingana lehibe.

Taterin'ilay agent ao amin'ny famintinana farany an'ilay drafitra ny tsy fahombiazana rehetra ary mety hanolotra dingana fanitsiana atao tanana ho an'ireo hadisoana tsy azo averina amin'ny laoniny.

---

## Fahaiza-manao drafitra tranonkala {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Mamorona drafitra tranonkala voarafitra avy amin'ny famaritana tanjona amin'ny fiteny voajanahary.

**Masontsivana**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Famaritana amin'ny fiteny voajanahary ny tranonkala irina |
| `style` | string | No | Safidin'ny fomba hita maso: `minimal`, `bold`, `professional`, `playful`. Sanda mahazatra: mifidy araka ny tanjona ilay agent |
| `plugins` | array | No | Slugs an'ny plugin ampidirina ao amin'ny drafitra. Ampidirin'ilay orchestrator ho azy ireo plugins ilaina. |
| `dry_run` | boolean | No | Raha `true`, dia mamerina ny JSON-n'ny drafitra nefa tsy mitahiry na manatanteraka azy. Sanda mahazatra `false` |

**Mamerina** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Manomboka manatanteraka drafitra tranonkala efa novokarina teo aloha.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `plan_id` | string | Eny | ID an’ilay drafitra hotanterahina |
| `auto_install_plugins` | boolean | Tsia | Raha `true`, mametraka ho azy ireo fanitarana ilaina tsy mila fanamafisana. Sanda mahazatra `false` |
| `max_retries` | integer | Tsia | Isan’ny famerenana manandrana dingana tsy nahomby alohan’ny hirosoana. Sanda mahazatra `1` |

**Mamerina** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Mamerina ny satan’ny fanatanterahana ankehitriny amin’ny drafitry ny tranonkala iray.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `plan_id` | string | Eny | Plan ID hanontaniana |

**Mamerina** ilay zavatra fandrosoana voafaritra ao amin’ny [Fanarahana fandrosoana](#4-progress-tracking) etsy ambony.

---

### `handle_plan_error` {#handleplanerror}

Mamaha amin-tanana dingana tsy nahomby ary manohy ny fanatanterahana ny drafitra manomboka amin’ny dingana manaraka. Ampiasao ity rehefa tsy azo natao ny fanarenana mandeha ho azy ary te hiditra an-tsehatra ianao.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `plan_id` | string | Eny | Plan ID |
| `step_id` | string | Eny | ID an’ilay dingana tsy nahomby |
| `resolution` | string | Eny | Iray amin’ny `skip` (mandingana ary manohy), `retry` (manandrana indray avy hatrany ilay dingana), na `mark_done` (heverina ho nahomby tsy averina alefa) |

**Mamerina** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Fampitahana ny v1 sy v2 {#comparing-v1-and-v2}

| Endri-javatra | v1 | v2 |
|---|---|---|
| Drafitra misy dingana maro | Tsia | Eny |
| Fanondroana vokatra avy amin’ny dingana (`__ref:`) | Tsia | Eny |
| Fitadiavana fanitarana | Amin-tanana | Mandeha ho azy |
| API fanarahana fandrosoana | Tsia | Eny |
| Fanarenana hadisoana | Tsy mahomby ary mijanona | Safidy solony + manohy |
| Fanatanterahana dingana mifanindran-dalana | Tsia | Eny (tsy maintsy alefa isaky ny dingana) |
| Baikon-drafitra WP-CLI | Tsia | Eny |
| Fampidirana benchmark | Tsia | Eny (`q-restaurant-website`) |

---

## Baikon-drafitra WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Mamorona drafitry ny tranonkala avy amin’ny famaritana tanjona iray.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Manatanteraka drafitra efa novokarina teo aloha.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Mampiseho ny fandrosoana ankehitriny ho an’ny drafitra iray eo am-panatanterahana na efa vita.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Mitanisa ny drafitry ny tranonkala rehetra (miandry, eo am-panatanterahana, ary vita).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Mamerina drafitra tsy nahomby ho `pending` mba hahafahana manatanteraka azy indray hatramin’ny voalohany.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
