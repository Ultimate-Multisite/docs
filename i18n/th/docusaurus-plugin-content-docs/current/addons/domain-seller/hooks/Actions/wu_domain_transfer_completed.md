---
id: wu_domain_transfer_completed
title: Action - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

จะถูกเรียกใช้หลังจากที่การโอนโดเมนเสร็จสมบูรณ์

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | อ็อบเจกต์โดเมน (domain object) |
| $transfer_data | `array` | ข้อมูลการโอนที่เสร็จสมบูรณ์ |

### Since {#since}

- 2.1.0
### Source {#source}

กำหนดไว้ใน [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) บรรทัดที่ 690
