---
id: wu_bypass_checkout_form
title: ตัวกรอง - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# Filter: wu_bypass_checkout_form {#filter-wubypasscheckoutform}

ให้ผู้พัฒนาสามารถข้ามการแสดงผลเดิมและกำหนดค่าใหม่ได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $bypass | `string\|bool` | กำหนดว่าเราควรข้ามฟอร์มการชำระเงินหรือไม่ หรือเป็นสตริงที่จะส่งกลับแทนฟอร์มนั้น |
| $atts | `array` | พารามิเตอร์ของบล็อก/ชอร์ตโค้ดการชำระเงิน |

### Source {#source}

กำหนดไว้ใน [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) บรรทัดที่ 327
