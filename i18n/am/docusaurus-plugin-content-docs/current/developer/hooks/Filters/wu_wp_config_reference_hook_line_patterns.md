---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

የቋሚ ተለዋዋጮቻችንን እንድንጨምር ለማወቅ ሶስት ቅጦችን እንፈትሻለን፦

1. የ`$table_prefix` ተለዋዋጭ ፍቺን እንፈልጋለን፤ 2. ይበልጥ ውስብስብ የሆኑ `$table_prefix` ፍቺዎችን እንፈልጋለን—ለምሳሌ የ`env` ተለዋዋጮችን የሚጠቀሙ—; 3. ይህ ካልተገኘ፣ 'Happy Publishing' ኮሜንట్‌ን እንመለከታለን፤ 4. ይህ ደግሞ ካልተገኘ፣ የፋይሉ መጀመሪያን እንመለከታለን። ቁልፉ (key) ቅጦቹን ሲወክል፣ ዋጋው (value) ደግሞ መጨመር ያለበት የመስመሮች ብዛት ነው። አሉታዊ የመስመሮች ብዛት ከተሰጠ፣ ከሚገኘው መስመር በኋላ ከመጻፍ ይልቅ፣ ከዚህ በፊት ለመጻፍ ይቻላል።

### Source {#source}

Defined in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) at line 143
