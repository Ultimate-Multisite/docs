---
id: wu_page_this-id_load
title: 'Tindakan - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Membenarkan pembangun plugin untuk menambah *hook* tambahan ke halaman kami.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID halaman ini. |
| $page_hook | `string` | *Hook* halaman ini. |
| $admin_page | `self` | Instans halaman. |

### Since {#since}

- 1.8.2
- 2.0.4: Menambah parameter ketiga: instans halaman.
### Source {#source}

Ditakrifkan dalam [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) pada baris 332
