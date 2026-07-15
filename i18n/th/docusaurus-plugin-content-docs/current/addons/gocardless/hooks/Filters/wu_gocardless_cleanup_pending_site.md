---
id: wu_gocardless_cleanup_pending_site
title: ตัวกรอง - wu_gocardcash_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

ตัวกรองนี้จะทำงานก่อนที่จะลบเว็บไซต์ที่ค้างอยู่ (pending site) ซึ่งไม่มีความเกี่ยวข้องแล้ว เนื่องจากมีการยกเลิกการเป็นสมาชิก GoCardless

หากต้องการป้องกันไม่ให้มีการลบ ให้ส่งค่า `false` จาก filter นี้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ID ของบล็อก WordPress ของเว็บไซต์ที่ค้างอยู่ |
| $membership | `\WP_Ultimo\Models\Membership` | ข้อมูลการเป็นสมาชิกที่ถูกยกเลิก |
| $old_status | `string` | สถานะของเว็บไซต์ก่อนที่จะมีการยกเลิก |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) บรรทัดที่ 1086
