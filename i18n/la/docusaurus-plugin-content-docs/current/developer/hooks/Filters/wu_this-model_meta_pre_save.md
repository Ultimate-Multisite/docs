---
id: wu_this-model_meta_pre_save
title: 'Filtrum - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtrat meta datorum antequam in seriem redigantur ut in basi datorum reponantur.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $meta | `array` | Meta data quae reponentur, non-serializataserializata. |
| $data_unserialized | `array` | Data obiecti quae reponentur. |
| $this | `\Base_Model` | Instantia obiecti. |

### Ex quo {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) linea 534
