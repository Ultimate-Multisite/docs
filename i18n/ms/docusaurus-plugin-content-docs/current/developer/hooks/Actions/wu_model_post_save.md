---
id: wu_model_post_save
title: Tindakan - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Dijalankan selepas objek disimpan ke dalam pangkalan data.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $model | `string` | Slug model. |
| $data | `array` | Data objek yang akan disimpan, diserialkan. |
| $data_unserialized | `array` | Data objek yang akan disimpan. |
| $this | `\Base_Model` | Contoh objek. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

- Ditakrifkan dalam [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) pada baris 613
- Ditakrifkan dalam [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) pada baris 1743
