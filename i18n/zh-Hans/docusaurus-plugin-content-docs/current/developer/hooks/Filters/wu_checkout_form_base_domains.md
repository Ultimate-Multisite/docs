---
id: wu_checkout_form_base_domains
title: 过滤器 - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# 过滤器：wu_checkout_form_base_domains

过滤共享结账表单基础域名，使其不应成为映射域名记录。

当某个集成项为结账表单 **Site URL** 字段提供额外的基础域名时，请使用此过滤器。此过滤器返回的域名会被视为共享注册主机，而不是每个站点的自定义域名。

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $domains | `array` | 从结账表单配置中收集的共享基础域名。 |

### 自版本 {#since}

- 2.13.0

### 来源 {#source}

定义于 `inc/functions/domain.php`。


## 返回 {#returns}

规范化后的结账表单基础域名数组。
