---
id: wu_page_added
title: Veprim - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Lejoni zhvilluesit e plugin-ve të ekzekutojnë gjëra shtesë kur faqet regjistrohen.

Ndryshe nga wu_page_load, i cili ekzekutohet vetëm kur po shihet një faqe specifike, ky hook ekzekutohet gjatë regjistrimit për çdo faqe administrimi që shtohet duke përdorur kodin WP Ultimo.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ja e kësaj faqeje. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook-u i gjeneruar për këtë faqe. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) në rreshtin 203
