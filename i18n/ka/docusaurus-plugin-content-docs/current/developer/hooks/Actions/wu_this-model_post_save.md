---
id: wu_this-model_post_save
title: 'მოქმედება - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

ირთვება მას შემდეგ, რაც ობიექტი მონაცემთა ბაზაში შეინახება.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $data | `array` | ობიექტის მონაცემები, რომლებიც შეინახება. |
| $this | `\Base_Model` | ობიექტის ეგზემპლარი. |
| $new | `bool` | ჭეშმარიტია, თუ ობიექტი ახალია. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

- განსაზღვრულია [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624)-ში, 624-ე ხაზზე
- განსაზღვრულია [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754)-ში, 1754-ე ხაზზე
