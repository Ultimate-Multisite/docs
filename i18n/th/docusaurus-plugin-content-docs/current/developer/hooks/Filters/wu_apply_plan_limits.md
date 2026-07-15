---
id: wu_apply_plan_limits
title: ตัวกรอง - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

อนุญาตให้นักพัฒนาปลั๊กอินสามารถข้ามการจำกัด (limitations) ได้

คุณสามารถใช้ filter นี้เพื่อรันโค้ดใดๆ ก็ได้ก่อนที่การจำกัดใดๆ จะเริ่มทำงาน หากค่าที่ส่งคืนจาก filter นี้เป็นค่าที่ถือว่าเป็นจริง (truthy value) กระบวนการจะดำเนินต่อไป แต่ถ้าส่งคืนค่าที่ถือว่าเป็นเท็จ (falsy value) โค้ดจะหยุดทำงานและ hook ด้านล่างจะไม่ทำงานเลย

### Since {#since}

- 1.7.0
### Source {#source}

- กำหนดไว้ใน [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) บรรทัดที่ 52
- กำหนดไว้ใน [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) บรรทัดที่ 98
## Returns {#returns}
