---
id: wu_page_load
title: Tindakan - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

Membolehkan pembangun plugin menambah *hook* tambahan ke halaman kita.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID halaman ini. |
| $page_hook | `string` | *Hook* halaman ini. |
| $admin_page | `self` | Instans halaman. |

### Sejak {#since}

- 1.8.2
- 2.0.4: Menambah parameter ketiga: instans halaman.
### Sumber {#source}

Didefinisikan dalam [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) pada baris 318
