---
title: Alur Orientasi Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Alur Onboarding Theme Builder

Superdav AI Agent v1.12.0 ngajukeun **alur onboarding Theme Builder** anu dipandu, nu dibéré pikeun ngabantosan anjeun nyiptake tema blok kustom nalika persiapan awal. Ieu ngaganti mode Site Builder baheulna kalayan cara anu leuwih fleksibel jeung dibantu ku agen.

## Naon éta Alur Onboarding Theme Builder?

Alur onboarding Theme Builder téh wizard pangaturan interaktif anu:

- Ngabimbing anjeun ngaliwatan keputusan desain (warna, tipografi, tata letak)
- Ngagambarkeun pamilihan identitas visual situs anjeun
- Ngahasilkeun tema blok kustom nu disesuaikan jeung kabutuhan anjeun
- Ngaktifkeun tema secara otomatis nalika réngsé

Alur éta dipasihan tenaga ku **Setup Assistant agent**, anu nanya patarosan ngajelaskeun masalah jeung ngawangun tema anjeun sacara bertahap.

## Ngamimitian Onboarding Theme Builder

### Setup Nalika Kahiji Kali Dipaké (First-Run Setup)

Nalika anjeun mindah Superdav AI Agent ka instalasi WordPress anyar, anjeun bakal ningali:

```
Wilujeng sumping di Superdav AI Agent!

Naon anu bade dilakukeun?
1. Bangun tema kustom (Theme Builder)
2. Ngagunakeun tema anu geus aya
3. Leuwihkeun setup ayeuna
```

Pilih **"Bangun tema kustom"** pikeun masukan alur onboarding Theme Builder.

### Aktivasi Manual

Anjeun ogé bisa ngamimitian onboarding Theme Builder kapan waé ku cara nyokot:

```
"Start the Theme Builder onboarding"
```

atawa

```
"Help me create a custom theme"
```

## Langkah-Langkah Onboarding

### Langkah 1: Pemilihan Mode (Mode Selection)

Setup Assistant agent bakal nanya ngeunaan pamilihan anjeun:

```
Kumaha cara anjeun bade ngawangun tema?
- Dipandu (Abdi bakal nanya patarosan jeung ngawangunana pikeun anjeun)
- Langsung Ngagunakeun (Abdi bakal nunjukkeun pilihan jeung anjeun anu mutuskeun)
```

**Mode Dipandu (Guided mode)** dipikahoyong pisan pikeun pamaké sabagéan; agent bakal méré rekomendasi desain dumasar kana industri jeung tujuan anjeun.

### Langkah 2: Spasifikasik Situs (Site Specification)

Anjeun bakal ditanya ngeunaan situs anjeun:

- **Tujuan situs**: E-commerce, blog, portofolio, SaaS, dll.
- **Target audiens**: Siapa saja pengunjung Anda?
- **Warna merek**: Warna primer dan sekunder (atau "saya tidak yakin")
- **Nada bicara (Tone)**: Profesional, kreatif, santai/ceria, minimalis, dll.

Informasi ini tersimpan di memori **site_brief** Anda, yang akan dirujuk oleh agen di sesi mendatang.

### Langkah 3: Keputusan Sistem Desain (Design System Decisions)

Agen akan memandu Anda dalam memilih *design token*:

- **Tipografi**: Keluarga huruf (*font family* - serif, sans-serif, monospace) dan skala ukuran
- **Palet warna**: Warna primer, sekunder, aksen, dan netral
- **Jarak (Spacing)**: Tata letak yang ringkas (*compact*), normal, atau lapang (*spacious*)
- **Gerakan (Motion)**: Animasi dan transisi (jika diinginkan)

### Langkah 4: Pembuatan Tema (Theme Generation)

Agen Asisten Pengaturan (*Setup Assistant agent*) akan membuat kerangka tema blok kustom Anda dengan menyertakan:

- `theme.json` yang berisi semua *design token* Anda
- Template blok untuk tata letak umum (halaman utama, blog, kontak)
- Gaya blok kustom yang sesuai dengan sistem desain Anda
- Metadata tema dan deklarasi dukungan WordPress

### Langkah 5: Aktivasi dan Verifikasi (Activation and Verification)

