---
title: Orkestrasyona Avakera Malperê v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Rêvebirina Site Builder v2

Site Builder Orchestration v2 (di Gratis AI Agent v1.4.0 de hate nasandin) motora afirandina malperên pir-qonaxî ye. Dema tu ji agent bipirsî ku "malperek xwaringehê ava bike" an "portfolioyek bi blogekê biafirîne", orchestrator wê armanca bilind dike **plan**ek rêxistî, pluginên pêwîst ji bo pêkanîna wê dibîne, her qonaxê li pey hev dimeşîne, pêşveçûnê dişopîne, û bi xweser ji çewtiyan vedigere.

---

## Çawa dixebite {#how-it-works}

### 1. Çêkirina planê {#1-plan-generation}

Dema agent fermanek avakirina malperê distîne, ew şiyana `create_site_plan` bang dike da ku **plana malperê** ya JSON çêbike. Plan van tiştan diyar dike:

- **Armanc** — malpera qediyayî divê çi bike
- **Qonax** — komên rêzkirî yên gavên karê (mînak: _Setup_, _Cureyên Naverokê_, _Sêwiran_, _Naverok_)
- **Gav** — bangên şiyanên yekane di nav her qonaxê de
- **Pêdiviyên plugin** — pluginên ku divê çalak bin da ku hinek gav bimeşin
- **Fallbacks** — gavên alternatîf heke gavek sereke têk biçe

**Plana mînak (kurte)**

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

### 2. Dîtina pluginan {#2-plugin-discovery}

Berî ku meşandin dest pê bike, orchestrator `plugin_requirements` yên planê dinêre û kontrol dike ka kîjan plugin jixwe çalak in. Ji bo pluginên kêm, ew:

1. Bi rêya `recommend_plugin` di registry de li hevberdana herî baş digere
2. Ji agent dipirse ku pêşniyarê piştrast bike
3. Heke hate pejirandin (an heke auto-install di mîhengan de çalak be) saz kirinê dest pê dike

Têkçûnên dîtina pluginan mirinbar nînin — orchestrator gavên bandor lê bûyî wek `skipped` nîşan dike û bi mayîna planê didomîne.

### 3. Meşandina planê {#3-plan-execution}

Orchestrator bi nasnameya planê `execute_site_plan` bang dike. Meşandin qonax-bi-qonax, gav-bi-gav pêş dikeve:

- **Referansên gavê** (pêşgira `__ref:`) — gav dikarin encamên gavên berê wek referans bikar bînin. Di mînaka jorîn de, `__ref:create_menu.menu_id` vedibe `menu_id` ya ku ji gava `create_menu` vegeriyaye.
- **Gavên hevdem** — gavên di heman qonaxê de ku pêwendiyên navxweyî nînin, dema ala `parallel` danîn be, bi hevdem têne şandin.
- **Demjimêra gavê** — her gav xwedî demjimêreke taybet e (standard: mîhenga `Ability Timeout`). Gavek ku demjimêra wê derbas bibe wek `failed` tê nîşankirin û plan didomîne.

### 4. Şopandina pêşveçûnê {#4-progress-tracking}

Di her demê de `get_plan_progress` bang bike da ku rewşa meşandinê kontrol bikî:

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

