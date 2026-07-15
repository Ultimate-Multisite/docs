---
id: wu_page_added
title: Hərəkət - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Plugin developerlərə səhifələr qeydiyyata alındıqda əlavə funksionallıqlar işlətməyə imkan verir.

`wu_page_load`-dan fərqli olaraq, bu hook yalnız müəyyən bir səhifə görünəndə deyil, WP Ultimo kodu ilə əlavə edilən hər bir admin səhifəsi üçün qeydiyyat zamanı işləyir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu səhifənin ID-si. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu səhifə üçün yaradılan hook. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) faylının 203-cü sətirində təyin edilmişdir.
