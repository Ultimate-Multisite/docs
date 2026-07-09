---
id: wu_page_added
title: Дејство - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Овозможува на развивачите на plugin да извршуваат дополнителни работи кога страниците се регистрираат.

За разлика од wu_page_load, кој се извршува само кога се гледа конкретна страница, овој hook се извршува при регистрација за секоја admin страница што се додава со код на Ultimate Multisite.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID на оваа страница. |
| $page_hook | `string` | Името на hook-от на оваа страница. |

### Од верзија

- 2.0.0
### Извор

Дефинирано во [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) на линија 228
