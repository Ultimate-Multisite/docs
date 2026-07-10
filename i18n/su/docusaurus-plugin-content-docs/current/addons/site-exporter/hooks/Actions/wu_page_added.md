---
id: wu_page_added
title: Aksi - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Aksi: wu_page_added {#action-wupageadded}

Ngidinan pamekar pangaya pikeun ngajalankeun hal-hal tambahan nalika kaca didaptarkeun.

Béda jeung wu_page_load, anu ngan jalan nalika hiji kaca husus keur ditingali, hook ieu jalan dina waktu pendaptaran pikeun unggal kaca pangurus anu ditambahkeun maké kode WP Ultimo.

## Paraméter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID pikeun kaca ieu. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook anu dihasilkeun pikeun kaca ieu. |

### Ti Saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) dina baris 203
