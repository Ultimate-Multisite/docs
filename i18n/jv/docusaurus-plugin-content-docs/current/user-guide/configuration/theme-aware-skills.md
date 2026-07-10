---
title: Keterampilan Sadar Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Keterampilan Sadar Tema {#theme-aware-skills}

Superdav AI Agent v1.10.0 ngirim empat keterampilan bawaan baru yang sadar tema (theme-aware) yang otomatis menyesuaikan diri dengan tema WordPress yang sedang aktif di situs kamu. Keterampilan ini memberikan panduan dan kemampuan khusus yang disesuaikan dengan arsitektur dan fitur tema kamu.

## Apa Itu Keterampilan Sadar Tema? {#what-are-theme-aware-skills}

Keterampilan sadar tema itu adalah basis pengetahuan (knowledge bases) dan kumpulan alat (tool sets) yang sudah dikonfigurasi sebelumnya yang dipilih secara otomatis oleh asisten AI berdasarkan tema WordPress yang sedang aktif di situs kamu. Kalau kamu ganti tema, keterampilan yang tersedia untuk asisten akan diperbarui secara otomatis — ora perlu konfigurasi manual.

Setiap keterampilan meliputi:

- **Dokumentasi spesifik tema** — panduan tentang cara menggunakan dan menyesuaikan tema
- **Referensi blok dan pola (block and pattern)** — blok, pola, dan pilihan desain yang tersedia
- **Contoh kustomisasi** — potongan kode dan pola konfigurasi untuk tugas-tugas umum
- **Praktik terbaik (best practices)** — rekomendasi untuk arsitektur dan alur kerja tema

## Keterampilan Sadar Tema yang Tersedia {#available-theme-aware-skills}

### Tema Blok (Block Themes) {#block-themes}

**Berlaku untuk:** Tema yang menggunakan arsitektur berbasis blok WordPress (Full Site Editing).

Keterampilan Block Themes memberikan panduan tentang:

- Membuat dan mengedit template menggunakan block editor
- Bekerja dengan block patterns dan reusable blocks
- Mengkustomisasi gaya global dan pengaturan theme.json
- Menggunakan theme blocks dan variasi (variations)
- Membangun custom block patterns untuk situs kamu

**Aktif otomatis ketika:** Tema aktif kamu adalah tema blok (mendukung fitur `block-templates`).

### Tema Klasik (Classic Themes) {#classic-themes}

**Berlaku untuk:** Tema WordPress tradisional yang menggunakan template PHP dan editor klasik.

Keterampilan Classic Themes memberikan panduan tentang:

**Kerja sama karo file template PHP lan hook**
**Ngubah tampilan tema nganggo Customizer**
**Nggunakake widget area lan sidebar**
**Modifikasi CSS lan pengembangan child theme**
**Ngerti hierarki tema lan template tag**

**Otomatise aktif nalika:** Tema aktifmu iku tema klasik (non-block).

### Kadence Blocks {#kadence-blocks}

**Cocok kanggo:** Situs sing nggunakake plugin Kadence Blocks kanggo desain berbasis blok sing luwih canggih.

Skill Kadence Blocks menehi panduan babagan:

- Nggunakake perpustakaan blok canggih Kadence (Hero, Testimonials, Pricing, lsp.)
- Ngatur pengaturan blok Kadence lan opsi responsif
- Nggawe tata letak kustom nganggo blok grid lan container Kadence
- Ngintegrasi blok Kadence karo tema samarammu
- Nggunakake sistem desain lan preset Kadence

**Otomatise aktif nalika:** Plugin Kadence Blocks aktif ing situsmu.

### Kadence Theme {#kadence-theme}

**Cocok kanggo:** Situs sing nggunakake tema Kadence kanggo desain berbasis blok lan kustomisasi.

Skill Kadence Theme menehi panduan babagan:

- Ngubah tampilan tema Kadence nganggo global styles lan theme.json
- Nggunakake pola blok lan template bawaan Kadence
- Ngatur pengaturan lan opsi tema Kadence
- Nggawe desain kustom nganggo sistem desain Kadence
- Ngintegrasi Kadence karo plugin lan alat populer

**Otomatise aktif nalika:** Tema Kadence iku tema aktifmu.

## Kepiye Skill Ditemtokake {#how-skills-are-selected}

Asisten bakal otomatis nangkep tema aktif lan plugin sing wis diinstal ing saben pesanmu. Yen ana skill sing cocok karo tema kasebut, skill ku bakal otomatis dimuat menyang konteks asisten. Ora perlu ngaktifake utawa ganti skill manual.

### Multiple Skills {#multiple-skills}

Yenane skill akeh sing cocok kanggo situsmu (umpamane, yen sampeyan duwe Kadence Blocks lan Kadence Theme aktif), asisten bakal bisa nggunakake kabeh skill sing ana lan bisa ngacu panduan saka saben skill.

### Ganti Tema {#switching-themes}

Nalika sampeyan ganti tema sing lagi aktif, skill sing bisa digunakake asisten bakal otomatis diupdate ing pesen sabanjure. Contone:

1. Sampeyan lagi nggunakake tema block kanthi skill **Block Themes** aktif.
2. Sampeyan ganti menyang tema klasik.
3. Ing pesen sabanjure, skill **Classic Themes** bakal otomatis dimuat, lan skill **Block Themes** ora bakal bisa digunakake maneh.

## Nggunakake Skill-Aware Tema {#using-theme-aware-skills}

Kanggo nggunakake skill sing ngerti babagan tema (theme-aware skill), cukup jelasna apa sing arep sampeyan lakoni ing antarmuka obrolan. Asisten bakal otomatis ngacu panduan saka skill sing pas.

### Conto Prompt {#example-prompts}

**Kanggo Block Themes:**
> "Gawe bagian hero kanthi gambar latar lan teks tengah nganggo block patterns."

**Kanggo Classic Themes:**
> "Tambah area widget kustom ing sidebar nganggo child theme."

**Kanggo Kadence Blocks:**
> "Bangun bagian testimoni nganggo Kadence Testimonials block."

**Kanggo Kadence Theme:**
> "Kustomisasi tata letak header lan styling menu navigasi."

Asisten bakal menehi panduan spesifik tema lan conto kode sing disesuaikan karo tema lan plugin sing lagi aktif.

:::note
Skill-aware theme otomatis bisa digunakake ing Superdav AI Agent v1.10.0 lan luwih anyar. Ora perlu persiapan utawa konfigurasi tambahan.
:::
