---
id: wu_post_count
title: ფილტრი - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# ფილტრი: wu_post_count

საშუალებას აძლევს plugin-ის დეველოპერებს შეცვალონ საერთო რაოდენობა

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | პოსტების საერთო რაოდენობა |
| $post_counts | `object` | WordPress ობიექტი, რომელსაც აბრუნებს wp_count_posts fn |
| $post_type | `string` | პოსტის ტიპის slug |

### ვერსიიდან {#since}

- 1.9.1
### წყარო {#source}

განსაზღვრულია [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136)-ში, ხაზზე 136


## აბრუნებს {#returns}
ახალი საერთო რაოდენობა
