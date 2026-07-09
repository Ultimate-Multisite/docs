---
title: Catatan Rilis
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Catatan Rilis

## Versi 2.13.0 — Dirilis pada 2026-06-05

- Baru: Menambahkan dukungan sovereign-tenant untuk alur Account pelanggan, checkout, penagihan, situs, faktur, pergantian templat, dan pemetaan domain sehingga jaringan tenant dapat mengarahkan pelanggan kembali ke situs utama untuk tindakan terkelola.
- Baru: Menambahkan pemeriksaan kredensial perpanjangan untuk membership berulang sehingga gateway dapat menonaktifkan perpanjangan otomatis ketika perjanjian penagihan tersimpan, langganan, atau vault token tidak ada.
- Baru: Menambahkan penerbitan loopback terverifikasi HMAC untuk pembuatan situs tertunda agar provisioning dari checkout ke situs lebih andal pada host yang tugas latar belakangnya tertunda.
- Baru: Menambahkan titik ekstensi developer untuk URL SSO, domain dasar formulir checkout, dan pembuatan catatan domain otomatis.
- Perbaikan: SSO lebih andal di seluruh domain yang dipetakan, kunjungan broker anonim, logout, dan konflik dependensi lintas plugin.
- Perbaikan: Pembuatan situs tertunda kini pulih dari flag publikasi yang kedaluwarsa dan menghindari pelanggan terhenti di layar pembuatan situs.
- Perbaikan: Catatan domain tidak lagi dibuat untuk domain dasar formulir checkout bersama, dan tugas latar belakang penyedia host yang tidak digunakan dilewati ketika tidak ada integrasi aktif.
- Perbaikan: Kasus tepi checkout, alamat penagihan, reset kata sandi, verifikasi email, pergantian templat, tur, dan dashboard pelanggan tidak lagi memblokir alur pelanggan normal.
- Perbaikan: Email broadcast kini menjaga penerima tetap privat sambil menghindari error fatal SMTP/plugin ketika daftar penerima atau transport email gagal.
- Perbaikan: Kasus tepi perpanjangan membership, tampilan kedaluwarsa, dan pengumpulan pembayaran kini menghindari kedaluwarsa langsung, crash, atau pembayaran wajib yang terlewat.
- Ditingkatkan: Kompatibilitas WordPress diuji hingga 7.0, aset Vue produksi dibangun ulang dari sumber npm, dan cakupan end-to-end Cypress kini menguji lebih banyak alur checkout, setup, SSO, dan gateway.

## Versi 2.12.0 — Dirilis pada 2026-05-15

- Baru: Menambahkan Hostinger (hPanel) sebagai penyedia host yang didukung dengan integrasi pemetaan domain
- Baru: Site Exporter kini menangani bundel impor jaringan untuk pemulihan situs seluruh jaringan yang lebih ringkas
- Perbaikan: Email broadcast BCC kini menggunakan header undisclosed-recipients untuk mencegah alamat penerima terekspos
- Perbaikan: Tanggal kedaluwarsa membership tidak lagi rusak saat disimpan dengan nilai non-tanggal
- Perbaikan: Pembaruan membership Stripe kini menghapus diskon dengan benar tanpa memanggil API deleteDiscount yang sudah deprecated
- Perbaikan: Pengalihan SSO pada situs yang dipetakan domain kini dibatasi untuk mencegah loop pengalihan tak terbatas
- Perbaikan: Pilihan pemilih gambar setup wizard kini memperbarui model data yang mendasarinya dengan benar
- Perbaikan: CLI Site Exporter kini mempertahankan pilihan situs jaringan default yang benar
- Ditingkatkan: Menghapus wp-cli bawaan dari paket plugin, mengurangi ukuran plugin

## Versi 2.11.0 — Dirilis pada 2026-05-11

- Baru: Ekspor situs kini menyertakan `index.php` yang dapat booting sendiri sehingga ZIP dapat diinstal pada host baru tanpa instalasi plugin terpisah.
- Baru: Ekspor jaringan memungkinkan administrator mengekspor semua subsitus dalam satu arsip dari halaman admin Site Export.
- Baru: Toggle plan Allow Site Templates kini diberlakukan melalui rantai fallback, membatasi ketersediaan templat untuk batas plan dengan benar.
- Baru: Editor formulir checkout memperingatkan ketika produk ditambahkan tanpa field wajib yang dikonfigurasi.
- Baru: Tab pengaturan Impor/Ekspor kini menjelaskan cakupannya dengan jelas dan menautkan langsung ke alat Site Export.

## Versi 2.10.0 — Dirilis pada 2026-05-05

