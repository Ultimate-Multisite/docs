---
title: Nyetel Konstanta Sunrise ing Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Ngatur konstanta Sunrise dadi true ing Closte

Kadhang penyedia hosting ngunci file `wp-config.php` kanggo alasan keamanan. Iki tegese, Ultimate Multisite ora bisa otomatis ngedit file kuwi kanggo nambah konstanta sing dibutuhake supaya pemetaan domain lan fitur liyane bisa kerja. Closte iku salah siji penyedia kaya ngono.

Nanging, Closte nawakake cara kanggo nambah konstanta menyang `wp-config.php` kanthi aman. Sampeyan mung perlu tindakake langkah-langkah ing ngisor iki:

## Ing dashboard Closte

Dhisik, [masuk menyang akun Closte panjenengan](https://app.closte.com/), klik menu Sites, banjur klik tautan Dashboard ing situs sing lagi panjenengan kerjain saiki:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Panjenengan bakal ditemoni sawetara menu anyar ing sisih kiwa layar. Tindakake menyang halaman **Settings** nganggo menu kuwi:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Terus, ing **Settings**, goleki tab WP-Config, banjur goleki kolom "Additional wp-config.php content" ing tab kase:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ing konteks instalasi Ultimate Multisite, panjenengan perlu nambah konstanta sunrise menyang kolom kuwi. Cukup tambahi baris anyar lan tempelake baris ing ngisor iki. Sawise iku, klik tombol **Save All**.

define('SUNRISE', true);

Wis rampung, kabeh wis siap. Balik maneh menyang wizard instalasi Ultimate Multisite lan refresh halaman kanggo nerusakake proses kasebut.
