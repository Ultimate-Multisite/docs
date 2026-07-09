---
title: WP-CLI маалымдамасы
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI маалымдамасы {#wp-cli-reference}

Gratis AI Agent командалык саптан агенттин көрсөткүчтөрүн текшерүү, жөндөмдөрдү башкаруу жана агенттин абалын суроо үчүн `wp gratis-ai-agent` буйруктар үй-бүлөсү менен келет. Бардык буйруктар WP-CLI 2.0 же андан жогоркусун талап кылат.

## Орнотуу {#installation}

WP-CLI буйруктары plugin активдүү болгондо автоматтык түрдө катталат. Төмөнкү менен текшериңиз:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent Capabilities көрсөткүчтөр топтомун иштетет — бул толук жөндөм бетин сынаган татаал, көп кадамдуу чакырыктардын жыйындысы. Муну моделдин иштешин баалоо, AI камсыздоочуларын салыштыруу же өндүрүшкө чыгаруудан мурун жөндөм топтомдорун текшерүү үчүн колдонуңуз.

### Кыскача баяндоо {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Параметрлер {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Толук топтомдун ордуна ID боюнча бир гана көрсөткүч суроосун иштетүү |
| `--provider=<provider>` | Бул иштетүү үчүн конфигурацияланган AI камсыздоочусун алмаштыруу (мис., `anthropic`, `openai`) |
| `--model=<model>` | Бул иштетүү үчүн конфигурацияланган моделди алмаштыруу (мис., `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Чыгаруу форматы: `table` (демейки), `json`, `csv` |
| `--save` | Тарыхый салыштыруу үчүн көрсөткүч натыйжаларын маалымат базасына сактоо |

### Мисалдар {#examples}

Учурдагы камсыздоочу жана модель менен толук көрсөткүч топтомун иштетиңиз:

```bash
wp gratis-ai-agent benchmark
```

Бир суроону (`q-restaurant-website`) иштетип, JSON катары чыгарыңыз:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Белгилүү бир модель менен иштетип, натыйжаларды сактаңыз:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Чыгаруу {#output}

Көрсөткүч төмөнкү тилкелер менен ар бир суроо үчүн бир сап чыгарат:

| Column | Description |
|---|---|
| `ID` | Суроонун идентификатору |
| `Description` | Көрсөткүч сценарийинин кыскача мазмуну |
| `Score` | Өттү/өтпөдү же сандык упай (0–100) |
| `Abilities Used` | Чакырылган жөндөмдөрдүн үтүр менен бөлүнгөн тизмеси |
| `Tokens` | Жалпы колдонулган токендер |
| `Duration` | Секунд менен дубал сааты боюнча убакыт |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Көрсөткүч суроолору {#benchmark-questions}

Демейки топтом төмөнкүлөрдү камтыйт:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Project Category таксономиясы менен Portfolio CPT түзүү жана блок үлгүсүн каттоо |
| `q-restaurant-website` | Меню CPT, брондоо формасы жана навигациясы бар толук ресторан веб-сайтын куруу |
| `q-dark-mode-theme` | Караңгы режим дизайнынын алдын ала жөндөөсүн колдонуу жана бренд түстөрүн киргизүү |
| `q-nav-builder` | Ички ачылма менюсу бар төрт пункттан турган негизги навигация менюсун түзүү |
| `q-options-roundtrip` | WordPress параметрлеринин жыйындысын окуу, өзгөртүү жана калыбына келтирүү |
| `q-ability-install` | Сүрөттөлгөн колдонуу учуру үчүн эң ылайыктуу жөндөм топтомун табуу жана орнотуу |

Кошумча суроолорду `gratis_ai_agent_benchmark_questions` filter аркылуу каттоого болот.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Орнотулган жөндөмдөрдү жана жөндөм топтомдорун башкарат.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Бардык катталган жөндөмдөрдү, алардын булагын (өзөк же топтом) жана учурдагы абалын тизмелейт.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Параметрлер**

| Option | Description |
|---|---|
| `--format=<format>` | Чыгаруу форматы: `table` (демейки), `json`, `csv` |

**Мисал чыгаруу**

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

Реестрден жөндөм топтомун жүктөп алып, активдештирет.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументтер**

| Argument | Description |
|---|---|
| `<slug>` | Жөндөм топтомунун plugin slug мааниси, мис., `gratis-ai-agent-woocommerce` |

**Мисал**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Топтомду алып салбастан белгилүү бир жөндөмдү өчүрөт. Берилген сайтта агенттин чөйрөсүн чектөө үчүн пайдалуу.

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

Мурда өчүрүлгөн жөндөмдү кайра иштетет.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Учурдагы агент конфигурациясын жана туташуу абалын көрсөтөт.

```bash
wp gratis-ai-agent status
```

**Мисал чыгаруу**

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

Debug журналынан акыркы агент активдүүлүгүн көрсөтөт.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Параметрлер**

| Параметр | Сүрөттөмө |
|---|---|
| `--last=<n>` | Акыркы N журнал жазуусун көрсөтүү. Демейкиси `50` |
| `--level=<level>` | Деңгээли боюнча чыпкалоо: `info`, `warning`, `error` |
| `--ability=<ability>` | Жөндөм аталышы боюнча чыпкалоо |

**Мисал**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Агенттин абалын баштапкы абалга келтирет: киргизилген CSSти тазалайт, агент каттаган CPTлерди жана таксономияларды алып салат, глобалдык стилдерди баштапкы абалга келтирет жана агенттин параметрлер кэшин бошотот. Плагинди же анын жөндөөлөрүн алып салбайт.

```bash
wp gratis-ai-agent reset [--yes]
```

Ырастоо чакырыгын өткөрүп жиберүү үчүн `--yes` кошуңуз.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Чыгуу коддору {#exit-codes}

Бардык буйруктар ийгиликтүү болгондо `0` менен чыгат. Нөл эмес чыгуу коддору:

| Код | Мааниси |
|---|---|
| `1` | Жалпы ката (ката билдирүүсүн караңыз) |
| `2` | Провайдерге туташуу мүчүлүштүгү |
| `3` | Жөндөм табылган жок |
| `4` | Бенчмарк суроосу табылган жок |
