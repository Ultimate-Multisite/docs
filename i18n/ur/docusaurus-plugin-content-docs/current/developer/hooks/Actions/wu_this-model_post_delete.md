---
id: wu_this-model_post_delete
title: 'Action - wu_{$this->model}_post_delete'
sidebar_label: 'wu_{$this->model}_post_delete'
_i18n_hash: 723d566c67fd82808273b2eb42c96d73
---
# Action: wu_\{$this->model\}_post_delete

یہ اس وقت چلتا ہے جب کوئی object database میں save ہو جاتا ہے۔

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | اگر object کامیابی سے delete ہو گیا ہے تو `True`۔ |
| $this | `\Base_Model` | وہ object instance جس پر یہ hook چل رہا ہے۔ |

### Since

- 2.0.0
### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L663) at line 663
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1503) at line 1503
