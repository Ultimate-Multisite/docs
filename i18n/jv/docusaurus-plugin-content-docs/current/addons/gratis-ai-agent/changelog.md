---
title: Cathetan owah-owahan
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Cathetan Owah-owahan

## 1.9.0 — Dirilis ing 2026-04-28

### Anyar

- **kabisan `create_contact_form`** — nggawe formulir kontak nganggo plugin formulir sing aktif (Contact Form 7, WPForms, Fluent Forms, utawa Gravity Forms) lan mbalekake shortcode sing siap ditempelake ing tulisan utawa kaca apa wae.
- **kabisan `set_featured_image`** — netepake gambar unggulan kanggo tulisan utawa kaca saka ID lampiran Media Library sing wis ana utawa URL remot; kanthi otomatis ngimpor gambar nalika URL diwenehake.
- **kabisan `batch_create_posts`** — nggawe pirang-pirang tulisan ing siji panggilan kabisan. Ndhukung paramèter sing padha karo `create_post`, nglaporake sukses/gagal saben tulisan, lan nduwèni mode opsional `stop_on_error`.
- **paramèter `page_template`** — ditambahake menyang `create_post` lan `update_post`. Netepake berkas cithakan kaca PHP (ump. `page-full-width.php`) nalika nggawe utawa nganyari. Kirim string kosong menyang `update_post` kanggo mbalekake menyang bawaan theme.
- **Kabisan tangkapan layar sisih client** — `capture_screenshot`, `compare_screenshots`, lan `review_page_design`. Njupuk tangkapan layar lengkap utawa viewport saka kaca langsung liwat browser headless sisih server, mbandhingake rong tangkapan layar, lan entuk ulasan desain sing digawe AI sing nyakup tata letak, tipografi, warna, lan aksesibilitas.
- **Lima agen bawaan** — Panulis Konten, Pambangun Situs, Studio Desain, Pangatur Plugin, lan Asisten Dhukungan. Saben agen nduwèni piranti khusus, system prompt sing dicocogake, lan saran wiwitan. Bisa diganti liwat **Pamilih Agen** anyar ing header obrolan. Deleng [Agen Bawaan](../../user-guide/configuration/built-in-agents).
- **Gendera fitur** — tab **Settings → Feature Flags** anyar karo toggle kontrol akses (matesi mung kanggo administrator, matesi mung kanggo admin jaringan, akses subscriber, mateni kanggo non-anggota) lan pilihan branding (ndhelikake atribusi footer, jeneng agen khusus, ndhelikake pamilih agen, nganggo ikon situs minangka avatar obrolan). Deleng [Setelan Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Mulihake sesi pungkasan** — panel obrolan saiki kanthi otomatis ngemot maneh pacelathon paling anyar nalika kaca dimuat lan nalika widget dibukak, mula konteks ora bakal ilang ing navigasi antar kaca.
- **Tautan tumindak plugin** — tautan cepet menyang Settings lan Registri Kabisan saiki katon ing layar WordPress **Plugins → Installed Plugins** ing ngisor katrangan plugin.

### Ditambah Apik

- **Coba maneh sumber gambar** — agen saiki nyoba maneh kabeh sumber gambar gratis sing dikonfigurasi sadurunge bali menyang gambar sing digawe AI nalika undhuhan gagal.
- **Panel info model** — tansah katon ing header obrolan; ora didhelikake maneh sawise pesen pisanan.
- **Prilaku auto-scroll** — auto-scroll ngaso nalika pangguna nggulung munggah kanggo maca; tombol ngambang **Gulung menyang ngisor** katon lan ilang kanthi otomatis nalika pangguna tekan pesen paling anyar.
- **UI Pamilih Agen** — didesain ulang dadi overlay tabel-formulir kanthi ikon saben agen, supaya luwih gampang ngenali lan ngganti agen kanthi cepet.
- **Potongan JS lazy-loaded** — bundel JavaScript wiwitan saka widget obrolan saiki dipérang dadi potongan lazy-loaded, nyuda ukuran bundel wiwitan nganti 75–90%.
- **Desain ulang widget obrolan** — ikon AI seragam ngganti avatar khusus sadurunge; konsisten karo sistem agen bawaan.
- **Linkifikasi URL** — URL sing katon ing pesen sistem lan gelembung pesen kasalahan saiki dirender dadi tautan sing bisa diklik.

### Didandani

- **Katoné kabisan** — mbenerake katrangan, rujukan system prompt, lan panyelarasan namespace supaya kabeh kabisan katon ing dhaptar piranti agen kanthi andal.
- **Cache panyedhiya** — panyedhiya saiki dicache sak situs liwat penghitung versi, nyegah masalah panyedhiya lawas ing jaringan multisite.
- **`ability_invalid_output`** — dirampungake ing 12 handler kabisan; kabeh mbalekake tanggapan JSON kanthi struktur sing bener.
- **Pipeline `pending_client_tool_calls`** — disambungake saka wiwitan nganti pungkasan supaya panggilan piranti sisih client rampung kanthi bener lan mbalekake asil menyang model.
- **Laci riwayat** — owah-owahan sing ora bisa dibalekake ora dilebokake ing dhaptar balèk; tautan **Deleng riwayat lengkap** saiki bisa mlaku kanthi bener.
- **Sistem owah-owahan/balèk** — limang bug kapisah didandani lan digabungake ing antarmuka admin anyar.
- **Toast Simpen Settings** — kabar snackbar saiki katon kanthi andal sawise ngeklik **Save Settings**.
- **Menu konteks tong sampah** — nambahake pilihan **Busak Permanen** supaya item bisa dibusak tuntas tanpa ninggalake tampilan tong sampah.
- **Sunting & kirim maneh** — ngeklik ikon sunting saiki mlebu mode sunting mung kanggo pesen sing diklik, dudu kabeh pesen ing thread.
- **Dhuwur tata letak obrolan** — panel obrolan nyetel dhuwure nalika konten sing disisipake plugin (kabar admin, banner) katon ing ndhuwur kaca, nyegah area input kedorong metu saka layar.

---

## 1.4.0 — Dirilis ing 2026-04-09

### Anyar

- **Prentah benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — nglakokake suite benchmark Agent Capabilities v1 saka command line kanggo pipeline CI lan alur kerja evaluasi model. Ndhukung lakon saben pitakon, override provider/model, lan output JSON/CSV.
- **Suite benchmark Agent Capabilities v1** — kumpulan terstruktur saka prompt rumit multi-langkah sing nguji sakabehe permukaan kemampuan, nganggo scoring lan laporan token/durasi.
- **Kemampuan Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrasi tetep ana sawisé restart liwat tabel options.
- **Kemampuan Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Ndhukung taksonomi hierarkis lan datar nganggo rewrite slug opsional.
- **Kemampuan Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Kalebu limang preset kurasi: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Kemampuan Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Maca lan nulis nilai theme.json liwat WordPress Global Styles API.
- **Kemampuan manajemen Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Ndhukung menu bersusun lan penetapan lokasi theme.
- **Kemampuan Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Kalebu blocklist keamanan bawaan sing nglindhungi options WordPress kritis saka modifikasi.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Nemokake lan ngaktifake paket kemampuan sing disebarake minangka plugin WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plan pambangunan site multi-fase nganggo penemuan plugin, referensi output langkah, pelacakan progres, lan pemulihan error otonom.
- **Pitakon benchmark situs web restoran** (`q-restaurant-website`) — tes end-to-end sing nyakup registrasi CPT, design system, navigasi, lan penemuan plugin.
- **Plugin konektor provider AI** ditambahake menyang blueprint WordPress Playground kanggo setup pangembangan lokal sing luwih cepet.

### Ditingkatake

- README dianyari nganggo dokumentasi konektor provider AI lan instruksi setup.

### Didandani

- 25 kegagalan test PHPUnit ing branch `main` dirampungake.
- Format URL rilis GitHub ing `blueprint.json` didandani.
- Penomoran ulang ID tugas kanggo ngindhari tabrakan karo ID lawas.

---

## 1.3.x

_Cathetan rilis sadurungé dijaga ing repositori plugin._
