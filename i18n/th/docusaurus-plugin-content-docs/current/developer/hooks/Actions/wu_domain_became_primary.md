---
id: wu_domain_became_primary
title: การดำเนินการ - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

จะทำงานเมื่อโดเมนใดโดเมนหนึ่งถูกกำหนดให้เป็นโดเมนหลักของเว็บไซต์

แอ็กชันนี้จะถูกเรียกใช้เมื่อมีการตั้งค่าแฟล็ก `primary_domain` เป็น `true` ไม่ว่าจะในกรณีที่สร้างโดเมนหลักใหม่ หรือเมื่อมีการอัปเดตโดเมนที่มีอยู่ให้เป็นโดเมนหลัก

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | โดเมนที่ถูกกำหนดให้เป็นโดเมนหลัก |
| $blog_id | `int` | ID ของบล็อก (blog ID) ของเว็บไซต์ที่ได้รับผลกระทบ |
| $was_new | `bool` | ระบุว่าโดเมนนี้เป็นโดเมนที่ถูกสร้างขึ้นใหม่หรือไม่ |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) บรรทัดที่ 560
