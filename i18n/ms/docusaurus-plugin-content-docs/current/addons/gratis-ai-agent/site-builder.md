---
title: Orkestrasi Pembina Laman v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orkestrasi Pembina Laman v2

Site Builder Orchestration v2 (diperkenalkan dalam Gratis AI Agent v1.4.0) ialah enjin yang menggerakkan penciptaan laman web berbilang langkah. Apabila anda meminta ejen untuk "membina laman web restoran" atau "mencipta portfolio dengan blog," orkestrator akan memecahkan matlamat keseluruhan itu menjadi **pelan** yang berstruktur, menemui plugin yang diperlukan untuk melaksanakannya, melaksanakan setiap langkah secara berurutan, menjejaki kemajuan, dan memulihkan diri daripada ralat secara autonomi.

---

## Cara Ia Berfungsi {#how-it-works}

### 1. Penjanaan Pelan (Plan Generation) {#1-plan-generation}

Apabila ejen menerima arahan membina laman web, ia akan memanggil keupayaan `create_site_plan` untuk menghasilkan **pelan laman** dalam format JSON. Pelan ini menerangkan:

- **Matlamat (Goal)** — apa yang perlu dilakukan oleh laman web yang siap
- **Fasa (Phases)** — kumpulan langkah berurutan (cth., _Persediaan_, _Jenis Kandungan_, _Reka Bentuk_, _Kandungan_)
- **Langkah (Steps)** — panggilan keupayaan individu dalam setiap fasa
- **Keperluan Plugin (Plugin requirements)** — plugin yang mesti diaktifkan untuk sesetengah langkah berjalan
- **Pelan Pemulihan (Fallbacks)** — langkah alternatif jika langkah utama gagal

**Contoh pelan (diringkaskan)**

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

### 2. Penemuan Plugin (Plugin Discovery) {#2-plugin-discovery}

Sebelum pelaksanaan bermula, orkestrator akan mengimbas `plugin_requirements` pelan dan menyemak plugin mana yang sudah aktif. Untuk plugin yang hilang, ia akan:

1. Mencari dalam pendaftar melalui `recommend_plugin` untuk padanan terbaik
2. Meminta ejen untuk mengesahkan cadangan tersebut
3. Memicu pemasangan jika diluluskan (atau jika auto-install diaktifkan dalam tetapan)

Kegagalan penemuan plugin tidak menyebabkan kegagalan total — orkestrator akan menandakan langkah yang terjejas sebagai `skipped` dan meneruskan dengan baki pelan.

### 3. Pelaksanaan Pelan (Plan Execution) {#3-plan-execution}

Orkestrator memanggil `execute_site_plan` dengan ID pelan. Pelaksanaan berjalan fasa demi fasa, langkah demi langkah:

- **Rujukan Langkah** (`__ref:` prefix) — langkah boleh merujuk output daripada langkah sebelumnya. Dalam contoh di atas, `__ref:create_menu.menu_id` diselesaikan kepada `menu_id` yang dikembalikan oleh langkah `create_menu`.
- **Langkah Selari (Parallel steps)** — langkah dalam fasa yang sama yang tiada kebergantungan antara satu sama lain akan dihantar secara serentak apabila bendera `parallel` ditetapkan.
- **Had Masa Langkah (Step timeout)** — setiap langkah mempunyai had masa individu (lalai: tetapan `Ability Timeout`). Langkah yang tamat masa akan ditandakan sebagai `failed` dan pelan akan diteruskan.

### 4. Penjejakan Kemajuan (Progress Tracking) {#4-progress-tracking}

Panggil `get_plan_progress` pada bila-bila masa untuk menyemak status pelaksanaan:

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

