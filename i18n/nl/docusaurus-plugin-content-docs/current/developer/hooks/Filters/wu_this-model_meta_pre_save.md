---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Filtert de metadata van de gegevens voordat deze wordt geserialiseerd om op te slaan in de database.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $meta | `array` | De metadata die opgeslagen zal worden, deserialized. |
| $data_unserialized | `array` | De objectgegevens die opgeslagen zullen worden. |
| $this | `\Base_Model` | De objectinstantie. |

### Since {#since}

- 2.0.0

### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
