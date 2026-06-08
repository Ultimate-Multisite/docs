---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

መረጃው በዳታቤዝ ውስጥ ከመቀመጡ በፊት ተተራረጎም (serialized) በሚልበት ጊዜ የሜታ መረጃውን የሚያጣራ ነው።

## መለኪያዎች

| ስም | ዓይነት | መግለጫ |
|------|------|-------------|
| $meta | `array` | ሊቀመጥ የሚገባው፣ ያልተተራረጎመው የሜታ መረጃ። |
| $data_unserialized | `array` | ሊቀመጥ የሚገባው የነገር ዕቃ መረጃ። |
| $this | `\Base_Model` | የነገር ዕቃው ተገልጋሚ (object instance)። |

### Since

- 2.0.0
### Source

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
