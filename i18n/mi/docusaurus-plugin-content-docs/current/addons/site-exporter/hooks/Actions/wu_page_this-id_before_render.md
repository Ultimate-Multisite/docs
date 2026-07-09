---
id: wu_page_this-id_before_render
title: 'Mahi - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Ka whakakā i mua i te tāhuahua i tētahi whārangi motuhake.

Whakamahinga: Me whakakapi te wāhanga hihiri ki tētahi page id whaimana, hei tauira add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Ngā Tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Te id o te whārangi. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Te tauirahanga Base Admin Page. |

### Mai i

- 1.8.2
### Pūtake

Kua tautuhia ki [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) i te rārangi 368
