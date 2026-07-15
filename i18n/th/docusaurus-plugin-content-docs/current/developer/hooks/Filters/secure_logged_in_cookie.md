---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

ตัวกรองว่าคุกกี้สำหรับผู้ใช้ที่ล็อกอินควรถูกส่งผ่าน HTTPS เท่านั้นหรือไม่

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ระบุว่าคุกกี้สำหรับผู้ใช้ที่ล็อกอินควรถูกส่งผ่าน HTTPS เท่านั้นหรือไม่ |
| $user_id | `int` | ID ของผู้ใช้ |
| $secure | `bool` | ระบุว่าคุกกี้การยืนยันตัวตนควรถูกส่งผ่าน HTTPS เท่านั้นหรือไม่ |

### ตั้งแต่ {#since}

- 3.1.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) บรรทัดที่ 91
