---
id: wu_wp_config_reference_hook_line_patterns
title: فلٹر - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

ہم یہ جانچ کرنے کے لیے کہ ہم اپنے کانسٹنٹس کہاں شامل کر سکتے ہیں، تین پیٹرنٹس (patterns) کی تلاش کرتے ہیں:

1. ہم `$table_prefix` ویری ایبل کی تعریف (definition) کو تلاش کرتے ہیں؛ 2. ہم مزید پیچیدہ `$table_prefix` کی تعریفات کو تلاش کرتے ہیں - وہ جو ماحول کے ویری ایبلز (env variables) استعمال کرتی ہیں، مثال کے طور پر؛ 3. اگر وہ دستیاب نہ ہو، تو ہم 'Happy Publishing' کمنٹ کو دیکھتے ہیں؛ 4. اگر وہ بھی دستیاب نہ ہو، تو ہم فائل کے آغاز کو دیکھتے ہیں۔ یہاں کی (key) پیٹرن کو ظاہر کرتی ہے اور ویلیو (value) وہ لائنوں کی تعداد ہے جو شامل کرنی ہیں۔ اگر ہم اسے منفی نمبر (negative number) دیں، تو یہ تلاش کی گئی لائن کے بعد لکھنے کے بجائے اس سے پہلے لکھے گا۔

### Source {#source}

یہ [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) میں لائن 143 پر بیان کیا گیا ہے۔
