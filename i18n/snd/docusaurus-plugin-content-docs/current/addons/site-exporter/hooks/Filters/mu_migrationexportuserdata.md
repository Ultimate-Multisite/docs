---
id: mu_migrationexportuserdata
title: فلٽر - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

برآمد/درآمد ڪرڻ لاءِ user data جي ڊيفالٽ سيٽ کي Filter ڪري ٿو.

## پيرا ميٽر {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | ڪسٽم user data ايري. |
| $user | `\WP_User` | user آبجيڪٽ. |

### کان وٺي {#since}

- 0.1.0
### ذريعو {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) ۾ line 335 تي بيان ٿيل
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) ۾ line 147 تي بيان ٿيل
## واپسيون {#returns}
ايري data user.
