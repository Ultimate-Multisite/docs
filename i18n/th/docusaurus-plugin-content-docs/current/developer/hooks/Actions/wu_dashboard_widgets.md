---
id: wu_dashboard_widgets
title: Action - wu_dashboard_widgets
sidebar_label: wu_dashboard_widgets
_i18n_hash: 35b6cf5a0b5c24e4378f239bc548c44c
---
# Action: wu_dashboard_widgets

ฟังก์ชันนี้ช่วยให้ผู้พัฒนาปลั๊กอินสามารถเพิ่มวิดเจ็ต (widgets) เข้าไปในแผงควบคุมแดชบอร์ดของเครือข่าย (Network Dashboard Panel) ได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $tab | `string` | แท็บปัจจุบันที่กำลังใช้งานอยู่ |
| $screen | `\WP_Screen` | อ็อบเจกต์หน้าจอ (screen object) |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | อินสแตนซ์ของหน้าแอดมิน Ultimate Multisite |

### Since {#since}

- 2.0.0
### Source {#source}

ถูกกำหนดไว้ใน [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L225) บรรทัดที่ 225