Bikarhênerên WP-CLI dikarin pêşveçûnê bi vê bişopînin:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Vegerandina çewtiyan {#5-error-recovery}

Dema gavek têk diçe, orchestrator li **fallback**ek ku di planê de hatibe diyarkirin digere:

- **Fallback heye** — gava fallback tavilê tê ceribandin. Heke bi ser bikeve, meşandin didomîne. Heke ew jî têk biçe, gav wek `failed` tê nîşankirin û meşandin bi gava din didomîne.
- **Fallback tune** — gav wek `failed` tê nîşankirin. Gavên ne-krîtîk têne derbaskirin; gavên krîtîk (bi `required: true` hatine nîşankirin) qonaxa heyî rawestînin û hewildana vegerandina asta qonaxê dest pê dikin.

Agent hemû têkçûnan di kurteya dawî ya planê de radigihîne û dikare ji bo çewtiyên ku nayên vegerandin gavên çareseriya destan pêşniyar bike.

---

## Şiyanên plana malperê {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ji ravekirina armancekê bi zimanê xwezayî planek malperê ya rêxistî diafirîne.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Ravekirina bi zimanê xwezayî ya malpera xwestî |
| `style` | string | No | Vebijêrka şêwaza dîtbarî: `minimal`, `bold`, `professional`, `playful`. Standard: agent li gorî armancê hilbijartinê dike |
| `plugins` | array | No | Slugên plugin ku di planê de werin daxil kirin. Orchestrator pluginên pêwîst bixwe lê zêde dike. |
| `dry_run` | boolean | No | Heke `true` be, JSON-a planê bê tomarkirin an meşandin vedigerîne. Standard `false` |

**Vedigerîne** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Dest bi meşandina planek malperê ya berê hatî çêkirin dike.

**Parametre**

| Parametre | Cûre | Pêwîst | Danasîn |
|---|---|---|---|
| `plan_id` | string | Erê | ID-ya plana ku dê were meşandin |
| `auto_install_plugins` | boolean | Na | Heke `true` be, bê pejirandinê pluginên pêwîst bixweber saz dike. Berdest `false` |
| `max_retries` | integer | Na | Hejmara carên ceribandina ji nû ve ya gaveke têkçûyî berî derbasbûna gaveke din. Berdest `1` |

**Vedigere** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Rewşa meşandina niha ya plana malperê vedigerîne.

**Parametre**

| Parametre | Cûre | Pêwîst | Danasîn |
|---|---|---|---|
| `plan_id` | string | Erê | ID-ya planê ji bo lêpirsînê |

**Vedigere** tiştê pêşveçûnê yê li jor di [Şopandina Pêşveçûnê](#4-progress-tracking) de hatiye danasîn.

---

### `handle_plan_error` {#handleplanerror}

Gaveke têkçûyî bi destan çareser dike û meşandina planê ji gava din ve didomîne. Dema vegerandina bixweber ne gengaz bû û hûn dixwazin destwerdanê bikin vê bikar bînin.

**Parametre**

| Parametre | Cûre | Pêwîst | Danasîn |
|---|---|---|---|
| `plan_id` | string | Erê | ID-ya planê |
| `step_id` | string | Erê | ID-ya gava têkçûyî |
| `resolution` | string | Erê | Yek ji `skip` (derbas bike û bidomîne), `retry` (gavê yekser ji nû ve biceribîne), an `mark_done` (wek serketî bihesibîne bêyî ku ji nû ve were meşandin) |

**Vedigere** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Berhevkirina v1 û v2 {#comparing-v1-and-v2}

| Taybetmendî | v1 | v2 |
|---|---|---|
| Planên çend-qonaxî | Na | Erê |
| Referansên derana gavê (`__ref:`) | Na | Erê |
| Dîtina plugin | Bi destan | Bixweber |
| API-ya şopandina pêşveçûnê | Na | Erê |
| Vegerandina çewtiyê | Têk diçe û raweste | Cîgir + bidomîne |
| Meşandina gavên hevdem | Na | Erê (ji bo her qonaxê bi hilbijartinê) |
| Fermanên plana WP-CLI | Na | Erê |
| Yekbûna benchmark | Na | Erê (`q-restaurant-website`) |

---

## Fermanên Plana WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Ji danasîna armancê planek malperê çêdike.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Planek berê hatî çêkirin dimeşîne.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Pêşveçûna niha ji bo planek ku tê meşandin an temam bûye nîşan dide.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Hemû planên malperê (li bendê, di pêvajoyê de, û temam bûyî) rêz dike.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Planek têkçûyî vedigerîne `pending` da ku ji destpêkê ve dîsa were meşandin.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
