---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Nagti-trigger ito pagkatapos i-save ang isang object sa database.

## Mga Parameter {#parameters}

| Pangalan | Uri | Deskripsyon |
|------|------|-------------|
| $data | `array` | Ang data ng object na ise-save. |
| $this | `\Base_Model` | Ang instance (kopya) ng object. |
| $new | `bool` | True kung ang object ay bago. |

### Since {#since}

- 2.0.0
### Source {#source}

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
