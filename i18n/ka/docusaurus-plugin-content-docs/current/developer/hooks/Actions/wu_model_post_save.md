---
id: wu_model_post_save
title: მოქმედება - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

ამოქმედდება მას შემდეგ, რაც ობიექტი მონაცემთა ბაზაში შეინახება.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | მოდელის slug. |
| $data | `array` | ობიექტის მონაცემები, რომლებიც შეინახება, სერიალიზებული. |
| $data_unserialized | `array` | ობიექტის მონაცემები, რომლებიც შეინახება. |
| $this | `\Base_Model` | ობიექტის ინსტანცია. |

### მას შემდეგ

- 2.0.0
### წყარო

- განსაზღვრულია [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613)-ში, ხაზზე 613
- განსაზღვრულია [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743)-ში, ხაზზე 1743
