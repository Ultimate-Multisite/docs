---
id: wu_hosting_integration_wizard_sections
title: ตัวกรอง - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

ใช้สำหรับกรองส่วนต่างๆ ของวิซาร์ด (wizard) ในการตั้งค่าการเชื่อมต่อโฮสติ้ง

ช่วยให้แอดออนสามารถเพิ่ม ลบ หรือแก้ไขส่วนต่างๆ ของวิซาร์ดได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | ส่วนต่างๆ ของวิซาร์ด (Wizard sections) |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | การเชื่อมต่อ (integration) ที่กำลังถูกตั้งค่า |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | อินสแตนซ์ของหน้าวิซาร์ด (wizard page instance) |

### Since {#since}

- 2.5.0
### Source {#source}

กำหนดไว้ใน [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) บรรทัดที่ 196
