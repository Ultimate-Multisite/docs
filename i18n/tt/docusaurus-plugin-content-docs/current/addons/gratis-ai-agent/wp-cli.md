---
title: WP-CLI белешмәсе
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI белешмәсе

Gratis AI Agent агентны бәяләү, мөмкинлекләр белән идарә итү һәм боерык юлыннан агент халәтен сорау өчен `wp gratis-ai-agent` боерыклар гаиләсен үз эченә ала. Барлык боерыклар WP-CLI 2.0 яки югарырак версиясен таләп итә.

## Урнаштыру {#installation}

WP-CLI боерыклары plugin актив булганда автоматик рәвештә теркәлә. Тикшерү өчен:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent Capabilities бәяләү җыелмасын эшләтә — тулы мөмкинлек өслеген сынаучы катлаулы, күп адымлы сораулар җыелмасы. Моны модель җитештерүчәнлеген бәяләү, AI тәэмин итүчеләрен чагыштыру яки production мохитенә чыгару алдыннан мөмкинлек җыелмаларын тикшерү өчен кулланыгыз.

### Синопсис {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Көйләнмәләр {#options}

| Көйләнмә | Тасвирлама |
|---|---|
| `--question=<id>` | Тулы җыелма урынына ID буенча бер генә бәяләү соравын эшләтү |
| `--provider=<provider>` | Бу эшләтү өчен көйләнгән AI тәэмин итүчесен алыштыру (мәс., `anthropic`, `openai`) |
| `--model=<model>` | Бу эшләтү өчен көйләнгән модельне алыштыру (мәс., `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Чыгару форматы: `table` (килешү буенча), `json`, `csv` |
| `--save` | Тарихи чагыштыру өчен бәяләү нәтиҗәләрен мәгълүмат базасына саклау |

### Мисаллар {#examples}

Хәзерге тәэмин итүче һәм модель белән тулы бәяләү җыелмасын эшләтү:

```bash
wp gratis-ai-agent benchmark
```

Бер сорауны (`q-restaurant-website`) эшләтү һәм JSON итеп чыгару:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Аерым модельгә каршы эшләтү һәм нәтиҗәләрне саклау:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Чыгыш {#output}

Бәяләү һәр сорау өчен түбәндәге баганалар белән бер юл чыгара:

| Багана | Тасвирлама |
|---|---|
| `ID` | Сорау идентификаторы |
| `Description` | Бәяләү сценарие турында кыскача йомгак |
| `Score` | Үтте/үтмәде яки санлы бәя (0–100) |
| `Abilities Used` | Чакырылган мөмкинлекләрнең өтер белән аерылган исемлеге |
| `Tokens` | Кулланылган токеннарның гомуми саны |
| `Duration` | Секундларда реаль вакыт дәвамлылыгы |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Бәяләү сораулары {#benchmark-questions}

Килешү буенча җыелма түбәндәгеләрне үз эченә ала:

| ID | Сценарий |
|---|---|
| `q-portfolio-site` | Project Category таксономиясе белән Portfolio CPT булдыру һәм блок үрнәген теркәү |
| `q-restaurant-website` | Меню CPT, броньлау формасы һәм навигация белән тулы ресторан сайты төзү |
| `q-dark-mode-theme` | Караңгы режим дизайн пресетын куллану һәм бренд төсләрен кертү |
| `q-nav-builder` | Эчке ачылма менюсы булган дүрт пунктлы төп навигация менюсы булдыру |
| `q-options-roundtrip` | WordPress көйләнмәләре җыелмасын уку, үзгәртү һәм торгызу |
| `q-ability-install` | Тасвирланган куллану очрагы өчен иң туры килгән мөмкинлек җыелмасын табу һәм урнаштыру |

Өстәмә сораулар `gratis_ai_agent_benchmark_questions` фильтры аша теркәлә ала.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Урнаштырылган мөмкинлекләр һәм мөмкинлек җыелмалары белән идарә итә.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Барлык теркәлгән мөмкинлекләрне, аларның чыганагын (төп яки җыелма) һәм хәзерге халәтен күрсәтә.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Көйләнмәләр**

| Көйләнмә | Тасвирлама |
|---|---|
| `--format=<format>` | Чыгару форматы: `table` (килешү буенча), `json`, `csv` |

**Чыгыш мисалы**

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

Реестрдан мөмкинлек җыелмасын йөкләп ала һәм активлаштыра.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументлар**

| Аргумент | Тасвирлама |
|---|---|
| `<slug>` | Мөмкинлек җыелмасының plugin slug-ы, мәс., `gratis-ai-agent-woocommerce` |

**Мисал**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Җыелманы бетермичә, аерым мөмкинлекне сүндерә. Бирелгән сайтта агентның эш даирәсен чикләү өчен файдалы.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Мисал**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Элегрәк сүндерелгән мөмкинлекне яңадан кабыза.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Хәзерге агент конфигурациясен һәм тоташу халәтен күрсәтә.

```bash
wp gratis-ai-agent status
```

**Чыгыш мисалы**

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

Debug журналыннан соңгы агент эшчәнлеген күрсәтә.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Көйләнмәләр**

| Вариант | Тасвирлама |
|---|---|
| `--last=<n>` | Соңгы N журнал язмасын күрсәтү. Килешенгәнчә `50` |
| `--level=<level>` | Дәрәҗә буенча сөзү: `info`, `warning`, `error` |
| `--ability=<ability>` | Ability исеме буенча сөзү |

**Мисал**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Agent халәтен яңадан урнаштыра: кертелгән CSSны чистарта, agent теркәгән CPTларны һәм таксономияләрне бетерә, глобаль стильләрне яңадан урнаштыра һәм agent параметрлары кэшын бушата. Плагинны яки аның көйләнмәләрен бетерми.

```bash
wp gratis-ai-agent reset [--yes]
```

Раслау соравын үткәреп җибәрү өчен `--yes` өстәгез.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Чыгу кодлары {#exit-codes}

Барлык командалар уңышлы тәмамланганда `0` белән чыга. Нульдән аерылган чыгу кодлары:

| Код | Мәгънә |
|---|---|
| `1` | Гомуми хата (хата хәбәрен карагыз) |
| `2` | Provider тоташу уңышсызлыгы |
| `3` | Ability табылмады |
| `4` | Benchmark соравы табылмады |
