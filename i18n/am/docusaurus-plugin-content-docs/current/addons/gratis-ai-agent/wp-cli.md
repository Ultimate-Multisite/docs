---
title: WP-CLI ማጣቀሻ
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI ማጣቀሻ

Gratis AI Agent የኤጀንቱን ለማጥኛ (benchmarking)፣ ችሎታዎችን ለማስተዳደር እና የኤጀንቱን ሁኔታ ከኮማንድ መስመር (command line) ላይ ለመጠየቅ `wp gratis-ai-agent` የኮማንድ ቤተሰብን ያቀርባል። ሁሉም የኮማንድዎች ስብስብ WP-CLI 2.0 ወይም ከዚያ በላይ ያስፈልጋል።

## መጫን (Installation) {#installation}

የWP-CLI የኮማንዶች ስብስብ የፕልጊኑ ስራ ሲጀመር በራስ-ሰር ይመዘገባል። ለማረጋገጥ የሚከተለውን ይጠቀሙ፦

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

የኤጀንት ችሎታዎች የሙከራ ስብስብን (benchmark suite) ያካሂዳል — ይህ ስብስብ ሙሉውን የችሎታ ስፋት የሚያሰልጥን ውስብስብ፣ ብዙ-ደረጃ ጥያቄዎችን ያካትታል። ይህንን የሞዴል አፈጻጸምን ለመገምገም፣ የAI አቅራቢዎችን ለማነፃፀር፣ ወይም ወደ ፕሮዳክሽን ከመልቀቅዎ በፊት የችሎታ ፓኬጆችን ለማረጋገጥ ይጠቀሙ።

### ማጠቃለያ (Synopsis) {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### አማራጮች (Options) {#options}

| አማራጭ | መግለጫ |
|---|---|
| `--question=<id>` | ሙሉውን ስብስብ ከመስራት ይልቅ፣ በID ቁጥር አንድ የሙከራ ጥያቄ ብቻ ለማስኬድ። |
| `--provider=<provider>` | ለዚህ ስራ የተዋቀረውን የAI አቅራቢ ለመተካት (ለምሳሌ፡ `anthropic`፣ `openai`)። |
| `--model=<model>` | ለዚህ ስራ የተዋቀረውን ሞዴል ለመተካት (ለምሳሌ፡ `claude-opus-4-6`፣ `gpt-4o`)። |
| `--output=<format>` | የውጤት ቅርጸት፡ `table` (በቅድፋት)፣ `json`፣ `csv`። |
| `--save` | የሙከራ ውጤቶችን ለታሪካዊ ንጽጽር በዳታቤዝ ውስጥ ማስቀመጥ። |

### ምሳሌዎች (Examples) {#examples}

በአሁኑ አቅራቢ እና ሞዴል ሙሉውን የሙከራ ስብስብ ለማስኬድ፦

```bash
wp gratis-ai-agent benchmark
```

አንድ ጥያቄ ብቻ (`q-restaurant-website`) እና ውጤቱን በJSON ቅርጸት ለማውጣት፦

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

በተወሰነ ሞዴል ላይ በማስኬድ እና ውጤቶችን ማስቀመጥ፦

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### ውጤት (Output) {#output}

የሙከራው ውጤት ለእያንዳንዱ ጥያቄ አንድ ረድፍ (row) ያቀርባል፣ ከሚከተሉት ዓምዶች ጋር፦

| ዓምድ (Column) | መግለጫ |
|---|---|
| `ID` | የጥያቄ መለያ ቁጥር |
| `Description` | አጭር ማጠቃለያ የሙከራው ሁኔታ |
| `Score` | አልፏል/አልፏል ወይም ቁጥራዊ ውጤት (0–100) |
| `Abilities Used` | ጥቅም ላይ የዋሉ ችሎታዎች በኮማ የተከፋፈሉ ዝርዝር |
| `Tokens` | ጠቅላላ ጥቅም ላይ የዋሉ ቶከኖች |
| `Duration` | በሰከንዶች ውስጥ የሰዓት-ሰዓት ጊዜ |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### የሙከራ ጥያቄዎች (Benchmark Questions) {#benchmark-questions}

የቅድፋት ስብስብ የሚከተሉትን ያካትታል፦

