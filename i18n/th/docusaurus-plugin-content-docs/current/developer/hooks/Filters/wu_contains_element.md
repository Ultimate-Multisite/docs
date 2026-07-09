---
id: wu_contains_element
title: ตัวกรอง - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

ให้ผู้พัฒนาสามารถปรับเปลี่ยนผลลัพธ์ของการค้นหาเริ่มต้นได้

ฟิลเตอร์นี้มีประโยชน์สำหรับเครื่องมือสร้างเว็บไซต์ (builder) ภายนอกและกรณีอื่น ๆ

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | กำหนดว่าองค์ประกอบนั้นถูกบรรจุอยู่ในเนื้อหาหรือไม่ |
| $content | `string` | เนื้อหาที่กำลังถูกตรวจสอบ |
| $element | `self` | องค์ประกอบปัจจุบัน |
| $post | `null\|\WP_Post` | โพสต์ที่ต้องการตรวจสอบ |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) บรรทัดที่ 534
