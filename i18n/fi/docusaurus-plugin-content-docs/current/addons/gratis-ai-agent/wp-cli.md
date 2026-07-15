---
title: WP-CLI-viite
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI-viite

Gratis AI Agent sisältää `wp gratis-ai-agent` -komentoperheen agentin suorituskykytestaukseen, kyvykkyyksien hallintaan ja agentin tilan kyselyyn komentoriviltä. Kaikki komennot edellyttävät WP-CLI:n versiota 2.0 tai uudempaa.

## Asennus {#installation}

WP-CLI-komennot rekisteröidään automaattisesti, kun plugin on aktiivinen. Varmista komennolla:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Suorittaa Agent Capabilities -suorituskykytestikokonaisuuden — joukon monimutkaisia, monivaiheisia kehotteita, jotka käyttävät koko kyvykkyyspintaa. Käytä tätä mallin suorituskyvyn arviointiin, AI-palveluntarjoajien vertailuun tai kyvykkyyspakettien validointiin ennen tuotantoon käyttöönottoa.

### Tiivistelmä {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Asetukset {#options}

| Asetus | Kuvaus |
|---|---|
| `--question=<id>` | Suorita yksittäinen suorituskykytestikysymys ID:n perusteella koko kokonaisuuden sijaan |
| `--provider=<provider>` | Ohita tälle ajolle määritetty AI-palveluntarjoaja (esim. `anthropic`, `openai`) |
| `--model=<model>` | Ohita tälle ajolle määritetty malli (esim. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Tulostusmuoto: `table` (oletus), `json`, `csv` |
| `--save` | Tallenna suorituskykytestin tulokset tietokantaan historiallista vertailua varten |

### Esimerkit {#examples}

Suorita koko suorituskykytestikokonaisuus nykyisellä palveluntarjoajalla ja mallilla:

```bash
wp gratis-ai-agent benchmark
```

Suorita yksittäinen kysymys (`q-restaurant-website`) ja tulosta JSON-muodossa:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Suorita tietyllä mallilla ja tallenna tulokset:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Tulostus {#output}

Suorituskykytesti tulostaa yhden rivin kutakin kysymystä kohden seuraavilla sarakkeilla:

| Sarake | Kuvaus |
|---|---|
| `ID` | Kysymyksen tunniste |
| `Description` | Lyhyt yhteenveto suorituskykytestin skenaariosta |
| `Score` | Hyväksytty/hylätty tai numeerinen pisteytys (0–100) |
| `Abilities Used` | Pilkuilla erotettu luettelo kutsutuista kyvykkyyksistä |
| `Tokens` | Käytettyjen tokenien kokonaismäärä |
| `Duration` | Kellonaika sekunteina |

```
ID                       Kuvaus                              Pisteet  Käytetyt kyvykkyydet        Tokenit  Kesto
q-portfolio-site         Luo portfolio-CPT tageilla          100      register_post_type, reg...   4821     18.3s
q-restaurant-website     Rakenna täysi ravintolasivusto      92       create_site_plan, execut...  12430    54.1s
q-dark-mode-theme        Ota tumma theme-esiasetus käyttöön  100      apply_theme_json_preset      986      4.2s
...
```

### Suorituskykytestikysymykset {#benchmark-questions}

Oletuskokonaisuus sisältää:

| ID | Skenaario |
|---|---|
| `q-portfolio-site` | Luo Portfolio-CPT, jossa on Project Category -taksonomia, ja rekisteröi lohkomalli |
| `q-restaurant-website` | Rakenna täysi ravintolasivusto, jossa on menu-CPT, varauslomake ja navigaatio |
| `q-dark-mode-theme` | Ota käyttöön tumman tilan design-esiasetus ja lisää brändivärit |
| `q-nav-builder` | Luo neljän kohdan ensisijainen navigaatiovalikko, jossa on sisäkkäinen pudotusvalikko |
| `q-options-roundtrip` | Lue, muokkaa ja palauta joukko WordPress-asetuksia |
| `q-ability-install` | Etsi ja asenna sopivin kyvykkyyspaketti kuvattua käyttötapausta varten |

Lisäkysymyksiä voi rekisteröidä `gratis_ai_agent_benchmark_questions`-suodattimen kautta.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Hallitsee asennettuja kyvykkyyksiä ja kyvykkyyspaketteja.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Luettelee kaikki rekisteröidyt kyvykkyydet, niiden lähteen (ydin tai paketti) ja nykyisen tilan.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Asetukset**

| Asetus | Kuvaus |
|---|---|
| `--format=<format>` | Tulostusmuoto: `table` (oletus), `json`, `csv` |

**Esimerkkitulostus**

```
Kyvykkyys                 Lähde                           Tila
register_post_type        gratis-ai-agent (ydin)          aktiivinen
list_post_types           gratis-ai-agent (ydin)          aktiivinen
delete_post_type          gratis-ai-agent (ydin)          aktiivinen
register_taxonomy         gratis-ai-agent (ydin)          aktiivinen
inject_custom_css         gratis-ai-agent (ydin)          aktiivinen
apply_theme_json_preset   gratis-ai-agent (ydin)          aktiivinen
create_product            gratis-ai-agent-woocommerce     aktiivinen
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Lataa ja aktivoi kyvykkyyspaketin rekisteristä.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentit**

| Argumentti | Kuvaus |
|---|---|
| `<slug>` | Kyvykkyyspaketin plugin-slug, esim. `gratis-ai-agent-woocommerce` |

**Esimerkki**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Poistaa tietyn kyvykkyyden käytöstä poistamatta pakettia. Hyödyllinen agentin toiminta-alan rajoittamiseen tietyllä sivustolla.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Esimerkki**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Ottaa aiemmin käytöstä poistetun kyvykkyyden uudelleen käyttöön.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Näyttää nykyisen agentin määrityksen ja yhteystilan.

```bash
wp gratis-ai-agent status
```

**Esimerkkitulostus**

```
Plugin-versio:      1.4.0
AI-palveluntarjoaja: Anthropic
Malli:              claude-sonnet-4-6
Palveluntarjoajan tila: Yhdistetty
Ladatut kyvykkyydet: 24
Suorituskykytestitulokset: 3 tallennettua ajoa (viimeisin: 2026-04-15)
Asetusten estolista: 18 merkintää
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Näyttää viimeaikaisen agenttitoiminnan debug-lokista.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Asetukset**

| Vaihtoehto | Kuvaus |
|---|---|
| `--last=<n>` | Näytä viimeiset N lokimerkintää. Oletus `50` |
| `--level=<level>` | Suodata tason mukaan: `info`, `warning`, `error` |
| `--ability=<ability>` | Suodata kyvyn nimen mukaan |

**Esimerkki**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Nollaa agentin tilan: tyhjentää lisätyn CSS:n, poistaa agentin rekisteröimät CPT:t ja taksonomiat, nollaa globaalit tyylit ja tyhjentää agentin asetusten välimuistin. Ei poista pluginia tai sen asetuksia.

```bash
wp gratis-ai-agent reset [--yes]
```

Lisää `--yes` ohittaaksesi vahvistuskehotteen.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Poistumiskoodit {#exit-codes}

Kaikki komennot palauttavat `0` onnistuessaan. Nollasta poikkeavat poistumiskoodit:

| Koodi | Merkitys |
|---|---|
| `1` | Yleinen virhe (katso virheilmoitus) |
| `2` | Provider-yhteysvirhe |
| `3` | Kykyä ei löytynyt |
| `4` | Vertailutestikysymystä ei löytynyt |
