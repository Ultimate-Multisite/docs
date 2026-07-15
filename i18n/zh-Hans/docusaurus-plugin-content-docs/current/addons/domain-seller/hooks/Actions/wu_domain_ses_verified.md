---
id: wu_domain_ses_verified
title: 操作 - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

当 SES 确认一个域名已通过 DKIM 验证时触发。

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | 域名对象。 |

### 自 {#since}

- 2.2.0
### 来源 {#source}

定义在 [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) 的第 480 行
