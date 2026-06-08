---
id: wu_wp_config_reference_hook_line_patterns
title: ตัวกรอง - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

เราจะตรวจสอบรูปแบบ (patterns) ทั้งสามแบบ เมื่อพยายามหาตำแหน่งที่จะแทรกค่าคงที่ (constants) ของเรา:

1. เราจะค้นหาการกำหนดตัวแปร `$table_prefix`; 2. เราจะค้นหาการกำหนด `$table_prefix` ที่ซับซ้อนกว่านั้น เช่น แบบที่ใช้ตัวแปรสภาพแวดล้อม (env variables); 3. หากไม่มีแบบนั้น เราจะมองหาคอมเมนต์ 'Happy Publishing'; 4. หากยังไม่มี เราจะมองหาจุดเริ่มต้นของไฟล์ คีย์ (key) จะแทนรูปแบบ และค่า (value) จะแทนจำนวนบรรทัดที่จะเพิ่ม จำนวนบรรทัดที่เป็นลบสามารถใช้เพื่อเขียนก่อนบรรทัดที่พบ แทนที่จะเขียนหลังจากนั้น

### Source

กำหนดไว้ใน [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) บรรทัดที่ 143
