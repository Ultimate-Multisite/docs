---
id: wu_gocardless_cleanup_pending_site
title: فلټر - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# فلټر: wu_gocardless_cleanup_pending_site

د لغوه شوي GoCardless غړیتوب لپاره د بې‌سرپرسته پاتې سایټ تر ړنګولو مخکې اجرا کېږي.

له دې فلټر څخه false بېرته ورکړئ څو ړنګول مخنیوی شي.

## پارامیټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $blog_id | `int` | د پاتې سایټ WordPress بلاګ پېژند. |
| $membership | `\WP_Ultimo\Models\Membership` | لغوه شوی غړیتوب. |
| $old_status | `string` | له لغوه کولو مخکې حالت. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) کې په 1086 کرښه تعریف شوی.
