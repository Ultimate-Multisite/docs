---
title: Kesalahan File Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error Saat Menginstal File Sunrise

File sunrise.php adalah file khusus yang dicari oleh WordPress saat proses bootstrap berlangsung. Agar WordPress dapat mendeteksi file sunrise.php, file ini harus berada di dalam **folder wp-content**.

Saat Anda mengaktifkan Ultimate Multisite dan mengikuti wizard pengaturan seperti yang terlihat pada screenshot, Ultimate Multisite akan mencoba menyalin file sunrise.php kami ke folder wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Pada umumnya, kami berhasil menyalin file tersebut dan semuanya berjalan lancar. Namun, jika ada sesuatu yang tidak dikonfigurasi dengan benar (misalnya izin folder), Anda mungkin mengalami situasi di mana Ultimate Multisite tidak dapat menyalin file tersebut.

Jika Anda membaca pesan error yang diberikan oleh Ultimo, Anda akan melihat bahwa itulah yang terjadi di sini: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Untuk memperbaikinya, Anda cukup menyalin file sunrise.php yang ada di dalam folder plugin wp-ultimo dan menempelkannya ke folder wp-content Anda. Setelah melakukan itu, muat ulang halaman wizard dan pemeriksaan seharusnya berhasil.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Bagaimanapun, masalah ini mungkin mengindikasikan perlunya pemeriksaan umum terhadap izin folder Anda untuk menghindari masalah di kemudian hari (tidak hanya dengan Ultimate Multisite, tetapi juga dengan plugin dan tema lainnya).

**Tool Health Check** yang merupakan bagian dari WordPress (Anda dapat mengaksesnya melalui **panel admin situs utama > Tools > Health Check**) mampu memberitahu Anda jika izin folder diatur ke nilai yang mungkin menyebabkan masalah dengan WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
