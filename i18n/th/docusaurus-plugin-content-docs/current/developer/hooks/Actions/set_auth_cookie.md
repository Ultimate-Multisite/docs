---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

จะถูกเรียกใช้ทันทีก่อนที่คุกกี้การยืนยันตัวตนจะถูกตั้งค่า

## พารามิเตอร์

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | ค่าคุกกี้การยืนยันตัวตน |
| $expire | `int` | เวลาที่ช่วงเวลาผ่อนผันในการเข้าสู่ระบบหมดอายุ (เป็นรูปแบบ UNIX timestamp) ค่าเริ่มต้นคือ 12 ชั่วโมงหลังจากที่คุกกี้หมดอายุ |
| $expiration | `int` | เวลาที่คุกกี้การยืนยันตัวตนจะหมดอายุ (เป็นรูปแบบ UNIX timestamp) ค่าเริ่มต้นคือ 14 วันนับจากปัจจุบัน |
| $user_id | `int` | ID ผู้ใช้ |
| $scheme | `string` | กลไกการยืนยันตัวตน ค่าที่รองรับได้แก่ 'auth' หรือ 'secure_auth' |
| $token | `string` | โทเค็นเซสชันของผู้ใช้ที่จะใช้สำหรับคุกกี้นี้ |

### ตั้งแต่

- 2.5.0
- 4.9.0: ได้เพิ่มพารามิเตอร์ <code>$token</code> เข้ามา

### แหล่งที่มา

กำหนดไว้ใน [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) บรรทัดที่ 124
