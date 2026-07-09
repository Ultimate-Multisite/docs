---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

ਅਸੀਂ ਇਹ ਪਤਾ ਲਗਾਉਣ ਲਈ ਕਿ ਅਸੀਂ ਆਪਣੇ constants ਕਿੱਥੇ inject ਕਰ ਸਕਦੇ ਹਾਂ, ਤਿੰਨ patterns ਦੀ ਜਾਂਚ ਕਰਦੇ ਹਾਂ:

1. ਅਸੀਂ `$table_prefix` variable ਦੀ definition ਲੱਭਦੇ ਹਾਂ; 2. ਅਸੀਂ ਹੋਰ ਗੁੰਝਲਦਾਰ `$table_prefix` definitions ਲੱਭਦੇ ਹਾਂ - ਉਹ ਜੋ env variables ਵਰਤਦੇ ਹਨ, ਉਦਾਹਰਨ ਲਈ; 3. ਜੇ ਇਹ ਉਪਲਬਧ ਨਹੀਂ ਹੈ, ਤਾਂ ਅਸੀਂ 'Happy Publishing' comment ਲੱਭਦੇ ਹਾਂ; 4. ਜੇ ਇਹ ਵੀ ਉਪਲਬਧ ਨਹੀਂ ਹੈ, ਤਾਂ ਅਸੀਂ ਫਾਈਲ ਦੀ ਸ਼ੁਰੂਆਤ ਲੱਭਦੇ ਹਾਂ। key pattern ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ ਅਤੇ value ਉਹ ਲਾਈਨਾਂ ਦੀ ਗਿਣਤੀ ਦਰਸਾਉਂਦੀ ਹੈ ਜੋ ਜੋੜਨੀਆਂ ਹਨ। ਜੇਕਰ ਨੈਗੇਟਿਵ ਲਾਈਨਾਂ ਦੀ ਗਿਣਤੀ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਇਹ ਲੱਭੀ ਗਈ ਲਾਈਨ ਤੋਂ ਬਾਅਦ ਨਾ ਲਿਖ ਕੇ, ਉਸ ਤੋਂ ਪਹਿਲਾਂ ਲਿਖਣ ਲਈ ਹੋ ਸਕਦੀ ਹੈ।

### Source {#source}

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) ਵਿੱਚ ਲਾਈਨ 143 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ
