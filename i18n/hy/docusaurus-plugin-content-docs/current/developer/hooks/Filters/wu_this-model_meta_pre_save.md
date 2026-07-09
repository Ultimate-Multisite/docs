---
id: wu_this-model_meta_pre_save
title: 'Ֆիլտր - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Զտում է տվյալների meta-ն՝ նախքան այն սերիալիզացվելը՝ տվյալների բազայում պահվելու համար։

## Պարամետրեր

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Meta տվյալները, որոնք կպահվեն՝ unserializedserialized։ |
| $data_unserialized | `array` | Օբյեկտի տվյալները, որոնք կպահվեն։ |
| $this | `\Base_Model` | Օբյեկտի instance-ը։ |

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534)-ում՝ 534-րդ տողում
