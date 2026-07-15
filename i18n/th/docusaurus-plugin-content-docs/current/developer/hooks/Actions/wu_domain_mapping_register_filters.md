---
id: wu_domain_mapping_register_filters
title: wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

ปลั๊กอินบางตัวอาจบันทึก URL ก่อนที่การแมปปิ้ง (mapping) จะทำงาน หรืออาจสร้าง URL ในรูปแบบที่แตกต่างออกไป ซึ่งไม่ได้รวมอยู่ในฟิลเตอร์ที่กล่าวถึงข้างต้น

ในกรณีเช่นนั้น เราต้องการเพิ่มฟิลเตอร์เพิ่มเติม พารามิเตอร์ตัวที่สองที่ส่งมาคือ `mangle_url` callback เราไม่แนะนำให้ใช้ฟิลเตอร์นี้โดยตรง แต่ควรใช้เมธอด `Domain_Mapping::apply_mapping_to_url` แทน

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $mangle_url | `callable` | ฟังก์ชันที่ใช้ในการแก้ไข (mangle callable) |
| $domain_mapper | `self` | อ็อบเจกต์นี้ |

### ตั้งแต่ {#since}

- 2.0.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) บรรทัดที่ 530
