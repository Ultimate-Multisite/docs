---
id: wu_gocardless_cleanup_pending_site
title: فیلتر - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

این فیلتر قبل از حذف یک سایت معلق یتیم (orphaned pending site) که مربوط به یک عضویت لغو شده GoCardless است، اجرا می‌شود.

برای جلوگیری از حذف، باید مقدار `false` را از این فیلتر برگردانید.

## پارامترها

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | شناسه وبلاگ WordPress مربوط به سایت معلق. |
| $membership | `\WP_Ultimo\Models\Membership` | عضویت لغو شده. |
| $old_status | `string` | وضعیت سایت قبل از لغو. |

### از نسخه

- 2.0.0
### منبع

در [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) در خط ۱۰۸۶ تعریف شده است.
