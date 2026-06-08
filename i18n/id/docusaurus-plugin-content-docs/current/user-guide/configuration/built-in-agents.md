---
title: Agen Bawaan
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agen Bawaan

Gratis AI Agent v1.9.0 hadir dengan lima agen bawaan, yang masing-masing sudah dikonfigurasi dengan serangkaian alat yang fokus, prompt sistem yang disesuaikan, dan saran awal yang cocok untuk tugas umum di bidang tersebut. Beralih antar agen akan mengubah apa yang bisa dilakukan asisten dan bagaimana ia merespons — tanpa perlu Anda melakukan konfigurasi apa pun.

## Apa Itu Agen?

Setiap agen adalah profil konfigurasi bernama yang menggabungkan:

- **Tools** — kemampuan yang diizinkan untuk dipanggil oleh agen (misalnya, Content Writer memiliki akses ke kemampuan pembuatan postingan; Design Studio memiliki akses ke kemampuan CSS dan theme.json)
- **System prompt** — instruksi yang mengatur nada, prioritas, dan batasan agen
- **Suggestions** — prompt yang sudah ditulis sebelumnya dan ditampilkan di antarmuka obrolan untuk membantu Anda memulai dengan cepat

## Mengakses Pemilih Agen (Agent Picker)

1. Buka panel **Gratis AI Agent** di sidebar admin WordPress.
2. Klik **ikon agen** di kiri atas header obrolan (ikon akan berubah untuk mencerminkan agen yang aktif).
3. **Agent Picker** akan terbuka sebagai lapisan overlay berbentuk tabel formulir. Setiap agen terdaftar dengan ikon, nama, dan deskripsi satu baris.
4. Klik baris agen untuk mengaktifkannya. Header obrolan akan diperbarui seketika.

Anda juga dapat mengganti agen di tengah percakapan — prompt sistem agen baru akan berlaku mulai dari pesan berikutnya.

## Lima Agen Bawaan

### Content Writer

**Fokus:** Membuat dan mengedit postingan, halaman, dan formulir kontak.

**Tools yang tersedia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Apa yang dikerjakannya dengan baik:**
- Menyusun dan menerbitkan postingan blog dari ringkasan atau kerangka
- Membuat kumpulan halaman arahan (landing page) untuk situs baru
- Membuat formulir kontak dan pertanyaan
- Mengatur gambar unggulan (featured image) pada postingan dari URL atau pencarian

**Saran awal:**
- *Tulis postingan blog 500 kata tentang manfaat WordPress multisite.*
- *Buat halaman Tentang, Layanan, dan Kontak, lalu terbitkan.*
- *Tambahkan formulir pertanyaan pemesanan ke halaman Kontak.*

---

### Site Builder

**Fokus:** Pembuatan situs web secara menyeluruh dari satu prompt.

**Tools yang tersedia:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Apa yang dikerjakannya dengan baik:**
- Menghasilkan rencana pembangunan situs multi-fase untuk jenis bisnis yang dijelaskan
- Mengeksekusi setiap fase secara otonom — struktur, konten, navigasi, desain
- Pulih dari kesalahan di tengah rencana tanpa memerlukan intervensi manual
- Menginstal plugin yang direkomendasikan sebagai bagian dari pembangunan
- Membuat formulir kontak langsung dari antarmuka obrolan (Superdav AI Agent v1.10.0+)

**Saran awal:**
- *Bangun situs portofolio fotografi dengan tipe postingan galeri, halaman pemesanan, dan formulir kontak.*
- *Buat situs web restoran dengan menu online, jam buka, dan formulir pertanyaan pemesanan meja.*
- *Siapkan situs konsultasi lepas dengan halaman layanan, bagian portofolio, dan blog.*
- *Tambahkan formulir kontak ke halaman Kontak menggunakan site builder.*

---

### Design Studio

**Fokus:** Kustomisasi visual — warna, tipografi, CSS, dan pola blok.

**Tools yang tersedia:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Apa yang dikerjakannya dengan baik:**
- Menerapkan preset tema bernama (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Menyempurnakan tipografi global dan palet warna melalui theme.json
- Menyuntikkan CSS kustom untuk penimpaan spesifik merek
- Mengambil tangkapan layar halaman dan meninjaunya untuk masalah desain

**Saran awal:**
- *Terapkan preset warm-editorial, lalu atur warna utama menjadi #2d6a4f.*
- *Ambil tangkapan layar beranda dan beri tahu saya apa yang akan Anda tingkatkan.*
- *Buat pola blok hero yang dapat digunakan kembali dengan gambar latar belakang lebar penuh dan judul di tengah.*

---

### Plugin Manager

**Fokus:** Menemukan, menginstal, dan mengelola plugin WordPress.

**Tools yang tersedia:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Apa yang dikerjakannya dengan baik:**
- Merekomendasikan plugin terbaik untuk kasus penggunaan yang dijelaskan
- Menginstal paket kemampuan (ability pack) dari registry
- Menjelajahi katalog kemampuan yang tersedia berdasarkan kategori

**Saran awal:**
- *Apa plugin terbaik untuk direktori keanggotaan?*
- *Instal paket kemampuan WooCommerce.*
- *Tunjukkan semua paket kemampuan ecommerce yang tersedia.*

---

### Support Assistant

**Fokus:** Menjawab pertanyaan tentang konten situs, pengaturan, dan konfigurasi WordPress.

**Tools yang tersedia:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Apa yang dikerjakannya dengan baik:**
- Mencari pengaturan dan opsi situs saat ini
- Menjelaskan tipe postingan, taksonomi, dan menu apa yang dikonfigurasi di situs
- Menjawab pertanyaan "apa fungsi pengaturan ini?" dengan membaca nilai langsung
- Berfungsi sebagai lapisan diagnostik *read-only* sebelum melakukan perubahan

**Saran awal:**
- *Plugin dan pengaturan apa yang saat ini aktif di situs ini?*
- *Daftar semua tipe postingan kustom yang terdaftar di situs ini.*
- *Menu navigasi apa yang ada dan di mana menu tersebut ditetapkan?*

---

## Kustomisasi Agen

Setiap agen bawaan dapat diperluas atau diganti melalui filter `gratis_ai_agent_agents`.

### Menambahkan prompt sistem kustom ke agen yang sudah ada

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Mendaftarkan agen baru

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

Agen baru akan muncul di Agent Picker segera setelah filter dijalankan.

### Menghapus agen bawaan

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
