---
id: wu_model_post_save
title: એક્શન - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

જ્યારે કોઈ ઓબ્જેક્ટ ડેટાબેઝમાં સ્ટોર થાય છે, ત્યારે આ એક્શન ટ્રિગર થાય છે.

## પેરામીટર્સ

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | મોડેલ સ્લગ (model slug). |
| $data | `array` | ઓબ્જેક્ટ ડેટા જે સ્ટોર થશે, સીરીયલાઇઝ્ડ (serialized). |
| $data_unserialized | `array` | ઓબ્જેક્ટ ડેટા જે સ્ટોર થશે. |
| $this | `\Base_Model` | ઓબ્જેક્ટ ઇન્સ્ટન્સ (object instance). |

### Since

- 2.0.0
### Source

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) માં લાઇન 613 પર વ્યાખ્યાયિત
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) માં લાઇન 1743 પર વ્યાખ્યાયિત