- Baru: PayPal guided setup wizard untuk entri kredensial manual dengan OAuth flag gate untuk konfigurasi gateway yang mulus.
- Baru: Panel pelanggan pergantian templat didesain ulang dengan kartu templat saat ini, grid persisten, dan tombol **Reset templat saat ini**.
- Perbaikan: Pergantian templat tidak lagi membuat UI macet saat kegagalan AJAX.
- Perbaikan: Status izin pergantian templat diamankan dari akses tidak sah.
- Perbaikan: Input override situs divalidasi sebelum disimpan.
- Perbaikan: Prompt alamat penagihan kini ditampilkan saat alamat kosong.
- Perbaikan: Pemberitahuan deprecation null-to-string PHP 8.1 diselesaikan.
- Perbaikan: Currents dimuat secara lazy sebelum init hook untuk mencegah masalah timing.
- Perbaikan: Path SSO yang difilter dihormati di semua alur login.
- Perbaikan: Opsi identitas situs kosong dipertahankan saat disimpan.

## Versi 2.9.0 — Dirilis pada 2026-04-30

- Baru: Ekspor dan impor situs tunggal ditambahkan di bawah **Tools > Export & Import**.
- Perbaikan: File ZIP ekspor kini disajikan melalui endpoint unduhan terautentikasi.
- Perbaikan: Risiko SQL injection dan masalah kueri dalam kueri ekspor/impor tertunda diperbaiki.
- Perbaikan: Situs tertunda tidak dipublikasikan ketika admin memverifikasi email pelanggan secara manual.
- Perbaikan: Catatan pending_site yatim dibersihkan ketika membership tidak ada.
- Perbaikan: Padding navigasi pengaturan dan navigasi anchor pencarian diperbaiki.
- Perbaikan: Situs tertunda kini ditampilkan pertama di tampilan All Sites.
- Perbaikan: Header User-Agent penyedia screenshot (mShots) ditambahkan untuk mencegah error 403.
- Perbaikan: Dependensi sirkular jadwal cron impor diselesaikan.
- Perbaikan: ID tur dinormalisasi menjadi garis bawah dalam kunci pengaturan pengguna.
- Ditingkatkan: ZipArchive kini digunakan sebagai pengganti Alchemy/Zippy untuk kompatibilitas yang lebih baik.

## Versi 2.8.0 — Dirilis pada 2026-04-29

- Baru: Toggle Enable Jumper ditambahkan ke UI pengaturan Other Options.
- Baru: Kolom status ditambahkan ke tabel daftar formulir checkout.
- Baru: Pemuat file addon sunrise untuk ekstensi sunrise MU-plugin kustom.
- Ditingkatkan: Pengaturan opt-in pelaporan kesalahan dihapus dari halaman pengaturan.
- Perbaikan: Kartu situs halaman terima kasih — gambar kini dibatasi dan tautan diberi gaya dengan benar.
- Perbaikan: Penyedia tangkapan layar dialihkan dari thum.io ke WordPress.com mShots.
- Perbaikan: Enable Registration dan Default Role kini menetapkan default yang benar pada instalasi baru.
- Perbaikan: `get_site_url()` tidak lagi mengembalikan nilai kosong saat domain menyertakan port.
- Perbaikan: File media kloning kini disalin dengan benar saat pengaturan `copy_media` kosong.
- Perbaikan: Cache objek dibatalkan dengan benar setelah penulisan sitemeta network-activate.
- Perbaikan: Domain kustom otomatis dipromosikan menjadi utama saat verifikasi DNS untuk domain 3-bagian.
- Perbaikan: Keanggotaan tertunda dibatalkan saat pembayaran kedaluwarsa dibersihkan.
- Perbaikan: Pemeriksa kekuatan kata sandi di-bind ulang setelah prompt login inline ditutup.
- Perbaikan: Reload halaman tanpa henti dihentikan di halaman terima kasih saat situs sudah dibuat.
- Perbaikan: Opsi pendaftaran inti WP disinkronkan saat aktivasi plugin dan penyimpanan pengaturan.
- Perbaikan: Guard kedaluwarsa null ditambahkan di `calculate_expiration` untuk kompatibilitas PHP 8.4.
- Perbaikan: Pendaftaran duplikat diblokir saat pelanggan sudah memiliki keanggotaan aktif.
- Perbaikan: Pemeriksaan null ditambahkan untuk `date_expiration` di checkout.
- Perbaikan: Provisioning situs diperkuat — batasan, inferensi keanggotaan, promosi domain.
- Perbaikan: Label status pemeriksaan pra-instalasi dikoreksi menjadi NOT Activated saat pemeriksaan gagal.
- Perbaikan: Domain checkout digunakan untuk URL verifikasi email.
- Perbaikan: Auto-login setelah checkout saat tidak ada kolom kata sandi.
- Perbaikan: Keanggotaan gratis tidak lagi kedaluwarsa — diperlakukan sebagai seumur hidup.
- Perbaikan: Gate verifikasi email menahan publikasi situs hingga pelanggan memverifikasi email.
- Perbaikan: Path dasar endpoint SES v2 API dan rute identitas dikoreksi.
- Perbaikan: Hook `wu_inline_login_error` dipancarkan di blok catch pra-submit.
