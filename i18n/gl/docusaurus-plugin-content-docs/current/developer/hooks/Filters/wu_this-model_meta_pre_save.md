---
id: wu_this-model_meta_pre_save
title: 'Filtro - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtra os metadatos antes de seren serializados para gardalos na base de datos.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $meta | `array` | Os metadatos que se gardarán, sen serializar/serializados. |
| $data_unserialized | `array` | Os datos do obxecto que se gardarán. |
| $this | `\Base_Model` | A instancia do obxecto. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) na liña 534
