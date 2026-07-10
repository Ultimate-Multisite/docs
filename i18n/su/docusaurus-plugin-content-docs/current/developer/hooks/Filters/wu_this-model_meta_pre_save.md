---
id: wu_this-model_meta_pre_save
title: 'Saringan - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Nyaring data méta saméméh diserialisasi pikeun disimpen kana pangkalan data.

## Paraméter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $meta | `array` | Data méta anu bakal disimpen, unserializedserialized. |
| $data_unserialized | `array` | Data objék anu bakal disimpen. |
| $this | `\Base_Model` | Instansi objék. |

### Ti Saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) dina garis 534
