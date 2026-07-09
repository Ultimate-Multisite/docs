---
id: wu_page_get_title_links
title: Filter - wu_page_get_title_links
sidebar_label: wu_page_get_title_links
_i18n_hash: c0ede349078aea8e4fe06e53a12b1c38
---
# Filter: wu_page_get_title_links {#filter-wupagegettitlelinks}

ใช้สำหรับให้ผู้พัฒนาปลั๊กอิน รวมถึงตัวเราเอง สามารถเพิ่มลิงก์สำหรับดำเนินการ (action links) เข้าไปในหน้าแก้ไขได้

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $action_links | `array\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ลิงก์สำหรับดำเนินการ (action links) |
| $base_admin_page | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | อินสแตนซ์นี้ |

### ตั้งแต่ {#since}

- 1.8.2
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L646) บรรทัดที่ 646


## ค่าที่ส่งกลับ {#returns}
อาร์เรย์ของลิงก์สำหรับดำเนินการ (The actions links array.)
