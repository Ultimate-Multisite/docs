---
id: wu_this-model_meta_pre_save
title: 'فیلتر - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

این فیلتر، داده‌های متا را قبل از اینکه برای ذخیره در دیتابیس سریالایز (تبدیل به فرمت ذخیره‌سازی) شوند، فیلتر می‌کند.

## پارامترها

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | داده‌های متا که قرار است ذخیره شوند، غیرسریالایز شده. |
| $data_unserialized | `array` | داده‌های شیء‌ای که قرار است ذخیره شوند. |
| $this | `\Base_Model` | نمونه شیء. |

### از نسخه

- 2.0.0
### منبع

در [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) در خط ۵۳۴ تعریف شده است.
