---
title: سەرچاوەی WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# سەرچاوەی WP-CLI {#wp-cli-reference}

Gratis AI Agent خێزانی فرمانی `wp gratis-ai-agent` دەنێرێت بۆ پێوانەکردنی ئەجێنتەکە، بەڕێوەبردنی تواناکان، و پرسیارکردن لە دۆخی ئەجێنت لە هێڵی فرمانەوە. هەموو فرمانەکان پێویستیان بە WP-CLI 2.0 یان بەرزتر هەیە.

## دامەزراندن {#installation}

فرمانەکانی WP-CLI بە شێوەیەکی خۆکار تۆمار دەکرێن کاتێک plugin چالاکە. پشتڕاستی بکەوە بە:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

کۆمەڵەی پێوانەکردنی تواناکانی ئەجێنت جێبەجێ دەکات — کۆمەڵێک داواکاری ئاڵۆز و فرە-هەنگاو کە تەواوی ڕووکاری تواناکان تاقی دەکەنەوە. ئەمە بەکاربهێنە بۆ هەڵسەنگاندنی کارایی مۆدێل، بەراوردکردنی دابینکەرانی AI، یان پشتڕاستکردنەوەی پاکێجەکانی تواناکان پێش بڵاوکردنەوە بۆ بەرهەمهێنان.

### پوختە {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### هەڵبژاردەکان {#options}

| Option | Description |
|---|---|
| `--question=<id>` | بەجێی کۆمەڵەی تەواو، تەنها یەک پرسیاری پێوانەکردن بە ID جێبەجێ بکە |
| `--provider=<provider>` | دابینکەری AI ڕێکخراو بۆ ئەم جێبەجێکردنە پشتگوێ بخە (وەک `anthropic`، `openai`) |
| `--model=<model>` | مۆدێلی ڕێکخراو بۆ ئەم جێبەجێکردنە پشتگوێ بخە (وەک `claude-opus-4-6`، `gpt-4o`) |
| `--output=<format>` | فۆرماتی دەرچوون: `table` (بنەڕەتی)، `json`، `csv` |
| `--save` | ئەنجامەکانی پێوانەکردن لە بنکەدراوەدا پاشەکەوت بکە بۆ بەراوردی مێژوویی |

### نموونەکان {#examples}

کۆمەڵەی پێوانەکردنی تەواو بە دابینکەر و مۆدێلی ئێستا جێبەجێ بکە:

```bash
wp gratis-ai-agent benchmark
```

یەک پرسیار (`q-restaurant-website`) جێبەجێ بکە و وەک JSON دەرچوون بدە:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

لەسەر مۆدێلێکی دیاریکراو جێبەجێ بکە و ئەنجامەکان پاشەکەوت بکە:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### دەرچوون {#output}

پێوانەکردن بۆ هەر پرسیارێک یەک ڕیز دەرئەخات بە ستوونەکانی خوارەوە:

| Column | Description |
|---|---|
| `ID` | ناسێنەری پرسیار |
| `Description` | پوختەیەکی کورت لە سیناریۆی پێوانەکردن |
| `Score` | دەرچوون/شکست یان نمرەی ژمارەیی (0–100) |
| `Abilities Used` | لیستی تواناکانی بانگهێشتکراو کە بە کۆما جیاکراونەتەوە |
| `Tokens` | کۆی token بەکارهێنراو |
| `Duration` | کاتی تێپەڕبوو بە چرکە |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### پرسیارەکانی پێوانەکردن {#benchmark-questions}

