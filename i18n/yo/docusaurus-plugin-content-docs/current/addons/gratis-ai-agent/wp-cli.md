---
title: Ìtọ́kasí WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Ìtọ́kasí WP-CLI

Gratis AI Agent ní ìdílé àṣẹ `wp gratis-ai-agent` fún lílo benchmark aṣojú náà, ṣíṣàkóso àwọn agbára, àti bíbéèrè ipò aṣojú láti laini àṣẹ. Gbogbo àwọn àṣẹ nílò WP-CLI 2.0 tàbí tó ga jù bẹ́ẹ̀ lọ.

## Fífìsípò {#installation}

Àwọn àṣẹ WP-CLI ni a forúkọsílẹ̀ laifọwọyi nígbà tí plugin bá ń ṣiṣẹ́. Ṣàyẹ̀wò pẹ̀lú:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Ó ń ṣiṣẹ́ akójọpọ̀ benchmark Agent Capabilities — àkójọpọ̀ àwọn prompt tó nira, tó ní ìgbésẹ̀ púpọ̀, tí ó ń dán gbogbo àgbègbè agbára wò. Lò èyí láti ṣe ìyẹ̀wò iṣẹ́ model, fi àwọn AI provider wé ara wọn, tàbí jẹ́rìí sí àwọn pack agbára kí o tó fi wọ́n sí production.

### Àkótán {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Àwọn aṣàyàn {#options}

