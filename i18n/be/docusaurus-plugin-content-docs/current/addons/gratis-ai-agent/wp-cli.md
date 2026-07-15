---
title: WP-CLI Указальнік
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Plugin gratis AI Agent прадугледжвае сям'ю каманд `wp gratis-ai-agent` для праводзіння тэставання агента, кіравання яго здольнасцямі (abilities) і азначэння яго статусу з каманднай кропкі. Усе каманды патрабуюць WP-CLI 2.0 або больш высокай версіі.

## Installation {#installation}

Каманды WP-CLI рэгіструюцца аўтаматычна, калі плагін актыўны. Праверце наступным:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Праводзіць тэставанне (benchmark) здольнасцей Агента — набор складаных, многоэтапных прамптаў, якія працуюць над усяй пакрыццём здольнасцей. Выкарыстоўвайце гэта для ацэнкі прадукцыйнасці мадэлі, параўнання AI-провайдэраў або праверкі пакетаў здольнасцей перад выкарыстаннем у прадукцыі.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Правесці тэставанне аднымі ID, а не ў цэлым наборы |
| `--provider=<provider>` | Пэўны AI-провайдэра для гэтага прагона (напрыклад, `anthropic`, `openai`) |
| `--model=<model>` | Пэўная мадэль для гэтага прагона (напрыклад, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Формат выніку: `table` (па спілкуванні), `json`, `csv` |
| `--save` | Захаваць вынікі тэставання ў базе дадзеных для гістарычнага параўнання |

### Examples {#examples}

Правесці цэлае тэставанне з бягучым провайдэрам і мадэллю:

```bash
wp gratis-ai-agent benchmark
```

Правесці адно пытанне (`q-restaurant-website`) і вывесці ў фармаце JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Правесці тэставанне супраць пэўнай мадэлі і захаваць вынікі:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

Тэставанне выказвае адзін радкі на кожнае пытанне з наступнымі камплектамі:

| Column | Description |
|---|---|
| `ID` | Ідэнтыфікатар пытання |
| `Description` | Кароткі апіс сцэнарію тэставання |
| `Score` | Паспех/непаспех або лічбавы балл (0–100) |
| `Abilities Used` | Спіс здольнасцей, выклічаных (па комагах) |
| `Tokens` | Агульная колькасць выкарыстаных токенаў |
| `Duration` | Час у секундах |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

Па спілкуванні па спілкуванні ўключаны:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Стварыць CPT Portfolio з таксономіяй Project Category і рэгіструць патэрн блоку |
| `q-restaurant-website` | Стварыць цэлае рэстарантнае сайт з CPT меню, фармам рэзервавання і навігацыяй |
| `q-dark-mode-theme` | Задніць рэжым тэмы і ўвесці каलरы брэнда |
| `q-nav-builder` | Стварыць асноўную навігацыйную меню з чатырыма пунктамі і ўвагневым спадружным меню |
| `q-options-roundtrip` | Прачытаць, адрэдагаваць і аднавіць набор опцый WordPress |
| `q-ability-install` | Выверыць і ўсталяваць найбольш падыходны пакет здольнасцей для апісанага выкарыстання |

Дадатковыя пытанні можна рэгіструваць праз фільтр `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Кіруе ўсталяваныя здольнасці і пакеты здольнасцей.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Выказвае ўсе рэгістраваныя здольнасці, іх крыніцу (асноўныя або пакет) і іх бягучы статус.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | Формат вывесту: `table` (па спілкуванні), `json`, `csv` |

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

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Замяшчае і актывуе пакет здольнасцей з рэгістры.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Слог плагіна пакета здольнасцей, напрыклад, `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Выключае пэўную здольнасць, не выдаляючы пакет. Карысна для абмежавання сферы дзейнасці агента на пэўным сайце.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Пановічна актывуе раней выключаную здольнасць.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Выказвае бягучую канфігурацыю агента і статус злучэння.

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

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Выказвае правяджныя дзеянні агента з логаў наладжвання (debug log).

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | Паказаць апошнія N запісы лога. Па спілкуванні `50` |
| `--level=<level>` | Фільтраваць па ўзроўні: `info`, `warning`, `error` |
| `--ability=<ability>` | Фільтраваць па назве здольнасці |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ануляруе стан агента: выдаляе ўвесці CSS, выдаляе рэгістраваныя CPT і таксономіі агента, ануляроўвае глобальныя стылі і паступоўвае кеш опцый агента. Не выдаляе плагін або яго налады.

```bash
wp gratis-ai-agent reset [--yes]
```

Дадайце `--yes`, каб праскочыць пацвярджэнне.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Усе каманды выходзяць з кодам `0` пры поспеху. Не нулёвыя коды выходу:

| Code | Meaning |
|---|---|
| `1` | Агульны памылка (глядзіце паведамленне пра памылку) |
| `2` | Памылка злучэння провайдэра |
| `3` | Здольнасць не знаходзіцца |
| `4` | Пытанне тэставання не знаходзіцца |
