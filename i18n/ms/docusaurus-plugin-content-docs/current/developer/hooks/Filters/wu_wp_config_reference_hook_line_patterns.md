---
id: wu_wp_config_reference_hook_line_patterns
title: Penapis - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Kami menyemak tiga corak (patterns) apabila cuba menentukan tempat kami boleh menyuntik (inject) pemalar (constants) kami:

1. Kami mencari definisi pemboleh ubah `$table_prefix`; 2. Kami mencari definisi `$table_prefix` yang lebih kompleks — iaitu yang menggunakan pemboleh ubah persekitaran (env variables), contohnya; 3. Jika itu tidak tersedia, kami mencari komen 'Happy Publishing'; 4. Jika itu juga tidak tersedia, kami mencari permulaan fail. Kunci (key) mewakili corak dan nilai (value) mewakili bilangan baris yang perlu ditambah. Bilangan baris negatif boleh dihantar untuk menulis sebelum baris yang ditemui, dan bukannya selepasnya.

### Sumber

Didefinisikan dalam [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) pada baris 143
