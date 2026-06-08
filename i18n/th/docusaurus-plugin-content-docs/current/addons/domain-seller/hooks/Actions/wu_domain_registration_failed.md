---
id: wu_domain_registration_failed
title: การดำเนินการ - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

จะถูกเรียกใช้เมื่อการพยายามลงทะเบียนโดเมนล้มเหลว

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ข้อมูลการชำระเงินที่ทำให้เกิดการลงทะเบียนครั้งนี้ |
| $registration_data | `array<string,mixed>` | ข้อมูลเมตา (metadata) ของการลงทะเบียน ซึ่งรวมถึงสถานะเป็น `failed` และข้อความแสดงข้อผิดพลาด |
| $error_message | `string` | ข้อความแสดงข้อผิดพลาดที่อ่านเข้าใจได้จากผู้ให้บริการจดทะเบียน (registrar) |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) บรรทัดที่ 1250
