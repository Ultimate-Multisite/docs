---
id: wu_this-model_pre_save
title: 'Pansala - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Sinasala ang data ng object bago ito itago sa base ng datos.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $data | `array` | Ang data ng object na itatago, naka-serialize. |
| $data_unserialized | `array` | Ang data ng object na itatago. |
| $this | `\Base_Model` | Ang instance ng object. |

### Mula noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) sa linya 570
