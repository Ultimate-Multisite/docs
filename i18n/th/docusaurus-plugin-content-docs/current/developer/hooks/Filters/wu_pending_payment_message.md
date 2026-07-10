---
id: wu_pending_payment_message
title: ตัวกรอง - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

ให้ผู้ใช้สามารถปรับเปลี่ยนข้อความที่แสดงเกี่ยวกับรายการชำระเงินที่รอดำเนินการได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ข้อความที่จะแสดงผล |
| $customer | `\WP_Ultimo\Models\Customer` | ข้อมูลลูกค้าปัจจุบัน |
| $pending_payments | `array` | รายการของรายการชำระเงินที่รอดำเนินการ |

### Since {#since}

- 2.0.19
### Source {#source}

ถูกกำหนดไว้ใน [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ที่บรรทัด 244
