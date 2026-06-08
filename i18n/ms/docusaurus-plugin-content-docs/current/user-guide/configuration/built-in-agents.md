---
title: Agen Bawaan
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agen Bawaan

Gratis AI Agent v1.9.0 dilengkapi dengan lima agen bawaan, setiap satunya telah dikonfigurasi awal dengan set alat yang fokus, arahan sistem yang disesuaikan, dan cadangan permulaan yang sepadan dengan tugas-tugas biasa dalam bidang tersebut. Menukar antara agen akan mengubah apa yang boleh dilakukan oleh pembantu dan cara ia bertindak balas — tanpa sebarang konfigurasi daripada anda.

## Apa Itu Agen?

Setiap agen adalah profil konfigurasi bernama yang menggabungkan:

- **Tools** — keupayaan yang dibenarkan untuk dipanggil oleh agen (contohnya, Content Writer mempunyai akses kepada keupayaan penciptaan pos; Design Studio mempunyai akses kepada keupayaan CSS dan theme.json)
- **System prompt** — arahan yang menetapkan nada, keutamaan, dan batasan agen
- **Suggestions** — arahan pra-tulis yang dipaparkan dalam antara muka sembang untuk membantu anda memulakan dengan pantas

## Mengakses Pemilih Agen (Agent Picker)

1. Buka panel **Gratis AI Agent** dalam sidebar admin WordPress.
2. Klik **ikon agen** di bahagian kiri atas tajuk sembang (ikon akan berubah untuk mencerminkan agen yang aktif).
3. **Agent Picker** akan terbuka sebagai lapisan overlay bentuk jadual borang. Setiap agen disenaraikan dengan ikon, nama, dan penerangan satu baris.
4. Klik baris agen untuk mengaktifkannya. Tajuk sembang akan dikemas kini serta-merta.

Anda juga boleh menukar agen di tengah-tengah perbualan — arahan sistem agen baharu akan berkuat kuasa mulai mesej seterusnya.

## Lima Agen Bawaan

### Content Writer

**Fokus:** Mencipta dan menyunting pos, halaman, dan borang hubungan.

**Alat yang tersedia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Apa yang dilakukan dengan baik:**
- Menyusun draf dan menerbitkan pos blog daripada ringkasan atau rangka kerja
- Mencipta kelompok halaman pendaratan (landing pages) untuk tapak baharu
- Membina borang hubungan dan pertanyaan
- Menetapkan imej utama pada pos daripada URL atau carian

**Cadangan permulaan:**
- *Tulis pos blog 500 perkataan tentang faedah WordPress multisite.*
- *Cipta halaman Tentang, Perkhidmatan, dan Hubungi dan terbitkan.*
- *Tambah borang pertanyaan tempahan ke halaman Hubungi.*

---

### Site Builder

**Fokus:** Penciptaan laman web dari hujung ke hujung daripada satu arahan sahaja.

**Alat yang tersedia:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Apa yang dilakukan dengan baik:**
- Menjana pelan binaan tapak pelbagai fasa untuk jenis perniagaan yang diterangkan
- Melaksanakan setiap fasa secara autonomi — struktur, kandungan, navigasi, reka bentuk
- Pulih daripada ralat di tengah-tengah pelan tanpa memerlukan campur tangan manual
- Memasang plugin yang disyorkan sebagai sebahagian daripada binaan
- Mencipta borang hubungan terus daripada antara muka sembang (Superdav AI Agent v1.10.0+)

**Cadangan permulaan:**
- *Bina tapak portfolio fotografi dengan jenis pos galeri, halaman tempahan, dan borang hubungan.*
- *Cipta laman web restoran dengan menu dalam talian, waktu operasi, dan borang pertanyaan tempahan meja.*
- *Sediakan tapak perundingan bebas dengan halaman perkhidmatan, bahagian portfolio, dan blog.*
- *Tambah borang hubungan ke halaman Hubungi menggunakan pembina tapak.*

---

### Design Studio

**Fokus:** Penyesuaian visual — warna, tipografi, CSS, dan corak blok.

**Alat yang tersedia:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Apa yang dilakukan dengan baik:**
- Mengaplikasikan preset tema bernama (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Menala tipografi global dan palet warna melalui theme.json
- Menyuntik CSS tersuai untuk penindasan khusus jenama
- Mengambil tangkapan skrin halaman dan meninjaunya untuk isu reka bentuk

**Cadangan permulaan:**
- *Gunakan preset warm-editorial dan kemudian tetapkan warna utama kepada #2d6a4f.*
- *Ambil tangkapan skrin laman utama dan beritahu saya apa yang anda akan perbaiki.*
- *Cipta corak blok hero yang boleh digunakan semula dengan imej latar belakang lebar penuh dan tajuk di tengah.*

---

### Plugin Manager

**Fokus:** Menemui, memasang, dan mengurus plugin WordPress.

**Alat yang tersedia:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Apa yang dilakukan dengan baik:**
- Mencadangkan plugin terbaik untuk kes penggunaan yang diterangkan
- Memasang pakej keupayaan daripada pendaftar
- Melayari katalog keupayaan yang tersedia mengikut kategori

**Cadangan permulaan:**
- *Apakah plugin terbaik untuk direktori keahlian?*
- *Pasang pakej keupayaan WooCommerce.*
- *Tunjukkan semua pakej keupayaan e-dagang yang tersedia.*

---

### Support Assistant

**Fokus:** Menjawab soalan tentang kandungan tapak, tetapan, dan konfigurasi WordPress.

**Alat yang tersedia:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Apa yang dilakukan dengan baik:**
- Mencari tetapan dan pilihan tapak semasa
- Menerangkan apa itu jenis pos, taksonomi, dan menu yang dikonfigurasi pada tapak
- Menjawab soalan "apa fungsi tetapan ini?" dengan membaca nilai langsung
- Berfungsi sebagai lapisan diagnostik baca-sahaja sebelum membuat sebarang perubahan

**Cadangan permulaan:**
- *Apakah plugin dan tetapan yang aktif pada tapak ini?*
- *Senaraikan semua jenis pos tersuai yang didaftarkan pada tapak ini.*
- *Menu navigasi apa yang wujud dan di mana ia ditetapkan?*

---

## Menyesuaikan Agen

Setiap agen bawaan boleh diperluaskan atau digantikan melalui filter `gratis_ai_agent_agents`.

### Menambah arahan sistem tersuai kepada agen sedia ada

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Mendaftarkan agen baharu

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

Agen baharu akan muncul dalam Agent Picker serta-merta selepas filter dijalankan.

### Membuang agen bawaan

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
