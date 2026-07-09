---
id: wu_model_post_save
title: Aksyon - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Gumagana matapos maimbak ang isang object sa database.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Ang slug ng model. |
| $data | `array` | Ang data ng object na iimbakin, serialized. |
| $data_unserialized | `array` | Ang data ng object na iimbakin. |
| $this | `\Base_Model` | Ang instance ng object. |

### Mula Noong

- 2.0.0
### Source

- Tinukoy sa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) sa line 613
- Tinukoy sa [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) sa line 1743
