---
id: wu_domain_renewal_failed
title: Hành động - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Được kích hoạt khi nỗ lực gia hạn tên miền thất bại.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Khoản thanh toán đã kích hoạt việc gia hạn. |
| $renewal_data | `array&lt;string,mixed&gt;` | Siêu dữ liệu gia hạn (domain_name, years, v.v.). |
| $error_message | `string` | Thông báo lỗi dễ đọc từ nhà đăng ký tên miền. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) tại dòng 630
