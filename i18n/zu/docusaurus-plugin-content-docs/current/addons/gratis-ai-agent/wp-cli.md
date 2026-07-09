---
title: Ireferensi ye-WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Ireferensi ye-WP-CLI

Gratis AI Agent iza nomndeni wemiyalo ethi `wp gratis-ai-agent` wokulinganisa ukusebenza kwe-agent, ukuphatha amakhono, nokubuza isimo se-agent kusuka kulayini wemiyalo. Yonke imiyalo idinga i-WP-CLI 2.0 noma ephakeme.

## Ukufakwa

Imiyalo ye-WP-CLI ibhaliswa ngokuzenzakalelayo lapho i-plugin isebenza. Qinisekisa ngalokhu:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Isebenzisa iqoqo lezivivinyo zesilinganiso se-Agent Capabilities — isethi yama-prompts ayinkimbinkimbi, anezinyathelo eziningi ahlola yonke indawo yamakhono. Sebenzisa lokhu ukuhlola ukusebenza kwemodeli, ukuqhathanisa abahlinzeki be-AI, noma ukuqinisekisa amaphakethe amakhono ngaphambi kokuwathumela ekukhiqizeni.

### Isifinyezo

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Izinketho

| Inketho | Incazelo |
|---|---|
| `--question=<id>` | Sebenzisa umbuzo owodwa wesilinganiso nge-ID esikhundleni seqoqo lonke |
| `--provider=<provider>` | Yeqa umhlinzeki we-AI olungiselelwe kulokhu kusebenzisa (isb. `anthropic`, `openai`) |
| `--model=<model>` | Yeqa imodeli elungiselelwe kulokhu kusebenzisa (isb. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Ifomethi yokukhiphayo: `table` (okuzenzakalelayo), `json`, `csv` |
| `--save` | Londoloza imiphumela yesilinganiso ku-database ukuze iqhathaniswe ngokomlando |

### Izibonelo

Sebenzisa iqoqo lonke lesilinganiso nomhlinzeki nemodeli yamanje:

```bash
wp gratis-ai-agent benchmark
```

Sebenzisa umbuzo owodwa (`q-restaurant-website`) bese ukhipha njenge-JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Sebenzisa ngokumelene nemodeli ethile bese ulondoloza imiphumela:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Okuphumayo

Isilinganiso sikhipha umugqa owodwa ngombuzo ngamunye onamakholomu alandelayo:

| Ikholomu | Incazelo |
|---|---|
| `ID` | Isihlonzi sombuzo |
| `Description` | Isifinyezo esifushane sesimo sesilinganiso |
| `Score` | Ukuphumelela/ukwehluleka noma amaphuzu ezinombolo (0–100) |
| `Abilities Used` | Uhlu lwamakhono abiziwe oluhlukaniswe ngamakhoma |
| `Tokens` | Isamba sama-tokens asetshenzisiwe |
| `Duration` | Isikhathi se-wall-clock ngemizuzwana |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Imibuzo Yesilinganiso

Iqoqo elizenzakalelayo lifaka:

| ID | Isimo |
|---|---|
| `q-portfolio-site` | Dala i-Portfolio CPT ene-taxonomy ye-Project Category bese ubhalisa iphethini ye-block |
| `q-restaurant-website` | Yakha iwebhusayithi ephelele yerestshurenti ene-menu CPT, ifomu lokubhuka, nokuzulazula |
| `q-dark-mode-theme` | Sebenzisa i-preset yokuklama ye-dark-mode bese ufaka imibala ye-brand |
| `q-nav-builder` | Dala imenyu yokuzulazula eyinhloko enezinto ezine ene-dropdown efakwe ngaphakathi |
| `q-options-roundtrip` | Funda, lungisa, bese ubuyisela isethi yezinketho ze-WordPress |
| `q-ability-install` | Thola futhi ufake iphakethe lamakhono elifanele kakhulu esimweni sokusetshenziswa esichaziwe |

Imibuzo eyengeziwe ingabhaliswa nge-filter ethi `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

Iphatha amakhono afakiwe namaphakethe amakhono.

### `wp gratis-ai-agent abilities list`

Ibala wonke amakhono abhalisiwe, umthombo wawo (core noma iphakethe), nesimo sawo samanje.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Izinketho**

| Inketho | Incazelo |
|---|---|
| `--format=<format>` | Ifomethi yokukhiphayo: `table` (okuzenzakalelayo), `json`, `csv` |

**Isibonelo sokuphumayo**

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

Ilanda futhi isebenze iphakethe lamakhono kusuka ku-registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Ama-argument**

| I-argument | Incazelo |
|---|---|
| `<slug>` | I-plugin slug yephakethe lamakhono, isb. `gratis-ai-agent-woocommerce` |

**Isibonelo**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Ikhubaza ikhono elithile ngaphandle kokususa iphakethe. Kuwusizo ekukhawuleleni ububanzi be-agent kusayithi elithile.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Isibonelo**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Iphinde isebenze ikhono elalikade likhutshaziwe.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Ibonisa ukulungiselelwa kwamanje kwe-agent nesimo sokuxhumeka.

```bash
wp gratis-ai-agent status
```

**Isibonelo sokuphumayo**

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

Ibonisa umsebenzi wakamuva we-agent kusuka ku-debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Izinketho**

| Inketho | Incazelo |
|---|---|
| `--last=<n>` | Bonisa okufakiwe kwe-log kokugcina okungu-N. Okuzenzakalelayo `50` |
| `--level=<level>` | Hlunga ngezinga: `info`, `warning`, `error` |
| `--ability=<ability>` | Hlunga ngegama lekhono |

**Isibonelo**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Isetha kabusha isimo se-agent: isula i-CSS efakiwe, isusa ama-CPT nama-taxonomy abhaliswe yi-agent, isetha kabusha izitayela zomhlaba wonke, futhi ithulule i-cache yezinketho ze-agent. Ayisusi i-plugin noma izilungiselelo zayo.

```bash
wp gratis-ai-agent reset [--yes]
```

Engeza `--yes` ukuze weqe i-prompt yokuqinisekisa.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## AmaKhodi Okuphuma

Yonke imiyalo iphuma ngo-`0` uma iphumelele. Ama-exit codes angewona u-zero:

| Ikhodi | Incazelo |
|---|---|
| `1` | Iphutha elijwayelekile (bheka umlayezo wephutha) |
| `2` | Ukwehluleka kokuxhumeka komhlinzeki |
| `3` | Ikhono alitholakalanga |
| `4` | Umbuzo wesilinganiso awutholakalanga |
