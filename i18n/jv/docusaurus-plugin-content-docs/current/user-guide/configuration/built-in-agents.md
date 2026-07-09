---
title: Agen Bawaan
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents Gawan

Gratis AI Agent v1.9.0 nggawa limang agents gawan, saben-saben wis dikonfigurasi nganggo sakumpulan tools sing fokus, system prompt sing dicocogake, lan saran wiwitan sing cocog karo tugas umum ing wilayah kuwi. Ngalih antarane agents bakal ngganti apa sing bisa ditindakake asisten lan carane asisten nanggapi — tanpa konfigurasi apa wae saka pihak sampeyan. Superdav AI Agent v1.18.0 bisa nambah tools sing ngerti jadwal, cathetan pangeling, gapura persetujuan, lan kabar SMS menyang workflow iki nalika integrasi sing gegandhengan wis dikonfigurasi.

## Apa Kuwi Agent?

Saben agent yaiku profil konfigurasi sing diwenehi jeneng lan nggabungake:

- **Tools** — kemampuan sing diidini kanggo ditindakake agent (umpamane Content Writer nduweni akses menyang kemampuan nggawe kiriman; Design Studio nduweni akses menyang kemampuan CSS lan theme.json)
- **System prompt** — pandhuan sing netepake nada, prioritas, lan watesan agent
- **Saran** — prompt sing wis ditulis sadurunge lan ditampilake ing antarmuka chat supaya sampeyan bisa miwiti kanthi cepet

## Ngakses Agent Picker

1. Bukak panel **Gratis AI Agent** ing sidebar admin WordPress.
2. Klik **ikon agent** ing sisih kiwa ndhuwur header chat (ikon bakal owah kanggo nggambarake agent sing aktif).
3. **Agent Picker** mbukak minangka overlay form-table. Saben agent kadhaptar nganggo ikon, jeneng, lan katrangan siji baris.
4. Klik larik agent kanggo ngaktifake. Header chat langsung dianyari.

Sampeyan uga bisa ngalih agents ing tengah pacelathon — system prompt agent anyar bakal ditrapake wiwit pesen sabanjure.

## Limang Agents Gawan

### Content Writer

**Fokus:** Nggawe lan nyunting kiriman, kaca, lan formulir kontak.

**Tools sing kasedhiya:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kanthi integrasi Superdav AI Agent v1.18.0 diaktifake, konteks tanggalan sing dikonfigurasi, gapura persetujuan, pangeling, lan tools kabar SMS uga bisa kasedhiya kanggo workflow sing disetujoni.

**Sing bisa ditindakake kanthi apik:**
- Ngrancang lan nerbitake kiriman blog saka brief utawa outline
- Nggawe kumpulan kaca landing kanggo situs anyar
- Mbangun formulir kontak lan pitakonan
- Nyetel gambar unggulan ing kiriman saka URL utawa telusuran
- Ngrancang pesen tindak lanjut acara saka konteks Google Calendar sing dikonfigurasi, banjur ngaso kanggo persetujuan sadurunge ngirim kabar

**Saran wiwitan:**
- *Tulis kiriman blog 500 tembung babagan manfaat WordPress multisite.*
- *Gawe kaca About, Services, lan Contact banjur terbitake.*
- *Tambah formulir pitakonan booking menyang kaca Contact.*
- *Rancang pangeling kanggo peserta ing acara tanggalan sing dikonfigurasi kanggo sesuk lan enteni persetujuan sadurunge ngirim.*

---

### Site Builder

**Fokus:** Nggawe situs web saka wiwitan nganti rampung saka siji prompt.

**Tools sing kasedhiya:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Kanthi Superdav AI Agent v1.18.0, tools layanan-kelola sing dikonfigurasi, persetujuan, pangeling, tanggalan, lan SMS bisa kasedhiya ing papan sing diaktifake administrator.

**Sing bisa ditindakake kanthi apik:**
- Ngasilake rencana pambangunan situs multi-fase kanggo jinis bisnis sing diterangake
- Nglakokake saben fase kanthi mandiri — struktur, konten, navigasi, desain
- Pulih saka kesalahan ing tengah rencana tanpa mbutuhake campur tangan manual
- Nginstal plugin sing disaranake minangka bagean saka pambangunan
- Nggawe formulir kontak langsung saka antarmuka chat (Superdav AI Agent v1.10.0+)
- Ngoordinasi pangeling peluncuran utawa tindak lanjut peserta tanpa kabar dobel nalika gapura persetujuan lan cathetan pangeling diaktifake

