---
id: wu_wp_config_reference_hook_line_patterns
title: Фильтр - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Мы проверяем три шаблона, пытаясь определить, где мы можем внедрить наши константы:

1. Мы ищем определение переменной $table_prefix;  
2. Мы ищем более сложные определения $table_prefix — те, которые используют переменные окружения, например;  
3. Если это недоступно, мы ищем комментарий 'Happy Publishing';  
4. Если и это недоступно, мы ищем начало файла. Ключ представляет шаблон, а значение — количество строк, которые нужно добавить. Отрицательное число строк можно передать, чтобы записать перед найденной строкой, а не после неё.

### Source

Defined in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) at line 143
