---
id: wu_page_added
title: Aksyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Aksyon: wu_page_added

Pèmèt devlopè ekstansyon yo kouri bagay anplis lè paj yo anrejistre.

Kontrèman ak wu_page_load, ki kouri sèlman lè y ap gade yon paj espesifik, hook sa a kouri pandan anrejistreman pou chak paj admin y ap ajoute avèk kòd WP Ultimo.

## Paramèt

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID paj sa a. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook ki jenere pou paj sa a. |

### Depi

- 2.0.0
### Sous

Defini nan [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) nan liy 203
