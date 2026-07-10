---
title: Pemisahan Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Pengasingan Multi-Tenancy (Multi-Tenancy Isolation) {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 menyokong pengasingan pangkalan data dan sistem fail mengikut subsite untuk tetapan yang berdaulat (sovereign tenants). Ini memastikan data tetapan kekal berasingan sambil mengekalkan penyediaan rangkaian, bil, dan pentadbiran pada tahap rangkaian.

## Strategi Pengasingan (Isolation strategy) {#isolation-strategy}

Gunakan pengasingan berdaulat untuk pelanggan yang memerlukan pemisahan data yang lebih kukuh, storan sistem fail khusus, atau sempadan hos yang berasingan.

Setiap tetapan berdaulat hendaklah mempunyai:

- Pangkalan data tetapan khusus atau strategi prefiks pangkalan data yang diluluskan untuk hos tersebut.
- Punca sistem fail (filesystem root) tetapan yang khusus.
- Entri pendaftaran tetapan yang memetakan laman web kepada pangkalan datanya, laluan punca (root path), nama hos (hostname), dan model pengasingan.
- Keputusan pengesahan migrasi sebelum tetapan dianggap aktif.

## Pengikatan Hos Pangkalan Data (Database host binding) {#database-host-binding}

Versi 1.2.0 mengubah tingkah laku ikatan hos mesin yang sama secara lalai untuk pemasangan berdaulat. Nilai mesin yang sama seperti `localhost` dinormalkan supaya Bedrock, FrankenPHP, dan pemasangan WordPress dalam kontena boleh memberikan dan mengesahkan kebenaran terhadap rentetan hos (host string) MySQL yang sebenarnya dilihat.

Apabila mengkonfigurasi tetapan berdaulat:

1. Tetapkan hos pangkalan data kepada nilai yang diperlukan oleh runtime tetapan tersebut.
2. Gunakan `localhost` untuk pemasangan soket tempatan apabila hos mengharapkan sambungan tempatan.
3. Gunakan `127.0.0.1` atau nama hos perkhidmatan (service hostname) hanya apabila pelayan pangkalan data memberikan kebenaran kepada hos tersebut.
4. Jalankan pengesahan migrasi selepas menukar ikatan hos.

Jika laporan pengesahan menunjukkan kegagalan pemberian, bandingkan pemberian pengguna DB tetapan dengan ikatan hos yang dikonfigurasi. Pengguna yang diberikan untuk `user@localhost` adalah berbeza daripada `user@127.0.0.1` atau `user@%`.

## Punca Sistem Fail (Filesystem root) {#filesystem-root}

Root tetapan penyewa (tenant root) mesti stabil semasa permulaan semula dan deployment. Elakkan laluan mount sementara. Untuk pemasangan gaya Bedrock, sahkan bahawa root tetapan penyewa merujuk kepada web root WordPress yang dijangkakan oleh bootstrap penyewa, bukan hanya root projek.

## Urutan penyediaan (Provisioning order) {#provisioning-order}

Untuk penyewa berdaulat baharu, gunakan urutan ini:

1. Cipta entri pendaftaran penyewa (tenant registry entry).
2. Cipta pangkalan data dan pengguna pangkalan data penyewa.
3. Bootstrap skema penyewa.
4. Sediakan pengguna penyewa.
5. Konfigurasikan laluan sistem fail penyewa.
6. Jalankan pengesahan migrasi (migration verification).
7. Tukar laluan atau DNS selepas pengesahan berjaya.

Urutan ini memastikan penyewa yang terasing separa tidak menerima trafik sebelum penulis pangkalan data, pengguna, dan sistem fail bersedia.

## Aliran pengurusan pelanggan berdaulat (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 mengekalkan tindakan pengurusan pelanggan pada laman utama apabila mod berdaulat diaktifkan. Penyewa masih boleh menjalankan sebagai pemasangan WordPress yang terasing, tetapi tindakan yang berkaitan dengan pelanggan seperti bil rangkaian, keahlian, atau data akaun kongsi harus menghantar semula pelanggan ke laman utama berbanding cuba melengkapkan tindakan tersebut di dalam masa larian (runtime) penyewa.

Aliran laman utama ini meliputi:

- Perubahan pembayaran dan pelan.
- Tinjauan akaun dan tindakan profil pelanggan.
- Kemas kini alamat bil dan skrin pengurusan pembayaran.
- Paparan invois dan sejarah pembayaran.
- Tindakan pengurusan laman seperti menambah atau memadam laman.
- Pertukaran templat (Template switching).
- Pemetaan domain dan perubahan domain utama (primary-domain).

Apabila pelanggan memulakan salah satu tindakan ini daripada tetapan sewa (tenant) yang berdaulat, Ultimate Multisite akan membina URL laman utama dan mengekalkan tetapan sewa sumber sebagai sasaran untuk kembali apabila ia selamat dilakukan. Ini membolehkan pelanggan menyelesaikan tindakan yang diuruskan tersebut terhadap rekod rangkaian, kemudian kembali ke konteks tetapan tanpa menyalin keadaan bil atau keahlian dalam pangkalan data sewa tersebut.

Bagi pengendali (operators), peraturan praktikalnya adalah: kekalkan halaman bil, akaun, pembayaran (checkout), invois, templat, dan pengurusan domain pada laman utama untuk rangkaian sewa. Papan pemuka tetapan sewa boleh menyambung ke halaman-halaman itu, tetapi laman utama kekal sebagai sumber kebenaran (source of truth) untuk tindakan tersebut.
