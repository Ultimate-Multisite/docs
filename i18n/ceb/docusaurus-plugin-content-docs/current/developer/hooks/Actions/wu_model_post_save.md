---
id: wu_model_post_save
title: Aksyon - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Aksyon: wu_model_post_save

Mo-trigger human ang usa ka butang matipig ngadto sa database.

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $model | `string` | Ang model slug. |
| $data | `array` | Ang datos sa butang nga tipigan, serialized. |
| $data_unserialized | `array` | Ang datos sa butang nga tipigan. |
| $this | `\Base_Model` | Ang instance sa butang. |

### Sukad

- 2.0.0
### Tinubdan

- Gihubit sa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) sa linya 613
- Gihubit sa [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) sa linya 1743
