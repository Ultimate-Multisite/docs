---
id: wu_sso_loaded
title: アクション - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# アクション: wu_sso_loaded

必要に応じて、プラグイン開発者が追加のフックを追加できるようにします。

SSO はサンライズ時に実行されるものなので、init まで遅延させる必要があります。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $sso | `self` | SSO クラスです。 |

### バージョン

- 2.0.0

### ソース

定義済み [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) 行 285 で