| Aṣàyàn | Àpèjúwe |
|---|---|
| `--question=<id>` | Ṣiṣẹ́ ìbéèrè benchmark kan ṣoṣo nípasẹ̀ ID dípò gbogbo akójọpọ̀ |
| `--provider=<provider>` | Rọ́pò AI provider tí a ti ṣètò fún ìṣiṣẹ́ yìí (fún àpẹẹrẹ `anthropic`, `openai`) |
| `--model=<model>` | Rọ́pò model tí a ti ṣètò fún ìṣiṣẹ́ yìí (fún àpẹẹrẹ `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Ọ̀nà àbájáde: `table` (àiyédèrùn), `json`, `csv` |
| `--save` | Fi àwọn èsì benchmark pamọ́ sínú ibi ìpamọ́ dátà fún fífi wé ìtàn àtijọ́ |

### Àwọn àpẹẹrẹ {#examples}

Ṣiṣẹ́ gbogbo akójọpọ̀ benchmark pẹ̀lú provider àti model tó wà lọ́wọ́lọ́wọ́:

```bash
wp gratis-ai-agent benchmark
```

Ṣiṣẹ́ ìbéèrè kan ṣoṣo (`q-restaurant-website`) kí o sì mú àbájáde jáde gẹ́gẹ́ bí JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Ṣiṣẹ́ sí model kan pàtó kí o sì fi àwọn èsì pamọ́:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Àbájáde {#output}

Benchmark máa ń mú ìlà kan jáde fún ìbéèrè kọ̀ọ̀kan pẹ̀lú àwọn kólọ́ọ̀mù wọ̀nyí:

| Kólọ́ọ̀mù | Àpèjúwe |
|---|---|
| `ID` | Ìdánimọ̀ ìbéèrè |
| `Description` | Àkótán kúkúrú ti ipò benchmark |
| `Score` | Ìwọ̀n kọjá/kùnà tàbí ìwọ̀n nọ́mbà (0–100) |
| `Abilities Used` | Àtòkọ àwọn agbára tí a pè, tí comma yà sọ́tọ̀ |
| `Tokens` | Àpapọ̀ tokens tí a lò |
| `Duration` | Àkókò wall-clock ní ìṣẹ́jú-ààyá |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Àwọn ìbéèrè Benchmark {#benchmark-questions}

Akójọpọ̀ àiyédèrùn ní:

| ID | Ipò |
|---|---|
| `q-portfolio-site` | Ṣẹ̀dá CPT Portfolio kan pẹ̀lú taxonomy Project Category kí o sì forúkọsílẹ̀ block pattern kan |
| `q-restaurant-website` | Kọ́ website ilé oúnjẹ kan ní kíkún pẹ̀lú CPT menu, fọ́ọ̀mù ìfọwọ́síbi, àti navigation |
| `q-dark-mode-theme` | Lo preset apẹrẹ dark-mode kí o sì fi àwọn àwọ̀ brand sínú rẹ̀ |
| `q-nav-builder` | Ṣẹ̀dá menu navigation àkọ́kọ́ tó ní ohun mẹ́rin pẹ̀lú dropdown tó wà nínú rẹ̀ |
| `q-options-roundtrip` | Kà, ṣàtúnṣe, kí o sì dá àkójọpọ̀ àwọn aṣàyàn WordPress padà |
| `q-ability-install` | Ṣàwárí kí o sì fi pack agbára tó bá yẹ jù lọ sílẹ̀ fún ọ̀nà lílo tí a ṣàpèjúwe |

A lè forúkọsílẹ̀ àwọn ìbéèrè àfikún nípasẹ̀ filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Ó ń ṣàkóso àwọn agbára àti àwọn pack agbára tí a ti fi sílẹ̀.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Ó ń ṣe àtòkọ gbogbo àwọn agbára tí a forúkọsílẹ̀, orísun wọn (core tàbí pack), àti ipò wọn lọ́wọ́lọ́wọ́.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Àwọn aṣàyàn**

| Aṣàyàn | Àpèjúwe |
|---|---|
| `--format=<format>` | Ọ̀nà àbájáde: `table` (àiyédèrùn), `json`, `csv` |

**Àpẹẹrẹ àbájáde**

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

Ó ń gba pack agbára kan láti registry kí o sì mu ṣiṣẹ́.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Àwọn ariyanjiyan**

| Ariyanjiyan | Àpèjúwe |
|---|---|
| `<slug>` | Plugin slug ti pack agbára náà, fún àpẹẹrẹ `gratis-ai-agent-woocommerce` |

**Àpẹẹrẹ**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Ó ń dá agbára kan pàtó dúró láì yọ pack náà kúrò. Ó wúlò fún dídín àgbègbè iṣẹ́ aṣojú kù lórí site kan.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Àpẹẹrẹ**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Ó tún ń mu agbára kan tí a ti dá dúró tẹ́lẹ̀ ṣiṣẹ́.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Ó ń fi ìṣètò aṣojú lọ́wọ́lọ́wọ́ àti ipò ìsopọ̀ hàn.

```bash
wp gratis-ai-agent status
```

**Àpẹẹrẹ àbájáde**

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

Ó ń fi ìṣẹ̀lẹ̀ aṣojú àìpẹ́ hàn láti debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Àwọn aṣàyàn**

| Aṣàyàn | Àpèjúwe |
|---|---|
| `--last=<n>` | Fi àwọn ìkọ̀wé log N tó kẹ́yìn hàn. Àiyédèrùn `50` |
| `--level=<level>` | Sẹ́ẹ̀lì nípasẹ̀ ipele: `info`, `warning`, `error` |
| `--ability=<ability>` | Sẹ́ẹ̀lì nípasẹ̀ orúkọ agbára |

**Àpẹẹrẹ**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ó ń tún ipò aṣojú ṣètò: ó ń pa CSS tí a fi sínú rẹ̀ rẹ́, ó ń yọ àwọn CPT àti taxonomy tí aṣojú forúkọsílẹ̀ kúrò, ó ń tún global styles ṣètò, ó sì ń sọ cache àwọn aṣàyàn aṣojú di òfo. Kò yọ plugin tàbí àwọn setting rẹ̀ kúrò.

```bash
wp gratis-ai-agent reset [--yes]
```

Ṣàfikún `--yes` láti fo prompt ìmúdájú kọjá.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Àwọn kóòdù ìjáde {#exit-codes}

Gbogbo àwọn àṣẹ máa ń jáde pẹ̀lú `0` nígbà tí wọ́n ṣàṣeyọrí. Àwọn kóòdù ìjáde tí kì í ṣe odo:

| Kóòdù | Ìtumọ̀ |
|---|---|
| `1` | Àṣìṣe gbogbogbò (wo ìfiránṣẹ́ àṣìṣe) |
| `2` | Ìkùnà ìsopọ̀ provider |
| `3` | A kò rí agbára |
| `4` | A kò rí ìbéèrè benchmark |
