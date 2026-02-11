---
id: wu_model_post_save
title: Actie - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Activeert nadat een object in de database is opgeslagen.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $model | `string` | De model slug. |
| $data | `array` | De objectgegevens die opgeslagen zullen worden, geserialiseerd. |
| $data_unserialized | `array` | De objectgegevens die opgeslagen zullen worden. |
| $this | `\Base_Model` | De objectinstantie. |

### Since

- 2.0.0

### Source

- Gedefinieerd in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Gedefinieerd in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
