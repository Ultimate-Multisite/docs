---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Kami memeriksa tiga pola saat mencoba mengetahui di mana kami dapat menyuntikkan konstanta kami:

1. Kami mencari definisi variabel `$table_prefix`; 2. Kami mencari definisi `$table_prefix` yang lebih kompleks — yaitu yang menggunakan variabel lingkungan (env variables), misalnya; 3. Jika itu tidak tersedia, kami mencari komentar 'Happy Publishing'; 4. Jika itu juga tidak tersedia, kami mencari awal file. Kunci mewakili pola dan nilai mewakili jumlah baris yang akan ditambahkan. Jumlah baris negatif dapat dilewatkan untuk menulis sebelum baris yang ditemukan, alih-alih menulis setelahnya.

### Sumber

Didefinisikan di [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) pada baris 143
