---
title: Справочник на WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Плагинът Gratis AI Agent предоставя семейство команди `wp gratis-ai-agent` за бенчмаркинг на агента, управление на способностите (abilities) и проверка на статуса на агента от командния ред. Всички команди изискват WP-CLI версия 2.0 или по-висока.

## Installation

Командите WP-CLI се регистрират автоматично, когато плагинът е активен. Проверете с:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Изпълнява тестовия набор (benchmark suite) за способностите на Агента — набор от сложни, многостъпкови заявки, които тестват пълния спектър от възможности. Използвайте го, за да оцените производителността на модела, да сравните AI доставчици или да валидирате пакети от способности, преди да разгърлите в продукция.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options

| Option | Description |
|---|---|
| `--question=<id>` | Изпълнява една бенчмарк заявка по ID, вместо пълния набор |
| `--provider=<provider>` | Презаписва конфигурирания AI доставчик за този прогон (напр. `anthropic`, `openai`) |
| `--model=<model>` | Презаписва конфигурирания модел за този прогон (напр. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Формат на изхода: `table` (по подразбиране), `json`, `csv` |
| `--save` | Запазва резултатите от бенчмаркинга в базата данни за историческо сравнение |

### Examples

Изпълнете пълния бенчмарк набор с текущия доставчик и модел:

```bash
wp gratis-ai-agent benchmark
```

Изпълнете една заявка (`q-restaurant-website`) и изведете резултата като JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Изпълнете срещу специфичен модел и запазете резултатите:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output

Бенчмаркът извежда един ред на всяка заявка с следните колони:

| Column | Description |
|---|---|
| `ID` | Идентификатор на заявката |
| `Description` | Кратко резюме на бенчмарк сценария |
| `Score` | Проминаване/непроминаване или числов резултат (0–100) |
| `Abilities Used` | Запетая сграмен списък от използвани способности |
| `Tokens` | Общ брой токени |
| `Duration` | Време в реално време в секунди |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions

По подразбиране, наборът включва:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Създаване на CPT за портфолио с таксономия за категории проекти и регистриране на блок шаблон |
| `q-restaurant-website` | Изграждане на пълно ресторантско място с CPT за меню, форма за резервации и навигация |
| `q-dark-mode-theme` | Прилагане на предварително зададен темен режим и внедряване на фирмени цветове |
| `q-nav-builder` | Създаване на основно навигационно меню от четири елемента с вложен падащ списък |
| `q-options-roundtrip` | Четене, модифициране и възстановяване на набор от WordPress опции |
| `q-ability-install` | Откриване и инсталиране на най-подходящия пакет от способности за описан случай на употреба |

Допълнителни заявки могат да бъдат регистрирани чрез филтъра `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Управлява инсталираните способности и пакети от способности.

### `wp gratis-ai-agent abilities list`

Изписва всички регистрирани способности, техния източник (core или pack) и текущия им статус.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Формат на изхода: `table` (по подразбиране), `json`, `csv` |

**Example output**

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

Изтегля и активира пакет от способности от регистъра.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Слог на плагина на пакета от способности, напр. `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Деактивира специфична способност, без да изтрива пакета. Полезно за ограничаване на обхвата на агента в даден сайт.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Включва отново преди деактивирана способност.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Изказва текущата конфигурация на агента и статуса на свързаността.

```bash
wp gratis-ai-agent status
```

**Example output**

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

Изказва последните активности на агента от дебъг лога.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Показва последните N записа в лога. По подразбиране `50` |
| `--level=<level>` | Филтрира по ниво: `info`, `warning`, `error` |
| `--ability=<ability>` | Филтрира по име на способността |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Нулира състоянието на агента: изчиства внедрения CSS, премахва CPT и таксономии, регистрирани от агента, презаписва глобалните стилове и изпразва кеша на опциите на агента. Не изтрива плагина или неговите настройки.

```bash
wp gratis-ai-agent reset [--yes]
```

Добавете `--yes`, за да пропуснете потвърждението.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

Всички команди излизат с код `0` при успех. Ненулевите кодове за излизане:

| Code | Meaning |
|---|---|
| `1` | Обща грешка (виж съобщението за грешка) |
| `2` | Грешка при свързаността с доставчика |
| `3` | Не е намерена способност |
| `4` | Не е зададена бенчмарк заявка |
