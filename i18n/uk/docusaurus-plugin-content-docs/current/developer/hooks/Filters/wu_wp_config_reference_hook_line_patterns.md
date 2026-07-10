---
id: wu_wp_config_reference_hook_line_patterns
title: Фільтр - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Фільтр: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

Ми перевіряємо три шаблони, коли намагаємося визначити, куди ми можемо вставити наші константи:

1. Ми шукаємо визначення змінної `$table_prefix`; 2. Ми шукаємо більш складні визначення `$table_prefix` — ті, що використовують змінні середовища, наприклад; 3. Якщо це недоступно, ми шукаємо коментар 'Happy Publishing'; 4. Якщо й це недоступно, ми шукаємо початок файлу. Ключ представляє шаблон, а значення — кількість рядків для додавання. Від'ємну кількість рядків можна передати, щоб записати перед знайденим рядком, замість того, щоб писати після нього.

### Джерело {#source}

Визначено в [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) на рядку 143
