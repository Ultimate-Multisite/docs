---
id: wu_model_post_save
title: ක්‍රියාව - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# ක්‍රියාව: wu_model_post_save {#action-wumodelpostsave}

වස්තුවක් දත්ත සමුදායට ගබඩා කළ පසු ක්‍රියාත්මක වේ.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $model | `string` | model slug එක. |
| $data | `array` | ගබඩා කෙරෙන, serialized කර ඇති වස්තු දත්ත. |
| $data_unserialized | `array` | ගබඩා කෙරෙන වස්තු දත්ත. |
| $this | `\Base_Model` | වස්තු instance එක. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) හි 613 පේළියේ නිර්වචනය කර ඇත
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) හි 1743 පේළියේ නිර්වචනය කර ඇත
