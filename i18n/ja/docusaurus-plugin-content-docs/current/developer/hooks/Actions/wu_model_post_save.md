---
id: wu_model_post_save
title: アクション - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

オブジェクトがデータベースに保存された後に発火します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | モデルのスラッグ。 |
| $data | `array` | シリアライズされた状態で保存されるオブジェクトデータ。 |
| $data_unserialized | `array` | 保存されるオブジェクトデータ。 |
| $this | `\Base_Model` | オブジェクトインスタンス。 |

### Since

- 2.0.0

### Source

- 定義されている [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) 行 613 で
- 定義されている [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) 行 1743 で
