---
id: wu_page_this-id_load
title: 'Aiki - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Ba masu haɓaka kari damar ƙara ƙarin hooks zuwa takamaiman shafi.

Amfani: Ana buƙatar a maye gurbin ɓangaren mai canzawa da ingantaccen page id, misali add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Sigogi

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID na wannan shafi. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook da aka samar wa wannan shafi. |

### Tun daga

- 1.8.2
### Tushe

An ayyana a cikin [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) a layi na 301
