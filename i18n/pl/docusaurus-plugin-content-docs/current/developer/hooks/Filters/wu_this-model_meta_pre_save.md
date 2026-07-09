---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Filtr jest używany do filtrowania danych meta przed ich serializacją i zapisaniem do bazy danych.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Dane meta, które zostaną zapisane i odserializowane. |
| $data_unserialized | `array` | Dane obiektu, które zostaną zapisane. |
| $this | `\Base_Model` | Instancja obiektu. |

### Od wersji {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) w linii 534
