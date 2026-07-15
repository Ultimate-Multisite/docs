---
title: Orkestryванне Konstruktora Saitov v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (введены ў Gratis AI Agent v1.4.0) — гэта рухавік, які працуе над стварэннем сайта ў некалькі крокаў. Калі вы просіце агента "пабудаваць сайт рэстарану" або "створыць портфель з блогом", оркестратар распадае гэтую агульную мэту на структураваны **план**, выяўляе plugins, неабходныя для яго выканання, выконвае кожны крок па сланцы, адсочвае прагрэс і самастойна аднаўляецца ў выпадку памылак.

---

## Як гэта працуе {#how-it-works}

### 1. Генерацыя плана {#1-plan-generation}

Калі агент атрымлівае інструкцыю па будаванні сайта, ён выклікае функцыянальнасць `create_site_plan` для вытворства JSON **плана сайта**. План апісвае:

- **Мэта** — што павінен рабіць гатовы сайт
- **Фазы** — упорядкаваныя групы крокаў (напрыклад, _Налады_, _Тыпы кантэнту_, _Дызайн_, _Кантэнт_)
- **Крокі** — адзіночныя выклікі функцыянальнасці ў кожнай фазе
- **Plugins, неабходныя для працы** — plugins, якія павінны быць актыўнымі, каб некаторыя крокі прайшлі
- **Рэзервы** — альтэрнатыўныя крокі ў выпадку, калі асноўны крок не ўдакладніўся

**Прыклад плана (скарачаваны)**

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

### 2. Выяўленне plugins {#2-plugin-discovery}

Перш чынка выканання, оркестратар сканаруе `plugin_requirements` плана і праверыць, якія plugins ужо актыўныя. Для адсутніх plugins ён:

1. Шукае ў рэгістры праз `recommend_plugin` найлепшы адпаведнасць
2. Прасіць агента пацвердзіць рэкамендацыю
3. Выклікае ўстаноўку, калі гэта прызначна (або калі аўтаматычная ўстаноўка ўключена ў настройках)

Неўдачы ў выяўленні plugins не з'яўляюцца фатальнымі — оркестратар адзначае закранутыя крокі як `skipped` і працягвае з рэштай плана.

### 3. Выкананне плана {#3-plan-execution}

Оркестратар выклікае `execute_site_plan` з ID плана. Выкананне праходзіць па фазах, крок за крокам:

- **Адсылкі на крокі** (`__ref:` prefix) — крокі могуць адсылацца да вынікоў з папярэдніх крокаў. У вышэйзгаданым прыкладзе, `__ref:create_menu.menu_id` выяўляецца як `menu_id`, які павергнуў крок `create_menu`.
- **Параллельныя крокі** — крокі ў межах адной фазы, якія не маюць паміж сабой залежнасці, адпраўляюцца адначасова, калі ўстаноўлены flag `parallel`.
- **Таймаут кроку** — кожны крок мае адрознічны таймаут (па спілканню: настаўванне `Ability Timeout`). Крок, які прайшоў таймаут, адзначаецца як `failed`, і план працягвае.

### 4. Адсочванне прагрэсу {#4-progress-tracking}

Выклікай `get_plan_progress` у любы час, каб праверыць статус выканання:

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

Пакорысты WP-CLI могуць адсочваць прагрэс за выкарыстаннем:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Аднаўленне памылак {#5-error-recovery}

Калі крок не ўдакладніўся, оркестратар праверыць на існаванне **рэзерўнага** кроку ў плане:

- **Рэзерв доступны** — прабуюцца выкарыстоўваць резерўны крок. Калі ён выклікае поспех, выкананне працягваецца. Калі ён таксама не ўдакладняецца, крок адзначаецца як `failed`, і выкананне працягваецца з наступным крокам.
- **Рэзерву няма** — крок адзначаецца як `failed`. Некамплектыўныя крокі прапускаюцца; крытычныя крокі (адзначэнныя `required: true`) спыняюць бягучую фазу і выклікаюць спробу аднаўлення на ўзроўні фазы.

Агент паведамляе пра ўсе неўдачы ў канчатковым рэзюмэ плана і можа прапанаваць ручную рэабілітацыю для неаднаўражымых памылак.

---

## Abilities плана сайта {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Генеруе структураваны план сайта з апісання натуральнай мовы.

**Паметнікі**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Апісан натуральнай мовы жаданага сайта |
| `style` | string | No | Візуальны стыль: `minimal`, `bold`, `professional`, `playful`. Па спілканню: агент выбірае на аснове мэты |
| `plugins` | array | No | Slugs plugins, якія трэба ўключыць у план. Оркестратар аўтаматычна дадае неабходныя plugins. |
| `dry_run` | boolean | No | Калі `true`, паверне JSON плана без захавання або выканання яго. Па спілканню `false` |

**Паверне** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Пачынае выкананне раней згенераванага плана сайта.

**Паметнікі**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID плана для выканання |
| `auto_install_plugins` | boolean | No | Калі `true`, аўтаматычна ўстаноўвае неабходныя plugins без пацвердлення. Па спілканню `false` |
| `max_retries` | integer | No | Колькасць разаў, калі прайшвецца крок, перш чым прайсці да наступнага. Па спілканню `1` |

**Паверне** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Паверне бягучы статус выканання плана сайта.

**Паметнікі**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID для апыту |

**Паверне** аб'ект прагрэсу, апісаны ў [Progress Tracking](#4-progress-tracking) вышэй.

---

### `handle_plan_error` {#handleplanerror}

Ручна выяўляе неўдакладні крок і пераўтварае выкананне плана з наступнага кроку. Выкарыстоўвайце гэта, калі аўтаматычнае аднаўленне было немоżliwым і вы хочаце ўтруціцца.

**Паметнікі**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID неўдакладнінага кроку |
| `resolution` | string | Yes | Адноўленне: адзін з `skip` (праскочыць і працягнуць), `retry` (паспробаваць крок неадкладна), або `mark_done` (аднесці як паспяховы без паўторнага выканання) |

**Паверне** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Параўнанне v1 і v2 {#comparing-v1-and-v2}

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

## WP-CLI Plan Commands {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Генеруе план сайта з апісання мэты.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Выконвае раней згенераваны план.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Паказвае бягучы прагрэс для выканавальнага або заканчанага плана.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Стварае спіс усіх планаў сайта (на чаканні, у прагрэсе і заканчаныя).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Ануляроўвае неўдакладнены план на статус `pending`, каб яго можна было паўторна выканаць з пачатку.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
