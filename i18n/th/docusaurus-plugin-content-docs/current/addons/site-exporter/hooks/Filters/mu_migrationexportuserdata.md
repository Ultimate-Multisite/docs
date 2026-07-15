---
id: mu_migrationexportuserdata
title: ตัวกรอง - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

ใช้สำหรับกรองชุดข้อมูลผู้ใช้เริ่มต้นที่จะถูกส่งออกหรือนำเข้า

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | อาร์เรย์ข้อมูลผู้ใช้ที่กำหนดเอง |
| $user | `\WP_User` | อ็อบเจกต์ผู้ใช้ |

### Since {#since}

- 0.1.0
### Source {#source}

- กำหนดไว้ใน [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) บรรทัดที่ 335
- กำหนดไว้ใน [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) บรรทัดที่ 147
## Returns {#returns}
อาร์เรย์ข้อมูลผู้ใช้
