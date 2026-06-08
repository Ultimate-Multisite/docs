---
title: Orkestrasi Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (diperkenalkan di Gratis AI Agent v1.4.0) adalah mesin yang menjalankan pembuatan situs web multi-langkah. Ketika Anda meminta agen untuk "membuat situs web restoran" atau "membuat portofolio dengan blog", orkestrator akan memecah tujuan tingkat tinggi itu menjadi **rencana** terstruktur, menemukan plugin yang diperlukan untuk mewujudkannya, menjalankan setiap langkah secara berurutan, melacak kemajuan, dan pulih dari kesalahan secara mandiri.

---

## Cara Kerjanya

### 1. Pembuatan Rencana (Plan Generation)

Ketika agen menerima instruksi pembuatan situs, ia akan memanggil kemampuan `create_site_plan` untuk menghasilkan **rencana situs** dalam format JSON. Rencana ini menjelaskan:

- **Goal** — apa yang harus dilakukan oleh situs web yang sudah jadi
- **Phases** — kelompok langkah berurutan (misalnya, _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — panggilan kemampuan individu di dalam setiap fase
- **Plugin requirements** — plugin yang harus aktif agar langkah tertentu dapat berjalan
- **Fallbacks** — langkah alternatif jika langkah utama gagal

**Contoh rencana (disederhanakan)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Penemuan Plugin (Plugin Discovery)

Sebelum eksekusi dimulai, orkestrator akan memindai `plugin_requirements` dari rencana dan memeriksa plugin mana yang sudah aktif. Untuk plugin yang hilang, ia akan:

1. Mencari di registri melalui `recommend_plugin` untuk kecocokan terbaik
2. Meminta agen untuk mengonfirmasi rekomendasi tersebut
3. Memicu instalasi jika disetujui (atau jika auto-install diaktifkan di pengaturan)

Kegagalan penemuan plugin tidak fatal — orkestrator akan menandai langkah yang terpengaruh sebagai `skipped` dan melanjutkan dengan sisa rencana.

### 3. Eksekusi Rencana (Plan Execution)

Orkestrator memanggil `execute_site_plan` dengan ID rencana. Eksekusi berjalan fase demi fase, langkah demi langkah:

- **Referensi langkah** (`__ref:` prefix) — langkah dapat merujuk pada hasil dari langkah sebelumnya. Dalam contoh di atas, `__ref:create_menu.menu_id` diselesaikan menjadi `menu_id` yang dikembalikan oleh langkah `create_menu`.
- **Langkah paralel** — langkah-langkah dalam fase yang sama yang tidak memiliki ketergantungan satu sama lain akan dikirim secara bersamaan ketika flag `parallel` diatur.
- **Batas waktu langkah** — setiap langkah memiliki batas waktu individual (default: pengaturan `Ability Timeout`). Langkah yang melebihi batas waktu akan ditandai `failed` dan rencana akan dilanjutkan.

### 4. Pelacakan Kemajuan (Progress Tracking)

Panggil `get_plan_progress` kapan saja untuk memeriksa status eksekusi:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

Pengguna WP-CLI dapat memantau kemajuan dengan:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Pemulihan Kesalahan (Error Recovery)

Ketika sebuah langkah gagal, orkestrator akan memeriksa **fallback** langkah yang didefinisikan dalam rencana:

- **Fallback tersedia** — langkah fallback akan dicoba segera. Jika berhasil, eksekusi berlanjut. Jika gagal juga, langkah tersebut ditandai `failed` dan eksekusi berlanjut ke langkah berikutnya.
- **Tidak ada fallback** — langkah tersebut ditandai `failed`. Langkah yang tidak kritis akan dilewati; langkah kritis (ditandai `required: true`) akan menghentikan fase saat ini dan memicu upaya pemulihan tingkat fase.

Agen akan melaporkan semua kegagalan dalam ringkasan rencana akhir dan mungkin menyarankan langkah remediasi manual untuk kesalahan yang tidak dapat dipulihkan.

---

## Kemampuan Rencana Situs (Site Plan Abilities)

### `create_site_plan`

Menghasilkan rencana situs terstruktur dari deskripsi tujuan bahasa alami.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Deskripsi bahasa alami dari situs web yang diinginkan |
| `style` | string | No | Preferensi gaya visual: `minimal`, `bold`, `professional`, `playful`. Default: agen memilih berdasarkan tujuan |
| `plugins` | array | No | Slug plugin yang akan dimasukkan dalam rencana. Orkestrator akan menambahkan plugin yang diperlukan secara otomatis. |
| `dry_run` | boolean | No | Jika `true`, mengembalikan JSON rencana tanpa menyimpannya atau mengeksekusinya. Default `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Memulai eksekusi rencana situs yang telah dibuat sebelumnya.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID rencana yang akan dieksekusi |
| `auto_install_plugins` | boolean | No | Jika `true`, secara otomatis menginstal plugin yang diperlukan tanpa konfirmasi. Default `false` |
| `max_retries` | integer | No | Jumlah kali untuk mencoba kembali langkah yang gagal sebelum melanjutkan. Default `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Mengembalikan status eksekusi rencana situs saat ini.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID rencana yang akan ditanyakan |

**Returns** objek kemajuan yang dijelaskan di [Pelacakan Kemajuan](#4-progress-tracking) di atas.

---

### `handle_plan_error`

Secara manual menyelesaikan langkah yang gagal dan melanjutkan eksekusi rencana dari langkah berikutnya. Gunakan ini ketika pemulihan otomatis tidak mungkin dilakukan dan Anda ingin melakukan intervensi.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID rencana |
| `step_id` | string | Yes | ID langkah yang gagal |
| `resolution` | string | Yes | Salah satu dari `skip` (lewati dan lanjutkan), `retry` (coba kembali langkah segera), atau `mark_done` (dianggap berhasil tanpa menjalankan ulang) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Membandingkan v1 dan v2

| Fitur | v1 | v2 |
|---|---|---|
| Rencana multi-fase | Tidak | Ya |
| Referensi output langkah (`__ref:`) | Tidak | Ya |
| Penemuan plugin | Manual | Otomatis |
| API pelacakan kemajuan | Tidak | Ya |
| Pemulihan kesalahan | Gagal dan berhenti | Fallback + lanjutkan |
| Eksekusi langkah paralel | Tidak | Ya (opsional per fase) |
| Perintah rencana WP-CLI | Tidak | Ya |
| Integrasi benchmark | Tidak | Ya (`q-restaurant-website`) |

---

## Perintah Rencana WP-CLI

### `wp gratis-ai-agent plan create`

Menghasilkan rencana situs dari deskripsi tujuan.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Mengeksekusi rencana yang telah dibuat sebelumnya.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Menampilkan kemajuan saat ini untuk rencana yang sedang berjalan atau yang sudah selesai.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Mendaftar semua rencana situs (tertunda, sedang berjalan, dan selesai).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Meriset rencana yang gagal menjadi `pending` sehingga dapat dijalankan kembali dari awal.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
