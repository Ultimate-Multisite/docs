---
title: WP-CLI အကိုးအကား
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI ကို အသုံးပြုပုံ အကိုးအကား

Gratis AI Agent သည် agent ကို စစ်ဆေးခြင်း၊ စွမ်းရည်များကို စီမံခန့်ခွဲခြင်းနှင့် command line မှ agent အခြေအနေကို မေးမြန်းခြင်းများအတွက် `wp gratis-ai-agent` command family ကို ပေးထားပါသည်။ command အားလုံးသည် WP-CLI 2.0 သို့မဟုတ် အထက်လိုအပ်ပါသည်။

## တပ်ဆင်ခြင်း (Installation)

plugin ကို အသက်သွင်းလိုက်သည်နှင့် WP-CLI command များသည် အလိုအလျောက် မှတ်ပုံတင်ပေးပါသည်။ အောက်ပါအတိုင်း စစ်ဆေးနိုင်သည်-

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Agent Capabilities benchmark suite ကို run ပေးပါသည်။ ၎င်းသည် စွမ်းရည် အကန့်အသတ်အားလုံးကို စမ်းသပ်သည့် ရှုပ်ထွေးသော၊ အဆင့်များစွာပါဝင်သည့် prompts များအစုအဝေး ဖြစ်ပါသည်။ ဤ command ကို model စွမ်းဆောင်ရည်ကို အကဲဖြတ်ရန်၊ AI ပံ့ပိုးပေးသူများကို နှိုင်းယှဉ်ရန် သို့မဟုတ် production သို့ မထုတ်မီ စွမ်းရည်အထုပ်များကို အတည်ပြုရန် အသုံးပြုပါ။

### အကျဉ်းချုပ် (Synopsis)

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### ရွေးချယ်စရာများ (Options)

