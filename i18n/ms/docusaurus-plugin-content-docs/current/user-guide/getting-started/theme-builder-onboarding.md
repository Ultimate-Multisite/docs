---
title: Aliran Orientasi Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Aliran Onboarding Pembina Tema

Superdav AI Agent v1.12.0 memperkenalkan **aliran onboarding Theme Builder** berpandu yang membantu anda mencipta tema blok tersuai semasa persediaan awal. Ini menggantikan mod Site Builder yang lama dengan pendekatan yang lebih fleksibel dan dibantu oleh agent.

## Apakah Aliran Onboarding Pembina Tema? {#what-is-the-theme-builder-onboarding-flow}

Aliran onboarding Pembina Tema adalah wizard persediaan interaktif yang:

- Membimbing anda melalui keputusan reka bentuk (warna, tipografi, susun atur)
- Mengambil maklumat keutamaan identiti visual tapak anda
- Menjana tema blok tersuai yang disesuaikan dengan keperluan anda
- Mengaktifkan tema secara automatik apabila selesai

Aliran ini dikuasakan oleh **agent Setup Assistant**, yang akan mengajukan soalan-soalan penjelasan dan membina tema anda secara berperingkat.

## Memulakan Onboarding Pembina Tema {#starting-the-theme-builder-onboarding}

### Persediaan Kali Pertama {#first-run-setup}

Apabila anda pertama kali melancarkan Superdav AI Agent pada pemasangan WordPress baharu, anda akan melihat:

```
Selamat datang ke Superdav AI Agent!

Apa yang anda ingin lakukan?
1. Bina tema tersuai (Theme Builder)
2. Gunakan tema sedia ada
3. Langkau persediaan buat masa ini
```

Pilih **"Bina tema tersuai"** untuk memasuki aliran onboarding Theme Builder.

### Pengaktifan Manual {#manual-activation}

Anda juga boleh memulakan onboarding Theme Builder pada bila-bila masa dengan meminta:

```
"Mula onboarding Theme Builder"
```

atau

```
"Bantu saya cipta tema tersuai"
```

## Langkah-Langkah Onboarding {#the-onboarding-steps}

### Langkah 1: Pemilihan Mod {#step-1-mode-selection}

Agent Setup Assistant akan bertanya tentang keutamaan anda:

```
Bagaimana anda ingin membina tema anda?
- Berpandu (Saya akan bertanya soalan dan membina untuk anda)
- Praktikal (Saya akan tunjukkan pilihan dan anda yang membuat keputusan)
```

**Mod Berpandu** disyorkan untuk kebanyakan pengguna; agent akan membuat cadangan reka bentuk berdasarkan industri dan matlamat anda.

### Langkah 2: Spesifikasi Tapak {#step-2-site-specification}

Anda akan ditanya tentang tapak anda:

- **Tujuan tapak**: E-dagang, blog, portfolio, SaaS, dsb.
- **Audiens sasaran**: Siapakah pelawat anda?
- **Warna jenama**: Warna utama dan sekunder (atau "Saya tidak pasti")
- **Nada**: Profesional, kreatif, ceria, minimal, dsb.

Maklumat ini disimpan dalam memori **site_brief** anda, yang akan dirujuk oleh agent dalam sesi akan datang.

### Langkah 3: Keputusan Sistem Reka Bentuk {#step-3-design-system-decisions}

Agent membimbing anda melalui pemilihan token reka bentuk:

- **Tipografi**: Keluarga fon (serif, sans-serif, monospace) dan skala saiz
- **Palet warna**: Warna utama, sekunder, aksen, dan neutral
- **Jarak (Spacing)**: Susun atur padat, normal, atau lapang
- **Pergerakan (Motion)**: Animasi dan transisi (jika diingini)

### Langkah 4: Penjanaan Tema {#step-4-theme-generation}

Agent Setup Assistant akan menyediakan rangka (scaffold) tema blok tersuai anda dengan:

- `theme.json` yang mengandungi semua token reka bentuk anda
- Templat blok untuk susun atur biasa (halaman utama, blog, hubungan)
- Gaya blok tersuai yang sepadan dengan sistem reka bentuk anda
- Metadata tema dan deklarasi sokongan WordPress

### Langkah 5: Pengaktifan dan Pengesahan {#step-5-activation-and-verification}

Tema akan diaktifkan secara automatik, dan anda akan melihat:

