---
id: wu_magic_link_url
title: Filter - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# Filter: wu_magic_link_url {#filter-wumagiclinkurl}

ใช้ตัวกรองนี้เพื่อปรับเปลี่ยน URL ลิงก์เวทมนตร์ที่ระบบสร้างขึ้น

## พารามิเตอร์ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $magic_link | `string` | URL ลิงก์เวทมนตร์. |
| $user_id | `int` | ID ผู้ใช้. |
| $site_id | `int` | ID ไซต์. |
| $redirect_to | `string` | URL สำหรับเปลี่ยนเส้นทาง. |

### ตั้งแต่ {#since}

- 2.0.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148) บรรทัดที่ 148
