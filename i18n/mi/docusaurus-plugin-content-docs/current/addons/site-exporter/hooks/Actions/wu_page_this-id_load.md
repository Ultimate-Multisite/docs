---
id: wu_page_this-id_load
title: 'Mahi - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Whakaaetia ngā kaiwhakawhanake toronga kia tāpiri i ētahi atu matau ki tētahi whārangi motuhake.

Whakamahinga: Me whakakapi te wāhanga hihiri ki tētahi ID whārangi whaimana, hei tauira add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Te ID o tēnei whārangi. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Te matau i hangaia mō tēnei whārangi. |

### Mai i {#since}

- 1.8.2
### Pūtake {#source}

Kua tautuhia ki [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) i te rārangi 301
