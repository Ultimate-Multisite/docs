---
id: wu_wp_config_reference_hook_line_patterns
title: Филтър - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

Проверяваме за три шаблона, когато се опитваме да разберем къде можем да добавим нашите константи:

1. Търсим дефиницията на променливата $table_prefix; 2. Търсим по-сложни дефиниции на $table_prefix – тези, които използват env променливи, например; 3. Ако това не е налично, търсим коментара 'Happy Publishing'; 4. Ако и това не е налично, търсим началото на файла. Ключът представлява шаблона, а стойността – броя на редовете, които трябва да бъдат добавени. Отрицателно число редове може да бъде подадено, за да се запише преди намерената линия, вместо след нея.

### Източник {#source}

Дефиниран в [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) на ред 143
