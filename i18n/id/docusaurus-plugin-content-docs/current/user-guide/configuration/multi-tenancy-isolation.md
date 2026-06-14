---
title: Isolasi Multi-Sewa
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolasi Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 mendukung isolasi database dan sistem file per subsite untuk tenant yang berdaulat (sovereign). Ini menjaga data tenant tetap terpisah sambil mempertahankan penyediaan jaringan, penagihan, dan administrasi di tingkat jaringan.

## Strategi Isolasi

Gunakan isolasi berdaulat (sovereign isolation) untuk pelanggan yang membutuhkan pemisahan data yang lebih kuat, penyimpanan sistem file khusus, atau batas host yang terpisah.

Setiap tenant berdaulat harus memiliki:

- Database tenant khusus atau strategi awalan database yang disetujui untuk host.
- Akar sistem file tenant khusus.
- Entri registri tenant yang memetakan situs ke database, path akar, nama host, dan model isolasi.
- Hasil verifikasi migrasi sebelum tenant dianggap aktif (live).

## Pengikatan Host Database

Versi 1.2.0 mengubah perilaku pengikatan host mesin yang sama secara default untuk instalasi berdaulat. Nilai mesin yang sama seperti `localhost` dinormalisasi sehingga Bedrock, FrankenPHP, dan instalasi WordPress yang dikontainerisasi dapat memberikan dan memverifikasi izin terhadap string host yang sebenarnya dilihat oleh MySQL.

Saat mengonfigurasi tenant berdaulat:

1. Atur host database ke nilai yang dibutuhkan oleh runtime tenant.
2. Gunakan `localhost` untuk instalasi soket lokal ketika host mengharapkan koneksi lokal.
3. Gunakan `127.0.0.1` atau nama hostname layanan hanya jika server database memberikan hak istimewa kepada host tersebut.
4. Jalankan verifikasi migrasi setelah mengubah pengikatan host.

Jika laporan verifikasi menunjukkan kegagalan pemberian izin, bandingkan pemberian izin pengguna DB tenant dengan pengikatan host yang dikonfigurasi. Pengguna yang diberikan untuk `user@localhost` berbeda dengan `user@127.0.0.1` atau `user@%`.

## Akar Sistem File

Root tenant harus stabil saat *restart* dan *deployment*. Hindari menggunakan *mount path* sementara. Untuk instalasi bergaya Bedrock, pastikan root tenant menunjuk ke *web root* WordPress yang diharapkan oleh *bootstrap* tenant, bukan hanya *project root*.

## Urutan Penyediaan (*Provisioning order*)

Untuk tenant kedaulatan baru, gunakan urutan ini:

1. Buat entri registri tenant.
2. Buat database dan pengguna database tenant.
3. *Bootstrap* skema tenant.
4. Sediakan pengguna tenant.
5. Konfigurasi jalur sistem file tenant.
6. Jalankan verifikasi migrasi.
7. Alihkan *routing* atau DNS setelah verifikasi berhasil.

Urutan ini mencegah tenant yang terisolasi sebagian menerima lalu lintas sebelum penulis database, pengguna, dan sistem file siap.

## Alur manajemen pelanggan kedaulatan (*Sovereign customer management flows*)

Ultimate Multisite v2.13.0 mempertahankan tindakan manajemen pelanggan di situs utama ketika mode kedaulatan (*sovereign mode*) diaktifkan. Sebuah tenant masih dapat berjalan sebagai instalasi WordPress yang terisolasi, tetapi tindakan yang berhadapan dengan pelanggan yang bergantung pada penagihan jaringan, keanggotaan, atau data akun bersama harus mengarahkan kembali pelanggan ke situs utama daripada mencoba menyelesaikan tindakan tersebut di dalam *runtime* tenant.

Alur situs utama berlaku untuk:

- Perubahan *checkout* dan rencana (*plan changes*).
- Tinjauan akun dan tindakan profil pelanggan.
- Pembaruan alamat penagihan dan layar manajemen pembayaran.
- Tampilan faktur dan riwayat pembayaran.
- Tindakan manajemen situs seperti menambahkan situs atau menghapus situs.
- Pengalihan *template*.
- Pemetaan domain (*domain mapping*) dan perubahan domain utama (*primary-domain*).

Ketika pelanggan memulai salah satu tindakan ini dari tenant kedaulatan (sovereign tenant), Ultimate Multisite akan membangun URL situs utama yang sesuai dan menyimpan tenant sumber sebagai target pengembalian jika aman untuk dilakukan. Ini memungkinkan pelanggan menyelesaikan tindakan yang dikelola terhadap catatan jaringan, kemudian kembali ke konteks tenant tanpa menduplikasi status penagihan atau keanggotaan di database kedaulatan tersebut.

Bagi operator, aturan praktisnya adalah: jaga agar halaman penagihan (billing), akun (account), checkout, faktur (invoice), template, dan manajemen domain tetap tersedia di situs utama untuk jaringan kedaulatan. Dasbor tenant dapat menautkan ke halaman-halaman tersebut, tetapi situs utama tetap menjadi sumber kebenaran (source of truth) untuk tindakan tersebut.
