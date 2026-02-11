---
id: wu_username_from_email
title: フィルタ - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email

新規顧客のユーザー名をフィルタリングします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | 顧客のユーザー名。 |
| $email | `string` | 新規顧客のメールアドレス。 |
| $new_user_args | `array` | 新規ユーザーの引数の配列。ファーストネームとラストネームを含む場合があります。 |
| $suffix | `string` | ユーザー名に文字列を追加して一意にします。 |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) at line 516
