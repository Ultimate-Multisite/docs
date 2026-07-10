---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Dipicu setelah sebuah objek disimpan ke dalam database.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $model | `string` | Slug model. |
| $data | `array` | Data objek yang akan disimpan, diserialisasi. |
| $data_unserialized | `array` | Data objek yang akan disimpan. |
| $this | `\Base_Model` | Instansi objek. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

- Didefinisikan di [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) pada baris 613
- Didefinisikan di [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) pada baris 1743
