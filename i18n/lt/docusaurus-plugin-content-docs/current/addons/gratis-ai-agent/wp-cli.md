---
title: WP-CLI nuoroda
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI nuoroda

Gratis AI Agent pateikia `wp gratis-ai-agent` komandų šeimą agento našumui testuoti, gebėjimams valdyti ir agento būsenai užklausti iš komandinės eilutės. Visoms komandoms reikia WP-CLI 2.0 arba naujesnės versijos.

## Diegimas {#installation}

WP-CLI komandos registruojamos automatiškai, kai plugin yra aktyvus. Patikrinkite su:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Paleidžia Agent Capabilities našumo testų rinkinį — sudėtingų, kelių žingsnių užklausų rinkinį, kuris išbando visą gebėjimų spektrą. Naudokite tai modelio našumui įvertinti, AI teikėjams palyginti arba gebėjimų paketams patikrinti prieš diegiant į produkcinę aplinką.

### Santrauka {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Parinktys {#options}

| Parinktis | Aprašymas |
|---|---|
| `--question=<id>` | Paleisti vieną našumo testo klausimą pagal ID vietoje viso rinkinio |
| `--provider=<provider>` | Perrašyti sukonfigūruotą AI teikėją šiam paleidimui (pvz., `anthropic`, `openai`) |
| `--model=<model>` | Perrašyti sukonfigūruotą modelį šiam paleidimui (pvz., `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Išvesties formatas: `table` (numatytasis), `json`, `csv` |
| `--save` | Išsaugoti našumo testo rezultatus duomenų bazėje istoriniam palyginimui |

### Pavyzdžiai {#examples}

Paleisti visą našumo testų rinkinį su dabartiniu teikėju ir modeliu:

```bash
wp gratis-ai-agent benchmark
```

Paleisti vieną klausimą (`q-restaurant-website`) ir išvesti kaip JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Paleisti su konkrečiu modeliu ir išsaugoti rezultatus:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Išvestis {#output}

Našumo testas išveda po vieną eilutę kiekvienam klausimui su šiais stulpeliais:

| Stulpelis | Aprašymas |
|---|---|
| `ID` | Klausimo identifikatorius |
| `Description` | Trumpa našumo testo scenarijaus santrauka |
| `Score` | Įskaityta / neįskaityta arba skaitinis įvertis (0–100) |
| `Abilities Used` | Kableliais atskirtas iškviestų gebėjimų sąrašas |
| `Tokens` | Bendras sunaudotų tokenų skaičius |
| `Duration` | Praėjęs laikas sekundėmis |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Našumo testo klausimai {#benchmark-questions}

Numatytasis rinkinys apima:

| ID | Scenarijus |
|---|---|
| `q-portfolio-site` | Sukurti Portfolio CPT su Project Category taksonomija ir užregistruoti blokų šabloną |
| `q-restaurant-website` | Sukurti visą restorano svetainę su meniu CPT, rezervacijos forma ir navigacija |
| `q-dark-mode-theme` | Pritaikyti tamsaus režimo dizaino presetą ir įterpti prekės ženklo spalvas |
| `q-nav-builder` | Sukurti keturių elementų pirminį navigacijos meniu su įdėtu išskleidžiamuoju meniu |
| `q-options-roundtrip` | Perskaityti, pakeisti ir atkurti WordPress parinkčių rinkinį |
| `q-ability-install` | Rasti ir įdiegti tinkamiausią gebėjimų paketą aprašytam naudojimo atvejui |

Papildomus klausimus galima užregistruoti per `gratis_ai_agent_benchmark_questions` filtrą.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Valdo įdiegtus gebėjimus ir gebėjimų paketus.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Išvardija visus užregistruotus gebėjimus, jų šaltinį (branduolį arba paketą) ir dabartinę būseną.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Parinktys**

| Parinktis | Aprašymas |
|---|---|
| `--format=<format>` | Išvesties formatas: `table` (numatytasis), `json`, `csv` |

**Išvesties pavyzdys**

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

Atsiunčia ir aktyvuoja gebėjimų paketą iš registro.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentai**

| Argumentas | Aprašymas |
|---|---|
| `<slug>` | Gebėjimų paketo plugin slug, pvz., `gratis-ai-agent-woocommerce` |

**Pavyzdys**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Išjungia konkretų gebėjimą nepašalindama paketo. Naudinga ribojant agento veikimo sritį konkrečioje svetainėje.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Pavyzdys**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Iš naujo įjungia anksčiau išjungtą gebėjimą.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Rodo dabartinę agento konfigūraciją ir ryšio būseną.

```bash
wp gratis-ai-agent status
```

**Išvesties pavyzdys**

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

Rodo naujausią agento veiklą iš derinimo žurnalo.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Parinktys**

| Parinktis | Aprašymas |
|---|---|
| `--last=<n>` | Rodyti paskutinius N žurnalo įrašų. Numatytoji reikšmė `50` |
| `--level=<level>` | Filtruoti pagal lygį: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtruoti pagal gebėjimo pavadinimą |

**Pavyzdys**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Iš naujo nustato agento būseną: išvalo įterptą CSS, pašalina agento užregistruotus CPT ir taksonomijas, iš naujo nustato globalius stilius ir ištuština agento parinkčių podėlį. Nepašalina plugin ar jo nustatymų.

```bash
wp gratis-ai-agent reset [--yes]
```

Pridėkite `--yes`, kad praleistumėte patvirtinimo užklausą.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Išėjimo kodai {#exit-codes}

Visos komandos sėkmės atveju grąžina `0`. Nenuliniai išėjimo kodai:

| Kodas | Reikšmė |
|---|---|
| `1` | Bendra klaida (žr. klaidos pranešimą) |
| `2` | Providerio ryšio sutrikimas |
| `3` | Gebėjimas nerastas |
| `4` | Benchmark klausimas nerastas |
