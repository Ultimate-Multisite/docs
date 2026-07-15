---
title: WP-CLI Erreferentzia
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Erreferentzia

Gratis AI Agent-ek `wp gratis-ai-agent` komando-familia bat dakar, agentearen errendimendua neurtzeko, gaitasunak kudeatzeko eta agentearen egoera komando-lerrotik kontsultatzeko. Komando guztiek WP-CLI 2.0 edo berriagoa behar dute.

## Instalazioa {#installation}

WP-CLI komandoak automatikoki erregistratzen dira plugin aktibo dagoenean. Egiaztatu honekin:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agentearen gaitasunen benchmark multzoa exekutatzen du — gaitasun-azalera osoa probatzen duten urrats anitzeko prompt konplexuen multzo bat. Erabili hau ereduaren errendimendua ebaluatzeko, AI hornitzaileak alderatzeko edo gaitasun-paketeak ekoizpenera hedatu aurretik baliozkotzeko.

### Sinopsia {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Aukerak {#options}

| Aukera | Deskribapena |
|---|---|
| `--question=<id>` | Exekutatu benchmark galdera bakar bat ID bidez, multzo osoaren ordez |
| `--provider=<provider>` | Gainidatzi exekuzio honetarako konfiguratutako AI hornitzailea (adib. `anthropic`, `openai`) |
| `--model=<model>` | Gainidatzi exekuzio honetarako konfiguratutako eredua (adib. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Irteera-formatua: `table` (lehenetsia), `json`, `csv` |
| `--save` | Gorde benchmark emaitzak datu-basean, konparazio historikorako |

### Adibideak {#examples}

Exekutatu benchmark multzo osoa uneko hornitzailearekin eta ereduarekin:

```bash
wp gratis-ai-agent benchmark
```

Exekutatu galdera bakar bat (`q-restaurant-website`) eta eman irteera JSON gisa:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Exekutatu eredu zehatz baten aurka eta gorde emaitzak:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Irteera {#output}

Benchmark-ak galdera bakoitzeko errenkada bat ematen du, zutabe hauekin:

| Zutabea | Deskribapena |
|---|---|
| `ID` | Galderaren identifikatzailea |
| `Description` | Benchmark agertokiaren laburpen laburra |
| `Score` | Gainditua/huts egina edo zenbakizko puntuazioa (0–100) |
| `Abilities Used` | Deitutako gaitasunen zerrenda, komaz bereizia |
| `Tokens` | Kontsumitutako token kopuru osoa |
| `Duration` | Horma-erlojuko denbora segundotan |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark galderak {#benchmark-questions}

Multzo lehenetsiak honako hauek biltzen ditu:

| ID | Agertokia |
|---|---|
| `q-portfolio-site` | Sortu Portfolio CPT bat Project Category taxonomiarekin eta erregistratu bloke-eredu bat |
| `q-restaurant-website` | Eraiki jatetxe-webgune oso bat menu CPT batekin, erreserba-inprimakiarekin eta nabigazioarekin |
| `q-dark-mode-theme` | Aplikatu dark-mode diseinu-aurrezarpen bat eta txertatu markaren koloreak |
| `q-nav-builder` | Sortu lau elementuko nabigazio-menu nagusi bat, habiaratutako goitibeherako batekin |
| `q-options-roundtrip` | Irakurri, aldatu eta leheneratu WordPress aukeren multzo bat |
| `q-ability-install` | Aurkitu eta instalatu deskribatutako erabilera-kasu baterako gaitasun-pakete egokiena |

Galdera gehigarriak `gratis_ai_agent_benchmark_questions` iragazkiaren bidez erregistra daitezke.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Instalatutako gaitasunak eta gaitasun-paketeak kudeatzen ditu.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Erregistratutako gaitasun guztiak, haien iturria (core edo paketea) eta uneko egoera zerrendatzen ditu.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Aukerak**

| Aukera | Deskribapena |
|---|---|
| `--format=<format>` | Irteera-formatua: `table` (lehenetsia), `json`, `csv` |

**Adibideko irteera**

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

Erregistroko gaitasun-pakete bat deskargatu eta aktibatzen du.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentuak**

| Argumentua | Deskribapena |
|---|---|
| `<slug>` | Gaitasun-paketearen plugin slug-a, adib. `gratis-ai-agent-woocommerce` |

**Adibidea**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Gaitasun zehatz bat desgaitzen du paketea kendu gabe. Erabilgarria da gune jakin batean agentearen esparrua mugatzeko.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Adibidea**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Aurrez desgaitutako gaitasun bat berriro gaitzen du.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Uneko agentearen konfigurazioa eta konektibitate-egoera bistaratzen ditu.

```bash
wp gratis-ai-agent status
```

**Adibideko irteera**

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

Debug erregistrotik azken agentearen jarduera bistaratzen du.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Aukerak**

| Aukera | Deskribapena |
|---|---|
| `--last=<n>` | Erakutsi azken N erregistro-sarrerak. Lehenetsia `50` |
| `--level=<level>` | Iragazi mailaren arabera: `info`, `warning`, `error` |
| `--ability=<ability>` | Iragazi gaitasunaren izenaren arabera |

**Adibidea**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Agentearen egoera berrezartzen du: txertatutako CSSa garbitzen du, agenteak erregistratutako CPTak eta taxonomiak kentzen ditu, estilo globalak berrezartzen ditu, eta agentearen aukeren cachea husten du. Ez du plugina edo haren ezarpenak kentzen.

```bash
wp gratis-ai-agent reset [--yes]
```

Gehitu `--yes` berrespen-gonbita saltatzeko.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Irteera-kodeak {#exit-codes}

Komando guztiek `0` irteera ematen dute arrakastan. Zero ez diren irteera-kodeak:

| Kodea | Esanahia |
|---|---|
| `1` | Errore orokorra (ikusi errore-mezua) |
| `2` | Hornitzailearen konektibitate-hutsegitea |
| `3` | Gaitasuna ez da aurkitu |
| `4` | Erreferentzia-probako galdera ez da aurkitu |
