---
id: wu_this-model_meta_pre_save
title: 'Akayunguruzo - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Iyungurura amakuru ya meta mbere y’uko ahindurwa serialized kugira ngo abikwe muri database.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $meta | `array` | Amakuru ya meta azabikwa, unserializedserialized. |
| $data_unserialized | `array` | Amakuru y’ikintu azabikwa. |
| $this | `\Base_Model` | Urugero rw’ikintu. |

### Kuva {#since}

- 2.0.0
### Inkomoko {#source}

Bisobanuwe muri [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) ku murongo wa 534
