---
title: WP-CLI референца
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI референца {#wp-cli-reference}

Gratis AI Agent испоручује породицу команди `wp gratis-ai-agent` за мерење перформанси агента, управљање способностима и упит статуса агента из командне линије. Све команде захтевају WP-CLI 2.0 или новији.

## Инсталација {#installation}

WP-CLI команде се аутоматски региструју када је plugin активан. Проверите помоћу:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Покреће пакет за мерење перформанси Agent Capabilities — скуп сложених, вишекорачних упита који користе целу површину способности. Користите ово да процените перформансе модела, упоредите AI провајдере или потврдите пакете способности пре постављања у продукцију.

### Синопсис {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Опције {#options}

| Опција | Опис |
|---|---|
| `--question=<id>` | Покрени једно питање за мерење перформанси по ID-у уместо целог пакета |
| `--provider=<provider>` | Замени конфигурисаног AI провајдера за ово покретање (нпр. `anthropic`, `openai`) |
| `--model=<model>` | Замени конфигурисани модел за ово покретање (нпр. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Формат излаза: `table` (подразумевано), `json`, `csv` |
| `--save` | Сачувај резултате мерења перформанси у базу података за историјско поређење |

### Примери {#examples}

Покрените цео пакет за мерење перформанси са тренутним провајдером и моделом:

```bash
wp gratis-ai-agent benchmark
```

Покрените једно питање (`q-restaurant-website`) и прикажите излаз као JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Покрените са одређеним моделом и сачувајте резултате:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Излаз {#output}

Мерење перформанси исписује један ред по питању са следећим колонама:

| Колона | Опис |
|---|---|
| `ID` | Идентификатор питања |
| `Description` | Кратак сажетак сценарија мерења перформанси |
| `Score` | Пролаз/пад или нумерички резултат (0–100) |
| `Abilities Used` | Листа позваних способности раздвојена зарезима |
| `Tokens` | Укупан број потрошених токена |
| `Duration` | Реално време извршавања у секундама |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Питања за мерење перформанси {#benchmark-questions}

Подразумевани пакет укључује:

| ID | Сценарио |
|---|---|
| `q-portfolio-site` | Направи Portfolio CPT са таксономијом Project Category и региструј шаблон блока |
| `q-restaurant-website` | Изгради комплетан ресторански сајт са мени CPT-ом, обрасцем за резервацију и навигацијом |
| `q-dark-mode-theme` | Примени дизајнерски пресет за тамни режим и убаци боје бренда |
| `q-nav-builder` | Направи примарни навигациони мени са четири ставке и угнежђеним падајућим менијем |
| `q-options-roundtrip` | Прочитај, измени и врати скуп WordPress опција |
| `q-ability-install` | Откриј и инсталирај најприкладнији пакет способности за описани случај употребе |

Додатна питања могу се регистровати преко филтера `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Управља инсталираним способностима и пакетима способности.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Наводи све регистроване способности, њихов извор (језгро или пакет) и њихов тренутни статус.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Опције**

| Опција | Опис |
|---|---|
| `--format=<format>` | Формат излаза: `table` (подразумевано), `json`, `csv` |

**Пример излаза**

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

Преузима и активира пакет способности из регистра.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументи**

| Аргумент | Опис |
|---|---|
| `<slug>` | Plugin slug пакета способности, нпр. `gratis-ai-agent-woocommerce` |

**Пример**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Онемогућава одређену способност без уклањања пакета. Корисно за ограничавање опсега агента на датом сајту.

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

Поново омогућава претходно онемогућену способност.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Приказује тренутну конфигурацију агента и статус повезаности.

```bash
wp gratis-ai-agent status
```

**Пример излаза**

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

Приказује недавну активност агента из дневника за отклањање грешака.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Опције**

| Опција | Опис |
|---|---|
| `--last=<n>` | Прикажи последњих N уноса у дневнику. Подразумевано `50` |
| `--level=<level>` | Филтрирај по нивоу: `info`, `warning`, `error` |
| `--ability=<ability>` | Филтрирај по називу способности |

**Пример**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ресетује стање агента: чисти уметнути CSS, уклања CPT-ове и таксономије које је агент регистровао, ресетује глобалне стилове и празни кеш опција агента. Не уклања plugin нити његова подешавања.

```bash
wp gratis-ai-agent reset [--yes]
```

Додајте `--yes` да прескочите упит за потврду.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Излазни кодови {#exit-codes}

Све команде враћају `0` при успеху. Излазни кодови различити од нуле:

| Код | Значење |
|---|---|
| `1` | Општа грешка (погледајте поруку о грешци) |
| `2` | Неуспех повезивања са провајдером |
| `3` | Способност није пронађена |
| `4` | Питање за benchmark није пронађено |
