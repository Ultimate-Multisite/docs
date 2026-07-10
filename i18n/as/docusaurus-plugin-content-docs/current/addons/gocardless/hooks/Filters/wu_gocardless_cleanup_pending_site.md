---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

GoCardless মেম্বৰশ্বিপ বাতিল হোৱাৰ বাবে এটা বhengek (orphaned) pending site ডিলিট কৰাৰ আগতে এই filter টো কাৰ্য্য কৰে।

যদি আপুনি ডিলিট কৰা বন্ধ কৰিব বিচাৰে, তেন্তে এই filter बाट `false` রিটার্ন কৰক।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | pending site-টোৰ WordPress blog ID। |
| $membership | `\WP_Ultimo\Models\Membership` | বাতিল হোৱা মেম্বৰশ্বিপটো। |
| $old_status | `string` | বাতিল হোৱাৰ আগৰ status। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) at line 1086
