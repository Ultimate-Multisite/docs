---
title: Cathetan Rilis
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Catatan Rilis

## Versi 2.13.0 — Dirilis pada 2026-06-05 {#version-2130--released-on-2026-06-05}

- Anyar: Ditambah dukungan sovereign-tenant untuk akun pelanggan, checkout, penagihan (billing), situs, invoice, pergantian template, dan pemetaan domain sehingga jaringan tenant bisa mengarahkan pelanggan kembali ke situs utama untuk tindakan yang dikelola.
- Anyar: Ditambahkan pengecekan kredensial perpanjangan (renewal-credential checks) untuk langganan berulang agar gateway bisa menonaktifkan perpanjangan otomatis jika tidak ada kesepakatan penagihan, langganan, atau token vault yang tersimpan.
- Anyar: Ditambahkan publikasi loopback terverifikasi HMAC untuk pembuatan situs yang tertunda (pending site creation) agar proses penyediaan checkout ke situs lebih andal di host tempat pekerjaan latar belakang tertunda.
- Anyar: Ditambahkan titik ekstensi pengembang (developer extension points) untuk URL SSO, domain dasar formulir checkout, dan pembuatan catatan domain otomatis.
- Perbaikan: SSO jadi lebih andal di berbagai domain yang dipetakan, kunjungan broker anonim, logout, dan konflik dependensi antar plugin.
- Perbaikan: Pembuatan situs yang tertunda sekarang bisa pulih dari flag publikasi yang sudah usang (stale publish flags) dan menghindari pelanggan terjebak di layar pembuatan situs.
- Perbaikan: Catatan domain tidak lagi dibuat untuk domain dasar formulir checkout bersama, dan pekerjaan latar belakang penyedia host yang tidak terpakai dilewati jika tidak ada integrasi yang aktif.
- Perbaikan: Kasus tepi (edge cases) seperti checkout, alamat penagihan, reset kata sandi, verifikasi email, pergantian template, tur (tours), dan dashboard pelanggan tidak lagi menghalangi alur normal pelanggan.
- Perbaikan: Email broadcast sekarang menjaga privasi penerima sambil menghindari kesalahan fatal SMTP/plugin ketika daftar penerima atau transmisi email gagal.
- Perbaikan: Kasus tepi seperti perpanjangan keanggotaan, tampilan kedaluwarsa, dan pengumpulan pembayaran kini menghindari kedaluwarsa segera, *crash*, atau pembayaran yang terlewat.
- Peningkatan: Kompatibilitas WordPress diuji hingga versi 7.0, aset Vue produksi dibangun kembali dari sumber npm, dan cakupan end-to-end Cypress sekarang menguji lebih banyak alur checkout, pengaturan (setup), SSO, dan gateway.

## Versi 2.12.0 — Dirilis tanggal 2026-05-15 {#version-2120--released-on-2026-05-15}

- Anyar: Nambah Hostinger (hPanel) minangka penyedia host sing didukung karo integrasi pemetaan domain.
- Anyar: Site Exporter saiki bisa ngurus paket impor jaringan kanggo restorasi site sak jaringan kanthi luwih lancar.
- Perbaikan: Email BCC broadcast saiki nganggo header penerima sing ora diungkapake supaya alamat penerima ora kasepake.
- Perbaikan: Tanggal kedaluwarsa keanggotaan ora rusak manawa disimpen nganggo nilai sing dudu tanggal.
- Perbaikan: Pembaruan keanggotaan Stripe saiki bisa ngresiki diskon kanthi bener tanpa nggunakake API deleteDiscount sing wis usang.
- Perbaikan: Redirect SSO ing site sing dipet domain saiki dibatasi supaya ora ana siklus redirect tanpa akhir.
- Perbaikan: Pemilihan pemilih gambar ing wizard setup saiki bisa ngupdate model data ing njero kanthi bener.
- Perbaikan: CLI Site Exporter saiki tetep njaga pilihan site jaringan default sing bener.
- Peningkatan: WP-cli sing di-bundle saka paket plugin wis dihilangi, nggawe ukuran plugin luwih cilik.

## Versi 2.11.0 — Dirilis tanggal 2026-05-11 {#version-2110--released-on-2026-05-11}

- Anyar: Site export saiki ngemas `index.php` sing bisa boot dhewe supaya ZIP bisa dipasang ing host anyar tanpa perlu instal plugin terpisah.
- Anyar: Ekspor jaringan ngidini administrator ekspor kabeh subsite ing siji arsip saka halaman admin Site Export.
- Anyar: Toggle Site Templates plan saiki diwajibake nganggo rantai fallback, supaya ketersediaan template bisa dibatasi kanthi bener miturut batasan plan.
- Anyar: Editor formulir checkout bakal ngelingake yen produk ditambah tanpa field sing wajib dikonfigurasi.
- Anyar: Tab pengaturan Import/Export saiki jelas njlentrego cakupane lan langsung nyambung menyang alat Site Export.

## Versi 2.10.0 — Dirilis tanggal 2026-05-05 {#version-2100--released-on-2026-05-05}

