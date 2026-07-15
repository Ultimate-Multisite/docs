---
title: Isalathiso se-WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Isalathiso se-WP-CLI

Gratis AI Agent iza nosapho lwemiyalelo `wp gratis-ai-agent` lokulinganisa iarhente, ukulawula izakhono, nokubuza ubume bearhente kumgca womyalelo. Yonke imiyalelo ifuna WP-CLI 2.0 okanye engaphezulu.

## Ufakelo {#installation}

Imiyalelo ye-WP-CLI ibhaliswa ngokuzenzekelayo xa plugin isebenza. Qinisekisa nge:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Iqhuba iseti yokulinganisa yeZakhono ze-Agent — iseti yee-prompts ezintsonkothileyo, ezinamanyathelo amaninzi ezivavanya wonke ummandla wezakhono. Sebenzisa oku ukuvavanya ukusebenza kwemodeli, ukuthelekisa ababoneleli be-AI, okanye ukuqinisekisa iipakethi zezakhono phambi kokuzisa kwimveliso.

### Isishwankathelo {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Iinketho {#options}

| Inketho | Inkcazelo |
|---|---|
| `--question=<id>` | Qhuba umbuzo omnye wokulinganisa nge-ID endaweni yeseti epheleleyo |
| `--provider=<provider>` | Bhala ngaphezulu umboneleli we-AI oqwalaselweyo kolu qhubo (umz. `anthropic`, `openai`) |
| `--model=<model>` | Bhala ngaphezulu imodeli eqwalaselweyo kolu qhubo (umz. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Ifomathi yemveliso: `table` (engagqibekanga), `json`, `csv` |
| `--save` | Gcina iziphumo zokulinganisa kwi-database ukuze zithelekiswe kwimbali |

### Imizekelo {#examples}

Qhuba iseti epheleleyo yokulinganisa ngomboneleli nemodeli yangoku:

```bash
wp gratis-ai-agent benchmark
```

Qhuba umbuzo omnye (`q-restaurant-website`) uze ukhuphe njenge-JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Qhuba kwimodeli ethile uze ugcine iziphumo:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Imveliso {#output}

Umlinganiselo ukhupha umqolo omnye kumbuzo ngamnye oneekholamu ezilandelayo:

| Ikholamu | Inkcazelo |
|---|---|
| `ID` | Isazisi sombuzo |
| `Description` | Isishwankathelo esifutshane sesimo sokulinganisa |
| `Score` | Ukuphumelela/ukungaphumeleli okanye amanqaku angamanani (0–100) |
| `Abilities Used` | Uluhlu lwezakhono ezibiziweyo, ezahlulwe ngeekoma |
| `Tokens` | Iitokens ezisetyenzisiweyo zizonke |
| `Duration` | Ixesha le-wall-clock ngemizuzwana |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Imibuzo Yokulinganisa {#benchmark-questions}

Iseti engagqibekanga ibandakanya:

| ID | Isimo |
|---|---|
| `q-portfolio-site` | Yenza i-Portfolio CPT ene-taxonomy ye-Project Category uze ubhalise ipateni yebhloko |
| `q-restaurant-website` | Yakha iwebhusayithi epheleleyo yevenkile yokutyela ene-menu CPT, ifom yokubhukisha, kunye nokuhamba |
| `q-dark-mode-theme` | Sebenzisa i-design preset ye-dark-mode uze ufake imibala ye-brand |
| `q-nav-builder` | Yenza imenyu yokuhamba ephambili enezinto ezine ene-dropdown engaphakathi |
| `q-options-roundtrip` | Funda, lungisa, uze ubuyisele iseti yeenketho ze-WordPress |
| `q-ability-install` | Fumanisa uze ufake iphakheji yezakhono efanelekileyo kakhulu kwimeko yokusetyenziswa echaziweyo |

Imibuzo eyongezelelweyo inokubhaliswa nge-filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Ilawula izakhono ezifakiweyo kunye neepakethi zezakhono.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Idwelisa zonke izakhono ezibhalisiweyo, umthombo wazo (core okanye pack), kunye nobume bazo bangoku.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Iinketho**

| Inketho | Inkcazelo |
|---|---|
| `--format=<format>` | Ifomathi yemveliso: `table` (engagqibekanga), `json`, `csv` |

**Imveliso yomzekelo**

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

Ikhuphela ize ivule iphakheji yezakhono esuka kwirejistri.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Iingxoxo**

| Ingxoxo | Inkcazelo |
|---|---|
| `<slug>` | I-plugin slug yephakheji yezakhono, umz. `gratis-ai-agent-woocommerce` |

**Umzekelo**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Ikhubaza isakhono esithile ngaphandle kokususa iphakheji. Iluncedo ekuthinteleni umda wearhente kwisiza esithile.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Umzekelo**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Ivula kwakhona isakhono ebesikhubaziwe ngaphambili.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Ibonisa uqwalaselo lwangoku lwearhente kunye nobume bonxibelelwano.

```bash
wp gratis-ai-agent status
```

**Imveliso yomzekelo**

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

Ibonisa umsebenzi wakutshanje wearhente osuka kwi-debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Iinketho**

| Inketho | Inkcazelo |
|---|---|
| `--last=<n>` | Bonisa iingeniso ze-log zokugqibela eziyi-N. Okungagqibekanga `50` |
| `--level=<level>` | Hluza ngenqanaba: `info`, `warning`, `error` |
| `--ability=<ability>` | Hluza ngegama lesakhono |

**Umzekelo**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Iseta kwakhona ubume bearhente: icoca i-CSS efakiweyo, isusa ii-CPT kunye nee-taxonomies ezibhaliswe yiarhente, iseta kwakhona izimbo zehlabathi, ize ikhuphe i-cache yeenketho zearhente. Ayisusi plugin okanye iisetingi zayo.

```bash
wp gratis-ai-agent reset [--yes]
```

Yongeza `--yes` ukuze utsibe i-prompt yokuqinisekisa.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Iikhowudi Zokuphuma {#exit-codes}

Yonke imiyalelo iphuma ngo-`0` xa iphumelele. Iikhowudi zokuphuma ezingengoo-zero:

| Ikhowudi | Intsingiselo |
|---|---|
| `1` | Impazamo ngokubanzi (jonga umyalezo wempazamo) |
| `2` | Ukusilela konxibelelwano lomboneleli |
| `3` | Isakhono asifunyenwanga |
| `4` | Umbuzo wokulinganisa awufunyenwanga |
