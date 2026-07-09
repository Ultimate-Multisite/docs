---
id: wu_model_post_save
title: Aksi - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Aksi: wu_model_post_save

Dijalankeun sanggeus hiji obyék disimpen kana database.

## Paraméter

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $model | `string` | Slug modél. |
| $data | `array` | Data obyék anu bakal disimpen, geus diserialisasi. |
| $data_unserialized | `array` | Data obyék anu bakal disimpen. |
| $this | `\Base_Model` | Instansi obyék. |

### Ti saprak

- 2.0.0
### Sumber

- Ditetepkeun dina [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) dina garis 613
- Ditetepkeun dina [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) dina garis 1743
