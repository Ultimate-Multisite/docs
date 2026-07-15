---
id: wu_this-model_pre_save
title: 'Salain - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Gisala ang datos sa object sa wala pa kini tipigi sa database.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $data | `array` | Ang datos sa object nga tipigan, serialized. |
| $data_unserialized | `array` | Ang datos sa object nga tipigan. |
| $this | `\Base_Model` | Ang instance sa object. |

### Sukad {#since}

- 2.0.0
### Gigikanan {#source}

Gihubit sa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) sa linya 570
