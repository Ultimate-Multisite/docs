---
title: Ekspor & Impor
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Ekspor & Impor {#export--import}

Ultimate Multisite 2.9.0 nambahan alat **Ekspor & Impor** satu situs di bawah **Tools > Export & Import**. Gunake éta lamun anjeun peryogi ngemas hiji situs WordPress jadi file ZIP, ngrestore ZIP éta, atawa ngalihkeun situs antara instalasi Ultimate Multisite je single-site WordPress anu kompatibel.

## Izin anu dipiharep {#required-permissions}

Anjeun kudu *sign in* salaku administrator anu bisa ngakses menu **Tools** WordPress di situs anu keur diekspor atawa diimpor. Dina jaringan multisite, anggo akun administrator jaringan nalika ngekspor atawa ngimpor subsitus tina alat Ultimate Multisite tingkat jaringan.

Unduhan ZIP ekspor dilayani ngaliwatan *endpoint* unduhan anu terautentikasi, jadi jaga sesi admin tetep aktif nepi ka unduhan réngsé je ulah bagi URL unduhan anu geus aya sacara umum.

## Ngeksspor situs kana ZIP {#exporting-a-site-to-a-zip}

1. Di admin WordPress pikeun situs anu rék dicokot, indit ka **Tools > Export & Import**.
2. Buka area ekspor sareng pilih situs anu rék dikemas.
3. Pilih konten pilihan anu kedah diselip, saperti *uploads*, plugin, je tema, lamun pilihan éta aya.
4. Muluan proses ekspor sareng antoskeun prosesna nepi ka réngsé. Situs gedé sok peryogi rék réngsé di latar tukang saméméan ZIP siap.
5. Unduh ZIP anu geus réngsé tina daftar ekspor.

Jaga ZIP éta dina tempat anu aman. Éta bisa ngandung konten situs, *setting*, file media, je aset kode anu dipilih.

## Naon waé anu aya dina ekspor {#what-the-export-includes}

ZIP ekspor bisa ngandung:

- Kontén database je konfigurasi situs anu dipilih.
- File media anu di-*upload* lamun pilihan éta diselip.
- Plugin je tema lamun pilihan éta dipilih.
- Metadata impor anu digunake ku alat Export & Import pikeun ngawangun deui situs dina instalasi tujuan.

Ukuran ZIP anu pas téh gumantung kana jumlah media, plugin je tema anu dipilih, sarta ukuran tabel database situsna.

## Impor Situs tina ZIP {#importing-a-site-from-a-zip}

1. Pergi ka **Tools > Export & Import** dina situs WordPress tujuan.
2. Buka area impor sareng unggah (upload) ZIP anu dipikawanoh ku alat Export & Import.
3. Masukkan URL pengganti (replacement URL) upami situsna kedah nganggo alamat anyar, atawa tinggali kosongkeun éta kolom supados URL asli tetep dipertahan.
4. Pilih upami bade ngabéréskeun ZIP anu diunggah sanggeus impor réngsé.
5. Klik **Begin Import**.
6. Pantau impor anu masih lila saméméh réngsé. Gunakeun **Cancel Import** ngan ukur lamun anjeun peryogi eureun proses saméméh réngsé.
7. Tinjau situs anu diimpor saméméh ngidinan lalu lintas biasa atawa akses ku pelanggan.

Dina instalasi WordPress satu situs, impor ZIP bakal ngaganti situs ayeuna kalawan situs anu diimpor. Buat backup lengkap tina situs target saméméh anjeun mimiti, sareng hindari mimiti sababaraha impor pikeun situs anu sarua dina waktu anu sarua.

## Batasan je Catatan kompatibilitas {#limitations-and-compatibility-notes}

Direktori unggahan atau perpustakaan media yang sangat besar bisa menghasilkan file ZIP yang ukurannya besar. Pastikan dulu batas unggahan PHP (PHP upload limits), batas eksekusi (execution limits), ruang disk, memori, dan pengaturan waktu habis server sebelum mengekspor atau mengimpor situs yang besar.
- Perpustakaan media yang sangat besar mungkin perlu dipindahkan selama jendela pemeliharaan dengan lalu lintas rendah.
- Instalasi WordPress tujuan harus menjalankan versi WordPress, PHP, Ultimate Multisite, plugin, dan tema yang kompatibel.
- Impor satu situs akan menggantikan situs tujuan. Ini bukan alat penggabungan (merge tool).
- Pemindahan dari Multisite ke single-site dan single-site ke Multisite hanya didukung jika lingkungan tujuan bisa menjalankan plugin, tema, URL, dan komponen Ultimate Multisite yang dibutuhkan dari situs yang diekspor.
- Jaga agar file ZIP tetap pribadi. File tersebut mungkin berisi konten database, file yang diunggah, dan detail konfigurasi dari situs yang diekspor.

Untuk alur kerja ekspor tingkat jaringan yang lebih lama, lihat [Site Export](/user-guide/administration/site-export).
