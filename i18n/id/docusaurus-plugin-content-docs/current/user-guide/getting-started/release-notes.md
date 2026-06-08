---
title: Catatan Rilis
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Catatan Rilis

## Versi 2.12.0 — Dirilis pada 2026-05-15

- Tambahan: Menambahkan Hostinger (hPanel) sebagai penyedia host yang didukung dengan integrasi pemetaan domain.
- Tambahan: Site Exporter kini menangani bundel impor jaringan untuk pemulihan situs skala jaringan yang lebih lancar.
- Perbaikan: Email siaran BCC kini menggunakan header `undisclosed-recipients` untuk mencegah paparan alamat penerima.
- Perbaikan: Tanggal kedaluwarsa keanggotaan tidak lagi rusak saat disimpan dengan nilai non-tanggal.
- Perbaikan: Pembaruan keanggotaan Stripe kini membersihkan diskon dengan benar tanpa memanggil API `deleteDiscount` yang sudah usang.
- Perbaikan: Pengalihan SSO pada situs yang dipetakan domain kini dibatasi untuk mencegah *infinite redirect loops*.
- Perbaikan: Pemilihan pemilih gambar di *setup wizard* kini memperbarui model data yang mendasarinya dengan benar.
- Perbaikan: CLI Site Exporter kini mempertahankan pilihan situs jaringan default yang benar.
- Peningkatan: Menghapus `wp-cli` yang dibundel dari paket plugin, mengurangi ukuran plugin.

## Versi 2.11.0 — Dirilis pada 2026-05-11

- Tambahan: Ekspor situs kini membundel `index.php` yang dapat *self-booting* sehingga ZIP dapat diinstal di host baru tanpa instalasi plugin terpisah.
- Tambahan: Ekspor jaringan memungkinkan administrator mengekspor semua subsitus dalam satu arsip dari halaman admin Site Export.
- Tambahan: Toggle "Allow Site Templates" kini ditegakkan melalui rantai *fallback*, membatasi ketersediaan template sesuai batas paket dengan benar.
- Tambahan: Editor formulir checkout akan memperingatkan ketika produk ditambahkan tanpa *field* wajib yang dikonfigurasi.
- Tambahan: Tab pengaturan Impor/Ekspor kini menjelaskan cakupannya dengan jelas dan menautkan langsung ke alat Site Export.

## Versi 2.10.0 — Dirilis pada 2026-05-05

- Tambahan: Wizard pengaturan terpandu PayPal untuk entri kredensial manual dengan gerbang *flag* OAuth untuk konfigurasi gateway yang mulus.
- Tambahan: Panel pelanggan pengganti template didesain ulang dengan kartu template saat ini, *grid* persisten, dan tombol **Reset current template**.
- Perbaikan: Penggantian template tidak lagi membuat UI *hang* saat kegagalan AJAX.
- Perbaikan: Status izin penggantian template diamankan terhadap akses tidak sah.
- Perbaikan: Input *override* situs divalidasi sebelum disimpan.
- Perbaikan: Prompt alamat penagihan kini ditampilkan ketika alamat kosong.
- Perbaikan: Pemberitahuan deprecation *null-to-string* PHP 8.1 telah diselesaikan.
- Perbaikan: Currents dimuat secara *lazy* sebelum *hook* `init` untuk mencegah masalah waktu.
- Perbaikan: Path SSO yang difilter dihormati di semua alur login.
- Perbaikan: Opsi identitas situs kosong dipertahankan saat disimpan.

## Versi 2.9.0 — Dirilis pada 2026-04-30

