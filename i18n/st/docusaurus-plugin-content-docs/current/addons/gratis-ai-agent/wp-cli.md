---
title: Tšupiso ea WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Tshupiso ya WP-CLI

Gratis AI Agent e tlisa lelapa la taelo la `wp gratis-ai-agent` bakeng sa ho etsa benchmark ya agent, ho laola bokgoni, le ho botsa boemo ba agent ho tswa moleng wa ditaelo. Ditaelo tsohle di hloka WP-CLI 2.0 kapa ho feta.

## Ho kenya

Ditaelo tsa WP-CLI di ngodiswa ka boiketsetso ha plugin e sebetsa. Netefatsa ka:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

E tsamaisa sehlopha sa benchmark sa Bokgoni ba Agent — pokello ya dipotso tse rarahaneng, tsa mehato e mengata tse sebedisang bokgoni bohle bo fumanehang. Sebedisa sena ho lekola tshebetso ya model, ho bapisa bafani ba AI, kapa ho netefatsa diphuthelwana tsa bokgoni pele o di kenya tlhahisong.

### Kakaretso

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Dikgetho

| Kgetho | Tlhaloso |
|---|---|
| `--question=<id>` | Matha potso e le nngwe ya benchmark ka ID ho ena le sehlopha sohle |
| `--provider=<provider>` | Fetola mofani wa AI ya hlophisitsweng bakeng sa ho matha hona (mohl. `anthropic`, `openai`) |
| `--model=<model>` | Fetola model e hlophisitsweng bakeng sa ho matha hona (mohl. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Sebopeho sa tlhahiso: `table` (ya kamehla), `json`, `csv` |
| `--save` | Boloka diphetho tsa benchmark ho database bakeng sa papiso ya nalane |

### Mehlala

Matha sehlopha sohle sa benchmark ka mofani le model tsa hona jwale:

```bash
wp gratis-ai-agent benchmark
```

Matha potso e le nngwe (`q-restaurant-website`) mme o hlahise e le JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Matha kgahlanong le model e itseng mme o boloke diphetho:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Tlhahiso

Benchmark e hlahisa mola o le mong bakeng sa potso ka nngwe ka dikholomo tse latelang:

| Kholomo | Tlhaloso |
|---|---|
| `ID` | Seitshupo sa potso |
| `Description` | Kakaretso e kgutshwane ya maemo a benchmark |
| `Score` | Ho feta/ho hloleha kapa dintlha tsa palo (0–100) |
| `Abilities Used` | Lenane le arohantsweng ka dikoma la bokgoni bo bitsitsweng |
| `Tokens` | Kakaretso ya tokens tse sebedisitsweng |
| `Duration` | Nako ya lebota ka metsotswana |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Dipotso tsa Benchmark

Sehlopha sa kamehla se kenyelletsa:

| ID | Maemo |
|---|---|
| `q-portfolio-site` | Theha Portfolio CPT e nang le taxonomy ya Project Category mme o ngodise block pattern |
| `q-restaurant-website` | Haha website e felletseng ya reschorente ka menu CPT, foromo ya ho behela, le navigation |
| `q-dark-mode-theme` | Sebedisa preset ya moralo wa dark-mode mme o kenye mebala ya brand |
| `q-nav-builder` | Theha menu ya primary navigation ya dintho tse nne e nang le dropdown e kenelletseng |
| `q-options-roundtrip` | Bala, fetola, mme o kgutlisetse sete ya dikgetho tsa WordPress |
| `q-ability-install` | Fumana mme o kenye sephuthelwana sa bokgoni se loketseng haholo bakeng sa tshebediso e hlalositsweng |

Dipotso tse eketsehileng di ka ngodiswa ka filtara ya `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

E laola bokgoni bo kentsweng le diphuthelwana tsa bokgoni.

### `wp gratis-ai-agent abilities list`

E thathamisa bokgoni bohle bo ngodisitsweng, mohlodi wa bona (core kapa pack), le boemo ba bona ba hona jwale.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Dikgetho**

| Kgetho | Tlhaloso |
|---|---|
| `--format=<format>` | Sebopeho sa tlhahiso: `table` (ya kamehla), `json`, `csv` |

**Mohlala wa tlhahiso**

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

### `wp gratis-ai-agent abilities install`

E jarolla mme e kenya tshebetsong sephuthelwana sa bokgoni ho tswa registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Diargumente**

| Argument | Tlhaloso |
|---|---|
| `<slug>` | Plugin slug ya sephuthelwana sa bokgoni, mohl. `gratis-ai-agent-woocommerce` |

**Mohlala**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

E thibela bokgoni bo itseng ntle le ho tlosa pack. E molemo bakeng sa ho lekanyetsa boholo ba tshebetso ya agent ho site e itseng.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Mohlala**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

E bulela hape bokgoni bo neng bo thibetswe pejana.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

E bontsha tlhophiso ya agent ya hona jwale le boemo ba kgokahano.

```bash
wp gratis-ai-agent status
```

**Mohlala wa tlhahiso**

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

## `wp gratis-ai-agent logs`

E bontsha mosebetsi wa moraorao wa agent ho tswa debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Dikgetho**

| Kgetho | Tlhaloso |
|---|---|
| `--last=<n>` | Bontsha dikeno tsa ho qetela tse N tsa log. Ya kamehla ke `50` |
| `--level=<level>` | Sefa ka boemo: `info`, `warning`, `error` |
| `--ability=<ability>` | Sefa ka lebitso la bokgoni |

**Mohlala**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

E seta botjha boemo ba moemedi: e hlakola CSS e kentsoeng, e tlosa CPTs le taxonomies tse ngodisitsweng ke moemedi, e seta botjha ditaele tsa lefatshe lohle, mme e qhala polokelo ya nakoana ya dikgetho tsa moemedi. Ha e tlose keketso kapa disetting tsa yona.

```bash
wp gratis-ai-agent reset [--yes]
```

Kenya `--yes` ho tlola potso ya netefatso.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Dikhoutu tsa ho tswa

Ditaelo tsohle di tswa ka `0` ha di atlehile. Dikhoutu tsa ho tswa tseo e seng zero:

| Khoutu | Moelelo |
|---|---|
| `1` | Phoso e akaretsang (sheba molaetsa wa phoso) |
| `2` | Ho hloleha ha kgokahano ya mofani |
| `3` | Bokgoni ha bo a fumanwa |
| `4` | Potso ya benchmark ha e a fumanwa |
