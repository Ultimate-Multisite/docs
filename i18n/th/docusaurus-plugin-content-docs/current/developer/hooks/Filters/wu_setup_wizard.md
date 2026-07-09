---
id: wu_setup_wizard
title: ตัวกรอง - wu_setup_wizard
sidebar_label: wu_setup_wizard
_i18n_hash: dc634d6e39db4ee62d4b90237fe06c40
---
# Filter: wu_setup_wizard {#filter-wusetupwizard}

อนุญาตให้นักพัฒนาเพิ่มขั้นตอนตัวช่วยตั้งค่า (setup wizard) ได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | ส่วนต่างๆ ที่มีอยู่แล้ว (Current sections). |
| $is_migration | `bool` | ระบุว่าเป็นการย้ายข้อมูลหรือไม่ (If this is a migration or not). |
| $wizard | `object` | อินสแตนซ์ปัจจุบันของตัวช่วยตั้งค่า (The current instance). |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/admin-pages/class-setup-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-setup-wizard-admin-page.php#L525) บรรทัดที่ 525


## Returns {#returns}
