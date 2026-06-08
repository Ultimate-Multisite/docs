---
title: Довідник WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Довідник WP-CLI

Плагін Gratis AI Agent надає команду `wp gratis-ai-agent` для тестування агента, керування його можливостями та перевірки статусу агента через командний рядок. Усі команди вимагають WP-CLI версії 2.0 або вище.

## Встановлення

Команди WP-CLI реєструються автоматично, коли плагін активний. Перевірте за допомогою:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Запускає набір тестувань можливостей агента (Agent Capabilities benchmark suite) — це комплексний набір багатоетапних запитів, які перевіряють усі можливості агента. Використовуйте це для оцінки продуктивності моделі, порівняння AI-провайдерів або валідації пакетів можливостей перед виведенням у продакшн.

### Синтаксис

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Опції

| Опція | Опис |
|---|---|
| `--question=<id>` | Запустити окреме тестове питання за ID, а не повний набір |
| `--provider=<provider>` | Перевизначити налаштованого AI-провайдера для цього запуску (наприклад, `anthropic`, `openai`) |
| `--model=<model>` | Перевизначити налаштовану модель для цього запуску (наприклад, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Формат виводу: `table` (за замовчуванням), `json`, `csv` |
| `--save` | Зберегти результати тестування в базу даних для історичного порівняння |

### Приклади

Запустити повний набір тестувань з поточним провайдером та моделлю:

```bash
wp gratis-ai-agent benchmark
```

Запустити окреме питання (`q-restaurant-website`) та вивести результат у форматі JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Запустити тестування проти конкретної моделі та зберегти результати:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Вивід

Тестування виводить один рядок на кожне питання з такими колонками:

| Колонка | Опис |
|---|---|
| `ID` | Ідентифікатор питання |
| `Description` | Короткий опис сценарію тестування |
| `Score` | Оцінка (пройдено/не пройдено або числове значення від 0 до 100) |
| `Abilities Used` | Список використаних можливостей, розділений комами |
| `Tokens` | Загальна кількість використаних токенів |
| `Duration` | Час у секундах (wall-clock time) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Питання для тестування

За замовчуванням набір включає:

| ID | Сценарій |
|---|---|
| `q-portfolio-site` | Створення CPT "Портфоліо" з таксономією "Категорія проєкту" та реєстрацією шаблону блоку |
| `q-restaurant-website` | Створення повноцінного ресторанного сайту з CPT "Меню", формою бронювання та навігацією |
| `q-dark-mode-theme` | Застосування пресету темної теми та впровадження кольорів бренду |
| `q-nav-builder` | Створення основного навігаційного меню з чотирма пунктами та вкладеним випадаючим списком |
| `q-options-roundtrip` | Зчитування, зміна та відновлення набору опцій WordPress |
| `q-ability-install` | Виявлення та встановлення найбільш відповідного пакету можливостей для описаного випадку використання |

Додаткові питання можна зареєструвати через фільтр `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Керує встановленими можливостями та пакетами можливостей.

### `wp gratis-ai-agent abilities list`

Перераховує всі зареєстровані можливості, їхнє джерело (ядро чи пакет) та поточний статус.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Опції**

| Опція | Опис |
|---|---|
| `--format=<format>` | Формат виводу: `table` (за замовчуванням), `json`, `csv` |

**Приклад виводу**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install`

Завантажує та активує пакет можливостей із реєстру.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументи**

| Аргумент | Опис |
|---|---|
| `<slug>` | Слог плагіна пакету можливостей, наприклад, `gratis-ai-agent-woocommerce` |

**Приклад**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Деактивує певну можливість без видалення пакета. Це корисно для обмеження сфери дії агента на конкретному сайті.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Приклад**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Повторно активує раніше вимкнену можливість.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Відображає поточну конфігурацію агента та статус підключення.

```bash
wp gratis-ai-agent status
```

**Приклад виводу**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs`

Відображає нещодавню активність агента з логу налагодження (debug log).

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Опції**

| Опція | Опис |
|---|---|
| `--last=<n>` | Показати останні N записів журналу. За замовчуванням `50` |
| `--level=<level>` | Фільтрація за рівнем: `info`, `warning`, `error` |
| `--ability=<ability>` | Фільтрація за назвою можливості |

**Приклад**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Скидає стан агента: очищає впроваджений CSS, видаляє CPT та таксономії, зареєстровані агентом, скидає глобальні стилі та очищає кеш опцій агента. Не видаляє плагін чи його налаштування.

```bash
wp gratis-ai-agent reset [--yes]
```

Додайте `--yes`, щоб пропустити запит підтвердження.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Коди виходу

Усі команди завершуються кодом `0` у разі успіху. Не нульові коди виходу:

| Код | Значення |
|---|---|
| `1` | Загальна помилка (див. повідомлення про помилку) |
| `2` | Збій підключення провайдера |
| `3` | Можливість не знайдена |
| `4` | Питання тестування не знайдено |
