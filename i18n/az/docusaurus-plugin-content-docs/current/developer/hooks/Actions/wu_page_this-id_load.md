---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Plugin sahiblərinin səhifələrimizə əlavə hooklar əlavə etməsinə imkan verir.

## Parametrlər

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Bu səhifənin ID-si. |
| $page_hook | `string` | Bu səhifənin səhifə hooku. |
| $admin_page | `self` | Səhifə nümunəsi (instance). |

### Nə vaxtdan

- 1.8.2
- 2.0.4: Üçüncü parametr əlavə edildi: səhifə nümunəsi.
### Mənbə

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) faylında 332-ci sətirdə təyin edilmişdir.