```
✓ Tema tersuai anda kini aktif!
  Nama tema: [Nama Tapak Anda] Theme
  Warna: [Utama] / [Sekunder]
  Tipografi: [Keluarga Fon]

  Sila lawati tapak anda untuk melihat reka bentuk baharu.
```

Anda kemudian boleh melawat tapak anda untuk mengesahkan bahawa tema dipaparkan dengan betul.

## Spesifikasi Tapak dan Memori site_brief {#site-specification-and-sitebrief-memory}

Semasa onboarding, agent akan mengambil spesifikasi tapak anda dalam kategori memori **site_brief**. Ini termasuk:

- Tujuan dan matlamat tapak
- Audiens sasaran
- Warna dan nada jenama
- Keutamaan reka bentuk
- Struktur kandungan

### Mengapa site_brief Penting {#why-sitebrief-matters}

Dalam sesi akan datang, agent akan merujuk site_brief anda untuk:

- Mengekalkan konsistensi reka bentuk merentasi perubahan
- Mencadangkan ciri yang selaras dengan tujuan tapak anda
- Memberikan cadangan yang sedar konteks
- Mengelakkan pengulangan soalan persediaan

### Melihat site_brief Anda {#viewing-your-sitebrief}

Anda boleh meminta agent:

```
"Tunjukkan site brief saya"
```

atau

```
"Apa yang anda tahu tentang tapak saya?"
```

Agent akan memaparkan spesifikasi tapak anda yang disimpan.

## Menyesuaikan Selepas Onboarding {#customizing-after-onboarding}

Setelah onboarding Theme Builder selesai, anda boleh:

### Menggunakan Kemahiran Estetika Sistem Reka Bentuk {#use-the-design-system-aesthetics-skill}

Meminta penambahbaikan reka bentuk:

```
"Perhalusi tipografi agar lebih moden"
```

atau

```
"Laraskan palet warna agar lebih hangat"
```

**Kemahiran Estetika Sistem Reka Bentuk** akan membimbing anda melalui kemas kini reka bentuk yang disasarkan.

### Mengedit theme.json Secara Langsung {#edit-themejson-directly}

Untuk pengguna lanjutan, edit `/wp-content/themes/[theme-name]/theme.json` untuk melaraskan:

- Token warna
- Skala tipografi
- Nilai jarak
- Definisi sempadan dan bayangan

### Mencipta Templat Blok Tersuai {#create-custom-block-templates}

Gunakan editor blok WordPress untuk mencipta templat tersuai untuk:

- Susun atur halaman utama
- Halaman pos blog
- Halaman produk
- Borang hubungan

## Perbandingan: Onboarding Lama vs. Baharu {#comparison-old-vs-new-onboarding}

| Ciri | Site Builder (Lama) | Theme Builder (Baharu) |
|---------|----------------------|-------------------|
| Kaedah persediaan | Borang berasaskan wizard | Perbualan berpandu agent |
| Penjanaan tema | Templat terhad | Rangka tersuai |
| Token reka bentuk | Kemasukan manual | Keputusan berpandu |
| Fleksibiliti | Pilihan tetap | Boleh disesuaikan |
| Kemas kini masa depan | Tidak dirujuk | Disimpan dalam site_brief |

## Penyelesaian Masalah {#troubleshooting}

**Aliran onboarding tidak selesai**
- Mulakan semula aliran: "Mula onboarding Theme Builder"
- Pastikan pemasangan WordPress anda terkini
- Sahkan agent Setup Assistant telah diaktifkan

**site_brief saya tidak digunakan**
- Sahkan agent mempunyai akses kepada memori
- Minta agent untuk "ingat site brief saya"
- Semak bahawa memori telah diaktifkan dalam tetapan anda

**Tema yang dijana tidak sepadan dengan keutamaan saya**
- Gunakan kemahiran Estetika Sistem Reka Bentuk untuk memperhalus
- Minta agent untuk "jana semula tema dengan [perubahan spesifik]"
- Edit theme.json secara langsung untuk kawalan yang tepat

## Langkah Seterusnya {#next-steps}

Selepas melengkapkan onboarding Theme Builder:

1. **Sahkan tapak anda**: Lawati tapak anda untuk melihat tema baharu
2. **Perhalusi reka bentuk**: Gunakan kemahiran Estetika Sistem Reka Bentuk untuk pelarasan
3. **Tambah kandungan**: Mulakan membina kandungan tapak anda
4. **Terokai keupayaan**: Ketahui tentang keupayaan agent lain seperti scaffold-block-theme dan activate-theme
