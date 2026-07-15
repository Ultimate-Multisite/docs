---
title: Tohutoro WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Tohutoro WP-CLI

Ka tukuna e Gratis AI Agent tētahi whānau whakahau `wp gratis-ai-agent` mō te ine taumata i te māngai, te whakahaere āheinga, me te ui i te tūnga māngai mai i te rārangi whakahau. Me whai WP-CLI 2.0, teitei ake rānei, ngā whakahau katoa.

## Tāutanga {#installation}

Ka rēhitatia aunoatia ngā whakahau WP-CLI ina hohe te plugin. Manatokohia mā:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Ka whakahaere i te huinga ine taumata Agent Capabilities — he huinga akiaki matatini, hikoinga-maha e whakamātau ana i te mata āheinga katoa. Whakamahia tēnei hei aromātai i te mahinga tauira, hei whakataurite i ngā kaiwhakarato AI, hei whakamana rānei i ngā mōkihi āheinga i mua i te tuku ki te whakaputanga.

### Whakarāpopototanga {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Kōwhiringa {#options}

| Kōwhiringa | Whakaahuatanga |
|---|---|
| `--question=<id>` | Whakahaerehia tētahi pātai ine taumata kotahi mā te ID, kaua ko te huinga katoa |
| `--provider=<provider>` | Whakakapia te kaiwhakarato AI kua whirihoratia mō tēnei whakahaerenga (hei tauira, `anthropic`, `openai`) |
| `--model=<model>` | Whakakapia te tauira kua whirihoratia mō tēnei whakahaerenga (hei tauira, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Hōputu putanga: `table` (taunoa), `json`, `csv` |
| `--save` | Tiakina ngā hua ine taumata ki te pātengi raraunga mō te whakataurite hītori |

### Tauira {#examples}

Whakahaerehia te huinga ine taumata katoa me te kaiwhakarato me te tauira o nāianei:

```bash
wp gratis-ai-agent benchmark
```

Whakahaerehia tētahi pātai kotahi (`q-restaurant-website`) ā, whakaputaina hei JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Whakahaerehia ki tētahi tauira motuhake, ā, tiakina ngā hua:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Putanga {#output}

Ka whakaputa te ine taumata i tētahi haupae mō ia pātai me ēnei tīwae:

| Tīwae | Whakaahuatanga |
|---|---|
| `ID` | Pūtautuhi pātai |
| `Description` | Whakarāpopototanga poto o te horopaki ine taumata |
| `Score` | Paahi/hē, kaute tau rānei (0–100) |
| `Abilities Used` | Rārangi āheinga i karangahia, kua whakawehea ki te piko |
| `Tokens` | Tapeke tokens i pau |
| `Duration` | Wā karaka pakitara ki ngā hēkona |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Ngā Pātai Ine Taumata {#benchmark-questions}

Kei roto i te huinga taunoa:

| ID | Horopaki |
|---|---|
| `q-portfolio-site` | Waihangatia tētahi Portfolio CPT me tētahi whakarōpūtanga Project Category, ā, rēhitatia tētahi tauira paraka |
| `q-restaurant-website` | Hangaia tētahi paetukutuku wharekai katoa me tētahi menu CPT, puka tāpui, me te whakaterenga |
| `q-dark-mode-theme` | Hoatu tētahi tautuhinga-hoahoa aratau-pōuri, ā, werohia ngā tae waitohu |
| `q-nav-builder` | Waihangatia tētahi tahua whakaterenga matua e whā ngā tūemi me tētahi takaiho kōhanga |
| `q-options-roundtrip` | Pānuitia, whakarerekētia, ā, whakahokia mai tētahi huinga kōwhiringa WordPress |
| `q-ability-install` | Kimihia, tāutatia hoki te mōkihi āheinga tino hāngai mō tētahi take whakamahi kua whakaahuatia |

Ka taea te rēhita pātai tāpiri mā te tātari `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Ka whakahaere i ngā āheinga me ngā mōkihi āheinga kua tāutatia.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Ka whakarārangi i ngā āheinga rēhita katoa, tō rātou pūtake (matua, mōkihi rānei), me tō rātou tūnga o nāianei.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Kōwhiringa**

| Kōwhiringa | Whakaahuatanga |
|---|---|
| `--format=<format>` | Hōputu putanga: `table` (taunoa), `json`, `csv` |

**Putanga tauira**

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

Ka tikiake, ka whakahohe hoki i tētahi mōkihi āheinga mai i te rēhita.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Tohenga**

| Tohenga | Whakaahuatanga |
|---|---|
| `<slug>` | Slug plugin o te mōkihi āheinga, hei tauira `gratis-ai-agent-woocommerce` |

**Tauira**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Ka mono i tētahi āheinga motuhake me te kore tango i te mōkihi. He whaihua mō te whakawhāiti i te whānuitanga o te māngai ki tētahi paetukutuku kua whakaritea.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Tauira**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Ka whakahohe anō i tētahi āheinga i monokia i mua.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Ka whakaatu i te whirihoranga māngai o nāianei me te tūnga tūhonohono.

```bash
wp gratis-ai-agent status
```

**Putanga tauira**

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

Ka whakaatu i ngā mahi māngai nō nā tata nei mai i te rangitaki patuiro.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Kōwhiringa**

| Kōwhiringa | Whakamārama |
|---|---|
| `--last=<n>` | Whakaaturia ngā tāurunga rangitaki N whakamutunga. Taunoa `50` |
| `--level=<level>` | Tātari mā te taumata: `info`, `warning`, `error` |
| `--ability=<ability>` | Tātari mā te ingoa āheinga |

**Tauira**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ka tautuhi anō i te tūnga o te kaiāwhina: ka whakawātea i te CSS kua werohia, ka tango i ngā CPTs me ngā whakarōpūtanga i rēhitatia e te kaiāwhina, ka tautuhi anō i ngā kāhua whānui, ā, ka whakawātea i te keteroki kōwhiringa a te kaiāwhina. Kāore e tango i te monomai, i ōna tautuhinga rānei.

```bash
wp gratis-ai-agent reset [--yes]
```

Tāpirihia `--yes` kia hipa i te tohu whakaū.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Ngā Waehere Puta {#exit-codes}

Ka puta ngā whakahau katoa me te `0` ina angitu. Ngā waehere puta ehara i te kore:

| Waehere | Tikanga |
|---|---|
| `1` | Hapa whānui (tirohia te karere hapa) |
| `2` | Rahunga tūhononga kaiwhakarato |
| `3` | Kāore i kitea te āheinga |
| `4` | Kāore i kitea te pātai ine-paerewa |
