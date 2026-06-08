---
id: add_user_to_blog
title: การดำเนินการ - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

จะทำงานทันทีหลังจากที่มีการเพิ่มผู้ใช้เข้าสู่เว็บไซต์

## พารามิเตอร์ (Parameters)

| Name | Type | คำอธิบาย (Description) |
|------|------|-------------|
| $user_id | `int` | ID ของผู้ใช้ |
| $role | `string` | บทบาทของผู้ใช้ |
| $blog_id | `int` | ID ของบล็อก |

### ตั้งแต่ (Since)

- MU: MU
### แหล่งที่มา (Source)

- กำหนดไว้ใน [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) บรรทัดที่ 174
