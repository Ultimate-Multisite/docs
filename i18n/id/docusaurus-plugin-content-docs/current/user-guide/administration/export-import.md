---
title: Ekspor & Impor
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Ekspor & Impor {#export--import}

Ultimate Multisite 2.9.0 menambahkan alat **Ekspor & Impor** untuk situs tunggal di bawah **Tools > Export & Import**. Gunakan alat ini jika Anda perlu mengemas satu situs WordPress sebagai file ZIP, memulihkan ZIP tersebut, atau memindahkan situs antara instalasi WordPress Ultimate Multisite dan situs tunggal yang kompatibel.

## Izin yang Diperlukan {#required-permissions}

Anda harus masuk sebagai administrator yang dapat mengakses menu **Tools** WordPress pada situs yang akan diekspor atau diimpor. Pada jaringan multisite, gunakan akun administrator jaringan saat mengekspor atau mengimpor subsites dari alat Ultimate Multisite tingkat jaringan.

Unduhan ZIP ekspor disajikan melalui *endpoint* unduhan terautentikasi, jadi pastikan sesi admin tetap aktif sampai unduhan selesai dan jangan membagikan URL unduhan yang dihasilkan secara publik.

## Mengekspor situs ke ZIP {#exporting-a-site-to-a-zip}

1. Di admin WordPress untuk situs yang ingin Anda salin, buka **Tools > Export & Import**.
2. Buka area ekspor dan pilih situs yang ingin Anda kemas.
3. Pilih konten opsional yang akan disertakan, seperti unggahan (*uploads*), plugin, dan tema, jika opsi tersebut tersedia.
4. Mulai ekspor dan tunggu prosesnya selesai. Situs besar mungkin memerlukan waktu untuk selesai di latar belakang sebelum ZIP siap.
5. Unduh ZIP yang sudah selesai dari daftar ekspor.

Simpan ZIP di lokasi yang aman. File ini dapat berisi konten situs, pengaturan, file media, dan aset kode yang dipilih.

## Apa yang disertakan dalam ekspor {#what-the-export-includes}

ZIP ekspor dapat berisi:

- Konten database dan konfigurasi situs yang dipilih.
- File media yang diunggah jika unggahan disertakan.
- Plugin dan tema jika opsi tersebut dipilih.
- Metadata impor yang digunakan oleh alat Export & Import untuk membangun kembali situs di instalasi target.

Ukuran ZIP yang tepat tergantung pada jumlah media, plugin dan tema yang dipilih, serta ukuran tabel database situs.

## Mengimpor situs dari ZIP {#importing-a-site-from-a-zip}

1. Buka **Tools > Export & Import** pada situs WordPress tujuan.
2. Buka area impor dan unggah ZIP yang dibuat oleh alat Export & Import.
3. Masukkan URL pengganti jika situs harus menggunakan alamat baru, atau biarkan kolom kosong untuk mempertahankan URL asli.
4. Pilih apakah akan menghapus ZIP yang diunggah setelah impor selesai.
5. Klik **Begin Import**.
6. Pantau impor yang tertunda sampai selesai. Gunakan **Cancel Import** hanya jika Anda perlu menghentikan proses sebelum selesai.
7. Tinjau situs yang diimpor sebelum mengizinkan lalu lintas normal atau akses pelanggan.

Pada instalasi WordPress situs tunggal, mengimpor ZIP akan mengganti situs saat ini dengan situs yang diimpor. Buat cadangan penuh (*full backup*) dari situs target sebelum Anda mulai, dan hindari memulai beberapa impor untuk situs yang sama pada waktu yang bersamaan.

## Batasan dan catatan kompatibilitas {#limitations-and-compatibility-notes}

- Direktori unggahan atau pustaka media yang sangat besar dapat menghasilkan file ZIP yang besar. Konfirmasikan batas unggahan PHP, batas eksekusi, ruang disk, memori, dan pengaturan *timeout* server sebelum mengekspor atau mengimpor situs besar.
- Pustaka media yang sangat besar mungkin perlu dipindahkan selama jendela pemeliharaan dengan lalu lintas rendah.
- Instalasi WordPress target harus menjalankan versi WordPress, PHP, Ultimate Multisite, plugin, dan tema yang kompatibel.
- Impor situs tunggal akan mengganti situs target. Ini bukan alat penggabungan (*merge tool*).
- Pemindahan dari multisite ke situs tunggal dan dari situs tunggal ke multisite hanya didukung jika lingkungan target dapat menjalankan plugin, tema, URL, dan komponen Ultimate Multisite yang diperlukan dari situs yang diekspor.
- Jaga kerahasiaan ZIP. File ini dapat berisi konten database, file yang diunggah, dan detail konfigurasi dari situs yang diekspor.

Untuk alur kerja ekspor tingkat jaringan yang lebih lama, lihat [Site Export](/user-guide/administration/site-export).
