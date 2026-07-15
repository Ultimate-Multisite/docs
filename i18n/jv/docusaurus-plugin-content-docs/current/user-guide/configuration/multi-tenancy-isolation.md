---
title: Isolasi Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolasi Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 saikiake dukung isolasi database lan filesystem per-subsite kanggo tenant sing duwe kedaulatan (sovereign). Iki njaga data tenant pisah karo njaga pengaturan jaringan, penagihan (billing), lan administrasi ing tingkat jaringan tetep bisa dilakoni.

## Strategi Isolasi {#isolation-strategy}

Gunakan isolasi kedaulatan (sovereign isolation) kanggo pelanggan sing mbutuhake pemisahan data sing luwih kuat, penyimpanan filesystem khusus, utawa batas host sing terpisah.

Sabowang tenant kudu duwe:

- Database tenant khusus utawa strategi awalan database sing wis disetujui kanggo host kasebut.
- Akar filesystem tenant khusus.
- Entri registri tenant sing nggandhengake situs karo database-ne, root path-e, hostname, lan model isolasi.
- Hasil verifikasi migrasi sadurunge tenant dianggep aktif (live).

## Pengikatan Host Database {#database-host-binding}

Versi 1.2.0 ngowahi perilaku pengikatan host mesin sing padha kanggo instalasi sovereign. Nilai-nilai mesin padha kaya `localhost` diatur ulang supaya Bedrock, FrankenPHP, lan instalasi WordPress containerized bisa menehi lan verifikasi izin marang string host sing diwenehake MySQL.

Nalika ngatur tenant sovereign:

1. Set database host menyang nilai sing dibutuhake dening runtime tenant.
2. Gunakake `localhost` kanggo instalasi socket lokal nalika host ngarep-arep koneksi lokal.
3. Gunakake `127.0.0.1` utawa hostname layanan mung nalika server database menehi hak marang host kasebut.
4. Jalankan verifikasi migrasi sawise ngowahi pengikatan host.

Yen laporan verifikasi nuduhake kegagalan pemberian izin, bandingake pemberian izin user DB tenant karo pengikatan host sing diatur. User sing diwenehake kanggo `user@localhost` iku beda karo `user@127.0.0.1` utawa `user@%`.

## Akar Filesystem {#filesystem-root}

Akar root penyewa kudu stabil pas di-restart lan deployment. Aja nganggo path mount sementara. Kanggo instalasi gaya Bedrock, konfirmasi yen akar penyewa nunjukake WordPress web root sing dikarepake bootstrap penyewa, dudu mung project root.

## Urutan provisioning {#provisioning-order}

Kanggo penyewa kedaulatan anyar, nganggo urutan iki:

1. Buat entri registry penyewa.
2. Buat database penyewa lan user database.
3. Bootstrap skema penyewa.
4. Sediakan user penyewa.
5. Konfigurasi path filesystem penyewa.
6. Jalankan verifikasi migrasi.
7. Ganti routing utawa DNS sawise verifikasi lulus.

Urutan iki mencegah penyewa sing isih setengah terisolasi nampa traffic sadurunge database writer, user, lan filesystem wis siap.

## Alur manajemen pelanggan kedaulatan (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 tetep njaga aksi manajemen pelanggan ing situs utama nalika mode sovereign aktif. Penyewa isih bisa jalan minangka instalasi WordPress terisolasi, nanging aksi-aksi ngarep pelanggan sing gumantung marang penagihan jaringan (network billing), keanggotaan (membership), utawa data akun bareng kudu ngirim pelanggan bali menyang situs utama tinimbang nyoba ngrampungake aksi ing runtime penyewa.

Alur situs utama iki berlaku kanggo:

- Checkout lan perubahan rencana.
- Tinjauan akun lan aksi profil pelanggan.
- Pembaruan alamat penagihan (billing address) lan layar manajemen pembayaran.
- Tampilan invoice lan riwayat pembayaran.
- Aksi manajemen situs kaya nambah utawa ngapus situs.
- Ganti template.
- Pemetaan domain lan perubahan primary-domain.

Nalika pelanggan mulai salah satu tindakan ini saka tenant yang berdaulat (sovereign tenant), Ultimate Multisite bakal nggawe URL situs utama (main-site) sing cocog lan njaga tenant sumber (source tenant) minangka tujuan bali nalika wis aman kanggo nindakake. Iki ngidini pelanggan ngrampungake tindakan sing dikelola iku nganggo cathetan jaringan, banjur bali menyang konteks tenant tanpa duplikate data tagihan utawa status keanggotaan ing database berdaulat (sovereign database).

Kanggo operator, aturan praktisé yaiku: jaga supaya halaman tagihan (billing), akun (account), checkout, invoice, template, lan manajemen domain tetep tersedia ing situs utama kanggo jaringan yang berdaulat. Dashboard tenant bisa nyambung menyang halaman-halaman kuwi, nanging situs utama tetep dadi sumber kebenaran (source of truth) kanggo tindakan kasebut.
