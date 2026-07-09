---
title: Aliran Migrasi Kedaulatan
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Aliran Migrasi Kedaulatan (Sovereign Migration Workflow) {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 menambah gerbang pengesahan migrasi untuk memindahkan subsiti standard ke infrastruktur penyewa kedaulatan (sovereign tenant).

## Sebelum anda mula {#before-you-start}

Pastikan anda telah menyediakan perkara berikut:

- Sandakan (backup) semasa laman sumber.
- Addon Multi-Tenancy aktif.
- Pangkalan data penyewa destinasi, punca sistem fail (filesystem root), dan domain sudah sedia.
- Pengikatan hos pangkalan data yang sepadan dengan persekitaran destinasi.
- Akses untuk menjalankan arahan WP-CLI untuk rangkaian tersebut.

## Aliran kerja yang disyorkan {#recommended-workflow}

1. Sediakan pangkalan data penyewa destinasi dan sistem fail.
2. Daftar atau kemas kini tetapan pengasingan penyewa (tenant isolation settings).
3. Jalankan migrasi penyewa (tenant migration).
4. Sediakan atau sahkan pengguna penyewa (tenant users).
5. Kosongkan (drain) tugasan migrasi asinkron (async migration jobs).
6. Jalankan pengesahan migrasi kedaulatan (sovereign migration verification).
7. Lawati penyewa menggunakan SSO.
8. Tukar DNS atau laluan (routing) hanya selepas pengesahan berjaya.

## Gerbang Pengesahan (Verification Gates) {#verification-gates}

Aliran kerja pengesahan menyemak migrasi dari beberapa sudut:

- Skema penyewa wujud dan boleh ditulis oleh penulis pangkalan data penyewa.
- Hos pangkalan data yang dikonfigurasikan mempunyai kebenaran (grants) yang sah.
- Pengguna penyewa ada dan sepadan dengan jumlah pengguna pemasangan kedaulatan yang dijangkakan.
- Barisan tumpukan (queue) push asinkron boleh dikosongkan dengan jayanya.
- Laluan data sisi rangkaian lama tidak lagi diperlukan untuk penyewa kedaulatan.

Anggap kegagalan pengesahan sebagai penghalang pra-pelancaran. Baiki isu pangkalan data, pengguna, tumpukan (queue), atau laluan yang dilaporkan, kemudian jalankan pengesahan semula sebelum mendedahkan penyewa kepada pelanggan.

## Lawatan produksi pertama {#first-production-visit}

Selepas pengesahan berjaya, gunakan **Lawati (SSO)** dari skrin pengurusan laman untuk lawatan pentadbir pertama. Ini mengesahkan laluan penyewa, pengendalian token SSO, penampalan asal (origin pinning), dan penyediaan pengguna sisi penyewa dalam satu langkah terkawal.
