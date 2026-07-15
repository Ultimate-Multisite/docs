---
id: wp_ultimo_skip_network_active_check
title: ตัวกรอง - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

อนุญาตให้นักพัฒนาสามารถข้ามการตรวจสอบการเปิดใช้งานเครือข่ายได้

ฟิลเตอร์นี้มีประโยชน์เมื่อคุณใช้ระบบที่อิงกับ composer หรือการตั้งค่าแบบกำหนดเองอื่นๆ เช่น Bedrock ซึ่งโดยปกติแล้วการใช้ปลั๊กอินในรูปแบบ mu-plugins จะเป็นเรื่องปกติ

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | กำหนดว่าเราควรข้ามการตรวจสอบหรือไม่ โดยค่าเริ่มต้นคือ `false` |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) บรรทัดที่ 272


## Returns {#returns}
ส่งค่า `true` หากคุณต้องการข้ามการตรวจสอบ หรือส่งค่า `false` หากไม่ต้องการ
