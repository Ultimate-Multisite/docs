---
title: Referenco de WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI-Referenco

Gratis AI Agent liveras komandan familion `wp gratis-ai-agent` por komparnorme testi la agenton, administri kapablojn, kaj konsulti agentan staton el la komandlinio. Ĉiuj komandoj postulas WP-CLI 2.0 aŭ pli novan.

## Instalado

La WP-CLI-komandoj estas registritaj aŭtomate kiam la plugin estas aktiva. Kontrolu per:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Rulas la komparnorman testaron de Agentaj Kapabloj — aron de kompleksaj, plurpaŝaj promptoj kiuj ekzercas la plenan kapablan surfacon. Uzu ĉi tion por taksi modelan rendimenton, kompari AI-provizantojn, aŭ validigi kapablopakojn antaŭ ol deploji al produktado.

### Sinoptiko

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opcioj

| Opcio | Priskribo |
|---|---|
| `--question=<id>` | Rulu unuopan komparnorman demandon laŭ ID anstataŭ la plena testaro |
| `--provider=<provider>` | Anstataŭigu la agorditan AI-provizanton por ĉi tiu rulado (ekz. `anthropic`, `openai`) |
| `--model=<model>` | Anstataŭigu la agorditan modelon por ĉi tiu rulado (ekz. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Eliga formato: `table` (defaŭlte), `json`, `csv` |
| `--save` | Konservu la komparnormajn rezultojn al la datumbazo por historia komparo |

### Ekzemploj

Rulu la plenan komparnorman testaron kun la nuna provizanto kaj modelo:

```bash
wp gratis-ai-agent benchmark
```

Rulu unuopan demandon (`q-restaurant-website`) kaj eligu kiel JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Rulu kontraŭ specifa modelo kaj konservu rezultojn:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Eligo

La komparnorma testo eligas unu vicon por ĉiu demando kun la jenaj kolumnoj:

| Kolumno | Priskribo |
|---|---|
| `ID` | Demanda identigilo |
| `Description` | Mallonga resumo de la komparnorma scenaro |
| `Score` | Sukcesa/malsukcesa aŭ nombra poentaro (0–100) |
| `Abilities Used` | Perkomata listo de alvokitaj kapabloj |
| `Tokens` | Totalaj ĵetonoj konsumitaj |
| `Duration` | Realtempa daŭro en sekundoj |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Komparnormaj Demandoj

La defaŭlta testaro inkluzivas:

| ID | Scenaro |
|---|---|
| `q-portfolio-site` | Kreu Portfolio-CPT kun taksonomio Project Category kaj registru blokan ŝablonon |
| `q-restaurant-website` | Konstruu plenan restoracian retejon kun menuo-CPT, mendoformularo, kaj navigado |
| `q-dark-mode-theme` | Apliku malhelreĝiman dezajnopreseton kaj injektu markajn kolorojn |
| `q-nav-builder` | Kreu kvar-elementan ĉefan navigadan menuon kun ingita falmenuo |
| `q-options-roundtrip` | Legu, modifu, kaj restaŭru aron de WordPress-opcioj |
| `q-ability-install` | Malkovru kaj instalu la plej taŭgan kapablopakon por priskribita uzokazo |

Pliaj demandoj povas esti registritaj per la filtro `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Administras instalitajn kapablojn kaj kapablopakojn.

### `wp gratis-ai-agent abilities list`

Listigas ĉiujn registritajn kapablojn, ilian fonton (kerno aŭ pako), kaj ilian nunan staton.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opcioj**

| Opcio | Priskribo |
|---|---|
| `--format=<format>` | Eliga formato: `table` (defaŭlte), `json`, `csv` |

**Ekzempla eligo**

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

Elŝutas kaj aktivigas kapablopakon el la registro.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentoj**

| Argumento | Priskribo |
|---|---|
| `<slug>` | Plugin-identigilo de la kapablopako, ekz. `gratis-ai-agent-woocommerce` |

**Ekzemplo**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Malŝaltas specifan kapablon sen forigi la pakon. Utila por limigi la amplekson de la agento en donita retejo.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Ekzemplo**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Reŝaltas antaŭe malŝaltitan kapablon.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Montras la nunan agentan agordon kaj konektecan staton.

```bash
wp gratis-ai-agent status
```

**Ekzempla eligo**

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

Montras lastatempan agentan agadon el la sencimiga protokolo.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opcioj**

| Opcio | Priskribo |
|---|---|
| `--last=<n>` | Montru la lastajn N protokolajn enskribojn. Defaŭlte `50` |
| `--level=<level>` | Filtru laŭ nivelo: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtru laŭ nomo de kapablo |

**Ekzemplo**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Restarigas la staton de la agento: purigas injektitan CSS, forigas CPT-ojn kaj taksonomiojn registritajn de la agento, restarigas ĉieajn stilojn, kaj malplenigas la opcio-kaŝmemoron de la agento. Ne forigas la kromprogramon aŭ ĝiajn agordojn.

```bash
wp gratis-ai-agent reset [--yes]
```

Aldonu `--yes` por preterlasi la konfirman inviton.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Eliro-kodoj

Ĉiuj komandoj eliras kun `0` je sukceso. Ne-nulaj eliro-kodoj:

| Kodo | Signifo |
|---|---|
| `1` | Ĝenerala eraro (vidu erarmesaĝon) |
| `2` | Malsukceso de konektebleco al provizanto |
| `3` | Kapablo ne trovita |
| `4` | Testa demando ne trovita |
