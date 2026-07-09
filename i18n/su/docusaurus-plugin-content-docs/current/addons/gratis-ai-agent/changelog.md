---
title: Changelog
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Daptar Parobahan {#changelog}

## 1.9.0 — Dileupaskeun dina 2026-04-28 {#190--released-on-2026-04-28}

### Anyar {#new}

- **`create_contact_form` ability** — nyieun formulir kontak maké plugin formulir anu aktip (Contact Form 7, WPForms, Fluent Forms, atawa Gravity Forms) sarta mulangkeun shortcode anu siap disisipkeun dina tulisan atawa kaca naon waé.
- **`set_featured_image` ability** — netepkeun gambar unggulan ka hiji tulisan atawa kaca tina ID lampiran Media Library anu geus aya atawa URL jauh; otomatis ngimpor gambar lamun URL disayagikeun.
- **`batch_create_posts` ability** — nyieun sababaraha tulisan dina hiji panggero ability. Ngadukung parameter anu sarua jeung `create_post`, ngalaporkeun hasil suksés/gagal pikeun unggal tulisan, sarta boga mode `stop_on_error` opsional.
- **Parameter `page_template`** — ditambahkeun kana `create_post` jeung `update_post`. Netepkeun berkas témplat kaca PHP (contona `page-full-width.php`) nalika nyieun atawa ngamutahirkeun. Kirim string kosong ka `update_post` pikeun mulang ka standar theme.
- **Kamampuh screenshot sisi klien** — `capture_screenshot`, `compare_screenshots`, jeung `review_page_design`. Nyokot screenshot pinuh atawa viewport tina kaca langsung liwat peramban headless sisi server, ngabandingkeun dua screenshot, sarta meunang ulasan desain anu dihasilkeun ku AI anu ngawengku tata perenah, tipografi, warna, jeung aksésibilitas.
- **Lima agén bawaan** — Panulis Eusi, Pangwangun Situs, Studio Desain, Pangatur Plugin, jeung Asistén Pangrojong. Unggal agén boga susunan alat husus, system prompt anu disaluyukeun, jeung saran mimiti. Bisa dipindahkeun liwat **Pamilih Agén** anyar dina lulugu obrolan. Tingali [Agén Bawaan](../../user-guide/configuration/built-in-agents).
- **Bandéra fitur** — tab **Setélan → Bandéra Fitur** anyar kalayan toggle kadali aksés (watesan ka administrator, watesan ka admin jaringan, aksés palanggan, nonaktipkeun pikeun non-anggota) jeung pilihan branding (sumputkeun atribusi footer, ngaran agén kustom, sumputkeun pamilih agén, paké ikon situs salaku avatar obrolan). Tingali [Setélan Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Balikkeun sési panungtung** — panel obrolan ayeuna otomatis ngamuat deui paguneman panganyarna nalika kaca dimuat jeung nalika widget dibuka, jadi kontéks moal leungit dina navigasi kaca.
- **Tumbu tindakan plugin** — tumbu gancang ka Setélan jeung Registri Kamampuh ayeuna mucunghul dina layar WordPress **Plugin → Plugin Dipasang** di handapeun déskripsi plugin.

### Ditingkatkeun {#improved}

- **Ulangan sumber gambar** — agén ayeuna nyobian deui sakabéh sumber gambar gratis anu dikonpigurasikeun saméméh balik ka gambar anu dihasilkeun ku AI lamun unduhan gagal.
- **Panel info modél** — sok katingali dina lulugu obrolan; henteu deui disumputkeun sanggeus pesen kahiji.
- **Paripolah gulung otomatis** — gulung otomatis eureun samentara nalika pamaké ngagulung ka luhur pikeun maca; tombol ngambang **Gulung ka handap** mucunghul sarta otomatis ngaleungit nalika pamaké ngahontal pesen panganyarna.
- **UI Pamilih Agén** — didesain ulang salaku overlay tabel-formulir kalayan ikon per agén, sangkan leuwih gampang ngaidentipikasi jeung mindahkeun agén sakilas.
- **Potongan JS anu dimuat lambat** — bundel JavaScript awal widget obrolan ayeuna dipisah jadi potongan anu dimuat lambat, ngurangan ukuran bundel awal ku 75–90%.
- **Desain ulang widget obrolan** — ikon AI ngahiji ngagantikeun avatar kustom saméméhna; konsisten jeung sistem agén bawaan.
- **Linkifikasi URL** — URL anu mucunghul dina pesen sistem jeung gelembung pesen kasalahan ayeuna dirender salaku tumbu anu bisa diklik.

### Dibereskeun {#fixed}

- **Kamampuh kapanggihna ability** — ngabenerkeun déskripsi, rujukan system prompt, jeung panyaluyuan namespace sangkan sakabéh ability mucunghul dina daptar alat agén kalayan andal.
- **Cache panyadia** — panyadia ayeuna dicache sapanjang situs liwat counter vérsi, nyegah masalah panyadia basi dina jaringan multisite.
- **`ability_invalid_output`** — dibereskeun dina 12 handler ability; sadayana mulangkeun réspon JSON anu strukturna leres.
- **Pipeline `pending_client_tool_calls`** — disambungkeun ti tungtung ka tungtung sangkan panggero alat sisi klien réngsé kalayan bener jeung mulangkeun hasil ka modél.
- **Laci sajarah** — parobahan anu teu bisa dibalikkeun dikaluarkeun tina daptar balikkeun; tumbu **Tingali sajarah lengkep** ayeuna jalan kalayan bener.
- **Sistem parobahan/balikkeun** — lima bug misah dibereskeun jeung dihijikeun dina antarmuka admin anyar.
- **Toast Simpen Setélan** — béwara snackbar ayeuna mucunghul kalayan andal sanggeus ngaklik **Simpen Setélan**.
- **Menu kontéks runtah** — nambahkeun pilihan **Pupus Permanén** sangkan item bisa dipupus tuntas tanpa ninggalkeun tampilan runtah.
- **Édit & kirim deui** — ngaklik ikon édit ayeuna asup ka mode édit ngan pikeun pesen anu diklik, lain sakabéh pesen dina thread.
- **Jangkung tata perenah obrolan** — panel obrolan nyaluyukeun jangkungna nalika eusi anu diselapkeun ku plugin (béwara admin, banner) mucunghul di luhur kaca, nyegah aréa input kadorong kaluar layar.

---

## 1.4.0 — Dileupaskeun dina 2026-04-09 {#140--released-on-2026-04-09}

### Anyar {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — ngajalankeun Agent Capabilities v1 benchmark suite tina command line pikeun CI pipelines jeung alur gawé évaluasi modél. Ngadukung ngajalankeun per-patarosan, override panyadia/modél, jeung kaluaran JSON/CSV.
- **Agent Capabilities v1 benchmark suite** — sakumpulan prompt kompléks multi-léngkah anu terstruktur pikeun nguji sakabéh widang kamampuhan, kalawan skor jeung laporan token/durasi.
- **Kamampuhan Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrasi tetep aya sanggeus restart ngaliwatan tabel options.
- **Kamampuhan Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Ngadukung taxonomy hierarkis jeung datar kalawan slug rewrite opsional.
- **Kamampuhan Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Ngawengku lima preset anu geus dipilih: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Kamampuhan Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Maca jeung nulis nilai theme.json ngaliwatan WordPress Global Styles API.
- **Kamampuhan ngokolakeun Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Ngadukung menu bertingkat jeung panetepan lokasi theme.
- **Kamampuhan Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Ngawengku blocklist kaamanan bawaan anu ngajaga options WordPress kritis tina modifikasi.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Manggihan jeung ngaktipkeun pak kamampuhan anu disebarkeun minangka plugin WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Rencana ngawangun site multi-fase kalawan pamanggihan plugin, rujukan kaluaran léngkah, ngalacak kamajuan, jeung pamulihan kasalahan otomatis.
- **Patarosan benchmark ramatloka réstoran** (`q-restaurant-website`) — tés ti mimiti nepi ka réngsé anu ngawengku registrasi CPT, sistem desain, navigasi, jeung pamanggihan plugin.
- **Plugin panyambung panyadia AI** ditambahkeun kana blueprint WordPress Playground pikeun setelan pamekaran lokal anu leuwih gancang.

### Ditingkatkeun {#improved-1}

- README diropéa ku dokuméntasi panyambung panyadia AI jeung parentah setelan.

### Dibereskeun {#fixed-1}

- 25 gagal tés PHPUnit dina cabang `main` geus direngsekeun.
- Format URL rilis GitHub dina `blueprint.json` dibenerkeun.
- Panomoran ulang ID tugas pikeun nyingkahan tabrakan jeung ID heubeul.

---

## 1.3.x {#13x}

_Catetan rilis saméméhna dijaga dina repository plugin._
