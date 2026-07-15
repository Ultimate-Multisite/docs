---
title: Оркестратсияи созандаи сайт v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (дар Gratis AI Agent v1.4.0 муаррифӣ шудааст) муҳаррикест, ки сохтани бисёрқадамии вебсайтро таъмин мекунад. Вақте ки шумо аз агент хоҳиш мекунед, ки "вебсайти тарабхона бисозад" ё "портфолио бо блог эҷод кунад", orchestrator он ҳадафи сатҳи баландро ба **нақша**-и сохторёфта мешиканад, plugin-ҳои лозимро барои иҷрои он пайдо мекунад, ҳар қадамро пайдарпай иҷро мекунад, пешрафтро пайгирӣ мекунад ва аз хатогиҳо мустақилона барқарор мешавад.

---

## Чӣ гуна кор мекунад {#how-it-works}

### 1. Тавлиди нақша {#1-plan-generation}

Вақте ки агент дастури сохтани сайтро мегирад, он қобилияти `create_site_plan`-ро даъват мекунад, то **нақшаи сайт**-и JSON тавлид кунад. Нақша тавсиф мекунад:

- **Ҳадаф** — сайти анҷомёфта бояд чӣ кор кунад
- **Марҳилаҳо** — гурӯҳҳои тартибдодашудаи қадамҳо (масалан, _Насб_, _Намудҳои муҳтаво_, _Тарроҳӣ_, _Муҳтаво_)
- **Қадамҳо** — даъватҳои инфиродии қобилият дар дохили ҳар марҳила
- **Талаботи plugin** — plugin-ҳое, ки барои иҷро шудани қадамҳои муайян бояд фаъол бошанд
- **Ҷойгузинҳо** — қадамҳои алтернативӣ, агар қадами асосӣ ноком шавад

**Нақшаи намунавӣ (кӯтоҳшуда)**

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

### 2. Кашфи plugin {#2-plugin-discovery}

Пеш аз оғози иҷро, orchestrator `plugin_requirements`-и нақшаро месанҷад ва тафтиш мекунад, ки кадом plugin-ҳо аллакай фаъоланд. Барои plugin-ҳои мавҷуднабуда, он:

1. Реестрро тавассути `recommend_plugin` барои мувофиқати беҳтарин ҷустуҷӯ мекунад
2. Аз агент тасдиқи тавсияро мепурсад
3. Агар тасдиқ шавад (ё агар насби худкор дар танзимот фаъол бошад), насбро оғоз мекунад

Нокомиҳои кашфи plugin марговар нестанд — orchestrator қадамҳои таъсирдидаро ҳамчун `skipped` қайд мекунад ва бо боқимондаи нақша идома медиҳад.

### 3. Иҷрои нақша {#3-plan-execution}

Orchestrator `execute_site_plan`-ро бо ID-и нақша даъват мекунад. Иҷро марҳила ба марҳила, қадам ба қадам пеш меравад:

- **Истинодҳои қадам** (пешванди `__ref:`) — қадамҳо метавонанд ба натиҷаҳои қадамҳои қаблӣ ишора кунанд. Дар мисоли боло, `__ref:create_menu.menu_id` ба `menu_id`, ки аз ҷониби қадами `create_menu` баргардонида шудааст, ҳал мешавад.
- **Қадамҳои мувозӣ** — қадамҳои дохили як марҳила, ки вобастагии байниҳамдигарӣ надоранд, вақте ки парчами `parallel` гузошта шудааст, ҳамзамон фиристода мешаванд.
- **Маҳдудияти вақти қадам** — ҳар қадам маҳдудияти вақти инфиродӣ дорад (пешфарз: танзими `Ability Timeout`). Қадаме, ки вақташ ба анҷом мерасад, ҳамчун `failed` қайд мешавад ва нақша идома меёбад.

### 4. Пайгирии пешрафт {#4-progress-tracking}

Ҳар вақт `get_plan_progress`-ро даъват кунед, то ҳолати иҷроро санҷед:

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