- Anyar: Wizard setup PayPal kanggo input manual karo flag OAuth supaya konfigurasi gateway lancar tanpa masalah.
- Anyar: Panel pelanggan ganti template didesain ulang nganggo kartu current-template, grid sing tetep ana, lan tombol **Reset current template**.
- Perbaikan: Ganti template ora bakal nahan UI yen AJAX gagal.
- Perbaikan: Status izin ganti template wis aman saka akses ora sah.
- Perbaikan: Input override situs saiki diuji sadurunge disimpen.
- Perbaikan: Prompt alamat penagihan saiki ditunjuka nalika alamat kosong.
- Perbaikan: Catatan deprecation PHP 8.1 kanggo null-to-string wis diatasi.
- Perbaikan: Lazy-loaded saat ini saiki didhuni sadurunge init hook supaya masalah timing ora kedadeyan.
- Perbaikan: Jalur SSO sing difilter dihormati ing kabeh alur login.
- Perbaikan: Pilihan identitas situs kosong tetep dipertahankan nalika simpan.

## Versi 2.9.0 — Dirilis tanggal 30-04-2026 {#version-290--released-on-2026-04-30}

- Anyar: Ekspor lan import satu situs ditambahi ing **Tools > Export & Import**.
- Perbaikan: File ZIP ekspor saiki diwenehake liwat endpoint unduh sing wis diautentikasi.
- Perbaikan: Risiko SQL injection lan masalah query ing query ekspor/import pending wis dikoreksi.
- Perbaikan: Situs pending ora bakal dipublikasik nalika admin verifikasi email pelanggan manual.
- Perbaikan: Catatan `pending_site` sing ilang dibersihake yen keanggotaan kurang.
- Perbaikan: Padding navigasi pengaturan lan navigasi jangkar pencarian wis dikoreksi.
- Perbaikan: Situs pending saiki ditunjuka dhisthik ing tampilan All Sites.
- Perbaikan: Header User-Agent penyedia screenshot (mShots) ditambah kanggo mencegah error 403.
- Perbaikan: Circular dependency jadwal cron import wis diatasi.
- Perbaikan: Tour IDs normalisasi menyang underscore ing kunci pengaturan pengguna.
- Peningkatan: ZipArchive saiki digunakake tinimbang Alchemy/Zippy kanggo kompatibilitas sing luwih apik.

## Versi 2.8.0 — Dirilis tanggal 29-04-2026 {#version-280--released-on-2026-04-29}

- Baru: Tombol Jumper diaktifkan di UI pengaturan Other Options.
- Baru: Kolom Status ditambahkan ke tabel daftar formulir checkout.
- Baru: Loader file sunrise Addon untuk ekstensi sunrise MU-plugin kustom.
- Ditingkatkan: Pengaturan opt-in pelaporan error dihapus dari halaman settings.
- Perbaikan: Kartu situs halaman terima kasih — gambar sekarang dibatasi dan tautan tampil dengan benar.
- Perbaikan: Penyedia screenshot diubah dari thum.io ke WordPress.com mShots.
- Perbaikan: Registrasi dan Role Default sekarang disetel dengan benar pada instalasi baru.
- Perbaikan: `get_site_url()` tidak lagi mengembalikan nilai kosong ketika domain menyertakan port.
- Perbaikan: File media kloning sekarang disalin dengan benar ketika pengaturan `copy_media` kosong.
- Perbaikan: Object cache dibatalkan dengan benar setelah penulisan sitemeta saat network-activate.
- Perbaikan: Domain kustom secara otomatis dipromosikan menjadi utama pada verifikasi DNS untuk domain 3 bagian.
- Perbaikan: Keanggotaan tertunda dibatalkan ketika pembayaran kedaluwarsa dibersihkan.
- Perbaikan: Pemeriksa kekuatan kata sandi kembali normal setelah prompt login inline ditutup.
- Perbaikan: Pembaruan halaman tak terbatas dihentikan pada halaman terima kasih ketika situs sudah dibuat.
- Perbaikan: Opsi registrasi inti WP disinkronkan saat aktivasi plugin dan simpan pengaturan.
- Perbaikan: Pengaman kedaluwarsa null ditambahkan di `calculate_expiration` untuk kompatibilitas PHP 8.4.
- Perbaikan: Pendaftaran duplikat diblokir ketika pelanggan sudah memiliki keanggotaan aktif.
- Perbaikan: Pemeriksaan null ditambahkan untuk `date_expiration` di checkout.
- Perbaikan: Penyediaan situs diperketat — batasan, inferensi keanggotaan, promosi domain.
- Perbaikan: Label status pemeriksaan pra-instal dikoreksi menjadi TIDAK Aktif ketika pemeriksaan gagal.
- Perbaikan: Domain checkout digunakan untuk URL verifikasi email.
- Perbaikan: Login otomatis setelah checkout ketika tidak ada bidang kata sandi yang ada.
- Perbaikan: Keanggotaan gratis tidak lagi kedaluwarsa — diperlakukan sebagai seumur hidup.

- Perbaikan: Gerbang verifikasi email menahan publikasi situs sampai pelanggan memverifikasi emailnya.
- Perbaikan: Jalur dasar (base path) endpoint API SES v2 dan rute identitas sudah diperbaiki.
- Perbaikan: Hook `wu_inline_login_error` sekarang dikeluarkan di blok tangkapan sebelum submit.
