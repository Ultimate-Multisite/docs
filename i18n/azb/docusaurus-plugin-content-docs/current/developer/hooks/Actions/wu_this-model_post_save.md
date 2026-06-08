---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_{$this->model}_post_save

Bu action hook'u, bir nesne veritabanına kaydedildikten sonra tetiklenir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Veritabanına kaydedilecek olan nesne verileri. |
| $this | `\Base_Model` | Nesnenin kendisi (instance). |
| $new | `bool` | Nesne yeni mi? Eğer yeni ise `True` döner. |

### Since

- 2.0.0
### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
