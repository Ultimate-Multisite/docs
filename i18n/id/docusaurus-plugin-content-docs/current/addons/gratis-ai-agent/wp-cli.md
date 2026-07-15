---
title: Referensi WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Referensi WP-CLI

Gratis AI Agent menyediakan keluarga perintah `wp gratis-ai-agent` untuk melakukan *benchmarking* agen, mengelola kemampuan (*abilities*), dan menanyakan status agen dari *command line*. Semua perintah memerlukan WP-CLI versi 2.0 atau yang lebih tinggi.

## Instalasi {#installation}

Perintah WP-CLI akan terdaftar secara otomatis saat *plugin* diaktifkan. Verifikasi dengan:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Menjalankan *benchmark suite* Kemampuan Agen — serangkaian *prompt* multi-langkah yang kompleks yang menguji seluruh kemampuan yang tersedia. Gunakan ini untuk mengevaluasi kinerja model, membandingkan penyedia AI, atau memvalidasi paket kemampuan sebelum diterapkan di lingkungan produksi.

### Sinopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opsi {#options}

| Opsi | Deskripsi |
|---|---|
| `--question=<id>` | Menjalankan satu pertanyaan *benchmark* berdasarkan ID, bukan seluruh *suite* |
| `--provider=<provider>` | Mengganti penyedia AI yang dikonfigurasi untuk *run* ini (misalnya, `anthropic`, `openai`) |
| `--model=<model>` | Mengganti model yang dikonfigurasi untuk *run* ini (misalnya, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format keluaran: `table` (bawaan), `json`, `csv` |
| `--save` | Menyimpan hasil *benchmark* ke *database* untuk perbandingan historis |

### Contoh {#examples}

Menjalankan seluruh *benchmark suite* dengan penyedia dan model saat ini:

```bash
wp gratis-ai-agent benchmark
```

Menjalankan satu pertanyaan (`q-restaurant-website`) dan mengeluarkan hasilnya dalam format JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Menjalankan dengan model tertentu dan menyimpan hasilnya:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Keluaran {#output}

*Benchmark* akan mengeluarkan satu baris per pertanyaan dengan kolom-kolom berikut:

| Kolom | Deskripsi |
|---|---|
| `ID` | Pengidentifikasi pertanyaan |
| `Description` | Ringkasan singkat dari skenario *benchmark* |
| `Score` | Lulus/gagal atau skor numerik (0–100) |
| `Abilities Used` | Daftar kemampuan yang dipanggil, dipisahkan koma |
| `Tokens` | Total *token* yang dikonsumsi |
| `Duration` | Waktu *wall-clock* dalam detik |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Pertanyaan Benchmark {#benchmark-questions}

*Suite* bawaan mencakup:

| ID | Skenario |
|---|---|
| `q-portfolio-site` | Membuat CPT Portofolio dengan taksonomi Kategori Proyek dan mendaftarkan pola blok |
| `q-restaurant-website` | Membuat situs web restoran lengkap dengan CPT menu, formulir pemesanan, dan navigasi |
| `q-dark-mode-theme` | Menerapkan *preset* desain mode gelap dan menyuntikkan warna merek |
| `q-nav-builder` | Membuat menu navigasi utama empat item dengan *dropdown* bersarang |
| `q-options-roundtrip` | Membaca, memodifikasi, dan memulihkan serangkaian opsi WordPress |
| `q-ability-install` | Menemukan dan menginstal paket kemampuan yang paling sesuai untuk kasus penggunaan yang dijelaskan |

Pertanyaan tambahan dapat didaftarkan melalui *filter* `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Mengelola kemampuan dan paket kemampuan yang terinstal.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Mendaftar semua kemampuan yang terdaftar, sumbernya (inti atau paket), dan statusnya saat ini.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opsi**

| Opsi | Deskripsi |
|---|---|
| `--format=<format>` | Format keluaran: `table` (bawaan), `json`, `csv` |

**Contoh keluaran**

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

Mengunduh dan mengaktifkan paket kemampuan dari *registry*.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumen**

| Argumen | Deskripsi |
|---|---|
| `<slug>` | *Slug* *plugin* dari paket kemampuan, misalnya `gratis-ai-agent-woocommerce` |

**Contoh**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Menonaktifkan kemampuan tertentu tanpa menghapus paketnya. Berguna untuk membatasi cakupan agen pada situs tertentu.

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

Mengaktifkan kembali kemampuan yang sebelumnya dinonaktifkan.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Menampilkan konfigurasi agen dan status konektivitas saat ini.

```bash
wp gratis-ai-agent status
```

**Contoh keluaran**

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

Menampilkan aktivitas agen terbaru dari *debug log*.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opsi**

| Opsi | Deskripsi |
|---|---|
| `--last=<n>` | Menampilkan N entri log terakhir. Bawaan `50` |
| `--level=<level>` | Filter berdasarkan level: `info`, `warning`, `error` |
| `--ability=<ability>` | Filter berdasarkan nama kemampuan |

**Contoh**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Meriset status agen: membersihkan CSS yang disuntikkan, menghapus CPT dan taksonomi yang didaftarkan agen, mereset *global styles*, dan mengosongkan *cache* opsi agen. Tidak menghapus *plugin* atau pengaturannya.

```bash
wp gratis-ai-agent reset [--yes]
```

Tambahkan `--yes` untuk melewati permintaan konfirmasi.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Semua perintah keluar dengan kode `0` jika berhasil. Kode keluar non-nol:

| Kode | Arti |
|---|---|
| `1` | Kesalahan umum (lihat pesan kesalahan) |
| `2` | Kegagalan konektivitas penyedia |
| `3` | Kemampuan tidak ditemukan |
| `4` | Pertanyaan *benchmark* tidak ditemukan |
