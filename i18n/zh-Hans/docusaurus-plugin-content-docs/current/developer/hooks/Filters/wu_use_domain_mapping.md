---
id: wu_use_domain_mapping
title: 过滤 - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# 过滤器：wu_use_domain_mapping

确定是否应使用映射

通常，您只想允许使用活动映射。然而，如果您想使用更高级的逻辑，或者允许非活动域也被映射，只需在此处进行过滤。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $is_active | `bool` | 是否应将映射视为活动？ |
| $mapping | `\Domain` | 我们正在检查的映射 |
| $domain | `string` |  |

### 源码

定义在 [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) 第 391 行
