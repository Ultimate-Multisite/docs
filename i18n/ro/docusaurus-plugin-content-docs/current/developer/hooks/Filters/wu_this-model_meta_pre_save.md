---
id: wu_this-model_meta_pre_save
title: 'Filtru - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Filtrează meta datele înainte de a fi serializate pentru a fi stocate în baza de date.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $meta | `array` | Datele meta care vor fi stocate, deserializate. |
| $data_unserialized | `array` | Datele obiectului care vor fi stocate. |
| $this | `\Base_Model` | Instanța obiectului. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) la linia 534
