---
id: wu_enforce_password_rules
title: フィルタ - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

追加のパスワードルールを適用するかどうかをフィルタします。

true の場合、最小長と文字要件を強制します。 "Super Strong" 設定または Defender Pro の Strong Password 機能が有効な場合、自動的に有効になります。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $enforce_rules | `bool` | 追加のルールを適用するかどうか。 |
| $strength_setting | `string` | 管理者設定値。 |
| $defender_active | `bool` | Defender Pro Strong Password が有効かどうか。 |

### Since

- 2.4.0

### Source

定義されている [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) 行 531
