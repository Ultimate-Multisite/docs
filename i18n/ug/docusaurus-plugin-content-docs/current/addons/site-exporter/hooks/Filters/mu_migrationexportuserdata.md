---
id: mu_migrationexportuserdata
title: سۈزگۈچ - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# سۈزگۈچ: mu_migration/export/user/data

چىقىرىلىدىغان/ئەكىرىلىدىغان كۆڭۈلدىكى ئىشلەتكۈچى سانلىق مەلۇماتلىرى توپلىمىنى سۈزۈپ بېرىدۇ.

## پارامېتىرلار {#parameters}

| نامى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $custom_user_data | `array` | خاس ئىشلەتكۈچى سانلىق مەلۇمات arrayى. |
| $user | `\WP_User` | ئىشلەتكۈچى ئوبيېكتى. |

### باشلاپ {#since}

- 0.1.0
### مەنبە {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) دا 335-قۇردا بېكىتىلگەن
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) دا 147-قۇردا بېكىتىلگەن
## قايتۇرىدۇ {#returns}
ئىشلەتكۈچى array سانلىق مەلۇماتى.
