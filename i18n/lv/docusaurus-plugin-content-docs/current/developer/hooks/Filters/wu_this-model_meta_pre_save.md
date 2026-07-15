---
id: wu_this-model_meta_pre_save
title: 'Filtrs - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtrē datu meta informāciju, pirms tā tiek serializēta glabāšanai datubāzē.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $meta | `array` | Meta dati, kas tiks saglabāti, unserializedserialized. |
| $data_unserialized | `array` | Objekta dati, kas tiks saglabāti. |
| $this | `\Base_Model` | Objekta instance. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) 534. rindā
