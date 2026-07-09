---
title: Referans WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referans WP-CLI

Gratis AI Agent vini ak yon fanmi kòmand `wp gratis-ai-agent` pou fè tès referans sou ajan an, jere kapasite yo, epi mande eta ajan an soti nan liy kòmand lan. Tout kòmand yo mande WP-CLI 2.0 oswa pi wo.

## Enstalasyon

Kòmand WP-CLI yo anrejistre otomatikman lè plugin nan aktif. Verifye ak:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Lanse suite tès referans Kapasite Ajan an — yon seri prompt konplèks, ak plizyè etap, ki egzèse tout sifas kapasite a. Sèvi ak sa pou evalye pèfòmans modèl la, konpare founisè IA yo, oswa valide pake kapasite yo anvan deplwaman nan pwodiksyon.

### Rezime

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opsyon

| Opsyon | Deskripsyon |
|---|---|
| `--question=<id>` | Lanse yon sèl kesyon tès referans pa ID olye de tout suite la |
| `--provider=<provider>` | Pase sou founisè IA ki konfigire a pou ekzekisyon sa a (pa egzanp `anthropic`, `openai`) |
| `--model=<model>` | Pase sou modèl ki konfigire a pou ekzekisyon sa a (pa egzanp `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Fòma sòti: `table` (defo), `json`, `csv` |
| `--save` | Sove rezilta tès referans yo nan bazdone a pou konparezon istorik |

### Egzanp

Lanse tout suite tès referans lan ak founisè ak modèl aktyèl la:

```bash
wp gratis-ai-agent benchmark
```

Lanse yon sèl kesyon (`q-restaurant-website`) epi bay sòti a kòm JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Lanse kont yon modèl espesifik epi sove rezilta yo:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Sòti

Tès referans lan bay yon liy pa kesyon ak kolòn sa yo:

| Kolòn | Deskripsyon |
|---|---|
| `ID` | Idantifyan kesyon an |
| `Description` | Rezime kout sou senaryo tès referans lan |
| `Score` | Reyisi/echwe oswa nòt nimerik (0–100) |
| `Abilities Used` | Lis kapasite yo envoke, separe ak vigil |
| `Tokens` | Total token ki konsome |
| `Duration` | Tan total an segonn |

```
ID                       Deskripsyon                       Nòt    Kapasite yo itilize          Tokens  Dire
q-portfolio-site         Kreye yon CPT pòtfolyo ak etikèt  100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Bati yon sit entènèt restoran     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Aplike yon preset theme nwa       100    apply_theme_json_preset      986     4.2s
...
```

### Kesyon Tès Referans

Suite defo a gen ladan:

| ID | Senaryo |
|---|---|
| `q-portfolio-site` | Kreye yon CPT Pòtfolyo ak yon taksonomi Kategori Pwojè epi anrejistre yon modèl blòk |
| `q-restaurant-website` | Bati yon sit entènèt restoran konplè ak yon CPT meni, yon fòm rezèvasyon, ak navigasyon |
| `q-dark-mode-theme` | Aplike yon preset konsepsyon mòd nwa epi enjekte koulè mak yo |
| `q-nav-builder` | Kreye yon meni navigasyon prensipal ak kat atik epi ak yon meni deroulan anndan |
| `q-options-roundtrip` | Li, modifye, epi retabli yon ansanm opsyon WordPress |
| `q-ability-install` | Dekouvri epi enstale pake kapasite ki pi apwopriye pou yon ka itilizasyon ki dekri |

Ou ka anrejistre kesyon anplis atravè filtè `gratis_ai_agent_benchmark_questions` la.

---

## `wp gratis-ai-agent abilities`

Jere kapasite ak pake kapasite ki enstale yo.

### `wp gratis-ai-agent abilities list`

Lis tout kapasite ki anrejistre yo, sous yo (nwayo oswa pake), ak eta aktyèl yo.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opsyon**

| Opsyon | Deskripsyon |
|---|---|
| `--format=<format>` | Fòma sòti: `table` (defo), `json`, `csv` |

**Egzanp sòti**

```
Kapasite                 Sous                            Eta
register_post_type        gratis-ai-agent (core)          aktif
list_post_types           gratis-ai-agent (core)          aktif
delete_post_type          gratis-ai-agent (core)          aktif
register_taxonomy         gratis-ai-agent (core)          aktif
inject_custom_css         gratis-ai-agent (core)          aktif
apply_theme_json_preset   gratis-ai-agent (core)          aktif
create_product            gratis-ai-agent-woocommerce     aktif
```

---

### `wp gratis-ai-agent abilities install`

Telechaje epi aktive yon pake kapasite soti nan rejis la.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Agiman**

| Agiman | Deskripsyon |
|---|---|
| `<slug>` | Slug plugin pake kapasite a, pa egzanp `gratis-ai-agent-woocommerce` |

**Egzanp**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Dezaktive yon kapasite espesifik san retire pake a. Itil pou limite dimansyon ajan an sou yon sit bay.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Egzanp**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Re-aktive yon kapasite ki te dezaktive anvan.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Montre konfigirasyon aktyèl ajan an ak eta konektivite li.

```bash
wp gratis-ai-agent status
```

**Egzanp sòti**

```
Vèsyon Plugin:     1.4.0
Founisè IA:        Anthropic
Modèl:             claude-sonnet-4-6
Eta Founisè:       Konekte
Kapasite Chaje:    24
Rezilta Benchmark: 3 ekzekisyon sove (dènye: 2026-04-15)
Blòklist Opsyon:   18 antre
```

---

## `wp gratis-ai-agent logs`

Montre aktivite resan ajan an soti nan jounal debogaj la.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opsyon**

| Opsyon | Deskripsyon |
|---|---|
| `--last=<n>` | Montre dènye N antre jounal yo. Defo `50` |
| `--level=<level>` | Filtre pa nivo: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtre pa non kapasite |

**Egzanp**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Reyajiste eta agent lan: efase CSS ki te enjekte, retire CPT ak taksonomi agent lan te anrejistre, reyajiste estil global yo, epi vide kach opsyon agent lan. Pa retire plugin lan ni anviwònman li yo.

```bash
wp gratis-ai-agent reset [--yes]
```

Ajoute `--yes` pou sote mesaj konfimasyon an.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kòd Sòti

Tout kòmand yo sòti ak `0` lè yo reyisi. Kòd sòti ki pa zewo:

| Kòd | Siyifikasyon |
|---|---|
| `1` | Erè jeneral (gade mesaj erè a) |
| `2` | Echèk konektivite provider |
| `3` | Kapasite pa jwenn |
| `4` | Kesyon benchmark pa jwenn |
