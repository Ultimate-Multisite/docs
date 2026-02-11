---
id: mu_migrationimportusercustom_data_before
title: ''
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

カスタムユーザーデータをエクスポートする前に発火します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | ユーザーデータ配列。 |
| $user | `\WP_User` | ユーザーオブジェクト。 |

### Since

- 0.1.0

### Source

定義されている [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) 行 139 で
