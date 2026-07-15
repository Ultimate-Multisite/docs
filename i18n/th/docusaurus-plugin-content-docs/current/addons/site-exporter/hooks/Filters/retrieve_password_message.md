---
id: retrieve_password_message
title: ตัวกรอง - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

ใช้สำหรับกรองเนื้อหาข้อความของอีเมลรีเซ็ตรหัสผ่าน

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ข้อความอีเมลเริ่มต้น |
| $key | `string` | คีย์สำหรับเปิดใช้งาน |
| $user_login | `string` | ชื่อผู้ใช้ของบัญชี |
| $user_data | `\WP_User` | อ็อบเจกต์ WP_User |

### Since {#since}

- 2.8.0
- 4.1.0: เพิ่มพารามิเตอร์ <code>$user_login</code> และ <code>$user_data</code>
### Source {#source}

กำหนดไว้ใน [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) บรรทัดที่ 149


## Returns {#returns}
ข้อความอีเมลเริ่มต้น
