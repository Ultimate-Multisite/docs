---
id: wu_domain_registration_failed
title: Hành động - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Được kích hoạt sau khi một nỗ lực đăng ký tên miền thất bại.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Thanh toán đã kích hoạt việc đăng ký. |
| $registration_data | `array&lt;string,mixed&gt;` | Siêu dữ liệu đăng ký, bao gồm trạng thái=thất bại và thông báo lỗi. |
| $error_message | `string` | Thông báo lỗi dễ đọc từ nhà đăng ký (registrar). |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa tại [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ở dòng 1250
