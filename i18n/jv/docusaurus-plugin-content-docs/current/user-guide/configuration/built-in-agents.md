---
title: Agen Bawaan
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agen Bawaan (Built-in Agents)

Gratis AI Agent v1.9.0 ngirimake lima agen bawaan, saben agen wis disiapake kanthi alat sing fokus, sistem prompt sing disesuaikan, lan saran awal sing cocog karo tugas umum ing area kasebut. Ganti antarane agen ngganti apa sing bisa ditindakake asisten lan kepiye cara dia wangsul — tanpa perlu diatur saka pihak sampeyan.

## Apa Iku Agent?

Sabowah agen iku profil konfigurasi sing duwe jeneng sing nggabungake:

- **Tools** — kemampuan sing diizinkan kanggo dipanggil dening agen (Contone, Content Writer duwe akses kanggo kemampuan nggawe postingan; Design Studio duwe akses menyang CSS lan theme.json).
- **System prompt** — instruksi sing nentokake nada, prioritas, lan batasan agen kasebut.
- **Suggestions** — prompt sing wis ditulis sadurunge sing ditunjuka ing antarmuka obrolan kanggo mbantu sampeyan miwiti kanthi cepet.

## Akses Pemilih Agen (Accessing the Agent Picker)

1. Buka panel **Gratis AI Agent** ing sidebar admin WordPress.
2. Klik **ikon agen** ing pojok kiri atas header obrolan (ikon iki owah kanggo nuduhake agen sing aktif).
3. **Agent Picker** bakal mbukak minangka overlay tabel formulir. Sabowah agen dicantumake kanthi ikon, jeneng, lan deskripsi siji baris.
4. Klik baris agen kanggo ngaktifake. Header obrolan langsung diperbarui.

Sampeyan uga bisa ganti agen tengah obrolan — sistem prompt agen anyar bakal efektif wiwit pesen sabanjure.

## Lima Agen Bawaan (The Five Built-in Agents)

### Content Writer

**Fokus:** Nggawe lan ngedit postingan, halaman, lan formulir kontak.

**Alat sing tersedia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Apa yang jago dilakoni:**
- Nulis dan mempublikasi postingan blog saka ringkes utawa kerangka (outline) sing wis ana
- Gawe klompok landing page kanggo situs anyar
- Bangun form kontak lan tanya-tanya (enquiry forms)

**Saran awal:**
- *Tulis postingan blog 500 tembung babagan manfaat WordPress multisite.*
- *Gawe halaman About, Services, lan Contact terus publikasi.*
- *Tambahkan form booking enquiry ing halaman Contact.*

---

### Site Builder

**Fokus:** Gawe situs sakabehing tahap saka siji perintah (prompt).

**Alat sing ana:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Apa sing jago dilakoni:**
- Nggawe rencana pembangunan situs bertahap kanggo jenis bisnis sing wis dijelaske
- Njalankan saben tahap kanthi mandiri — struktur, konten, navigasi, desain
- Bisa ngatasi error nalika tengah rencana tanpa perlu intervensi manual
- Nginstal plugin sing direkomendasike minangka bagian saka pembangunan
- Gawe form kontak langsung saka antarmuka obrolan (chat interface) (Superdav AI Agent v1.10.0+)

**Saran awal:**
- *Gawe situs portofolio foto kanthi post type galeri, halaman booking, lan form kontak.*
- *Gawe situs restoran kanthi menu online, jam buka, lan form tanya-tanya booking meja.*
- *Siapake situs konsultasi freelance kanthi halaman layanan (service pages), bagian portofolio, lan blog.*
- *Tambahkan form kontak ing halaman Contact nganggo site builder.*

---

### Design Studio

**Fokus:** Personalisasi visual — warna, tipografi, CSS, lan pola blok.

**Alat sing Tersedia:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Apa sing apik:**
- Nggunakake preset tema sing wis ana jenengé (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ngatur tipografi lan palet warna global kanthi luwih detail liwat theme.json
- Masukake CSS kustom kanggo ngowahi tampilan khusus merekmu
- Nangkep screenshot saka halaman lan mriksa masalah desain

**Saran Awal:**
- *Terapke preset warm-editorial banjur atur warna utama dadi #2d6a4f.*
- *Nangkep screenshot homepage lan kandhani aku apa sing kudu diowahi.*
- *Gawe pola blok hero sing bisa diulang karo gambar latar jembar (full-width) lan judul sing tengah.*

---

### Plugin Manager

**Fokus:** Nemu, nginstall, lan ngatur plugin WordPress.

**Alat sing Tersedia:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Apa sing apik:**
- Ngajak rekomendasi plugin paling pas kanggo kebutuhan sing wis dijelaske
- Nginstall paket kemampuan (ability packs) saka registry
- Ngintip katalog kemampuan sing ana adhedhasar kategori

**Saran Awal:**
- *Plugin apa sing paling apik kanggo direktori anggota (membership directory)?*
- *Install paket kemampuan WooCommerce.*
- *Tunjukkan aku kabeh paket kemampuan e-commerce sing ana.*

---

### Support Assistant

**Fokus:** Ngajeni pitakonan babagan konten situs, pengaturan, lan konfigurasi WordPress.

**Alat sing Tersedia:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Apa yang bagus:**
- Nggolek pengaturan dan pilihan situs saiki.
- Ngerteni apa wae post types, taxonomies, lan menu sing wis diatur nang situs kuwi.
- Menehi jawaban kanggo pitakonan "apa fungsi pengaturan iki?" kanthi maca nilai langsung (live values).
- Dadi lapisan diagnostik mung kanggo maca sadurunge nggawe perubahan.

**Saran awal:**
- *Plugin lan pengaturan apa wae sing wis aktif nang situs iki?*
- *Daftar kabeh custom post types sing wis diregistrasi nang situs iki.*
- *Menu navigasi apa wae sing ana lan diwenehi ing ngendi?*

---

## Ngatur Agen (Customising Agents)

Sabanjure, saben agent bawaan bisa diowahi utawa diganti liwat filter `gratis_ai_agent_agents`.

### Nambah system prompt custom kanggo agent sing wis ana

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nSelalu tulis nganggo Briyete Inggris lan nganggo Oxford comma.";
    }
    return $agents;
} );
```

### Mendaftarke agent anyar

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts lan pages kanggo mesin pencari.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Kamu iku SEO specialist. Fokus marang optimasi keyword, meta description, lan structured data.',
        'suggestions'   => [
            'Tinjau judul homepage lan meta description-e.',
            'Saran panggulangan title tag kanggo lima post paling anyar.',
        ],
    ];
    return $agents;
} );
```

Agen anyar bakal muncul ing Agent Picker langsung sawise filter wis mlaku.

### Ngilangake agen sing wis ana

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
