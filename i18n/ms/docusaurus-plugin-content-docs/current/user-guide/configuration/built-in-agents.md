---
title: Ejen Terbina Dalam
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents Terbina Dalam

Gratis AI Agent v1.9.0 disertakan dengan lima agents terbina dalam, setiap satu diprakonfigurasi dengan set tools yang berfokus, system prompt yang disesuaikan, dan cadangan permulaan yang dipadankan dengan tugas lazim dalam bidang tersebut. Bertukar antara agents mengubah perkara yang assistant boleh lakukan dan cara ia memberi respons — tanpa sebarang konfigurasi di pihak anda. Superdav AI Agent v1.18.0 boleh menambah tools yang peka jadual, rekod peringatan, approval gates, dan notifikasi SMS kepada workflows ini apabila integrasi berkaitan dikonfigurasi.

## Apakah Itu Agent?

Setiap agent ialah profil konfigurasi bernama yang menggabungkan:

- **Tools** — kebolehan yang agent dibenarkan untuk seru (cth. Content Writer mempunyai akses kepada kebolehan penciptaan siaran; Design Studio mempunyai akses kepada kebolehan CSS dan theme.json)
- **System prompt** — arahan yang menetapkan nada, keutamaan, dan kekangan agent
- **Cadangan** — prompts pratulis yang ditunjukkan dalam antara muka sembang untuk membantu anda bermula dengan cepat

## Mengakses Agent Picker

1. Buka panel **Gratis AI Agent** dalam bar sisi admin WordPress.
2. Klik **ikon agent** di bahagian kiri atas pengepala sembang (ikon berubah untuk mencerminkan agent aktif).
3. **Agent Picker** dibuka sebagai tindanan form-table. Setiap agent disenaraikan dengan ikon, nama, dan huraian satu barisnya.
4. Klik baris agent untuk mengaktifkannya. Pengepala sembang dikemas kini serta-merta.

Anda juga boleh bertukar agents di tengah-tengah perbualan — system prompt agent baharu berkuat kuasa daripada mesej seterusnya.

## Lima Agents Terbina Dalam

### Content Writer

**Fokus:** Mencipta dan mengedit siaran, halaman, dan borang hubungan.

**Tools tersedia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Dengan integrasi Superdav AI Agent v1.18.0 didayakan, konteks kalendar yang dikonfigurasi, approval gates, peringatan, dan tools notifikasi SMS juga mungkin tersedia kepada workflows yang diluluskan.

**Perkara yang dilakukannya dengan baik:**
- Merangka dan menerbitkan siaran blog daripada ringkasan atau rangka
- Mencipta kelompok halaman pendaratan untuk laman baharu
- Membina borang hubungan dan pertanyaan
- Menetapkan imej pilihan pada siaran daripada URL atau carian
- Merangka mesej susulan acara daripada konteks Google Calendar yang dikonfigurasi, kemudian menjeda untuk kelulusan sebelum menghantar notifikasi

**Cadangan permulaan:**
- *Tulis siaran blog 500 perkataan tentang manfaat WordPress multisite.*
- *Cipta halaman About, Services, dan Contact serta terbitkannya.*
- *Tambahkan borang pertanyaan tempahan pada halaman Contact.*
- *Rangka peringatan untuk peserta pada acara kalendar yang dikonfigurasi esok dan tunggu kelulusan sebelum menghantarnya.*

---

### Site Builder

**Fokus:** Penciptaan laman web hujung ke hujung daripada satu prompt.

**Tools tersedia:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Dengan Superdav AI Agent v1.18.0, tools perkhidmatan terurus, kelulusan, peringatan, kalendar, dan SMS yang dikonfigurasi mungkin tersedia di tempat pentadbir mendayakannya.

**Perkara yang dilakukannya dengan baik:**
- Menjana pelan binaan laman berbilang fasa untuk jenis perniagaan yang diterangkan
- Melaksanakan setiap fasa secara autonomi — struktur, kandungan, navigasi, reka bentuk
- Pulih daripada ralat di pertengahan pelan tanpa memerlukan campur tangan manual
- Memasang plugins yang disyorkan sebagai sebahagian daripada binaan
- Mencipta borang hubungan secara langsung daripada antara muka sembang (Superdav AI Agent v1.10.0+)
- Menyelaras peringatan pelancaran atau susulan peserta tanpa notifikasi pendua apabila approval gates dan rekod peringatan didayakan

