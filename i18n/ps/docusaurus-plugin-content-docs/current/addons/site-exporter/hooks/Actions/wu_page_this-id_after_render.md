---
id: wu_page_this-id_after_render
title: 'کړنه - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

د یوې ځانګړې پاڼې له رېنډر کولو وروسته چلېږي.

کارونه: متحرکه برخه باید د سمې پاڼې id سره بدله شي، د بېلګې په توګه add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | د پاڼې id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | د Base Admin Page بېلګه. |

### له نسخې راهیسې {#since}

- 1.8.2
### سرچینه {#source}

په [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) کې په 394 کرښه تعریف شوی