Pengguna WP-CLI boleh memantau kemajuan dengan:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Pemulihan Ralat (Error Recovery) {#5-error-recovery}

Apabila satu langkah gagal, orkestrator akan menyemak untuk **pelan pemulihan (fallback)** yang ditakrifkan dalam pelan:

- **Pelan Pemulihan Tersedia (Fallback available)** — langkah pemulihan akan dicuba serta-merta. Jika ia berjaya, pelaksanaan diteruskan. Jika ia juga gagal, langkah itu ditandakan sebagai `failed` dan pelaksanaan diteruskan ke langkah seterusnya.
- **Tiada Pelan Pemulihan (No fallback)** — langkah itu ditandakan sebagai `failed`. Langkah yang tidak kritikal akan dilangkau; langkah kritikal (ditandakan `required: true`) akan menghentikan fasa semasa dan mencetuskan percubaan pemulihan pada peringkat fasa.

Ejen akan melaporkan semua kegagalan dalam ringkasan pelan akhir dan mungkin mencadangkan langkah remedi manual untuk ralat yang tidak boleh dipulihkan.

---

## Keupayaan Pelan (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Menjana pelan laman berstruktur daripada penerangan matlamat bahasa semula jadi.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Penerangan bahasa semula jadi tentang laman web yang diingini |
| `style` | string | No | Keutamaan gaya visual: `minimal`, `bold`, `professional`, `playful`. Lalai: ejen memilih berdasarkan matlamat |
| `plugins` | array | No | Slug plugin untuk dimasukkan dalam pelan. Orkestrator akan menambah plugin yang diperlukan secara automatik. |
| `dry_run` | boolean | No | Jika `true`, ia akan mengembalikan JSON pelan tanpa menyimpannya atau melaksanakannya. Lalai `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Memulakan pelaksanaan pelan laman yang telah dijana sebelum ini.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID pelan yang akan dilaksanakan |
| `auto_install_plugins` | boolean | No | Jika `true`, ia akan memasang plugin yang diperlukan secara automatik tanpa pengesahan. Lalai `false` |
| `max_retries` | integer | No | Bilangan kali untuk mencuba semula langkah yang gagal sebelum meneruskan. Lalai `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Mengembalikan status pelaksanaan semasa pelan laman.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID Pelan untuk disemak |

**Returns** objek kemajuan yang diterangkan dalam [Penjejakan Kemajuan](#4-penjejakan-kemajuan) di atas.

---

### `handle_plan_error` {#handleplanerror}

Menyelesaikan langkah yang gagal secara manual dan menyambung semula pelaksanaan pelan dari langkah seterusnya. Gunakan ini apabila pemulihan automatik tidak mungkin dilakukan dan anda ingin campur tangan.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID Pelan |
| `step_id` | string | Yes | ID langkah yang gagal |
| `resolution` | string | Yes | Salah satu daripada `skip` (langkau dan teruskan), `retry` (cuba semula langkah serta-merta), atau `mark_done` (dianggap berjaya tanpa menjalankan semula) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Membandingkan v1 dan v2 {#comparing-v1-and-v2}

| Ciri | v1 | v2 |
|---|---|---|
| Pelan berfasa pelbagai | Tidak | Ya |
| Rujukan output langkah (`__ref:`) | Tidak | Ya |
| Penemuan plugin | Manual | Automatik |
| API penjejakan kemajuan | Tidak | Ya |
| Pemulihan ralat | Gagal dan berhenti | Pelan Pemulihan + teruskan |
| Pelaksanaan langkah selari | Tidak | Ya (pilihan per fasa) |
| Perintah pelan WP-CLI | Tidak | Ya |
| Integrasi benchmark | Tidak | Ya (`q-restaurant-website`) |

---

## Perintah Pelan WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Menjana pelan laman daripada penerangan matlamat.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Melaksanakan pelan yang telah dijana sebelum ini.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Menunjukkan kemajuan semasa untuk pelan yang sedang atau telah selesai.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

M menyenaraikan semua pelan laman (tertangguh, sedang berjalan, dan selesai).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Menetapkan semula pelan yang gagal kepada `pending` supaya ia boleh dilaksanakan semula dari awal.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
