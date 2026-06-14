---
title: Agen Bawaan
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agen Bawaan (Built-in Agents)

Gratis AI Agent v1.9.0 ngirim lima agen bawaan, masing-masing sudah disiapkan dengan sekumpulan alat yang fokus, *system prompt* yang disesuaikan, dan saran awal yang cocok untuk tugas umum di bidang tersebut. Ganti antar agen akan mengubah apa saja yang bisa dilakukan asisten dan bagaimana responsnya — tanpa perlu konfigurasi dari pihak Anda.

## Naon éta Agent? (What Is an Agent?)

Setiap agen itu profil konfigurasi yang diberi nama yang menggabungkan:

- **Tools** — kemampuan yang diizinkan untuk dipanggil oleh agen (contohnya, seorang Content Writer punya akses ke kemampuan pembuatan postingan; sebuah Design Studio punya akses ke CSS dan theme.json).
- **System prompt** — instruksi yang mengatur nada, prioritas, dan batasan agen.
- **Suggestions** — *prompt* yang sudah ditulis sebelumnya yang ditampilkan di antarmuka obrolan untuk membantu Anda memulai dengan cepat.

## Cara Akses Agent Picker

1. Buka panel **Gratis AI Agent** di sidebar admin WordPress.
2. Klik **ikon agen** di kiri atas header obrolan (ikonnya akan berubah sesuai agen yang aktif).
3. **Agent Picker** akan terbuka sebagai *overlay* tabel formulir. Setiap agen terdaftar dengan ikon, nama, dan deskripsi satu baris.
4. Klik baris agen untuk mengaktifkannya. Header obrolan langsung diperbarui.

Anda juga bisa mengganti agen di tengah percakapan — *system prompt* agen baru akan berlaku mulai pesan berikutnya.

## Lima Agen Bawaan

### Content Writer (Penulis Konten)

**Fokus:** Membuat dan mengedit postingan, halaman, dan formulir kontak.

**Alat yang tersedia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Naonna alusna:**
- Ngadéngan jeung ngajual posting blog tina ring rangkuman atawa kerangka (outline)
- Ngarancang sababaraha landing page pikeun situs anyar
- Ngawangun form kontak jeur (contact forms)
- Ngatur gambar unggulan (featured images) dina posting tina URL atawa pencarian

**Saran awal:**
- *Tulis postingan blog 500 kecap ngeunaan mangpaat WordPress multisite.*
- *Buat halaman Tentang Kami, Layanan, jeung Kontak terus publikasikan.*
- *Tambah form tanya jadwal (booking enquiry form) dina halaman Kontak.*

---

### Site Builder

**Fokus:** Ngawangun situs end-to-end tina hiji perintah.

**Alat anu aya:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Naonna alusna:**
- Ngahasilkeun rencana bangun situs multi-tahap pikeun jenis usaha anu dijelaskeun
- Ngajalankeun unggal tahapan secara mandiri — struktur, konten, navigasi, desain
- Ngabéréskeun error di tengah rencana tanpa perlu intervensi manual
- Nginstal plugin anu direkomendasikeun salaku bagian tina proses bangun situs
- Ngadamel form kontak langsung tina antarmuka obrolan (chat interface) (Superdav AI Agent v1.10.0+)

**Saran awal:**
- *Bangun situs portofolio foto kalayan post type galeri, halaman booking, jeung form kontak.*
- *Buat situs restoran kalayan menu online, jam buka, jeung form tanya jadwal meja (table-booking enquiry form).*
- *Atur situs konsultasi lepas (freelance consulting site) kalayan halaman layanan, bagian portofolio, jeung blog.*
- *Tambah form kontak dina halaman Kontak nganggo site builder.*

---

### Design Studio

**Fokus:** Ngatur tampilan visual — warna, tipografi, CSS, jeung pola blok.

**Alat-alat anu Tersedia:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Naonna Alatan Ieu Bisa Ngajanin:**
- Ngagunake preset tema anu aya (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ngatur tipografi jeung palet warna global sacara leuwih rapi ngaliwatan theme.json
- Ngajorake CSS kustom pikeun ganti gaya khusus brand
- Ngambil screenshot hiji halaman sarta ngabahasna masalah desain

**Saran Awal:**
- *Terapkeun preset warm-editorial terus atuh warna utama jadi #2d6a4f.*
- *Ambil screenshot homepage jeung caritakeun naon anu anjeun anggap patut ditingkatkan.*
- *Béda pola hero anu bisa dipaké deui (reusable) kalawan gambar latar nu ngagantungkeun leutik jeung judul anu di tengah.*

---

### Plugin Manager

**Fokus:** Ngajakake, ngalaksanakeun, sarta ngatur WordPress plugin.

**Alat-alat anu Tersedia:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Naonna Alatan Ieu Bisa Ngajanin:**
- Ngarekomendasi plugin panghadéna pikeun kasusageun (use case) anu dijelaskeun
- Nginstal paket ability ti registry
- Ngabahas katalog ability anu aya dumasar kategori

**Saran Awal:**
- *Naon plugin panghadéna keur direktori anggota (membership directory)?*
- *Instal paket ability WooCommerce.*
- *Tunjukeun sagala paket ability e-commerce anu aya.*

---

### Support Assistant

**Fokus:** Ngajawab patarosan ngeunaan konten situs, pengaturan, jeung konfigurasi WordPress.

**Alat-alat anu Tersedia:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Naonna alus:**
- Ngabahas pengaturan situs jeung pilihan ayeuna.
- Ngajelaskeun naon éta post types, taxonomies, jeung menus anu diatur dina situs.
- Ngajawab patarosan "naon fungsi pengaturan ieu?" ku maca nilai langsung.
- Jadi lapisan diagnostik ngan ukur maca saméméngan ngalakukeun ganti.

**Saran awal:**
- *Plugin jeung pengaturan naon waé anu keur aktif dina situs ieu?*
- *Daftar sadaya custom post types anu geus didaftarkeun dina situs ieu.*
- *Menu navigasi naon waé anu aya jeung di mana éta dipasang?*

---

## Ngatur Agen (Customising Agents)

Sabaraha agen bawaan bisa dikembangkeun atawa diganti ngaliwatan filter `gratis_ai_agent_agents`.

### Nambah system prompt custom ka agen anu geus aya

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nSelalu tulisan dina Briyut English jeung nganggo Oxford comma.";
    }
    return $agents;
} );
```

### Mendaftar agen anyar

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Ngoptimalkeun post je halaman pikeun mesin pencari.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Anjeun téh SEO specialist. Fokus kana optimalisasi kata kunci, meta description, jeung structured data.',
        'suggestions'   => [
            'Tinjau judul homepage je meta descriptionna.',
            'Saran perbaikan title tag pikeun lima post pamungkas.',
        ],
    ];
    return $agents;
} );
```

Agent anyar muncul di Agent Picker langsung setelah filter dijalankan.

### Menghapus agen bawaan

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
