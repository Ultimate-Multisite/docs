---
id: wu_post_count
title: តម្រង - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ plugin ផ្លាស់ប្តូរចំនួនសរុប

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $count | `int` | ចំនួន post សរុប |
| $post_counts | `object` | វត្ថុ WordPress ដែលត្រឡប់ដោយ fn wp_count_posts |
| $post_type | `string` | slug នៃប្រភេទ post |

### ចាប់ពី {#since}

- 1.9.1
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) នៅបន្ទាត់ 136


## តម្លៃត្រឡប់ {#returns}
ចំនួនសរុបថ្មី
