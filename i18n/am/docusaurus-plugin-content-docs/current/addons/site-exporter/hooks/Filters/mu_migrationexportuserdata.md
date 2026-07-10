---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

የተጠቃሚ መረጃ መደበኛ ስብስብ (default set) ሊወጣበት ወይም ሊገባበት በሚችልበት ጊዜ የሚያጣራ (filters) ነው።

## መለኪያዎች (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | የተጠቃሚው መረጃ ተቀይሮበት የሚቀመጥ አርሬይ (The custom user data array)። |
| $user | `\WP_User` | የተጠቃሚውን ነገር (user object)። |

### ከዚህ ጊዜ ጀምሮ (Since) {#since}

- 0.1.0
### ምንጭ (Source) {#source}

- በ[`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) ፋይል በ335ኛው መስመር ላይ ተገልጿል።
- በ[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) ፋይል በ147ኛው መስመር ላይ ተገልጿል።
## የሚመልሰው (Returns) {#returns}
የተጠቃሚ መረጃ አርሬይ (Array data user)።
