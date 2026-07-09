---
id: mu_migrationexportuserdata
title: فلتەر - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

کۆمەڵەی پێشوەختەی داتای بەکارهێنەر پاڵاوت دەکات کە هەناردە/هاوردە بکرێت.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $custom_user_data | `array` | ئەڕەی داتای تایبەتی بەکارهێنەر. |
| $user | `\WP_User` | ئۆبجێکتی بەکارهێنەر. |

### لەوەتا {#since}

- 0.1.0
### سەرچاوە {#source}

- پێناسەکراوە لە [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) لە هێڵی 335
- پێناسەکراوە لە [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) لە هێڵی 147
## دەگەڕێنێتەوە {#returns}
داتای ئەڕەی بەکارهێنەر.
