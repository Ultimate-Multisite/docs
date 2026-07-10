---
id: wu_gocardless_cleanup_pending_site
title: فلتەر - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

پێش سڕینەوەی ماڵپەڕێکی چاوەڕوانی بێ‌خاوەن بۆ ئەندامێتییەکی GoCardless کە هەڵوەشێنراوەتەوە، کار دەکات.

لە ئەم Filter ـەدا false بگەڕێنەرەوە بۆ ڕێگرتن لە سڕینەوە.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $blog_id | `int` | ناسنامەی بڵاگی WordPress ـی ماڵپەڕی چاوەڕوان. |
| $membership | `\WP_Ultimo\Models\Membership` | ئەندامێتیی هەڵوەشێنراوە. |
| $old_status | `string` | دۆخەکە پێش هەڵوەشاندنەوە. |

### لە وەشانی {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) لە دێڕی 1086
