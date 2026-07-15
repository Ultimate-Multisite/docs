---
title: WP-CLI анықтамалығы
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI анықтамалығы

Gratis AI Agent агентті бағалау, мүмкіндіктерді басқару және командалық жолдан агент күйін сұрау үшін `wp gratis-ai-agent` командалар тобымен жеткізіледі. Барлық командалар WP-CLI 2.0 немесе одан жоғары нұсқасын талап етеді.

## Орнату {#installation}

WP-CLI командалары plugin белсенді болғанда автоматты түрде тіркеледі. Мыналармен тексеріңіз:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent Capabilities benchmark жинағын іске қосады — толық мүмкіндік ауқымын тексеретін күрделі, көпқадамды prompt жиыны. Мұны model өнімділігін бағалау, AI провайдерлерін салыстыру немесе өндірістік ортаға енгізер алдында мүмкіндік пакеттерін тексеру үшін пайдаланыңыз.

### Синопсис {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Опциялар {#options}

| Option | Сипаттама |
|---|---|
| `--question=<id>` | Толық жинақтың орнына ID бойынша бір benchmark сұрағын іске қосу |
| `--provider=<provider>` | Осы іске қосу үшін бапталған AI провайдерін қайта анықтау (мысалы, `anthropic`, `openai`) |
| `--model=<model>` | Осы іске қосу үшін бапталған model-ді қайта анықтау (мысалы, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Шығыс пішімі: `table` (әдепкі), `json`, `csv` |
| `--save` | Тарихи салыстыру үшін benchmark нәтижелерін дерекқорға сақтау |

### Мысалдар {#examples}

Ағымдағы провайдер және model арқылы толық benchmark жинағын іске қосу:

```bash
wp gratis-ai-agent benchmark
```

Бір сұрақты (`q-restaurant-website`) іске қосып, JSON ретінде шығару:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Нақты model-ге қарсы іске қосып, нәтижелерді сақтау:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Шығыс {#output}

Benchmark әр сұрақ үшін келесі бағандары бар бір жол шығарады:

| Баған | Сипаттама |
|---|---|
| `ID` | Сұрақ идентификаторы |
| `Description` | Benchmark сценарийінің қысқаша түйіндемесі |
| `Score` | Өтті/өтпеді немесе сандық балл (0–100) |
| `Abilities Used` | Шақырылған мүмкіндіктердің үтірмен бөлінген тізімі |
| `Tokens` | Жұмсалған token-дердің жалпы саны |
| `Duration` | Секундпен өлшенген нақты өткен уақыт |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark сұрақтары {#benchmark-questions}

Әдепкі жинаққа мыналар кіреді:

| ID | Сценарий |
|---|---|
| `q-portfolio-site` | Project Category taxonomy бар Portfolio CPT жасау және block pattern тіркеу |
| `q-restaurant-website` | menu CPT, booking form және навигациясы бар толық мейрамхана website құру |
| `q-dark-mode-theme` | dark-mode design preset қолдану және бренд түстерін енгізу |
| `q-nav-builder` | Кірістірілген ашылмалы мәзірі бар төрт тармақты негізгі навигация мәзірін жасау |
| `q-options-roundtrip` | WordPress options жиынын оқу, өзгерту және қалпына келтіру |
| `q-ability-install` | Сипатталған қолдану жағдайына ең сәйкес мүмкіндік пакетін табу және орнату |

Қосымша сұрақтарды `gratis_ai_agent_benchmark_questions` filter арқылы тіркеуге болады.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Орнатылған мүмкіндіктер мен мүмкіндік пакеттерін басқарады.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Барлық тіркелген мүмкіндіктерді, олардың көзін (core немесе pack) және ағымдағы күйін тізімдейді.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Опциялар**

| Option | Сипаттама |
|---|---|
| `--format=<format>` | Шығыс пішімі: `table` (әдепкі), `json`, `csv` |

**Мысал шығыс**

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

Registry-ден мүмкіндік пакетін жүктеп алып, белсендіреді.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументтер**

| Argument | Сипаттама |
|---|---|
| `<slug>` | Мүмкіндік пакетінің plugin slug-ы, мысалы `gratis-ai-agent-woocommerce` |

**Мысал**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Пакетті жоймай, нақты мүмкіндікті өшіреді. Берілген site-та агенттің ауқымын шектеу үшін пайдалы.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Мысал**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Бұрын өшірілген мүмкіндікті қайта қосады.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Ағымдағы агент конфигурациясын және қосылым күйін көрсетеді.

```bash
wp gratis-ai-agent status
```

**Мысал шығыс**

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

Debug log ішіндегі соңғы агент әрекеттерін көрсетеді.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Опциялар**

| Опция | Сипаттама |
|---|---|
| `--last=<n>` | Соңғы N журнал жазбасын көрсету. Әдепкі мәні `50` |
| `--level=<level>` | Деңгей бойынша сүзу: `info`, `warning`, `error` |
| `--ability=<ability>` | Қабілет атауы бойынша сүзу |

**Мысал**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Агент күйін бастапқы қалпына келтіреді: енгізілген CSS-ті тазартады, агент тіркеген CPTs пен таксономияларды жояды, жаһандық стильдерді бастапқы қалпына келтіреді және агенттің опциялар кэшін босатады. Плагинді немесе оның параметрлерін жоймайды.

```bash
wp gratis-ai-agent reset [--yes]
```

Растау сұрауын өткізіп жіберу үшін `--yes` қосыңыз.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Шығу кодтары {#exit-codes}

Барлық пәрмендер сәтті орындалғанда `0` кодымен аяқталады. Нөлден өзгеше шығу кодтары:

| Код | Мағынасы |
|---|---|
| `1` | Жалпы қате (қате хабарын қараңыз) |
| `2` | Провайдерге қосылу сәтсіздігі |
| `3` | Қабілет табылмады |
| `4` | Бенчмарк сұрағы табылмады |
