---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

આ ફિલ્ટર ડેટા મેટાને ડેટાબેઝમાં સ્ટોર થતા પહેલાં (સિરીયલાઇઝ થતા પહેલાં) ફિલ્ટર કરે છે.

## પેરામીટર્સ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | જે મેટા ડેટા સ્ટોર કરવામાં આવશે, તેને અનસિરીયલાઇઝ કરવામાં આવશે. |
| $data_unserialized | `array` | જે ઓબ્જેક્ટ ડેટા સ્ટોર કરવામાં આવશે. |
| $this | `\Base_Model` | ઓબ્જેક્ટનું ઇન્સ્ટન્સ. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
