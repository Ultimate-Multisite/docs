---
id: wu_page_this-id_after_render
title: 'Hohenga - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Ka rere i muri i te whakaaturanga o tētahi whārangi motuhake.

Whakamahinga: Me whakakapi te wāhanga hihiri ki tētahi id whārangi whaimana, hei tauira add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Ngā tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Te id o te whārangi. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Te tauira Base Admin Page. |

### Mai i

- 1.8.2
### Pūtake

Kua tautuhia i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) i te rārangi 394
