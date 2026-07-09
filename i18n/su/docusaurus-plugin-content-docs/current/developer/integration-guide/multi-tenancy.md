---
title: Integrasi Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrasi Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 ngarobah sababaraha titik sentuh integrasi pikeun panyewa berdaulat, verifikasi migrasi, jeung otomatisasi daur hirup panyewa.

## Alur bootstrap panyewa {#tenant-bootstrap-flow}

Integrasi anu nyieun atawa ngarobah panyewa kudu nuturkeun urutan ieu:

1. Tangtukeun rékaman registri panyewa jeung modél isolasi.
2. Jieun atawa verifikasi panulis database panyewa.
3. Bootstrap skéma panyewa.
4. Sadiakeun pamaké panyewa.
5. Daptarkeun routing panyewa jeung jalur filesystem.
6. Jalankeun verifikasi migrasi saméméh muka aksés ka panyewa.

Ulah nganggap yén panyewa berdaulat bisa maké deui sambungan database jaringan. Paké registri panyewa jeung abstraksi panulis anu disadiakeun ku tambihan éta.

## Hook SSO jeung REST {#sso-and-rest-hooks}

Autologin panyewa tanpa status maké token umur pondok kalayan purpose claim, panyalindungan replay JTI, wates kadaluwarsa, jeung origin pinning. Integrasi anu nambahkeun tombol login atawa tautan pangelolaan jauh kudu ngahasilkeun kunjungan panyewa ngaliwatan alur SSO anu dirojong tinimbang nyusun URL login panyewa sacara langsung.

Kajadian audit API sisi jaringan jeung ringkesan poéan sadia pikeun gateway panyewa berdaulat. Paké log éta nalika debugging sistem éksternal anu nelepon titik tungtung daur hirup panyewa.

## URL lampah palanggan berdaulat {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 ngarahkeun lampah palanggan panyewa berdaulat balik ka situs utama pikeun alur Account, pamayaran, tagihan, faktur, situs, gentos témplat, jeung pemetaan domain. Integrasi anu nembongkeun tautan pangelolaan sisi panyewa kudu ngarahkeun lampah éta ka panel palanggan situs utama sarta ngalebetkeun sasaran balik anu geus divalidasi lamun pamaké kudu bisa napigasi deui ka panyewa sanggeus ngaréngsékeun lampah.

Paké wrapper SSO inti pikeun tautan pangelolaan lintas-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL anu dihasilkeun tetep bisa difilter ngaliwatan `wu_sso_url`, anu narima URL SSO, pamaké ayeuna, ID situs sasaran, jeung kontéks alihan. Tambihan bisa maké filter éta pikeun nambahkeun kontéks husus panyadia atawa pikeun ngaganti URL broker bari tetep ngajaga validasi token Ultimate Multisite.

Ulah ngaduplikasi kaanggotaan, faktur, alamat tagihan, témplat, atawa kaayaan pangelolaan domain di jero panyewa berdaulat. Anggap Dashboard panyewa minangka launcher jeung panel palanggan situs utama minangka sistem catetan resmi pikeun lampah anu dikokolakeun.

## Verifikasi migrasi {#migration-verification}

Sanggeus integrasi migrasi atawa daur hirup ngarobah data panyewa, jalankeun gerbang verifikasi:

- `wp tenant verify-no-legacy --site=<site-id>` mastikeun panyewa henteu deui gumantung kana jalur warisan sisi jaringan.
- `wp tenant verify-sovereign-push --site=<site-id>` mastikeun pagawéan push berdaulat bisa ngolah jeung ngosongkeun antrean.

Integrasi kudu nganggap verifikasi gagal minangka panghalang deployment sarta ulah nandaan panyewa live nepi ka kagagalan éta diréngsékeun.

## Ngahapus panyewa {#tenant-deletion}

Alur ngahapus kudu nelepon jalur teardown tambihan supaya kredénsial database panyewa diberesihan. Integrasi éksternal bisa mupus sumber daya panyadia sanggeus teardown hasil, tapi teu kudu mupus database host atawa folder nalika verifikasi atawa pagawéan push async masih jalan.

## Router database anu geus deprecated {#deprecated-database-router}

`Database_Router` warisan geus diganti ku stub deprecation. Integrasi anyar kudu nangtukeun panyewa ngaliwatan router situs ayeuna jeung API registri panyewa tinimbang gumantung kana kelas router heubeul.
