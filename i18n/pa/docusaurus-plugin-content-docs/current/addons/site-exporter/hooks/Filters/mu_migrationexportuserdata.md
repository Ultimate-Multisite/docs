---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

ਇਸ ਫਿਲਟਰ ਨਾਲ ਉਪਭੋਗਤਕ ਡਾਟਾ ਦੇ ਡਿਫਾਲਟ ਸੈੱਟ ਨੂੰ export/import ਕਰਨ ਲਈ ਫਿਲਟਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | ਕਸਟਮ ਉਪਭੋਗਤਕ ਡਾਟਾ ਦਾ ਐਰੇ। |
| $user | `\WP_User` | ਉਪਭੋਗਤਕ (user) ਆਬਜੈਕਟ। |

### Since {#since}

- 0.1.0
### Source {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) ਵਿੱਚ ਲਾਈਨ 335 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) ਵਿੱਚ ਲਾਈਨ 147 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।
## Returns {#returns}
ਉਪਭੋਗਤਕ ਡਾਟਾ ਵਾਲਾ ਐਰੇ।
