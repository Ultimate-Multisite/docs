---
id: wu_gocardless_cleanup_pending_site
title: فلٽر - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

منسوخ ڪيل GoCardless رڪنيت لاءِ يتيم التوا واري سائيٽ کي حذف ڪرڻ کان اڳ هلندو آهي.

حذف ٿيڻ کان روڪڻ لاءِ هن فلٽر مان false واپس ڪريو.

## پيرا ميٽر

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | التوا واري سائيٽ جو WordPress بلاگ ID. |
| $membership | `\WP_Ultimo\Models\Membership` | منسوخ ڪيل رڪنيت. |
| $old_status | `string` | منسوخي کان اڳ واري حالت. |

### کان وٺي

- 2.0.0
### ذريعو

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ۾ لائن 1086 تي بيان ٿيل آهي
