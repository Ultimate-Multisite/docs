---
title: Integrasi Berbilang Penyewa
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrasi Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 mengubah beberapa titik sentuh integrasi untuk penyewa berdaulat, pengesahan migrasi, dan automasi kitar hayat penyewa.

## Aliran bootstrap penyewa {#tenant-bootstrap-flow}

Integrasi yang mencipta atau mengubah suai penyewa harus mengikut susunan ini:

1. Selesaikan rekod pendaftaran penyewa dan model pengasingan.
2. Cipta atau sahkan penulis pangkalan data penyewa.
3. Bootstrap skema penyewa.
4. Sediakan pengguna penyewa.
5. Daftarkan penghalaan penyewa dan laluan sistem fail.
6. Jalankan pengesahan migrasi sebelum mendedahkan penyewa.

Jangan anggap penyewa berdaulat boleh menggunakan semula sambungan pangkalan data rangkaian. Gunakan pendaftaran penyewa dan abstraksi penulis yang disediakan oleh tambahan.

## SSO dan hook REST {#sso-and-rest-hooks}

Autologin penyewa tanpa keadaan menggunakan token jangka pendek dengan tuntutan tujuan, perlindungan ulang tayang JTI, had luput, dan penetapan asal. Integrasi yang menambah butang log masuk atau pautan pengurusan jauh harus menjana lawatan penyewa melalui aliran SSO yang disokong dan bukannya membina URL log masuk penyewa secara terus.

Peristiwa audit API di sisi rangkaian dan ringkasan harian tersedia untuk gerbang penyewa berdaulat. Gunakan log tersebut apabila menyahpepijat sistem luaran yang memanggil endpoint kitar hayat penyewa.

## URL tindakan pelanggan berdaulat {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 menghalakan tindakan pelanggan penyewa berdaulat kembali ke tapak utama untuk aliran akaun, checkout, pengebilan, invois, tapak, penukaran templat, dan pemetaan domain. Integrasi yang memaparkan pautan pengurusan di sisi penyewa harus menghalakan tindakan tersebut ke panel pelanggan tapak utama dan menyertakan sasaran kembali yang disahkan apabila pengguna patut dapat menavigasi kembali ke penyewa selepas menyelesaikan tindakan.

Gunakan pembalut SSO teras untuk pautan pengurusan merentas domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL yang dijana kekal boleh ditapis melalui `wu_sso_url`, yang menerima URL SSO, pengguna semasa, ID tapak sasaran, dan konteks ubah hala. Add-on boleh menggunakan penapis itu untuk menambah konteks khusus penyedia atau menggantikan URL broker sambil mengekalkan pengesahan token Ultimate Multisite.

Jangan gandakan keadaan membership, invois, alamat pengebilan, templat, atau pengurusan domain di dalam penyewa berdaulat. Anggap dashboard penyewa sebagai pelancar dan panel pelanggan tapak utama sebagai sistem rekod untuk tindakan terurus.

## Pengesahan migrasi {#migration-verification}

Selepas integrasi migrasi atau kitar hayat mengubah data penyewa, jalankan gerbang pengesahan:

- `wp tenant verify-no-legacy --site=<site-id>` mengesahkan penyewa tidak lagi bergantung pada laluan lama di sisi rangkaian.
- `wp tenant verify-sovereign-push --site=<site-id>` mengesahkan kerja tolak berdaulat boleh diproses dan dikosongkan.

Integrasi harus menganggap pengesahan yang gagal sebagai penyekat deployment dan mengelak daripada menandakan penyewa sebagai live sehingga kegagalan diselesaikan.

## Pemadaman penyewa {#tenant-deletion}

Aliran pemadaman harus memanggil laluan teardown tambahan supaya kelayakan pangkalan data penyewa dibersihkan. Integrasi luaran boleh membuang sumber penyedia selepas teardown berjaya, tetapi tidak harus memadam pangkalan data atau folder hos semasa pengesahan atau kerja tolak async masih berjalan.

## Penghala pangkalan data yang tidak digunakan lagi {#deprecated-database-router}

`Database_Router` lama telah digantikan oleh stub penamatan penggunaan. Integrasi baharu harus menyelesaikan penyewa melalui API penghala tapak semasa dan pendaftaran penyewa dan bukannya bergantung pada kelas penghala lama.
