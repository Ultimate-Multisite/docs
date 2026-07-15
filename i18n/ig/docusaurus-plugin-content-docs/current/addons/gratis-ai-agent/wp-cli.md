---
title: Ntụaka WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Ntụaka WP-CLI

Gratis AI Agent na-abịa na ezinụlọ iwu `wp gratis-ai-agent` maka ime benchmark onye nnọchi ahụ, ijikwa ikike, na ịjụ ọkwa onye nnọchi site na ahịrị iwu. Iwu niile chọrọ WP-CLI 2.0 ma ọ bụ nke ka elu.

## Nwụnye {#installation}

A na-edebanye iwu WP-CLI aha na-akpaghị aka mgbe ngwa mgbakwunye ahụ dị ndụ. Nyochaa ya na:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Na-agba usoro benchmark nke Ikike Onye Nnọchi — nchịkọta prompts mgbagwoju anya, nwere ọtụtụ nzọụkwụ nke na-anwale akụkụ ikike niile. Jiri nke a nyochaa arụmọrụ model, tụnyere ndị na-eweta AI, ma ọ bụ kwado ngwugwu ikike tupu ibuga na mmepụta.

### Nkọwa ojiji {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Nhọrọ {#options}

| Nhọrọ | Nkọwa |
|---|---|
| `--question=<id>` | Gbaa otu ajụjụ benchmark site na ID kama usoro niile |
| `--provider=<provider>` | Gbanwee onye na-eweta AI ahaziri maka ọsọ a (dịka `anthropic`, `openai`) |
| `--model=<model>` | Gbanwee model ahaziri maka ọsọ a (dịka `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Ụdị mmepụta: `table` (ndabara), `json`, `csv` |
| `--save` | Chekwaa nsonaazụ benchmark na nchekwa data maka ntụnyere akụkọ ihe mere eme |

### Ihe atụ {#examples}

Gbaa usoro benchmark niile site na onye na-eweta na model dị ugbu a:

```bash
wp gratis-ai-agent benchmark
```

Gbaa otu ajụjụ (`q-restaurant-website`) ma wepụta ya dị ka JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Gbaa megide otu model kpọmkwem ma chekwaa nsonaazụ:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Mmepụta {#output}

Benchmark na-ewepụta otu ahịrị maka ajụjụ ọ bụla nwere ogidi ndị a:

| Ogidi | Nkọwa |
|---|---|
| `ID` | Ihe njirimara ajụjụ |
| `Description` | Nchịkọta dị mkpirikpi nke ọnọdụ benchmark |
| `Score` | Gafere/daa ma ọ bụ akara ọnụọgụ (0–100) |
| `Abilities Used` | Ndepụta ikike akpọrọ, kewara site na koma |
| `Tokens` | Mkpokọta tokens ejiri |
| `Duration` | Oge dịka elekere na sekọnd |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Ajụjụ Benchmark {#benchmark-questions}

Usoro ndabara gụnyere:

| ID | Ọnọdụ |
|---|---|
| `q-portfolio-site` | Mepụta Portfolio CPT nwere taxonomy Project Category ma debanye ụkpụrụ block aha |
| `q-restaurant-website` | Wuo webụsaịtị ụlọ oriri na ọṅụṅụ zuru ezu nwere menu CPT, fọm ndokwa, na ngagharị |
| `q-dark-mode-theme` | Tinye preset imewe dark-mode ma tinye agba brand |
| `q-nav-builder` | Mepụta menu ngagharị isi nwere ihe anọ na dropdown dị n’ime |
| `q-options-roundtrip` | Gụọ, gbanwee, ma weghachite otu setị nke nhọrọ WordPress |
| `q-ability-install` | Chọpụta ma wụnye ngwugwu ikike kacha dabara adaba maka ojiji akọwara |

Enwere ike idebanye ajụjụ ndị ọzọ aha site na nzacha `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Na-ejikwa ikike arụnyere na ngwugwu ikike.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Na-edepụta ikike niile edebanyere aha, isi mmalite ha (isi ma ọ bụ ngwugwu), na ọkwa ha dị ugbu a.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Nhọrọ**

| Nhọrọ | Nkọwa |
|---|---|
| `--format=<format>` | Ụdị mmepụta: `table` (ndabara), `json`, `csv` |

**Mmepụta ihe atụ**

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

Na-ebudata ma na-eme ka ngwugwu ikike sitere na registry rụọ ọrụ.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arụmụka**

| Arụmụka | Nkọwa |
|---|---|
| `<slug>` | Slug ngwa mgbakwunye nke ngwugwu ikike, dịka `gratis-ai-agent-woocommerce` |

**Ihe atụ**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Na-eme ka otu ikike kpọmkwem ghara ịrụ ọrụ na-ewepụghị ngwugwu ahụ. Ọ bara uru maka ịkpa oke obosara ọrụ onye nnọchi na saịtị enyere.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Ihe atụ**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Na-eme ka ikike agbanyụrụbu rụọ ọrụ ọzọ.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Na-egosi nhazi onye nnọchi dị ugbu a na ọkwa njikọta.

```bash
wp gratis-ai-agent status
```

**Mmepụta ihe atụ**

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

Na-egosi ọrụ onye nnọchi mere na nso nso a site na log nchọpụta nsogbu.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Nhọrọ**

| Nhọrọ | Nkọwa |
|---|---|
| `--last=<n>` | Gosi ndekọ log N ikpeazụ. Ndabara `50` |
| `--level=<level>` | Nyochaa site na level: `info`, `warning`, `error` |
| `--ability=<ability>` | Nyochaa site na aha ikike |

**Ihe atụ**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Na-emegharị ọnọdụ agent: na-ehichapụ CSS etinyere, na-ewepụ CPTs na taxonomies agent debanyere, na-emegharị styles zuru ụwa ọnụ, ma na-ekpochapụ cache nhọrọ agent. Ọ naghị ewepụ mgbakwunye ahụ ma ọ bụ ntọala ya.

```bash
wp gratis-ai-agent reset [--yes]
```

Tinye `--yes` iji gafere arịrịọ nkwenye.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Koodu Ọpụpụ {#exit-codes}

Iwu niile na-apụta `0` mgbe ihe gara nke ọma. Koodu ọpụpụ ndị na-abụghị efu:

| Koodu | Ihe ọ pụtara |
|---|---|
| `1` | Njehie izugbe (lee ozi njehie) |
| `2` | Ọdịda njikọ provider |
| `3` | Ahụghị ikike |
| `4` | Ahụghị ajụjụ benchmark |
