---
id: wu_domain_seller_complete_registration
title: การดำเนินการ - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

จะถูกเรียกใช้เมื่อการชำระเงินเปลี่ยนสถานะเป็นสถานะที่ควรจะกระตุ้นให้มีการลงทะเบียนโดเมน

## พารามิเตอร์ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | อ็อบเจกต์การชำระเงิน |
| $old_status | `string` | สถานะการชำระเงินก่อนหน้าที่จะเปลี่ยนสถานะ |

### ตั้งแต่ {#since}

- 2.0.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) บรรทัดที่ 266
