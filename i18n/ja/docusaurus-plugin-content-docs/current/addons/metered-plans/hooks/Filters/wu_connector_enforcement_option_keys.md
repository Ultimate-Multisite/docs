---
id: wu_connector_enforcement_option_keys
title: フィルター - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

メインサイトから強制されるAIプロバイダーのオプションキーのリストをフィルタリングします。

カスタムまたはサードパーティのAIプロバイダープラグインのオプションキーを追加することで、その設定もサブサイトからメインサイトに継承されるようになります。

## パラメータ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | 強制したいオプションキー名（動的に検出されたコネクタキーと EXTRA_PROVIDER_OPTIONS はすでに含まれています）。 |

### Since {#since}

- 1.2.0
### Source {#source}

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) の206行目で定義されています。
