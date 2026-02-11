---
id: wu_cap_captcha_config
title: フィルタ - wu_cap_captcha_config
sidebar_label: wu_cap_captcha_config
_i18n_hash: 4b2098b3e8b83cdcca2c6b5098059305
---
# Filter: wu_cap_captcha_config

Cap Captcha の設定をフィルタリングします。

開発者が Cap Captcha の設定をカスタマイズできるようにします。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $config | `array` | Cap 設定配列です。 |
| $level | `string` | セキュリティレベル (fast, medium, max)です。 |

### バージョン

- 1.2.0

### ソース

定義は [`inc/class-cap-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-captcha/blob/main/inc/class-cap-provider.php#L153) の 153 行目にあります