| ID | ሁኔታ (Scenario) |
|---|---|
| `q-portfolio-site` | የፕሮጀክት ካቴጎሪ ታክሶኖሚ ያለው የፖርትፎሊዮ CPT መፍጠር እና የብሎክ ፓተርን መመዝገብ |
| `q-restaurant-website` | ሙሉ የሬስቶራንት ድረ-ገጽ መገንባት፣ ከምናሌ CPT፣ የቦኪንግ ፎርም እና ናቪጌሽን ጋር |
| `q-dark-mode-theme` | የዳርክ-ሞድ ዲዛይን ቅድፋት መተግበር እና የብራንድ ቀለሞችን ማስገባት |
| `q-nav-builder` | አራት-አይነት ዋና ናቪጌሽን ሜኑ ከውስጥ ተንጠልጥሎ (nested dropdown) መፍጠር |
| `q-options-roundtrip` | የWordPress አማራጮችን ስብስብ ማንበብ፣ ማሻሻል እና መልሶ ማስቀመጥ |
| `q-ability-install` | ለተገለጸ የአጠቃቀም ሁኔታ በጣም ተስማሚ የሆኑ የችሎታ ፓኬጆችን መለየት እና መጫን |

ተጨማሪ ጥያቄዎች በ`gratis_ai_agent_benchmark_questions` ማጣሪያ (filter) በኩል መመዝገብ ይችላሉ።

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

የተጫኑ ችሎታዎችን እና የችሎታ ፓኬጆችን ያስተዳድራል።

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

የተመዘገቡትን ሁሉንም ችሎታዎች፣ ምንጮቻቸውን (core ወይም pack) እና የአሁኑን ሁኔታ ያሳያል።

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**አማራጮች (Options)**

| አማራጭ | መግለጫ |
|---|---|
| `--format=<format>` | የውጤት ቅርጸት፡ `table` (በቅድፋት)፣ `json`፣ `csv`። |

**የውጤት ምሳሌ (Example output)**

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

ከመመዝገቢያው (registry) የችሎታ ፓኬጅ ያወርዳል እና ያነቃቃል።

```bash
wp gratis-ai-agent abilities install <slug>
```

**ክርክሮች (Arguments)**

| ክርክር (Argument) | መግለጫ |
|---|---|
| `<slug>` | የችሎታ ፓኬጅ ፕልጊን ስሉግ፣ ለምሳሌ፡ `gratis-ai-agent-woocommerce` |

**ምሳሌ (Example)**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

የፓኬጁን ስፋት ለመገደብ ጠቃሚ ነው። የተወሰነ ችሎታ ፓኬጅ ሳይሰርዝ አንድ የተወሰነ ችሎታ ያጠፋዋል።

```bash
wp gratis-ai-agent abilities disable <ability>
```

**ምሳሌ (Example)**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

በዚህ ቀደም ብሎ በተበላቀ ችሎታ እንደገና ያነቃዋል።

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

የአሁኑን የኤጀንት ውቅር እና የግንኙነት ሁኔታ ያሳያል።

```bash
wp gratis-ai-agent status
```

**የውጤት ምሳሌ (Example output)**

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

የቅርብ ጊዜ የኤጀንት እንቅስቃሴዎችን ከዲባግ መዝገብ (debug log) ያሳያል።

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**አማራጮች (Options)**

| አማራጭ | መግለጫ |
|---|---|
| `--last=<n>` | የመጨረሻዎቹ N የሎግ መግቢያዎችን ያሳያል። በቅድፋት `50`። |
| `--level=<level>` | በደረጃ (level) መጣራት፡ `info`፣ `warning`፣ `error`። |
| `--ability=<ability>` | በችሎታ ስም መጣራት። |

**ምሳሌ (Example)**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

የኤጀንት ሁኔታን ዳግም ያስጀምራል፡ የተጨመሩ CSS ን ያጽዳል፣ በኤጀንቱ የተመዘገቡ CPTs እና ታክሶኖሚዎችን ያስወጣል፣ ዓለም አቀፍ ቅጦችን ዳግም ያስጀምራል፣ እና የኤጀንቱን አማራጮች ካሽ ባዶ ያደርጋል። ፕልጊኑን ወይም ቅንብሮቹን አያጠፋም።

```bash
wp gratis-ai-agent reset [--yes]
```

የማረጋገጫ ጥያቄውን ለማለፍ `--yes` ይጨምሩ።

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## የውፅአት ኮዶች (Exit Codes) {#exit-codes}

ሁሉም የኮማንዶች ስብስብ ስኬታማ ከሆነ `0` ይወጣሉ። μη-ዜሮ የውፅአት ኮዶች፦

| ኮድ | ትርጉም |
|---|---|
| `1` | አጠቃላይ ስህተት (የስህተት መልዕክቱን ይመልከቱ) |
| `2` | የአቅራቢ ግንኙነት ውድቀት |
| `3` | ችሎታ አልተገኘም |
| `4` | የሙከራ ጥያቄ አልተገኘም |
