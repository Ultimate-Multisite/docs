---
title: Agen Bawaan
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents Bawaan {#built-in-agents}

Gratis AI Agent v1.9.0 nyayagikeun lima agents bawaan, unggal-unggalna geus dikonfigurasi heula ku sakumpulan tools anu museur, system prompt anu disaluyukeun, jeung saran pamuka anu cocog jeung tugas umum dina widang éta. Ngalih antara agents ngarobah naon anu bisa dilakukeun ku assistant jeung kumaha résponna — tanpa konfigurasi naon waé ti pihak anjeun. Superdav AI Agent v1.18.0 bisa nambahkeun tools anu sadar jadwal, rékaman pangéling, approval gates, jeung béwara SMS kana workflows ieu lamun integrasi anu patali geus dikonfigurasi.

## Naon Ari Agent? {#what-is-an-agent}

Unggal agent nyaéta profil konfigurasi anu dingaranan anu ngahijikeun:

- **Tools** — kamampuhan anu diidinan pikeun dipaké ku agent (contona, Content Writer boga aksés ka kamampuhan nyieun tulisan; Design Studio boga aksés ka kamampuhan CSS jeung theme.json)
- **System prompt** — parentah anu netepkeun nada, prioritas, jeung watesan agent
- **Saran** — prompts anu geus ditulis saméméhna anu dipintonkeun dina antarbeungeut chat pikeun mantuan anjeun ngamimitian gancang

## Ngaksés Agent Picker {#accessing-the-agent-picker}

1. Buka panel **Gratis AI Agent** dina sidebar admin WordPress.
2. Klik **ikon agent** di kénca luhur header chat (ikonna robah pikeun ngagambarkeun agent anu keur aktip).
3. **Agent Picker** muka minangka overlay form-table. Unggal agent didaptarkeun jeung ikonna, ngaranna, sarta déskripsi hiji garis.
4. Klik baris agent pikeun ngaktipkeunana. Header chat langsung ngamutahirkeun.

Anjeun ogé bisa ngalih agents di tengah paguneman — system prompt agent anyar mimiti jalan ti pesen salajengna.

## Lima Agents Bawaan {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Fokus:** Nyieun jeung ngédit tulisan, kaca, jeung formulir kontak.

**Tools anu sayaga:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kalawan integrasi Superdav AI Agent v1.18.0 diaktipkeun, konteks kalénder anu dikonfigurasi, approval gates, pangéling, jeung tools béwara SMS ogé bisa sayaga pikeun workflows anu disatujuan.

**Anu bisa dilakukeun kalayan hadé:**
- Nyusun draf jeung medarkeun tulisan blog tina ringkesan atawa outline
- Nyieun kumpulan kaca landing pikeun situs anyar
- Ngawangun formulir kontak jeung pananya
- Nyetel gambar unggulan dina tulisan tina URL atawa pilarian
- Nyusun draf pesen tindak lanjut acara tina konteks Google Calendar anu dikonfigurasi, tuluy eureun pikeun persetujuan saméméh ngirim béwara

**Saran pamuka:**
- *Tulis tulisan blog 500 kecap ngeunaan mangpaat WordPress multisite.*
- *Jieun kaca About, Services, jeung Contact sarta terbitkeun.*
- *Tambahkeun formulir pananya booking kana kaca Contact.*
- *Susun draf pangéling pikeun pamilon dina acara kalénder anu dikonfigurasi pikeun isukan jeung antosan persetujuan saméméh ngirimna.*

---

### Site Builder {#site-builder}

**Fokus:** Nyieun situs wéb ti tungtung ka tungtung tina hiji prompt.

**Tools anu sayaga:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Kalawan Superdav AI Agent v1.18.0, tools layanan-terkelola anu dikonfigurasi, persetujuan, pangéling, kalénder, jeung SMS bisa sayaga di tempat administrator ngaktipkeunana.

**Anu bisa dilakukeun kalayan hadé:**
- Ngahasilkeun rencana ngawangun situs multi-fase pikeun jinis usaha anu dijelaskeun
- Ngajalankeun unggal fase sacara mandiri — struktur, eusi, navigasi, desain
- Cageur tina kasalahan di tengah rencana tanpa merlukeun campur tangan manual
- Masang plugins anu disarankeun salaku bagian tina wangunan
- Nyieun formulir kontak langsung tina antarbeungeut chat (Superdav AI Agent v1.10.0+)
- Ngordinasikeun pangéling peluncuran atawa tindak lanjut pamilon tanpa béwara duplikat lamun approval gates jeung rékaman pangéling diaktipkeun

**Saran pamuka:**
- *Bangun situs portofolio fotografi kalayan jinis tulisan galeri, kaca booking, jeung formulir kontak.*
- *Jieun situs wéb réstoran kalayan menu online, jam buka, jeung formulir pananya booking méja.*
- *Setel situs konsultasi freelance kalayan kaca jasa, bagian portofolio, jeung blog.*
- *Tambahkeun formulir kontak kana kaca Contact maké site builder.*
- *Sanggeus daptar cek peluncuran situs disatujuan, kirim pangéling SMS ka kontak stakeholder anu dikonfigurasi.*

---

### Design Studio {#design-studio}

**Fokus:** Kustomisasi visual — warna, tipografi, CSS, jeung pola blok.

**Tools anu sayaga:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Anu bisa dilakukeun kalayan hadé:**
- Nerapkeun preset theme anu dingaranan (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ngaluyukeun tipografi global jeung palet warna sacara rinci ngaliwatan theme.json
- Nyuntikkeun CSS kustom pikeun overrides anu husus mérek
- Nyokot screenshot kaca sarta mariosna pikeun masalah desain

**Saran pamuka:**
- *Terapkeun preset warm-editorial tuluy setel warna primér jadi #2d6a4f.*
- *Candak screenshot homepage sarta béjakeun naon anu bakal anjeun ningkatkeun.*
- *Jieun pola blok hero anu bisa dipaké deui kalayan gambar latar full-width jeung judul di tengah.*

### Plugin Manager {#plugin-manager}

**Fokus:** Manggihan, masang, jeung ngatur plugins WordPress.

**Tools anu sayaga:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Anu bisa dilakukeun kalayan hadé:**
- Nyarankeun plugin panghadéna pikeun use case anu dijelaskeun
- Masang pakét kamampuhan tina registry
- Ngajalajah katalog kamampuhan anu sayaga dumasar kategori

**Saran pamuka:**
- *Naon plugin panghadéna pikeun diréktori membership?*
- *Pasang pakét kamampuhan WooCommerce.*
- *Témbongkeun ka kuring sakabéh pakét kamampuhan ecommerce anu sayaga.*

---

### Support Assistant {#support-assistant}

**Fokus:** Ngajawab patalékan ngeunaan eusi situs, setélan, jeung konfigurasi WordPress.

**Tools anu sayaga:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Nu hadé dilakukeun:**
- Néangan setélan jeung pilihan situs ayeuna
- Nerangkeun jinis tulisan, taksonomi, jeung ménu naon waé nu dikonpigurasikeun dina situs
- Ngajawab patarosan "naon fungsi setélan ieu?" ku maca nilai langsung
- Jadi lapisan diagnostik ukur-baca saméméh nyieun parobahan

**Saran ngamimitian:**
- *Plugin jeung setélan naon waé nu ayeuna aktip dina situs ieu?*
- *Daptarkeun sakabéh jinis tulisan kustom nu kadaptar dina situs ieu.*
- *Ménu navigasi naon waé nu aya jeung di mana ditugaskeunana?*

---

## Integrasi Otomatisasi Superdav {#superdav-automation-integrations}

Nalika integrasi Superdav AI Agent v1.18.0 dikonpigurasikeun, agén bawaan bisa ilubiung dina alur gawé otomatisasi nu leuwih aman jeung sadar jadwal:

- **Pakakas maca Google Calendar** ngamungkinkeun agén mariksa kalénder jeung acara nu dikonpigurasikeun saméméh nyusun pagawéan susulan.
- **Pemetaan kontak jeung pamilon** mantuan nyocogkeun pamilon acara kana pamaké WordPress atawa kontak nu dipikawanoh.
- **Gerbang persetujuan manusa** ngeureunkeun tindakan sénsitip nepi ka pamaké nu boga wewenang marios jeung mastikeunana.
- **Catetan pangéling** nyegah béwara duplikat nalika pagawéan nu dijadwalkeun nyobian deui atawa diulang.
- **Béwara SMS TextBee** ngirim pesen téks nu dikonpigurasikeun ngan lamun kredensial SMS jeung idin alur gawé diaktipkeun.

Alur gawé nu disarankeun: ménta agén nyiapkeun pesen atawa tindakan, marios ajakan persetujuan, tuluy idinan tindakan nu disatujuan pikeun diteruskeun deui. Pikeun pangéling nu malikan, tetep aktipkeun deduplikasi pangéling supaya acara atawa kontak nu sarua teu dibéjaan sababaraha kali.

---

## Ngaropéa Agén {#customising-agents}

Unggal agén bawaan bisa dilegaan atawa diganti ngaliwatan filter `gratis_ai_agent_agents`.

### Nambahkeun prompt sistem kustom kana agén nu geus aya {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Ngadaptarkeun agén anyar {#registering-a-new-agent}

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

Agén anyar mucunghul dina Agent Picker langsung sanggeus filter dijalankeun.

### Ngaleungitkeun agén bawaan {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
