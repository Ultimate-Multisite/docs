---
id: wu_mt_migration_failed
title: कृती - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

जेव्हा स्थलांतरण (migration) अयशस्वी होते, तेव्हा हे ट्रिगर होते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | अयशस्वी झालेले स्थलांतरण कार्य (migration job). |
| $message | `string` | त्रुटी संदेश (Error message). |

### Since {#since}

- 1.0.0
### Source {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) मध्ये लाइन ७२० वर परिभाषित केले आहे.
