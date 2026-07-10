---
id: wu_connector_enforcement_option_keys
title: 过滤器 - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# 过滤器：wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

过滤从主站点强制执行的 AI 提供商选项键列表。

添加自定义或第三方 AI 提供商插件的选项键，以便子站点也能从主站点继承这些设置。

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $keys | `string[]` | 需要强制执行的选项键名称（已包含动态发现的连接器键和 EXTRA_PROVIDER_OPTIONS）。 |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
