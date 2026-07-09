---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (впроваджено в Gratis AI Agent v1.4.0) — це двигун, який забезпечує багатоетапне створення вебсайтів. Коли ви просите агента «створити сайт ресторану» або «створити портфоліо з блогом», оркестратор розбиває цю високорівневу мету на структурований **план**, визначає необхідні плагіни для його виконання, виконує кожен етап послідовно, відстежує прогрес та автономно відновлюється після помилок.

---

## Як це працює {#how-it-works}

### 1. Генерація плану {#1-plan-generation}

Коли агент отримує інструкцію зі створення сайту, він викликає можливість `create_site_plan` для створення JSON **плану сайту**. План описує:

- **Мета** — що має робити готовий сайт
- **Фази** — упорядковані групи кроків (наприклад, _Налаштування_, _Типи контенту_, _Дизайн_, _Контент_)
- **Кроки** — окремі виклики можливостей у межах кожної фази
- **Вимоги до плагінів** — плагіни, які мають бути активними для виконання певних кроків
- **Резервні варіанти** — альтернативні кроки, якщо основний крок не вдається

**Приклад плану (скорочено)**

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

### 2. Виявлення плагінів {#2-plugin-discovery}

Перш ніж розпочати виконання, оркестратор сканує `plugin_requirements` плану та перевіряє, які плагіни вже активні. Для відсутніх плагінів він:

1. Шукає в реєстрі за допомогою `recommend_plugin` найкраще відповідне рішення
2. Просить агента підтвердити рекомендацію
3. Ініціює встановлення, якщо це схвалено (або якщо автоматичне встановлення увімкнено в налаштуваннях)

Збої при виявленні плагінів не є критичними — оркестратор позначає зачеплені кроки як `skipped` (пропущено) та продовжує роботу з решти плану.

### 3. Виконання плану {#3-plan-execution}

Оркестратор викликає `execute_site_plan` із зазначенням ID плану. Виконання відбувається фаза за фазою, крок за кроком:

- **Посилання на кроки** (`__ref:` префікс) — кроки можуть посилатися на результати попередніх кроків. У вищезазначеному прикладі `__ref:create_menu.menu_id` розв'язується до `menu_id`, поверненого кроком `create_menu`.
- **Паралельні кроки** — кроки в межах однієї фази, які не залежать один від одного, виконуються одночасно, коли встановлено прапорець `parallel`.
- **Таймаут кроку** — кожен крок має індивідуальний тайм-аут (за замовчуванням: налаштування `Ability Timeout`). Крок, що перевищив час, позначається як `failed` (невдало) і план продовжує роботу.

### 4. Відстеження прогресу {#4-progress-tracking}

Викличте `get_plan_progress` у будь-який час, щоб перевірити статус виконання:

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

Користувачі WP-CLI можуть відстежувати прогрес за допомогою:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Відновлення після помилок {#5-error-recovery}

Якщо крок не вдається, оркестратор перевіряє наявність **резервного варіанту** (fallback), визначеного в плані:

- **Резервний варіант доступний** — спробується резервний крок. Якщо він успішний, виконання продовжується. Якщо він також не вдається, крок позначається як `failed`, і виконання продовжується наступним кроком.
- **Резервного варіанту немає** — крок позначається як `failed`. Некритичні кроки пропускаються; критичні кроки (позначені `required: true`) зупиняють поточну фазу та ініціюють спробу відновлення на рівні фази.

Агент звітує про всі збої у фінальному резюме плану та може запропонувати кроки ручного виправлення для невідновлюваних помилок.

---

## Можливості плану сайту (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Генерує структурований план сайту на основі опису мети природною мовою.

**Параметри**

| Параметр | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Опис бажаного вебсайту природною мовою |
| `style` | string | No | Візуальна стилістика: `minimal`, `bold`, `professional`, `playful`. За замовчуванням: агент обирає на основі мети |
| `plugins` | array | No | Slug плагінів, які потрібно включити до плану. Оркестратор автоматично додає необхідні плагіни. |
| `dry_run` | boolean | No | Якщо `true`, повертає JSON плану без збереження чи виконання. За замовчуванням `false` |

**Повертає** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Починає виконання попередньо згенерованого плану сайту.

**Параметри**

| Параметр | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID плану для виконання |
| `auto_install_plugins` | boolean | No | Якщо `true`, автоматично встановлює необхідні плагіни без підтвердження. За замовчуванням `false` |
| `max_retries` | integer | No | Кількість спроб повторити не вдалий крок перед переходом до наступного. За замовчуванням `1` |

**Повертає** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Повертає поточний статус виконання плану сайту.

**Параметри**

| Параметр | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID плану для запиту |

**Повертає** об'єкт прогресу, описаний у [Відстеження прогресу](#4-progress-tracking) вище.

---

### `handle_plan_error` {#handleplanerror}

Вручну вирішує проблему не вдалого кроку та відновлює виконання плану з наступного кроку. Використовуйте це, коли автоматичне відновлення було неможливим, і ви хочете втрутитися.

**Параметри**

| Параметр | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID плану |
| `step_id` | string | Yes | ID не вдалого кроку |
| `resolution` | string | Yes | Один із варіантів: `skip` (пропустити та продовжити), `retry` (повторити крок негайно) або `mark_done` (розцінити як успішне без повторного виконання) |

**Повертає** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Порівняння v1 та v2 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Багатофазні плани | No | Yes |
| Посилання на вихідні дані кроків (`__ref:`) | No | Yes |
| Виявлення плагінів | Manual | Automatic |
| API відстеження прогресу | No | Yes |
| Відновлення після помилок | Fail-and-stop | Fallback + continue |
| Паралельне виконання кроків | No | Yes (opt-in per phase) |
| Команди плану WP-CLI | No | Yes |
| Інтеграція бенчмарків | No | Yes (`q-restaurant-website`) |

---

## Команди плану WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Генерує план сайту на основі опису мети.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Виконує попередньо згенерований план.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Показує поточний прогрес для виконуючого або завершеного плану.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Перераховує всі плани сайтів (очікувані, у процесі та завершені).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Скидає не вдалий план до стану `pending`, щоб його можна було повторно виконати з самого початку.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
