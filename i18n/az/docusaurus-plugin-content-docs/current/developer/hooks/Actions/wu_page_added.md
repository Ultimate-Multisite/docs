---
id: wu_page_added
title: Hərəkət - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Plugin developerlarına səhifələr qeydiyyata alındıqda əlavə əməliyyatlar yerinə yetirməyə imkan verir.

`wu_page_load`-dan fərqli olaraq, bu hook yalnız müəyyən bir səhifə görünəndə işləmir; o, Ultimate Multisite kodu ilə əlavə edilən hər bir admin səhifəsi üçün qeydiyyat zamanı işləyir.

## Parametrlər

| Ad | Növ | Təsvir |
|------|------|-------------|
| $page_id | `string` | Bu səhifənin ID-si. |
| $page_hook | `string` | Bu səhifənin hook adı. |

### Nə vaxtdən

- 2.0.0
### Mənbə

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
