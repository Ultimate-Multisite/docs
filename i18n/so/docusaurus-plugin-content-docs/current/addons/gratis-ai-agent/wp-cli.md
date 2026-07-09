---
title: Tixraaca WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Tixraaca WP-CLI {#wp-cli-reference}

Gratis AI Agent waxa uu la yimaadaa qoys amarro `wp gratis-ai-agent` ah oo loogu talagalay cabbiridda agent-ka, maareynta awoodaha, iyo weydiinta xaaladda agent-ka laga bilaabo command line. Dhammaan amarradu waxay u baahan yihiin WP-CLI 2.0 ama ka sarreeya.

## Rakibid {#installation}

Amarrada WP-CLI si toos ah ayaa loo diiwaangeliyaa marka plugin-ku firfircoon yahay. Ku xaqiiji:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Waxa uu socodsiiyaa xirmada cabbirka Awoodaha Agent-ka — koox prompts adag oo tallaabooyin badan leh kuwaas oo tijaabiya dusha awoodda oo dhan. U adeegso tan si aad u qiimeyso waxqabadka model-ka, u barbar dhigto bixiyeyaasha AI, ama u ansixiso xirmooyinka awoodaha ka hor inta aan loo dirin production.

### Dulmar {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Ikhtiyaarro {#options}

| Ikhtiyaar | Sharaxaad |
|---|---|
| `--question=<id>` | Socodsii hal su’aal cabbir oo keliya iyadoo la adeegsanayo ID halkii laga socodsiin lahaa xirmada oo dhan |
| `--provider=<provider>` | Ka dul qor bixiyaha AI ee la habeeyey socodsiintan (tusaale `anthropic`, `openai`) |
| `--model=<model>` | Ka dul qor model-ka la habeeyey socodsiintan (tusaale `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Qaabka soo saarista: `table` (default), `json`, `csv` |
| `--save` | Ku kaydi natiijooyinka cabbirka database-ka si loo barbar dhigo taariikh ahaan |

### Tusaalooyin {#examples}

Socodsii xirmada cabbirka oo dhan adigoo isticmaalaya bixiyaha iyo model-ka hadda jira:

```bash
wp gratis-ai-agent benchmark
```

Socodsii hal su’aal (`q-restaurant-website`) oo u soo saar sidii JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Ku socodsii model gaar ah oo kaydi natiijooyinka:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Soo saarid {#output}

Cabbirku waxa uu soo saaraa hal saf su’aal kasta oo leh tiirarkan soo socda:

| Tiir | Sharaxaad |
|---|---|
| `ID` | Aqoonsiga su’aasha |
| `Description` | Soo koobid gaaban oo ku saabsan xaaladda cabbirka |
| `Score` | Gudub/fashil ama dhibco tiro ah (0–100) |
| `Abilities Used` | Liis awoodaha la wacay ah oo kala-jaban hakad |
| `Tokens` | Wadarta tokens-ka la isticmaalay |
| `Duration` | Waqtiga wall-clock ee ilbiriqsiyo ah |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Su’aalaha Cabbirka {#benchmark-questions}

Xirmada default-ka ah waxa ku jira:

| ID | Xaalad |
|---|---|
| `q-portfolio-site` | Abuur Portfolio CPT leh taxonomy Project Category ah oo diiwaangeli block pattern |
| `q-restaurant-website` | Dhis website makhaayad oo buuxa oo leh menu CPT, foom ballansasho, iyo navigation |
| `q-dark-mode-theme` | Codso preset naqshad dark-mode ah oo geli midabada sumadda |
| `q-nav-builder` | Abuur menu navigation aasaasi ah oo afar shay leh, oo leh dropdown isku dhex jira |
| `q-options-roundtrip` | Akhri, wax ka beddel, oo soo celi koox ikhtiyaarrada WordPress ah |
| `q-ability-install` | Soo hel oo rakib xirmada awoodda ugu habboon ee loogu talagalay xaalad adeegsi oo la sharaxay |

Su’aalo dheeraad ah waxaa lagu diiwaangeli karaa filter-ka `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Waxa uu maareeyaa awoodaha iyo xirmooyinka awoodaha ee la rakibay.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Waxa uu taxaa dhammaan awoodaha la diiwaangaliyay, isha ay ka yimaadeen (core ama pack), iyo xaaladdooda hadda.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Ikhtiyaarro**

| Ikhtiyaar | Sharaxaad |
|---|---|
| `--format=<format>` | Qaabka soo saarista: `table` (default), `json`, `csv` |

**Tusaalaha soo saarista**

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

Waxa uu ka soo dejiyaa oo firfircooni geliyaa xirmo awood registry-ga.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Doodo**

| Dood | Sharaxaad |
|---|---|
| `<slug>` | Plugin slug-ka xirmada awoodda, tusaale `gratis-ai-agent-woocommerce` |

**Tusaale**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Waxa uu damiyaa awood gaar ah isaga oo aan ka saarin pack-ka. Waa waxtar marka la xaddidayo baaxadda agent-ka ee site la siiyay.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Tusaale**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Waxa uu dib u firfircooni geliyaa awood hore loo damiyay.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Waxa uu soo bandhigaa habaynta agent-ka hadda iyo xaaladda isku xirnaanta.

```bash
wp gratis-ai-agent status
```

**Tusaalaha soo saarista**

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

Waxa uu soo bandhigaa hawlihii agent-ka ee dhowaa kana yimid debug log-ka.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Ikhtiyaarro**

| Ikhtiyaar | Sharaxaad |
|---|---|
| `--last=<n>` | Muuji N-gii gelitaan log ee ugu dambeeyay. Default `50` |
| `--level=<level>` | Ku shaandhee heer: `info`, `warning`, `error` |
| `--ability=<ability>` | Ku shaandhee magaca awoodda |

**Tusaale**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Waxay dib u dejisaa xaaladda agent-ka: waxay nadiifisaa CSS la geliyay, ka saartaa CPTs iyo taxonomies uu agent-ku diiwaangeliyay, dib u dejisaa global styles, waxayna faaruqisaa cache-ka ikhtiyaarrada agent-ka. Kama saarto plugin-ka ama settings-kiisa.

```bash
wp gratis-ai-agent reset [--yes]
```

Ku dar `--yes` si aad uga booddo weydiinta xaqiijinta.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Dhammaan commands-ku waxay ku baxaan `0` marka ay guulaystaan. Exit codes aan eber ahayn:

| Code | Macne |
|---|---|
| `1` | Khalad guud (eeg fariinta khaladka) |
| `2` | Fashilka isku-xirnaanta provider-ka |
| `3` | Awood lama helin |
| `4` | Su'aasha benchmark lama helin |
