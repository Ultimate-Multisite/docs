---
title: WP-CLI റഫറൻസ്
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI റഫറൻസ്

Gratis AI Agent, ഏജന്റിനെ ബെഞ്ച്മാർക്ക് ചെയ്യാനും, അതിൻ്റെ കഴിവുകൾ (abilities) കൈകാര്യം ചെയ്യാനും, കമാൻഡ് ലൈനിൽ നിന്ന് ഏജൻ്റിൻ്റെ സ്റ്റാറ്റസ് ക്വറി ചെയ്യാനും വേണ്ടി `wp gratis-ai-agent` എന്ന കമാൻഡ് കുടുംബം നൽകുന്നു. എല്ലാ കമാൻഡുകൾക്കും WP-CLI 2.0 അല്ലെങ്കിൽ അതിലും ഉയർന്ന പതിപ്പ് ആവശ്യമാണ്.

## ഇൻസ്റ്റാളേഷൻ {#installation}

പ്ലഗിൻ ആക്റ്റീവ് ആകുമ്പോൾ WP-CLI കമാൻഡുകൾ ഓട്ടോമാറ്റിക്കായി രജിസ്റ്റർ ചെയ്യപ്പെടും. ഇത് പരിശോധിക്കാൻ:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

ഏജൻ്റിൻ്റെ എല്ലാ കഴിവുകളും ഉപയോഗിക്കുന്ന ഒരു കൂട്ടം സങ്കീർണ്ണമായ, പല ഘട്ടങ്ങളുള്ള പ്രോംപ്റ്റുകൾ ഉൾക്കൊള്ളുന്ന 'Agent Capabilities benchmark suite' ഇത് പ്രവർത്തിപ്പിക്കുന്നു. മോഡലിൻ്റെ പ്രകടനം വിലയിരുത്താനും, വിവിധ AI പ്രൊവൈഡർമാരെ താരതമ്യം ചെയ്യാനും, അല്ലെങ്കിൽ പ്രൊഡക്ഷനിൽ വിന്യസിക്കുന്നതിന് മുമ്പ് കഴിവ് പാക്കുകൾ (ability packs) സാധൂകരിക്കാനും ഇത് ഉപയോഗിക്കുക.

### സംഗ്രഹം (Synopsis) {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### ഓപ്ഷനുകൾ (Options) {#options}