Tema akan otomatis aktif, dan Anda akan melihat:

```
✓ Tema kustom Anda sekarang sudah tayang!
  Nama Tema: Theme [Nama Situs Anda]
  Warna: [Primer] / [Sekunder]
  Tipografi: [Keluarga Huruf]

  Kunjungi situs Anda untuk melihat desain barunya.
```

Anda kemudian bisa mengunjungi situs Anda untuk memastikan tema tampil dengan benar.

## Spesifikasi Situs dan Memori site_brief

Selama proses orientasi (*onboarding*), agen akan menangkap spesifikasi situs Anda di kategori memori **site_brief**. Ini mencakup:

- Tujuan dan sasaran situs
- Target audiens
- Warna merek dan nada bicara (*tone*)
- Preferensi desain
- Struktur konten

### Mengapa site_brief Penting

Di sesi mendatang, agen akan merujuk ke *site_brief* Anda untuk:

### Meninjau Ringkasan Situs Anda\_brief

Anjeun bisa nanya ka agen:

```
"Tunjukkan ringkasan situs saya"
```

ataw

```
"Naon anu anjeun terang ngeunaan situs saya?"
```

Agen bakal nunjukkeun spesifikasi situs nu geus disimpan.

## Ngubah Sajaba Perkenalan (Onboarding)

Sanggeus perkenalan Theme Builder réngsé, anjeun bisa:

### Ngagunake Skill Estetika Sistem Desain (Design System Aesthetics Skill)

Minta pangrapihan desain:

```
"Rapihan tipografi jadi leuwih modern"
```

ataw

```
"Atur palet warna jadi leuwih hangat"
```

**Skill Estetika Sistem Desain** bakal ngararankeun anjeun dina pangbaris desain nu dituju.

### Ngedit theme.json Langsung

Kanggo nu mahir, edit `/wp-content/themes/[theme-name]/theme.json` pikeun ngatur:

- Color tokens
- Typography scales
- Spacing values
- Definisi border je bayangan (shadow)

### Ngadamel Template Blok Kustom

Gunakan WordPress block editor pikeun damel template kustom keur:

- Tata letak Homepage
- Halaman postingan blog
- Halaman produk
- Formulir kontak

## Perbandingan: Lama vs. Anyar Onboarding

| Fitur | Site Builder (Lama) | Theme Builder (Anyar) |
|---------|----------------------|-------------------|
| Cara Setup | Form berbasis Wizard | Percakapan dipandu agen |
| Generasi Tema | Template terbatas | Scaffolding kustom |
| Design tokens | Input manual | Keputusan dipandu |
| Fleksibilitas | Pilihan tetap | Bisa diatur (Customizable) |
| Pembaruan Masa Depan | Teu dirujuk | Disimpan dina site_brief |

## Troubleshooting

**Alur perkenalan teu réngsé**
- Mulai deui alur: "Mulai perkenalan Theme Builder"
- Cek yén instalasi WordPress anjeun geus diupdate
- Pastike agen Setup Assistant geus diaktifkeun

**site_brief saya teu dipaké**
- Pastike agen geus boga akses ka memori (memory)
- Minta agen pikeun "ngingetkeun site brief abdi" (recall my site brief)
- Cek yén memori geus diaktifkeun dina pengaturan anjeun

**Tema anu dihasilkeun teu cocog jeung pamilihan abdi**
- Gunake skill Design System Aesthetics pikeun ngarobahna deui
- Minta agen pikeun "ngagenerate tema deui kalawan [perubahan spesifik]" (regenerate the theme with [specific changes])
- Edit file theme.json langsung pikeun kontrol anu leuwih pas

## Langkah Salajengna

Sanggeus ngalaksanake onboarding Theme Builder:

1. **Verifikasi situs anjeun**: Tingali situs anjeun pikeun ningali tema anyarana
2. **Rampeskeun desain**: Gunake skill Design System Aesthetics pikeun ngarobah-robah
3. **Nambah konten**: Mulai bangun konten situs anjeun
4. **Eksplorasi kemampuan**: Pelajari ngeunaan kemampuan agen séjén saperti scaffold-block-theme jeung activate-theme
