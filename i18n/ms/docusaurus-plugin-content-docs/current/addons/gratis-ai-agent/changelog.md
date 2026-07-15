---
title: Senarai Perubahan
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Dikeluarkan pada 2026-04-28 {#190--released-on-2026-04-28}

### Baharu {#new}

- **Keupayaan `create_contact_form`** — mencipta borang hubungan menggunakan plugin borang aktif (Contact Form 7, WPForms, Fluent Forms, atau Gravity Forms) dan mengembalikan *shortcode* yang sedia untuk disematkan dalam mana-mana pos atau halaman.
- **Keupayaan `set_featured_image`** — menetapkan imej utama pada pos atau halaman daripada ID lampiran Perpustakaan Media yang sedia ada atau URL jauh; secara automatik mengimport imej apabila URL disediakan.
- **Keupayaan `batch_create_posts`** — mencipta pelbagai pos dalam satu panggilan keupayaan. Menyokong parameter yang sama seperti `create_post`, melaporkan kejayaan/kegagalan bagi setiap pos, dan mempunyai mod `stop_on_error` pilihan.
- **Parameter `page_template`** — ditambah pada `create_post` dan `update_post`. Menetapkan fail templat halaman PHP (cth., `page-full-width.php`) semasa penciptaan atau kemas kini. Hantar rentetan kosong kepada `update_post` untuk kembali kepada lalai tema.
- **Keupayaan tangkapan skrin sisi klien** — `capture_screenshot`, `compare_screenshots`, dan `review_page_design`. Mengambil tangkapan skrin penuh atau *viewport* halaman langsung melalui *headless browser* sisi pelayan, membandingkan dua tangkapan skrin, dan mendapatkan semakan reka bentuk yang dijana AI meliputi susun atur, tipografi, warna, dan kebolehaksesan.
- **Lima ejen terbina dalam** — Content Writer, Site Builder, Design Studio, Plugin Manager, dan Support Assistant. Setiap ejen mempunyai set alat khusus, *system prompt* yang disesuaikan, dan cadangan permulaan. Boleh ditukar melalui **Agent Picker** baharu di tajuk sembang. Lihat [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — tab **Settings → Feature Flags** baharu dengan suis kawalan akses (hadkan kepada pentadbir, hadkan kepada pentadbir rangkaian, akses pelanggan, nyahaktifkan untuk bukan ahli) dan pilihan penjenamaan (sembunyikan atribusi *footer*, nama ejen tersuai, sembunyikan *agent picker*, gunakan ikon tapak web sebagai avatar sembang). Lihat [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Pulihkan sesi terakhir** — panel sembang kini memuat semula perbualan paling terkini secara automatik apabila halaman dimuat dan apabila widget dibuka, jadi konteks tidak pernah hilang merentasi navigasi halaman.
- **Pautan tindakan plugin** — pautan pantas ke Settings dan Abilities Registry kini muncul pada skrin **Plugins → Installed Plugins** WordPress di bawah penerangan plugin.

### Diperbaiki {#improved}

- **Cuba semula sumber imej** — ejen kini akan cuba semula semua sumber imej percuma yang dikonfigurasi sebelum beralih kepada imej yang dijana AI apabila muat turun gagal.
- **Panel maklumat model** — sentiasa kelihatan di tajuk sembang; tidak lagi disembunyikan selepas mesej pertama.
- **Tingkah laku skrol automatik** — skrol automatik akan berhenti apabila pengguna menatal ke atas untuk membaca; butang **Scroll to bottom** terapung muncul dan hilang secara automatik apabila pengguna mencapai mesej terkini.
- **UI Agent Picker** — direka semula sebagai lapisan *form-table* dengan ikon setiap ejen, menjadikannya lebih mudah untuk mengenal pasti dan menukar ejen dengan sekali pandang.
- **Chunks JS dimuatkan secara malas** — pakej JavaScript awal widget sembang kini dibahagikan kepada *chunks* yang dimuatkan secara malas, mengurangkan saiz pakej awal sebanyak 75–90%.
- **Reka bentuk semula widget sembang** — ikon AI yang disatukan menggantikan avatar tersuai sebelumnya; konsisten dengan sistem ejen terbina dalam.
- **Pautan URL** — URL yang muncul dalam mesej sistem dan gelembung mesej ralat kini dipaparkan sebagai pautan yang boleh diklik.

### Diperbaiki {#fixed}

- **Kebolehcapaian keupayaan** — deskripsi, rujukan *system prompt*, dan penjajaran *namespace* telah diperbetulkan supaya semua keupayaan muncul dalam senarai alat ejen dengan boleh dipercayai.
- **Cache penyedia** — penyedia kini di-*cache* di seluruh tapak web melalui pengira versi, menghalang isu penyedia lapuk pada rangkaian multisite.
- **`ability_invalid_output`** — diselesaikan merentasi 12 pengendali keupayaan; semuanya mengembalikan respons JSON yang distrukturkan dengan betul.
- **Paip `pending_client_tool_calls`** — disambungkan dari hujung ke hujung supaya panggilan alat sisi klien selesai dengan betul dan mengembalikan hasil kepada model.
- **Laci sejarah** — perubahan yang tidak boleh dipulihkan dikecualikan daripada senarai pemulihan; pautan **View full history** kini berfungsi dengan betul.
- **Sistem Perubahan/Pulih** — lima pepijat berasingan diperbaiki dan disatukan di bawah antara muka pentadbir baharu.
- **Toast Tetapan Simpan** — pemberitahuan *snackbar* kini muncul dengan boleh dipercayai selepas mengklik **Save Settings**.
- **Menu konteks tong sampah** — menambah pilihan **Delete Permanently** supaya item boleh dipadamkan secara kekal tanpa meninggalkan paparan tong sampah.
- **Edit & hantar semula** — mengklik ikon edit kini hanya memasuki mod suntingan untuk mesej yang diklik, bukan semua mesej dalam utas.
- **Ketinggian susun atur sembang** — panel sembang menyesuaikan ketinggiannya apabila kandungan yang disuntik plugin (notis pentadbir, sepanduk) muncul di atas halaman, menghalang kawasan input daripada ditolak keluar dari skrin.

---

## 1.4.0 — Dikeluarkan pada 2026-04-09 {#140--released-on-2026-04-09}

### Baharu {#new-1}

- **Perintah penanda aras WP-CLI** (`wp gratis-ai-agent benchmark`) — menjalankan set penanda aras Agent Capabilities v1 dari baris perintah untuk paip CI dan aliran kerja penilaian model. Menyokong larian setiap soalan, penimbalan penyedia/model, dan output JSON/CSV.
- **Set penanda aras Agent Capabilities v1** — set *prompt* kompleks, berbilang langkah yang berstruktur yang menjalankan permukaan keupayaan sepenuhnya, dengan pemarkahan dan pelaporan token/tempoh.
- **Keupayaan Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Pendaftaran kekal merentasi permulaan semula melalui jadual pilihan.
- **Keupayaan Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Menyokong taksonomi hierarki dan rata dengan *rewrite slugs* pilihan.
- **Keupayaan Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Merangkumi lima set pra-konfigurasi yang dikurasi: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Keupayaan Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Membaca dan menulis nilai *theme.json* melalui API Global Styles WordPress.
- **Keupayaan pengurusan menu navigasi** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Menyokong menu bersarang dan penetapan lokasi tema.
- **Keupayaan Pengurusan Pilihan** — `get_option`, `set_option`, `delete_option`, `list_options`. Merangkumi senarai hitam keselamatan terbina dalam yang melindungi pilihan WordPress kritikal daripada pengubahsuaian.
- **Abilities Registry yang boleh dipasang** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Cari dan aktif pakej keupayaan yang diedarkan sebagai plugin WordPress.
- **Orkestrasi Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Pelan bina tapak berfasa pelbagai dengan penemuan plugin, rujukan output langkah, penjejakan kemajuan, dan pemulihan ralat autonomi.
- **Soalan penanda aras laman web restoran** (`q-restaurant-website`) — ujian hujung-ke-hujung meliputi pendaftaran CPT, sistem reka bentuk, navigasi, dan penemuan plugin.
- **Plugin penyambung penyedia AI** ditambah ke *blueprint* WordPress Playground untuk persediaan pembangunan tempatan yang lebih pantas.

### Diperbaiki {#improved-1}

- README dikemas kini dengan dokumentasi dan arahan persediaan penyambung penyedia AI.

### Diperbaiki {#fixed-1}

- 25 kegagalan ujian PHPUnit pada *main* branch diselesaikan.
- Format URL rilis GitHub dalam `blueprint.json` diperbetulkan.
- Penomboran ID tugas untuk mengelakkan pertembungan dengan ID lama.

---

## 1.3.x {#13x}

_Nota rilis sebelum ini dikekalkan dalam repositori plugin._
