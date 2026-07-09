---
id: wu_this-model_pre_save
title: 'ფილტრი - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

ფილტრავს ობიექტის მონაცემებს, სანამ ისინი მონაცემთა ბაზაში შეინახება.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $data | `array` | ობიექტის მონაცემები, რომლებიც შეინახება, სერიალიზებული. |
| $data_unserialized | `array` | ობიექტის მონაცემები, რომლებიც შეინახება. |
| $this | `\Base_Model` | ობიექტის ინსტანცია. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570)-ში, ხაზზე 570
