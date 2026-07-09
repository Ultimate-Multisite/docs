---
id: wu_page_this-id_load
title: 'Aðgerð - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Leyfir plugin-hönnuðum að bæta við viðbótar-hooks á tiltekna síðu.

Notkun: Skipta þarf út breytilega hlutanum fyrir gilt síðuauðkenni, t.d. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Færibreytur

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Auðkenni þessarar síðu. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook sem búinn er til fyrir þessa síðu. |

### Síðan

- 1.8.2
### Uppruni

Skilgreint í [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) á línu 301