- Tambahan: Ekspor dan impor situs tunggal ditambahkan di bawah **Tools > Export & Import**.
- Perbaikan: File ZIP ekspor kini disajikan melalui *endpoint* unduhan terautentikasi.
- Perbaikan: Risiko injeksi SQL dan masalah kueri pada kueri ekspor/impor tertunda telah diperbaiki.
- Perbaikan: Situs tertunda tidak dipublikasikan ketika admin memverifikasi email pelanggan secara manual.
- Perbaikan: Catatan `pending_site` yatim piatu dibersihkan ketika keanggotaan hilang.
- Perbaikan: Padding navigasi pengaturan dan navigasi jangkar pencarian telah diperbaiki.
- Perbaikan: Situs tertunda kini ditampilkan pertama di tampilan All Sites.
- Perbaikan: Header User-Agent penyedia *screenshot* (mShots) ditambahkan untuk mencegah kesalahan 403.
- Perbaikan: Dependensi sirkular jadwal cron impor telah diselesaikan.
- Perbaikan: ID Tur dinormalisasi menjadi garis bawah di kunci pengaturan pengguna.
- Peningkatan: Sekarang menggunakan ZipArchive alih-alih Alchemy/Zippy untuk kompatibilitas yang lebih baik.

## Versi 2.8.0 — Dirilis pada 2026-04-29

- Tambahan: Toggle Enable Jumper ditambahkan ke UI pengaturan Other Options.
- Tambahan: Kolom Status ditambahkan ke tabel daftar formulir checkout.
- Tambahan: Loader file sunrise addon untuk ekstensi sunrise MU-plugin kustom.
- Peningkatan: Menghapus pengaturan opt-in pelaporan kesalahan dari halaman pengaturan.
- Perbaikan: Kartu situs halaman terima kasih — gambar kini dibatasi dan tautan distilasi dengan benar.
- Perbaikan: Penyedia *screenshot* beralih dari thum.io ke WordPress.com mShots.
- Perbaikan: Enable Registration dan Default Role kini mengatur nilai default yang benar pada instalasi baru.
- Perbaikan: `get_site_url()` tidak lagi mengembalikan kosong ketika domain menyertakan port.
- Perbaikan: File media kloning kini disalin dengan benar ketika pengaturan `copy_media` kosong.
- Perbaikan: *Cache* objek kini dinvalidasi dengan benar setelah penulisan sitemeta `network-activate`.
- Perbaikan: Domain kustom otomatis dipromosikan menjadi utama pada verifikasi DNS untuk domain 3 bagian.
- Perbaikan: Keanggotaan tertunda dibatalkan ketika pembayaran kedaluwarsa dibersihkan.
- Perbaikan: Pemeriksa kekuatan kata sandi diikat ulang setelah prompt login *inline* ditutup.
- Perbaikan: Pembaruan halaman tak terhingga dihentikan di halaman terima kasih ketika situs sudah dibuat.
- Perbaikan: Opsi pendaftaran WP core disinkronkan saat aktivasi plugin dan penyimpanan pengaturan.
- Perbaikan: Pelindung kedaluwarsa *null* ditambahkan dalam `calculate_expiration` untuk kompatibilitas PHP 8.4.
- Perbaikan: Pendaftaran duplikat diblokir ketika pelanggan sudah memiliki keanggotaan aktif.
- Perbaikan: Pemeriksaan *null* ditambahkan untuk `date_expiration` di checkout.
- Perbaikan: Penyediaan situs diperkuat — batasan, inferensi keanggotaan, promosi domain.
- Perbaikan: Label status pemeriksaan pra-instal diperbaiki menjadi NOT Activated ketika pemeriksaan gagal.
- Perbaikan: Domain checkout digunakan untuk URL verifikasi email.
- Perbaikan: Auto-login setelah checkout ketika tidak ada *field* kata sandi.
- Perbaikan: Keanggotaan gratis tidak lagi kedaluwarsa — diperlakukan sebagai seumur hidup.
- Perbaikan: Gerbang verifikasi email menahan publikasi situs sampai pelanggan memverifikasi email.
- Perbaikan: Jalur dasar dan rute identitas API SES v2 telah diperbaiki.
- Perbaikan: *Hook* `wu_inline_login_error` dipancarkan dalam blok *catch* pra-submit.
