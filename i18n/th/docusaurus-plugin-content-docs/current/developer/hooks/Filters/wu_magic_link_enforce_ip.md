---
id: wu_magic_link_enforce_ip
title: ตัวกรอง - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

ตัวกรองว่าต้องการบังคับตรวจสอบที่อยู่ IP หรือไม่

หากตั้งค่าเป็น false จะช่วยให้โทเค็นสามารถใช้งานได้จากเครือข่ายที่แตกต่างกัน ซึ่งจะลดความปลอดภัยลง แต่เพิ่มความสะดวกในการใช้งาน (เช่น สำหรับผู้ใช้มือถือที่เปลี่ยนเครือข่าย)

## พารามิเตอร์

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $enforce | `bool` | ว่าจะบังคับให้ IP ตรงกันหรือไม่ |

### ตั้งแต่

- 2.0.0
### แหล่งที่มา

กำหนดไว้ใน [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) บรรทัดที่ 422
