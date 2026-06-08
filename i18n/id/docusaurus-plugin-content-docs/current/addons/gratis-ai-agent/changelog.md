---
title: Catatan Perubahan
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Dirilis pada 2026-04-28

### Baru

- **Kemampuan `create_contact_form`** — membuat formulir kontak menggunakan plugin formulir yang aktif (Contact Form 7, WPForms, Fluent Forms, atau Gravity Forms) dan mengembalikan shortcode yang siap disematkan di postingan atau halaman mana pun.
- **Kemampuan `set_featured_image`** — menetapkan gambar unggulan (featured image) ke postingan atau halaman dari ID lampiran Media Library yang sudah ada atau URL jarak jauh; secara otomatis mengimpor gambar ketika URL disediakan.
- **Kemampuan `batch_create_posts`** — membuat beberapa postingan dalam satu panggilan kemampuan. Mendukung parameter yang sama dengan `create_post`, melaporkan keberhasilan/kegagalan per postingan, dan memiliki mode opsional `stop_on_error`.
- **Parameter `page_template`** — ditambahkan ke `create_post` dan `update_post`. Menetapkan file template halaman PHP (misalnya, `page-full-width.php`) saat membuat atau memperbarui. Kirim string kosong ke `update_post` untuk kembali ke default tema.
- **Kemampuan tangkapan layar sisi klien** — `capture_screenshot`, `compare_screenshots`, dan `review_page_design`. Menangkap tangkapan layar penuh atau viewport dari halaman langsung melalui headless browser sisi server, membandingkan dua tangkapan layar, dan mendapatkan tinjauan desain yang dihasilkan AI yang mencakup tata letak, tipografi, warna, dan aksesibilitas.
- **Lima agen bawaan** — Content Writer, Site Builder, Design Studio, Plugin Manager, dan Support Assistant. Setiap agen memiliki set alat khusus, prompt sistem yang disesuaikan, dan saran awal. Dapat diubah melalui **Agent Picker** baru di header chat. Lihat [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — tab **Settings → Feature Flags** baru dengan sakelar kontrol akses (batasi untuk administrator, batasi untuk admin jaringan, akses pelanggan, nonaktif untuk non-anggota) dan opsi branding (sembunyikan atribusi footer, nama agen kustom, sembunyikan agent picker, gunakan ikon situs sebagai avatar chat). Lihat [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Pulihkan sesi terakhir** — panel chat sekarang secara otomatis memuat riwayat percakapan terbaru saat halaman dimuat dan saat widget dibuka, sehingga konteks tidak pernah hilang saat navigasi halaman.
- **Tautan aksi plugin** — tautan cepat ke Settings dan Abilities Registry kini muncul di layar **Plugins → Installed Plugins** WordPress di bawah deskripsi plugin.

### Ditingkatkan

- **Coba ulang sumber gambar** — agen sekarang mencoba semua sumber gambar gratis yang dikonfigurasi sebelum beralih ke gambar yang dihasilkan AI jika pengunduhan gagal.
- **Panel info model** — selalu terlihat di header chat; tidak lagi tersembunyi setelah pesan pertama.
- **Perilaku auto-scroll** — auto-scroll berhenti ketika pengguna menggulir ke atas untuk membaca; tombol **Scroll to bottom** mengambang muncul dan hilang secara otomatis ketika pengguna mencapai pesan terbaru.
- **UI Agent Picker** — didesain ulang sebagai overlay form-table dengan ikon per agen, sehingga lebih mudah untuk mengidentifikasi dan beralih agen secara sekilas.
- **Chunk JS yang dimuat secara malas (Lazy-loaded JS chunks)** — bundel JavaScript awal widget chat sekarang dipecah menjadi chunk yang dimuat secara malas, mengurangi ukuran bundel awal sebesar 75–90%.
- **Desain ulang widget chat** — ikon AI terpadu menggantikan avatar kustom sebelumnya; konsisten dengan sistem agen bawaan.
- **Linkifikasi URL** — URL yang muncul di pesan sistem dan gelembung pesan error kini ditampilkan sebagai tautan yang dapat diklik.

### Diperbaiki

- **Kemampuan penemuan (Ability discoverability)** — deskripsi, referensi prompt sistem, dan penyelarasan namespace diperbaiki sehingga semua kemampuan muncul di daftar alat agen dengan andal.
- **Cache penyedia (Providers cache)** — penyedia sekarang di-cache di seluruh situs melalui penghitung versi, mencegah masalah penyedia usang pada jaringan multisite.
- **`ability_invalid_output`** — diselesaikan di 12 handler kemampuan; semuanya mengembalikan respons JSON yang terstruktur dengan benar.
- **Pipeline `pending_client_tool_calls`** — dihubungkan dari ujung ke ujung sehingga panggilan alat sisi klien selesai dengan benar dan mengembalikan hasil ke model.
- **Laci riwayat (History drawer)** — perubahan yang tidak dapat diurungkan dikecualikan dari daftar urunan; tautan **View full history** sekarang berfungsi dengan benar.
- **Sistem perubahan/urunan** — lima bug terpisah diperbaiki dan disatukan di bawah antarmuka admin baru.
- **Toast Simpan Pengaturan** — notifikasi snackbar sekarang muncul dengan andal setelah mengklik **Save Settings**.
- **Menu konteks sampah (Trash context menu)** — ditambahkan opsi **Delete Permanently** sehingga item dapat dihapus secara permanen tanpa meninggalkan tampilan sampah.
- **Edit & kirim ulang** — mengklik ikon edit sekarang hanya masuk ke mode edit untuk pesan yang diklik, bukan semua pesan dalam utas.
- **Tinggi tata letak chat** — panel chat menyesuaikan tingginya ketika konten yang disuntikkan plugin (notifikasi admin, banner) muncul di atas halaman, mencegah area input terdorong keluar layar.

---

## 1.4.0 — Dirilis pada 2026-04-09

### Baru

- **Perintah benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — menjalankan rangkaian benchmark Agent Capabilities v1 dari baris perintah untuk pipeline CI dan alur kerja evaluasi model. Mendukung eksekusi per pertanyaan, penimpaan penyedia/model, dan output JSON/CSV.
- **Rangkaian benchmark Agent Capabilities v1** — set prompt multi-langkah yang kompleks dan terstruktur yang menguji seluruh permukaan kemampuan, dengan penilaian dan pelaporan token/durasi.
- **Kemampuan Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrasi bertahan di seluruh restart melalui tabel opsi.
- **Kemampuan Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Mendukung taksonomi hierarkis dan datar dengan slug rewrite opsional.
- **Kemampuan Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Termasuk lima preset kurasi: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Kemampuan Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Membaca dan menulis nilai theme.json melalui WordPress Global Styles API.
- **Kemampuan manajemen menu navigasi** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Mendukung menu bersarang dan penugasan lokasi tema.
- **Kemampuan Manajemen Opsi** — `get_option`, `set_option`, `delete_option`, `list_options`. Termasuk blokir daftar hitam keamanan bawaan yang melindungi opsi WordPress penting dari modifikasi.
- **Abilities Registry yang dapat diinstal** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Temukan dan aktifkan paket kemampuan yang didistribusikan sebagai plugin WordPress.
- **Orkestrasi Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Rencana pembangunan situs multi-fase dengan penemuan plugin, referensi output langkah, pelacakan kemajuan, dan pemulihan error otonom.
- **Pertanyaan benchmark situs web restoran** (`q-restaurant-website`) — uji ujung ke ujung yang mencakup pendaftaran CPT, design system, navigasi, dan penemuan plugin.
- **Plugin konektor penyedia AI** ditambahkan ke blueprint WordPress Playground untuk pengaturan pengembangan lokal yang lebih cepat.

### Ditingkatkan

- README diperbarui dengan dokumentasi dan instruksi pengaturan konektor penyedia AI.

### Diperbaiki

- 25 kegagalan tes PHPUnit pada cabang `main` telah diselesaikan.
- Format URL rilis GitHub di `blueprint.json` diperbaiki.
- Penomoran ulang ID tugas untuk menghindari tabrakan dengan ID lama.

---

## 1.3.x

_Catatan rilis sebelumnya dipertahankan di repositori plugin._
