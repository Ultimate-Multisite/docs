---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (представена в Gratis AI Agent v1.4.0) е двигателят, който задвижва създаването на многостъпни уебсайтове. Когато поискате от агента да „изгради ресторантски уебсайт“ или „създаде портфолио с блог“, оркестраторът разбива тази обща цел на структуриран **план**, открива необходимите плагини за изпълнение на тази цел, изпълнява всеки етап последователно, проследява напредъка и се възстановява от грешки автономно.

---

## Как Работи

### 1. Генериране на План

Когато агентът получи инструкция за изграждане на сайт, той извиква способността `create_site_plan`, за да генерира JSON **план на сайта**. Планът описва:

- **Цел** — какво трябва да прави финалният сайт
- **Фази** — подредени групи от стъпки (напр. _Настройка_, _Типове съдържание_, _Дизайн_, _Съдържание_)
- **Стъпки** — отделни извиквания на способности в рамките на всяка фаза
- **Изисквания за плагини** — плагини, които трябва да са активни, за да работят определени стъпки
- **Резервни планове (Fallbacks)** — алтернативни стъпки, ако основната стъпка се провали

**Примерен план (съкратен)**

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

### 2. Откриване на Плагини (Plugin Discovery)

Преди да започне изпълнението, оркестраторът сканира `plugin_requirements` в плана и проверява кои плагини вече са активни. За липсващи плагини той:

1. Търси в регистъра чрез `recommend_plugin` най-доброто съответствие
2. Иска от агента да потвърди препоръката
3. Задейства инсталацията, ако е одобрено (или ако автоматичната инсталация е активирана в настройките)

Неуспехите при откриването на плагини не са критични — оркестраторът маркира засегнатите стъпки като `skipped` (пропуснати) и продължава с останалата част от плана.

### 3. Изпълнение на Плана (Plan Execution)

Оркестраторът извиква `execute_site_plan` с ID на плана. Изпълнението протича фаза по фаза, стъпка по стъпка:

- **Препратки на стъпки** (`__ref:` префикс) — стъпките могат да се отнасят до изходите от предишни стъпки. В горния пример, `__ref:create_menu.menu_id` се решава до `menu_id`, върнат от стъпката `create_menu`.
- **Паралелни стъпки** — стъпките в рамките на една и съща фаза, които нямат взаимни зависимости, се изпращат едновременно, когато е зададен флагът `parallel`.
- **Изтичане на стъпка (Step timeout)** — всяка стъпка има индивидуално време за изпълнение (по подразбиране: настройката `Ability Timeout`). Стъпка, която е изтекла по време, се маркира като `failed` (неуспешна) и планът продължава.

### 4. Проследяване на Напредъка (Progress Tracking)

Извикайте `get_plan_progress` по всяко време, за да проверите статуса на изпълнението:

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

Потребителите на WP-CLI могат да проследят напредъка с:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Възстановяване след Грешка (Error Recovery)

Когато една стъпка се провали, оркестраторът проверява дали има **резервен план (fallback)**, дефиниран в плана:

- **Наличен резервен план** — се опитва се резервният план незабавно. Ако успее, изпълнението продължава. Ако и той се провали, стъпката се маркира като `failed` и изпълнението продължава със следващата стъпка.
- **Липсва резервен план** — стъпката се маркира като `failed`. Некритичните стъпки се пропускат; критичните стъпки (маркирани като `required: true`) спират текущата фаза и задействат опит за възстановяване на ниво фаза.

Агентът докладва всички грешки в финалното резюме на плана и може да предложи ръчни стъпки за корекция за не възстановими грешки.

---

## Abilities за Планиране на Сайтове (Site Plan Abilities)

### `create_site_plan`

Генерира структуриран план на сайта от описание на цел на естествен език.

**Параметри**

| Параметър | Тип | Изискван | Описание |
|---|---|---|---|
| `goal` | string | Yes | Описание на желаната уебстраница на естествен език |
| `style` | string | No | Визуален стил на предпочитание: `minimal`, `bold`, `professional`, `playful`. По подразбиране: агентът избира въз основа на целта |
| `plugins` | array | No | Slugs на плагини, които да бъдат включени в плана. Оркестраторът автоматично добавя необходимите плагини. |
| `dry_run` | boolean | No | Ако е `true`, връща JSON плана, без да го запазва или изпълнява. По подразбиране `false` |

**Връща** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Започва изпълнението на предварително генериран план на сайта.

**Параметри**

| Параметър | Тип | Изискван | Описание |
|---|---|---|---|
| `plan_id` | string | Yes | ID на плана, който трябва да бъде изпълнен |
| `auto_install_plugins` | boolean | No | Ако е `true`, автоматично инсталира необходимите плагини без потвърждение. По подразбиране `false` |
| `max_retries` | integer | No | Брой пъти, които да се опита повторно провалена стъпка, преди да премине. По подразбиране `1` |

**Връща** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Връща текущия статус на изпълнение на плана на сайта.

**Параметри**

| Параметър | Тип | Изискван | Описание |
|---|---|---|---|
| `plan_id` | string | Yes | ID на плана, който трябва да бъде проверен |

**Връща** обекта за напредъка, описан в [Progress Tracking](#4-progress-tracking) по-горе.

---

### `handle_plan_error`

Ръчно разрешава провалена стъпка и възобновява изпълнението на плана от следващата стъпка. Използвайте това, когато автоматичното възстановяване не е било възможно и искате да 개върнете.

**Параметри**

| Параметър | Тип | Изискван | Описание |
|---|---|---|---|
| `plan_id` | string | Yes | ID на плана |
| `step_id` | string | Yes | ID на провалена стъпка |
| `resolution` | string | Yes | Едно от `skip` (пропусни и продължи), `retry` (опитай повторно незабавно) или `mark_done` (отцени като успешно, без повторно изпълнение) |

**Връща** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Сравнение на v1 и v2

| Характеристика | v1 | v2 |
|---|---|---|
| Многофазови планове | No | Yes |
| Препратки на изходи от стъпки (`__ref:`) | No | Yes |
| Откриване на плагини | Manual | Automatic |
| API за проследяване на напредъка | No | Yes |
| Възстановяване след грешка | Fail-and-stop | Fallback + continue |
| Изпълнение на паралелни стъпки | No | Yes (opt-in per phase) |
| WP-CLI команди за планове | No | Yes |
| Интеграция с Benchmark | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Команди за Планове

### `wp gratis-ai-agent plan create`

Генерира план на сайта от описание на цел.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Изпълнява предварително генериран план.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Показва текущия напредък за изпълняващ се или завършен план.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Изброява всички планове на сайтове (в процес на обработка, в ход и завършени).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Презаписва провален план в състояние `pending`, така че да може да бъде изпълнен отново от началото.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
