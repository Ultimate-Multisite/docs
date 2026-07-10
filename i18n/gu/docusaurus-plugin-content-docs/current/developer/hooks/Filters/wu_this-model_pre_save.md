---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

ડેટાબેઝમાં સ્ટોર થાય તે પહેલાં ઓબ્જેક્ટ ડેટાને ફિલ્ટર કરે છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | જે ઓબ્જેક્ટ ડેટા સ્ટોર થશે, તે સીરીયલાઇઝ્ડ સ્વરૂપમાં. |
| $data_unserialized | `array` | જે ઓબ્જેક્ટ ડેટા સ્ટોર થશે. |
| $this | `\Base_Model` | ઓબ્જેક્ટ ઇન્સ્ટન્સ. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) at line 570
