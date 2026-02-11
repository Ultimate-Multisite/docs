---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filtro: wu_\{$this->model\}_meta_pre_save

Filtra i meta dei dati prima che vengano serializzati per essere memorizzati nel database.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $meta | `array` | I meta dati che verranno memorizzati, deserializzati/serializzati. |
| $data_unserialized | `array` | I dati dell'oggetto che verranno memorizzati. |
| $this | `\Base_Model` | L'istanza dell'oggetto. |

### Since

- 2.0.0

### Source

Definito in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) alla riga 534
