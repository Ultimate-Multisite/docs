---
id: wu_mt_providers_registered
title: Action - wu_mt_providers_registered
sidebar_label: wu_mt_providers_registered
_i18n_hash: 20d07d793895ff5da997696e1fc94f5d
---
# Action: wu_mt_providers_registered

จะถูกเรียกใช้หลังจากที่ระบบได้ลงทะเบียน provider เริ่มต้นทั้งหมดเรียบร้อยแล้ว

คุณสามารถใช้ hook นี้เพื่อลงทะเบียน provider ที่คุณกำหนดเองได้

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $manager | `\Provider_Manager` | อินสแตนซ์ของตัวจัดการ provider |

### Since

- 1.0.0
### Source

ถูกกำหนดไว้ใน [`inc/managers/class-provider-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/managers/class-provider-manager.php#L93) ที่บรรทัด 93
