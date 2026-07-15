---
title: Isolasi Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolasi Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ngabrugi isolasi database jeung filesystem per-subsite pikeun tenant anu mandiri (sovereign). Ieu ngajaga data tenant jadi pisah bari tetep ngajaga penyediaan jaringan, penagihan, jeung administrasi di tingkat jaringan.

## Strategi Isolasi {#isolation-strategy}

Gunakan isolasi mandiri (sovereign isolation) pikeun pelanggan anu butuh pemisahan data leuwih kuat, penyimpanan filesystem khusus, atawa batasan host anu pisah.

Setiap tenant mandiri kudu boga:

- Database tenant khusus atawa strategi awalan database (database prefix strategy) anu disetujui ku host.
- Root filesystem tenant khusus.
- Entri registri tenant anu mapkeun situs kana databasena, root pathna, hostname, jeung model isolasi.
- Hasil verifikasi migrasi saméméh tenant dianggap live.

## Binding Host Database {#database-host-binding}

Versi 1.2.0 ngarobah tingkah laku binding host sarua mesin (same-machine) anu default pikeun instalasi mandiri. Nilai sarua mesin saperti `localhost` diatur ulang (normalized) sangkan Bedrock, FrankenPHP, jeung instalasi WordPress containerized bisa méré jeverifikasi izin kana string host MySQL anu sieun ningali.

Lamun ngatur tenant mandiri:

1. Atur database host ka nilai anu dipikawanoh ku runtime tenant.
2. Gunake `localhost` pikeun instalasi socket lokal lamun host ngarepkeun koneksi lokal.
3. Gunake `127.0.0.1` atawa hostname layanan ngan ukur lamun server database méré hak ka host éta.
4. Jalankan verifikasi migrasi sanggeus ngarobah binding host.

Lamun laporan verifikasi nunjukkeun kegagalan izin (grant failures), bandingkeun izin user DB tenant jeung binding host anu diatur. User anu dipasihkeun pikeun `user@localhost` béda jeung `user@127.0.0.1` atawa `user@%`.

## Root Filesystem {#filesystem-root}

Akar root penyewa kudu stabil dina waktu restart jeung deployment. Hindari ngagunake mount path sementara. Pikeun instalasi gaya Bedrock, pastikeun akar penyewa nunjuk ka WordPress web root anu dipikahoyong ku tenant bootstrap, lain ngan ukur root proyekna.

## Urutan provisioning {#provisioning-order}

Pikeun penyewa souveren anyar, anggo urutan ieu:

1. Buat entri registri penyewa (tenant registry entry).
2. Buat database jeung user database penyewa.
3. Bootstrap skema penyewa (tenant schema).
4. Provision pengguna penyewa (tenant users).
5. Konfigurasi path filesystem penyewa (tenant filesystem paths).
6. Jalankan verifikasi migrasi (migration verification).
7. Ganti routing atawa DNS sanggeus verifikasi lulus.

Urutan ieu ngalanggar penyewa anu masih parantos terisolasi tina ngarangkul trafik saméméh database writer, user, jeung filesystem siap.

## Alur manajemen pelanggan souveren {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 ngajaga tindakan manajemen pelanggan dina situs utama nalika mode souveren diaktifkeun. Penyewa masih bisa jalan salaku instalasi WordPress anu terisolasi, tapi tindakan pamaréntah pelanggan anu gumantung kana penagihan jaringan (network billing), keanggotaan (membership), atawa data akun babarengan (shared account data) kudu ngirim deui pelanggan ka situs utama tibatan nyoba ngalaksanakeun tindakan éta di jero runtime penyewa.

Alur situs utama berlaku pikeun:

- Checkout jeung ganti rencana (plan changes).
- Tinjauan akun jeung tindakan profil pelanggan (customer profile actions).
- Pembaruan alamat penagihan (billing address updates) jeung layar manajemen pembayaran (payment-management screens).
- Tampilan invoice jeung riwayat pembayaran (payment-history views).
- Tindakan manajemen situs saperti nambahan situs atawa ngabéréskeun situs (adding sites or deleting a site).
- Ganti template (template switching).
- Pemetaan domain (domain mapping) jeung ganti primary-domain.

Lamun pelanggan mulai salah sahiji tindakan ieu ti tenant souveren (sovereign tenant), Ultimate Multisite bakal bangun URL situs utama (main-site URL) anu saluyuan je ngajaga tenant sumber (source tenant) minangka tujuan balik (return target) lamun aman pikeun dilakukeun. Ieu ngabantu pelanggan ngalaksanakeun tindakan anu dikelola éta ngaliwatan catatan jaringan, tuluy balik deui ka konteks tenant tanpa ngulang status tagihan atawa keanggotaan dina database souveren.

Kanggo operator, aturan praktisna nyaéta: jaga halaman tagihan (billing), akun (account), checkout, invoice, template, je manajemen domain aya di situs utama pikeun jaringan souveren. Dashboard tenant bisa nyambung ka halaman-halaman éta, tapi situs utama tetep jadi sumber kabeneran (source of truth) pikeun tindakan éta.
