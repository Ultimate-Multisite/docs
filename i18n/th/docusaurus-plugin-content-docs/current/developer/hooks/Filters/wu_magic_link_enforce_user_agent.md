---
id: wu_magic_link_enforce_user_agent
title: ตัวกรอง - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

ตัวกรองว่าควรบังคับตรวจสอบ User Agent หรือไม่

หากตั้งค่าเป็น false จะช่วยให้โทเค็นสามารถใช้งานได้ข้ามเบราว์เซอร์/อุปกรณ์ต่างๆ ซึ่งจะลดความปลอดภัยลง แต่เพิ่มความสะดวกในการใช้งานได้มาก

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $enforce | `bool` | ว่าจะบังคับให้ตรงกับ User Agent หรือไม่ |

### ตั้งแต่ {#since}

- 2.0.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) บรรทัดที่ 410
