---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

ਇਹ ਕਿਸੇ ਖਾਸ ਪੇਜ ਨੂੰ ਰੈਂਡਰ ਕਰਨ ਤੋਂ ਬਾਅਦ ਚੱਲਦਾ ਹੈ।

ਵਰਤੋਂ: ਇਸ ਦੇ ਡਾਇਨਾਮਿਕ ਹਿੱਸੇ ਨੂੰ ਇੱਕ ਵੈਧ ਪੇਜ ID ਨਾਲ ਬਦਲਣਾ ਪਵੇਗਾ, ਜਿਵੇਂ ਕਿ। add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## ਪੈਰਾਮੀਟਰਾਂ {#parameters}

| ਨਾਮ | ਕਿਸਮ | ਵੇਰਵਾ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ਪੇਜ ਦੀ ID। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ਦਾ ਇੰਸਟੈਂਸ। |

### ਕਦੋਂ ਤੋਂ {#since}

- 1.8.2
### ਸਰੋਤ {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ਵਿੱਚ ਲਾਈਨ 394 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ
