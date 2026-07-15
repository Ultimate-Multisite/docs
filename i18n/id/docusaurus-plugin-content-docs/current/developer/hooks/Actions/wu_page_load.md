---
id: wu_page_load
title: Aksi - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Memungkinkan pengembang plugin untuk menambahkan *hook* tambahan ke halaman kita.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID halaman ini. |
| $page_hook | `string` | *Hook* halaman ini. |
| $admin_page | `self` | Instance halaman. |

### Since {#since}

- 1.8.2
- 2.0.4: Menambahkan parameter ketiga: instance halaman.
### Source {#source}

Didefinisikan di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) pada baris 318
