---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

ตัวกรองหัวข้อของอีเมลรีเซ็ตรหัสผ่าน

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $title | `string` | หัวข้ออีเมลเริ่มต้น |
| $user_login | `string` | ชื่อผู้ใช้ (username) ของผู้ใช้ |
| $user_data | `\WP_User` | อ็อบเจกต์ WP_User |

### ตั้งแต่ {#since}

- 2.8.0
- 4.4.0: เพิ่มพารามิเตอร์ <code>$user_login</code> และ <code>$user_data</code>
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) บรรทัดที่ 135


## ค่าที่ส่งกลับ {#returns}
หัวข้ออีเมลเริ่มต้น
