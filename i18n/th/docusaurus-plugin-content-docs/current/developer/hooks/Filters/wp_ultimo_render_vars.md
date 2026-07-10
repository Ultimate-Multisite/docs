---
id: wp_ultimo_render_vars
title: ตัวกรอง - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars {#filter-wpultimorendervars}

อนุญาตให้นักพัฒนาปลั๊กอินสามารถเพิ่มตัวแปรพิเศษเข้าไปในบริบทการเรนเดอร์ (render context) ได้ทั่วทั้งระบบ

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | อาร์เรย์ที่บรรจุตัวแปรที่ส่งมาจากการเรียกใช้ render |
| $view | `string` | ชื่อของมุมมอง (view) ที่จะถูกเรนเดอร์ |
| $default_view | `string` | ชื่อของมุมมองสำรอง (fallback_view) |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) บรรทัดที่ 31


## Returns {#returns}
