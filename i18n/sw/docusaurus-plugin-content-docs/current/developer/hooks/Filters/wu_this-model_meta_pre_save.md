---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Huchuja (filters) data za meta kabla ya kufungwa (serialize) na kuhifadhiwa kwenye database.

## Viparametrika

| Jina | Aina | Maelezo |
|------|------|-------------|
| $meta | `array` | Meta data ambayo itahifadhiwa, iliyofungwa (unserializedserialized). |
| $data_unserialized | `array` | Data za kitu (object data) ambazo zitahifadhiwa. |
| $this | `\Base_Model` | Mfano wa kitu (object instance). |

### Tangu

- 2.0.0
### Chanzo

Imefafanuliwa katika [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) kwenye mstari wa 534
