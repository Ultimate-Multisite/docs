---
id: wu_this-model_pre_save
title: 'Filtro - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Filtra os dados do objeto antes de serem armazenados na base de dados.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $data | `array` | Os dados do objeto que serão armazenados, serializados. |
| $data_unserialized | `array` | Os dados do objeto que serão armazenados. |
| $this | `\Base_Model` | A instância do objeto. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) na linha 570
