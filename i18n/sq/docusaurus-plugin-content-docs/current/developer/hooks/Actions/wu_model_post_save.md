---
id: wu_model_post_save
title: Veprim - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Aktivizohet pasi një objekt ruhet në bazën e të dhënave.

## Parametrat

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $model | `string` | Slug-u i modelit. |
| $data | `array` | Të dhënat e objektit që do të ruhen, të serializuara. |
| $data_unserialized | `array` | Të dhënat e objektit që do të ruhen. |
| $this | `\Base_Model` | Instanca e objektit. |

### Që nga

- 2.0.0
### Burimi

- Përcaktuar në [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) në rreshtin 613
- Përcaktuar në [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) në rreshtin 1743
