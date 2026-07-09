---
id: wu_sso_enabled
title: ตัวกรอง - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled {#filter-wussoenabled}

เปิด/ปิดความสามารถในการเข้าสู่ระบบครั้งเดียวข้ามโดเมน (cross-domain single-sign-on)

คุณสามารถใช้ตัวกรองนี้เพื่อปิดการทำงานของ single-sign-on โดยสมบูรณ์ หรือเปิดใช้งานแบบมีเงื่อนไขแทน

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | ต้องการให้ SSO ทำงานหรือไม่? กำหนดเป็น `true` เพื่อเปิดใช้งาน และกำหนดเป็น `false` เพื่อปิดใช้งาน |

### Since {#since}

- 2.0.11
### Source {#source}

กำหนดไว้ใน [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) บรรทัดที่ 110


## Returns {#returns}
ค่าว่า SSO เปิดใช้งานอยู่หรือไม่
