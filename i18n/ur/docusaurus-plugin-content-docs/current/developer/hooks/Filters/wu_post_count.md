---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

پلگ ان بنانے والوں کو گنتی کی کل تعداد کو تبدیل کرنے کی اجازت دیتا ہے

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | کل پوسٹ کی تعداد |
| $post_counts | `object` | `wp_count_posts` فنکشن کی طرف سے واپس کیا گیا WordPress آبجیکٹ |
| $post_type | `string` | پوسٹ ٹائپ سلگ |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) میں لائن 136 پر بیان کیا گیا ہے

## Returns {#returns}
نئی کل تعداد
