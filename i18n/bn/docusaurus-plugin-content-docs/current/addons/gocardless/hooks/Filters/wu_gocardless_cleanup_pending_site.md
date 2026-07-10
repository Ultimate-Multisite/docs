---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

এটি একটি বাতিল GoCardless মেম্বারশিপের জন্য একটি অনাথ (orphaned) পেন্ডিং সাইট মুছে ফেলার আগে কার্যকর হয়।

মুছে ফেলা আটকাতে এই ফিল্টার থেকে `false` রিটার্ন করুন।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | পেন্ডিং সাইটটির WordPress ব্লগ আইডি। |
| $membership | `\WP_Ultimo\Models\Membership` | বাতিল করা মেম্বারশিপটি। |
| $old_status | `string` | বাতিল করার আগের স্ট্যাটাস। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) at line 1086
