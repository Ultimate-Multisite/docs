---
title: WP-CLI حوالو
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI حوالو {#wp-cli-reference}

Gratis AI Agent حڪمي لڪير مان ايجنٽ جي benchmark ڪرڻ، صلاحيتون سنڀالڻ، ۽ ايجنٽ جي حالت پڇڻ لاءِ `wp gratis-ai-agent` حڪمن جو خاندان مهيا ڪري ٿو. سڀني حڪمن لاءِ WP-CLI 2.0 يا ان کان مٿي گهربل آهي.

## انسٽاليشن {#installation}

WP-CLI حڪم plugin فعال هئڻ وقت پاڻمرادو رجسٽر ٿين ٿا. هن سان تصديق ڪريو:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent Capabilities benchmark مجموعو هلائي ٿو — پيچيده، گهڻن مرحلن وارن prompts جو هڪ سيٽ، جيڪي مڪمل صلاحيتن جي سطح کي آزمائين ٿا. هن کي ماڊل جي ڪارڪردگي جانچڻ، AI فراهم ڪندڙن جو مقابلو ڪرڻ، يا production ڏانهن لاڳو ڪرڻ کان اڳ صلاحيت پيڪن جي تصديق ڪرڻ لاءِ استعمال ڪريو.

### خلاصو {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### اختيار {#options}

| Option | Description |
|---|---|
| `--question=<id>` | مڪمل مجموعي بدران ID ذريعي هڪ واحد benchmark سوال هلائي ٿو |
| `--provider=<provider>` | هن هلائڻ لاءِ ترتيب ڏنل AI فراهم ڪندڙ کي بدلائي ٿو (مثلاً `anthropic`, `openai`) |
| `--model=<model>` | هن هلائڻ لاءِ ترتيب ڏنل ماڊل کي بدلائي ٿو (مثلاً `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | نڪتل صورت: `table` (default), `json`, `csv` |
| `--save` | تاريخي مقابلي لاءِ benchmark نتيجا database ۾ محفوظ ڪري ٿو |

### مثال {#examples}

موجوده فراهم ڪندڙ ۽ ماڊل سان مڪمل benchmark مجموعو هلائو:

```bash
wp gratis-ai-agent benchmark
```

هڪ واحد سوال (`q-restaurant-website`) هلائو ۽ JSON طور output ڏيو:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

هڪ مخصوص ماڊل خلاف هلائو ۽ نتيجا محفوظ ڪريو:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### نڪتل نتيجو {#output}

benchmark هر سوال لاءِ هيٺين ڪالمن سان هڪ قطار output ڪري ٿو:

| Column | Description |
|---|---|
| `ID` | سوال جو سڃاڻپڪار |
| `Description` | benchmark منظرنامي جو مختصر خلاصو |
| `Score` | پاس/فيل يا عددي اسڪور (0–100) |
| `Abilities Used` | سڏايل صلاحيتن جي ڪاما سان الڳ ڪيل فهرست |
| `Tokens` | استعمال ٿيل ڪل tokens |
| `Duration` | سيڪنڊن ۾ wall-clock وقت |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark سوال {#benchmark-questions}

default مجموعي ۾ شامل آهي:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Project Category taxonomy سان Portfolio CPT ٺاهيو ۽ block pattern رجسٽر ڪريو |
| `q-restaurant-website` | menu CPT، booking form، ۽ navigation سان مڪمل restaurant website ٺاهيو |
| `q-dark-mode-theme` | dark-mode design preset لاڳو ڪريو ۽ brand colours داخل ڪريو |
| `q-nav-builder` | nested dropdown سان چار-آئٽم primary navigation menu ٺاهيو |
| `q-options-roundtrip` | WordPress اختيارن جو هڪ سيٽ پڙهو، تبديل ڪريو، ۽ بحال ڪريو |
| `q-ability-install` | بيان ڪيل استعمال جي حالت لاءِ سڀ کان مناسب صلاحيت پيڪ ڳوليو ۽ install ڪريو |

اضافي سوال `gratis_ai_agent_benchmark_questions` filter ذريعي رجسٽر ڪري سگهجن ٿا.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

انسٽال ٿيل صلاحيتن ۽ صلاحيت پيڪن کي سنڀالي ٿو.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

سڀ رجسٽر ٿيل صلاحيتون، انهن جو ذريعو (core يا pack)، ۽ انهن جي موجوده حالت ڏيکاري ٿو.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**اختيار**

| Option | Description |
|---|---|
| `--format=<format>` | نڪتل صورت: `table` (default), `json`, `csv` |

**مثالي نڪتل نتيجو**

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

registry مان هڪ صلاحيت پيڪ download ڪري فعال ڪري ٿو.

```bash
wp gratis-ai-agent abilities install <slug>
```

**دليل**

| Argument | Description |
|---|---|
| `<slug>` | صلاحيت پيڪ جو plugin slug، مثلاً `gratis-ai-agent-woocommerce` |

**مثال**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

پيڪ کي هٽائڻ کان سواءِ هڪ مخصوص صلاحيت غيرفعال ڪري ٿو. ڪنهن ڏنل site تي ايجنٽ جي دائري کي محدود ڪرڻ لاءِ مفيد آهي.

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

موجوده ايجنٽ configuration ۽ connectivity حالت ڏيکاري ٿو.

```bash
wp gratis-ai-agent status
```

**مثالي نڪتل نتيجو**

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

debug log مان تازيون ايجنٽ سرگرميون ڏيکاري ٿو.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**اختيار**

| اختيار | وضاحت |
|---|---|
| `--last=<n>` | آخري N لاگ داخلا ڏيکاريو. ڊفالٽ `50` |
| `--level=<level>` | سطح موجب فلٽر ڪريو: `info`, `warning`, `error` |
| `--ability=<ability>` | صلاحيت جي نالي موجب فلٽر ڪريو |

**مثال**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

agent جي حالت ري سيٽ ڪري ٿو: داخل ڪيل CSS صاف ڪري ٿو، agent-رجسٽر ڪيل CPTs ۽ taxonomies هٽائي ٿو، عالمي انداز ري سيٽ ڪري ٿو، ۽ agent جي اختيارن جي cache خالي ڪري ٿو. plugin يا ان جون settings نه هٽائيندو.

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

سڀ commands ڪاميابي تي `0` سان exit ڪن ٿا. غير-صفر exit codes:

| ڪوڊ | مطلب |
|---|---|
| `1` | عام غلطي (غلطي جو پيغام ڏسو) |
| `2` | Provider connectivity ناڪامي |
| `3` | صلاحيت نه ملي |
| `4` | Benchmark سوال نه ملي |
