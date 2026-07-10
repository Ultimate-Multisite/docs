---
id: wu_sso_loaded
title: การกระทำ - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

ช่วยให้ผู้พัฒนาปลั๊กอินสามารถเพิ่ม hooks อื่น ๆ ได้ตามความจำเป็น

ส่วนนี้จำเป็นต้องหน่วงเวลาจนถึง `init` เพราะว่า SSO เป็นสิ่งที่ทำงานเมื่อถึงช่วง `sunrise`

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | คลาส SSO |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) at line 285
