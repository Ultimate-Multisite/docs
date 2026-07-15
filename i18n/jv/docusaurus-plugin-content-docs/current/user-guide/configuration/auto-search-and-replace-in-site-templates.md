---
title: Pencarian dan Penggantian Otomatis di Template Situs
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search and Replace ing Site Templates (v2)

_**Tutorial iki mbutuhake WP UItimo versi 2.x.**_

Salah siji fitur paling ampuh saka Ultimate Multisite yaiku kemampuan kanggo nambah teks, warna, lan pilihan field bebas nang formulir registrasi. Sawise kita bisa ngumpulake data kuwi, kita bisa nganggo iku kanggo ngisi dhisik konten ing bagian-bagian tartamtu saka template situs sing dipilih. Banjur, nalika situs anyar di-publish, Ultimate Multisite bakal ngganti placeholder kasebut nganggo informasi asli sing wis dimasukkan nalika registrasi.

Contone, sampeyan bisa nggawe situs templatemu kanthi placeholder. Placeholder kudu ditambahi dikelilingi kurung cilik ganda - {{placeholder_name}}.

Terus, sampeyan cukup nambah field registrasi sing cocok kanggo ngumpulake data kuwi.

Sawise iku, pelanggan sampeyan bakal bisa ngisi field kuwi nalika registrasi.

Ultimate Multisite banjur bakal ngganti placeholder nganggo data sing diwenehake dening pelanggan kanthi otomatis.

## **Nganggo Solusi "template kebak placeholder"** {#solving-the-template-full-of-placeholders-problem}

Kabeh iku apik, nanging kita ketemu masalah sing ora endah: saiki template situs kita - sing bisa dikunjungi dening pelanggan kita - kebak placeholder sing ora migunani.

Kanggo ngatasi kuwi, kita nawakake pilihan kanggo ngatur nilai palsu (fake values) kanggo placeholder, lan kita nganggo nilai-nilai kuwi kanggo nggoleki lan ngganti isine ing template situs nalika pelanggan sampeyan lagi mampir.

Sampeyan bisa akses editor placeholder template kanthi menyang **Ultimate Multisite > Settings > Sites**, scroll menyang area Site Template Options, banjur klik tautan **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Iku bakal nggolekake sampeyan menyang editor konten placeholder, ing ngendi sampeyan bisa nambah placeholder lan konten sing pas karo iku.

![Editor untuk placeholder template](/img/config/settings-sites-templates-section.png)
