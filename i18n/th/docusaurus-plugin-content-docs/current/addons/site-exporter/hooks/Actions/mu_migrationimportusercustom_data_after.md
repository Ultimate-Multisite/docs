---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

จะทำงานหลังจากที่ทำการส่งออกข้อมูลผู้ใช้แบบกำหนดเองเสร็จสิ้น

## พารามิเตอร์

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | อาร์เรย์ที่เก็บข้อมูลผู้ใช้ |
| $user | `\WP_User` | อ็อบเจกต์ผู้ใช้ |

### ตั้งแต่

- 0.1.0
### แหล่งที่มา

กำหนดไว้ใน [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) บรรทัดที่ 165
