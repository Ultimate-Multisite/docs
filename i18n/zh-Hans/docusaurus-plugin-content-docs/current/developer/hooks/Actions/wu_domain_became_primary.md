---
id: wu_domain_became_primary
title: 操作 - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# 动作: wu_domain_became_primary

当域名成为站点的主域名时触发。

此动作在域名的 primary_domain 标志被设置为 true 时触发，无论是创建新的主域名还是将现有域名更新为主域名。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | 成为主域名的域名。 |
| $blog_id | `int` | 受影响站点的博客 ID。 |
| $was_new | `bool` | 是否为新创建的域名。 |

### 自

- 2.0.0

### 源码

定义于 [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) 在第 560 行
