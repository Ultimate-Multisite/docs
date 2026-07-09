---
id: wu_this-model_post_save
title: 'Aksi - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save {#action-wuthis-modelpostsave}

Dipicu setelah sebuah objek disimpan ke dalam database.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $data | `array` | Data objek yang akan disimpan. |
| $this | `\Base_Model` | Instance objek. |
| $new | `bool` | Benar jika objek tersebut baru. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

- Didefinisikan di [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) pada baris 624
- Didefinisikan di [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) pada baris 1754
