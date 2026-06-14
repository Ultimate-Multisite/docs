---
title: Ekspor & Impor
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Ekspor & Impor

Ultimate Multisite 2.9.0 nambah alat **Export & Import** tunggal di bawah **Tools > Export & Import**. Gunakna iki nalika sampeyan perlu ngemas siji situs WordPress dadi file ZIP, ngrestore ZIP kuwi, utawa pindhahake situs antar instalasi Ultimate Multisite lan single-site WordPress sing cocok.

## Izin sing dibutuhake

Sampeyan kudu *sign in* minangka administrator sing bisa akses menu **Tools** ing WordPress saka situs sing arep diekspor utawa diimpor. Ing jaringan multisite, nganggo akun administrator jaringan nalika ekspor utawa impor subsitus saka alat Ultimate Multisite tingkat jaringan nalika ngerekspor utawa ngimpor subsitus.

Unduhan ZIP ekspor disajikan liwat *endpoint* unduh sing wis terautentikasi, mula jaga sesi admin tetep aktif nganti unduhan rampung lan aja bagi URL unduh sing digawe publik.

## Mengekspor situs dadi ZIP

1. Ing admin WordPress kanggo situs sing arep kok salin, tindakake **Tools > Export & Import**.
2. Bukak area ekspor lan pilih situs sing arep kok kemas.
3. Pilih konten opsional sing arep dimasukkan, kaya *uploads*, plugin, lan tema, nalika pilihan-pilihan kuwi wis ana.
4. Mulai ekspor lan tunggu proses rampung. Situs gedhe mungkin perlu rampung ing latar mburi sadurunge ZIP siap.
5. Unduh ZIP sing wis rampung saka daftar ekspor.

Jaga ZIP kuwi ing panggonan sing aman. Iki bisa ngandhut konten situs, pengaturan, file media, lan aset kode sing dipilih.

## Apa wae sing diikspor

ZIP ekspor bisa ngandhut:

- Konten database lan konfigurasi situs sing dipilih.
- File media sing wis diunggah nalika *uploads* dimasukkan.
- Plugin lan tema nalika pilihan kuwi wis dipilih.
- Metadata impor sing digunakake dening alat Export & Import kanggo mbangun maneh situs ing instalasi tujuan.

Ukuran ZIP sing tepat gumantung pada jumlah media, plugin dan tema yang dipilih, serta ukuran tabel database situsnya.

## Mengimpor situs dari ZIP

1. Pergi ke **Tools > Export & Import** di situs WordPress tujuanmu.
2. Buka area impor dan unggah file ZIP yang sudah kamu buat pakai alat Export & Import.
3. Masukkan URL pengganti kalau situs itu harus pakai alamat baru, atau biarkan kolom itu kosong kalau mau tetap pakai URL aslinya.
4. Pilih apakah mau menghapus ZIP yang sudah diunggah setelah proses impor selesai.
5. Klik **Begin Import**.
6. Pantau impor yang sedang menunggu sampai selesai. Pakai **Cancel Import** aja kalau kamu perlu menghentikan proses sebelum selesai.
7. Cek kembali situs yang sudah diimpor sebelum kasih akses ke pengunjung atau pelanggan biasa.

Di instalasi WordPress satu situs, mengimpor ZIP itu akan mengganti situs yang sekarang dengan situs yang diimpor. Buat backup lengkap dari situs tujuan sebelum mulai, dan hindari memulai beberapa impor untuk situs yang sama pada waktu yang bersamaan.

## Batasan dan catatan kompatibilitas

Direktori unggahan yang sangat besar atau perpustakaan media bisa menghasilkan file ZIP yang ukurannya besar. Pastikan dulu batasan unggahan PHP (PHP upload limits), batasan eksekusi (execution limits), ruang disk, memori (memory), dan pengaturan waktu habis server (server timeout settings) sebelum mengekspor atau mengimpor situs yang besar.
Perpustakaan media yang sangat besar mungkin perlu dipindahkan saat jendela pemeliharaan dengan trafik rendah.
Instalasi WordPress tujuan harus menjalankan versi WordPress, PHP, Ultimate Multisite, plugin, dan tema yang kompatibel.
Impor satu-situs akan menggantikan situs tujuan. Ini bukan alat untuk menggabungkan (merge tool).
Pemindahan dari Multisite ke single-site dan single-site ke Multisite hanya didukung jika lingkungan tujuan bisa menjalankan plugin, tema, URL, dan komponen Ultimate Multisite yang dibutuhkan oleh situs yang diekspor.
Jaga agar file ZIP tetap pribadi (private). File tersebut mungkin berisi konten database, file yang diunggah, dan detail konfigurasi dari situs yang diekspor.

Untuk alur kerja ekspor tingkat jaringan yang lebih lama, lihat [Site Export](/user-guide/administration/site-export).
