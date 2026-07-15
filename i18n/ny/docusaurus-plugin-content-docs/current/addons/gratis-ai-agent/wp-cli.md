---
title: Cholozera cha WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Buku la WP-CLI

Gratis AI Agent imabwera ndi banja la malamulo a `wp gratis-ai-agent` oyerekezera magwiridwe a wothandizira, kusamalira luso, ndi kufunsa momwe wothandizira alili kuchokera pa mzere wa malamulo. Malamulo onse amafuna WP-CLI 2.0 kapena yapamwamba.

## Kuyika {#installation}

Malamulo a WP-CLI amalembetsedwa okha plugin ikakhala yogwira. Tsimikizani ndi:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Imayendetsa gulu la mayeso a Agent Capabilities — mndandanda wa ma prompt ovuta, a magawo angapo omwe amayesa malo onse a luso. Gwiritsani ntchito izi kuti muwunikire magwiridwe a model, kuyerekezera opereka AI, kapena kutsimikizira mapaketi a luso musanatumize ku production.

### Chidule {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Zosankha {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Yendetsani funso limodzi la benchmark pogwiritsa ntchito ID m'malo mwa gulu lonse |
| `--provider=<provider>` | Sinthani wopereka AI wokonzedwa pa kuthamanga kumeneku (mwachitsanzo `anthropic`, `openai`) |
| `--model=<model>` | Sinthani model yokonzedwa pa kuthamanga kumeneku (mwachitsanzo `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Mtundu wa zotuluka: `table` (wokhazikika), `json`, `csv` |
| `--save` | Sungani zotsatira za benchmark ku database kuti muzifanizire mbiri yakale |

### Zitsanzo {#examples}

Yendetsani gulu lonse la benchmark ndi wopereka ndi model apano:

```bash
wp gratis-ai-agent benchmark
```

Yendetsani funso limodzi (`q-restaurant-website`) ndipo tulutsani ngati JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Yendetsani motsutsana ndi model yeniyeni ndipo sungani zotsatira:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Zotuluka {#output}

Benchmark imatulutsa mzere umodzi pa funso lililonse ndi mizati yotsatirayi:

| Column | Description |
|---|---|
| `ID` | Chizindikiritso cha funso |
| `Description` | Chidule chachifupi cha chochitika cha benchmark |
| `Score` | Kupambana/kulephera kapena chiwerengero cha mphambu (0–100) |
| `Abilities Used` | Mndandanda wa luso lomwe layitanidwa, wolekanitsidwa ndi makoma |
| `Tokens` | Ma token onse omwe agwiritsidwa ntchito |
| `Duration` | Nthawi ya wall-clock m'masekondi |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Mafunso a Benchmark {#benchmark-questions}

Gulu lokhazikika limaphatikizapo:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Pangani Portfolio CPT yokhala ndi taxonomy ya Project Category ndipo lembetsani block pattern |
| `q-restaurant-website` | Mangani tsamba lathunthu la malo odyera lokhala ndi menu CPT, fomu yosungitsa malo, ndi navigation |
| `q-dark-mode-theme` | Ikani preset ya kamangidwe ka dark-mode ndipo lowetsani mitundu ya brand |
| `q-nav-builder` | Pangani menyu ya primary navigation ya zinthu zinayi yokhala ndi nested dropdown |
| `q-options-roundtrip` | Werengani, sinthani, ndi kubwezeretsa gulu la zosankha za WordPress |
| `q-ability-install` | Pezani ndi kuyika paketi ya luso yoyenera kwambiri pa ntchito yomwe yafotokozedwa |

Mafunso owonjezera angalembetsedwe kudzera pa fyuluta ya `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Imasamalira luso loyikidwa ndi mapaketi a luso.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Imalemba luso lonse lolembetsedwa, gwero lake (core kapena paketi), ndi momwe lilili pano.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Zosankha**

| Option | Description |
|---|---|
| `--format=<format>` | Mtundu wa zotuluka: `table` (wokhazikika), `json`, `csv` |

**Chitsanzo cha zotuluka**

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

Imatsitsa ndi kuyambitsa paketi ya luso kuchokera ku registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Ma argument**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug ya paketi ya luso, mwachitsanzo `gratis-ai-agent-woocommerce` |

**Chitsanzo**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Imaletsa luso lenileni osachotsa paketi. Ndi yothandiza pochepetsa malo ogwirira ntchito a wothandizira pa tsamba lina.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Chitsanzo**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Imayatsanso luso lomwe linali litaletsedwa kale.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Imawonetsa makonzedwe apano a wothandizira ndi momwe kulumikizana kulili.

```bash
wp gratis-ai-agent status
```

**Chitsanzo cha zotuluka**

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

Imawonetsa zochitika zaposachedwa za wothandizira kuchokera ku debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Zosankha**

| Njira | Kufotokozera |
|---|---|
| `--last=<n>` | Onetsa zolemba za log zomaliza N. Zokhazikika `50` |
| `--level=<level>` | Sefa ndi mulingo: `info`, `warning`, `error` |
| `--ability=<ability>` | Sefa ndi dzina la luso |

**Chitsanzo**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Imakhazikitsanso mkhalidwe wa wothandizirayo: imachotsa CSS yolowetsedwa, imachotsa CPTs ndi ma taxonomy olembetsedwa ndi wothandizirayo, imakhazikitsanso masitayilo apadziko lonse, ndipo imakhuthula cache ya zosankha za wothandizirayo. Sichichotsa plugin kapena zoikamo zake.

```bash
wp gratis-ai-agent reset [--yes]
```

Onjezani `--yes` kuti mudumphe funso lotsimikizira.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Ma Code Otuluka {#exit-codes}

Malamulo onse amatuluka ndi `0` akapambana. Ma code otuluka omwe si zero:

| Code | Tanthauzo |
|---|---|
| `1` | Cholakwika chonse (onani uthenga wa cholakwika) |
| `2` | Kulephera kwa kulumikizana ndi Provider |
| `3` | Luso silinapezeke |
| `4` | Funso la benchmark silinapezeke |
