---
title: Rujukan WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referensi WP-CLI

Gratis AI Agent menyediakan keluarga perintah `wp gratis-ai-agent` untuk melakukan *benchmarking* agen, mengurus keupayaan (*abilities*), dan menyemak status agen dari baris perintah. Semua perintah memerlukan WP-CLI 2.0 atau lebih tinggi.

## Instalasi {#installation}

Perintah WP-CLI didaftarkan secara automatik apabila *plugin* diaktifkan. Sahkan dengan:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Menjalankan set ujian *benchmark* Keupayaan Agen (*Agent Capabilities*) — iaitu set *prompt* yang kompleks dan berbilang langkah yang menguji keseluruhan keupayaan. Gunakan ini untuk menilai prestasi model, membandingkan penyedia AI, atau mengesahkan *ability pack* sebelum digunakan dalam persekitaran produksi.

### Sinopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Pilihan {#options}

| Pilihan | Penerangan |
|---|---|
| `--question=<id>` | Jalankan satu soalan *benchmark* mengikut ID, bukannya set penuh |
| `--provider=<provider>` | Ganti penyedia AI yang dikonfigurasi untuk larian ini (cth: `anthropic`, `openai`) |
| `--model=<model>` | Ganti model yang dikonfigurasi untuk larian ini (cth: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format output: `table` (lalai), `json`, `csv` |
| `--save` | Simpan hasil *benchmark* ke dalam pangkalan data untuk perbandingan sejarah |

### Contoh {#examples}

Jalankan set *benchmark* penuh dengan penyedia dan model semasa:

```bash
wp gratis-ai-agent benchmark
```

Jalankan satu soalan (`q-restaurant-website`) dan output sebagai JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Jalankan terhadap model tertentu dan simpan hasilnya:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

*Benchmark* akan mengeluarkan satu baris bagi setiap soalan dengan lajur berikut:

| Lajur | Penerangan |
|---|---|
| `ID` | Pengenal soalan |
| `Description` | Ringkasan ringkas senario *benchmark* |
| `Score` | Lulus/gagal atau skor numerik (0–100) |
| `Abilities Used` | Senarai keupayaan yang digunakan (dipisahkan koma) |
| `Tokens` | Jumlah token yang digunakan |
| `Duration` | Masa sebenar dalam saat |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Cipta CPT portfolio dengan taksonomi    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Bina laman web restoran penuh       92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Guna tetapan tema gelap           100    apply_theme_json_preset      986     4.2s
...
```

### Soalan Benchmark {#benchmark-questions}

Set lalai termasuk:

| ID | Senario |
|---|---|
| `q-portfolio-site` | Cipta CPT Portfolio dengan taksonomi Kategori Projek dan daftarkan corak blok |
| `q-restaurant-website` | Bina laman web restoran penuh dengan CPT menu, borang tempahan, dan navigasi |
| `q-dark-mode-theme` | Guna tetapan reka bentuk mod gelap dan suntik warna jenama |
| `q-nav-builder` | Cipta menu navigasi utama empat item dengan *dropdown* bersarang |
| `q-options-roundtrip` | Baca, ubah, dan pulihkan set pilihan WordPress |
| `q-ability-install` | Cari dan pasang *ability pack* yang paling sesuai untuk kes penggunaan yang diterangkan |

Soalan tambahan boleh didaftarkan melalui *filter* `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Mengurus keupayaan dan *ability pack* yang dipasang.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Menyenaraikan semua keupayaan yang didaftarkan, sumbernya (teras atau *pack*), dan status semasa.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Pilihan**

| Pilihan | Penerangan |
|---|---|
| `--format=<format>` | Format output: `table` (lalai), `json`, `csv` |

**Contoh output**

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

Memuat turun dan mengaktifkan *ability pack* daripada pendaftar.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Hujah**

| Hujah | Penerangan |
|---|---|
| `<slug>` | *Slug plugin* *ability pack*, cth: `gratis-ai-agent-woocommerce` |

**Contoh**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Melumpuhkan keupayaan tertentu tanpa membuang *pack*. Berguna untuk mengehadkan skop agen pada laman tertentu.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Contoh**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Mengaktifkan semula keupayaan yang sebelum ini dilumpuhkan.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Memaparkan konfigurasi agen semasa dan status sambungan.

```bash
wp gratis-ai-agent status
```

**Contoh output**

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

Memaparkan aktiviti agen terkini dari log *debug*.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Pilihan**

| Pilihan | Penerangan |
|---|---|
| `--last=<n>` | Tunjukkan N entri log terakhir. Lalai `50` |
| `--level=<level>` | Menapis mengikut tahap: `info`, `warning`, `error` |
| `--ability=<ability>` | Menapis mengikut nama keupayaan |

**Contoh**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Mengatur semula keadaan agen: membersihkan CSS yang disuntik, membuang CPT dan taksonomi yang didaftarkan agen, menetapkan semula gaya global, dan mengosongkan *cache* pilihan agen. Tidak membuang *plugin* atau tetapan.

```bash
wp gratis-ai-agent reset [--yes]
```

Tambah `--yes` untuk melangkau permintaan pengesahan.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kod Keluar {#exit-codes}

Semua perintah keluar dengan `0` jika berjaya. Kod keluar bukan sifar:

| Kod | Maksud |
|---|---|
| `1` | Ralat umum (sila lihat mesej ralat) |
| `2` | Kegagalan sambungan penyedia |
| `3` | Keupayaan tidak ditemui |
| `4` | Soalan *benchmark* tidak ditemui |
