---
title: Справочник WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Справка по WP-CLI {#wp-cli-reference}

Плагин Gratis AI Agent предоставляет семейство команд `wp gratis-ai-agent` для тестирования агента, управления его возможностями (abilities) и проверки статуса агента из командной строки. Все команды требуют WP-CLI версии 2.0 или выше.

## Установка {#installation}

Команды WP-CLI регистрируются автоматически при активации плагина. Проверить это можно с помощью команды:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Запускает набор тестов (benchmark suite) возможностей агента — комплексный набор многоступенчатых запросов, которые проверяют весь спектр возможностей. Используйте эту команду для оценки производительности модели, сравнения AI-провайдеров или проверки пакетов возможностей перед развертыванием в продакшене.

### Синтаксис {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Опции {#options}

| Опция | Описание |
|---|---|
| `--question=<id>` | Запустить один тестовый вопрос по ID вместо всего набора тестов |
| `--provider=<provider>` | Переопределить настроенного AI-провайдера для этого запуска (например, `anthropic`, `openai`) |
| `--model=<model>` | Переопределить настроенную модель для этого запуска (например, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Формат вывода: `table` (по умолчанию), `json`, `csv` |
| `--save` | Сохранить результаты тестирования в базу данных для исторического сравнения |

### Примеры {#examples}

Запустить полный набор тестов с текущим провайдером и моделью:

```bash
wp gratis-ai-agent benchmark
```

Запустить один вопрос (`q-restaurant-website`) и вывести результат в формате JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Запустить тест с конкретной моделью и сохранить результаты:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Вывод {#output}

Тестирование выводит одну строку на каждый вопрос со следующими столбцами:

| Столбец | Описание |
|---|---|
| `ID` | Идентификатор вопроса |
| `Description` | Краткое описание сценария тестирования |
| `Score` | Оценка (пройдено/не пройдено или числовой балл от 0 до 100) |
| `Abilities Used` | Список использованных возможностей через запятую |
| `Tokens` | Общее количество потребленных токенов |
| `Duration` | Время в секундах (по часам) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Вопросы для тестирования {#benchmark-questions}

По умолчанию набор тестов включает:

| ID | Сценарий |
|---|---|
| `q-portfolio-site` | Создание CPT «Портфолио» с таксономией «Категория проекта» и регистрация шаблона блока |
| `q-restaurant-website` | Создание полноценного сайта ресторана с CPT «Меню», формой бронирования и навигацией |
| `q-dark-mode-theme` | Применение пресета темной темы и внедрение фирменных цветов |
| `q-nav-builder` | Создание основного меню из четырех пунктов с вложенным выпадающим списком |
| `q-options-roundtrip` | Чтение, изменение и восстановление набора опций WordPress |
| `q-ability-install` | Обнаружение и установка наиболее подходящего пакета возможностей для описанного сценария использования |

Дополнительные вопросы можно зарегистрировать через фильтр `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Управляет установленными возможностями и пакетами возможностей.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Выводит список всех зарегистрированных возможностей, их источник (ядро или пакет) и текущий статус.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Опции**

| Опция | Описание |
|---|---|
| `--format=<format>` | Формат вывода: `table` (по умолчанию), `json`, `csv` |

**Пример вывода**

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

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Загружает и активирует пакет возможностей из реестра.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументы**

| Аргумент | Описание |
|---|---|
| `<slug>` | Слаговое имя плагина пакета возможностей, например, `gratis-ai-agent-woocommerce` |

**Пример**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Отключает конкретную возможность, не удаляя при этом весь пакет. Это полезно, если нужно ограничить область действия агента на конкретном сайте.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Пример**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Повторно включает ранее отключенную возможность.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Отображает текущую конфигурацию агента и статус подключения.

```bash
wp gratis-ai-agent status
```

**Пример вывода**

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

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Отображает недавнюю активность агента из лога отладки.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Опции**

| Опция | Описание |
|---|---|
| `--last=<n>` | Показать последние N записей лога. По умолчанию `50` |
| `--level=<level>` | Фильтрация по уровню: `info`, `warning`, `error` |
| `--ability=<ability>` | Фильтрация по названию возможности |

**Пример**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Сбрасывает состояние агента: очищает внедренный CSS, удаляет CPT и таксономии, зарегистрированные агентом, сбрасывает глобальные стили и очищает кэш опций агента. Не удаляет плагин или его настройки.

```bash
wp gratis-ai-agent reset [--yes]
```

Добавьте `--yes`, чтобы пропустить запрос подтверждения.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Коды выхода {#exit-codes}

Все команды завершаются кодом `0` в случае успеха. Не нулевые коды выхода:

| Код | Значение |
|---|---|
| `1` | Общая ошибка (см. сообщение об ошибке) |
| `2` | Сбой подключения провайдера |
| `3` | Возможность не найдена |
| `4` | Вопрос для тестирования не найден |
