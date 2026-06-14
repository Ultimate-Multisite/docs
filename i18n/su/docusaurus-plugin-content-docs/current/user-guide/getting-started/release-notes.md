---
title: Catatan Rilis
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Catatan Rilis

## Versi 2.13.0 — Dirilis pada 2026-06-05

- Baru: Ditambah dukungan sovereign-tenant untuk akun pelanggan, checkout, penagihan (billing), situs, invoice, pergantian template, dan pemetaan domain sehingga jaringan tenant bisa mengarahkan pelanggan kembali ke situs utama untuk tindakan yang dikelola.
- Baru: Ditambahkan pemeriksaan kredensial perpanjangan untuk keanggotaan berulang agar gateway bisa menonaktifkan perpanjangan otomatis ketika ada perjanjian penagihan (billing agreement), langganan, atau token vault yang tersimpan yang hilang.
- Baru: Ditambahkan publikasi loopback terverifikasi HMAC untuk pembuatan situs yang tertunda agar penyediaan checkout-ke-situs lebih andal di host tempat pekerjaan latar belakang tertunda.
- Baru: Ditambahkan titik ekstensi pengembang (developer extension points) untuk URL SSO, domain dasar formulir checkout, dan pembuatan catatan domain otomatis.
- Perbaikan: SSO jadi lebih andal di berbagai domain yang dipetakan, kunjungan broker anonim, logout, dan konflik dependensi antar plugin.
- Perbaikan: Pembuatan situs yang tertunda sekarang bisa pulih dari flag publikasi yang sudah usang dan menghindari pelanggan terjebak di layar pembuatan situs.
- Perbaikan: Catatan domain tidak lagi dibuat untuk domain dasar formulir checkout bersama (shared), dan pekerjaan latar belakang penyedia host yang tidak terpakai dilewati jika tidak ada integrasi yang aktif.
- Perbaikan: Kasus tepi (edge cases) seperti checkout, alamat penagihan, reset kata sandi, verifikasi email, pergantian template, tur (tours), dan dashboard pelanggan tidak lagi menghalangi alur pelanggan normal.
- Perbaikan: Email broadcast sekarang menjaga privasi penerima sambil menghindari kesalahan fatal SMTP/plugin ketika daftar penerima atau transmisi email gagal.
- Perbaikan: Kasus tepi seperti perpanjangan keanggotaan, tampilan kedaluwarsa, dan pengumpulan pembayaran sekarang menghindari kedaluwarsa segera, *crash*, atau terlewatnya pembayaran yang diperlukan.
- Peningkatan: Kompatibilitas WordPress diuji sampai versi 7.0, aset Vue produksi dibangun ulang dari sumber npm, dan cakupan end-to-end Cypress sekarang menguji lebih banyak alur checkout, pengaturan (setup), SSO, dan gateway.

## Versi 2.12.0 — Dirilis tanggal 2026-05-15

- Baru: Tambahan Hostinger (hPanel) sebagai penyedia host yang didukung dengan integrasi pemetaan domain
- Baru: Site Exporter ayeuna bisa ngurus paket impor jaringan pikeun restorasi situs sakulawarga anu leuwih lancar
- Perbaikan: Email BCC broadcast ayeuna maké header penerima nu teu dipidangkeun sangkan alamat penerima teu katingali
- Perbaikan: Tanggal kedaluwarsa keanggotaan teu karusakan deui lamun disimpen ku nilai nu lain tanggal
- Perbaikan: Pembaruan keanggotaan Stripe ayeuna bisa ngabersihkeun diskon kalawan bener tanpa ngajak API deleteDiscount anu geus usang
- Perbaikan: Redirect SSO dina situs nu dipet domain ayeuna dibatasi sangkan teu aya siklus redirect anu teu eureun
- Perbaikan: Pemilihan gambar di wizard setup ayeuna bisa ngabaharake model data di handapna kalawan bener
- Perbaikan: Site Exporter CLI ayeuna ngajaga pilihan situs jaringan default nu bener
- Diperbaiki: wp-cli bundel geus dibuang tina paket plugin, ngurangan ukuran plugin

## Versi 2.11.0 — Dirilis tanggal 2026-05-11

- Baru: Site export ayeuna ngabundel `index.php` anu bisa ngahandaan sorangan sangkan ZIP bisa dipasang di host anyar tanpa perlu instal plugin terpisah
- Baru: Network export ngidinake admin pikeun ngeksport sakabé situs anak dina hiji arsip ti halaman admin Site Export
- Baru: Toggle Site Templates plan ayeuna dipaksa kalawan ranté fallback, sangkan ketersediaan template dibatasi kalawan batasan rencana anu bener
- Baru: Editor formulir checkout ngabagékeun lamun aya produk ditambihan tanpa field wajib diatur
- Baru: Tab pengaturan Import/Export ayeuna jelas nerangkeun cakupanana sareng langsung nyambung ka alat Site Export

## Versi 2.10.0 — Dirilis tanggal 2026-05-05

