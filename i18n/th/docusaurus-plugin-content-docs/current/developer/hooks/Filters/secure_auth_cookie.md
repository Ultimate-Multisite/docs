---
id: secure_auth_cookie
title: ตัวกรอง - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

ใช้สำหรับกำหนดว่าคุกกี้การยืนยันตัวตน (auth cookie) ควรถูกส่งผ่าน HTTPS เท่านั้นหรือไม่

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | กำหนดว่าคุกกี้ควรถูกส่งผ่าน HTTPS เท่านั้นหรือไม่ |
| $user_id | `int` | ID ของผู้ใช้ |

### Since {#since}

- 3.1.0
### Source {#source}

กำหนดไว้ใน [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) บรรทัดที่ 80
