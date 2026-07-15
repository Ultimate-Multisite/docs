---
id: wu_gocardless_cleanup_pending_site
title: فلٽر - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# فلٽر: wu_gocardless_cleanup_pending_site

منسوخ ٿيل GoCardless رڪنيت لاءِ يتيم التوا ۾ پيل سائيٽ کي ختم ڪرڻ کان اڳ هلندو آهي.

ختم ٿيڻ کان روڪڻ لاءِ هن فلٽر مان false واپس ڪريو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $blog_id | `int` | التوا ۾ پيل سائيٽ جو WordPress بلاگ ID. |
| $membership | `\WP_Ultimo\Models\Membership` | منسوخ ٿيل رڪنيت. |
| $old_status | `string` | منسوخي کان اڳ واري حالت. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ۾ لائن 1086 تي بيان ڪيل آهي.
