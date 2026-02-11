---
id: wu_pre_save_settings
title: フィルタ - wu_pre_save_settings
sidebar_label: wu_pre_save_settings
_i18n_hash: 9fe0dc9f71e2d9da3869f40ab53dc453
---
# フィルタ: wu_pre_save_settings

開発者が Ultimate Multisite によって保存前に設定をフィルタリングできるようにします。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $settings | `array` | 保存される設定です。 |
| $settings_to_save | `array` | 追加する新しい設定です。 |
| $saved_settings | `array` | 現在保存されている設定です。 |

### バージョン

- 2.0.18

### ソース

定義されている [`inc/class-settings.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-settings.php#L296) は 296 行目です。
