---
id: wu_model_post_save
title: Tegevus - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Toiming: wu_model_post_save

Käivitub pärast seda, kui objekt on andmebaasi salvestatud.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $model | `string` | The model slug. |
| $data | `array` | The object data that will be stored, serialized. |
| $data_unserialized | `array` | The object data that will be stored. |
| $this | `\Base_Model` | The object instance. |

### Alates

- 2.0.0
### Allikas

- Määratletud failis [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) real 613
- Määratletud failis [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) real 1743
