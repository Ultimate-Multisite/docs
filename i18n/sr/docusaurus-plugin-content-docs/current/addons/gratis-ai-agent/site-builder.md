---
title: Оркестрација креатора сајтова v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Оркестрација Site Builder-а v2 {#site-builder-orchestration-v2}

Оркестрација Site Builder-а v2 (уведена у Gratis AI Agent v1.4.0) је механизам који покреће креирање веб-сајта у више корака. Када затражите од агента да „направи веб-сајт за ресторан“ или „креира портфолио са блогом“, оркестратор разлаже тај циљ високог нивоа у структурисани **план**, открива plugin-е потребне за његово испуњавање, извршава сваки корак редом, прати напредак и аутономно се опоравља од грешака.

---

## Како то функционише {#how-it-works}

### 1. Генерисање плана {#1-plan-generation}

Када агент прими инструкцију за израду сајта, позива способност `create_site_plan` да произведе JSON **план сајта**. План описује:

- **Циљ** — шта завршени сајт треба да ради
- **Фазе** — уређене групе корака (нпр. _Подешавање_, _Типови садржаја_, _Дизајн_, _Садржај_)
- **Кораке** — појединачне позиве способности унутар сваке фазе
- **Захтеве за plugin-е** — plugin-е који морају бити активни да би се одређени кораци покренули
- **Резервне кораке** — алтернативне кораке ако примарни корак не успе

**Пример плана (скраћено)**

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

### 2. Откривање plugin-а {#2-plugin-discovery}

Пре почетка извршавања, оркестратор скенира `plugin_requirements` у плану и проверава који су plugin-и већ активни. За plugin-е који недостају, он:

1. Претражује регистар преко `recommend_plugin` за најбоље поклапање
2. Тражи од агента да потврди препоруку
3. Покреће инсталацију ако је одобрено (или ако је аутоматска инсталација омогућена у подешавањима)

Неуспеси при откривању plugin-а нису фатални — оркестратор означава погођене кораке као `skipped` и наставља са остатком плана.

### 3. Извршавање плана {#3-plan-execution}

Оркестратор позива `execute_site_plan` са ID-јем плана. Извршавање се одвија фазу по фазу, корак по корак:

- **Референце корака** (`__ref:` префикс) — кораци могу да референцирају излазе из претходних корака. У примеру изнад, `__ref:create_menu.menu_id` се разрешава у `menu_id` који је вратио корак `create_menu`.
- **Паралелни кораци** — кораци унутар исте фазе који немају међузависности шаљу се истовремено када је постављена заставица `parallel`.
- **Истек времена корака** — сваки корак има појединачан истек времена (подразумевано: подешавање `Ability Timeout`). Корак коме истекне време означава се као `failed` и план се наставља.

### 4. Праћење напретка {#4-progress-tracking}

Позовите `get_plan_progress` у било ком тренутку да проверите статус извршавања:

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

Корисници WP-CLI-ја могу да прате напредак помоћу:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Опоравак од грешака {#5-error-recovery}

Када корак не успе, оркестратор проверава да ли у плану постоји дефинисан **резервни** корак:

- **Резервни корак доступан** — резервни корак се покушава одмах. Ако успе, извршавање се наставља. Ако и он не успе, корак се означава као `failed` и извршавање се наставља следећим кораком.
- **Нема резервног корака** — корак се означава као `failed`. Некритични кораци се прескачу; критични кораци (означени са `required: true`) заустављају тренутну фазу и покрећу покушај опоравка на нивоу фазе.

Агент пријављује све неуспехе у коначном резимеу плана и може предложити ручне кораке за отклањање проблема код грешака које није могуће опоравити.

---

## Способности плана сајта {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Генерише структурисани план сајта из описа циља на природном језику.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `goal` | string | Да | Опис жељеног веб-сајта на природном језику |
| `style` | string | Не | Преференција визуелног стила: `minimal`, `bold`, `professional`, `playful`. Подразумевано: агент бира на основу циља |
| `plugins` | array | Не | Slug-ови plugin-а које треба укључити у план. Оркестратор аутоматски додаје потребне plugin-е. |
| `dry_run` | boolean | Не | Ако је `true`, враћа JSON плана без чувања или извршавања. Подразумевано `false` |

**Враћа** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Почиње извршавање претходно генерисаног плана сајта.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `plan_id` | string | Да | ID плана који треба извршити |
| `auto_install_plugins` | boolean | Не | Ако је `true`, аутоматски инсталира потребне додатке без потврде. Подразумевано је `false` |
| `max_retries` | integer | Не | Број покушаја поновног извршавања неуспелог корака пре наставка. Подразумевано је `1` |

**Враћа** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Враћа тренутни статус извршавања плана сајта.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `plan_id` | string | Да | ID плана за упит |

**Враћа** објекат напретка описан у одељку [Праћење напретка](#4-progress-tracking) изнад.

---

### `handle_plan_error` {#handleplanerror}

Ручно решава неуспели корак и наставља извршавање плана од следећег корака. Користите ово када аутоматски опоравак није био могућ и желите да интервенишете.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `plan_id` | string | Да | ID плана |
| `step_id` | string | Да | ID неуспелог корака |
| `resolution` | string | Да | Једно од `skip` (прескочи и настави), `retry` (одмах понови корак) или `mark_done` (третирај као успешно без поновног покретања) |

**Враћа** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Поређење v1 и v2 {#comparing-v1-and-v2}

| Функционалност | v1 | v2 |
|---|---|---|
| Вишефазни планови | Не | Да |
| Референце на излаз корака (`__ref:`) | Не | Да |
| Откривање додатака | Ручно | Аутоматски |
| API за праћење напретка | Не | Да |
| Опоравак од грешке | Неуспех и заустављање | Резервна опција + наставак |
| Паралелно извршавање корака | Не | Да (укључује се по фази) |
| WP-CLI команде планова | Не | Да |
| Интеграција са benchmark-ом | Не | Да (`q-restaurant-website`) |

---

## WP-CLI команде планова {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Генерише план сајта на основу описа циља.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Извршава претходно генерисан план.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Приказује тренутни напредак за план који се извршава или је завршен.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Наводи све планове сајта (на чекању, у току и завршене).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Ресетује неуспели план на `pending` како би могао поново да се изврши од почетка.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
