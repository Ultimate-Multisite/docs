---
title: Референца за WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI референца

Gratis AI Agent испорачува фамилија команди `wp gratis-ai-agent` за бенчмаркирање на агентот, управување со способности и проверување на статусот на агентот од командната линија. Сите команди бараат WP-CLI 2.0 или понова верзија.

## Инсталација {#installation}

WP-CLI командите се регистрираат автоматски кога plugin е активен. Проверете со:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Го извршува бенчмарк-пакетот Agent Capabilities — збир од сложени, повеќечекорни промптови што ја тестираат целата површина на способности. Користете го ова за да ги оцените перформансите на моделот, да споредите AI провајдери или да валидирате пакети со способности пред распоредување во продукција.

### Синопсис {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Опции {#options}

| Опција | Опис |
|---|---|
| `--question=<id>` | Изврши едно бенчмарк-прашање според ID наместо целиот пакет |
| `--provider=<provider>` | Замени го конфигурираниот AI провајдер за ова извршување (на пр. `anthropic`, `openai`) |
| `--model=<model>` | Замени го конфигурираниот модел за ова извршување (на пр. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Формат на излез: `table` (стандардно), `json`, `csv` |
| `--save` | Зачувај ги резултатите од бенчмаркот во базата на податоци за историска споредба |

### Примери {#examples}

Извршете го целиот бенчмарк-пакет со тековниот провајдер и модел:

```bash
wp gratis-ai-agent benchmark
```

Извршете едно прашање (`q-restaurant-website`) и излез како JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Извршете врз конкретен модел и зачувајте ги резултатите:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Излез {#output}

Бенчмаркот дава по еден ред за секое прашање со следниве колони:

| Колона | Опис |
|---|---|
| `ID` | Идентификатор на прашањето |
| `Description` | Кратко резиме на бенчмарк-сценариото |
| `Score` | Поминато/непоминато или нумерички резултат (0–100) |
| `Abilities Used` | Листа од повикани способности, одделени со запирки |
| `Tokens` | Вкупно потрошени токени |
| `Duration` | Реално изминато време во секунди |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Бенчмарк-прашања {#benchmark-questions}

Стандардниот пакет вклучува:

| ID | Сценарио |
|---|---|
| `q-portfolio-site` | Создај Portfolio CPT со таксономија Project Category и регистрирај блок-шаблон |
| `q-restaurant-website` | Изгради целосна веб-локација за ресторан со мени CPT, формулар за резервации и навигација |
| `q-dark-mode-theme` | Примени дизајнерски пресет за темен режим и вметни бренд-бои |
| `q-nav-builder` | Создај примарно навигациско мени со четири ставки и вгнездено паѓачко мени |
| `q-options-roundtrip` | Прочитај, измени и врати збир од WordPress опции |
| `q-ability-install` | Откриј и инсталирај најсоодветен пакет со способности за опишан случај на употреба |

Дополнителни прашања може да се регистрираат преку филтерот `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Управува со инсталирани способности и пакети со способности.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Ги прикажува сите регистрирани способности, нивниот извор (јадро или пакет) и нивниот тековен статус.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Опции**

| Опција | Опис |
|---|---|
| `--format=<format>` | Формат на излез: `table` (стандардно), `json`, `csv` |

**Примерен излез**

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

Презема и активира пакет со способности од регистарот.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументи**

| Аргумент | Опис |
|---|---|
| `<slug>` | Plugin slug на пакетот со способности, на пр. `gratis-ai-agent-woocommerce` |

**Пример**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Оневозможува конкретна способност без отстранување на пакетот. Корисно за ограничување на опсегот на агентот на дадена веб-локација.

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

Повторно овозможува претходно оневозможена способност.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Ја прикажува тековната конфигурација на агентот и статусот на поврзаност.

```bash
wp gratis-ai-agent status
```

**Примерен излез**

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

Прикажува неодамнешна активност на агентот од дневникот за дебагирање.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Опции**

| Опција | Опис |
|---|---|
| `--last=<n>` | Прикажи ги последните N записи во дневникот. Стандардно `50` |
| `--level=<level>` | Филтрирај по ниво: `info`, `warning`, `error` |
| `--ability=<ability>` | Филтрирај по име на способност |

**Пример**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ја ресетира состојбата на агентот: го чисти вметнатиот CSS, ги отстранува CPTs и таксономиите регистрирани од агентот, ги ресетира глобалните стилови и го празни кешот со опции на агентот. Не го отстранува приклучокот или неговите поставки.

```bash
wp gratis-ai-agent reset [--yes]
```

Додајте `--yes` за да го прескокнете барањето за потврда.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Излезни кодови {#exit-codes}

Сите команди завршуваат со `0` при успех. Ненулти излезни кодови:

| Код | Значење |
|---|---|
| `1` | Општа грешка (видете ја пораката за грешка) |
| `2` | Неуспешно поврзување со провајдерот |
| `3` | Способноста не е пронајдена |
| `4` | Прашањето за benchmark не е пронајдено |
