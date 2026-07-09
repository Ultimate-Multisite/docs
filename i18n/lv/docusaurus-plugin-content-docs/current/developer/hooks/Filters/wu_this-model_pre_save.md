---
id: wu_this-model_pre_save
title: 'Filtrs - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Filtrē objekta datus, pirms tie tiek saglabāti datubāzē.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $data | `array` | Objekta dati, kas tiks saglabāti, serializēti. |
| $data_unserialized | `array` | Objekta dati, kas tiks saglabāti. |
| $this | `\Base_Model` | Objekta instance. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) 570. rindā
