---
id: wu_connector_enforcement_option_keys
title: 過濾器 - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

用於過濾從主站強制繼承的 AI 供應商選項鍵清單。

您可以新增選項鍵，讓自訂或第三方 AI 供應商外掛的設定也能從主站繼承到子站。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | 要強制繼承的選項鍵名稱（此陣列已包含動態發現的連接器鍵和 EXTRA_PROVIDER_OPTIONS）。 |

### Since {#since}

- 1.2.0
### Source {#source}

定義於 [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) 的第 206 行
