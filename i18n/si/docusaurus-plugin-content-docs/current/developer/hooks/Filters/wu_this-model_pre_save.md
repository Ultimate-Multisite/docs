---
id: wu_this-model_pre_save
title: 'පෙරහන් - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

වස්තු දත්ත දත්තගබඩාවට ගබඩා කිරීමට පෙර පෙරහන් කරයි.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $data | `array` | ගබඩා කෙරෙන, serialized කළ වස්තු දත්ත. |
| $data_unserialized | `array` | ගබඩා කෙරෙන වස්තු දත්ත. |
| $this | `\Base_Model` | වස්තු instance එක. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) හි 570 වන පේළියේ අර්ථ දක්වා ඇත.
