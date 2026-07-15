---
title: Operasi Penyewa Berdaulat
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operasi Penyewa Berdaulat (Sovereign Tenant Operations)

Ultimate Multisite: Multi-Tenancy 1.2.0 menambah alat operasional untuk penyewa berdaulat (sovereign tenants): subsites yang berjalan dengan basis data, sistem fail root, dan konteks perutean sendiri sambil tetap terlihat oleh pentadiri rangkaian (network admin).

Gunakan halaman ini saat mengelola situs pelanggan yang terisolasi, serah terima situs jarak jauh (remote-site handoffs), atau migrasi yang memindahkan subsites standar ke infrastruktur berdaulat.

## Apa yang berubah bagi administrator {#what-changes-for-administrators}

- **Autologin penyewa tanpa status (Stateless tenant autologin)** — Pentadiri rangkaian boleh melawat penyewa berdaulat tanpa bergantung pada status sesi bersama yang berkekalan lama. Token SSO adalah terperinci tujuan, dipatok asal (origin-pinned), dilindungi daripada pengulangan (replay-protected), dan dihadkan kepada tetingkap tamat tempoh yang singkat.
- **Perutean sedar kedaulatan (Sovereign-aware routing)** — Rangkaian terpencil lama dan penyewa berdaulat menyelesaikan melalui laluan perutean tapak yang sama, mengurangkan perbezaan permulaan antara pemasangan terpencil lama dan baru.
- **Status migrasi yang disahkan (Verified migration state)** — Semakan pengesahan migrasi menyemak penyediaan pengguna, kebenaran penulis pangkalan data (database writer permissions), status pembuangan barisan (queue drain status), dan ketiadaan jadual lama sebelum penyewa dianggap lengkap.
- **Penutupan yang lebih selamat (Safer teardown)** — Penutupan berdaulat kini membuang kredensial penyewa dengan bersih supaya penyewa yang dipadam tidak meninggalkan akses pangkalan data yang lapuk di belakang.

## Melawat penyewa berdaulat {#visiting-a-sovereign-tenant}

1. Buka **Network Admin > Ultimate Multisite > Sites**.
2. Pilih penyewa berdaulat tersebut.
3. Gunakan **Visit (SSO)** jika ada, berbanding menyalin kata laluan atau mencipta akaun pentadiri sementara.

Aliran lawatan ini akan mencipta token log masuk jangka pendek untuk penyewa tersebut dan merekodkan acara SSO dalam jejak audit penyewa. Jika butang gagal, semak sama ada domain penyewa menyelesaikan kepada pemasangan yang dijangkakan dan sama ada penyewa boleh mencapai titik akhir SSO sisi rangkaian (network-side SSO endpoint).

## Senarai semak operasi situs jarak jauh (Remote-site operations checklist) {#remote-site-operations-checklist}

Sebelum menukar penyewa berdaulat atau jarak jauh, sahkan:

Domain penyewa menunjuk ke host yang memiliki sistem fail penyewa.
Host pangkalan data penyewa sepadan dengan pengikatan hos yang dikonfigurasikan untuk pemasangan tersebut.
Arahan pengesahan migrasi lulus untuk penyewa.
Antrean migrasi asinkron akan dikosongkan sebelum membuat perubahan DNS atau pemilikan.
Pengguna pentadbir penyewa telah disediakan semasa migrasi dan boleh log masuk melalui SSO.

## Memadamkan penyewa berdaulat (sovereign tenants) {#deleting-sovereign-tenants}

Memadamkan penyewa berdaulat adalah tindakan yang memusnahkan data. Sahkan status sandaran (backup) dan eksport terlebih dahulu, kemudian padam dari skrin pengurusan laman. Aliran pembuangan (teardown flow) 1.2.0 akan membuang kredensial pangkalan data penyewa sebagai sebahagian daripada proses pembersihan, tetapi pentadbir masih perlu mengesahkan bahawa pengguna pangkalan data dan folder di peringkat hos telah hilang apabila menggunakan panel hosting luaran.

:::warning
Jangan padam penyewa berdaulat semasa pengesahan migrasi masih berjalan atau semasa kerja push asinkron sedang dalam antrean. Tunggu sehingga pengesahan selesai supaya pembuangan (teardown) tidak memadamkan kredensial yang diperlukan oleh kerja yang tertangguh.
:::
