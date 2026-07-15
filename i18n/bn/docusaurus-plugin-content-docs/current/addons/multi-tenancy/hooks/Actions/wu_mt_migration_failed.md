---
id: wu_mt_migration_failed
title: কার্যক্রম - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

যখন মাইগ্রেশন প্রক্রিয়া ব্যর্থ হয়, তখন এটি কার্যকর হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | ব্যর্থ মাইগ্রেশন কাজটি। |
| $message | `string` | ত্রুটির বার্তা। |

### সংস্করণ {#since}

- 1.0.0
### উৎস {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720)-এ লাইন ৭২০-এ সংজ্ঞায়িত।
