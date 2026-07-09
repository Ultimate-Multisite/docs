---
id: wu_page_load
title: Hərəkət - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

Plugin yazıçılarının səhifələrimizə əlavə hook-lar əlavə etməsinə imkan verir.

## Parametr {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Bu səhifənin ID-si. |
| $page_hook | `string` | Bu səhifənin səhifə hook-u. |
| $admin_page | `self` | Səhifə nümunəsi (The page instance). |

### Nə vaxtdan {#since}

- 1.8.2
- 2.0.4: Üçüncü parametr əlavə edildi: səhifə nümunəsi.
### Mənbə {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) faylında 318-ci sətirində təyin edilmişdir.
