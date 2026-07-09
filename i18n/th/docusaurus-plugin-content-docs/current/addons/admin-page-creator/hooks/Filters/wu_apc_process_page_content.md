---
id: wu_apc_process_page_content
title: ตัวกรอง - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

ให้ผู้พัฒนาสามารถปรับแต่งเนื้อหาสุดท้ายได้

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $content | `string` | เนื้อหาหลังจากที่ทำการแทนที่ค่าแล้ว |
| $content_before_processing | `string` | เนื้อหาก่อนการแทนที่ค่า |
| $to_replace | `array` | อาร์เรย์ที่เก็บ placeholder (ตัวยึดตำแหน่ง) |
| $placeholder_count | `int` | จำนวน placeholder ที่พบ |

### ตั้งแต่ {#since}

- 1.4.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) บรรทัดที่ 46

## ค่าที่ส่งกลับ {#returns}
เนื้อหาหลังจากที่ทำการแก้ไขแล้ว
