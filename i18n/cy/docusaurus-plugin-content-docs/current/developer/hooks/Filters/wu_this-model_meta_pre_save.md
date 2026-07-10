---
id: wu_this-model_meta_pre_save
title: 'Hidlydd - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Yn hidlo'r meta data cyn iddo gael ei serialize i'w storio yn y gronfa ddata.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $meta | `array` | Y meta data a fydd yn cael ei storio, unserializedserialized. |
| $data_unserialized | `array` | Data'r gwrthrych a fydd yn cael ei storio. |
| $this | `\Base_Model` | Enghraifft y gwrthrych. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Diffinnir yn [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) ar linell 534
