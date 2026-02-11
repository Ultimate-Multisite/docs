---
id: wu_model_post_save
title: Ação - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Dispara após um objeto ser armazenado no banco de dados.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | O slug do modelo. |
| $data | `array` | Os dados do objeto que serão armazenados, serializados. |
| $data_unserialized | `array` | Os dados do objeto que serão armazenados. |
| $this | `\Base_Model` | A instância do objeto. |

### Since

- 2.0.0

### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
