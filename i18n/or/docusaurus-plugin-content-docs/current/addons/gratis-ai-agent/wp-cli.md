---
title: WP-CLI ସନ୍ଦର୍ଭ
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI ସନ୍ଦର୍ଭ {#wp-cli-reference}

Gratis AI Agent କମାଣ୍ଡ ଲାଇନରୁ ଏଜେଣ୍ଟକୁ ବେଞ୍ଚମାର୍କ କରିବା, କ୍ଷମତା ପରିଚାଳନା କରିବା, ଏବଂ ଏଜେଣ୍ଟ ସ୍ଥିତି ପଚାରିବା ପାଇଁ ଏକ `wp gratis-ai-agent` କମାଣ୍ଡ ପରିବାର ସହିତ ଆସେ। ସମସ୍ତ କମାଣ୍ଡ ପାଇଁ WP-CLI ୨.୦ କିମ୍ବା ତାଠାରୁ ଉଚ୍ଚ ଆବଶ୍ୟକ।

## ସଂସ୍ଥାପନ {#installation}

plugin ସକ୍ରିୟ ଥିବାବେଳେ WP-CLI କମାଣ୍ଡଗୁଡ଼ିକ ସ୍ୱୟଂଚାଳିତ ଭାବେ ପଞ୍ଜିକୃତ ହୁଏ। ଏହା ସହିତ ଯାଞ୍ଚ କରନ୍ତୁ:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent Capabilities ବେଞ୍ଚମାର୍କ ସମୂହ ଚଳାଏ — ଏହା ଜଟିଳ, ବହୁ-ପଦକ୍ଷେପ ପ୍ରମ୍ପ୍ଟର ଏକ ସେଟ୍, ଯାହା ସମ୍ପୂର୍ଣ୍ଣ କ୍ଷମତା ପରିସରକୁ ପରୀକ୍ଷା କରେ। ମଡେଲ୍ କାର୍ଯ୍ୟଦକ୍ଷତା ମୂଲ୍ୟାଙ୍କନ, AI ପ୍ରଦାନକାରୀଙ୍କୁ ତୁଳନା, କିମ୍ବା ଉତ୍ପାଦନରେ ଡିପ୍ଲୟ କରିବା ପୂର୍ବରୁ କ୍ଷମତା ପ୍ୟାକ୍ ସତ୍ୟାପନ ପାଇଁ ଏହା ବ୍ୟବହାର କରନ୍ତୁ।

### ସାରାଂଶ {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### ବିକଳ୍ପ {#options}

| Option | ବର୍ଣ୍ଣନା |
|---|---|
| `--question=<id>` | ସମ୍ପୂର୍ଣ୍ଣ ସମୂହ ପରିବର୍ତ୍ତେ ID ଦ୍ୱାରା ଏକ ମାତ୍ର ବେଞ୍ଚମାର୍କ ପ୍ରଶ୍ନ ଚଳାନ୍ତୁ |
| `--provider=<provider>` | ଏହି ଚଳାଣ ପାଇଁ କନଫିଗର୍ ହୋଇଥିବା AI ପ୍ରଦାନକାରୀକୁ ଓଭରରାଇଡ୍ କରନ୍ତୁ (ଯେପରି `anthropic`, `openai`) |
| `--model=<model>` | ଏହି ଚଳାଣ ପାଇଁ କନଫିଗର୍ ହୋଇଥିବା ମଡେଲ୍‌କୁ ଓଭରରାଇଡ୍ କରନ୍ତୁ (ଯେପରି `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | ଆଉଟପୁଟ୍ ଫର୍ମାଟ୍: `table` (ଡିଫଲ୍ଟ), `json`, `csv` |
| `--save` | ଐତିହାସିକ ତୁଳନା ପାଇଁ ବେଞ୍ଚମାର୍କ ଫଳାଫଳକୁ ଡାଟାବେସ୍‌ରେ ସେଭ୍ କରନ୍ତୁ |

### ଉଦାହରଣ {#examples}

ବର୍ତ୍ତମାନର ପ୍ରଦାନକାରୀ ଏବଂ ମଡେଲ୍ ସହିତ ସମ୍ପୂର୍ଣ୍ଣ ବେଞ୍ଚମାର୍କ ସମୂହ ଚଳାନ୍ତୁ:

```bash
wp gratis-ai-agent benchmark
```

ଏକ ମାତ୍ର ପ୍ରଶ୍ନ (`q-restaurant-website`) ଚଳାନ୍ତୁ ଏବଂ JSON ଭାବେ ଆଉଟପୁଟ୍ ଦିଅନ୍ତୁ:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ନିର୍ଦ୍ଦିଷ୍ଟ ମଡେଲ୍ ବିପକ୍ଷରେ ଚଳାନ୍ତୁ ଏବଂ ଫଳାଫଳ ସେଭ୍ କରନ୍ତୁ:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### ଆଉଟପୁଟ୍ {#output}

ବେଞ୍ଚମାର୍କ ପ୍ରତ୍ୟେକ ପ୍ରଶ୍ନ ପାଇଁ ନିମ୍ନଲିଖିତ ସ୍ତମ୍ଭ ସହିତ ଗୋଟିଏ ଧାଡ଼ି ଆଉଟପୁଟ୍ କରେ:

| ସ୍ତମ୍ଭ | ବର୍ଣ୍ଣନା |
|---|---|
| `ID` | ପ୍ରଶ୍ନ ପରିଚୟକ |
| `Description` | ବେଞ୍ଚମାର୍କ ପରିଦୃଶ୍ୟର ଛୋଟ ସାରାଂଶ |
| `Score` | ପାସ୍/ଫେଲ୍ କିମ୍ବା ସଂଖ୍ୟାତ୍ମକ ସ୍କୋର୍ (୦–୧୦୦) |
| `Abilities Used` | ଆହ୍ୱାନ କରାଯାଇଥିବା କ୍ଷମତାର କମା-ପୃଥକ ତାଲିକା |
| `Tokens` | ବ୍ୟବହୃତ ମୋଟ ଟୋକେନ୍ |
| `Duration` | ସେକେଣ୍ଡରେ ବାସ୍ତବ ସମୟ |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### ବେଞ୍ଚମାର୍କ ପ୍ରଶ୍ନ {#benchmark-questions}

ଡିଫଲ୍ଟ ସମୂହରେ ରହିଛି:

| ID | ପରିଦୃଶ୍ୟ |
|---|---|
| `q-portfolio-site` | Project Category taxonomy ସହିତ ଏକ Portfolio CPT ସୃଷ୍ଟି କରନ୍ତୁ ଏବଂ ଏକ ବ୍ଲକ୍ ପ୍ୟାଟର୍ନ ପଞ୍ଜିକୃତ କରନ୍ତୁ |
| `q-restaurant-website` | ମେନୁ CPT, ବୁକିଂ ଫର୍ମ, ଏବଂ ନେଭିଗେସନ୍ ସହିତ ଏକ ସମ୍ପୂର୍ଣ୍ଣ ରେଷ୍ଟୁରାଣ୍ଟ ୱେବସାଇଟ୍ ତିଆରି କରନ୍ତୁ |
| `q-dark-mode-theme` | ଏକ ଡାର୍କ-ମୋଡ୍ ଡିଜାଇନ୍ ପ୍ରିସେଟ୍ ପ୍ରୟୋଗ କରନ୍ତୁ ଏବଂ ବ୍ରାଣ୍ଡ ରଙ୍ଗ ପ୍ରବେଶ କରାନ୍ତୁ |
| `q-nav-builder` | ନେଷ୍ଟେଡ୍ ଡ୍ରପ୍‌ଡାଉନ୍ ସହିତ ଚାରି-ଆଇଟମ୍ ପ୍ରାଥମିକ ନେଭିଗେସନ୍ ମେନୁ ସୃଷ୍ଟି କରନ୍ତୁ |
| `q-options-roundtrip` | WordPress ବିକଳ୍ପର ଏକ ସେଟ୍ ପଢ଼ନ୍ତୁ, ପରିବର୍ତ୍ତନ କରନ୍ତୁ, ଏବଂ ପୁନଃସ୍ଥାପନ କରନ୍ତୁ |
| `q-ability-install` | ବର୍ଣ୍ଣିତ ବ୍ୟବହାର ଘଟଣା ପାଇଁ ସବୁଠାରୁ ଉପଯୁକ୍ତ କ୍ଷମତା ପ୍ୟାକ୍ ଖୋଜନ୍ତୁ ଏବଂ ସଂସ୍ଥାପନ କରନ୍ତୁ |

ଅତିରିକ୍ତ ପ୍ରଶ୍ନଗୁଡ଼ିକୁ `gratis_ai_agent_benchmark_questions` ଫିଲ୍ଟର୍ ମାଧ୍ୟମରେ ପଞ୍ଜିକୃତ କରାଯାଇପାରେ।

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

ସଂସ୍ଥାପିତ କ୍ଷମତା ଏବଂ କ୍ଷମତା ପ୍ୟାକ୍ ପରିଚାଳନା କରେ।

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

ସମସ୍ତ ପଞ୍ଜିକୃତ କ୍ଷମତା, ସେଗୁଡ଼ିକର ଉତ୍ସ (କୋର୍ କିମ୍ବା ପ୍ୟାକ୍), ଏବଂ ସେଗୁଡ଼ିକର ବର୍ତ୍ତମାନ ସ୍ଥିତି ତାଲିକାଭୁକ୍ତ କରେ।

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**ବିକଳ୍ପ**

| Option | ବର୍ଣ୍ଣନା |
|---|---|
| `--format=<format>` | ଆଉଟପୁଟ୍ ଫର୍ମାଟ୍: `table` (ଡିଫଲ୍ଟ), `json`, `csv` |

**ଉଦାହରଣ ଆଉଟପୁଟ୍**

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

ରେଜିଷ୍ଟ୍ରିରୁ ଏକ କ୍ଷମତା ପ୍ୟାକ୍ ଡାଉନଲୋଡ୍ କରେ ଏବଂ ସକ୍ରିୟ କରେ।

```bash
wp gratis-ai-agent abilities install <slug>
```

**ଆର୍ଗୁମେଣ୍ଟ**

| Argument | ବର୍ଣ୍ଣନା |
|---|---|
| `<slug>` | କ୍ଷମତା ପ୍ୟାକ୍‌ର plugin slug, ଯେପରି `gratis-ai-agent-woocommerce` |

**ଉଦାହରଣ**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

ପ୍ୟାକ୍ ହଟାଇବା ବିନା ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ଷମତାକୁ ଅସକ୍ରିୟ କରେ। ନିର୍ଦ୍ଦିଷ୍ଟ ସାଇଟ୍‌ରେ ଏଜେଣ୍ଟର ପରିସର ସୀମିତ କରିବା ପାଇଁ ଉପଯୁକ୍ତ।

```bash
wp gratis-ai-agent abilities disable <ability>
```

**ଉଦାହରଣ**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

ପୂର୍ବରୁ ଅସକ୍ରିୟ ଥିବା କ୍ଷମତାକୁ ପୁନଃ ସକ୍ରିୟ କରେ।

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

ବର୍ତ୍ତମାନ ଏଜେଣ୍ଟ କନଫିଗରେସନ୍ ଏବଂ କନେକ୍ଟିଭିଟି ସ୍ଥିତି ଦେଖାଏ।

```bash
wp gratis-ai-agent status
```

**ଉଦାହରଣ ଆଉଟପୁଟ୍**

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

ଡିବଗ୍ ଲଗ୍‌ରୁ ସମ୍ପ୍ରତିକ ଏଜେଣ୍ଟ କାର୍ଯ୍ୟକଳାପ ଦେଖାଏ।

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**ବିକଳ୍ପ**

| ବିକଳ୍ପ | ବର୍ଣ୍ଣନା |
|---|---|
| `--last=<n>` | ଶେଷ N ଲଗ୍ ପ୍ରବିଷ୍ଟି ଦେଖାନ୍ତୁ। ଡିଫଲ୍ଟ `50` |
| `--level=<level>` | ସ୍ତର ଅନୁସାରେ ଛାଣନ୍ତୁ: `info`, `warning`, `error` |
| `--ability=<ability>` | କ୍ଷମତା ନାମ ଅନୁସାରେ ଛାଣନ୍ତୁ |

**ଉଦାହରଣ**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

ଏଜେଣ୍ଟ ଅବସ୍ଥାକୁ ପୁନଃସେଟ୍ କରେ: ଯୋଡ଼ାଯାଇଥିବା CSS ସଫା କରେ, ଏଜେଣ୍ଟ ଦ୍ୱାରା ପଞ୍ଜିକୃତ CPTs ଏବଂ ଶ୍ରେଣୀବିଭାଗ ହଟାଏ, ଗ୍ଲୋବାଲ୍ ଶୈଳୀ ପୁନଃସେଟ୍ କରେ, ଏବଂ ଏଜେଣ୍ଟର ବିକଳ୍ପ କ୍ୟାଶ ଖାଲି କରେ। ପ୍ଲଗଇନ୍ କିମ୍ବା ଏହାର ସେଟିଂସ୍ ହଟାଏ ନାହିଁ।

```bash
wp gratis-ai-agent reset [--yes]
```

ନିଶ୍ଚିତକରଣ ପ୍ରମ୍ପ୍ଟ ଏଡ଼ାଇବାକୁ `--yes` ଯୋଡ଼ନ୍ତୁ।

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## ପ୍ରସ୍ଥାନ କୋଡ୍ {#exit-codes}

ସମସ୍ତ କମାଣ୍ଡ ସଫଳ ହେଲେ `0` ସହିତ ପ୍ରସ୍ଥାନ କରେ। ଶୂନ୍ୟ ନୁହେଁଥିବା ପ୍ରସ୍ଥାନ କୋଡ୍:

| କୋଡ୍ | ଅର୍ଥ |
|---|---|
| `1` | ସାଧାରଣ ତ୍ରୁଟି (ତ୍ରୁଟି ସନ୍ଦେଶ ଦେଖନ୍ତୁ) |
| `2` | ପ୍ରଦାତା ସଂଯୋଗ ବିଫଳତା |
| `3` | କ୍ଷମତା ମିଳିଲା ନାହିଁ |
| `4` | ବେଞ୍ଚମାର୍କ ପ୍ରଶ୍ନ ମିଳିଲା ନାହିଁ |
