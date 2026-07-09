---
id: wu_register_integrations
title: アクション - wu_register_integrations
sidebar_label: wu_register_integrations
_i18n_hash: 99782a2ea1ae62c0a3315cfef6720644
---
# Action: wu_register_integrations {#action-wuregisterintegrations}

統合が自ら登録できるようにするために発火します。

Core はここで統合を登録します。

## Parameters {#parameters}

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $registry | `\Integration_Registry` | レジストリインスタンスです。 |

### バージョン {#since}

- 2.5.0
### ソース {#source}

定義されている [`inc/integrations/class-integration-registry.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/integrations/class-integration-registry.php#L113) 行 113 で
