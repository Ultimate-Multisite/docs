---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Фільтруе метададзеныя даныя, перш чым яны будуць сэрыялізаваны і захоўваны ў базе дадзеных.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $meta | `array` | Метададзеныя, якія будуць захоўвацца, дэсэрыялізаваныя. |
| $data_unserialized | `array` | Даныя аб'екта, якія будуць захоўвацца. |
| $this | `\Base_Model` | Экземплярык аб'екта. |

### З версіі {#since}

- 2.0.0
### Паходжанне {#source}

Вызначана ў [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) на 534-й кропцы
