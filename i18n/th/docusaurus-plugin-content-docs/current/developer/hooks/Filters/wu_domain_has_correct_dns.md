---
id: wu_domain_has_correct_dns
title: ตัวกรอง - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

ให้ผู้พัฒนาปลั๊กอินสามารถเพิ่มการตรวจสอบใหม่ ๆ เพื่อกำหนดผลลัพธ์ได้

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $result | `bool` | ผลลัพธ์ปัจจุบัน |
| $domain | `self` | อินสแตนซ์โดเมนปัจจุบัน |
| $domains_and_ips | `array` | รายการโดเมนและ IP ที่พบจากการตรวจสอบ DNS |

### ตั้งแต่ {#since}

- 2.0.4
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) ที่บรรทัด 455


## ค่าที่ส่งกลับ {#returns}
ว่าการตั้งค่า DNS นั้นถูกต้องหรือไม่
