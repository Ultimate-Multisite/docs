---
id: wu_page_this-id_load
title: 'عمل - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

plugin جوړوونکو ته اجازه ورکړئ چې ځانګړې پاڼې ته اضافي hooks ورزیات کړي.

کارونه: خوځنده برخه باید د یو معتبر پاڼې پېژند سره بدله شي، لکه add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## پارامیټرونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | د دې پاڼې ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | دې پاڼې ته جوړ شوی hook. |

### له نسخې

- 1.8.2
### سرچینه

په [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) کې په 301 کرښه تعریف شوی
