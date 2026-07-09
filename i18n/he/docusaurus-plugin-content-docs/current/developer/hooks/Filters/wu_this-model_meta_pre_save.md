---
id: wu_this-model_meta_pre_save
title: 'מסנן - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

מסנן את נתוני המטא לפני שהם נשמרים במסד הנתונים (בשלב ה-serialization).

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | נתוני המטא שישנרזו, לאחר ששוחזרו מפורמט ה-serialization. |
| $data_unserialized | `array` | נתוני האובייקט שישנרזו. |
| $this | `\Base_Model` | המופע של האובייקט. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) בשורה 534
