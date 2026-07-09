---
title: Agen Bawaan
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agent Bawaan {#built-in-agents}

Gratis AI Agent v1.9.0 menyertakan lima agent bawaan, masing-masing telah dikonfigurasi sebelumnya dengan serangkaian alat yang terfokus, system prompt yang disesuaikan, dan saran awal yang cocok dengan tugas umum di area tersebut. Beralih antar agent mengubah apa yang dapat dilakukan assistant dan bagaimana ia merespons — tanpa konfigurasi apa pun dari Anda. Superdav AI Agent v1.18.0 dapat menambahkan alat yang sadar jadwal, catatan pengingat, gerbang persetujuan, dan notifikasi SMS ke workflow ini ketika integrasi terkait dikonfigurasi.

## Apa Itu Agent? {#what-is-an-agent}

Setiap agent adalah profil konfigurasi bernama yang menggabungkan:

- **Alat** — kemampuan yang diizinkan untuk dipanggil oleh agent (misalnya Content Writer memiliki akses ke kemampuan pembuatan posting; Design Studio memiliki akses ke kemampuan CSS dan theme.json)
- **System prompt** — instruksi yang menetapkan nada, prioritas, dan batasan agent
- **Saran** — prompt yang telah ditulis sebelumnya yang ditampilkan di antarmuka chat untuk membantu Anda memulai dengan cepat

## Mengakses Agent Picker {#accessing-the-agent-picker}

1. Buka panel **Gratis AI Agent** di sidebar admin WordPress.
2. Klik **ikon agent** di kiri atas header chat (ikon berubah untuk mencerminkan agent aktif).
3. **Agent Picker** terbuka sebagai overlay form-table. Setiap agent tercantum dengan ikon, nama, dan deskripsi satu baris.
4. Klik baris agent untuk mengaktifkannya. Header chat diperbarui segera.

Anda juga dapat beralih agent di tengah percakapan — system prompt agent baru berlaku mulai dari pesan berikutnya.

## Lima Agent Bawaan {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Fokus:** Membuat dan mengedit posting, halaman, dan formulir kontak.

**Alat yang tersedia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Dengan integrasi Superdav AI Agent v1.18.0 diaktifkan, konteks kalender yang dikonfigurasi, gerbang persetujuan, pengingat, dan alat notifikasi SMS juga dapat tersedia untuk workflow yang disetujui.

**Hal yang dikerjakannya dengan baik:**
- Menyusun dan menerbitkan posting blog dari brief atau outline
- Membuat batch halaman landing untuk situs baru
- Membangun formulir kontak dan pertanyaan
- Mengatur gambar unggulan pada posting dari URL atau pencarian
- Menyusun pesan tindak lanjut acara dari konteks Google Calendar yang dikonfigurasi, lalu berhenti sejenak untuk persetujuan sebelum mengirim notifikasi

**Saran awal:**
- *Tulis posting blog 500 kata tentang manfaat WordPress multisite.*
- *Buat halaman About, Services, dan Contact, lalu terbitkan semuanya.*
- *Tambahkan formulir pertanyaan pemesanan ke halaman Contact.*
- *Susun pengingat untuk peserta pada acara kalender yang dikonfigurasi besok dan tunggu persetujuan sebelum mengirimkannya.*

---

### Site Builder {#site-builder}

**Fokus:** Pembuatan situs web end-to-end dari satu prompt.

**Alat yang tersedia:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Dengan Superdav AI Agent v1.18.0, alat layanan terkelola, persetujuan, pengingat, kalender, dan SMS yang dikonfigurasi dapat tersedia jika administrator mengaktifkannya.

**Hal yang dikerjakannya dengan baik:**
- Menghasilkan rencana pembangunan situs multi-fase untuk jenis bisnis yang dijelaskan
- Menjalankan setiap fase secara otonom — struktur, konten, navigasi, desain
- Memulihkan dari kesalahan di tengah rencana tanpa memerlukan intervensi manual
- Menginstal plugin yang direkomendasikan sebagai bagian dari pembangunan
- Membuat formulir kontak langsung dari antarmuka chat (Superdav AI Agent v1.10.0+)
- Mengkoordinasikan pengingat peluncuran atau tindak lanjut peserta tanpa notifikasi duplikat ketika gerbang persetujuan dan catatan pengingat diaktifkan

**Saran awal:**
- *Bangun situs portofolio fotografi dengan jenis posting galeri, halaman pemesanan, dan formulir kontak.*
- *Buat situs web restoran dengan menu online, jam buka, dan formulir pertanyaan pemesanan meja.*
- *Siapkan situs konsultasi freelance dengan halaman layanan, bagian portofolio, dan blog.*
- *Tambahkan formulir kontak ke halaman Contact menggunakan site builder.*
- *Setelah checklist peluncuran situs disetujui, kirim pengingat SMS ke kontak stakeholder yang dikonfigurasi.*

---

### Design Studio {#design-studio}

**Fokus:** Kustomisasi visual — warna, tipografi, CSS, dan pola blok.

**Alat yang tersedia:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Hal yang dikerjakannya dengan baik:**
- Menerapkan preset theme bernama (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Menyesuaikan tipografi global dan palet warna melalui theme.json
- Menyuntikkan CSS kustom untuk override khusus brand
- Mengambil screenshot halaman dan meninjaunya untuk masalah desain

**Saran awal:**
- *Terapkan preset warm-editorial lalu atur warna utama ke #2d6a4f.*
- *Ambil screenshot homepage dan beri tahu saya apa yang akan Anda perbaiki.*
- *Buat pola blok hero yang dapat digunakan kembali dengan gambar latar full-width dan heading di tengah.*

### Plugin Manager {#plugin-manager}

**Fokus:** Menemukan, menginstal, dan mengelola plugin WordPress.

**Alat yang tersedia:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Hal yang dikerjakannya dengan baik:**
- Merekomendasikan plugin terbaik untuk kasus penggunaan yang dijelaskan
- Menginstal paket kemampuan dari registry
- Menelusuri katalog kemampuan yang tersedia berdasarkan kategori

**Saran awal:**
- *Apa plugin terbaik untuk direktori membership?*
- *Instal paket kemampuan WooCommerce.*
- *Tampilkan semua paket kemampuan ecommerce yang tersedia.*

---

### Support Assistant {#support-assistant}

**Fokus:** Menjawab pertanyaan tentang konten situs, pengaturan, dan konfigurasi WordPress.

**Alat yang tersedia:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Yang dilakukannya dengan baik:**
- Mencari pengaturan dan opsi site saat ini
- Menjelaskan jenis post, taksonomi, dan menu apa yang dikonfigurasi di site
- Menjawab pertanyaan "apa fungsi pengaturan ini?" dengan membaca nilai live
- Berfungsi sebagai lapisan diagnostik read-only sebelum membuat perubahan

**Saran awal:**
- *Plugin dan pengaturan apa yang saat ini aktif di site ini?*
- *Cantumkan semua jenis post kustom yang terdaftar di site ini.*
- *Menu navigasi apa yang ada dan di mana menu tersebut ditetapkan?*

---

## Integrasi Otomatisasi Superdav {#superdav-automation-integrations}

Ketika integrasi Superdav AI Agent v1.18.0 dikonfigurasi, agent bawaan dapat berpartisipasi dalam alur kerja otomatisasi yang lebih aman dan sadar jadwal:

- **Alat baca Google Calendar** memungkinkan agent memeriksa kalender dan acara yang dikonfigurasi sebelum menyusun pekerjaan tindak lanjut.
- **Pemetaan kontak dan peserta** membantu mencocokkan peserta acara dengan pengguna WordPress atau kontak yang dikenal.
- **Gerbang persetujuan manusia** menjeda tindakan sensitif hingga pengguna yang berwenang meninjau dan mengonfirmasinya.
- **Catatan pengingat** mencegah notifikasi duplikat ketika pekerjaan terjadwal mencoba ulang atau berulang.
- **Notifikasi SMS TextBee** mengirim pesan teks yang dikonfigurasi hanya ketika kredensial SMS dan izin alur kerja diaktifkan.

Alur kerja yang direkomendasikan: minta agent menyiapkan pesan atau tindakan, tinjau prompt persetujuan, lalu izinkan tindakan yang disetujui untuk dilanjutkan. Untuk pengingat berulang, biarkan deduplikasi pengingat tetap diaktifkan agar acara atau kontak yang sama tidak diberi tahu berulang kali.

---

## Menyesuaikan Agent {#customising-agents}

Setiap agent bawaan dapat diperluas atau diganti melalui filter `gratis_ai_agent_agents`.

### Menambahkan prompt sistem kustom ke agent yang ada {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Mendaftarkan agent baru {#registering-a-new-agent}

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

Agent baru muncul di Agent Picker segera setelah filter berjalan.

### Menghapus agent bawaan {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
