---
id: wu_page_added
title: Ekintza - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Ekintza: wu_page_added

Plugin garatzaileei aukera ematen die orriak erregistratzen direnean gauza gehigarriak exekutatzeko.

wu_page_load ez bezala, zeina orri zehatz bat ikusten ari denean bakarrik exekutatzen baita, hook hau erregistroan exekutatzen da WP Ultimo kodea erabiliz gehitzen den admin orri bakoitzerako.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Orri honen IDa. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Orri honetarako sortutako hooka. |

### Noiztik

- 2.0.0
### Iturburua

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) fitxategian definitua, 203. lerroan
