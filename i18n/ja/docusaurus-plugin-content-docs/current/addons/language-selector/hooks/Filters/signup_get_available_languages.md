---
id: signup_get_available_languages
title: フィルタ - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# Filter: signup_get_available_languages

フロントエンドサイトのサインアップ用に利用可能な言語のリストをフィルタリングします。

空の配列をこのフックに渡すと、サインアップフォーム上の設定の出力が無効になり、サイト作成時にデフォルト言語が使用されます。既にインストールされていない言語は除外されます。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | 利用可能な言語。 |

### Since

- 4.4.0
### Source

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) at line 125