کۆمەڵەی بنەڕەتی ئەمانە لەخۆدەگرێت:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | دروستکردنی Portfolio CPT لەگەڵ پۆلێنێکی Project Category و تۆمارکردنی نەخشەیەکی بلۆک |
| `q-restaurant-website` | دروستکردنی ماڵپەڕێکی تەواوی چێشتخانە لەگەڵ CPT ی مێنیو، فۆڕمی حجزکردن، و ڕێدۆزی |
| `q-dark-mode-theme` | جێبەجێکردنی پێشڕێکخستنێکی دیزاینی dark-mode و تێخستنی ڕەنگەکانی براند |
| `q-nav-builder` | دروستکردنی مێنیوی ڕێدۆزیی سەرەکی چوار-بڕگەیی لەگەڵ لیستی دابەزۆکی ناوخراو |
| `q-options-roundtrip` | خوێندنەوە، دەستکاریکردن، و گەڕاندنەوەی کۆمەڵێک هەڵبژاردەی WordPress |
| `q-ability-install` | دۆزینەوە و دامەزراندنی گونجاوترین پاکێجی تواناکان بۆ حاڵەتی بەکارهێنانێکی وەسفکراو |

پرسیاری زیاتر دەتوانرێت لە ڕێگەی فلتەری `gratis_ai_agent_benchmark_questions` تۆمار بکرێت.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

تواناکان و پاکێجەکانی توانای دامەزراو بەڕێوە دەبات.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

هەموو تواناکانی تۆمارکراو، سەرچاوەکەیان (ناوەکی یان پاکێج)، و دۆخی ئێستایان پێشان دەدات.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**هەڵبژاردەکان**

| Option | Description |
|---|---|
| `--format=<format>` | فۆرماتی دەرچوون: `table` (بنەڕەتی)، `json`، `csv` |

**نموونەی دەرچوون**

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

پاکێجی تواناکان لە تۆمارگەکە دادەگرێت و چالاکی دەکات.

```bash
wp gratis-ai-agent abilities install <slug>
```

**ئارگیومێنتەکان**

| Argument | Description |
|---|---|
| `<slug>` | slug ی plugin ـی پاکێجی تواناکان، بۆ نموونە `gratis-ai-agent-woocommerce` |

**نموونە**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

توانایەکی دیاریکراو ناچالاک دەکات بەبێ سڕینەوەی پاکێجەکە. بۆ سنووردارکردنی مەودای ئەجێنت لەسەر ماڵپەڕێکی دیاریکراو بەسوودە.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**نموونە**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

توانایەکی پێشتر ناچالاککراو دووبارە چالاک دەکات.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

ڕێکخستنی ئێستای ئەجێنت و دۆخی پەیوەندیدان پێشان دەدات.

```bash
wp gratis-ai-agent status
```

**نموونەی دەرچوون**

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

چالاکییە نوێکانی ئەجێنت لە تۆماری هەڵەدۆزینەوە پێشان دەدات.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**هەڵبژاردەکان**

| هەڵبژاردن | باسکردن |
|---|---|
| `--last=<n>` | دوا N تۆمار پیشان بدە. بنەڕەت `50` |
| `--level=<level>` | پاڵاوتن بەپێی ئاست: `info`, `warning`, `error` |
| `--ability=<ability>` | پاڵاوتن بەپێی ناوی توانایی |

**نموونە**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

دۆخی بریکارەکە دادەڕێژێتەوە: CSS ـی تێخراو پاک دەکاتەوە، CPT و پۆلێنە تۆمارکراوەکانی بریکارەکە لادەبات، ستایلە گشتییەکان دادەڕێژێتەوە، و کاشی هەڵبژاردنەکانی بریکارەکە بەتاڵ دەکاتەوە. پێوەکراوەکە یان ڕێکخستنەکانی لادەبات.

```bash
wp gratis-ai-agent reset [--yes]
```

`--yes` زیاد بکە بۆ بازدانی داواکاری پشتڕاستکردنەوە.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## کۆدەکانی دەرچوون {#exit-codes}

هەموو فرمانەکان لە کاتی سەرکەوتندا بە `0` دەر دەچن. کۆدەکانی دەرچوونی ناصفر:

| کۆد | مانا |
|---|---|
| `1` | هەڵەی گشتی (پەیامی هەڵە ببینە) |
| `2` | شکستی پەیوەندی دابینکەر |
| `3` | توانایی نەدۆزرایەوە |
| `4` | پرسیاری پێوانەکردن نەدۆزرایەوە |
