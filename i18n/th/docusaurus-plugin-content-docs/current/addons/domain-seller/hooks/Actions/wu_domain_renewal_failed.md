---
id: wu_domain_renewal_failed
title: การดำเนินการ - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

จะถูกเรียกใช้เมื่อการพยายามต่ออายุโดเมนล้มเหลว

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | การชำระเงินที่ทำให้เกิดการต่ออายุ |
| $renewal_data | `array&lt;string,mixed&gt;` | ข้อมูลเมตา (metadata) ของการต่ออายุ (เช่น ชื่อโดเมน, จำนวนปี ฯลฯ) |
| $error_message | `string` | ข้อความแสดงข้อผิดพลาดที่มนุษย์อ่านได้จากผู้จดทะเบียน (registrar) |

### Since

- 2.0.0
### Source

ถูกกำหนดไว้ใน [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) บรรทัดที่ 630
