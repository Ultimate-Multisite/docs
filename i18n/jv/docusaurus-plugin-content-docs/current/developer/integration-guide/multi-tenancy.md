---
title: Integrasi Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrasi Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ngganti sawetara titik integrasi kanggo panyewa sovereign, verifikasi migrasi, lan otomatisasi siklus urip panyewa.

## Alur bootstrap panyewa {#tenant-bootstrap-flow}

Integrasi sing nggawe utawa ngowahi panyewa kudu ngetutake urutan iki:

1. Rampungake rekaman registri panyewa lan model isolasi.
2. Gawe utawa verifikasi panulis database panyewa.
3. Bootstrap skema panyewa.
4. Sediakake pangguna panyewa.
5. Daftaraké routing panyewa lan path filesystem.
6. Jalanake verifikasi migrasi sadurunge mbukak panyewa.

Aja nganggep panyewa sovereign bisa nganggo maneh sambungan database jaringan. Gunakake abstraksi registri lan panulis panyewa sing disedhiyakake dening tambahan.

## Hook SSO lan REST {#sso-and-rest-hooks}

Autologin panyewa stateless nggunakake token umur cekak kanthi klaim tujuan, perlindungan replay JTI, wates kadaluwarsa, lan pinning asal. Integrasi sing nambah tombol login utawa tautan manajemen remot kudu ngasilake kunjungan panyewa liwat alur SSO sing didhukung tinimbang nyusun URL login panyewa kanthi langsung.

Acara audit API saka sisi jaringan lan ringkesan saben dina kasedhiya kanggo gateway panyewa sovereign. Gunakake log kasebut nalika debugging sistem eksternal sing nelpon titik endpoint siklus urip panyewa.

## URL tumindak pelanggan sovereign {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 ngerutekake tumindak pelanggan panyewa sovereign bali menyang situs utama kanggo alur Account, checkout, tagihan, invoice, situs, pangalihan template, lan pemetaan domain. Integrasi sing nampilake tautan manajemen ing sisi panyewa kudu ngarahake tumindak kasebut menyang panel pelanggan situs utama lan nyakup target bali sing wis divalidasi nalika pangguna kudu bisa navigasi bali menyang panyewa sawise ngrampungake tumindak.

Gunakake wrapper SSO inti kanggo tautan manajemen lintas-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL sing digawe tetep bisa difilter liwat `wu_sso_url`, sing nampa URL SSO, pangguna saiki, ID situs target, lan konteks redirect. Tambahan bisa nggunakake filter kasebut kanggo nambah konteks khusus panyedhiya utawa ngganti URL broker nalika tetep njaga validasi token Ultimate Multisite.

Aja nduplikasi status membership, invoice, alamat-tagihan, template, utawa manajemen-domain ing njero panyewa sovereign. Anggep Dashboard panyewa minangka peluncur lan panel pelanggan situs utama minangka sistem cathetan kanggo tumindak sing dikelola.

## Verifikasi migrasi {#migration-verification}

Sawise integrasi migrasi utawa siklus urip ngganti data panyewa, jalanake gerbang verifikasi:

- `wp tenant verify-no-legacy --site=<site-id>` ngonfirmasi yen panyewa wis ora gumantung maneh marang path lawas ing sisi jaringan.
- `wp tenant verify-sovereign-push --site=<site-id>` ngonfirmasi yen tugas push sovereign bisa ngolah lan nguras.

Integrasi kudu nganggep verifikasi sing gagal minangka penghalang deployment lan ngindhari nandhai panyewa live nganti kegagalan kasebut dirampungake.

## Pambusakan panyewa {#tenant-deletion}

Alur pambusakan kudu nelpon path teardown tambahan supaya kredensial database panyewa diresiki. Integrasi eksternal bisa mbusak sumber daya panyedhiya sawise teardown kasil, nanging ora kudu mbusak database utawa folder host nalika verifikasi utawa tugas push async isih mlaku.

## Router database sing wis deprecated {#deprecated-database-router}

`Database_Router` lawas wis diganti dening stub deprecation. Integrasi anyar kudu ngrampungake panyewa liwat router situs saiki lan API registri panyewa tinimbang gumantung marang kelas router lawas.
