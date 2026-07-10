---
id: wu_page_load
title: การกระทำ - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load {#action-wupageload}

ให้ผู้พัฒนาปลั๊กอินสามารถเพิ่ม hook พิเศษเข้าไปในหน้าของเราได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ของหน้านี้ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | hook ที่ถูกสร้างขึ้นสำหรับหน้านี้ |

### Since {#since}

- 1.8.2
### Source {#source}

กำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) บรรทัดที่ 289
