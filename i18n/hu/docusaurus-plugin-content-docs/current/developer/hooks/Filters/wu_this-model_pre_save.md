---
id: wu_this-model_pre_save
title: 'Szűrő - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Szűrja az objektum adatokat, mielőtt azok az adatbázisba kerülnek mentésre.

## Paraméterek {#parameters}

| Name | Type | Leírás |
|------|------|-------------|
| $data | `array` | Az objektum adatai, amelyeket tárolják, és szilárdítják (serialize). |
| $data_unserialized | `array` | Az objektum adatai, amelyeket tárolják. |
| $this | `\Base_Model` | Az objektum példányát. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) at line 570
