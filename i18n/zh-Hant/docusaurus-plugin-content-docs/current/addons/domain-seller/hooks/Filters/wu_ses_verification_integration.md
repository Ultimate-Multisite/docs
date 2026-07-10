---
id: wu_ses_verification_integration
title: 篩選器 - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# 篩選器：wu_ses_verification_integration {#filter-wusesverificationintegration}

篩選器：允許其他程式碼提供 SES 整合物件。

回傳的物件必須實作以下方法：
*   `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
*   `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
*   `delete_identity(string $domain): true\|WP_Error`

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $integration | `object\|null` | SES 整合物件，或 null。 |

### 自 {#since}

- 2.2.0
### 來源 {#source}

定義於 [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) 的第 731 行
