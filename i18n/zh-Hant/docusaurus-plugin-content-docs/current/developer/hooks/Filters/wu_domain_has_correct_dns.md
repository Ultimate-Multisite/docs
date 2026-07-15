---
id: wu_domain_has_correct_dns
title: 過濾器 - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# 篩選器：wu_domain_has_correct_dns

允許外掛開發者新增檢查，以定義結果。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $result | `bool` | 目前的結果。 |
| $domain | `self` | 目前的網域實例。 |
| $domains_and_ips | `array` | 從 DNS 查詢中找到的網域和 IP 位址列表。 |

### 自 {#since}

- 2.0.4
### 來源 {#source}

定義於 [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) 第 455 行


## 回傳值 {#returns}
判斷 DNS 是否正確設定。
