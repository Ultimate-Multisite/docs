---
id: wu_this-model_meta_pre_save
title: 'Filtro - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filtro: wu_\{$this->model\}_meta_pre_save

Filtra os metadados antes de serem serializados para serem armazenados no banco de dados.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $meta | `array` | Os metadados que serão armazenados, deserializados/serializados. |
| $data_unserialized | `array` | Os dados do objeto que serão armazenados. |
| $this | `\Base_Model` | A instância do objeto. |

### Desde

- 2.0.0

### Fonte

Definido em [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) na linha 534
