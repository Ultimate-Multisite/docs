---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

የተጠቃሚው የተበጀ መረጃ (custom user data) ከመላከቱ በፊት የሚሰራ ተግባር ነው።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | የተጠቃሚው መረጃ የያዘው አርሬይ (array) ነው። |
| $user | `\WP_User` | የተጠቃሚውን ነገር (object) ነው። |

### Since {#since}

- 0.1.0
### Source {#source}

በ[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) ፋይል በ139ኛው መስመር ተገልጿል።
