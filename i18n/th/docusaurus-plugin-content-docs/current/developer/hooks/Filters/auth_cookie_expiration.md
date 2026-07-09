---
id: auth_cookie_expiration
title: ตัวกรอง - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

ตัวกรองระยะเวลาหมดอายุของคุกกี้การยืนยันตัวตน

## พารามิเตอร์ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | ระยะเวลาหมดอายุเป็นวินาที |
| $user_id | `int` | ID ผู้ใช้ |
| $remember | `bool` | ระบุว่าจะให้จดจำการเข้าสู่ระบบของผู้ใช้หรือไม่ ค่าเริ่มต้นคือ false |

### ตั้งแต่ {#since}

- 2.8.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ที่บรรทัด 52
