---
title: WP-CLI salgylanmasy
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI salgylanmasy {#wp-cli-reference}

Gratis AI Agent agenti ölçeg synagy etmek, ukyplary dolandyrmak we buýruk setirinden agent ýagdaýyny soramak üçin `wp gratis-ai-agent` buýruk maşgalasy bilen gelýär. Ähli buýruklar WP-CLI 2.0 ýa-da has ýokary wersiýany talap edýär.

## Gurnama {#installation}

WP-CLI buýruklary plugin işjeň bolanda awtomatik hasaba alynýar. Muny şunuň bilen barlaň:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent ukyplarynyň ölçeg synag toplumyny işledýär — bu doly ukyp gerimini synaýan çylşyrymly, köp ädimli görkezmeleriň toplumydyr. Muny model öndürijiligini bahalandyrmak, AI üpjün edijileri deňeşdirmek ýa-da önümçilik gurşawyna ýerleşdirmezden öň ukyp paketlerini tassyklamak üçin ulanyň.

### Gysgaça görnüş {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opsiýalar {#options}

| Opsiýa | Düşündiriş |
|---|---|
| `--question=<id>` | Doly toplumyň ýerine ID boýunça ýekeje ölçeg synag soragyny işlediň |
| `--provider=<provider>` | Bu işlediş üçin sazlanan AI üpjün edijini çalşyň (meselem, `anthropic`, `openai`) |
| `--model=<model>` | Bu işlediş üçin sazlanan modeli çalşyň (meselem, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Çykyş formaty: `table` (başdaky), `json`, `csv` |
| `--save` | Taryhy deňeşdirme üçin ölçeg synag netijelerini maglumatlar bazasyna saklaň |

### Mysallar {#examples}

Häzirki üpjün ediji we model bilen doly ölçeg synag toplumyny işlediň:

```bash
wp gratis-ai-agent benchmark
```

Ýekeje soragy (`q-restaurant-website`) işlediň we JSON görnüşinde çykaryň:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Belli bir modele garşy işlediň we netijeleri saklaň:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Çykyş {#output}

Ölçeg synagy aşakdaky sütünler bilen her sorag üçin bir hatar çykarýar:

| Sütün | Düşündiriş |
|---|---|
| `ID` | Sorag kesgitleýjisi |
| `Description` | Ölçeg synag ssenarisiniň gysgaça beýany |
| `Score` | Geçdi/geçmedi ýa-da sanlaýyn bal (0–100) |
| `Abilities Used` | Çagyrylan ukyplaryň otur bilen bölünen sanawy |
| `Tokens` | Ulanylan tokenleriň jemi |
| `Duration` | Sekuntlarda hakyky geçen wagt |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Ölçeg synag soraglary {#benchmark-questions}

Başdaky toplum şulary öz içine alýar:

| ID | Ssenariý |
|---|---|
| `q-portfolio-site` | Project Category taksonomiýasy bilen Portfolio CPT dörediň we blok nusgasyny hasaba alyň |
| `q-restaurant-website` | Menu CPT, bronlama formasy we nawigasiýa bilen doly restoran web sahypasyny guruň |
| `q-dark-mode-theme` | Garaňky režim dizaýn presetini ulanyň we brend reňklerini goşuň |
| `q-nav-builder` | Içinde ýerleşdirilen açylýan menýu bilen dört elementli esasy nawigasiýa menýusyny dörediň |
| `q-options-roundtrip` | WordPress opsiýalarynyň toplumyny okaň, üýtgediň we dikeldiň |
| `q-ability-install` | Beýan edilen ulanyş ýagdaýy üçin iň laýyk ukyp paketini tapyň we guruň |

Goşmaça soraglar `gratis_ai_agent_benchmark_questions` filter arkaly hasaba alnyp bilner.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Gurlan ukyplary we ukyp paketlerini dolandyrýar.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Ähli hasaba alnan ukyplary, olaryň çeşmesini (esasy ýa-da paket) we häzirki ýagdaýyny sanap görkezýär.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opsiýalar**

| Opsiýa | Düşündiriş |
|---|---|
| `--format=<format>` | Çykyş formaty: `table` (başdaky), `json`, `csv` |

**Mysal çykyş**

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

Registrden ukyp paketini ýükleýär we işjeňleşdirýär.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentler**

| Argument | Düşündiriş |
|---|---|
| `<slug>` | Ukyp paketiniň plugin slug-y, meselem `gratis-ai-agent-woocommerce` |

**Mysal**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Paketi aýyrmazdan belli bir ukypy öçürýär. Berlen web sahypasynda agentiň gerimini çäklendirmek üçin peýdaly.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Mysal**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Öň öçürilen ukypy täzeden işjeňleşdirýär.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Häzirki agent sazlamasyny we baglanyşyk ýagdaýyny görkezýär.

```bash
wp gratis-ai-agent status
```

**Mysal çykyş**

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

Debug log-dan soňky agent işjeňligini görkezýär.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opsiýalar**

| Opsiýa | Düşündiriş |
|---|---|
| `--last=<n>` | Soňky N log ýazgysyny görkez. Deslapky `50` |
| `--level=<level>` | Dereje boýunça süz: `info`, `warning`, `error` |
| `--ability=<ability>` | Başarnyk ady boýunça süz |

**Mysal**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Agent ýagdaýyny täzeden düzýär: girizilen CSS-i arassalaýar, agent tarapyndan hasaba alnan CPT-leri we taksonomiýalary aýyrýar, global stilleri täzeden düzýär we agentiň opsiýalar keşini boşadýar. Plugin-i ýa-da onuň sazlamalaryny aýyrmaýar.

```bash
wp gratis-ai-agent reset [--yes]
```

Tassyklama soragyny geçmek üçin `--yes` goşuň.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Çykyş kodlary {#exit-codes}

Ähli buýruklar üstünlikli bolanda `0` bilen çykýar. Nol däl çykyş kodlary:

| Kod | Manysy |
|---|---|
| `1` | Umumy säwlik (säwlik habaryna serediň) |
| `2` | Provider birikme näsazlygy |
| `3` | Başarnyk tapylmady |
| `4` | Benchmark soragy tapylmady |
