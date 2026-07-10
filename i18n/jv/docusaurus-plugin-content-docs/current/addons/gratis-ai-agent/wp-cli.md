---
title: Rujukan WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referensi WP-CLI {#wp-cli-reference}

Gratis AI Agent nyedhiyakake kulawarga perintah `wp gratis-ai-agent` kanggo benchmarking agent, ngatur abilities, lan njaluk status agent saka baris perintah. Kabeh perintah mbutuhake WP-CLI 2.0 utawa luwih dhuwur.

## Instalasi {#installation}

Perintah WP-CLI kadhaftar kanthi otomatis nalika plugin aktif. Priksa nganggo:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Nglakokake rangkaian benchmark Agent Capabilities — kumpulan prompt rumit, multi-langkah sing nguji sakabehe cakupan kemampuan. Gunakake iki kanggo ngevaluasi kinerja model, mbandhingake panyedhiya AI, utawa validasi paket kemampuan sadurunge disebarake menyang produksi.

### Sinopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opsi {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Lakokake siji pitakon benchmark miturut ID tinimbang sakabehe rangkaian |
| `--provider=<provider>` | Nindhes panyedhiya AI sing wis dikonfigurasi kanggo lakon iki (umpamane `anthropic`, `openai`) |
| `--model=<model>` | Nindhes model sing wis dikonfigurasi kanggo lakon iki (umpamane `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format keluaran: `table` (bawaan), `json`, `csv` |
| `--save` | Simpen asil benchmark menyang database kanggo perbandhingan historis |

### Tuladha {#examples}

Lakonake sakabehe rangkaian benchmark nganggo panyedhiya lan model saiki:

```bash
wp gratis-ai-agent benchmark
```

Lakonake siji pitakon (`q-restaurant-website`) lan metuake minangka JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Lakonake marang model tartamtu lan simpen asil:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Keluaran {#output}

Benchmark metuake siji larik saben pitakon kanthi kolom ing ngisor iki:

| Column | Description |
|---|---|
| `ID` | Pangenal pitakon |
| `Description` | Ringkesan cekak saka skenario benchmark |
| `Score` | Lulus/gagal utawa skor numerik (0–100) |
| `Abilities Used` | Dhaptar abilities sing diundang, dipisah nganggo koma |
| `Tokens` | Total token sing digunakake |
| `Duration` | Wektu wall-clock ing detik |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Pitakon Benchmark {#benchmark-questions}

Rangkaian bawaan kalebu:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Gawe Portfolio CPT kanthi taksonomi Project Category lan ndhaptar pola blok |
| `q-restaurant-website` | Bangun situs web restoran lengkap nganggo menu CPT, formulir pesenan, lan navigasi |
| `q-dark-mode-theme` | Terapake preset desain mode peteng lan lebokake werna merek |
| `q-nav-builder` | Gawe menu navigasi utama isi papat item kanthi dropdown bersarang |
| `q-options-roundtrip` | Waca, owahi, lan pulihake sakumpulan opsi WordPress |
| `q-ability-install` | Temokake lan pasang paket kemampuan sing paling cocog kanggo kasus panggunaan sing diterangake |

Pitakon tambahan bisa didhaptar liwat filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Ngatur abilities lan paket kemampuan sing wis dipasang.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Nampilake kabeh abilities sing kadhaftar, sumberé (inti utawa paket), lan status saiki.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opsi**

| Option | Description |
|---|---|
| `--format=<format>` | Format keluaran: `table` (bawaan), `json`, `csv` |

**Tuladha keluaran**

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

Ngundhuh lan ngaktifake paket kemampuan saka registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumen**

| Argument | Description |
|---|---|
| `<slug>` | Slug plugin saka paket kemampuan, umpamané `gratis-ai-agent-woocommerce` |

**Tuladha**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Mateni kemampuan tartamtu tanpa mbusak paketé. Migunani kanggo matesi cakupan agent ing situs tartamtu.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Tuladha**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Ngaktifake maneh kemampuan sing sadurungé dipateni.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Nampilake konfigurasi agent saiki lan status konektivitas.

```bash
wp gratis-ai-agent status
```

**Tuladha keluaran**

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

Nampilake aktivitas agent paling anyar saka log debug.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opsi**

| Opsi | Katrangan |
|---|---|
| `--last=<n>` | Tampilna N entri log pungkasan. Gawané `50` |
| `--level=<level>` | Saring miturut level: `info`, `warning`, `error` |
| `--ability=<ability>` | Saring miturut jeneng ability |

**Tuladha**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ngreset kahanan agen: mbusak CSS sing disuntikaké, mbusak CPT lan taksonomi sing didaftar déning agen, ngreset gaya global, lan ngosongaké cache opsi agen. Ora mbusak plugin utawa setelané.

```bash
wp gratis-ai-agent reset [--yes]
```

Tambahaké `--yes` kanggo ngliwati prompt konfirmasi.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kode Metu {#exit-codes}

Kabèh prentah metu `0` nalika kasil. Kode metu non-nol:

| Kode | Tegesé |
|---|---|
| `1` | Kasalahan umum (delengen pesen kasalahan) |
| `2` | Gagal panyambungan provider |
| `3` | Ability ora ditemokaké |
| `4` | Pitakon benchmark ora ditemokaké |
