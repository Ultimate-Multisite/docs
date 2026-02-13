---
id: wu_magic_link_enforce_user_agent
title: フィルタ - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# フィルタ: wu_magic_link_enforce_user_agent

ユーザーエージェント検証を強制するかどうかをフィルタします。

falseに設定すると、トークンが異なるブラウザ/デバイス間で動作できるようになります。これによりセキュリティは低下しますが、使いやすさは向上します。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $enforce | `bool` | ユーザーエージェントの一致を強制するかどうか。 |

### 導入

- 2.0.0

### ソース

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