**Saran wiwitan:**
- *Bangun situs portofolio fotografi nganggo jinis kiriman galeri, kaca booking, lan formulir kontak.*
- *Gawe situs web restoran nganggo menu online, jam buka, lan formulir pitakonan booking meja.*
- *Setel situs konsultasi freelance nganggo kaca layanan, bagean portofolio, lan blog.*
- *Tambah formulir kontak menyang kaca Contact nganggo site builder.*
- *Sawise checklist peluncuran situs disetujoni, kirim pangeling SMS menyang kontak stakeholder sing dikonfigurasi.*

---

### Design Studio

**Fokus:** Kustomisasi visual — warna, tipografi, CSS, lan pola blok.

**Tools sing kasedhiya:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Sing bisa ditindakake kanthi apik:**
- Ngetrapake preset theme sing diwenehi jeneng (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Nyetel kanthi rinci tipografi global lan palet warna liwat theme.json
- Nyisipake CSS khusus kanggo pangowahan khusus merek
- Njupuk screenshot kaca lan mriksa kanggo masalah desain

**Saran wiwitan:**
- *Terapake preset warm-editorial banjur setel warna utama dadi #2d6a4f.*
- *Jupuk screenshot homepage lan kandhani apa sing bakal kokapiki.*
- *Gawe pola blok hero sing bisa digunakake maneh nganggo gambar latar ambane penuh lan judhul ing tengah.*

### Plugin Manager

**Fokus:** Nemokake, nginstal, lan ngatur plugin WordPress.

**Tools sing kasedhiya:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Sing bisa ditindakake kanthi apik:**
- Nyaranake plugin paling apik kanggo kasus panggunaan sing diterangake
- Nginstal paket kemampuan saka registry
- Nelusuri katalog kemampuan sing kasedhiya miturut kategori

**Saran wiwitan:**
- *Apa plugin paling apik kanggo direktori membership?*
- *Instal paket kemampuan WooCommerce.*
- *Tampilake kabeh paket kemampuan ecommerce sing kasedhiya.*

---

### Support Assistant

**Fokus:** Njawab pitakon babagan konten situs, setelan, lan konfigurasi WordPress.

**Tools sing kasedhiya:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Sing ditindakake kanthi apik:**
- Nggolèki setelan lan opsi situs saiki
- Nerangaké jinis kiriman, taksonomi, lan menu apa waé sing dikonfigurasi ing situs
- Njawab pitakonan "setelan iki gunané apa?" kanthi maca nilai langsung
- Dadi lapisan diagnostik mung-waca sadurungé nggawe owah-owahan

**Saran wiwitan:**
- *Plugin lan setelan apa waé sing saiki aktif ing situs iki?*
- *Dhaptaraké kabèh jinis kiriman kustom sing kadhaftar ing situs iki.*
- *Menu navigasi apa waé sing ana lan ing ngendi menu kuwi ditugasaké?*

---

## Integrasi Otomatisasi Superdav

Nalika integrasi Superdav AI Agent v1.18.0 dikonfigurasi, agen bawaan bisa melu ing alur kerja otomatisasi sing luwih aman lan ngerti jadwal:

- **Piranti waca Google Calendar** ngidini agen mriksa tanggalan lan acara sing dikonfigurasi sadurungé nyusun karya tindak lanjut.
- **Pemetaan kontak lan peserta** mbantu nyocogaké peserta acara karo pangguna WordPress utawa kontak sing dikenal.
- **Gerbang persetujuan manungsa** ngaso tumindak sensitif nganti pangguna sing diwènèhi wewenang mriksa lan ngonfirmasi.
- **Cathetan pangeling** nyegah notifikasi dobel nalika tugas sing dijadwal nyoba maneh utawa mbaleni.
- **Notifikasi SMS TextBee** ngirim pesen teks sing dikonfigurasi mung nalika kredensial SMS lan idin alur kerja diaktifaké.

Alur kerja sing disaranaké: jaluk agen nyiapaké pesen utawa tumindak, priksa pituduh persetujuan, banjur idinaké tumindak sing wis disetujoni kanggo nerusaké. Kanggo pangeling bola-bali, tetep aktifaké deduplikasi pangeling supaya acara utawa kontak sing padha ora diwènèhi notifikasi bola-bali.

---

## Ngatur Kustom Agen

Saben agen bawaan bisa ditambahi utawa diganti liwat filter `gratis_ai_agent_agents`.

### Nambahaké pituduh sistem kustom menyang agen sing wis ana

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Ndaftaraké agen anyar

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

Agen anyar katon ing Pamilih Agen sanalika sawisé filter mlaku.

### Mbusak agen bawaan

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
