---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

จะทำงานหลังจากที่โดเมนได้รับการต่ออายุเรียบร้อยแล้ว

## พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | การชำระเงินที่ทำให้เกิดการต่ออายุ |
| $renewal_data | `array<string,mixed>` | ข้อมูลเมตา (metadata) ของการต่ออายุ (เช่น domain_name, years, customer_id เป็นต้น) |
| $result | `array<string,mixed>` | อาร์เรย์ผลลัพธ์ดิบที่ส่งกลับมาจากผู้จดทะเบียน (registrar) ซึ่งรวมถึง expiry_date ใหม่ |

### ตั้งแต่

- 2.0.0
### แหล่งที่มา

ถูกกำหนดไว้ใน [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ที่บรรทัด 594
