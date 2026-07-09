---
id: get_blogs_of_user
title: ตัวกรอง - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

จำลองการทำงานของ WP Filter เดิมมาไว้ที่นี่ เพื่อให้มั่นใจว่าทำงานได้ถูกต้อง

ใช้สำหรับกรองรายการไซต์ที่ผู้ใช้คนหนึ่งเป็นเจ้าของ

## พารามิเตอร์ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | อาร์เรย์ของอ็อบเจกต์ไซต์ที่ผู้ใช้เป็นเจ้าของ |
| $user_id | `int` | ID ของผู้ใช้ |
| $all | `bool` | กำหนดว่าอาร์เรย์ไซต์ที่ส่งกลับมาควรมีไซต์ทั้งหมดหรือไม่ รวมถึงไซต์ที่ถูกทำเครื่องหมายว่า 'ลบแล้ว' (deleted), 'เก็บถาวร' (archived), หรือ 'สแปม' (spam) ค่าเริ่มต้นคือ false |

### ตั้งแต่ {#since}

- 2.0.11
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) บรรทัดที่ 851
