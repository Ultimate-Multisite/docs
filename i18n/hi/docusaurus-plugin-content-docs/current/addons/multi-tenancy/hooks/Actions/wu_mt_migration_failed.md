---
id: wu_mt_migration_failed
title: Action - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

जब माइग्रेशन विफल होता है तो यह ट्रिगर होता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $job | `\Migration_Job` | विफल माइग्रेशन जॉब। |
| $message | `string` | त्रुटि संदेश। |

### कब से उपलब्ध {#since}

- 1.0.0
### स्रोत {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) में लाइन 720 पर परिभाषित है
