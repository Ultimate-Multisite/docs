---
title: Маълумотномаи WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Маълумотномаи WP-CLI {#wp-cli-reference}

Gratis AI Agent оилаи фармонҳои `wp gratis-ai-agent`-ро барои санҷиши меъёрии агент, идоракунии қобилиятҳо ва дархости ҳолати агент аз сатри фармон пешниҳод мекунад. Ҳамаи фармонҳо WP-CLI 2.0 ё болотарро талаб мекунанд.

## Насб {#installation}

Фармонҳои WP-CLI ҳангоми фаъол будани plugin ба таври худкор сабт мешаванд. Бо ин санҷед:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Маҷмӯаи санҷишҳои меъёрии Қобилиятҳои Агентро иҷро мекунад — маҷмӯае аз дархостҳои мураккаб ва чандқадамӣ, ки тамоми сатҳи қобилиятҳоро месанҷанд. Инро барои арзёбии иҷрои модел, муқоисаи таъминкунандагони AI ё тасдиқи бастаҳои қобилият пеш аз ҷойгиркунӣ ба муҳити истеҳсолӣ истифода баред.

### Тарзи истифода {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Опсияҳо {#options}

| Опсия | Тавсиф |
|---|---|
| `--question=<id>` | Ба ҷойи маҷмӯаи пурра як саволи ягонаи санҷиши меъёриро аз рӯйи ID иҷро мекунад |
| `--provider=<provider>` | Таъминкунандаи танзимшудаи AI-ро барои ин иҷро иваз мекунад (масалан, `anthropic`, `openai`) |
| `--model=<model>` | Модели танзимшударо барои ин иҷро иваз мекунад (масалан, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Формати натиҷа: `table` (пешфарз), `json`, `csv` |
| `--save` | Натиҷаҳои санҷиши меъёриро барои муқоисаи таърихӣ ба пойгоҳи додаҳо захира мекунад |

### Намунаҳо {#examples}

Маҷмӯаи пурраи санҷиши меъёриро бо таъминкунанда ва модели ҷорӣ иҷро кунед:

```bash
wp gratis-ai-agent benchmark
```

Як саволи ягона (`q-restaurant-website`)-ро иҷро кунед ва ҳамчун JSON натиҷа диҳед:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Бар зидди модели мушаххас иҷро кунед ва натиҷаҳоро захира кунед:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Натиҷа {#output}

Санҷиши меъёрӣ барои ҳар савол як сатр бо сутунҳои зерин мебарорад:

| Сутун | Тавсиф |
|---|---|
| `ID` | Муайянкунандаи савол |
| `Description` | Хулосаи кӯтоҳи сенарияи санҷиши меъёрӣ |
| `Score` | Натиҷаи гузашт/нагузашт ё холҳои ададӣ (0–100) |
| `Abilities Used` | Рӯйхати қобилиятҳои даъватшуда, бо вергул ҷудошуда |
| `Tokens` | Шумораи умумии токенҳои истифодашуда |
| `Duration` | Вақти воқеии гузашта бо сонияҳо |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Саволҳои санҷиши меъёрӣ {#benchmark-questions}

Маҷмӯаи пешфарз инҳоро дар бар мегирад:

| ID | Сенария |
|---|---|
| `q-portfolio-site` | Эҷоди як Portfolio CPT бо таксономияи Project Category ва сабти як намунаи блок |
| `q-restaurant-website` | Сохтани як вебсайти пурраи тарабхона бо menu CPT, варақаи фармоиш ва паймоиш |
| `q-dark-mode-theme` | Татбиқи пресети тарҳи ҳолати торик ва ворид кардани рангҳои бренд |
| `q-nav-builder` | Эҷоди менюи паймоиши асосии чорҷузъа бо dropdown-и дохилӣ |
| `q-options-roundtrip` | Хондан, тағйир додан ва барқарор кардани маҷмӯаи опсияҳои WordPress |
| `q-ability-install` | Ёфтан ва насб кардани бастаи мувофиқтарини қобилият барои ҳолати истифодаи тавсифшуда |

Саволҳои иловагиро метавон тавассути филтри `gratis_ai_agent_benchmark_questions` сабт кард.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Қобилиятҳо ва бастаҳои қобилияти насбшударо идора мекунад.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Ҳамаи қобилиятҳои сабтшуда, манбаи онҳо (аслӣ ё баста) ва ҳолати ҷории онҳоро рӯйхат мекунад.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Опсияҳо**

| Опсия | Тавсиф |
|---|---|
| `--format=<format>` | Формати натиҷа: `table` (пешфарз), `json`, `csv` |

**Намунаи натиҷа**

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

Як бастаи қобилиятро аз реестр боргирӣ ва фаъол мекунад.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументҳо**

| Аргумент | Тавсиф |
|---|---|
| `<slug>` | Слаги plugin-и бастаи қобилият, масалан `gratis-ai-agent-woocommerce` |

**Намуна**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Як қобилияти мушаххасро бе хориҷ кардани баста ғайрифаъол мекунад. Барои маҳдуд кардани доираи кори агент дар site-и муайян муфид аст.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Намуна**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Қобилияти қаблан ғайрифаъолшударо дубора фаъол мекунад.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Танзимоти ҷории агент ва ҳолати пайвастшавиро нишон медиҳад.

```bash
wp gratis-ai-agent status
```

**Намунаи натиҷа**

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

Фаъолияти охирини агентро аз debug log нишон медиҳад.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Опсияҳо**

| Имконот | Тавсиф |
|---|---|
| `--last=<n>` | N сабти охирини логро нишон медиҳад. Пешфарз `50` |
| `--level=<level>` | Аз рӯи сатҳ филтр мекунад: `info`, `warning`, `error` |
| `--ability=<ability>` | Аз рӯи номи қобилият филтр мекунад |

**Мисол**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ҳолати агентро аз нав танзим мекунад: CSS-и воридшударо пок мекунад, CPT-ҳо ва таксономияҳои аз ҷониби агент сабтшударо нест мекунад, услубҳои глобалиро аз нав танзим мекунад ва кеши имконоти агентро холӣ мекунад. plugin ё танзимоти онро нест намекунад.

```bash
wp gratis-ai-agent reset [--yes]
```

Барои гузаштан аз дархости тасдиқ `--yes`-ро илова кунед.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Рамзҳои баромад {#exit-codes}

Ҳамаи фармонҳо ҳангоми муваффақият бо `0` анҷом меёбанд. Рамзҳои баромади ғайрисифрӣ:

| Рамз | Маъно |
|---|---|
| `1` | Хатои умумӣ (паёми хаторо бинед) |
| `2` | Нокомии пайвастшавӣ ба провайдер |
| `3` | Қобилият ёфт нашуд |
| `4` | Саволи санҷиши самаранокӣ ёфт нашуд |
