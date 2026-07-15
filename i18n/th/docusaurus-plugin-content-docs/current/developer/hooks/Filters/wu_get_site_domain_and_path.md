---
id: wu_get_site_domain_and_path
title: ตัวกรอง - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

อนุญาตให้นักพัฒนาสามารถปรับเปลี่ยนคู่โดเมน/พาธ (domain/path pairs) ได้

สิ่งนี้มีประโยชน์สำหรับหลายกรณี เช่น การตั้งค่าสภาพแวดล้อมสำหรับทดสอบ (staging solution) หรือการใช้เซิร์ฟเวอร์ที่แตกต่างกัน เป็นต้น

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | อ็อบเจกต์ปัจจุบันที่มีคีย์โดเมนและพาธ |
| $path_or_subdomain | `string` | พาธ/ซับโดเมนเดิมที่ส่งมายังฟังก์ชัน |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) บรรทัดที่ 235


## Returns {#returns}
อ็อบเจกต์ที่มีคีย์โดเมนและพาธ
