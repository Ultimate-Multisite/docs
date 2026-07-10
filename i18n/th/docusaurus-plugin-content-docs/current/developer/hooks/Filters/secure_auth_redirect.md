---
id: secure_auth_redirect
title: ตัวกรอง - secure_auth_redirect
sidebar_label: secure_auth_redirect
_i18n_hash: 34c76378864becbfb9c09111120607d3
---
# Filter: secure_auth_redirect {#filter-secureauthredirect}

ใช้สำหรับกำหนดว่าควรจะใช้การเปลี่ยนเส้นทาง (redirect) การยืนยันตัวตนที่ปลอดภัยหรือไม่

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $secure | `bool` | ว่าจะใช้การเปลี่ยนเส้นทาง (redirect) การยืนยันตัวตนที่ปลอดภัยหรือไม่ ค่าเริ่มต้นคือ false |

### ตั้งแต่ {#since}

- 3.1.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L190) บรรทัดที่ 190
