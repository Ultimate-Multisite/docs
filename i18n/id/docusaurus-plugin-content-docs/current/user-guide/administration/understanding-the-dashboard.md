---
title: Memahami Dasbor
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Memahami Dashboard Ultimate Multisite

Sebelum kita mendalami opsi konfigurasi lanjutan dan aspek operasional Ultimate Multisite, mari kita lihat dashboard-nya terlebih dahulu.

Seperti banyak plugin WordPress lainnya, Ultimate Multisite membuat entri menu di tingkat jaringan dengan judul **Ultimate Multisite** beserta beberapa entri sub-menu di bawahnya.

## Widget Dashboard Jaringan

Ultimate Multisite menyisipkan beberapa widget berguna ke dalam dashboard tingkat jaringan. Dashboard ini dapat ditemukan dengan membuka **My Sites → Network Admin → Dashboard**. Widget-widget ini dirancang untuk memberikan akses mudah ke informasi dan operasi umum bagi administrator jaringan.

![Dashboard Jaringan dengan widget Ultimate Multisite](/img/admin/network-dashboard-full.png)

### Langkah Pertama

![Widget Langkah Pertama](/img/admin/network-dashboard-first-steps.png)

Widget ini muncul pada instalasi baru Ultimate Multisite dan mengingatkan administrator jaringan untuk menyelesaikan tugas tambahan seperti mengonfigurasi metode pembayaran dan membuat akun uji coba.

### Ringkasan

![Widget Ringkasan](/img/admin/network-dashboard-summary.png)

Widget Ringkasan melaporkan jumlah pendaftaran dan pendapatan untuk hari tersebut. MRR (Monthly Recurring Revenue/Pendapatan Berulang Bulanan) menunjukkan proyeksi total dari pelanggan yang memiliki keanggotaan berbayar.

### Aliran Aktivitas

![Widget Aliran Aktivitas](/img/admin/network-dashboard-activity-stream.png)

Widget ini melaporkan berbagai event di seluruh Ultimate Multisite. Event meliputi pendaftaran, pembatalan, pembuatan situs, penghapusan, dan aktivitas lainnya.

Silakan lihat bagian Events pada dokumentasi untuk penjelasan lebih detail.

### Sekarang

![Widget Sekarang](/img/admin/network-dashboard-right-now.png)

Widget utilitas ini menampilkan ringkasan singkat tentang pengguna dan situs di jaringan. Pintasan praktis di bagian atas memungkinkan akses sekali klik untuk membuat situs atau pengguna baru.

### Berita dan Diskusi

![Widget Berita dan Diskusi](/img/admin/network-dashboard-news.png)

Widget ini mengambil dan menampilkan berita terbaru Ultimate Multisite. Pantau terus widget ini untuk informasi tentang pembaruan, bug kritis, dan perbaikan keamanan.

## Dashboard Ultimate Multisite

Jika dashboard tingkat jaringan menyajikan informasi menyeluruh tentang jaringan, dashboard Ultimate Multisite (yang terletak di tingkat atas menu Ultimate Multisite) menyajikan informasi tentang layanan.

![Dashboard Ultimate Multisite](/img/admin/um-dashboard-top.png)

### Pertumbuhan Pendapatan Berulang Bulanan

Grafik MRR (Monthly Recurring Revenue/Pendapatan Berulang Bulanan) menampilkan rincian pendapatan bulanan selama periode 12 bulan kalender.

![Grafik Pertumbuhan MRR](/img/admin/um-dashboard-mrr.png)

Pendapatan baru ditampilkan dalam warna biru, sementara pembatalan ditunjukkan dalam warna merah.

### Dukungan Rentang Tanggal

Tergantung pada jumlah pelanggan dan aktivitas, statistik bisa menjadi sangat banyak. Dukungan rentang tanggal yang terintegrasi dalam dashboard memungkinkan administrator jaringan untuk fokus hanya pada informasi dan periode waktu yang dibutuhkan.

![Pemilih rentang tanggal dan statistik](/img/admin/um-dashboard-date-range.png)

Rentang tanggal mengatur periode informasi yang ditampilkan oleh widget di bawahnya, termasuk pendapatan, keanggotaan baru, pendaftaran berdasarkan negara, pendaftaran berdasarkan formulir, dan situs yang paling banyak dikunjungi.

![Widget statistik dashboard](/img/admin/um-dashboard-stats.png)

:::tip
Untuk mengaktifkan widget **Most Visited Sites**, aktifkan penghitungan kunjungan di **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
