---
title: WP-CLI حوالو
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI حوالو

Gratis AI Agent، ايجنٽ جي بينچ مارڪنگ، صلاحيتن جي انتظام، ۽ حڪم واري لائين مان ايجنٽ جي حالت پڇڻ لاءِ `wp gratis-ai-agent` حڪمن جو خاندان مهيا ڪري ٿو. سڀني حڪمن لاءِ WP-CLI 2.0 يا وڌيڪ گهربل آهي.

## انسٽاليشن {#installation}

WP-CLI حڪم پاڻمرادو رجسٽر ٿين ٿا جڏهن plugin فعال هجي. هن سان تصديق ڪريو:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent Capabilities بينچ مارڪ سوٽ هلائي ٿو — پيچيده، گهڻ-قدمي prompts جو هڪ سيٽ، جيڪي مڪمل صلاحيت واري سطح کي آزمائن ٿا. هن کي ماڊل جي ڪارڪردگي جو جائزو وٺڻ، AI فراهم ڪندڙن جو مقابلو ڪرڻ، يا پيداوار ۾ لاڳو ڪرڻ کان اڳ صلاحيت پيڪن جي تصديق ڪرڻ لاءِ استعمال ڪريو.

### خلاصو {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### اختيار {#options}

| اختيار | وضاحت |
|---|---|
| `--question=<id>` | مڪمل سوٽ بدران ID ذريعي هڪ واحد بينچ مارڪ سوال هلائيو |
| `--provider=<provider>` | هن هلائڻ لاءِ ترتيب ڏنل AI فراهم ڪندڙ کي اوور رائيڊ ڪريو (مثال طور `anthropic`, `openai`) |
| `--model=<model>` | هن هلائڻ لاءِ ترتيب ڏنل ماڊل کي اوور رائيڊ ڪريو (مثال طور `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | آئوٽ پٽ فارميٽ: `table` (ڊفالٽ)، `json`، `csv` |
| `--save` | تاريخي مقابلي لاءِ بينچ مارڪ نتيجا ڊيٽابيس ۾ محفوظ ڪريو |

### مثال {#examples}

موجوده فراهم ڪندڙ ۽ ماڊل سان مڪمل بينچ مارڪ سوٽ هلائيو:

```bash
wp gratis-ai-agent benchmark
```

هڪ واحد سوال (`q-restaurant-website`) هلائيو ۽ JSON طور آئوٽ پٽ ڪريو:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

هڪ مخصوص ماڊل خلاف هلائيو ۽ نتيجا محفوظ ڪريو:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### آئوٽ پٽ {#output}

بينچ مارڪ هر سوال لاءِ هيٺين ڪالمن سان هڪ قطار آئوٽ پٽ ڪري ٿو:

| ڪالم | وضاحت |
|---|---|
| `ID` | سوال جو سڃاڻپ ڪندڙ |
| `Description` | بينچ مارڪ منظرنامي جو مختصر خلاصو |
| `Score` | پاس/فيل يا عددي اسڪور (0–100) |
| `Abilities Used` | سڏيل صلاحيتن جي ڪاما سان الڳ ٿيل فهرست |
| `Tokens` | استعمال ٿيل ڪل ٽوڪن |
| `Duration` | سيڪنڊن ۾ وال-ڪلاڪ وقت |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### بينچ مارڪ سوال {#benchmark-questions}

ڊفالٽ سوٽ ۾ شامل آهي:

| ID | منظرنامو |
|---|---|
| `q-portfolio-site` | Project Category ٽيڪسونومي سان Portfolio CPT ٺاهيو ۽ هڪ بلاڪ پيٽرن رجسٽر ڪريو |
| `q-restaurant-website` | مينيو CPT، بڪنگ فارم، ۽ نيويگيشن سان هڪ مڪمل ريسٽورنٽ ويب سائيٽ ٺاهيو |
| `q-dark-mode-theme` | ڊارڪ-موڊ ڊيزائن پري سيٽ لاڳو ڪريو ۽ برانڊ رنگ داخل ڪريو |
| `q-nav-builder` | nested dropdown سان چار-آئٽم واري پرائمري نيويگيشن مينيو ٺاهيو |
| `q-options-roundtrip` | WordPress اختيارن جو هڪ سيٽ پڙهو، تبديل ڪريو، ۽ بحال ڪريو |
| `q-ability-install` | بيان ڪيل استعمال جي صورت لاءِ سڀ کان مناسب صلاحيت پيڪ ڳوليو ۽ انسٽال ڪريو |

اضافي سوال `gratis_ai_agent_benchmark_questions` filter ذريعي رجسٽر ڪري سگهجن ٿا.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

انسٽال ٿيل صلاحيتن ۽ صلاحيت پيڪن جو انتظام ڪري ٿو.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

سڀ رجسٽر ٿيل صلاحيتون، انهن جو ذريعو (core يا pack)، ۽ انهن جي موجوده حالت ڏيکاري ٿو.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**اختيار**

| اختيار | وضاحت |
|---|---|
| `--format=<format>` | آئوٽ پٽ فارميٽ: `table` (ڊفالٽ)، `json`، `csv` |

**مثالي آئوٽ پٽ**

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

رجسٽري مان هڪ صلاحيت پيڪ ڊائون لوڊ ڪري فعال ڪري ٿو.

```bash
wp gratis-ai-agent abilities install <slug>
```

**دليل**

| دليل | وضاحت |
|---|---|
| `<slug>` | صلاحيت پيڪ جو plugin slug، مثال طور `gratis-ai-agent-woocommerce` |

**مثال**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

پيڪ کي هٽائڻ کان سواءِ هڪ مخصوص صلاحيت کي غيرفعال ڪري ٿو. ڪنهن ڏنل سائيٽ تي ايجنٽ جي دائري کي محدود ڪرڻ لاءِ مفيد آهي.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**مثال**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

اڳ ۾ غيرفعال ڪيل صلاحيت کي ٻيهر فعال ڪري ٿو.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

موجوده ايجنٽ ترتيب ۽ ڪنيڪٽوٽي حالت ڏيکاري ٿو.

```bash
wp gratis-ai-agent status
```

**مثالي آئوٽ پٽ**

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

ڊيبگ لاگ مان تازيون ايجنٽ سرگرميون ڏيکاري ٿو.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**اختيار**

| اختيار | وضاحت |
|---|---|
| `--last=<n>` | آخري N لاگ داخلايون ڏيکاريو. ڊفالٽ `50` |
| `--level=<level>` | سطح موجب فلٽر ڪريو: `info`, `warning`, `error` |
| `--ability=<ability>` | صلاحيت جي نالي موجب فلٽر ڪريو |

**مثال**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

ايجنٽ جي حالت ري سيٽ ڪري ٿو: داخل ڪيل CSS صاف ڪري ٿو، ايجنٽ طرفان رجسٽر ٿيل CPTs ۽ ٽيڪسونوميون هٽائي ٿو، عالمي انداز ري سيٽ ڪري ٿو، ۽ ايجنٽ جي اختيارن جي cache خالي ڪري ٿو. plugin يا ان جون سيٽنگون نه هٽائيندو.

```bash
wp gratis-ai-agent reset [--yes]
```

تصديق واري prompt کي ڇڏڻ لاءِ `--yes` شامل ڪريو.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## نڪرڻ جا ڪوڊ {#exit-codes}

سڀ حڪم ڪاميابي تي `0` سان نڪرن ٿا. غير-صفر نڪرڻ جا ڪوڊ:

| ڪوڊ | مطلب |
|---|---|
| `1` | عام خرابي (خرابي جو پيغام ڏسو) |
| `2` | فراهم ڪندڙ سان رابطي ۾ ناڪامي |
| `3` | صلاحيت نه ملي |
| `4` | Benchmark سوال نه ملي |
