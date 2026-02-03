---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filtro: wu_\{$this->model\}_meta_pre_save

Filtra los metadatos antes de que se serialicen para ser almacenados en la base de datos.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $meta | `array` | Los metadatos que se almacenarán, deserializados serializados. |
| $data_unserialized | `array` | Los datos del objeto que se almacenarán. |
| $this | `\Base_Model` | La instancia del objeto. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) en la línea 534
