---
title: WP-CLI پايدىلىنىش قوللانمىسى
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI قوللانمىسى

Gratis AI Agent ۋاكالەتچىنى ئۆلچەم سىنىقىدىن ئۆتكۈزۈش، ئىقتىدارلارنى باشقۇرۇش ۋە بۇيرۇق قۇرىدىن ۋاكالەتچى ھالىتىنى سوراش ئۈچۈن `wp gratis-ai-agent` بۇيرۇق ئائىلىسىنى تەمىنلەيدۇ. بارلىق بۇيرۇقلار WP-CLI 2.0 ياكى ئۇنىڭدىن يۇقىرى نەشرىنى تەلەپ قىلىدۇ.

## ئورنىتىش

WP-CLI بۇيرۇقلىرى plugin ئاكتىپ بولغاندا ئاپتوماتىك تىزىملىتىلىدۇ. تۆۋەندىكى بىلەن دەلىللەڭ:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Agent Capabilities ئۆلچەم سىنىقى توپلىمىنى ئىجرا قىلىدۇ — بۇ تولۇق ئىقتىدار دائىرىسىنى سىنايدىغان مۇرەككەپ، كۆپ باسقۇچلۇق ئەسكەرتىشلەر توپلىمى. بۇنى مودېل ئىقتىدارىنى باھالاش، AI تەمىنلىگۈچىلەرنى سېلىشتۇرۇش ياكى ئىشلەپچىقىرىشقا چىقىرىشتىن بۇرۇن ئىقتىدار بولاقلىرىنى دەلىللەش ئۈچۈن ئىشلىتىڭ.

### قىسقىچە ئىشلىتىلىشى

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### تاللانمىلار

| تاللانما | چۈشەندۈرۈش |
|---|---|
| `--question=<id>` | تولۇق توپلامنىڭ ئورنىغا ID بويىچە يەككە ئۆلچەم سىنىقى سوئالىنى ئىجرا قىلىش |
| `--provider=<provider>` | بۇ ئىجرا ئۈچۈن سەپلەنگەن AI تەمىنلىگۈچىنى قاپلاش (مەسىلەن `anthropic`، `openai`) |
| `--model=<model>` | بۇ ئىجرا ئۈچۈن سەپلەنگەن مودېلنى قاپلاش (مەسىلەن `claude-opus-4-6`، `gpt-4o`) |
| `--output=<format>` | چىقىرىش فورماتى: `table` (كۆڭۈلدىكى)، `json`، `csv` |
| `--save` | تارىخىي سېلىشتۇرۇش ئۈچۈن ئۆلچەم سىنىقى نەتىجىلىرىنى ساندانغا ساقلاش |

### مىساللار

نۆۋەتتىكى تەمىنلىگۈچى ۋە مودېل بىلەن تولۇق ئۆلچەم سىنىقى توپلىمىنى ئىجرا قىلىش:

```bash
wp gratis-ai-agent benchmark
```

يەككە سوئال (`q-restaurant-website`) نى ئىجرا قىلىپ JSON سۈپىتىدە چىقىرىش:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

مۇئەييەن مودېلغا قارشى ئىجرا قىلىپ نەتىجىلەرنى ساقلاش:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### چىقىرىش

ئۆلچەم سىنىقى ھەر بىر سوئال ئۈچۈن تۆۋەندىكى ستونلار بىلەن بىر قۇر چىقىرىدۇ:

| ستون | چۈشەندۈرۈش |
|---|---|
| `ID` | سوئال تونۇتقۇچىسى |
| `Description` | ئۆلچەم سىنىقى سىنارىيەسىنىڭ قىسقا خۇلاسىسى |
| `Score` | ئۆتتى/ئۆتمىدى ياكى سانلىق نومۇر (0–100) |
| `Abilities Used` | چاقىرىلغان ئىقتىدارلارنىڭ پەش بىلەن ئايرىلغان تىزىملىكى |
| `Tokens` | ئىستېمال قىلىنغان ئومۇمىي tokens |
| `Duration` | سېكۇنت بويىچە ئەمەلىي ۋاقىت |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### ئۆلچەم سىنىقى سوئاللىرى

كۆڭۈلدىكى توپلام تۆۋەندىكىلەرنى ئۆز ئىچىگە ئالىدۇ:

