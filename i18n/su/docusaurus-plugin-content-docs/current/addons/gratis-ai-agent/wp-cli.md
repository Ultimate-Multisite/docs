---
title: Rujukan WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Rujukan WP-CLI {#wp-cli-reference}

Gratis AI Agent mawa kulawarga paréntah `wp gratis-ai-agent` pikeun nguji patokan agent, ngatur kamampuhan, jeung naroskeun status agent tina command line. Sadaya paréntah merlukeun WP-CLI 2.0 atawa leuwih luhur.

## Pamasangan {#installation}

Paréntah WP-CLI didaptarkeun sacara otomatis nalika plugin aktip. Pariksa ku:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Ngajalankeun rangkay uji patokan Kamampuhan Agent — sakumpulan prompt rumit, sababaraha léngkah, anu nguji sakabéh beungeut kamampuhan. Paké ieu pikeun meunteun kinerja modél, ngabandingkeun panyadia AI, atawa ngesahkeun pak kamampuhan saméméh dipasang ka produksi.

### Sinopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Pilihan {#options}

| Pilihan | Pedaran |
|---|---|
| `--question=<id>` | Jalankeun hiji patarosan uji patokan ku ID tibatan sakabéh rangkay |
| `--provider=<provider>` | Timpa panyadia AI anu geus dikonpigurasikeun pikeun jalankeun ieu (contona `anthropic`, `openai`) |
| `--model=<model>` | Timpa modél anu geus dikonpigurasikeun pikeun jalankeun ieu (contona `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format kaluaran: `table` (bawaan), `json`, `csv` |
| `--save` | Simpen hasil uji patokan ka basis data pikeun ngabandingkeun sajarah |

### Conto {#examples}

Jalankeun sakabéh rangkay uji patokan jeung panyadia sarta modél ayeuna:

```bash
wp gratis-ai-agent benchmark
```

Jalankeun hiji patarosan (`q-restaurant-website`) sarta kaluarkeun salaku JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Jalankeun ngalawan modél husus sarta simpen hasil:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Kaluaran {#output}

Uji patokan ngahasilkeun hiji baris per patarosan kalayan kolom di handap:

| Kolom | Pedaran |
|---|---|
| `ID` | Pangidentipikasi patarosan |
| `Description` | Ringkesan pondok ngeunaan skénario uji patokan |
| `Score` | Lulus/gagal atawa skor angka (0–100) |
| `Abilities Used` | Daptar kamampuhan anu dipaké, dipisahkeun ku koma |
| `Tokens` | Total token anu dikonsumsi |
| `Duration` | Waktu wall-clock dina detik |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Patarosan Uji Patokan {#benchmark-questions}

Rangkay bawaan ngawengku:

| ID | Skénario |
|---|---|
| `q-portfolio-site` | Jieun CPT Portopolio kalayan taksonomi Kategori Proyék sarta daptarkeun pola blok |
| `q-restaurant-website` | Ngawangun situs wéb réstoran lengkep kalayan CPT ménu, formulir booking, jeung navigasi |
| `q-dark-mode-theme` | Terapkeun prasetél désain dark-mode sarta selapkeun warna brand |
| `q-nav-builder` | Jieun ménu navigasi utama opat item kalayan dropdown nyarang |
| `q-options-roundtrip` | Baca, robah, sarta balikkeun sakumpulan pilihan WordPress |
| `q-ability-install` | Panggihan sarta pasang pak kamampuhan anu paling cocog pikeun kasus pamakéan anu ditétélakeun |

Patarosan tambahan bisa didaptarkeun ngaliwatan filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Ngatur kamampuhan jeung pak kamampuhan anu geus dipasang.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Nembongkeun sadaya kamampuhan anu kadaptar, sumberna (inti atawa pak), jeung status ayeuna.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Pilihan**

| Pilihan | Pedaran |
|---|---|
| `--format=<format>` | Format kaluaran: `table` (bawaan), `json`, `csv` |

**Conto kaluaran**

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

Ngundeur sarta ngaktipkeun pak kamampuhan tina registri.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumén**

| Argumén | Pedaran |
|---|---|
| `<slug>` | Slug plugin tina pak kamampuhan, contona `gratis-ai-agent-woocommerce` |

**Conto**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Nonaktipkeun kamampuhan husus tanpa mupus pakna. Mangpaat pikeun ngawatesan lingkup agent dina situs anu tangtu.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Conto**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Ngaktipkeun deui kamampuhan anu saméméhna dinonaktipkeun.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Nembongkeun konfigurasi agent ayeuna jeung status konektipitas.

```bash
wp gratis-ai-agent status
```

**Conto kaluaran**

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

Nembongkeun kagiatan agent panganyarna tina debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Pilihan**

| Pilihan | Pedaran |
|---|---|
| `--last=<n>` | Témbongkeun N éntri log panungtung. Baku `50` |
| `--level=<level>` | Saring dumasar tingkat: `info`, `warning`, `error` |
| `--ability=<ability>` | Saring dumasar ngaran kamampuh |

**Conto**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ngareset kaayaan agen: mupus CSS anu diselapkeun, ngahapus CPT jeung taksonomi anu didaptarkeun ku agen, ngareset gaya global, sarta ngosongkeun cache pilihan agén. Henteu ngahapus pangaya atawa setélanana.

```bash
wp gratis-ai-agent reset [--yes]
```

Tambahkeun `--yes` pikeun ngalangkungan pamenta konfirmasi.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kode Kaluar {#exit-codes}

Sadaya paréntah kaluar `0` lamun suksés. Kode kaluar non-enol:

| Kode | Harti |
|---|---|
| `1` | Kasalahan umum (tingali pesen kasalahan) |
| `2` | Gagal sambungan panyadia |
| `3` | Kamampuh teu kapanggih |
| `4` | Patalékan tolok ukur teu kapanggih |
