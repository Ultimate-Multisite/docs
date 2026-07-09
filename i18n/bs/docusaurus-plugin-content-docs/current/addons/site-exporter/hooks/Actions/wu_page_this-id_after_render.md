---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Pokreće se nakon renderovanja određene stranice.

Upotreba: Dinamički dio mora biti zamijenjen sa validnim ID-om stranice, npr. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID stranice. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instanca Osnovne Admin Stranice. |

### Od verzije {#since}

- 1.8.2
### Izvor {#source}

Definisano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) na liniji 394
