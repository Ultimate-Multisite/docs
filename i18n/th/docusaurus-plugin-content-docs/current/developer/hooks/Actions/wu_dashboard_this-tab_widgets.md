---
id: wu_dashboard_this-tab_widgets
title: 'Action - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_{$this->tab}_widgets

อนุญาตให้ผู้พัฒนาปลั๊กอินสามารถเพิ่มวิดเจ็ต (widgets) เข้าไปในหน้าแดชบอร์ดของเครือข่าย (Network Dashboard Panel) ได้

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $tab | `string` | แท็บปัจจุบันที่กำลังใช้งานอยู่ |
| $screen | `\WP_Screen` | อ็อบเจกต์หน้าจอ (screen object) |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | อินสแตนซ์ของหน้าแอดมิน Ultimate Multisite |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) บรรทัดที่ 214
