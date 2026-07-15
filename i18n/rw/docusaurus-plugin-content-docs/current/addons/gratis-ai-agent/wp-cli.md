---
title: Ibyifashishwa bya WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Indango ya WP-CLI

Gratis AI Agent izana itsinda ry’amabwiriza ya `wp gratis-ai-agent` yo kugerageza imikorere y’agent, gucunga ubushobozi, no kubaza imimerere y’agent ukoresheje umurongo w’amabwiriza. Amabwiriza yose asaba WP-CLI 2.0 cyangwa irenzeho.

## Gushyiraho {#installation}

Amabwiriza ya WP-CLI yiyandikisha mu buryo bwikora iyo plugin ikora. Bigenzure ukoresheje:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Ikoresha itsinda ry’ibigeragezo bya Agent Capabilities — urutonde rw’ibisabo bikomeye, bifite intambwe nyinshi bigerageza igice cyose cy’ubushobozi. Koresha ibi mu gusuzuma imikorere ya model, kugereranya abatanga AI, cyangwa kwemeza ability packs mbere yo kubishyira mu mikorere nyayo.

### Incamake y’imikoreshereze {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Amahitamo {#options}

| Ihitamo | Ibisobanuro |
|---|---|
| `--question=<id>` | Koresha ikibazo kimwe cya benchmark hakurikijwe ID aho gukoresha itsinda ryose |
| `--provider=<provider>` | Simbuza utanga AI wateganyijwe kuri iki gikorwa (urugero: `anthropic`, `openai`) |
| `--model=<model>` | Simbuza model yateganyijwe kuri iki gikorwa (urugero: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Imiterere y’ibisohoka: `table` (isanzwe), `json`, `csv` |
| `--save` | Bika ibisubizo bya benchmark muri database kugira ngo bizagereranywe n’iby’igihe cyashize |

### Ingero {#examples}

Koresha itsinda ryose rya benchmark hamwe n’utanga serivisi na model biriho ubu:

```bash
wp gratis-ai-agent benchmark
```

Koresha ikibazo kimwe (`q-restaurant-website`) maze usohore nka JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Koresha kuri model yihariye maze ubike ibisubizo:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Ibisohoka {#output}

Benchmark isohora umurongo umwe kuri buri kibazo, ifite inkingi zikurikira:

| Inkingi | Ibisobanuro |
|---|---|
| `ID` | Ikiranga ikibazo |
| `Description` | Incamake ngufi y’imimerere ya benchmark |
| `Score` | Yatsinze/yatsinzwe cyangwa amanota y’umubare (0–100) |
| `Abilities Used` | Urutonde rw’ubushobozi bwahamagajwe, butandukanyijwe na koma |
| `Tokens` | Umubare wose wa tokens zakoreshejwe |
| `Duration` | Igihe cyafashwe mu masegonda |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Ibibazo bya Benchmark {#benchmark-questions}

Itsinda risanzwe ririmo:

| ID | Imimerere |
|---|---|
| `q-portfolio-site` | Kurema Portfolio CPT ifite taxonomy ya Project Category no kwandikisha block pattern |
| `q-restaurant-website` | Kubaka urubuga rwuzuye rwa resitora rufite menu CPT, ifishi yo kubika umwanya, n’iyoboranzira |
| `q-dark-mode-theme` | Gushyiraho design preset ya dark-mode no kwinjizamo amabara y’ikirango |
| `q-nav-builder` | Kurema menu y’iyoboranzira nyamukuru ifite ibintu bine hamwe na dropdown irimo ibindi imbere |
| `q-options-roundtrip` | Gusoma, guhindura, no gusubiza uko byari bimeze itsinda rya options za WordPress |
| `q-ability-install` | Kuvumbura no gushyiraho ability pack ikwiriye kurusha izindi ku mikoreshereze yasobanuwe |

Ibibazo by’inyongera bishobora kwandikishwa binyuze muri filter ya `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Icunga ubushobozi n’ability packs byashyizweho.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Igaragaza ubushobozi bwose bwandikishijwe, inkomoko yabwo (core cyangwa pack), n’imimerere yabwo iriho ubu.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Amahitamo**

| Ihitamo | Ibisobanuro |
|---|---|
| `--format=<format>` | Imiterere y’ibisohoka: `table` (isanzwe), `json`, `csv` |

**Urugero rw’ibisohoka**

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

Ikurura kandi igakoresha ability pack ivuye muri registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenti**

| Argumenti | Ibisobanuro |
|---|---|
| `<slug>` | Plugin slug ya ability pack, urugero `gratis-ai-agent-woocommerce` |

**Urugero**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Ihagarika ubushobozi bwihariye itakuyeho pack. Ni ingirakamaro mu kugabanya urwego agent yemerewe gukoreramo ku rubuga runaka.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Urugero**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Yongera gukoresha ubushobozi bwari bwarahagaritswe mbere.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Igaragaza igenamiterere rya agent ririho ubu n’imimerere y’ihuzanzira.

```bash
wp gratis-ai-agent status
```

**Urugero rw’ibisohoka**

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

Igaragaza ibikorwa bya vuba bya agent bivuye muri debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Amahitamo**

| Ihitamo | Ibisobanuro |
|---|---|
| `--last=<n>` | Erekana inyandiko N za nyuma zo muri log. Mburabuzi ni `50` |
| `--level=<level>` | Yungurura hakurikijwe urwego: `info`, `warning`, `error` |
| `--ability=<ability>` | Yungurura hakurikijwe izina ry'ubushobozi |

**Urugero**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Isubiza imiterere ya agent uko yari isanzwe: isiba CSS yinjijwemo, ikuraho CPTs na taxonomies byanditswe na agent, isubiza global styles uko zari zisanzwe, kandi igasiba options cache ya agent. Ntikuraho plugin cyangwa igenamiterere ryayo.

```bash
wp gratis-ai-agent reset [--yes]
```

Ongeraho `--yes` kugira ngo usimbuke ikibazo cyo kwemeza.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Codes zo gusohoka {#exit-codes}

Amabwiriza yose asohoka na `0` iyo byagenze neza. Codes zo gusohoka zitari zero:

| Code | Ibisobanuro |
|---|---|
| `1` | Ikosa rusange (reba ubutumwa bw'ikosa) |
| `2` | Kunanirwa kw'ihuza rya provider |
| `3` | Ubushobozi ntibwabonywe |
| `4` | Ikibazo cya benchmark nticyabonetse |
