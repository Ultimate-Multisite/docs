---
id: wu_should_create_domain_record_for_site
title: 过滤器 - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

筛选 Ultimate Multisite 是否应为新创建的站点创建域名记录。

使用此筛选器可为使用共享结账表单基础域名、内部主机或由其他集成单独管理的域名的站点，禁止或延迟自动创建域名记录。

## 参数 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | 是否应创建域名记录。 |
| $site | `WP_Site` | 新创建的站点对象。 |

### 自 {#since}

- 2.13.0

### 来源 {#source}

定义于 `inc/functions/domain.php`。


## 返回值 {#returns}

表示是否创建域名记录的布尔值。
