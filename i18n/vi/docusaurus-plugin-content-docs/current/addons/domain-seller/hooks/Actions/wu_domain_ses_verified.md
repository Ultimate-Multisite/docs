---
id: wu_domain_ses_verified
title: Hành động - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified {#action-wudomainsesverified}

Hành động này được kích hoạt khi SES xác nhận một domain đã được xác minh DKIM.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Đối tượng domain. |

### Since {#since}

- 2.2.0
### Source {#source}

Được định nghĩa trong [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) tại dòng 480
