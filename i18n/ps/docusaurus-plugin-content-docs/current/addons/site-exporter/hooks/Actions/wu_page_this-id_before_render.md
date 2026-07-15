---
id: wu_page_this-id_before_render
title: 'کړنه - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

د یوې ځانګړې پاڼې له ښودلو مخکې چلېږي.

کارونه: خوځنده برخه باید د معتبرې پاڼې id سره بدله شي، لکه add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | د پاڼې id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | د بنسټیزې ادارې پاڼې نمونه. |

### له نسخې راهیسې {#since}

- 1.8.2
### سرچینه {#source}

په [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) کې په 368 کرښه تعریف شوی.
