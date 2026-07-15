---
id: wu_domain_seller_search_delay
title: ตัวกรอง - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

ใช้สำหรับกำหนดความหน่วง (debounce delay) ในการค้นหาโดเมนเป็นหน่วยมิลลิวินาที

หากต้องการลดการเรียกใช้ API ในกรณีที่การเชื่อมต่อช้า ควรเพิ่มค่านี้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | ความหน่วงแบบดีบาวซ์ (debounce delay) เป็นมิลลิวินาที ค่าเริ่มต้นคือ 500 |

### Since {#since}

- 2.1.0
### Source {#source}

กำหนดไว้ใน [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) บรรทัดที่ 854
