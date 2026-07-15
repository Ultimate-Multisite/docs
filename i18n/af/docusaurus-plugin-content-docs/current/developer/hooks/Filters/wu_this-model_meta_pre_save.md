---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filter die data meta voordat dit geserialiseer word om in die database gestoor te word.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Die meta-data wat gestoor sal word, ongeserialiseer. |
| $data_unserialized | `array` | Die objekdata wat gestoor sal word. |
| $this | `\Base_Model` | Die objek-instansie. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Bepaald in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) op lyn 534
