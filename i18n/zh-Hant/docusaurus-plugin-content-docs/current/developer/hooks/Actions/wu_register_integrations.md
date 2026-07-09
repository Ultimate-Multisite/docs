---
id: wu_register_integrations
title: 動作 - wu_register_integrations
sidebar_label: wu_register_integrations
_i18n_hash: 99782a2ea1ae62c0a3315cfef6720644
---
# Action: wu_register_integrations {#action-wuregisterintegrations}

觸發此動作鉤子，允許各種整合功能（integrations）進行自我註冊。

核心功能（Core）會在這裡註冊其整合功能。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $registry | `\Integration_Registry` | 註冊器實例。 |

### 適用於 {#since}

- 2.5.0
### 來源 {#source}

定義於 [`inc/integrations/class-integration-registry.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/integrations/class-integration-registry.php#L113) 的第 113 行
