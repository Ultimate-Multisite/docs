---
title: Ngatur Situs
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Ngelola Situs {#managing-sites}

Situs (atau subsitus) téh inti tina bisnis WaaS anjeun. Ultimate Multisite miboga 3 jenis situs:

- **Customer-owned** — Situs anu milik pelanggan tartamtu
- **Site Templates** — Situs anu geus aya saméméah anu bisa dipilih ku pelanggan salaku titik awal
- **Main Site** — Situs jaringan utama anjeun

## Ngajak Situs {#viewing-sites}

Pindah ka **Ultimate Multisite → Sites** pikeun ningali sadaya subsitus di jaringan anjeun. Unggal situs dibedake ku jenisna jeung anjeun bisa filter ku Sadaya Situs, Customer-Owned, Templates, atawa Pending.

![Sites list page](/img/admin/sites-list.png)

## Nambah Situs Anyar {#adding-a-new-site}

Klik tombol **Add Site** pikeun ngadamel situs anyar. Anjeun bakal butuh nyadiake:

- **Site Title** — Ngaran situs anyar
- **Site URL** — Domain/jalur pikeun situs éta
- **Site Type** — Upami éta téh situs pelanggan, template, atawa situs biasa

Pilihan **Copy Site** ngabagékeun anjeun bisa nyieun situs anyar dumasar template situs anu geus aya. Lamun diaktifkeun, anjeun bisa milih template mana anu rék dipaké salaku titik awal. Pastikeun **Copy Media on Duplication** diaktifkeun sangkan file media ogé kaasup.

## Ngelola Situs Anu Geus Aya {#managing-an-existing-site}

Klik **Manage** dina situs mana waé pikeun muka halaman **Edit Site**. Di dieu anjeun bakal nempo:

### Informasi Dasar {#basic-information}

Ngaran situs, jenisna, site ID, jeung deskripsi. Anjeun ogé bakal ningali domain anu dipetikeun, keanggotaan anu patali, sarta akun pelanggan anu ngawasa situs éta.

### Pilihan Situs {#site-options}

Ngatur kemampuan je batasan situs:

- **Visit limits** — Jumlah maksimal kunjungan situs
- **User account limits** — Batasan per peran pengguna
- **Disk space** — Alokasi penyimpanan pikeun situs
- **Custom domain** — Ngaktifkeun pemetaan domain pikeun situs éta
- **Plugin and theme visibility** — Ngontrol plugin je tema mana anu katingali, disumputkeun, atawa geus diaktifkeun



Secara *default*, situs bakal ngikut batasan anu diatur dina level keanggotaan (*membership*). Ngaturan batasan di level situs bakal ngalimpahkeun (override) pengaturan keanggotaan.

### Asosiasi {#associations}

Di handap pilihan situs, anjeun bakal manggihan informasi ngeunaan:

- **Mapped domains** anu patali jeung situs
- **Membership** tempat situs éta aya
- **Customer account** anu patali jeung situs

### Sidebar Kanan {#right-sidebar}

Di sisi kanan anjeun bisa:

- **Ngaktifkeun/ngalereskeun (enable/disable) situs** ku tombol *toggle*
- **Ngubah tipe situs** atawa ngalimpahkeun hak kepemilikan (*reassign ownership*)
- **Nyetel gambar/thumbnail situs** (anu dipajang di *frontend* pikeun *site templates*)
- **Ngabéréskeun situs** permanen

:::warning
Ngabéréskeun situs téh teu bisa dibalikkeun deui. Situs jeung sadaya kontenna bakal dihapus permanen.
:::
