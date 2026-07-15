---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

ใช้ตัวกรองนี้เพื่อกำหนดรายการคีย์ตัวเลือก (option keys) ของผู้ให้บริการ AI ที่ถูกบังคับใช้จากเว็บไซต์หลัก

คุณสามารถเพิ่มคีย์ตัวเลือกสำหรับปลั๊กอินผู้ให้บริการ AI ที่สร้างขึ้นเองหรือของบุคคลที่สาม เพื่อให้การตั้งค่าเหล่านั้นถูกสืบทอดมาจากเว็บไซต์หลักไปยังไซต์ย่อยด้วย

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | ชื่อคีย์ตัวเลือกที่ต้องการบังคับใช้ (ซึ่งรวมคีย์คอนเน็กเตอร์ที่ค้นพบแบบไดนามิกและ EXTRA_PROVIDER_OPTIONS อยู่แล้ว) |

### Since {#since}

- 1.2.0
### Source {#source}

กำหนดไว้ใน [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) บรรทัดที่ 206
