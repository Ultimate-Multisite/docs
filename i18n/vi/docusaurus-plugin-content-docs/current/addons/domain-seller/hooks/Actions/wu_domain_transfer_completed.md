---
id: wu_domain_transfer_completed
title: Hành động - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Hành động này được kích hoạt sau khi quá trình chuyển giao tên miền hoàn tất.

## Tham số {#parameters}

| Name | Type | Mô tả |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Đối tượng tên miền. |
| $transfer_data | `array` | Dữ liệu hoàn thành việc chuyển giao. |

### Từ phiên bản {#since}

- 2.1.0
### Nguồn {#source}

Được định nghĩa trong [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) tại dòng 690
