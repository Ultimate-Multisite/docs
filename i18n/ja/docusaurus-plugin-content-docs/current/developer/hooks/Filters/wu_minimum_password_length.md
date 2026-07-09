---
id: wu_minimum_password_length
title: フィルタ - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# フィルタ: wu_minimum_password_length {#filter-wuminimumpasswordlength}

最小パスワード長を設定するフィルタです。

wu_enforce_password_rules が true の場合にのみ有効です。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | 最小パスワード長。デフォルトは12（Defender Pro と同じ）。 |
| $defender_active | `bool` | Defender Pro Strong Password が有効かどうか。 |

### Since {#since}

- 2.4.0

### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
