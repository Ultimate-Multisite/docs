---
id: wu_this-model_meta_pre_save
title: 'Iragazkia - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Datuen meta iragazten du, datu-basean gordetzeko serializatu aurretik.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $meta | `array` | Gordeko diren meta datuak, unserializedserialized. |
| $data_unserialized | `array` | Gordeko diren objektuaren datuak. |
| $this | `\Base_Model` | Objektuaren instantzia. |

### Noiztik {#since}

- 2.0.0
### Iturburua {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) fitxategian definitua, 534. lerroan
