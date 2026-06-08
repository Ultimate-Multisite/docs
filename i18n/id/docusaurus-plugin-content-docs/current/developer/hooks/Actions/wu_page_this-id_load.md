---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Memungkinkan pengembang plugin untuk menambahkan hook tambahan ke halaman kita.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID dari halaman ini. |
| $page_hook | `string` | Hook halaman dari halaman ini. |
| $admin_page | `self` | Instance halaman. |

### Sejak

- 1.8.2
- 2.0.4: Menambahkan parameter ketiga: instance halaman.
### Sumber

Didefinisikan di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) pada baris 332
