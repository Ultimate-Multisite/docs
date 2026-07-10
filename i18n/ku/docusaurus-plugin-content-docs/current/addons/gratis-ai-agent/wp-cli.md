---
title: Referansa WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referansa WP-CLI {#wp-cli-reference}

Gratis AI Agent malbata fermanê ya `wp gratis-ai-agent` tîne da ku agent biceribîne, şiyanan birêve bibe, û rewşa agent ji rêza fermanê bipirse. Hemû ferman WP-CLI 2.0 an jê bilindtir dixwazin.

## Sazkirin {#installation}

Fermanên WP-CLI dema plugin çalak be bixweber tên tomarkirin. Bi vê yekê piştrast bike:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Koma ceribandinê ya Şiyanên Agent dimeşîne — komek promptên aloz û pir-qonaxî ku tevahiya qada şiyanan bi kar tînin. Vê bikar bîne da ku performansa modelê binirxînî, peydakiroxên AI bidî hev, an pakêtên şiyanan berî şandina hilberînê piştrast bikî.

### Kurtenav {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Vebijark {#options}

| Vebijark | Danasîn |
|---|---|
| `--question=<id>` | Li şûna tevahiya komê, tenê pirsê ceribandinê ya yekane bi ID bimeşîne |
| `--provider=<provider>` | Ji bo vê meşandinê peydakiroxa AI ya sazkirî biguherîne (mînak `anthropic`, `openai`) |
| `--model=<model>` | Ji bo vê meşandinê modela sazkirî biguherîne (mînak `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Forma derketinê: `table` (standard), `json`, `csv` |
| `--save` | Encamên ceribandinê di danegehê de ji bo berhevkirina dîrokî tomar bike |

### Mînak {#examples}

Tevahiya koma ceribandinê bi peydakirox û modela niha bimeşîne:

```bash
wp gratis-ai-agent benchmark
```

Pirsê yekane (`q-restaurant-website`) bimeşîne û wek JSON derxe:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Li dijî modeleke taybet bimeşîne û encaman tomar bike:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Derketin {#output}

Ceribandin ji bo her pirsê rêzekê bi stûnên jêrîn derdixe:

| Stûn | Danasîn |
|---|---|
| `ID` | Nasnameya pirsê |
| `Description` | Kurteya kurt a senaryoya ceribandinê |
| `Score` | Derbas/biserneketî an xala hejmarî (0–100) |
| `Abilities Used` | Lîsteya şiyanên hatine gazîkirin, bi bêhnokê veqetandî |
| `Tokens` | Hejmara giştî ya tokenên hatine bikaranîn |
| `Duration` | Dema rastîn bi çirkeyan |

```
ID                       Danasîn                            Xal    Şiyanên Hatine Bikaranîn      Token   Dem
q-portfolio-site         Portfolio CPT bi tagan çêbike      100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Malpereke xwaringehê temam ava bike 92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Pêşsaziyeke tema tarî bisepîne     100    apply_theme_json_preset      986     4.2s
...
```

### Pirsên Ceribandinê {#benchmark-questions}

Koma standard ev tê de dihewîne:

| ID | Senaryo |
|---|---|
| `q-portfolio-site` | Portfolio CPT bi taxonomiya Project Category çêbike û patterna blokê tomar bike |
| `q-restaurant-website` | Malpereke xwaringehê temam bi menu CPT, forma rezervasyonê, û navîgasyonê ava bike |
| `q-dark-mode-theme` | Pêşsaziyeke sêwirana moda tarî bisepîne û rengên brandê têxe |
| `q-nav-builder` | Menuya navîgasyona sereke ya çar-hêmanî bi dropdownekê hundirîn çêbike |
| `q-options-roundtrip` | Komek vebijarkên WordPress bixwîne, biguherîne, û vegerîne |
| `q-ability-install` | Ji bo rewşa bikaranîna hatî danasîn, pakêta şiyanê ya herî guncaw bibîne û saz bike |

Pirsên zêde dikarin bi filtra `gratis_ai_agent_benchmark_questions` bên tomarkirin.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Şiyan û pakêtên şiyanan ên sazkirî birêve dibe.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Hemû şiyanên tomarkirî, çavkaniya wan (bingehîn an pakêt), û rewşa wan a niha nîşan dide.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Vebijark**

| Vebijark | Danasîn |
|---|---|
| `--format=<format>` | Forma derketinê: `table` (standard), `json`, `csv` |

**Derketina mînak**

```
Ability                   Çavkanî                        Rewş
register_post_type        gratis-ai-agent (core)          çalak
list_post_types           gratis-ai-agent (core)          çalak
delete_post_type          gratis-ai-agent (core)          çalak
register_taxonomy         gratis-ai-agent (core)          çalak
inject_custom_css         gratis-ai-agent (core)          çalak
apply_theme_json_preset   gratis-ai-agent (core)          çalak
create_product            gratis-ai-agent-woocommerce     çalak
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Pakêteke şiyanê ji registry dadixe û çalak dike.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguman**

| Arguman | Danasîn |
|---|---|
| `<slug>` | Slug-a plugin a pakêta şiyanê, mînak `gratis-ai-agent-woocommerce` |

**Mînak**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Şiyaneke taybet bêyî rakirina pakêtê neçalak dike. Ji bo sînordarkirina qada agent li ser malpereke diyarkirî bikêr e.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Mînak**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Şiyaneke berê neçalakbûyî dîsa çalak dike.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Sazkirina agent a niha û rewşa girêdanê nîşan dide.

```bash
wp gratis-ai-agent status
```

**Derketina mînak**

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

Çalakiya dawî ya agent ji tomara debug nîşan dide.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Vebijark**

| Vebijark | Danasîn |
|---|---|
| `--last=<n>` | N tomarkirinên log ên dawî nîşan bide. Standard `50` |
| `--level=<level>` | Li gorî asta biparêze: `info`, `warning`, `error` |
| `--ability=<ability>` | Li gorî navê ability biparêze |

**Mînak**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Rewşa agent ji nû ve saz dike: CSS ya têxistî paqij dike, CPT û taxonomiyên ku ji aliyê agent ve hatine tomar kirin radike, şêwazên gerdûnî ji nû ve saz dike, û cache ya vebijarkên agent vala dike. Plugin an mîhengên wê ranake.

```bash
wp gratis-ai-agent reset [--yes]
```

`--yes` lê zêde bike da ku daxwaza pejirandinê derbas bikî.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kodên Derketinê {#exit-codes}

Hemû ferman li ser serkeftinê bi `0` derdikevin. Kodên derketinê yên ne-sifir:

| Kod | Wate |
|---|---|
| `1` | Çewtiya giştî (li peyama çewtiyê binêre) |
| `2` | Têkçûna girêdana provider |
| `3` | Ability nehat dîtin |
| `4` | Pirsa benchmark nehat dîtin |
