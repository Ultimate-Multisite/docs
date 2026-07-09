---
title: Оркестрација на Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Оркестрација на градителот на сајтови v2

Оркестрацијата на градителот на сајтови v2 (воведена во Gratis AI Agent v1.4.0) е моторот што го напојува креирањето веб-сајтови во повеќе чекори. Кога ќе побарате од агентот да „изгради веб-сајт за ресторан“ или „креира портфолио со блог“, оркестраторот ја разложува таа цел од високо ниво во структуриран **план**, ги открива plugin-ите потребни за нејзино исполнување, го извршува секој чекор по ред, го следи напредокот и автономно се опоравува од грешки.

---

## Како функционира

### 1. Генерирање план

Кога агентот ќе добие инструкција за градење сајт, ја повикува способноста `create_site_plan` за да произведе JSON **план за сајт**. Планот опишува:

- **Цел** — што треба да прави готовиот сајт
- **Фази** — подредени групи чекори (на пр. _Поставување_, _Типови содржина_, _Дизајн_, _Содржина_)
- **Чекори** — поединечни повици на способности во рамки на секоја фаза
- **Барања за plugin-и** — plugin-и што мора да бидат активни за да се извршат одредени чекори
- **Резервни опции** — алтернативни чекори ако примарен чекор не успее

**Пример план (скратено)**

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

### 2. Откривање plugin-и

Пред да започне извршувањето, оркестраторот ги скенира `plugin_requirements` во планот и проверува кои plugin-и веќе се активни. За plugin-и што недостасуваат, тој:

1. Го пребарува регистарот преку `recommend_plugin` за најдоброто совпаѓање
2. Го поттикнува агентот да ја потврди препораката
3. Активира инсталација ако е одобрено (или ако автоматската инсталација е овозможена во поставките)

Неуспесите при откривање plugin-и не се фатални — оркестраторот ги означува засегнатите чекори како `skipped` и продолжува со остатокот од планот.

### 3. Извршување на планот

Оркестраторот го повикува `execute_site_plan` со ID на планот. Извршувањето продолжува фаза по фаза, чекор по чекор:

- **Референци на чекори** (`__ref:` префикс) — чекорите можат да референцираат излези од претходни чекори. Во примерот погоре, `__ref:create_menu.menu_id` се разрешува во `menu_id` вратен од чекорот `create_menu`.
- **Паралелни чекори** — чекорите во рамки на истата фаза што немаат меѓузависности се испраќаат истовремено кога е поставено знамето `parallel`.
- **Истекување време на чекор** — секој чекор има поединечно истекување време (стандардно: поставката `Ability Timeout`). Чекор на кој му истекло времето се означува како `failed` и планот продолжува.

### 4. Следење напредок

Повикајте `get_plan_progress` во секое време за да го проверите статусот на извршување:

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

Корисниците на WP-CLI можат да го следат напредокот со:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Опоравување од грешки

Кога чекор ќе не успее, оркестраторот проверува дали во планот е дефиниран **резервен** чекор:

- **Достапна резервна опција** — резервниот чекор се обидува веднаш. Ако успее, извршувањето продолжува. Ако и тој не успее, чекорот се означува како `failed` и извршувањето продолжува со следниот чекор.
- **Нема резервна опција** — чекорот се означува како `failed`. Некритичните чекори се прескокнуваат; критичните чекори (означени со `required: true`) ја запираат тековната фаза и активираат обид за опоравување на ниво на фаза.

Агентот ги пријавува сите неуспеси во конечниот резиме на планот и може да предложи рачни чекори за санирање на непоправливи грешки.

---

## Способности за план на сајт

### `create_site_plan`

Генерира структуриран план за сајт од опис на цел на природен јазик.

**Параметри**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Опис на посакуваниот веб-сајт на природен јазик |
| `style` | string | No | Претпочитан визуелен стил: `minimal`, `bold`, `professional`, `playful`. Стандардно: агентот избира врз основа на целта |
| `plugins` | array | No | Slug-ови на plugin-и што треба да се вклучат во планот. Оркестраторот автоматски ги додава потребните plugin-и. |
| `dry_run` | boolean | No | Ако е `true`, го враќа JSON-планот без да го зачува или изврши. Стандардно `false` |

**Враќа** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Започнува извршување на претходно генериран план за сајт.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `plan_id` | string | Да | ID на планот што треба да се изврши |
| `auto_install_plugins` | boolean | Не | Ако е `true`, автоматски ги инсталира потребните plugins без потврда. Стандардно `false` |
| `max_retries` | integer | Не | Број пати за повторен обид на неуспешен чекор пред да се продолжи понатаму. Стандардно `1` |

**Враќа** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Го враќа тековниот статус на извршување на план за site.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `plan_id` | string | Да | ID на планот за пребарување |

**Враќа** објектот за напредок опишан во [Следење на напредокот](#4-progress-tracking) погоре.

---

### `handle_plan_error`

Рачно решава неуспешен чекор и го продолжува извршувањето на планот од следниот чекор. Користете го ова кога автоматското обновување не било можно и сакате да интервенирате.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `plan_id` | string | Да | ID на планот |
| `step_id` | string | Да | ID на неуспешниот чекор |
| `resolution` | string | Да | Едно од `skip` (прескокни и продолжи), `retry` (веднаш повтори го чекорот), или `mark_done` (третирај како успешно без повторно извршување) |

**Враќа** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Споредба на v1 и v2

| Функција | v1 | v2 |
|---|---|---|
| Повеќефазни планови | Не | Да |
| Референци на излез од чекор (`__ref:`) | Не | Да |
| Откривање plugins | Рачно | Автоматско |
| API за следење на напредок | Не | Да |
| Обновување по грешка | Неуспех и стопирање | Резервна опција + продолжи |
| Паралелно извршување чекори | Не | Да (со вклучување по фаза) |
| WP-CLI команди за план | Не | Да |
| Benchmark интеграција | Не | Да (`q-restaurant-website`) |

---

## WP-CLI команди за план

### `wp gratis-ai-agent plan create`

Генерира план за site од опис на цел.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Извршува претходно генериран план.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Го прикажува тековниот напредок за план што се извршува или е завршен.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Ги наведува сите планови за site (на чекање, во тек и завршени).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Го ресетира неуспешниот план на `pending` за да може повторно да се изврши од почеток.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
