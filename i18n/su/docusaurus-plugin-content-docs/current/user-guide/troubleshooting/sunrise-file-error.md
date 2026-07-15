---
title: Error File Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error Pasang File Sunrise

File sunrise.php téh file istimé anu dicari ku WordPress nalika WordPress ngahandaan diri (bootstraps). Supaya WordPress bisa manggihan file sunrise.php, éta kudu aya di jero folder **wp-content**.

Lamun anjeun ngaktifkeun Ultimate Multisite jeung ngalangkungan panduan pangaturan saperti nu aya dina tangkapan layar, Ultimate Multisite bakal nyobaan nyalin file sunrise.php urang ka folder wp-content.

<!-- Tangkapan layar tidak tersedia: Halaman panduan pengaturan yang menunjukkan langkah instalasi sunrise.php -->

Loba waktu mah, urang bisa nyalin file éta kalawan sukses jeung sagala aya nu jalan. Tapi, lamun aya nu teu diatur bener (misalna izin folder), anjeun bisa nempo kaayaan di mana Ultimate Multisite teu bisa nyalin file éta.

Lamun anjeun maca pesan error Ultimo anu dipasihkeun, anjeun bakal ningali yén éta téh naon anu kajadian di dieu: **Sunrise copy failed** (Salin Sunrise gagal).

<!-- Tangkapan layar tidak tersedia: Pesan error yang menunjukkan Sunrise copy failed -->

Kanggo ngabenerkeun éta, anjeun bisa nyalin file sunrise.php di jero folder plugin wp-ultimo terus ditempelkeun ka folder wp-content anjeun. Sanggeus éta, *reload* halaman panduan jeung pengecekan téh bakal lulus.

<!-- Tangkapan layar tidak tersedia: File manager yang menunjukkan sunrise.php di dalam folder plugin wp-ultimo --> Dina unggal kasusna, ieu bisa jadi perlu dicek umum izin folder anjeun sangkan teu aya masalah di mangsa hareup (teu ngan ukur jeung Ultimate Multisite tapi ogé jeung plugin jeung tema séjén).

**Health Check tool** anu aya dina WordPress (anjeun bisa ngakses ku cara **admin panel utama > Tools > Health Check**) bisa ngabantu anjeun ngajakeun lamun izin folder anjeun diatur ka nilai-nilai anu bisa nyababkeun masalah jeung WordPress.

<!-- Screenshot teu aya: Alat Cek Kesehatan WordPress nunjukkeun status izin folder -->