| ഓപ്ഷൻ | വിവരണം |
|---|---|
| `--question=<id>` | മുഴുവൻ സ്യൂട്ടുമല്ല, പകരം ID ഉപയോഗിച്ച് ഒരു ബഞ്ച്മാർക്ക് ചോദ്യം പ്രവർത്തിപ്പിക്കുക |
| `--provider=<provider>` | ഈ റണ്ണിനായി കോൺഫിഗർ ചെയ്ത AI പ്രൊവൈഡറെ മാറ്റുക (ഉദാഹരണത്തിന്: `anthropic`, `openai`) |
| `--model=<model>` | ഈ റണ്ണിനായി കോൺഫിഗർ ചെയ്ത മോഡലിനെ മാറ്റുക (ഉദാഹരണത്തിന്: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | ഔട്ട്പുട്ട് ഫോർമാറ്റ്: `table` (ഡിഫോൾട്ട്), `json`, `csv` |
| `--save` | ചരിത്രപരമായ താരതമ്യത്തിനായി ബഞ്ച്മാർക്ക് ഫലങ്ങൾ ഡാറ്റാബേസിൽ സേവ് ചെയ്യുക |

### ഉദാഹരണങ്ങൾ (Examples) {#examples}

നിലവിലുള്ള പ്രൊവൈഡറും മോഡലും ഉപയോഗിച്ച് മുഴുവൻ ബഞ്ച്മാർക്ക് സ്യൂട്ടും പ്രവർത്തിപ്പിക്കുക:

```bash
wp gratis-ai-agent benchmark
```

ഒരു ചോദ്യം മാത്രം (`q-restaurant-website`) പ്രവർത്തിപ്പിച്ച് JSON ആയി ഔട്ട്പുട്ട് ചെയ്യുക:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

ഒരു പ്രത്യേക മോഡലിനെതിരെ പ്രവർത്തിപ്പിച്ച് ഫലങ്ങൾ സേവ് ചെയ്യുക:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### ഔട്ട്പുട്ട് (Output) {#output}

ബഞ്ച്മാർക്ക് ഓരോ ചോദ്യത്തിനും ഒരു വരിയായി, താഴെ പറയുന്ന കോളങ്ങളോടെ ഔട്ട്പുട്ട് നൽകുന്നു:

| കോളം | വിവരണം |
|---|---|
| `ID` | ചോദ്യത്തിൻ്റെ ഐഡൻ്റിഫയർ |
| `Description` | ബഞ്ച്മാർക്ക് സാഹചര്യത്തിൻ്റെ ചെറിയ സംഗ്രഹം |
| `Score` | പാസ്/ഫെയിൽ അല്ലെങ്കിൽ സംഖ്യാപരമായ സ്കോർ (0–100) |
| `Abilities Used` | ഉപയോഗിച്ച കഴിവുകളുടെ കോമ-വിഭിന്നമായ ലിസ്റ്റ് |
| `Tokens` | മൊത്തം ഉപയോഗിച്ച ടോക്കണുകൾ |
| `Duration` | സെക്കൻഡുകളിലുള്ള വാൾ-ക്ലോക്ക് സമയം |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### ബഞ്ച്മാർക്ക് ചോദ്യങ്ങൾ (Benchmark Questions) {#benchmark-questions}

ഡിഫോൾട്ട് സ്യൂട്ടിൽ ഉൾപ്പെടുന്നത്:

| ID | സാഹചര്യം |
|---|---|
| `q-portfolio-site` | ഒരു പ്രോജക്റ്റ് കാറ്റഗറി ടാക്സോണമി ഉപയോഗിച്ച് ഒരു പോർട്ട്‌ഫോളിയോ CPT സൃഷ്ടിക്കുകയും ഒരു ബ്ലോക്ക് പാറ്റേൺ രജിസ്റ്റർ ചെയ്യുകയും ചെയ്യുക |
| `q-restaurant-website` | ഒരു മെനു CPT, ബുക്കിംഗ് ഫോം, നാവിഗേഷൻ എന്നിവ ഉപയോഗിച്ച് ഒരു മുഴുവൻ റെസ്റ്റോറൻ്റ് വെബ്സൈറ്റും നിർമ്മിക്കുക |
| `q-dark-mode-theme` | ഒരു ഡാർക്ക്-മോഡ് ഡിസൈൻ പ്രീസെറ്റ് പ്രയോഗിക്കുകയും ബ്രാൻഡ് കളറുകൾ ഇൻജക്റ്റ് ചെയ്യുകയും ചെയ്യുക |
| `q-nav-builder` | ഒരു നെസ്റ്റഡ് ഡ്രോഡൗൺ സഹിതം നാല് ഇനങ്ങളുള്ള ഒരു പ്രൈമറി നാവിഗേഷൻ മെനു സൃഷ്ടിക്കുക |
| `q-options-roundtrip` | ഒരു കൂട്ടം WordPress ഓപ്ഷനുകൾ വായിക്കുക, മാറ്റുക, പുനഃസ്ഥാപിക്കുക |
| `q-ability-install` | വിവരിച്ച ഉപയോഗ കേസിനായി ഏറ്റവും അനുയോജ്യമായ കഴിവ് പാക്ക് കണ്ടെത്തുകയും ഇൻസ്റ്റാൾ ചെയ്യുകയും ചെയ്യുക |

`gratis_ai_agent_benchmark_questions` എന്ന ഫിൽട്ടർ വഴി അധിക ചോദ്യങ്ങൾ രജിസ്റ്റർ ചെയ്യാവുന്നതാണ്.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

ഇൻസ്റ്റാൾ ചെയ്ത കഴിവുകളും (abilities) കഴിവ് പാക്കുകളും (ability packs) കൈകാര്യം ചെയ്യുന്നു.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

രജിസ്റ്റർ ചെയ്ത എല്ലാ കഴിവുകളും, അവയുടെ സ്രോതസ്സ് (core അല്ലെങ്കിൽ pack), നിലവിലെ സ്റ്റാറ്റസ് എന്നിവ ലിസ്റ്റ് ചെയ്യുന്നു.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**ഓപ്ഷനുകൾ (Options)**

| ഓപ്ഷൻ | വിവരണം |
|---|---|
| `--format=<format>` | ഔട്ട്പുട്ട് ഫോർമാറ്റ്: `table` (ഡിഫോൾട്ട്), `json`, `csv` |

**ഉദാഹരണ ഔട്ട്പുട്ട് (Example output)**

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

റെജിസ്ട്രിയിൽ നിന്ന് ഒരു കഴിവ് പാക്ക് ഡൗൺലോഡ് ചെയ്യുകയും ആക്റ്റീവേറ്റ് ചെയ്യുകയും ചെയ്യുന്നു.

```bash
wp gratis-ai-agent abilities install <slug>
```

**ആർഗ്യുമെൻ്റുകൾ (Arguments)**

| ആർഗ്യുമെൻ്റ് | വിവരണം |
|---|---|
| `<slug>` | കഴിവ് പാക്കിൻ്റെ പ്ലഗിൻ സ്ലഗ്, ഉദാഹരണത്തിന്: `gratis-ai-agent-woocommerce` |

**ഉദാഹരണം (Example)**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

പാക്ക് നീക്കം ചെയ്യാതെ ഒരു പ്രത്യേക കഴിവ് (ability) ഡിസേബിൾ ചെയ്യുന്നു. ഒരു പ്രത്യേക സൈറ്റിൽ ഏജൻ്റിൻ്റെ പ്രവർത്തന പരിധി നിയന്ത്രിക്കാൻ ഇത് ഉപകാരപ്രദമാണ്.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**ഉദാഹരണം (Example)**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

നേരത്തെ ഡിസേബിൾ ചെയ്ത ഒരു കഴിവ് വീണ്ടും പ്രവർത്തനക്ഷമമാക്കുന്നു.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

നിലവിലെ ഏജൻ്റ് കോൺഫിഗറേഷനും കണക്റ്റിവിറ്റി സ്റ്റാറ്റസും പ്രദർശിപ്പിക്കുന്നു.

```bash
wp gratis-ai-agent status
```

**ഉദാഹരണ ഔട്ട്പുട്ട് (Example output)**

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

ഡീബഗ് ലോഗിൽ നിന്നുള്ള സമീപകാല ഏജൻ്റ് പ്രവർത്തനങ്ങൾ പ്രദർശിപ്പിക്കുന്നു.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**ഓപ്ഷനുകൾ (Options)**

| ഓപ്ഷൻ | വിവരണം |
|---|---|
| `--last=<n>` | അവസാനത്തെ N ലോഗ് എൻട്രികൾ കാണിക്കുക. ഡിഫോൾട്ട് `50` |
| `--level=<level>` | ലെവൽ അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക: `info`, `warning`, `error` |
| `--ability=<ability>` | കഴിവ് (ability) പേര് അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക |

**ഉദാഹരണം (Example)**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

ഏജൻ്റിൻ്റെ സ്റ്റേറ്റ് റീസെറ്റ് ചെയ്യുന്നു: ഇൻജക്റ്റ് ചെയ്ത CSS ക്ലിയർ ചെയ്യുന്നു, ഏജൻ്റ് രജിസ്റ്റർ ചെയ്ത CPT-കളും ടാക്സോണമികളും നീക്കം ചെയ്യുന്നു, ഗ്ലോബൽ സ്റ്റൈലുകൾ റീസെറ്റ് ചെയ്യുന്നു, ഏജൻ്റിൻ്റെ ഓപ്ഷൻസ് കാഷെ (options cache) ഒഴിഞ്ഞുമാറ്റുന്നു. ഇത് പ്ലഗിൻ അഥവാ അതിൻ്റെ സെറ്റിംഗുകൾ നീക്കം ചെയ്യുന്നില്ല.

```bash
wp gratis-ai-agent reset [--yes]
```

സ്ഥിരീകരണ പ്രോംപ്റ്റ് ഒഴിവാക്കാൻ `--yes` ചേർക്കുക.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

എല്ലാ കമാൻഡുകളും വിജയിച്ചാൽ `0` എന്ന് എക്സിറ്റ് ചെയ്യും. പൂജ്യമല്ലാത്ത എക്സിറ്റ് കോഡുകൾ:

| കോഡ് | അർത്ഥം |
|---|---|
| `1` | പൊതുവായ പിശക് (പിശക് സന്ദേശം കാണുക) |
| `2` | പ്രൊവൈഡർ കണക്റ്റിവിറ്റി പരാജയം |
| `3` | കഴിവ് കണ്ടെത്താൻ കഴിഞ്ഞില്ല |
| `4` | ബഞ്ച്മാർക്ക് ചോദ്യം കണ്ടെത്താൻ കഴിഞ്ഞില്ല |
