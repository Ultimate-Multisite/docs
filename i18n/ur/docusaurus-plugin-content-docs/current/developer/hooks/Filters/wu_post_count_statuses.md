---
id: wu_post_count_statuses
title: فلٹر - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

پلگ ان بنانے والوں کو یہ سہولت ملتی ہے کہ وہ یہ طے کر سکیں کہ کون سی پوسٹ کی حیثیت (post status) گنی جائے۔ بنیادی طور پر، پبلش شدہ (published) اور پرائیویٹ (private) پوسٹس کو گنا جاتا ہے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | پوسٹ کی حیثیتوں کی فہرست (The list of post statuses) |
| $post_type | `string` | پوسٹ کی قسم کا سلگ (The post type slug) |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) میں لائن 119 پر بیان کیا گیا ہے

## Returns {#returns}
پوسٹ کی حیثیتوں کا نیا array
