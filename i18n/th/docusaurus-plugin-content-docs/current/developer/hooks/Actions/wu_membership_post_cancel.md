---
id: wu_membership_post_cancel
title: การกระทำ - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

จะทำงานหลังจากที่สมาชิกภาพถูกยกเลิก

การดำเนินการนี้จะเรียกใช้การส่งอีเมลแจ้งยกเลิก

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | ID ของสมาชิกภาพนั้นๆ |
| $membership | `\WP_Ultimo\Models\Membership` | อ็อบเจกต์สมาชิกภาพ |

### Since {#since}

- 2.0
### Source {#source}

กำหนดไว้ใน [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) บรรทัดที่ 2290
