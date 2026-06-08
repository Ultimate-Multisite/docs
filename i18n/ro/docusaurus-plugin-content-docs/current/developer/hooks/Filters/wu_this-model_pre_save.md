---
id: wu_this-model_pre_save
title: 'Filtru - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filtru: wu_\{$this->model\}_pre_save

Filtrează datele obiectului înainte ca acestea să fie stocate în bază de date.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $data | `array` | Datele obiectului care vor fi stocate, serializate. |
| $data_unserialized | `array` | Datele obiectului care vor fi stocate. |
| $this | `\Base_Model` | Instanța obiectului. |

### De la

- 2.0.0
### Sursă

Definit în [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) la linia 570
