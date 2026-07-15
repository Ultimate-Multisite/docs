---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

有些外掛可能會儲存尚未啟用映射規則時的 URL，或是以與上述篩選器不同的方式建構 URL。

在這種情況下，我們需要新增額外的篩選器。傳入的第二個參數是 `mangle_url` 回呼函式 (callback)。我們不建議直接使用此篩選器。相反地，請使用 `Domain_Mapping::apply_mapping_to_url` 方法。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $mangle_url | `callable` | 進行變更的回呼函式。 |
| $domain_mapper | `self` | 此物件。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) 的第 530 行
