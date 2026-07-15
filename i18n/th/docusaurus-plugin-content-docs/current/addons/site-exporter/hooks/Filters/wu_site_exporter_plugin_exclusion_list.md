---
id: wu_site_exporter_plugin_exclusion_list
title: ตัวกรอง - wu_site_exporter_plugin_exclusion_list
sidebar_label: wu_site_exporter_plugin_exclusion_list
_i18n_hash: 547f26a2bdb1117cc1616485ef4525e6
---
# Filter: wu_site_exporter_plugin_exclusion_list

ฟิลเตอร์นี้ช่วยให้นักพัฒนาสามารถจัดการรายการปลั๊กอินที่ต้องการยกเว้นไม่ให้ถูกรวมอยู่ในไฟล์ zip ที่สร้างขึ้นได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plugin_list | `array` | ปลั๊กอินที่จะถูกยกเว้น |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/class-wp-ultimo-site-exporter.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/class-wp-ultimo-site-exporter.php#L210) บรรทัดที่ 210


## Returns {#returns}
รายการปลั๊กอิน
