---
id: wu_should_create_domain_record_for_site
title: 篩選器 - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

篩選 Ultimate Multisite 是否應為新建立的站台建立網域記錄。

使用此 filter 可針對使用共用 checkout-form 基礎網域、內部主機，或由另一個整合另行管理之網域的站台，抑制或延後自動建立網域記錄。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | 是否應建立網域記錄。 |
| $site | `WP_Site` | 新建立的站台物件。 |

### 自 {#since}

- 2.13.0

### 來源 {#source}

定義於 `inc/functions/domain.php`。


## 傳回 {#returns}

布林值，表示是否建立網域記錄。
