---
id: get_site_url_for_previewer
title: フィルタ - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# フィルタ: get_site_url_for_previewer

プラグイン開発者がプレビューで使用されるURLをフィルタリングできるようにします

## Parameters

| Name | Type | 説明 |
|------|------|------|
| $domain | `string` | 現在使用中のデフォルトドメイン。操作に便利です |
| $domain_options | `array` | Ultimate Multisite Settings -> ネットワーク設定 -> ドメインオプションに入力されたすべてのドメインオプションのリスト |

### Since

- 1.7.2

### Source

定義済み [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) は 812 行目にあります

## Returns

使用される新しいドメイン