Корбарони WP-CLI метавонанд пешрафтро бо ин назорат кунанд:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Барқарорсозӣ аз хато {#5-error-recovery}

Вақте ки як қадам ноком мешавад, orchestrator мавҷудияти қадами **ҷойгузин**-ро, ки дар нақша муайян шудааст, месанҷад:

- **Ҷойгузин дастрас аст** — қадами ҷойгузин фавран озмуда мешавад. Агар муваффақ шавад, иҷро идома меёбад. Агар он низ ноком шавад, қадам ҳамчун `failed` қайд мешавад ва иҷро бо қадами навбатӣ идома меёбад.
- **Ҷойгузин нест** — қадам ҳамчун `failed` қайд мешавад. Қадамҳои ғайримуҳим гузаронида мешаванд; қадамҳои муҳим (бо `required: true` қайдшуда) марҳилаи ҷориро бозмедоранд ва кӯшиши барқарорсозии сатҳи марҳиларо оғоз мекунанд.

Агент ҳамаи нокомиҳоро дар хулосаи ниҳоии нақша гузориш медиҳад ва метавонад барои хатогиҳои барқарорнашаванда қадамҳои ислоҳи дастиро пешниҳод кунад.

---

## Қобилиятҳои нақшаи сайт {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Аз тавсифи ҳадаф бо забони табиӣ нақшаи сохторёфтаи сайт тавлид мекунад.

**Параметрҳо**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Тавсифи забони табиии вебсайти дилхоҳ |
| `style` | string | No | Афзалияти сабки визуалӣ: `minimal`, `bold`, `professional`, `playful`. Пешфарз: агент бар асоси ҳадаф интихоб мекунад |
| `plugins` | array | No | Slug-ҳои plugin, ки ба нақша дохил карда мешаванд. Orchestrator plugin-ҳои лозимро ба таври худкор илова мекунад. |
| `dry_run` | boolean | No | Агар `true` бошад, JSON-и нақшаро бе захира ё иҷро кардани он бармегардонад. Пешфарз `false` |

**Бармегардонад** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Иҷрои нақшаи қаблан тавлидшудаи сайтро оғоз мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `plan_id` | string | Бале | ID-и нақшае, ки бояд иҷро шавад |
| `auto_install_plugins` | boolean | Не | Агар `true` бошад, plugin-ҳои заруриро бе тасдиқ ба таври худкор насб мекунад. Пешфарз `false` |
| `max_retries` | integer | Не | Шумораи маротибаҳо барои такрори қадами ноком пеш аз гузаштан ба қадами дигар. Пешфарз `1` |

**Бармегардонад** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Вазъи ҷории иҷрои нақшаи сайтро бармегардонад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `plan_id` | string | Бале | ID-и нақша барои пурсиш |

**Бармегардонад** объекти пешрафтеро, ки дар [Пайгирии пешрафт](#4-progress-tracking) дар боло тавсиф шудааст.

---

### `handle_plan_error` {#handleplanerror}

Қадами нокомро дастӣ ҳал мекунад ва иҷрои нақшаро аз қадами навбатӣ идома медиҳад. Инро вақте истифода баред, ки барқарорсозии худкор имконнопазир буд ва шумо мехоҳед дахолат кунед.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `plan_id` | string | Бале | ID-и нақша |
| `step_id` | string | Бале | ID-и қадами ноком |
| `resolution` | string | Бале | Яке аз `skip` (гузаронидан ва идома додан), `retry` (такрори фаврии қадам), ё `mark_done` (ҳамчун муваффақ ҳисоб кардан бе иҷрои дубора) |

**Бармегардонад** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Муқоисаи v1 ва v2 {#comparing-v1-and-v2}

| Хусусият | v1 | v2 |
|---|---|---|
| Нақшаҳои чандмарҳилаӣ | Не | Бале |
| Истинодҳои натиҷаи қадам (`__ref:`) | Не | Бале |
| Кашфи plugin | Дастӣ | Худкор |
| API-и пайгирии пешрафт | Не | Бале |
| Барқарорсозӣ аз хато | Нокомӣ ва бозистӣ | Варианти эҳтиётӣ + идома |
| Иҷрои параллелии қадамҳо | Не | Бале (бо интихоб барои ҳар марҳила) |
| Фармонҳои нақшаи WP-CLI | Не | Бале |
| Ҳамгироии benchmark | Не | Бале (`q-restaurant-website`) |

---

## Фармонҳои нақшаи WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Аз тавсифи ҳадаф нақшаи сайт тавлид мекунад.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Нақшаи қаблан тавлидшударо иҷро мекунад.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Пешрафти ҷориро барои нақшаи дар ҳоли иҷро ё анҷомёфта нишон медиҳад.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Ҳамаи нақшаҳои сайтро (интизор, дар ҳоли иҷро ва анҷомёфта) рӯйхат мекунад.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Нақшаи нокомро ба `pending` барқарор мекунад, то он аз аввал дубора иҷро шавад.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
