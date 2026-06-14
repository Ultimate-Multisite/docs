---
title: Keterampilan Sadar Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Keterampilan Sadar Tema

Superdav AI Agent v1.10.0 ngirimkeun opat keterampilan bawaan sadar tema anyar anu otomatis nyanggoa kana tema WordPress aktif anjeun. Keterampilan ieu miboga panduan jeung kapabilitas khusus anu disesuaikan jeung arsitektur jeung fitur tema anjeun.

## Naon éta Keterampilan Sadar Tema?

Keterampilan sadar tema téh nyaéta basis pangaweruh jeung susunan alat (tool set) anu geus dikonfigurasi sadayana, nu otomatis dipilih ku asisten AI dumasar kana tema WordPress anu keur aktif di situs anjeun. Lamun anjeun ganti tema, keterampilan anu bisa dipaké ku asisten bakal otomatis obah — teu perlu konfigurasi manual.

Unggal keterampilan ngandung:

- **Dokumentasi spesifik tema** — panduan ngeunaan cara maké jeung ngatur (customize) tema
- **Referensi blok jeun pattern** — blok, pattern, jeung pilihan desain anu bisa dipaké
- **Conto kustomisasi** — cuplikan kode jeung pola konfigurasi pikeun tugas-tugas umum
- **Praktik panghadéna (Best practices)** — rekomendasi pikeun arsitektur jeung alur kerja tema

## Keterampilan Sadar Tema anu Tersedia

### Tema Blok (Block Themes)

**Ngagunake:** Tema anu ngagunake arsitektur berbasis blok WordPress (Full Site Editing).

Keterampilan Block Themes miboga panduan ngeunaan:

- Ngadamel je ngedit template maké block editor
- Ngagunake pattern blok jeung blok anu bisa dipaké deui (reusable blocks)
- Ngatur gaya global jeung pengaturan theme.json
- Maké tema blok jeung variasi (variations)
- Ngadamel pattern blok kustom pikeun situs anjeun

**Aktif otomatis lamun:** Tema aktif anjeun téh nyaéta tema blok (mendukung fitur `block-templates`).

### Tema Klasik (Classic Themes)

**Ngagunake:** Tema WordPress tradisional anu ngagunake template PHP jeung editor klasik.

Keterampilan Classic Themes miboga panduan ngeunaan:

Ngagunake file template PHP je sareng hook
Ngubah tampilan tema ngaliwatan Customizer
Ngagunake area widget sareng sidebar
Ngubah CSS sareng pengembangan child theme
Ngartos hierarki tema sareng template tag

**Otomatika aktif nalika:** Tema aktif anjeun nyaéta tema klasik (non-block).

### Kadence Blocks

**Cocok pikeun:** Situs anu ngagunake plugin Kadence Blocks kanggo desain berbasis blok anu leuwih maju.

Keterampilan Kadence Blocks miboga panduan ngeunaan:

- Ngagunake perpustakaan blok canggih Kadence (Hero, Testimonials, Pricing, jsb, jsb, jsb, jsb).
- Ngatur pengaturan blok Kadence sareng pilihan responsifna.
- Ngawangun tata letak kustom kalawan blok grid sareng container Kadence.
- Ngintegrasi blok Kadence sareng tema anjeun.
- Ngagunake sistem desain sareng preset Kadence.

**Otomatika aktif nalika:** Plugin Kadence Blocks aktif dina situs anjeun.

### Kadence Theme

**Cocok pikeun:** Situs anu ngagunake tema Kadence kanggo desain berbasis blok sareng kustomisasi.

Keterampilan Kadence Theme miboga panduan ngeunaan:

- Ngubah tampilan tema Kadence kalawan gaya global (global styles) sareng theme.json.
- Ngagunake pola blok sareng template bawaan Kadence.
- Ngatur pengaturan sareng pilihan tema Kadence.
- Ngawangun desain kustom kalawan sistem desain Kadence.
- Ngintegrasi Kadence sareng plugin sareng alat populer.

**Otomatika aktif nalika:** Tema Kadence nyaéta tema aktif anjeun.

## Kumaha Keterampilan Dipilih

Asisten bakal ngadeukeutan (detect) tema aktif sareng plugin anu dipasang dina unggal pesan. Upami aya keterampilan anu cocog jeung tema, éta bakal otomatis dimuat dina konteks asisten. Anjeun teu perlu ngaktifkeun atanapi ngarobah keterampilan sacara manual.

### Keterampilan Bagea

Lamun aya anjeun nganggo sababaraha *skill* (keterampilan) pikeun situs anjeun (contona, lamun anjeun keur Kadence Blocks jeung Kadence Theme aktif), asisten bakal bisa ngagunake sadaya *skill* anu relevan jeung bisa nyarakeun panduan ti masing-masing.

### Ngaganti Tema (*Switching Themes*)

Lamun anjeun ganti tema anu aktif, *skill* anu bisa dipaké ku asisten bakal otomatis diupdate dina pesen salajengna. Contona:

1. Anjeun keur nganggo tema blok jeung *skill* **Block Themes** aktif.
2. Anjeun ganti ka tema klasik (*classic theme*).
3. Dina pesen salajengna, *skill* **Classic Themes** bakal otomatis dimuat, sarta *skill* **Block Themes** geus teu bisa dipaké deui.

## Ngagunake *Skill* Anu Ngarti Tema (*Using Theme-Aware Skills*)

Mun hayang ngagunake *skill* anu ngarti tema, cukup jelaskeun naon anu anjeun hoyong dilakukeun dina antarmuka *chat*. Asisten bakal otomatis nyarakeun panduan ti *skill* anu pas.

### Conto *Prompt* (*Example Prompts*)

**Kanggo Block Themes:**
> "Buat bagian hero jeung gambar latar jeung téks di tengah nganggo pola blok."

**Kanggo Classic Themes:**
> "Tambah area widget kustom ka *sidebar* nganggo *child theme*."

**Kanggo Kadence Blocks:**
> "Bangun bagian testimoni nganggo *block* Kadence Testimonials."

**Kanggo Kadence Theme:**
> "Kustomisasi tata letak *header* jeung gaya menu navigasi."

Asisten bakal ngajelaskeun panduan jeung conto kode anu boga kaitanna jeung tema jeung *plugin* anu anjeun keur aktif.

:::note
*Skill* anu ngarti tema otomatis geus aya dina Superdav AI Agent v1.10.0 jeung di lila. Teu perlu persiapan atawa konfigurasi tambahan.
:::
