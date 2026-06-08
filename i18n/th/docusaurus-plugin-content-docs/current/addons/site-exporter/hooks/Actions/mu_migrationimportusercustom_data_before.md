---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

จะทำงานก่อนการส่งออกข้อมูลผู้ใช้แบบกำหนดเอง

## พารามิเตอร์

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $user_data | `array` | อาร์เรย์ข้อมูลผู้ใช้ |
| $user | `\WP_User` | อ็อบเจกต์ผู้ใช้ |

### ตั้งแต่

- 0.1.0
### แหล่งที่มา

ถูกกำหนดไว้ใน [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) บรรทัดที่ 139
