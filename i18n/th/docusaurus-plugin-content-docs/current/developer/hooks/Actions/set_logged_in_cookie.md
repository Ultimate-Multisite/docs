---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

จะทำงานทันทีก่อนที่คุกกี้สำหรับยืนยันตัวตนว่าล็อกอินแล้วจะถูกตั้งค่า

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | ค่าของคุกกี้ที่ระบุว่าล็อกอินแล้ว |
| $expire | `int` | เวลาที่ช่วงเวลาผ่อนผันการล็อกอินหมดอายุ โดยเป็นรูปแบบ UNIX timestamp ค่าเริ่มต้นคือ 12 ชั่วโมงหลังจากที่คุกกี้หมดอายุ |
| $expiration | `int` | เวลาที่คุกกี้สำหรับยืนยันตัวตนว่าล็อกอินแล้วจะหมดอายุ โดยเป็นรูปแบบ UNIX timestamp ค่าเริ่มต้นคือ 14 วันนับจากนี้ |
| $user_id | `int` | ID ผู้ใช้ |
| $scheme | `string` | รูปแบบการยืนยันตัวตน ค่าเริ่มต้นคือ 'logged_in' |
| $token | `string` | โทเค็นเซสชันของผู้ใช้ที่จะใช้สำหรับคุกกี้นี้ |

### Since

- 2.6.0
- 4.9.0: ได้เพิ่มพารามิเตอร์ <code>$token</code> เข้ามา

### Source

กำหนดไว้ใน [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) บรรทัดที่ 141
