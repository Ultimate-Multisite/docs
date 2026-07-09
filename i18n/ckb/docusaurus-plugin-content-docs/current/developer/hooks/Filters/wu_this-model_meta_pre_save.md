---
id: wu_this-model_meta_pre_save
title: 'فلتەر - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

داتای meta پێش ئەوەی serialized بکرێت بۆ هەڵگرتن لە databaseدا، فلتەر دەکات.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $meta | `array` | ئەو داتای meta ـەی کە هەڵدەگیرێت، unserializedserialized. |
| $data_unserialized | `array` | داتای object ـەکە کە هەڵدەگیرێت. |
| $this | `\Base_Model` | instance ـی object ـەکە. |

### لەو وەشانەوە {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) لە دێڕی 534
