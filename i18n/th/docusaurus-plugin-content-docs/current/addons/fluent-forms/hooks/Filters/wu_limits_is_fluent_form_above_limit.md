---
id: wu_limits_is_fluent_form_above_limit
title: ตัวกรอง - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

ใช้สำหรับตรวจสอบว่า form type ที่ระบุได้รับอนุญาตภายใต้ plan นี้หรือไม่ และอนุญาตให้ developer ของ plugin สามารถปรับเปลี่ยนค่าที่ส่งกลับได้

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | ค่าที่ระบุว่า form type นั้นเกินขีดจำกัดหรือไม่ |
| $form_type | `string` | form type ที่กำลังถูกตรวจสอบ |
| $form_count | `int` | จำนวน form ปัจจุบัน |
| $quota | `int` | โควต้าที่อนุญาต |

### ตั้งแต่

- 1.0.0
### แหล่งที่มา

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
