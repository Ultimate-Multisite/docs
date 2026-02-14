---
id: wu_this-model_post_save
title: 'الإجراء - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

يتم تشغيله بعد تخزين كائن في قاعدة البيانات.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | بيانات الكائن التي سيتم تخزينها. |
| $this | `\Base_Model` | نسخة الكائن. |
| $new | `bool` | صحيح إذا كان الكائن جديدًا. |

### Since

- 2.0.0

### Source

- معرف في [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) في السطر 624
- معرف في [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) في السطر 1754
