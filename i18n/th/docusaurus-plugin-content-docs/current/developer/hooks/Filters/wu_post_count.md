---
id: wu_post_count
title: ฟิลเตอร์ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

อนุญาตให้นักพัฒนาปลั๊กอินสามารถเปลี่ยนจำนวนรวมของโพสต์ได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | จำนวนโพสต์รวมทั้งหมด |
| $post_counts | `object` | อ็อบเจกต์ที่ส่งกลับจากฟังก์ชัน `wp_count_posts` ของ WordPress |
| $post_type | `string` | สลัก (slug) ของประเภทโพสต์ |

### Since {#since}

- 1.9.1
### Source {#source}

กำหนดไว้ใน [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) บรรทัดที่ 136


## Returns {#returns}
จำนวนรวมใหม่
