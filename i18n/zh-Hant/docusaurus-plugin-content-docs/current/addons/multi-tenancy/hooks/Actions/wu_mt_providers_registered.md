---
id: wu_mt_providers_registered
title: 動作 - wu_mt_providers_registered
sidebar_label: wu_mt_providers_registered
_i18n_hash: 20d07d793895ff5da997696e1fc94f5d
---
# Action: wu_mt_providers_registered {#action-wumtprovidersregistered}

在預設提供者註冊完成後觸發。

您可以使用此 hook 來註冊自訂的提供者。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $manager | `\Provider_Manager` | 提供者管理器實例。 |

### Since {#since}

- 1.0.0
### Source {#source}

定義於 [`inc/managers/class-provider-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/managers/class-provider-manager.php#L93) 第 93 行