| Option | ဖော်ပြချက် |
|---|---|
| `--question=<id>` | အပြည့်အစုံ suite အစား ID အလိုက် benchmark မေးခွန်းတစ်ခုတည်းကို run ပါ။ |
| `--provider=<provider>` | ဤ run အတွက် သတ်မှတ်ထားသော AI provider ကို အစားထိုးသတ်မှတ်ရန် (ဥပမာ- `anthropic`, `openai`) |
| `--model=<model>` | ဤ run အတွက် သတ်မှတ်ထားသော model ကို အစားထိုးသတ်မှတ်ရန် (ဥပမာ- `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | output ပုံစံ- `table` (default), `json`, `csv` |
| `--save` | သမိုင်းကြောင်း နှိုင်းယှဉ်မှုအတွက် benchmark ရလဒ်များကို database တွင် သိမ်းဆည်းရန် |

### ဥပမာများ (Examples)

လက်ရှိ provider နှင့် model ဖြင့် အပြည့်အစုံ benchmark suite ကို run ပါ-

```bash
wp gratis-ai-agent benchmark
```

မေးခွန်းတစ်ခုတည်းကို (`q-restaurant-website`) run ပြီး JSON အဖြစ် output ပေးပါ-

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

specific model တစ်ခုကို run ပြီး ရလဒ်များကို သိမ်းဆည်းပါ-

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### output

benchmark သည် အောက်ပါ column များပါဝင်သည့် မေးခွန်းတစ်ခုစီအတွက် အတန်းတစ်တန်းစီ output ပေးပါသည်-

| Column | ဖော်ပြချက် |
|---|---|
| `ID` | မေးခွန်း အမှတ်အသား (Question identifier) |
| `Description` | benchmark အခြေအနေ၏ အကျဉ်းချုပ် ဖော်ပြချက် |
| `Score` | အောင်/ကျ မအောင် သို့မဟုတ် ဂဏန်းရမှတ် (0–100) |
| `Abilities Used` | ခေါ်ယူအသုံးပြုခဲ့သော abilities များ၏ ကော်မာခွဲစာရင်း |
| `Tokens` | စားသုံးခဲ့သော tokens စုစုပေါင်း |
| `Duration` | စက္ကန့်များဖြင့် အချိန် (Wall-clock time) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark မေးခွန်းများ (Benchmark Questions)

default suite တွင် အောက်ပါတို့ ပါဝင်သည်-

| ID | အခြေအနေ (Scenario) |
|---|---|
| `q-portfolio-site` | Project Category taxonomy ဖြင့် Portfolio CPT တစ်ခု ဖန်တီးခြင်းနှင့် block pattern ကို မှတ်ပုံတင်ခြင်း |
| `q-restaurant-website` | menu CPT၊ booking form နှင့် navigation တို့ပါဝင်သည့် စားသောက်ဆိုင် website အပြည့်အစုံကို တည်ဆောက်ခြင်း |
| `q-dark-mode-theme` | dark-mode design preset ကို အသုံးပြုခြင်းနှင့် brand အရောင်များ ထည့်သွင်းခြင်း |
| `q-nav-builder` | nested dropdown ပါဝင်သည့် အချက်လေးချက်ပါ primary navigation menu တစ်ခု ဖန်တီးခြင်း |
| `q-options-roundtrip` | WordPress options အစုအဝေးကို ဖတ်ခြင်း၊ ပြင်ဆင်ခြင်းနှင့် ပြန်လည်ထည့်သွင်းခြင်း |
| `q-ability-install` | ဖော်ပြထားသော အသုံးပြုမှု အခြေအနေအတွက် အသင့်တော်ဆုံး ability pack ကို ရှာဖွေပြီး တပ်ဆင်ခြင်း |

အပိုဆောင်း မေးခွန်းများကို `gratis_ai_agent_benchmark_questions` filter မှတစ်ဆင့် မှတ်ပုံတင်နိုင်ပါသည်။

---

## `wp gratis-ai-agent abilities`

တပ်ဆင်ထားသော abilities များနှင့် ability packs များကို စီမံခန့်ခွဲပါသည်။

### `wp gratis-ai-agent abilities list`

မှတ်ပုံတင်ထားသော abilities အားလုံး၊ ၎င်းတို့၏ အရင်းအမြစ် (core သို့မဟုတ် pack) နှင့် လက်ရှိ အခြေအနေကို စာရင်းပြုစုပေးပါသည်။

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | ဖော်ပြချက် |
|---|---|
| `--format=<format>` | output ပုံစံ- `table` (default), `json`, `csv` |

**ဥပမာ output**

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

registry မှ ability pack တစ်ခုကို download လုပ်ပြီး activate လုပ်ပေးပါသည်။

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | ဖော်ပြချက် |
|---|---|
| `<slug>` | ability pack ၏ plugin slug၊ ဥပမာ- `gratis-ai-agent-woocommerce` |

**ဥပမာ**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

pack ကို ဖယ်ရှားခြင်းမရှိဘဲ specific ability တစ်ခုကို disable လုပ်ပေးပါသည်။ ၎င်းသည် ပေးထားသော site ပေါ်တွင် agent ၏ အကန့်အသတ်နယ်ပယ်ကို ကန့်သတ်ရန် အသုံးဝင်ပါသည်။

```bash
wp gratis-ai-agent abilities disable <ability>
```

**ဥပမာ**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

ယခင်က disable လုပ်ထားသော ability ကို ပြန်လည် enable လုပ်ပေးပါသည်။

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

လက်ရှိ agent configuration နှင့် connectivity အခြေအနေကို ပြသပေးပါသည်။

```bash
wp gratis-ai-agent status
```

**ဥပမာ output**

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

debug log မှ မကြာသေးမီက agent လုပ်ဆောင်မှုများကို ပြသပေးပါသည်။

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | ဖော်ပြချက် |
|---|---|
| `--last=<n>` | နောက်ဆုံး N log entries ကို ပြသမည်။ default သည် `50` ဖြစ်သည်။ |
| `--level=<level>` | အဆင့်အလိုက် စစ်ထုတ်မည်- `info`, `warning`, `error` |
| `--ability=<ability>` | ability ၏ အမည်အလိုက် စစ်ထုတ်မည် |

**ဥပမာ**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

agent ၏ အခြေအနေကို ပြန်လည်သတ်မှတ်ပေးသည်- ထည့်သွင်းထားသော CSS များကို ရှင်းလင်းခြင်း၊ agent မှ မှတ်ပုံတင်ထားသော CPTs နှင့် taxonomies များကို ဖယ်ရှားခြင်း၊ global styles များကို ပြန်လည်သတ်မှတ်ခြင်းနှင့် agent ၏ options cache ကို အလွတ်ဖြစ်စေခြင်းတို့ ပါဝင်သည်။ plugin သို့မဟုတ် ၎င်း၏ settings များကို ဖယ်ရှားမည် မဟုတ်ပါ။

```bash
wp gratis-ai-agent reset [--yes]
```

confirmation prompt ကို ကျော်လွန်ရန် `--yes` ကို ထည့်ပါ။

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

command အားလုံးသည် အောင်မြင်ပါက `0` ဖြင့် အဆုံးသတ်ပါသည်။ သုညမဟုတ်သော exit codes များမှာ-

| Code | အဓိပ္ပာယ် |
|---|---|
| `1` | ယေဘူယျ အမှား (error message ကို ကြည့်ပါ) |
| `2` | Provider ချိတ်ဆက်မှု အမှား (Provider connectivity failure) |
| `3` | Ability မတွေ့ရှိရ (Ability not found) |
| `4` | Benchmark မေးခွန်း မတွေ့ရှိရ (Benchmark question not found) |
