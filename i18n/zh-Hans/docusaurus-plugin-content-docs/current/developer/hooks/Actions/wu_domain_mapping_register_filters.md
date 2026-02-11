---
id: wu_domain_mapping_register_filters
title: 动作 - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# 操作: wu_domain_mapping_register_filters

一些插件会在映射激活之前保存 URL，或以不同方式构建 URL，而这些方式未包含在上述过滤器中。

在这种情况下，我们想要添加额外的过滤器。传递的第二个参数是 mangle_url 回调。我们不建议直接使用此过滤器。相反，请使用 Domain_Mapping::apply_mapping_to_url 方法。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $mangle_url | `callable` | mangle 可调用对象 |
| $domain_mapper | `self` | 此对象 |

### Since

- 2.0.0

### Source

定义于 [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) 在第 530 行
