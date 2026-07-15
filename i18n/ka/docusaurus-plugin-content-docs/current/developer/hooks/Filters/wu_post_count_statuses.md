---
id: wu_post_count_statuses
title: ფილტრი - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

აძლევს plugin-ის დეველოპერებს შესაძლებლობას შეცვალონ, რომელი პოსტის სტატუსი უნდა ჩაითვალოს. ნაგულისხმევად, ითვლება გამოქვეყნებული და პირადი პოსტები

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $post_status | `array` | პოსტის სტატუსების სია |
| $post_type | `string` | პოსტის ტიპის slug |

### ვერსიიდან {#since}

- 1.9.1
### წყარო {#source}

განსაზღვრულია [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119)-ში, ხაზზე 119


## აბრუნებს {#returns}
პოსტის სტატუსების ახალი მასივი
