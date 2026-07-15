---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

จะทำงานก่อนที่การต่ออายุสมาชิกจะเกิดขึ้น

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | วันที่หมดอายุใหม่ที่จะถูกตั้งค่า |
| $membership_id | `int` | ID ของสมาชิก |
| $membership | `\Membership` | อ็อบเจกต์ของสมาชิก |

### Since {#since}

- 2.0
### Source {#source}

กำหนดไว้ใน [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) บรรทัดที่ 2204
