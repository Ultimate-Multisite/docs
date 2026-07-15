---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

จะทำงานเมื่อมีการลงทะเบียนโดเมนสำเร็จแล้ว

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ข้อมูลการชำระเงินที่ทำให้เกิดการลงทะเบียนนี้ |
| $registration_data | `array&lt;string,mixed&gt;` | ข้อมูลเมตาของการลงทะเบียน (เช่น domain_name, provider_id, years, expiry_date, ฯลฯ) |
| $result | `array&lt;string,mixed&gt;` | อาร์เรย์ผลลัพธ์ดิบที่ส่งกลับมาจากผู้รับจดทะเบียน (registrar) |

### Since {#since}

- 2.0.0
### Source {#source}

ถูกกำหนดไว้ใน [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) บรรทัดที่ 1204
