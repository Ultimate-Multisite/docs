---
id: wu_mt_provider_log
title: アクション - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log {#action-wumtproviderlog}

プロバイダーがメッセージをログに記録するときに発火します。

## Parameters {#parameters}

| 名前 | 型 | 説明 |
|------|------|-------------|
| $message | `string` | ログメッセージ。 |
| $level | `string` | ログレベル。 |
| $context | `array` | 追加のコンテキスト。 |

### バージョン {#since}

- 1.0.0

### ソース {#source}

定義は [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) の行400で行われています。
