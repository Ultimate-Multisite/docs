---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

當我們嘗試找出可以注入常數的位置時，我們會檢查以下四種模式：

1. 我們會尋找 `$table_prefix` 變數的定義；
2. 我們會尋找更複雜的 `$table_prefix` 定義——例如那些使用環境變數（env variables）的定義；
3. 如果以上皆不可用，我們會尋找「Happy Publishing」這段註解；
4. 如果這也找不到，我們就會尋找檔案的開頭。這裡的 key 代表模式，而 value 則代表要新增的行數。如果傳入負數的行數，則表示要在找到的行之前寫入，而不是寫在之後。

### Source

定義於 [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) 的第 143 行
