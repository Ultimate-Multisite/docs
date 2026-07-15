---
id: mu_migrationexportuserdata
title: フィルター - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

エクスポート／インポートされる既定のユーザーデータ一式をフィルターします。

## パラメータ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | カスタムユーザーデータ配列。 |
| $user | `\WP_User` | ユーザーオブジェクト。 |

### 導入バージョン {#since}

- 0.1.0
### ソース {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) の 335 行目で定義
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) の 147 行目で定義
## 戻り値 {#returns}
ユーザーの配列データ。
