---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

จะทำงานเมื่อมีการดำเนินการซื้อโดเมนหลังจากที่ลูกค้าชำระเงินเสร็จสมบูรณ์แล้ว

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | อ็อบเจกต์ข้อมูลการชำระเงิน |
| $checkout_data | `array&lt;string,mixed&gt;` | ข้อมูลการชำระเงินทั้งหมดที่มาจากแบบฟอร์มสมัครสมาชิก |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) บรรทัดที่ 246
