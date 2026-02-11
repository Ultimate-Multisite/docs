---
id: wu_this-model_post_save
title: 'Ação - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_${this->model}_post_save

Dispara após um objeto ser armazenado no banco de dados.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Os dados do objeto que serão armazenados. |
| $this | `\Base_Model` | A instância do objeto. |
| $new | `bool` | Verdadeiro se o objeto for novo. |

### Since

- 2.0.0

### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
