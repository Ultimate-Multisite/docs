---
id: wu_page_this-id_before_render
title: 'Radnja - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Pokreće se prije renderiranja određene stranice.

Upotreba: Dinamički dio treba zamijeniti valjanim ID-jem stranice, npr. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID stranice. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instanca Base Admin Page. |

### Od

- 1.8.2
### Izvor

Definirano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) u retku 368
