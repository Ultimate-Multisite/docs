---
id: wu_this-model_pre_save
title: 'Զտիչ - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Զտում է օբյեկտի տվյալները՝ նախքան դրանք տվյալների բազայում պահվելը։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $data | `array` | Օբյեկտի տվյալները, որոնք կպահվեն՝ սերիալիզացված։ |
| $data_unserialized | `array` | Օբյեկտի տվյալները, որոնք կպահվեն։ |
| $this | `\Base_Model` | Օբյեկտի օրինակ։ |

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570)-ում՝ 570-րդ տողում
