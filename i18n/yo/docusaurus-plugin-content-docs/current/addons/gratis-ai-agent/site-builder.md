---
title: Ìṣàkóso Olùkọ́ Ojúlé v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Ìṣàkóso Olùkọ́ Aaye v2 {#site-builder-orchestration-v2}

Ìṣàkóso Olùkọ́ Aaye v2 (tí a ṣàfihàn nínú Gratis AI Agent v1.4.0) ni ẹ̀rọ tó ń fún ìdá aaye ayelujara aláìgbésẹ̀-púpọ̀ lágbára. Nígbà tí o bá ní kí aṣojú náà "kọ aaye ayelujara ilé oúnjẹ" tàbí "dá àkójọpọ̀ iṣẹ́ pẹ̀lú blog", olùṣàkóso náà máa pín ète gíga yẹn sí **ètò** tó ní ìlànà, ṣàwárí àwọn ohun ìfikún tí a nílò láti mú un ṣẹ, ṣiṣẹ́ ìgbésẹ̀ kọ̀ọ̀kan ní títẹ̀lé ara wọn, tọpinpin ìlọsíwájú, ó sì máa bọ́ láti inú àwọn àṣìṣe fúnra rẹ̀.

---

## Bí Ó Ṣe Ń Ṣiṣẹ́ {#how-it-works}

### 1. Ṣíṣe Ètò {#1-plan-generation}

Nígbà tí aṣojú náà bá gba ìtọ́ni ìkọ́-aaye, ó máa pe agbára `create_site_plan` láti ṣe **ètò aaye** JSON kan. Ètò náà ṣàlàyé:

- **Ète** — ohun tí aaye tí a parí gbọ́dọ̀ ṣe
- **Àwọn ìpele** — àwọn àkójọpọ̀ ìgbésẹ̀ tí a ṣètò ní títẹ̀lé ara wọn (f.a. _Ìṣètò_, _Àwọn Irú Àkóónú_, _Àpẹrẹ_, _Àkóónú_)
- **Àwọn ìgbésẹ̀** — àwọn ìpè agbára kọ̀ọ̀kan nínú ìpele kọọkan
- **Àwọn ohun tí ohun ìfikún nílò** — àwọn ohun ìfikún tí gbọ́dọ̀ wà ní ṣíṣiṣẹ́ kí àwọn ìgbésẹ̀ kan lè ṣiṣẹ́
- **Àwọn ohun ìrànlọ́wọ́-padà** — àwọn ìgbésẹ̀ míràn bí ìgbésẹ̀ àkọ́kọ́ bá kùnà

**Àpẹẹrẹ ètò (tí a kúkúrú)**

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

### 2. Ìṣàwárí Ohun Ìfikún {#2-plugin-discovery}

Kí ìmúṣẹ tó bẹ̀rẹ̀, olùṣàkóso náà máa ṣàyẹ̀wò `plugin_requirements` inú ètò náà, ó sì máa ṣàyẹ̀wò àwọn ohun ìfikún wo ló ti wà ní ṣíṣiṣẹ́ tẹ́lẹ̀. Fún àwọn ohun ìfikún tí kò sí, ó máa:

1. Wá inú àkọsílẹ̀ pẹ̀lú `recommend_plugin` fún ìbámu tó dára jù
2. Ní kí aṣojú náà jẹ́rìí sí ìṣàbá náà
3. Fa ìfiṣíṣe sílẹ̀ bí a bá fọwọ́ sí i (tàbí bí ìfiṣíṣe aládàáṣiṣẹ́ bá ṣiṣẹ́ nínú àwọn ètò)

Ìkùnà ìṣàwárí ohun ìfikún kì í pa iṣẹ́ dúró — olùṣàkóso náà máa samisi àwọn ìgbésẹ̀ tí ó kan gẹ́gẹ́ bí `skipped`, ó sì máa tẹ̀síwájú pẹ̀lú ìyókù ètò náà.

### 3. Ìmúṣẹ Ètò {#3-plan-execution}

Olùṣàkóso náà máa pe `execute_site_plan` pẹ̀lú ID ètò náà. Ìmúṣẹ máa lọ ní ìpele-ní-ìpele, ìgbésẹ̀-ní-ìgbésẹ̀:

- **Àwọn ìtọ́kasí ìgbésẹ̀** (àfikún ìbẹ̀rẹ̀ `__ref:`) — àwọn ìgbésẹ̀ lè tọ́ka sí àwọn àbájáde láti inú àwọn ìgbésẹ̀ iṣáájú. Nínú àpẹẹrẹ lókè, `__ref:create_menu.menu_id` ni a túmọ̀ sí `menu_id` tí ìgbésẹ̀ `create_menu` dá padà.
- **Àwọn ìgbésẹ̀ tó ń ṣiṣẹ́ lẹ́gbẹ̀ẹ́ ara wọn** — àwọn ìgbésẹ̀ nínú ìpele kan náà tí kò ní ìgbẹ́kẹ̀lé ara wọn ni a máa rán jáde nígbà kan náà nígbà tí àmì `parallel` bá wà ní ṣíṣiṣẹ́.
- **Àkókò tí ìgbésẹ̀ gbọ́dọ̀ parí** — ìgbésẹ̀ kọ̀ọ̀kan ní àkókò ìparí tirẹ̀ (àkọ́kọ́: ètò `Ability Timeout`). Ìgbésẹ̀ tí àkókò rẹ̀ kọjá ni a samisi `failed`, ètò náà sì máa tẹ̀síwájú.

### 4. Títọpinpin Ìlọsíwájú {#4-progress-tracking}

Pe `get_plan_progress` nígbàkigbà láti ṣàyẹ̀wò ipò ìmúṣẹ:

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

Àwọn aṣàmúlò WP-CLI lè tọpinpin ìlọsíwájú pẹ̀lú:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Ìmúpadàbọ̀ Láti Inú Àṣìṣe {#5-error-recovery}

Nígbà tí ìgbésẹ̀ kan bá kùnà, olùṣàkóso náà máa ṣàyẹ̀wò fún ìgbésẹ̀ **ìrànlọ́wọ́-padà** tí a ṣàlàyé nínú ètò náà:

- **Ìrànlọ́wọ́-padà wà** — a máa gbìyànjú ìgbésẹ̀ ìrànlọ́wọ́-padà náà lẹ́sẹ̀kẹsẹ̀. Bí ó bá ṣàṣeyọrí, ìmúṣẹ máa tẹ̀síwájú. Bí ó bá tún kùnà, a máa samisi ìgbésẹ̀ náà `failed`, ìmúṣẹ sì máa tẹ̀síwájú pẹ̀lú ìgbésẹ̀ tó kàn.
- **Kò sí ìrànlọ́wọ́-padà** — a máa samisi ìgbésẹ̀ náà `failed`. A máa fo àwọn ìgbésẹ̀ tí kò ṣe pàtàkì kọjá; àwọn ìgbésẹ̀ pàtàkì (tí a samisi `required: true`) máa dá ìpele lọwọlọwọ dúró, wọ́n sì máa fa ìgbìyànjú ìmúpadàbọ̀ ní ipele-ìpele.

Aṣojú náà máa jábọ̀ gbogbo ìkùnà nínú àkótán ètò ìkẹyìn, ó sì lè ṣàbá àwọn ìgbésẹ̀ àtúnṣe afọwọ́ṣe fún àwọn àṣìṣe tí kò ṣeé mú padà.

---

## Àwọn Agbára Ètò Aaye {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ó ń ṣe ètò aaye tó ní ìlànà láti inú àlàyé ète ní èdè adayeba.

**Àwọn Párámítà**

| Párámítà | Irú | A Nílò | Àlàyé |
|---|---|---|---|
| `goal` | string | Bẹẹni | Àlàyé ní èdè adayeba nípa aaye ayelujara tí a fẹ́ |
| `style` | string | Rara | Ìfẹ́ ara ìwòran: `minimal`, `bold`, `professional`, `playful`. Àkọ́kọ́: aṣojú máa yan dá lori ète náà |
| `plugins` | array | Rara | Àwọn slug ohun ìfikún láti fi sínú ètò náà. Olùṣàkóso náà máa fi àwọn ohun ìfikún tí a nílò kún un fúnra rẹ̀. |
| `dry_run` | boolean | Rara | Bí ó bá jẹ́ `true`, ó máa dá JSON ètò náà padà láì fi pamọ́ tàbí ṣiṣẹ́ e. Àkọ́kọ́ `false` |

**Ó Dá Padà** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Ó bẹ̀rẹ̀ sí í ṣiṣẹ́ ètò aaye tí a ti ṣe tẹ́lẹ̀.

**Àwọn Párámítà**

| Párámítà | Irú | A Nílò | Àlàyé |
|---|---|---|---|
| `plan_id` | string | Bẹẹni | ID ètò tí a fẹ́ ṣiṣẹ́ |
| `auto_install_plugins` | boolean | Rara | Bí ó bá jẹ́ `true`, ó máa fi àwọn ohun ìfikún tí a nílò sílẹ̀ fúnra rẹ̀ láì ní ìjẹ́rìí. Àkọ́kọ́ `false` |
| `max_retries` | integer | Rara | Iye ìgbà láti tún ìgbésẹ̀ tó kùnà gbìyànjú kí a tó tẹ̀síwájú. Àkọ́kọ́ `1` |

**Ó Dá Padà** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Ó dá ipò ìmúṣẹ lọwọlọwọ ti ètò aaye kan padà.

**Àwọn Párámítà**

| Párámítà | Irú | A Nílò | Àlàyé |
|---|---|---|---|
| `plan_id` | string | Bẹẹni | ID ètò láti béèrè |

**Ó Dá Padà** ohun ìlọsíwájú tí a ṣàlàyé nínú [Títọpinpin Ìlọsíwájú](#4-progress-tracking) lókè.

---

### `handle_plan_error` {#handleplanerror}

Ó yanjú ìgbésẹ̀ tó kùnà ní ọwọ́, ó sì tún bẹ̀rẹ̀ ìmúṣẹ ètò láti ìgbésẹ̀ tó kàn. Lo èyí nígbà tí ìmúpadàbọ̀ aládàáṣiṣẹ́ kò ṣeé ṣe, tí o sì fẹ́ dá sí i.

**Àwọn Párámítà**

| Párámítà | Irú | A Nílò | Àlàyé |
|---|---|---|---|
| `plan_id` | string | Bẹẹni | ID ètò |
| `step_id` | string | Bẹẹni | ID ìgbésẹ̀ tó kùnà |
| `resolution` | string | Bẹẹni | Ọ̀kan nínú `skip` (fo kọjá kí o tẹ̀síwájú), `retry` (tún ìgbésẹ̀ náà gbìyànjú lẹ́sẹ̀kẹsẹ̀), tàbí `mark_done` (ká a sí pé ó ṣàṣeyọrí láì tún un ṣiṣẹ́) |

**Ó Dá Padà** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Fífi v1 àti v2 Wéra {#comparing-v1-and-v2}

| Ẹ̀yà | v1 | v2 |
|---|---|---|
| Àwọn ètò aláìpele-púpọ̀ | Rara | Bẹẹni |
| Àwọn ìtọ́kasí àbájáde ìgbésẹ̀ (`__ref:`) | Rara | Bẹẹni |
| Ìṣàwárí ohun ìfikún | Afọwọ́ṣe | Aládàáṣiṣẹ́ |
| API títọpinpin ìlọsíwájú | Rara | Bẹẹni |
| Ìmúpadàbọ̀ láti inú àṣìṣe | Kùnà-kí-o-dúró | Ìrànlọ́wọ́-padà + tẹ̀síwájú |
| Ìmúṣẹ ìgbésẹ̀ lẹ́gbẹ̀ẹ́ ara wọn | Rara | Bẹẹni (yan-láti-lo fún ìpele kọọkan) |
| Àwọn àṣẹ ètò WP-CLI | Rara | Bẹẹni |
| Ìṣọ̀kan ìdánwò ìwọ̀n iṣẹ́ | Rara | Bẹẹni (`q-restaurant-website`) |

---

## Àwọn Àṣẹ Ètò WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Ó ń ṣe ètò aaye láti inú àlàyé ète.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Ó ń ṣiṣẹ́ ètò tí a ti ṣe tẹ́lẹ̀.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Ó ń fi ìlọsíwájú lọwọlọwọ hàn fún ètò tí ń ṣiṣẹ́ tàbí tí a ti parí.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Ó ṣe àtòjọ gbogbo àwọn ètò aaye (tí ń dúró, tí ń lọ lọwọ, àti tí a ti parí).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Ó tún ètò tó kùnà ṣètò sí `pending` kí a lè tún un ṣiṣẹ́ láti ìbẹ̀rẹ̀.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