**Cadangan permulaan:**
- *Bina laman portfolio fotografi dengan jenis siaran galeri, halaman tempahan, dan borang hubungan.*
- *Cipta laman web restoran dengan menu dalam talian, waktu operasi, dan borang pertanyaan tempahan meja.*
- *Sediakan laman perundingan bebas dengan halaman perkhidmatan, seksyen portfolio, dan blog.*
- *Tambahkan borang hubungan pada halaman Contact menggunakan site builder.*
- *Selepas senarai semak pelancaran laman diluluskan, hantar peringatan SMS kepada kenalan pihak berkepentingan yang dikonfigurasi.*

---

### Design Studio

**Fokus:** Penyesuaian visual — warna, tipografi, CSS, dan corak blok.

**Tools tersedia:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Perkara yang dilakukannya dengan baik:**
- Menggunakan pratetap theme bernama (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Memperhalus tipografi global dan palet warna melalui theme.json
- Menyuntik CSS tersuai untuk penggantian khusus jenama
- Mengambil tangkap layar halaman dan menyemaknya untuk isu reka bentuk

**Cadangan permulaan:**
- *Gunakan pratetap warm-editorial dan kemudian tetapkan warna utama kepada #2d6a4f.*
- *Ambil tangkap layar halaman utama dan beritahu saya perkara yang anda akan tambah baik.*
- *Cipta corak blok hero boleh guna semula dengan imej latar lebar penuh dan tajuk berpusat.*

### Plugin Manager

**Fokus:** Menemukan, memasang, dan mengurus plugins WordPress.

**Tools tersedia:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Perkara yang dilakukannya dengan baik:**
- Mengesyorkan plugin terbaik untuk kes penggunaan yang diterangkan
- Memasang pek kebolehan daripada registry
- Melayari katalog kebolehan tersedia mengikut kategori

**Cadangan permulaan:**
- *Apakah plugin terbaik untuk direktori membership?*
- *Pasang pek kebolehan WooCommerce.*
- *Tunjukkan kepada saya semua pek kebolehan e-dagang yang tersedia.*

---

### Support Assistant

**Fokus:** Menjawab soalan tentang kandungan laman, tetapan, dan konfigurasi WordPress.

**Tools tersedia:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Perkara yang dilakukannya dengan baik:**
- Mencari tetapan dan pilihan site semasa
- Menerangkan jenis post, taksonomi, dan menu yang dikonfigurasikan pada site
- Menjawab soalan "apakah fungsi tetapan ini?" dengan membaca nilai langsung
- Berfungsi sebagai lapisan diagnostik baca sahaja sebelum membuat perubahan

**Cadangan permulaan:**
- *Apakah plugin dan tetapan yang sedang aktif pada site ini?*
- *Senaraikan semua jenis post tersuai yang didaftarkan pada site ini.*
- *Apakah menu navigasi yang wujud dan di manakah ia ditetapkan?*

---

## Integrasi Automasi Superdav

Apabila integrasi Superdav AI Agent v1.18.0 dikonfigurasikan, agent terbina dalam boleh mengambil bahagian dalam aliran kerja automasi yang lebih selamat dan peka jadual:

- **Alat baca Google Calendar** membolehkan agent memeriksa kalendar dan acara yang dikonfigurasikan sebelum merangka kerja susulan.
- **Pemetaan kenalan dan peserta** membantu memadankan peserta acara dengan pengguna WordPress atau kenalan yang diketahui.
- **Pintu kelulusan manusia** menjeda tindakan sensitif sehingga pengguna yang diberi kuasa menyemak dan mengesahkannya.
- **Rekod peringatan** menghalang pemberitahuan pendua apabila kerja berjadual mencuba semula atau berulang.
- **Pemberitahuan SMS TextBee** menghantar mesej teks yang dikonfigurasikan hanya apabila kelayakan SMS dan kebenaran aliran kerja didayakan.

Aliran kerja yang disyorkan: minta agent menyediakan mesej atau tindakan, semak gesaan kelulusan, kemudian benarkan tindakan yang diluluskan untuk disambung semula. Untuk peringatan berulang, pastikan penyahduaan peringatan didayakan supaya acara atau kenalan yang sama tidak dimaklumkan berulang kali.

---

## Menyesuaikan Agent

Setiap agent terbina dalam boleh dilanjutkan atau digantikan melalui filter `gratis_ai_agent_agents`.

### Menambah prompt sistem tersuai pada agent sedia ada

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Mendaftarkan agent baharu

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Agent baharu muncul dalam Agent Picker sebaik sahaja filter berjalan.

### Mengalih keluar agent terbina dalam

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
