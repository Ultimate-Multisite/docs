---
title: WP-CLI రిఫరెన్స్
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI రిఫరెన్స్ {#wp-cli-reference}

Gratis AI Agent, కమాండ్ లైన్ నుండి ఏజెంట్‌ను బెంచ్‌మార్క్ చేయడానికి, సామర్థ్యాలను (abilities) నిర్వహించడానికి మరియు ఏజెంట్ స్థితిని ప్రశ్నించడానికి `wp gratis-ai-agent` కమాండ్ ఫ్యామిలీని అందిస్తుంది. అన్ని కమాండ్లకు WP-CLI 2.0 లేదా అంతకంటే ఎక్కువ అవసరం.

## ఇన్‌స్టాలేషన్ {#installation}

ప్లగిన్ యాక్టివ్‌గా ఉన్నప్పుడు WP-CLI కమాండ్స్ ఆటోమేటిక్‌గా రిజిస్టర్ అవుతాయి. ఈ కమాండ్‌తో ధృవీకరించండి:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

ఇది ఏజెంట్ సామర్థ్యాల బెంచ్‌మార్క్ సూట్‌ను రన్ చేస్తుంది — ఇది పూర్తి సామర్థ్య పరిధిని పరీక్షించే సంక్లిష్టమైన, బహుళ-దశల ప్రాంప్ట్‌ల సెట్. మోడల్ పనితీరును అంచనా వేయడానికి, AI ప్రొవైడర్లను పోల్చడానికి లేదా ప్రొడక్షన్‌లో డిప్లాయ్ చేయడానికి ముందు సామర్థ్య ప్యాక్‌లను ధృవీకరించడానికి దీనిని ఉపయోగించండి.

### సంక్షిప్త వివరణ (Synopsis) {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### ఎంపికలు (Options) {#options}

| Option | Description |
|---|---|
| `--question=<id>` | పూర్తి సూట్ కాకుండా, ID ద్వారా ఒకే బెంచ్‌మార్క్ ప్రశ్నను రన్ చేస్తుంది |
| `--provider=<provider>` | ఈ రన్ కోసం కాన్ఫిగర్ చేసిన AI ప్రొవైడర్‌ను ఓవర్‌రైడ్ చేస్తుంది (ఉదా. `anthropic`, `openai`) |
| `--model=<model>` | ఈ రన్ కోసం కాన్ఫిగర్ చేసిన మోడల్‌ను ఓవర్‌రైడ్ చేస్తుంది (ఉదా. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | అవుట్‌పుట్ ఫార్మాట్: `table` (డిఫాల్ట్), `json`, `csv` |
| `--save` | చారిత్రక పోలిక కోసం బెంచ్‌మార్క్ ఫలితాలను డేటాబేస్‌లో సేవ్ చేస్తుంది |

### ఉదాహరణలు (Examples) {#examples}

ప్రస్తుత ప్రొవైడర్ మరియు మోడల్‌తో పూర్తి బెంచ్‌మార్క్ సూట్‌ను రన్ చేయండి:

```bash
wp gratis-ai-agent benchmark
```

ఒకే ప్రశ్నను (`q-restaurant-website`) రన్ చేసి, JSON రూపంలో అవుట్‌పుట్ చేయండి:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

నిర్దిష్ట మోడల్‌పై రన్ చేసి, ఫలితాలను సేవ్ చేయండి:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### అవుట్‌పుట్ (Output) {#output}

బెంచ్‌మార్క్ ప్రతి ప్రశ్నకు ఒక వరుసను ఈ కింది కాలమ్‌లతో అందిస్తుంది:

| Column | Description |
|---|---|
| `ID` | ప్రశ్న గుర్తింపు (Question identifier) |
| `Description` | బెంచ్‌మార్క్ దృశ్యం యొక్క సంక్షిప్త సారాంశం |
| `Score` | పాస్/ఫెయిల్ లేదా సంఖ్యా స్కోర్ (0–100) |
| `Abilities Used` | పిలిపిన సామర్థ్యాల (abilities) కామా-సెపరేటెడ్ జాబితా |
| `Tokens` | వినియోగించిన మొత్తం టోకెన్‌లు |
| `Duration` | సెకన్లలో వాల్-క్లాక్ సమయం |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### బెంచ్‌మార్క్ ప్రశ్నలు (Benchmark Questions) {#benchmark-questions}

డిఫాల్ట్ సూట్‌లో ఇవి ఉంటాయి:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | ప్రాజెక్ట్ కేటగిరీ టాక్సానమీతో పోర్ట్‌ఫోలియో CPTని సృష్టించడం మరియు బ్లాక్ ప్యాటర్న్‌ను రిజిస్టర్ చేయడం |
| `q-restaurant-website` | మెనూ CPT, బుకింగ్ ఫారం మరియు నావిగేషన్ తో పూర్తి రెస్టారెంట్ వెబ్‌సైట్‌ను నిర్మించడం |
| `q-dark-mode-theme` | డార్క్-మోడ్ డిజైన్ ప్రీసెట్‌ను వర్తింపజేయడం మరియు బ్రాండ్ రంగులను ఇంజెక్ట్ చేయడం |
| `q-nav-builder` | Nested dropdown తో నాలుగు-అంశాల ప్రాథమిక నావిగేషన్ మెనూను సృష్టించడం |
| `q-options-roundtrip` | వర్డ్‌ప్రెస్ ఆప్షన్‌ల సెట్‌ను చదవడం, మార్చడం మరియు పునరుద్ధరించడం |
| `q-ability-install` | వివరించిన ఉపయోగ సందర్భానికి అత్యంత తగిన సామర్థ్య ప్యాక్‌ను కనుగొని ఇన్‌స్టాల్ చేయడం |

అదనపు ప్రశ్నలను `gratis_ai_agent_benchmark_questions` ఫిల్టర్ ద్వారా రిజిస్టర్ చేయవచ్చు.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

ఇన్‌స్టాల్ చేయబడిన సామర్థ్యాలు (abilities) మరియు సామర్థ్య ప్యాక్‌లను (ability packs) నిర్వహిస్తుంది.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

రిజిస్టర్ చేయబడిన అన్ని సామర్థ్యాలు, వాటి మూలం (కోర్ లేదా ప్యాక్), మరియు వాటి ప్రస్తుత స్థితిని జాబితా చేస్తుంది.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**ఎంపికలు (Options)**

| Option | Description |
|---|---|
| `--format=<format>` | అవుట్‌పుట్ ఫార్మాట్: `table` (డిఫాల్ట్), `json`, `csv` |

**ఉదాహరణ అవుట్‌పుట్ (Example output)**

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

రిజిస్ట్రీ నుండి ఒక సామర్థ్య ప్యాక్‌ను డౌన్‌లోడ్ చేసి యాక్టివేట్ చేస్తుంది.

```bash
wp gratis-ai-agent abilities install <slug>
```

**ఆర్గ్యుమెంట్లు (Arguments)**

| Argument | Description |
|---|---|
| `<slug>` | సామర్థ్య ప్యాక్ యొక్క ప్లగిన్ స్లగ్, ఉదా. `gratis-ai-agent-woocommerce` |

**ఉదాహరణ (Example)**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

ప్యాక్‌ను తొలగించకుండా నిర్దిష్ట సామర్థ్యాన్ని (ability) డిసేబుల్ చేస్తుంది. ఇచ్చిన సైట్‌లో ఏజెంట్ పరిధిని పరిమితం చేయడానికి ఇది ఉపయోగపడుతుంది.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**ఉదాహరణ (Example)**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

గతంలో డిసేబుల్ చేసిన సామర్థ్యాన్ని తిరిగి ఎనేబుల్ చేస్తుంది.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

ప్రస్తుత ఏజెంట్ కాన్ఫిగరేషన్ మరియు కనెక్టివిటీ స్థితిని ప్రదర్శిస్తుంది.

```bash
wp gratis-ai-agent status
```

**ఉదాహరణ అవుట్‌పుట్ (Example output)**

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

డిబగ్ లాగ్ నుండి ఇటీవలి ఏజెంట్ కార్యకలాపాలను ప్రదర్శిస్తుంది.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**ఎంపికలు (Options)**

| Option | Description |
|---|---|
| `--last=<n>` | చివరి N లాగ్ ఎంట్రీలను చూపండి. డిఫాల్ట్ `50` |
| `--level=<level>` | స్థాయి ద్వారా ఫిల్టర్ చేయండి: `info`, `warning`, `error` |
| `--ability=<ability>` | సామర్థ్యం పేరు ద్వారా ఫిల్టర్ చేయండి |

**ఉదాహరణ (Example)**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

ఏజెంట్ స్థితిని రీసెట్ చేస్తుంది: ఇంజెక్ట్ చేయబడిన CSSని క్లియర్ చేస్తుంది, ఏజెంట్-రిజిస్టర్ చేయబడిన CPTలు మరియు టాక్సానమీలను తొలగిస్తుంది, గ్లోబల్ స్టైల్స్‌ను రీసెట్ చేస్తుంది మరియు ఏజెంట్ యొక్క ఆప్షన్స్ కాష్‌ను ఖాళీ చేస్తుంది. ఇది ప్లగిన్ లేదా దాని సెట్టింగ్‌లను తొలగించదు.

```bash
wp gratis-ai-agent reset [--yes]
```

కన్ఫర్మేషన్ ప్రాంప్ట్‌ను దాటవేయడానికి `--yes` జోడించండి.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

అన్ని కమాండ్స్ విజయవంతమైతే `0` తో ఎగ్జిట్ అవుతాయి. నాన్-జీరో ఎగ్జిట్ కోడ్‌లు:

| Code | Meaning |
|---|---|
| `1` | సాధారణ లోపం (error message చూడండి) |
| `2` | ప్రొవైడర్ కనెక్టివిటీ వైఫల్యం |
| `3` | సామర్థ్యం కనుగొనబడలేదు (Ability not found) |
| `4` | బెంచ్‌మార్క్ ప్రశ్న కనుగొనబడలేదు (Benchmark question not found) |