- Anyar: Wizard panduan PayPal kanggo input kredensial manual kalayan flag OAuth pikeun konfigurasi gateway anu lancar.
- Anyar: Panel pelanggan ganti template didesain ulang kalayan kartu current-template, grid anu tetep aya (persistent grid), jeung tombol **Reset current template**.
- Beneran: Ganti template teu ngaganggu UI lamun AJAX gagal.
- Beneran: Status izin ganti template aman tina akses anu teu diotorisasi.
- Beneran: Input override situs divalidasi saméméh disimpan.
- Beneran: Prompt alamat tagihan ayeuna ditunjukeup lamun alamat kosong.
- Beneran: Peringatan deprecation null-to-string PHP 8.1 diatasi.
- Beneran: Lazy-loaded site ayeuna disamarkeun saméméh init hook pikeun ngajaga masalah waktu (timing issues).
- Beneran: Jalur SSO anu difilter dipatuhi dina sadaya alur login.
- Beneran: Pilihan identitas situs kosong dipertahankan nalika disimpan.

## Versi 2.9.0 — Dirilis tanggal 30-04-2026

- Anyar: Ekspor jeung import single-site ditambihan di bawah **Tools > Export & Import**.
- Beneran: File ZIP ekspor ayeuna disajikan ngaliwatan endpoint unduhan anu diautentikasi.
- Beneran: Risiko SQL injection jeung masalah query dina query ekspor/import anu masih lila dibéréskeun.
- Beneran: Site pending teu dipublikasikeun lamun admin memverifikasi email pelanggan secara manual.
- Beneran: Catatan `pending_site` anu teu aya dibersihkeun nalika keanggotaan teu aya.
- Beneran: Padding navigasi pengaturan jeung navigasi jangkar pencarian diperbaiki.
- Beneran: Site pending ayeuna ditunjukeun kahiji dina tampilan All Sites.
- Beneran: Header User-Agent penyedia screenshot (mShots) ditambihan pikeun ngalangsaian error 403.
- Beneran: Ketergantungan sirkular jadwal cron import dibéréskeun.
- Beneran: Tour IDs dinormalisasi jadi underscore dina kunci pengaturan user.
- Leuwih Hadé: ZipArchive ayeuna dipaké alih-alih Alchemy/Zippy pikeun kompatibilitas anu leuwih hadé.

## Versi 2.8.0 — Dirilis tanggal 29-04-2026

- Anyar: Tambah toggle Jumper di pengaturan Other Options UI.
- Anyar: Tambah kolom Status di tabel daftar formulir checkout.
- Anyar: Tambah file loader sunrise Addon untuk ekstensi sunrise MU-plugin kustom.
- Diperbaiki: Hapus pengaturan opt-in pelaporan error dari halaman settings.
- Diperbaiki: Kartu situs halaman thank-you — gambar sekarang dibatasi dan tautan tampil dengan benar.
- Diperbaiki: Penyedia screenshot diubah dari thum.io ke WordPress.com mShots.
- Diperbaiki: Aktifkan Pendaftaran dan Peran Default sekarang mengatur nilai default yang benar saat instalasi baru.
- Diperbaiki: `get_site_url()` tidak lagi mengembalikan kosong ketika domain menyertakan port.
- Diperbaiki: File media kloning sekarang disalin dengan benar ketika pengaturan `copy_media` kosong.
- Diperbaiki: Object cache dibatalkan dengan benar setelah penulisan sitemeta network-activate.
- Diperbaiki: Domain kustom secara otomatis dipromosikan menjadi utama pada verifikasi DNS untuk domain 3 bagian.
- Diperbaiki: Keanggotaan tertunda dibatalkan ketika pembayaran kedaluwarsa dibersihkan.
- Diperbaiki: Pemeriksa kekuatan kata sandi kembali setelah prompt login inline ditutup.
- Diperbaiki: Pembaruan halaman tak terbatas berhenti di halaman thank-you jika situs sudah dibuat.
- Diperbaiki: Opsi pendaftaran inti WP disinkronkan saat aktivasi plugin dan simpan pengaturan.
- Diperbaiki: Penjaga kedaluwarsa null ditambahkan di `calculate_expiration` untuk kompatibilitas PHP 8.4.
- Diperbaiki: Pendaftaran duplikat diblokir ketika pelanggan sudah memiliki keanggotaan aktif.
- Diperbaiki: Pemeriksaan null ditambahkan untuk `date_expiration` di checkout.
- Diperbaiki: Penyediaan situs diperketat — batasan, inferensi keanggotaan, promosi domain.
- Diperbaiki: Label status pemeriksaan pra-instal dikoreksi menjadi TIDAK Aktif ketika pemeriksaan gagal.
- Diperbaiki: Domain checkout digunakan untuk URL verifikasi email.
- Diperbaiki: Login otomatis setelah checkout ketika tidak ada kolom kata sandi yang ada.
- Diperbaiki: Keanggotaan gratis tidak lagi kedaluwarsa — diperlakukan sebagai seumur hidup.

- Perbaikan: Gerbang verifikasi email menahan publikasi situs sampai pelanggan memverifikasi emailnya.
- Perbaikan: Jalur dasar (base path) endpoint API SES v2 dan rute identitas sudah diperbaiki.
- Perbaikan: Hook `wu_inline_login_error` sekarang dilempar di blok tangkapan sebelum submit.
