---
id: wu_ses_verification_integration
title: 过滤器 - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# 过滤器：wu_ses_verification_integration {#filter-wusesverificationintegration}

过滤器：允许其他代码提供 SES 集成对象。

返回的对象必须实现以下方法：
*   `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
*   `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
*   `delete_identity(string $domain): true\|WP_Error`

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $integration | `object\|null` | SES 集成对象，或 null。 |

### 自 {#since}

- 2.2.0
### 来源 {#source}

定义于 [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) 的第 731 行
