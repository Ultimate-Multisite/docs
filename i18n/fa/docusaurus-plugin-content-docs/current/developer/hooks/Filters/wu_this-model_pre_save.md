---
id: wu_this-model_pre_save
title: 'فیلتر - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

داده‌های آبجکت را قبل از اینکه در دیتابیس ذخیره شوند، فیلتر می‌کند.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | داده آبجکتی که قرار است ذخیره و سریالایز شود. |
| $data_unserialized | `array` | داده آبجکتی که قرار است ذخیره شود. |
| $this | `\Base_Model` | نمونه آبجکت. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) در خط ۵۷۰ تعریف شده است.
