---
title: Error File Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error Instalasi File Sunrise

File `sunrise.php` iku file khusus sing dicari WordPress nalika WordPress lagi nyiapake diri (bootstraps). Supaya WordPress bisa nemokake file `sunrise.php`, file kuwi kudu ana nang folder **wp-content**.

Nalika sampeyan aktifake Ultimate Multisite lan ngliwati panduan setup kaya sing ana ing screenshot, Ultimate Multisite bakal nyoba nyalin file `sunrise.php` kita menyang folder `wp-content`.

<!-- Screenshot ora tersedia: Halaman wizard setup nuduh langkah instalasi sunrise.php -->

Biasane, kita bisa sukses nyalin file kuwi lan kabeh lancar. Nanging, yen ana sing durung diatur kanthi bener (misalnya izin folder), sampeyan bisa nemoni situasi nalika Ultimate Multisite ora bisa nyalin file kuwi.

Yen sampeyan maca pesan error sing diwenehake Ultimo, sampeyan bakal weruh yen iku persis kejadiané: **Sunrise copy failed**.

<!-- Screenshot ora tersedia: Pesan error nuduh Sunrise copy gagal -->

Kanggo ngresiki masalah kuwi, sampeyan cukup nyalin file `sunrise.php` ing njero folder plugin `wp-ultimo` lan tempelake menyang folder `wp-content` sampeyan. Sawise nindakake iku, muat maneh halaman wizard lan pengecekan kudu wis lancar.

<!-- Screenshot ora tersedia: File manager nuduh sunrise.php ing njero folder plugin wp-ultimo --> Sanajan ngono wae, iki bisa dadi alesan kanggo ngecek izin folder sampeyan secara umum supaya ora ana masalah ing mangsa ngarep (ora mung karo Ultimate Multisite, nanging uga karo plugin lan theme liyane).

**Health Check tool** sing ana ing WordPress (sampeyan bisa akses liwat **admin panel utama > Tools > Health Check**) duwe kemampuan kanggo ngandhani yen izin folder sampeyan wis diatur kanthi nilai sing bisa nyebabake masalah karo WordPress.

<!-- Screenshot ora ana: Alat WordPress Health Check nuduhake status izin folder -->
