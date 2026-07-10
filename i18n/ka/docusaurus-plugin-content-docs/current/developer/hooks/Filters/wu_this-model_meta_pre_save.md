---
id: wu_this-model_meta_pre_save
title: 'ფილტრი - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

ფილტრავს მონაცემების მეტას, სანამ ის სერიალიზდება მონაცემთა ბაზაში შესანახად.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $meta | `array` | მეტა მონაცემები, რომლებიც შეინახება, დესერიალიზებულისერიალიზებული. |
| $data_unserialized | `array` | ობიექტის მონაცემები, რომლებიც შეინახება. |
| $this | `\Base_Model` | ობიექტის ეგზემპლარი. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534)-ში, ხაზზე 534
