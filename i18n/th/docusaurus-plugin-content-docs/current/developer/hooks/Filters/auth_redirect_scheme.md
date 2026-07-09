---
id: auth_redirect_scheme
title: ตัวกรอง - auth_redirect_scheme
sidebar_label: auth_redirect_scheme
_i18n_hash: ee5939a809512404b9c380dd2125ce98
---
# Filter: auth_redirect_scheme {#filter-authredirectscheme}

ตัวกรองนี้ใช้สำหรับปรับเปลี่ยนรูปแบบการเปลี่ยนเส้นทาง (redirect scheme) เมื่อมีการยืนยันตัวตน

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $scheme | `string` | รูปแบบการเปลี่ยนเส้นทางสำหรับการยืนยันตัวตน ค่าเริ่มต้นเป็นค่าว่าง |

### Since {#since}

- 2.9.0
### Source {#source}

ถูกกำหนดไว้ใน [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L212) บรรทัดที่ 212
