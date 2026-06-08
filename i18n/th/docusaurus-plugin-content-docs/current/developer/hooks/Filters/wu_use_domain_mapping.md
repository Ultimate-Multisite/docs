---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

ใช้เพื่อกำหนดว่าควรใช้การแมปโดเมนนี้หรือไม่

โดยทั่วไปแล้ว คุณต้องการให้ระบบใช้เฉพาะการแมปที่สถานะ "ใช้งานอยู่" เท่านั้น อย่างไรก็ตาม หากคุณต้องการใช้ตรรกะที่ซับซ้อนขึ้น หรือต้องการให้ระบบแมปโดเมนที่ไม่ได้เปิดใช้งานด้วย ก็สามารถทำการกรอง (filter) ในส่วนนี้ได้เลย

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | ควรพิจารณาว่าการแมปนี้เป็นสถานะใช้งานอยู่หรือไม่ |
| $mapping | `\Domain` | การแมปที่เรากำลังตรวจสอบ |
| $domain | `string` | |

### Source

กำหนดไว้ใน [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) บรรทัดที่ 391
