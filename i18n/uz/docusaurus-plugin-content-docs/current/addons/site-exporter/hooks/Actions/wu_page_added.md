---
id: wu_page_added
title: Amal - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Amal: wu_page_added {#action-wupageadded}

Plagin ishlab chiquvchilariga sahifalar roʻyxatdan oʻtkazilganda qoʻshimcha ishlarni bajarishga ruxsat beradi.

Faqat muayyan sahifa koʻrilayotganda ishlaydigan wu_page_load dan farqli ravishda, bu hook WP Ultimo kodi yordamida qoʻshilayotgan har bir admin sahifa uchun roʻyxatdan oʻtkazish vaqtida ishlaydi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ushbu sahifaning IDsi. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ushbu sahifa uchun yaratilgan hook. |

### Beri {#since}

- 2.0.0
### Manba {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) faylida 203-qatorda belgilangan