| ID | سىنارىيە |
|---|---|
| `q-portfolio-site` | Project Category taxonomy بىلەن Portfolio CPT قۇرۇش ۋە block pattern نى تىزىملىتىش |
| `q-restaurant-website` | menu CPT، زاكاز قىلىش جەدۋىلى ۋە يولباشلاش بىلەن تولۇق رېستوران تور بېكىتى قۇرۇش |
| `q-dark-mode-theme` | قاراڭغۇ ھالەت لايىھە preset نى قوللىنىش ۋە ماركا رەڭلىرىنى كىرگۈزۈش |
| `q-nav-builder` | ئىچىگە كىرگەن dropdown بار تۆت تۈرلۈك ئاساسىي يولباشلاش تىزىملىكى قۇرۇش |
| `q-options-roundtrip` | WordPress تاللانمىلىرى توپلىمىنى ئوقۇش، ئۆزگەرتىش ۋە ئەسلىگە كەلتۈرۈش |
| `q-ability-install` | تەسۋىرلەنگەن ئىشلىتىش ئەھۋالى ئۈچۈن ئەڭ مۇۋاپىق ئىقتىدار بولىقىنى بايقاش ۋە ئورنىتىش |

قوشۇمچە سوئاللارنى `gratis_ai_agent_benchmark_questions` filter ئارقىلىق تىزىملىتىشكە بولىدۇ.

---

## `wp gratis-ai-agent abilities`

ئورنىتىلغان ئىقتىدارلار ۋە ئىقتىدار بولاقلىرىنى باشقۇرىدۇ.

### `wp gratis-ai-agent abilities list`

بارلىق تىزىملىتىلغان ئىقتىدارلارنى، ئۇلارنىڭ مەنبەسىنى (يادرولۇق ياكى بولاق) ۋە نۆۋەتتىكى ھالىتىنى كۆرسىتىدۇ.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**تاللانمىلار**

| تاللانما | چۈشەندۈرۈش |
|---|---|
| `--format=<format>` | چىقىرىش فورماتى: `table` (كۆڭۈلدىكى)، `json`، `csv` |

**مىسال چىقىرىش**

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

### `wp gratis-ai-agent abilities install`

تىزىملاتقۇچتىن ئىقتىدار بولىقىنى چۈشۈرۈپ ئاكتىپلايدۇ.

```bash
wp gratis-ai-agent abilities install <slug>
```

**ئارگۇمېنتلار**

| ئارگۇمېنت | چۈشەندۈرۈش |
|---|---|
| `<slug>` | ئىقتىدار بولىقىنىڭ plugin slug ى، مەسىلەن `gratis-ai-agent-woocommerce` |

**مىسال**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

بولاقنى ئۆچۈرمەي تۇرۇپ مۇئەييەن ئىقتىدارنى چەكلەيدۇ. بېرىلگەن تور بېكەتتە ۋاكالەتچىنىڭ دائىرىسىنى چەكلەشكە پايدىلىق.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**مىسال**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

ئىلگىرى چەكلەنگەن ئىقتىدارنى قايتا ئاكتىپلايدۇ.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

نۆۋەتتىكى ۋاكالەتچى سەپلىمىسى ۋە ئۇلىنىش ھالىتىنى كۆرسىتىدۇ.

```bash
wp gratis-ai-agent status
```

**مىسال چىقىرىش**

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

## `wp gratis-ai-agent logs`

debug log دىن يېقىنقى ۋاكالەتچى پائالىيىتىنى كۆرسىتىدۇ.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**تاللانمىلار**

| تاللاش | چۈشەندۈرۈش |
|---|---|
| `--last=<n>` | ئەڭ ئاخىرقى N خاتىرە كىرگۈزىنى كۆرسىتىدۇ. كۆڭۈلدىكى `50` |
| `--level=<level>` | دەرىجە بويىچە سۈزۈش: `info`, `warning`, `error` |
| `--ability=<ability>` | ئىقتىدار نامى بويىچە سۈزۈش |

**مىسال**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

agent ھالىتىنى قايتا تەڭشەيدۇ: كىرگۈزۈلگەن CSS نى تازىلايدۇ، agent تىزىملاتقان CPTs ۋە تۈر ئايرىمىسىنى ئۆچۈرىدۇ، ئومۇمىي ئۇسلۇبلارنى قايتا تەڭشەيدۇ، ھەمدە agent نىڭ تاللاشلىرى cache نى بوشىتىدۇ. plugin ياكى ئۇنىڭ تەڭشەكلىرىنى ئۆچۈرمەيدۇ.

```bash
wp gratis-ai-agent reset [--yes]
```

جەزملەش ئەسكەرتىشىدىن ئاتلاپ كېتىش ئۈچۈن `--yes` قوشۇڭ.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## چېكىنىش كودلىرى

بارلىق بۇيرۇقلار مۇۋەپپەقىيەتلىك بولغاندا `0` بىلەن چېكىنىدۇ. نۆل بولمىغان چېكىنىش كودلىرى:

| كود | مەنىسى |
|---|---|
| `1` | ئادەتتىكى خاتالىق (خاتالىق ئۇچۇرىنى كۆرۈڭ) |
| `2` | تەمىنلىگۈچى ئۇلىنىش مەغلۇبىيىتى |
| `3` | ئىقتىدار تېپىلمىدى |
| `4` | Benchmark سوئالى تېپىلمىدى |
