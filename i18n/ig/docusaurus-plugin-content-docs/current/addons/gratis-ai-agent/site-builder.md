---
title: Nhazi ọrụ Onye nrụpụta Saịtị v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Nhazi Site Builder v2

Nhazi Site Builder v2 (e webatara na Gratis AI Agent v1.4.0) bụ injin na-enye ike n'ịmepụta webụsaịtị nwere ọtụtụ nzọụkwụ. Mgbe ị jụrụ onye nnọchiọrụ ahụ ka ọ "rụọ webụsaịtị ụlọ nri" ma ọ bụ "mepụta pọtụfoliyo nwere blọgụ", onye nhazi ahụ na-ekewa ebumnuche dị elu ahụ ka ọ bụrụ **atụmatụ** ahaziri ahazi, chọpụta mgbakwunye ndị achọrọ iji mezuo ya, mee nzọụkwụ ọ bụla n'usoro, soro ọganihu, ma gbakee site na njehie n'onwe ya.

---

## Otu O Si Arụ Ọrụ

### 1. Ịmepụta Atụmatụ

Mgbe onye nnọchiọrụ ahụ natara ntuziaka iwulite saịtị, ọ na-akpọ ikike `create_site_plan` iji mepụta JSON **atụmatụ saịtị**. Atụmatụ ahụ na-akọwa:

- **Ebumnuche** — ihe saịtị emechara kwesịrị ime
- **Usoro** — otu nzọụkwụ ahaziri n'usoro (dịka _Nhazi_, _Ụdị Ọdịnaya_, _Nhazi anya_, _Ọdịnaya_)
- **Nzọụkwụ** — oku ikike nke ọ bụla n'ime usoro ọ bụla
- **Ihe mgbakwunye chọrọ** — mgbakwunye ndị ga-arụ ọrụ ka nzọụkwụ ụfọdụ wee nwee ike ịgba ọsọ
- **Nhọrọ ndabere** — nzọụkwụ ndị ọzọ ma ọ bụrụ na nzọụkwụ mbụ ada

**Ọmụmaatụ atụmatụ (nke a belatara)**

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

### 2. Nchọpụta Mgbakwunye

Tupu mmezu amalite, onye nhazi ahụ na-enyocha `plugin_requirements` nke atụmatụ ahụ ma lelee mgbakwunye ndị arụlarị ọrụ. Maka mgbakwunye ndị na-efu, ọ na:

1. Achọ n'akwụkwọ ndekọ site na `recommend_plugin` maka nke kacha daba
2. Rịọ onye nnọchiọrụ ahụ ka ọ kwado ndụmọdụ ahụ
3. Kpalite nrụnye ma ọ bụrụ na akwadoro ya (ma ọ bụ ma ọ bụrụ na agbanyere nrụnye akpaaka na ntọala)

Ọdịda nchọpụta mgbakwunye anaghị egbu usoro — onye nhazi ahụ na-akara nzọụkwụ ndị metụtara ya dịka `skipped` ma gaa n'ihu na akụkụ fọdụrụ nke atụmatụ ahụ.

### 3. Mmezu Atụmatụ

Onye nhazi ahụ na-akpọ `execute_site_plan` na ID atụmatụ ahụ. Mmezu na-aga site n'usoro ruo n'usoro, nzọụkwụ ruo nzọụkwụ:

- **Ntụaka nzọụkwụ** (`__ref:` prefix) — nzọụkwụ nwere ike ịtụ aka na mmepụta sitere na nzọụkwụ gara aga. N'ọmụmaatụ dị n'elu, `__ref:create_menu.menu_id` a na-edozi ya ka ọ bụrụ `menu_id` nke nzọụkwụ `create_menu` weghachiri.
- **Nzọụkwụ na-aga n'otu oge** — a na-eziga nzọụkwụ dị n'ime otu usoro nke enweghị njikọ ndabere n'etiti ha n'otu oge mgbe etinyere ọkọlọtọ `parallel`.
- **Oge njedebe nzọụkwụ** — nzọụkwụ ọ bụla nwere oge njedebe nke ya (ndabara: ntọala `Ability Timeout`). A na-akara nzọụkwụ gafere oge dịka `failed` ma atụmatụ ahụ na-aga n'ihu.

### 4. Iso Ọganihu

Kpọọ `get_plan_progress` n'oge ọ bụla iji lelee ọnọdụ mmezu:

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

Ndị ọrụ WP-CLI nwere ike ileba ọganihu anya site na:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Mgbake Njehie

Mgbe nzọụkwụ dara, onye nhazi ahụ na-elele ma enwere nzọụkwụ **ndabere** akọwapụtara na atụmatụ ahụ:

- **Ndabere dị** — a na-anwale nzọụkwụ ndabere ozugbo. Ọ bụrụ na ọ gara nke ọma, mmezu na-aga n'ihu. Ọ bụrụ na ọ daa kwa, a na-akara nzọụkwụ ahụ dịka `failed` ma mmezu na-aga n'ihu na nzọụkwụ ọzọ.
- **Enweghị ndabere** — a na-akara nzọụkwụ ahụ dịka `failed`. A na-awụfe nzọụkwụ ndị na-abụghị ihe dị mkpa; nzọụkwụ dị mkpa (akara `required: true`) na-akwụsị usoro dị ugbu a ma kpalite mgbalị mgbake n'ọkwa usoro.

Onye nnọchiọrụ ahụ na-akọ ọdịda niile na nchịkọta atụmatụ ikpeazụ ma nwee ike ịtụ aro nzọụkwụ ndozi aka maka njehie ndị a na-apụghị ịgbake.

---

## Ikike Atụmatụ Saịtị

### `create_site_plan`

Na-emepụta atụmatụ saịtị ahaziri ahazi site na nkọwa ebumnuche n'asụsụ nkịtị.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `goal` | string | Ee | Nkọwa n'asụsụ nkịtị nke webụsaịtị achọrọ |
| `style` | string | Mba | Mmasị ụdị anya: `minimal`, `bold`, `professional`, `playful`. Ndabara: onye nnọchiọrụ na-ahọrọ dabere na ebumnuche ahụ |
| `plugins` | array | Mba | Slug mgbakwunye a ga-etinye n'atụmatụ ahụ. Onye nhazi ahụ na-agbakwunye mgbakwunye ndị achọrọ n'akpaghị aka. |
| `dry_run` | boolean | Mba | Ọ bụrụ na `true`, ọ na-eweghachi JSON atụmatụ ahụ na-enweghị ichekwa ma ọ bụ ime ya. Ndabara `false` |

**Na-eweghachi** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Na-amalite ime atụmatụ saịtị e mepụtara na mbụ.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `plan_id` | string | Ee | ID nke atụmatụ a ga-emezu |
| `auto_install_plugins` | boolean | Mba | Ọ bụrụ `true`, ọ na-etinye mgbakwunye ndị achọrọ na-akpaghị aka na-enweghị nkwenye. Ndabara `false` |
| `max_retries` | integer | Mba | Ọnụọgụ ugboro a ga-anwaleghachi nzọụkwụ dara ada tupu ịga n’ihu. Ndabara `1` |

**Na-eweghachi** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Na-eweghachi ọnọdụ mmezu dị ugbu a nke atụmatụ saịtị.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `plan_id` | string | Ee | ID atụmatụ a ga-ajụ |

**Na-eweghachi** ihe ọbjekt ọganihu akọwara na [Nsochi Ọganihu](#4-progress-tracking) n’elu.

---

### `handle_plan_error`

Na-edozi nzọụkwụ dara ada n’aka ma na-amaliteghachi mmezu atụmatụ site na nzọụkwụ na-esote. Jiri nke a mgbe mgbake akpaghị aka agaghị ekwe omume ma ịchọrọ itinye aka.

**Paramita**

| Paramita | Ụdị | Achọrọ | Nkọwa |
|---|---|---|---|
| `plan_id` | string | Ee | ID atụmatụ |
| `step_id` | string | Ee | ID nke nzọụkwụ dara ada |
| `resolution` | string | Ee | Otu n’ime `skip` (gafee ma gaa n’ihu), `retry` (nwaleghachi nzọụkwụ ahụ ozugbo), ma ọ bụ `mark_done` (were ya dị ka nke gara nke ọma na-enweghị imegharị ya) |

**Na-eweghachi** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Ịtụnyere v1 na v2

| Njirimara | v1 | v2 |
|---|---|---|
| Atụmatụ nwere ọtụtụ nkeji | Mba | Ee |
| Nrụtụaka mmepụta nzọụkwụ (`__ref:`) | Mba | Ee |
| Nchọpụta mgbakwunye | N’aka | Akpaghị aka |
| API nsochi ọganihu | Mba | Ee |
| Mgbake njehie | Daa-ma-kwụsị | Fallback + gaa n’ihu |
| Mmezu nzọụkwụ n’otu oge | Mba | Ee (a na-ahọrọ ya n’otu nkeji) |
| Iwu atụmatụ WP-CLI | Mba | Ee |
| Njikọ benchmark | Mba | Ee (`q-restaurant-website`) |

---

## Iwu Atụmatụ WP-CLI

### `wp gratis-ai-agent plan create`

Na-emepụta atụmatụ saịtị site na nkọwa ebumnuche.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Na-emezu atụmatụ e mepụtara na mbụ.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Na-egosi ọganihu dị ugbu a maka atụmatụ a na-emezu ma ọ bụ nke emechara.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Na-edepụta atụmatụ saịtị niile (na-echere, na-aga n’ihu, na nke emechara).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Na-emegharị atụmatụ dara ada ka ọ bụrụ `pending` ka e wee nwee ike imezu ya ọzọ site na mmalite.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
